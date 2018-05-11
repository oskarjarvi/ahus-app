import React, { Component } from 'react';
import Button from './Button'
class Navbar extends Component {
  render(){
    return(
      <div>
        <ul>
          <li>Ditt campus</li>
          <li>Hyresgästinformation</li>
          <li>Parkering</li>
          <li>Husguider</li>
          <li>Om oss</li>
          <Button />
        </ul>
      </div>
    );
  }
}
export default Navbar;
