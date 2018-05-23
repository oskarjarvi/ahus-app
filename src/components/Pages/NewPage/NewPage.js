import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../../App.css';
import './index.css'

class NewPage extends Component {
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
          <div className="extraWrapper">
            <div className="extraBox">
              <div className="extraContent">
                <p className="extraText">PARKERING</p>
              </div>
            </div>
            <div className="extraPlus">
              <div className="plus"></div>
            </div>
          </div>

            <div className="extraWrapper">
              <div className="extraBox">
                <div className="extraContent">
                  <p className="extraText">MILJÖ & ENERGI</p>
                </div>
              </div>
              <div className="extraPlus">
                <div className="plus"></div>
              </div>
            </div>


          <div className="extraWrapper">
            <div className="extraBox">
              <div className="extraContent">
                <p className="extraText">AVFALL & KÄLLSORTERING</p>
              </div>
            </div>
            <div className="extraPlus">
              <div className="plus"></div>
            </div>
          </div>


         </div>
       </CSSTransitionGroup>
     )
   }
 }

export default NewPage;
