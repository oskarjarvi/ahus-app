import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
const Navigation = () => (
  <ul>
    <Link to="/ErrorReport"><li>Felanmälan</li></Link>
    <Link to="/EventPage"><li>Eventsida</li></Link>
    <Link to="/MapPage"><li>Karta</li></Link>
    <Link to="/MyConnections"><li>Mina Kontaker</li></Link>
  </ul>
)

export default Navigation;
