import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const HamburgerNavigation = () => (
  <div className="firstPage">
    <div className="ahusLogo"></div>
    <div className="myCampus"></div>
    <h2 className="chooseCampus">VÄLJ CAMPUS</h2>
    <ul className="firstMenu">
      <Link to="/"><li className="box">SÖK</li></Link>
      <Link to="/UseMyLocation"><li className="box">ANVÄND MIN POSITION</li></Link>
      <Link to="/"><li className="box">SENAST VALDA</li></Link>
      <Link to="/Login"><li className="box login">LOGGA IN SOM ANSTÄLLD</li></Link>
      <Link to="/"><li>Tillbaka</li></Link>
    </ul>
  </div>
)

export default HamburgerNavigation;
