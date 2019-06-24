import React from "react";
import classes from "./buttons.css";
import ModalBox from '../../modalBox/modalBox';
import Wrap from '../../../wrap/wrap'


class Buttons extends React.Component{
  state = {
    prices: [
      {mushroom: 2.00},
      {olive: 3.00},
      {greenPepper: 2.50},
      {sausage: 5.00},
      {tomato: 4.00},
      {redPapper: 2.50}
    ],
    isVisible: false
  };

  totalPriceResult = () => {
   var totalPrice = 25.00;
   this.props.mount.contents.map(arr => {
    if(Object.values(arr)[0] === false){
      this.state.prices.map( val => {
        if( Object.keys(val)[0] === Object.keys(arr)[0]){
          totalPrice -= Object.values(val)[0];
        }
      })
     }else if(Object.values(arr)[0] === true){
      this.state.prices.map( val => {
        if( Object.keys(val)[0] === Object.keys(arr)[0]){
          totalPrice += Object.values(val)[0];
        }
      })
     }
   })
   return totalPrice;
  };


  isVisibleModalBox = () => {
    this.setState({
      isVisible: !this.state.isVisible
    });
  }

  render(){
    return(
      <Wrap>
      <div className={classes.Buttons}>
        <h3 className={classes.Price}>
          Total Price:  {this.totalPriceResult()}$
        </h3>
        <button className={classes.Button} onClick={this.isVisibleModalBox}  style={{marginLeft: "20px",outline:"none"}}>ORDER</button>
      </div>
      {
        this.state.isVisible 
        ?
        <ModalBox totalPrice={this.totalPriceResult()} base={this.props.mount.base} />
        : null 
      }
      

      </Wrap>

    )
  }
}

export default Buttons;