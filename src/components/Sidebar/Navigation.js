import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
const Navigation = () => (
  <ul className="SidebarMeny">
    <Link to="/"><li className="SidebarLink HouseEvents">På gång i huset</li></Link>
    <Link to="/MyConnections"><li className="SidebarLink MyConnections">Mina Kontaker</li></Link>
    <Link to="/ErrorReport"><li className="SidebarLink ErrorPage">Felanmälan</li></Link>
    <Link to="/EventPage"><li className="SidebarLink EventPage">Eventsida</li></Link>
    <Link to="/"><li className="SidebarLink Map">Karta</li></Link>
    <Link to="/"><li className="SidebarLink Extra">+</li></Link>
  </ul>
)

export default Navigation;
