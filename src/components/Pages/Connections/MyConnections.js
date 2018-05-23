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
        <Link to="/"><li className="backToMainPage"></li></Link>
          <div className="connectionsIcon"></div>
          <h1 className="newsHeader">MINA KONTAKTER</h1>
          <p className="newsSchool">Kungliga Tekniska högskolan</p>
          <div className="newsBox">
            <div className="connectionsImage"></div>
              <div className="connectionsContent">
                <p className="contentBold">Stig Järnberg</p>
                <p className="contentLight">Fastighetschef</p>
              </div>
              <div className="connectionsBox Mail">
                <div className="connectionsMail"></div>
              </div>
              <div className="connectionsBox Phone">
                <div className="connectionsPhone"></div>
              </div>
          </div>
          <div className="newsBox">
            <div className="connectionsImage Two"></div>
            <div className="connectionsContent">
              <p className="contentBold">Jeanette Gustavsson</p>
              <p className="contentLight">Förvaltare</p>
            </div>
            <div className="connectionsBox Mail">
              <div className="connectionsMail"></div>
            </div>
            <div className="connectionsBox Phone">
              <div className="connectionsPhone"></div>
            </div>
          </div>
          <div className="newsBox">
            <div className="connectionsImage Three"></div>
              <div className="connectionsContent">
                <p className="contentBold">Roy Sjöström</p>
                <p className="contentLight">IT-service</p>
              </div>
              <div className="connectionsBox Mail">
                <div className="connectionsMail"></div>
              </div>
              <div className="connectionsBox Phone">
                <div className="connectionsPhone"></div>
              </div>
          </div>
        </div>
     </CSSTransitionGroup>
   )
  }
}

export default MyConnections;
