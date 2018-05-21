import React, { Component } from "react";
import Main from "./components/Main/Main";
import HamburgerNavigation from "./components/Main/HamburgerNavigation";
import { Link } from "react-router-dom";

class StartPage extends Component {
  render() {
    return (
      <div>
        <Main />
        <HamburgerNavigation />
      </div>
    )
  }
}
export default StartPage;
