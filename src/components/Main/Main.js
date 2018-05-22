import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import HomeForWorkers from '../LoginComponents/HomeForWorkers';

import UseMyLocation from '../StartPage/UseMyLocation';



class Main extends Component {
render(){
  return(
    <Switch>
      <Route exact path="/HomeForWorkers" component={HomeForWorkers}/>
      <Route exact path="/UseMyLocation" component={UseMyLocation}/>
    </Switch>
  )

}
}

export default Main;
