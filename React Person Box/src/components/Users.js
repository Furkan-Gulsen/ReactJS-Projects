import React, { Component } from 'react'
import Navbar from "./Navbar";
import PropTypes from "prop-types";

class Users extends Component {
    render() {
        const {persons,deletePerson} = this.props;
        console.log(persons)
        return (
        <div>
            {
                persons.map( person => {
                    return(
                        <Navbar
                            key = {person.id}
                            id = {person.id}
                            name = {person.name}
                            surname = {person.surname}
                            job = {person.job}
                            deletePerson = {deletePerson}
                        />
                    )
                } )
            }
        </div>
        )
    }
}

Users.propTypes = {
    persons: PropTypes.array.isRequired,
    deletePerson: PropTypes.func.isRequired
}

export default Users;