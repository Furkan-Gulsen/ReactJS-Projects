import React from 'react';
import './App.css';
import Navbar from "../Components/Navbar";

class App extends React.Component{
  state = {
    // header 
    header_h2__bold: "React",
    header_title: "Login System",
    header_info: "Lorem Ipsum dolar...",

    // main
    main_title: "Login to our site",
    main_info: "Enter your username and password to log on",
  }

  render(){
    const state = this.state;
    return(
      <div className="container mt-5" >
        <Navbar
          header_h2__bold = {state.header_h2__bold}
          header_title = {state.header_title}
          header_info = {state.header_info}
          main_title = {state.main_title}
          main_info = {state.main_info}
        />  
      </div>
    )
  }
}

export default App;