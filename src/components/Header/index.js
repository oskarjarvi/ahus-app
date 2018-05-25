import React, { Component } from "react";
import Navigation from '../ExtraRoutes/Navigation';
import ExtraRoutes from '../ExtraRoutes/ExtraRoutes';
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

          <Navigation> </Navigation>
          <ExtraRoutes> </ExtraRoutes>

      </div>
  </div>)
  }
 }

export default HeaderHomePage;
