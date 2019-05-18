import React, { Component } from 'react';
import Users from "./components/Users";

import "./App.css"


class App extends Component{
  state = {
    persons: [
      {
        id: 1,
        name: "Furkan",
        surname: "Gulsen",
        job: "Software Engineer"
      },
      {
        id: 2,
        name: "Zeynep",
        surname: "Gulsen",
        job: "Data Scientist"
      },
      {
        id: 3,
        name: "Alex",
        surname: "Allen",
        job: "Industrial Engineer"
      }
    ]
  }
  deletePerson = (id) => {
    this.setState({
      persons : this.state.persons.filter( person => id !== person.id )
    })
  }
  render(){
    return(
      <div>
        <Users 
          deletePerson = {this.deletePerson} 
          persons = {this.state.persons} 
          />
      </div>
    )
  }
}



export default App;