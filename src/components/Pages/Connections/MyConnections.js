import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../../App.css';
import './index.css';
class MyConnections extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="worksTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
      <div className="page Connections">
        <Link to="/"><li>tillbaka</li></Link>
        <h1>Mina kontakter</h1>
        <ul>
          <li>Jonas</li>
          <li>Karin</li>
          <li>Beppe</li>
        </ul>
       </div>
     </CSSTransitionGroup>
   )
  }
}

export default MyConnections;
