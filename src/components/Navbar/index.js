import React, { Component } from "react";
import Main from "../Main/Main";
import HamburgerNavigation from "../Main/HamburgerNavigation";

import { Link } from "react-router-dom";

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
  // <Search />
  // <YourCampus />
  // <Information />
  // <Parking />
  // <Houseguide />
  // <AboutUs />
    // {this.state.toggle ? <Link onClick={this.eventHandler} /> : ""}
  render() {
    console.log(this.state.toggle);
    return (
      <div className={this.state.toggle ? "Navbar open" : "Navbar closed"}>
        {this.state.toggle ? (
        <ul>
          <li>Sök</li>
          <li>Ditt Campus</li>
          <li>Hyresgästinformation</li>
          <li>Parkering</li>
          <li>Husguider</li>
          <li>Om oss</li>

          <Main></Main>
          <HamburgerNavigation></HamburgerNavigation>
        </ul> ) : ("")}

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
