import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import StartPage from './StartPage';
import Navigation from './components/Sidebar/Navigation';
import HeaderHomePage from './components/Header';
import School from './components/School';
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homepage: false
    };
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler(event) {
    this.setState(prevState => ({
      homepage: !prevState.homepage
    }));
  }




  render() {
    return (
      <div className="App">
        <header>

        </header>
          {this.state.homepage ?
            ( <div>
              <HeaderHomePage></HeaderHomePage>
              <School></School>
              <div className="sidebarPosition">
                <Sidebar>
                </Sidebar>
                <Navigation></Navigation>
              </div>
              <Navbar />
            </div>) :
          ( <div>
              <StartPage></StartPage>
              <Link to="/"><li className="toggleLink" onClick={this.eventHandler}></li></Link>

            </div> ) }


      </div>
    );
  }
}

export default App;
