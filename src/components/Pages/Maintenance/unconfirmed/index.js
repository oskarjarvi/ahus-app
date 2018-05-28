import React ,{ Component } from "react";
import base from '../../../base';
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import './index.css';


class unconfirmed extends Component
{
  constructor(props)
  {
    super(props);
  }
  state =
  {
    reports : [],
  }
  componentDidMount()
  {
    base.database().ref('error-report/unconfirmed').once('value').then(function(snapshot)
    {
      this.setState({reports: snapshot.val()})
    }),
    function (errorObject) {
  console.log("The read failed: " + errorObject.code);
}
  }
  render()
  {
    return this.state.reports.map(r =>
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
          )
          )

        }
      }
export default unconfirmed
