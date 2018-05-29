import React ,{ Component } from "react";
import base from '../../../Config/base';
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import './confirmed.css';


class confirmed extends Component
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
    return(
      <div>
      <p>WAAH</p>

          <CSSTransitionGroup
          transitionName="worksTransition"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
          >
          {
          this.state.reports.map((r,i) => (
          <div className="page confirmed" key = {i} >
          <Link to="/"><li className="backToMainPage"></li></Link>
          <h1 className="Header">Bekräftade Felanmälningar</h1>
<div className="report">
          <p className="contentBold"> ArbetsOrder </p>
          <p className="content">{i} </p>

          <p className="contentBold"> Adress </p>
          <p className="content">{r.address} </p>

          <p className="contentBold"> Rum </p>
          <p className="content">{r.roomnumber} </p>

          <p className="contentBold"> KontaktPerson </p>
          <p className="content">{r.name} </p>

</div>
          </div>
))
  }
          </CSSTransitionGroup>


      </div>)
    }
  }
  export default confirmed
