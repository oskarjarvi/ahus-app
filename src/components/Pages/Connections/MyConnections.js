import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../../App.css';
import '../index.css';
class MyConnections extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="worksTransition"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnter={false}
        transitionLeave={false}>
<<<<<<< Updated upstream
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
=======

        <div className="page Connections">
          <Link to="/"><li>tillbaka</li></Link>
            <div className="icon contactIcon"></div>
            <h1 className="Header">Contacts</h1>
            <p className="School">Kungliga Tekniska högskolan</p>
            <div className="Box">
              <div className="images contactOne"></div>
                <div className="Content">
                  <p className="contentBold">Stig Järnberg</p>
                  <p className="contentLight">Fastighetschef</p>
                </div>
                <div className="callIcon"></div>
                <div className="mailIcon"></div>
            </div>
            <div className="Box">
              <div className="images contactTwo"></div>
              <div className="Content">
                <p className="contentBold">Jeanette Gustavsson</p>
                <p className="contentLight">Förvaltare</p>
              </div>
              <div className="callIcon"></div>
              <div className="mailIcon"></div>
            </div>
            <div className="Box">
              <div className="images contactThree"></div>
                <div className="Content">
                  <p className="contentBold">Roy Sjöström</p>
                  <p className="contentLight">It-service</p>
                </div>
                <div className="callIcon"></div>
                <div className="mailIcon"></div>
            </div>
         </div>
       </CSSTransitionGroup>
     )
>>>>>>> Stashed changes
  }
}

export default MyConnections;
