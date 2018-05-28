import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import ErrorReport from '../Pages/Error/ErrorReport';
import EventPage from '../Pages/Event/EventPage';
import MyConnections from '../Pages/Connections/MyConnections';
import NewPage from '../Pages/NewPage/NewPage';
import base from './../base';
import unconfirmed from '../Pages/Maintenance/unconfirmed';
import confirmed from '../Pages/Maintenance/confirmed';

class Sidebar extends Component {


render(){
  return(
    <Switch>
      <Route exact path="/ErrorReport" component={ErrorReport}/>

        <Route exact path="Maintenance/unconfirmed" component={unconfirmed}/>
        <Route exact path="Maintenance/confirmed" component={confirmed}/>

      <Route exact path="/NewPage" component={NewPage}/>

    </Switch>
  )

}
}

export default Sidebar;
