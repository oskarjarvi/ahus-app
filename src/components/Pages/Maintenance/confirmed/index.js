import React, { Component } from "react";
import base from '../../../base';
import './index.css';


class unconfirmed extends Component
{
  this.state =
  {
    reports: [];
  }
  componentDidMount()
  {
    base.database().ref('error-report').once('value').then(function(snapshot)
    {
      this.setState({reports : snapshot.val()})
    }
  }
  render()
  {
    return (
      this.state.reports.map((r,i) =>
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
            <p className="contentLight"> {{i}} </p>
            <p className="contentBold"> Namn </p>
            <p className="contentLight"> {{r.name}} </p>
            <p className="contentBold"> {{i}} </p>
            <p className="contentLight"> {{r.message}}
            </div>
            </div>

            </CSSTransitionGroup>
          )}
        }
