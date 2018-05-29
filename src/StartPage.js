import React, { Component } from "react";
import Main from "./components/Main/Main";
import HamburgerNavigation from "./components/Main/HamburgerNavigation";

class StartPage extends Component {
  constructor(props) {
    super(props);
  }
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
