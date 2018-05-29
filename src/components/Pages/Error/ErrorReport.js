import React, { Component } from "react";
import {CSSTransitionGroup} from "react-transition-group";
import { Link } from 'react-router-dom';
import '../../../App.css';
import base from '../../Config/base';
import './error.css';

class ErrorReport extends Component {
  constructor(props) {
    super(props);
    this.errorReport = this.errorReport.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      name: '',
      building: '',
      roomnumber: '',
      message: '',
      email: '',
      phone: ''
    }
  }

  errorReport(e){
    e.preventDefault();

    this.setState (
    base.database().ref('error-report').child('unconfirmed').push(
       {

            name: this.state.name,
            building: this.state.building,
            roomnumber: this.state.roomnumber,
            message: this.state.message,
            email: this.state.email,
            phone: this.state.phone
          })
        );
        this.clearForm()
  }

  handleChange(e){
    this.setState({  [e.target.name]: e.target.value });
  }

  clearForm = () => {
    this.setState({
      name: '',
      building: '',
      roomnumber: '',
      message: '',
      email: '',
      phone: ''
    })}

    render() {
      return(
  <CSSTransitionGroup
    transitionName="worksTransition"
    transitionAppear={true}
    transitionAppearTimeout={500}
    transitionEnter={false}
    transitionLeave={false}>
    <div className="page Error">
      <Link to="/"><li className="backToMainPage"></li></Link>
        <form className="errorForm">
          <h1 className="errorHeader">Felanmälan</h1>
          <div className="formWrapper">
            <div>
              <label className ="labelForName" htmlFor="name">Namn*</label>
            </div>
            <input className ="inputForName" value={this.state.name} onChange={this.handleChange} type="text" placeholder=" För- och efternamn" name="name" required />
          </div>

          <div className="formWrapper">
            <div>
              <label className ="labelForName" htmlFor="building">Byggnad på campus*</label>
            </div>
            <input className ="inputForName" value={this.state.building} onChange={this.handleChange} type="text" placeholder=" t.ex. KTH Hallen" name="building" required />
          </div>

          <div className="formWrapper">
            <div>
              <label className ="labelForName" htmlFor="roomnumber">Rum/rumsnr*</label>
            </div>
            <input className ="inputForName" value={this.state.roomnumber} onChange={this.handleChange} type="text" name="roomnumber" required />
          </div>

          <div className="formWrapper">
            <div>
              <label className ="labelForName" htmlFor="message">Beskrivning(max 3000 tecken)*</label>
            </div>
            <textarea className ="labelForMessage" name="message" placeholder=" Beskriv problemet och mer detaljerad position." value={this.state.message} onChange={this.handleChange}></textarea>
          </div>

          <div className="formWrapper">
            <div>
              <label className ="labelForName" htmlFor="email">Mail</label>
            </div>
            <input className ="inputForName" value={this.state.email} onChange={this.handleChange} type="text" placeholder=" För att kunna återkoppla" name="email" required />
          </div>

          <div className="formWrapper">
            <div>
              <label className ="labelForName" htmlFor="phone">Telefon</label>
            </div>
            <input className ="inputForName" value={this.state.phone} onChange={this.handleChange} type="text" placeholder=" För att kunna återkoppla" name="phone" required />
          </div>

    <p className="gdprInfo">Eran information kommer endast användas i syfte för att åtgärda det
     problem som anmälts. Efter genomfört arbete raderas er information
     från våran databas.</p>
   <button className={this.handleChange ? "buttonForForm" : "buttonForForm Active"} type="submit" onClick={this.errorReport}>Skicka in</button>
    <Link to="/"><div className="cross"></div></Link>
    </form>
     </div>
  </CSSTransitionGroup>
    )
  }
}


export default ErrorReport;
