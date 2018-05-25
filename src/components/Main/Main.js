import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import HomeForWorkers from '../LoginComponents/HomeForWorkers';
import Button from '../LoginComponents/Button';
import MyFancyComponent from '../StartPage/Container';



class Main extends Component {
render(){
  return(
    <Switch>
      <Route exact path="/HomeForWorkers" component={HomeForWorkers}/>
      <Route exact path="/MyFancyComponent" component={MyFancyComponent}/>
      <Route exact path="/Button" component={Button}/>
    </Switch>
  )

}
}

export default Main;
