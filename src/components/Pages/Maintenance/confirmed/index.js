import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../../../App.css';
import base from '../../../base';
import './index.css';



class confirmed extends Component
{
  constructor(props)
    {
      super(props)
      this.state = {
        reports : [],
      }
    }
  // componentDidMount()
  // {
  //   base.database().ref('error-report').once('value').then(function(snapshot)
  //   {
  //     console.log(snapshot.val()))
  //   }
  // }

  render()
  {
    return (
      // this.state.reports.map((r,i) =>
            <CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}>

            <div className="page unconfirmed">
            <Link to="/"><li className="backToMainPage"></li></Link>
            <h1 className="Header">Obekräftade Felanmälningar</h1>
            <div className="order">
            <p className="contentBold"> ArbetsOrder </p>
            <p className="contentLight">
            </p>
            <p className="contentBold"> Namn </p>
            <p className="contentLight">
            </p>
            <p className="contentBold">
             </p>
            <p className="contentLight">
            </p>
            </div>
            </div>

            </CSSTransitionGroup>
          )}
      }
      export default confirmed
