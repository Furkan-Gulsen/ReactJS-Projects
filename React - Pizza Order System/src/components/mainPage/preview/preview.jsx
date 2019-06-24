import React from 'react';
import Wrap from "../../../wrap/wrap";
import classes from "./preview.css";

// images
import EggBased from '../../../images/eggBased.png';
import BackTomato from '../../../images/tomatoBased.png';



class Preivew extends React.Component{

  getStyle = (style) => {
    return{
      backgroundImage: `url(${style})`,
      backgroundSize: "cover",
      width: "600px",
      height: "600px",
      transition: ".5s"
    }
  };

  getBase = () => this.props.contents.base.map(value => Object.values(value)[0]);
  getContents = () => this.props.contents.contents.map(value => Object.values(value)[0]);
  setBase = () => {
    // getBase()[0] ---> tomato base
    // getBase()[1] ---> egg base
    if(this.getBase()[0] === true){
      return(
        <div style={this.getStyle(BackTomato)}></div> )
      }else{ return( <div style={this.getStyle(EggBased)}></div>) }
  };
  isVisible = () => {
    return(
      this.props.contents.contents.map( value => {
          // console.log(value)
          // Object.keys(value)[0]
          // console.log(Object.values(value)[0])
          if(Object.keys(value)[0] === "mushroom" ){
            if(Object.values(value)[0] === true){
              return(<div className={classes.Mushroom}></div>);
            }else{return false}
          };
          if(Object.keys(value)[0] === "olive" ){
            if(Object.values(value)[0] === true){
              return(<div className={classes.Olive}></div>);
            };
          };
          if(Object.keys(value)[0] === "greenPepper" ){
            if(Object.values(value)[0] === true){
              return(<div className={classes.GreenPepper}></div>);
            };
          };
          if(Object.keys(value)[0] === "sausage" ){
            if(Object.values(value)[0] === true){
              return(<div className={classes.Sausage}></div>);
            };
          };
          if(Object.keys(value)[0] === "tomato" ){
            if(Object.values(value)[0] === true){
              return(<div className={classes.Tomato}></div>);
            };
          };
          if(Object.keys(value)[0] === "redPapper" ){
            if(Object.values(value)[0] === true){
              return(<div className={classes.RedPepper}></div>);
            };
          };

      })
    )
  }

  render(){
    return(
      <Wrap>
        <div className={classes.imageBox}>
          <div  className={classes.image}>
            {this.setBase()}
            {/* {console.log(this.props.contents)} */}
            {/* <div className={classes.Mushroom}></div> */}
            {this.isVisible()}
          </div>
        </div>
      </Wrap>
    )
  } 
};

export default Preivew;
