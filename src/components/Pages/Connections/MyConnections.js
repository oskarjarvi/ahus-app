import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../../App.css';
import './index.css';
class MyConnections extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contents: [
          {id: 'One', title: 'Stig Järnberg', content: 'Fastighetschef'},
          {id: 'Two', title: 'Jeanette Gustavsson', content: 'Förvaltare'},
          {id: 'Three', title: 'Roy Sjöström', content: 'IT-service'}
        ]
  };
}
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
        <div className="connectionsWrapper">
          <div className="connectionsIcon"></div>
          <h1 className="newsHeader">MINA KONTAKTER</h1>
          <p className="newsSchool">Kungliga Tekniska högskolan</p>

          {this.state.contents.map(content =>
            <div key={content.id} className="newsBox">
              <div  className={`connectionsImage ${content.id}`}></div>
              <div className="connectionsContent">
                <p className="contentBold">{content.title}</p>
                <p className="contentLight">{content.content}</p>
              </div>
              <div className="connectionsBox Mail">
                <div className="connectionsMail"></div>
              </div>
              <div className="connectionsBox Phone">
                <div className="connectionsPhone"></div>
              </div>
            </div>
          )}
        </div>

        </div>
     </CSSTransitionGroup>
   )
  }
}

export default MyConnections;
