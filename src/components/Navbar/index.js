import React, { Component } from 'react';
import Link from '../Link'
import Search from './NavbarContent/Search'
import YourCampus from './NavbarContent/YourCampus'
import Information from './NavbarContent/Information'
import Parking from './NavbarContent/Parking'
import Houseguide from './NavbarContent/Houseguide'
import AboutUs from './NavbarContent/AboutUs'

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
    console.log(this.state.toggle);
    return(
        <div  className={this.state.toggle ? 'Navbar open' : 'Navbar closed'}>
          {this.state.toggle ?
            <ul>
                    <Search />
                    <YourCampus />
                    <Information />
                    <Parking />
                    <Houseguide />
                    <li>Om oss</li>
                    {this.state.toggle ?<Link onClick={this.eventHandler}/> : '' }
                    <button className={this.state.toggle ? 'nav-toggle active' : 'nav-toggle '} onClick={this.eventHandler}><span></span></button>
                  </ul> :  <button className={this.state.toggle ? 'nav-toggle ' : 'nav-toggle active'} onClick={this.eventHandler}><span></span></button>}


        </div>
    );
  }
}
export default Navbar;
