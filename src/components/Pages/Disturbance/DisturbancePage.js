import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import './disturbance.css';
class DisturbancePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contents: [
          {id: 'One', title: 'Renovering av entre', content: 'Under sommaren'},
          {id: 'Two', title: 'Byte av handfat', content: 'Tisdag den 22 maj'},
          {id: 'Three', title: 'Målar om i biblioteket', content: 'Onsdag 25 april'}
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
        <div className="page Disturbance">
          <Link to="/"><li className="backToMainPage"></li></Link>
          <div className="newsWrapper">
            <div className="disturbanceIcon"></div>
            <h1 className="newsHeader">DRIFTSTÖRNINGAR</h1>
            <p className="newsSchool">Kungliga Tekniska högskolan</p>
            {this.state.contents.map(content =>
              <div key={content.id} className="newsBox">
                <div className="iconWrapper">
                  <div  className={`disturbanceImage ${content.id}`}></div>
                </div>
                <div className="newsContent">
                  <p className="contentBold">{content.title}</p>
                  <p className="contentLight">{content.content}</p>
                </div>
                <div className="newsArrow"></div>
              </div>
            )}
          </div>
        </div>
     </CSSTransitionGroup>
     )
  }
}

export default DisturbancePage;
