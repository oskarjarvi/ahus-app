import React, { Component } from 'react';
import Button from './Button';
import './index.css';
class LoginLink extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.eventHandler = this.eventHandler.bind(this);
    }
    eventHandler(event) {
    this.setState((prevState) => ({
        toggle: !prevState.toggle
      })
    );
    }
  render(){
    return (
      <div className={this.state.toggle ? "loginLink Active" : "loginLink "} onClick={this.eventHandler}>
      {this.state.toggle ? <Button />:<p>LOGGA IN SOM ANSTÄLLD</p>}

      </div>
    )
  }
}

export default LoginLink;
