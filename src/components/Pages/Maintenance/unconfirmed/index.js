import React, { Component } from "react";
import base from '../../../base';
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import './index.css';


class unconfirmed extends Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      reports : [],
    }
  }
  componentDidMount()
  {
    base.database().ref('error-report/').once('value').then(function(snapshot)
    {
      this.setState({reports:snapshot.val()})
    })
  }
  render()
  {
    return (
      this.state.reports.map((r) =>
        {
          return
          (
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
            <p className="content"> </p>
            </div>
            </div>
            </CSSTransitionGroup>
          )}
        ))
        }
      }
export default unconfirmed
