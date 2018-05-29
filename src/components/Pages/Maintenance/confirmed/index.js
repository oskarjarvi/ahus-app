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


          <CSSTransitionGroup
          transitionName="worksTransition"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}
          >

          <div className="page confirmed">
          <Link to="/"><li className="backToMainPage"></li></Link>
          <h1 className="Header">Bekräftade Felanmälningar</h1>
          {
          this.state.reports.map((r,i) => (
          <div className="report"key = {i}>
          <p className="bold"> ArbetsOrder </p>
          <p className="light">{i} </p>

          <p className="bold"> Byggnad </p>
          <p className="light">{r.building} </p>

          <p className="bold"> Rum </p>
          <p className="light">{r.roomnumber} </p>

          <p className="bold"> KontaktPerson </p>
          <p className="light">{r.name} </p>

</div>
))
  }
          </div>

          </CSSTransitionGroup>
        )
    }
  }
  export default confirmed
