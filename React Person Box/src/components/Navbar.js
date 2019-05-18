import React, { Component } from 'react'

class Navbar extends Component {
    static defaultProps = {
        name: "No information",
        surname: "No information",
        job: "No information"
    }
    constructor(props){
        super(props);
        this.state = {
            isVisible: false
        };
        this.onClickEvent = this.onClickEvent.bind(this);
        this.onDeletePerson = this.onDeletePerson.bind(this);
    }

    onClickEvent(){
        this.setState({
            isVisible: !this.state.isVisible
        })
    }

    onDeletePerson(){
        const {id,deletePerson} = this.props;
        deletePerson(id);
    }

    render() {
        const {id,name,surname,job} = this.props;
        const {isVisible} = this.state;
        return (
        <div>
            <div className="modals">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header bg-dark text-light">
                    <h5 className="modal-title" 
                        onClick={this.onClickEvent}
                        style={{
                            cursor:"pointer",
                            userSelect: "none"
                        }}>User Card {id}</h5>
                    <button type="button" 
                            className="close" 
                            data-dismiss="modal" 
                            aria-label="Close" 
                            style={{outline:"none"}}>
                    <span className="text-light" aria-hidden="true" onClick={this.onDeletePerson}>&times;</span>
                    </button>
                </div>
                {
                    isVisible ?
                        <div className="modal-body">
                            <p><b>NAME:</b> {name} </p>
                            <p><b>SURNAME:</b> {surname} </p>
                            <p><b>JOB:</b> {job} </p>
                        </div>
                    : null
                }

                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default Navbar;