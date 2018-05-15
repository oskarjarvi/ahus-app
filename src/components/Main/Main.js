import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';
import AboutUs from '../Navbar/NavbarContent/AboutUs';
import Houseguide from '../Navbar/NavbarContent/Houseguide';
import Information from '../Navbar/NavbarContent/Information';
import Parking from '../Navbar/NavbarContent/Parking';
import YourCampus from '../Navbar/NavbarContent/YourCampus';

class Main extends Component {
render(){
  return(
    <Switch>
      <Route exact path="/AboutUs" component={AboutUs}/>
      <Route exact path="/Houseguide" component={Houseguide}/>
      <Route exact path="/Information" component={Information}/>
      <Route exact path="/Parking" component={Parking}/>
      <Route exact path="/YourCampus" component={YourCampus}/>
    </Switch>
  )

}
}

export default Main;
