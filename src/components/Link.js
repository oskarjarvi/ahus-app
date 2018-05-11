import React, { Component } from 'react';
import base from './base';
import Button from './Button';
class Link extends Component {
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
      <div className="SignInButton">
      {this.state.toggle ? <Button />: <p onClick={this.eventHandler}>Inlogg för användare</p>}

      </div>
    )
  }
}

export default Link;
