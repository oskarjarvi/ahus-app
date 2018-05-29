import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

const Navigation = () => (

  <div className="sidebar">
    <ul className="sidebarMenu">
      <Link to="/">
        <li className="sidebarLink houseEvents">
          <div className="houseEventsLinkIcon"></div>
            <p className="linkText">AKTUELLT</p>
        </li>
      </Link>
      <Link to="/confirmed">
        <li className="sidebarLink myConnections">
          <div className="connectionsLinkIncon"></div>
          <p className="linkText">confirmed</p>
        </li>
      </Link>
      <Link to="/ErrorReport">
        <li className="sidebarLink errorPage">
          <div className="errorLinkIcon"></div>
          <p className="linkText">FELANMÄLAN</p>
        </li>
      </Link>
      <Link to={"EventPage"}>
        <li className="sidebarLink eventPage">
          <div className="eventLinkIcon"></div>
          <p className="linkText">EVENT</p>
        </li>
      </Link>
      <Link to="/">
        <li className="sidebarLink mapPage">
          <div className="mapLinkMap"></div>
          <p className="linkText">KARTA</p>
        </li>
      </Link>
      <Link to="/NewPage"><li className="sidebarLink extraPage">
        <div className="extraLinkPlus"></div>
          <p className="linkText Plus">LÄGG TILL NY GENVÄG</p>
        </li>
      </Link>
    </ul>
  </div>
)

export default Navigation;
