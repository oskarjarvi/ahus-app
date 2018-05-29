import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navigation = () => (

  <div className="sidebar">
    <ul className="sidebarMenu">
      <Link to="/">
        <li className="sidebarLink houseEvents">
          <div className="houseEventsLinkIcon"></div>
          På gång i huset
        </li>
      </Link>
      <Link to={!user? "/MyConnections" : "/unconfirmed"}>
        <li className="sidebarLink myConnections">
          <div className="connectionsLinkIncon"></div>
          Mina Kontaker</li>
      </Link>
      <Link to="/ErrorReport">
        <li className="sidebarLink errorPage">
          <div className="errorLinkIcon"></div>
          Felanmälan
        </li>
      </Link>
      <Link to={!user? "/eventPage" : "/unconfirmed"}>
        <li className="sidebarLink eventPage">
          <div className="eventLinkIcon"></div>
          Eventsida
        </li>
      </Link>
      <Link to="/">
        <li className="sidebarLink mapPage">
          <div className="mapLinkMap"></div>
          Karta
        </li>
      </Link>
      <Link to="/NewPage"><li className="sidebarLink extraPage">
        <div className="extraLinkPlus"></div>
          Lägg till ny genväg
        </li>
      </Link>
    </ul>
  </div>
)

export default Navigation;
