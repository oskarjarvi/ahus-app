import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import ErrorReport from '../Pages/Error/ErrorReport';
import EventPage from '../Pages/Event/EventPage';
import MyConnections from '../Pages/Connections/MyConnections';
import NewPage from '../Pages/NewPage/NewPage';
import Unconfirmed from '../Pages/Maintenance/unconfirmed';
import Confirmed from '../Pages/Maintenance/confirmed';
import CaseInfo from '../Pages/Maintenance/CaseInfo';

class Sidebar extends Component {

render(){
  return(
    <Switch>
      <Route exact path="/ErrorReport" component={ErrorReport}/>
      <Route exact path="/MyConnections" component={MyConnections}/>
      <Route exact path="/Unconfirmed" component={Unconfirmed}/>
      <Route exact path="/Confirmed" component={Confirmed}/>
      <Route exact path="/EventPage" component={EventPage}/>
      <Route exact path="/NewPage" component={NewPage}/>
      <Route exact path="/CaseInfo" component={CaseInfo}/>
    </Switch>
  )

}
}

export default Sidebar;
