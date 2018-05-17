import React from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../App.css';

const ErrorReport = () =>(
  <CSSTransitionGroup
    transitionName="worksTransition"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
    <div className="page">
      <Link to="/"><li>tillbaka</li></Link>
      <h1>Felanmälan</h1>
      <p>här gör du Felanmälan!</p>
     </div>
  </CSSTransitionGroup>
  )


export default ErrorReport;
