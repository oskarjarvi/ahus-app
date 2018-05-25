import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import DisturbancePage from '../Pages/Disturbance/DisturbancePage';

class Sidebar extends Component {
render(){
  return(
    <Switch>
      <Route exact path="/DisturbancePage" component={DisturbancePage}/>
    </Switch>
  )

}
}

export default Sidebar;
