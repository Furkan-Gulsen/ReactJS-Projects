  import React from 'react';
  import classes from "./mainPage.css";
  import Radio from '@material-ui/core/Radio';

  import Checkbox from '@material-ui/core/Checkbox';
  import Preview from "./preview/preview";
  import Buttons from "./buttons/buttons";


  class MainPage extends React.Component{
    state = {
      base: [ {tomato: false}, {egg: true} ],
      contents: [
        {mushroom: false},
        {olive: false},
        {greenPepper: false},
        {sausage: false},
        {tomato: false},
        {redPapper: false},
      ],
      selectBase: "tomato"
    };


    handleBaseChange = (event) => {
      console.log(this.state.base)
      this.setState({
        selectBase: event.target.value
      });
      var myBase = this.state.base.map(value => Object.values(value)[0]);
      if(this.state.selectBase === "tomato"){ this.setState({ base: [{tomato: true},{egg: false}] })}
      if(this.state.selectBase === "egg"){ this.setState({ base: [{tomato: false},{egg: true}] })}
      console.log(this.state.selectBase)
    }



    handleChanges = name => event => {
      this.setState({
        ...this.state,
        contents: this.state.contents
          .map(obj => name in obj ? {[name]: event.target.checked} : obj)
      })
      console.log(this.state)
    }

    render(){
      return(
        <div className={classes.MainPage}>
        <Preview contents={this.state}/>
        <div className={classes.OptionsBox}>
          <div className={classes.Options}>
            <h2>REACT PIZZA ORDER SYSTEM</h2><br></br>
          <div>
          <h4 className={classes.Title}>Pizza Base</h4>
            <div className={classes.BaseBox} onChange={this.handleBaseChange}>
              <label className={classes.Label1}>
                <Radio
                  checked={this.state.selectBase === 'tomato'}
                  value="tomato"
                  color="default"
                  name="pizzaBase"
                />
                Egg
              </label>
              <label className={classes.Label2}>
                <Radio
                  checked={this.state.selectBase === 'egg'}
                  color="default"
                  value="egg"
                  name="pizzaBase"
                />
                Tomato  
              </label>
            </div>
          </div>
          <h4 className={classes.Title}>Pizza Contents</h4>
          <div className={classes.Labels}>
            <div className={classes.LeftLabel}>
              <label>
                <Checkbox checked={this.state.contents.mushroom} onChange={this.handleChanges('mushroom')} 
                          color="default" value="mushroom"/>Mushroom
              </label>
              <label>
                <Checkbox checked={this.state.contents.olive} onChange={this.handleChanges('olive')} 
                          color="default" value="olive"/>Olive
              </label>
              <label>
                <Checkbox checked={this.state.contents.greenPepper} onChange={this.handleChanges('greenPepper')} 
                          color="default" value="greenPepper"/>Green Pepper
              </label>
            </div>
            <div className={classes.RightLabel}>
              <label>
                <Checkbox checked={this.state.contents.sausage} onChange={this.handleChanges('sausage')} 
                          color="default" value="sausage"/>Sausage
              </label>
              <label>
                <Checkbox checked={this.state.contents.tomato} onChange={this.handleChanges('tomato')} 
                          color="default" value="tomato"/>Tomato
              </label>
              <label>
                <Checkbox checked={this.state.contents.redPapper} onChange={this.handleChanges('redPapper')} 
                          color="default" value="redPapper"/>Red Pepper
              </label>
            </div>
          </div>
            <Buttons mount={this.state} />
          </div>
        </div>
      </div>
      )
    }
  };

  export default MainPage;


  