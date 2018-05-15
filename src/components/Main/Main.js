import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import Login from '../Login';

class Main extends Component {
render(){
  return(
    <Switch>
      <Route exact path="/Login" component={Login}/>
    </Switch>
  )

}
}

export default Main;
