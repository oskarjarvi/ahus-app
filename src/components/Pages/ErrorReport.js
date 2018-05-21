import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../App.css';
import base from '../base';

class ErrorReport extends Component {
  constructor(props) {
    super(props);
    this.errorReport = this.errorReport.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      address: '',
      roomnumber: '',
      message: '',
      email: '',
      phone: ''
    }
  }

  errorReport(e){
    e.preventDefault();
    base.database().ref('error-report').push(
          {
            name: this.state.name,
            address: this.state.address,
            roomnumber: this.state.roomnumber,
            message: this.state.message,
            email: this.state.email,
            phone: this.state.phone
          }
        );
  }

  handleChange(e){
    console.log(e.target.name);
    this.setState({  [e.target.name]: e.target.value });
  }
    render() {
      return(
  <CSSTransitionGroup
    transitionName="worksTransition"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
    <div className="page error">
      <h1>Felanmälan</h1>
        <form>
          <div>
            <label for="name">Namn*</label>
            <input className ="name"value={this.state.name} onChange={this.handleChange} type="text" placeholder="namn" name="name" required />
          </div>

          <div>
            <label for="address">Adress*</label>
            <input className ="adress"value={this.state.address} onChange={this.handleChange} type="text" placeholder="adress" name="address" required />
          </div>

          <div>
            <label for="roomnumber">Rum/rumsnr*</label>
            <input className ="roomnumber"value={this.state.roomnumber} onChange={this.handleChange} type="text" name="roomnumber" required />
          </div>

          <div>
            <label for="message">Beskrivning(max 3000 tecken)*</label>
            <textarea name="message" value={this.state.message} onChange={this.handleChange}></textarea>
          </div>

          <div>
            <label for="email">Mail</label>
            <input className ="email"value={this.state.email} onChange={this.handleChange} type="text" name="email" required />
          </div>

          <div>
            <label for="phone">Telefon</label>
            <input className ="phone"value={this.state.phone} onChange={this.handleChange} type="text" name="phone" required />
          </div>

    <p>Eran information kommer endast användas i syfte för att åtgärda det
     problem som anmälts. Efter genomfört arbete raderas er information
     från våran databas.</p>
   <button type="submit" onClick={this.errorReport}>Skicka in</button>
    </form>
<Link to="/"><li>tillbaka</li></Link>
     </div>
  </CSSTransitionGroup>
    )
  }
}


export default ErrorReport;
