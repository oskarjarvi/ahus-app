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
    this.snapshotToArray = this.snapshotToArray.bind(this);
    this.state =
    {
      reports : [],
    }
  }

snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.key = childSnapshot.key;

        returnArr.push(item);
    });

    return returnArr;
}
  componentDidMount()
  {
    base.database().ref('error-report/unconfirmed').once('value').then((snapshot) =>
    {
       let data = this.snapshotToArray(snapshot)
       this.setState({reports: data})
       console.log(this.state.reports);

    }),
    function (errorObject) {
  console.log("The read failed: " + errorObject.code);
}
  }


  render()
  {
    return this.state.reports.map((r,i) =>
      (
            <CSSTransitionGroup
            transitionName="worksTransition"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnter={false}
            transitionLeave={false}
            key = {i}>

            <div className="page unconfirmed">
            <Link to="/"><li className="backToMainPage"></li></Link>
            <h1 className="Header">Obekräftade Felanmälningar</h1>

            <p className="contentBold"> ArbetsOrder </p>
            <p className="content">{i} </p>

            <p className="contentBold"> ArbetsOrder </p>
            <p className="content">{r.email} </p>

            </div>
            </CSSTransitionGroup>
          )
          )

        }
      }
export default unconfirmed
