import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../../App.css';
import './NewPage.css'

class NewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        contents: [
          {id: 1, content: 'PARKERING'},
          {id: 2, content: 'MILJÖ & ENERGI'},
          {id: 3, content: 'AVFALL & KÄLLSORTERING'},
          {id: 4, content: 'SÄKERHET & INPASSERING'},
          {id: 5, content: 'SERVICE I NÄROMRÅDET'},
          {id: 6, content: 'POSTHANTERING'},
          {id: 7, content: 'EL & BELYSNING'},
          {id: 8, content: 'INOMHUSKLIMAT & RÖKNING'},
          {id: 9, content: 'UTRYMNING & BRANDSKYDD'}
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
          <div className="extraPageWrapper">
            {this.state.contents.map(content =>
            <div key={content.id}  className="extraWrapper">
              <div className="extraBox">
                <div className="extraContent">
                  <p className="extraText">{content.content}</p>
                </div>
              </div>
              <div className="extraPlus">
                <div className="plus"></div>
              </div>
            </div>
            )}
            </div>
         </div>
       </CSSTransitionGroup>
     )
   }
 }

export default NewPage;
