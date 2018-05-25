import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../../App.css';
import './index.css'

class EventPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contents: [
          {id: 'One', title: 'Cykelvecka', content: 'Vecka 20'},
          {id: 'Two', title: 'Examensvecka', content: 'Vecka 23'},
          {id: 'Three', title: 'Mjölkens dag', content: '1 juni'}
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
        <div className="page Event">
          <Link to="/"><li className="backToMainPage"></li></Link>
            <div className="newsIcon"></div>
            <h1 className="newsHeader">Event</h1>
            <p className="newsSchool">Kungliga Tekniska högskolan</p>
              {this.state.contents.map(content =>
                <div key={content.id} className="newsBox">
                <div  className={`newsImage ${content.id}`}></div>
                <div className="newsContent">
                  <p className="contentBold">{content.title}</p>
                  <p className="contentLight">{content.content}</p>
                </div>
                <div className="newsArrow"></div>
              </div>
              )}
            </div>
       </CSSTransitionGroup>
     )
   }
 }
export default EventPage;
