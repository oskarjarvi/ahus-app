import React, { Component } from 'react';
import base from '../base';
import Login from './Login'
import HomeForWorkers from './HomeForWorkers'


class Button extends Component {
  constructor(props){
    super(props);
    this.state={
      user:{},
    }
  }
componentDidMount(){
  this.authListener();
}

  authListener() {
    base.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });

      } else {
        this.setState({ user: null});
      }
    });
  }

  render(){
    return (
      <div className="signInButton">
      {this.state.user ? (<HomeForWorkers /> ): (<Login />)}
      </div>
    )
  }
}

export default Button;
