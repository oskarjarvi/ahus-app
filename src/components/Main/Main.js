import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Login from '../Login';
import HomeForWorkers from '../HomeForWorkers';

import UseMyLocation from '../StartPage/UseMyLocation';



class Main extends Component {
render(){
  return(
    <Switch>
      <Route exact path="/Login" component={Login}/>
      <Route exact path="/HomeForWorkers" component={HomeForWorkers}/>
      <Route exact path="/UseMyLocation" component={UseMyLocation}/>
    </Switch>
  )

}
}

export default Main;
