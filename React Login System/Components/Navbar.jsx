import React from 'react';
import LoginControl from "./LoginControl";
import "./NavbarStyle.css";


class Navbar extends React.Component {
  constructor(props){
    super(props);
  }


  render() {
    const {header_h2__bold, header_title, header_info, main_title, main_info} = this.props;
    return (
      <div className="main_box">

        <div className="main_box--header">
          <h2><b>{header_h2__bold}</b> {header_title} </h2>
          <p>{header_info}</p>
        </div>

        <div className="main_box--main">
        <div className="main_box--main--title">
            <h4>{main_title}</h4>
            <p>{main_info}</p>
          </div>
          <LoginControl />
        </div>
      </div>
    )
  }
} 

export default Navbar;