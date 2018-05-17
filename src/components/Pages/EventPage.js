import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../App.css';

class EventPage extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="worksTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
      <div className="page">
        <Link to="/"><li>tillbaka</li></Link>
        <h1>Eventpage</h1>
        <p>Hello FVÄLDMVCMSM a eventpage!</p>
       </div>
       </CSSTransitionGroup>
     )
   }
 }

export default EventPage;
