import React ,{ Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import './CaseInfo.css';


class CaseInfo extends Component
{
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

          <div className="page CaseInfo">
          <Link to="/confirmed"><li className="backToMainPage"></li></Link>
          <h1 className="Header">Order</h1>


          <div className="report">
            <p className="bold"> ArbetsOrder </p>
            <p className="light">0</p>

            <p className="bold"> Byggnad </p>
            <p className="light">Medicinarelängan </p>

            <p className="bold"> Rum </p>
            <p className="light">1455, 0414, 1245 </p>

            <p className="bold"> KontaktPerson </p>
            <p className="light">Kenneth Stendahl</p>

            <div className="connectionsBox Mail">
              <div className="connectionsMail"></div>
            </div>
            <div className="checkBox">
              <div className="checkBoxIcon"></div>
            </div>

          </div>

          </div>

          </CSSTransitionGroup>

)
    }
  }
  export default CaseInfo
