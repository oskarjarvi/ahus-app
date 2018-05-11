import React, { Component } from 'react';
import Link from '../Link'
import HamburgerIcon from './NavbarContent/HamburgerIcon'
import './index.css';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
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
    return(
        <div  className={this.state.toggle ? 'Navbar open' : 'Navbar closed'}>
          {this.state.toggle ? <ul>
                    <li>Sök</li>
                    <li>Ditt campus</li>
                    <li>Hyresgästinformation</li>
                    <li>Parkering</li>
                    <li>Husguider</li>
                    <li>Om oss</li>
                    {this.state.toggle ?<Link onClick={this.eventHandler}/> : '' }
                    <button onClick={this.eventHandler}>navbar</button>
                  </ul> :  <button onClick={this.eventHandler}>navbar</button>}

                  <HamburgerIcon  onClick={this.eventHandler}/>

        </div>
    );
  }
}
export default Navbar;
