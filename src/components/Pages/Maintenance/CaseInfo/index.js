import React, { Component } from "react";
import base from '../../../base';
import './index.css';


class confirmed extends Component
{
  this.state =
  {
    reports: [];
  }
  componentDidMount()
  {
    var key = Object.keys(snapshot.val())[0];

    base.database().ref('error-report/').once('value').then(function(snapshot)
    {
      this.setState({reports : snapshot.val()})
    })
  }
  render()
  {
    return (
      this.state.reports.map((r,i)  =>
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
              <h1 className="Header">Pågående Ärenden</h1>
              <div className="order">

                <p className="contentBold"> ArbetsOrder </p>
                <p className="contentLight"> {{i}}

                    <div className="Arrow"></div>
              </div>
            </div>

            </CSSTransitionGroup>
          )}
        }
        export default unconfirmed
