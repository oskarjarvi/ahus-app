import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const HamburgerNavigation = () => (
  <div className="firstPage">
    <h1 className="myCampus">MITT CAMPUS</h1>
    <h2 className="chooseCampus">VÄLJ CAMPUS</h2>
    <ul className="firstMenu">
      <Link to="/"><li className="box">Sök</li></Link>
      <Link to="/"><li className="box">Senast valda plats</li></Link>
      <Link to="/UseMyLocation"><li className="box">Använd min position</li></Link>
      <Link to="/Login"><li className="box login">Inlogg för arbetare</li></Link>
      <Link to="/"><li>Tillbaka</li></Link>
    </ul>
  </div>
)

export default HamburgerNavigation;
