import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import StartPage from './StartPage';
import Navigation from './components/Sidebar/Navigation';

import Navbar from './components/Navbar';
import './App.css';

class App extends Component {
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
      <div className="App">
        <header>

        </header>
          {this.state.toggle ?
            ( <div className="SidebarPosition">
            <Sidebar>
            </Sidebar>
            <Navigation></Navigation>
                <Navbar />
              </div>) :
          ( <div>
            <StartPage></StartPage>
          </div> ) }

          <button onClick={this.eventHandler}>testetet</button>

      </div>
    );
  }
}

export default App;
