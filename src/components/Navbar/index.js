import React, { Component } from "react";
import Search from "./NavbarContent/Search";
import YourCampus from "./NavbarContent/YourCampus";
import Parking from "./NavbarContent/Parking";
import Information from "./NavbarContent/Information";
import Houseguide from "./NavbarContent/Houseguide";
import AboutUs from "./NavbarContent/AboutUs";

import Main from '../Main/Main';
import HamburgerNavigation from '../Main/HamburgerNavigation';


import "./index.css";

class Navbar extends Component {
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
  render() {
    return (
      <div className={this.state.toggle ? "Navbar open" : "Navbar closed"}>
        {this.state.toggle ? (
        <ul className="StaticMenu">
          <Search />
          <YourCampus />
          <Information />
          <Parking />
          <Houseguide />
          <AboutUs />

            <Main></Main>
            <HamburgerNavigation></HamburgerNavigation>
        </ul> ) : ""}



        <button
          className={this.state.toggle ? "nav-toggle active" : "nav-toggle "}
          onClick={this.eventHandler}
        >
          <span />
        </button>


      </div>
    );
  }
}
export default Navbar;
