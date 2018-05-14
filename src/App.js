import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import TransitionGroup from "react-transition-group/TransitionGroup";

import ErrorReport from './ErrorReport';
import EventPage from './EventPage';

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
        </header>
        <div className="TopBar">
          <Link to="/ErrorReport">ErrorReport</Link>
          <Link to="/EventPage">EventPage</Link>
          </div>
            <Route
              path="/errorreport"
              children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
              {match && <ErrorReport {...rest} />}
            </TransitionGroup>
            )}/>
            <Route
              path="/eventpage"
              children={({ match, ...rest }) => (
              <TransitionGroup component={firstChild}>
              {match && <EventPage {...rest} />}
            </TransitionGroup>
            )}/>
        <Navbar />
      </div>
    );
  }
}

export default App;
