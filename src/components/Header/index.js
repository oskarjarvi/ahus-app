import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './index.css';

class HeaderHomePage extends Component {
  render() {
    return (
  <div className="headerHome">
    <div className="notificationIcon">
      <div className="errIcon"></div>
    </div>
      <div className="notification">
        <p className="messageBold">Oberoende busstider och försenade tåg</p>
        <p className="messagelight">Pga. tekniska fel på SL’s huvudkontor så är idag…</p>
        <Link to="/Disturbances"><div className="arrow"></div></Link>
      </div>
  </div>)
  }
 }

export default HeaderHomePage;
