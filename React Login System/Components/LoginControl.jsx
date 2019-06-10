import React from 'react';
import Welcome from "./Welcome";
import Signup from "./Signup"

class LoginControl extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      users: [
        { username:"code", password:"blogger" },
        { username:"true", password:"codes" },
        { username:"furkan", password:"gulsen" }
      ],
      welcomeConnect: false,
      trueUsername: "",
      isSign: false,
      isSignUp: false
    }
    this.new = this.props;
  }


  Control = () => {
    var newState = this.state.users.concat(this.new.newUser)
    if(this.new.newUser !== undefined){
      this.setState({
        users:  newState
      })
    }

    var username = document.getElementById("username");
    var password = document.getElementById("password");
    this.state.users.map( (user) => {
      if(user.username === username.value && user.password === password.value){
        return(
          this.setState({
            welcomeConnect: true,
            trueUsername: user.username,
          })
        )
      }
    })
  };

  SignUp = () => {this.setState({isSign: true})};


  render(){
    return(
      <div>
      {
        this.state.welcomeConnect 
        ? 
          <Welcome uName={this.state.trueUsername}/>
        :
          (
            this.state.isSign ?
            <Signup dataState={this.state} isClick={this.state.welcomeConnect} />
            : 
            <div className="main_box--main--login">
              <input type="text" id="username" 
              className="form-control"
              placeholder="username" 
              autoComplete="false"/>  
              <input type="password" 
              id="password" className="
              form-control" 
              placeholder="password"/>
              <button className="btn btn-success" onClick={this.Control}>LOGIN</button>
              <p onClick={this.SignUp}
                style={{textAlign:"center",color:"#262626",marginTop:"-5px",cursor:"pointer"}}>Sign Up</p>
            </div>
          ) 

      }
      </div>

    )
  }
}

export default LoginControl;
