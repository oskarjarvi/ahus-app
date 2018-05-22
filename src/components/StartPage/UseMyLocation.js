import React, { Component } from 'react';
import MyFancyComponent from './Container';

class UseMyLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    };
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }


  render(){
    return(
      <div>


        {this.state.toggle ? (
          <div>
            <MyFancyComponent></MyFancyComponent>
          </div>) : <div onClick={this.eventHandler}>Använd min position</div>}

      </div>

)
  }
}


export default UseMyLocation;
