import React, { Component } from "react";
import Search from "./NavbarContent/Search/Search";
import YourCampus from "./NavbarContent/YourCampus/YourCampus";
import Service from "./NavbarContent/Service/Service";
import Information from "./NavbarContent/Information/Information";
import Houseguide from "./NavbarContent/Houseguide/Houseguide";
import AboutUs from "./NavbarContent/AboutUs/AboutUs";

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
      <div className={this.state.toggle ? "navbar Open" : "navbar Closed"}>
        {this.state.toggle ? (
        <ul className="staticMenu">
          <Search />
          <YourCampus />
          <Information />
          <Service />
          <Houseguide />
          <AboutUs />

            <Main></Main>
            <HamburgerNavigation></HamburgerNavigation>
        </ul> ) : ""}



        <button
          className={this.state.toggle ? "navToggle Active" : "navToggle "}
          onClick={this.eventHandler}
        >
          <span />
        </button>


      </div>
    );
  }
}
export default Navbar;
