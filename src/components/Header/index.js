import React, { Component } from "react";
import './index.css';

class HeaderHomePage extends Component {
  render() {
    return (
  <div className="headerHome">
    <div className="notificationIcon">
      <div className="ErIcon"></div>
    </div>
      <div className="notification">
        <p className="messageBold">Oberoende busstider och försenade tåg</p>
        <p className="messagelight">Pga. tekniska fel på SL’s huvudkontor så är idag…</p>
        <div className="arrow"></div>
      </div>
  </div>)
  }
 }

export default HeaderHomePage;
