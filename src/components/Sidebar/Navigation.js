import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const Navigation = () => (
  <div className="sidebar">
    <ul className="sidebarMenu">
      <Link to="/"><li className="sidebarLink houseEvents">På gång i huset</li></Link>
      <Link to="/MyConnections"><li className="sidebarLink myConnections">Mina Kontaker</li></Link>
      <Link to="/ErrorReport"><li className="sidebarLink errorPage">Felanmälan</li></Link>
      <Link to="/EventPage"><li className="sidebarLink eventPage">Eventsida</li></Link>
      <Link to="/"><li className="sidebarLink mapPage">Karta</li></Link>
      <Link to="/NewPage"><li className="sidebarLink extraPage"><div className="extraLinkPlus"></div> Lägg till ny genväg</li></Link>
    </ul>
  </div>
)

export default Navigation;
