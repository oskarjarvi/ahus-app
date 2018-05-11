import React, { Component } from 'react';
import './HamburgerIconStyle.css'
class HamburgerIcon extends Component {
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
        <a className={this.state.toggle ? 'nav-toggle active' : 'nav-toggle '} onClick={this.eventHandler} >
        <span></span>
        </a>
      </div>
    )
  }
}

export default HamburgerIcon;
