import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../LoginComponents/Button';
import MyFancyComponent from '../StartPage/Container';
import './index.css';
class HamburgerNavigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: false,
      login: false
    };
    this.eventHandler = this.eventHandler.bind(this);
  }
  eventHandler(event) {
    this.setState(prevState => ({
      map: !prevState.map,
      login: !prevState.login
    }));
  }



  render(){
    return(
  <div className="firstPage">
    <div className="ahusLogo"></div>
    <div className="myCampus"></div>
    <h2 className="chooseCampus">VÄLJ CAMPUS</h2>
    <ul className="firstMenu">
      <Link to="/"><li className="box">SÖK</li></Link>

      <Link to="/MyFancyComponent">
        <li className="box">
          {this.state.map ? (
            <div className="map">
              <MyFancyComponent></MyFancyComponent>
            </div>) : <div onClick={this.eventHandler.login}>ANVÄND MIN POSITION</div>}
        </li>
      </Link>


      <Link to="/"><li className="box">SENAST VALDA</li></Link>
      <Link to="/Button"><li className="box login">
        {this.state.login ?
          <div>
             <Button></Button>
           </div>
         : <div onClick={this.eventHandler.map}>LOGGA IN SOM ANSTÄLLD</div> }
      </li></Link>


      <Link to="/"><li>Tillbaka</li></Link>
    </ul>
  </div>
    )
  }
}


export default HamburgerNavigation;
