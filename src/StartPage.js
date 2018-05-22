import React, { Component } from "react";
import Main from "./components/Main/Main";
import HamburgerNavigation from "./components/Main/HamburgerNavigation";

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
