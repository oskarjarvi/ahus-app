import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LoginLink from '../LoginComponents/LoginLink';
import './index.css';
class HamburgerNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: true
    };
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler(event) {
    this.setState(prevState => ({
      toggle: !prevState.toggle
    }));
  }

  render(){
    return(
  <div className="firstPage">
    <div className="ahusLogo"></div>
    <div className="myCampus"></div>
    <h2 className="chooseCampus">VÄLJ CAMPUS</h2>
    <ul className="firstMenu">
      <Link to="/"><li className="box">SÖK</li></Link>
      <Link to="/UseMyLocation"><li className="box">ANVÄND MIN POSITION</li></Link>
      <Link to="/"><li className="box">SENAST VALDA</li></Link>
      <Link to="/Button"><li className="box login">
        <LoginLink className={this.state.toggle ? "" : ""}
        onClick={this.eventHandler}/>
      </li></Link>
      <Link to="/"><li>Tillbaka</li></Link>
    </ul>
  </div>
    )
  }
}


export default HamburgerNavigation;
