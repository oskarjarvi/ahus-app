import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/index.css';
const Navigation = () => (
  <div>
    <ul>
      <Link to="/DisturbancePage">
        <li><div className="arrow"></div></li>
      </Link>
    </ul>
  </div>
)

export default Navigation;
