import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import ErrorReport from '../Pages/Error/ErrorReport';
import EventPage from '../Pages/Event/EventPage';
import MyConnections from '../Pages/Connections/MyConnections';
import NewPage from '../Pages/NewPage/NewPage';
import base from './../base';

class Sidebar extends Component {
  constructor(props)
  {
    super(props)
    this.state = {
      user : base.auth().currentUser,
    }
  }


render(){
  return(
    <Switch>
      <Route exact path="/ErrorReport" component={ErrorReport}/>
//If user is not logged in show these
      <Route exact path="/EventPage" component={EventPage}/>
      <Route exact path="/MyConnections" component={MyConnections}/>
//if user is logged in show these
<Route exact path="/EventPage" component={EventPage}/>
<Route exact path="/MyConnections" component={MyConnections}/>

      <Route exact path="/NewPage" component={NewPage}/>

    </Switch>
  )

}
}

export default Sidebar;
