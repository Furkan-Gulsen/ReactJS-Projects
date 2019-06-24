import React, { Component } from 'react'
import classes from './modalBox.css';

class ModalBox extends Component {
  render() {
    return (
      <div className={classes.body}>
        <div className={classes.box}>
          <h2>Pizza Order Section</h2>
          <div className={classes.summary}>
            <div className={classes.left}>
              <b>Pizza Price</b>
            </div>
            <div className={classes.right}>
              <b>: {this.props.totalPrice} $</b>
            </div>
          </div>
          <h5 style={{marginTop:'20px'}}>Payment Method</h5>
          <div className={classes.payment}>
            <label>
              <input type='radio' name='pay' checked="checked" />
              Pay at the door
            </label>
            <label>
              <input type='radio' name='pay' />
              Credit card
            </label>
          </div>
          <div className={classes.buttons}>
            <button className={classes.cancel}>CANCEL</button> 
            <button onClick={ () => alert("Order completed successfully.")} className={classes.confirm}>CONFIRM</button> 
          </div>
        </div>
      </div>
    )
  }
}

export default ModalBox;
