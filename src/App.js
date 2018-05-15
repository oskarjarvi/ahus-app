import React, { Component } from 'react';
import TransitionGroup from "react-transition-group/TransitionGroup";
import Main from './components/Main/Main';
import Sidebar from './components/Sidebar/Sidebar';

import Navigation from './components/Sidebar/Navigation';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import './App.css';

const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        <div className="TopBar">
        <Sidebar>
        </Sidebar>
        <Navigation></Navigation>
          </div>


  </header>
        <Navbar />
      </div>
    );
  }
}

export default App;
