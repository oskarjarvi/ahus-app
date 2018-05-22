import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../../App.css';
import './index.css'

class EventPage extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="worksTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
        <div className="page Event">
          <Link to="/"><li>tillbaka</li></Link>
            <div className="newsIcon"></div>
            <h1 className="newsHeader">Event</h1>
            <p className="newsSchool">Kungliga Tekniska högskolan</p>
            <div className="newsBox">
              <div className="newsImage"></div>
                <div className="newsContent">
                  <p className="contentBold">Cykelvecka</p>
                  <p className="contentLight">Vecka 20</p>
                </div>
                <div className="newsArrow"></div>
            </div>
            <div className="newsBox">
              <div className="newsImage Two"></div>
              <div className="newsContent">
                <p className="contentBold">Examensvecka</p>
                <p className="contentLight">Vecka 23</p>
              </div>
              <div className="newsArrow"></div>
            </div>
            <div className="newsBox">
              <div className="newsImage Three"></div>
                <div className="newsContent">
                  <p className="contentBold">Mjölkens dag</p>
                  <p className="contentLight">1 juni</p>
                </div>
                <div className="newsArrow"></div>
            </div>
         </div>
       </CSSTransitionGroup>
     )
   }
 }

export default EventPage;
