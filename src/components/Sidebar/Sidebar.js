import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import ErrorReport from '../Pages/ErrorReport';
import EventPage from '../Pages/EventPage';
import MapPage from '../Pages/MapPage';
import MyConnections from '../Pages/MyConnections';

class Sidebar extends Component {
render(){
  return(
    <Switch>
      <Route exact path="/ErrorReport" component={ErrorReport}/>
      <Route exact path="/EventPage" component={EventPage}/>
      <Route exact path="/MapPage" component={MapPage}/>
      <Route exact path="/MyConnections" component={MyConnections}/>
    </Switch>
  )

}
}

export default Sidebar;
