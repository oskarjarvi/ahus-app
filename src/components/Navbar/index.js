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
      navbar: false
    };
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler(event) {
    this.setState(prevState => ({
      navbar: !prevState.navbar
    }));
  }
  render() {
    return (
      <div className={this.state.navbar ? "navbar Open" : "navbar Closed"}>
        {this.state.navbar ? (
        <ul className="staticMenu">
          <Search />
          <YourCampus />
          <Information />
          <Service />
          <Houseguide />
          <AboutUs />

            <Main></Main>
            <HamburgerNavigation></HamburgerNavigation>
        </ul> ) : <ul className="staticMenu Closed"> </ul>}



        <button
          className={this.state.navbar ? "navToggle Active" : "navToggle "}
          onClick={this.eventHandler}
        >
          <span />
        </button>


      </div>
    );
  }
}
export default Navbar;
