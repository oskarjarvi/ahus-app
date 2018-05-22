import React, { Component } from 'react';
import base from '../base';
class HomeForWorkers extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
logout(){
  base.auth().signOut();
}


  render(){
    return(
      <div>
      Du är inloggad
      <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}
export default HomeForWorkers;
