import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
const HamburgerNavigation = () => (
  <ul>
    <Link to="/AboutUs"><li>Om oss</li></Link>
    <Link to="/Houseguide"><li>Husguider</li></Link>
    <Link to="/Information"><li>Hyresgäst Information</li></Link>
    <Link to="/Parking"><li>Parkering</li></Link>
    <Link to="/YourCampus"><li>Ditt Campus</li></Link>
  </ul>
)

export default HamburgerNavigation;
