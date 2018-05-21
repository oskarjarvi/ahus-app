import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Login from '../Login';
import HomeForWorkers from '../HomeForWorkers';

class Main extends Component {
render(){
  return(
    <Switch>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/HomeForWorkers" component={HomeForWorkers}/>
    </Switch>
  )

}
}

export default Main;
