import React, { Component } from 'react';
import TransitionGroup from "react-transition-group/TransitionGroup";


import MyFancyComponent from './components/StartPage/Container';
import Sidebar from './components/Sidebar/Sidebar';
import StartPage from './StartPage';
import Navigation from './components/Sidebar/Navigation';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
  // constructor(){
  //   super();
  //   this.setLocation= this.setLocation.bind(this);
  //   this.state = {
  //     authenticated: false,
  //     campusLocation: null
  //   }
  // }
  //
  // setLocation(location) {
  //   if (location) {
  //     this.setState({
  //       campusLocation: location,
  //       authenticated: true
  //     })
  //   } else {
  //     this.setState({
  //       campusLocation: null,
  //       authenticated: false
  //     })
  //   }
  // }


  // componentWillMount() {
  //
  //   if (location) {
  //     this.setState({
  //       authenticated: true,
  //       campusLocation: location
  //     })
  //   } else {
  //     this.setState({
  //       authenticated: false,
  //       campusLocation: null
  //     })
  //   }
  // }


  render() {
    return (
      <div className="App">
        <header>
          <MyFancyComponent></MyFancyComponent>
        </header>
        <div className="rectangle">
        </div>
        <div className="SidebarPosition">
        <Sidebar>
        </Sidebar>
        <Navigation></Navigation>


        </div>



        <Navbar />
      </div>
    );
  }
}

export default App;
