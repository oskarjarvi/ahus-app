import React, { Component } from 'react';
import base from '../base';
import { Link } from 'react-router-dom';
import './index.css';
class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      email: '',
      password: ''
    }

  }

  login(e){
    e.preventDefault();
    base.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
    }).catch((error) => {
      console.log(error);
    });
  }

  handleChange(e){
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return(
      <div>
        <form className="loginForm">
          <p className="loginHeader">Logga in som anställd</p>
          <div className="loginInput">
            <label className="loginLabel" htmlFor="InputEmail">Mail</label>
            <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
              id="InputEmail" aria-describedby="emailHelp"/>
          </div>
          <div className="loginInput">
            <label className="loginLabel" htmlFor="InputPassword">Password</label>
            <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
              id="InputPassword"/>
          </div>
        <button className="loginButton" type="submit" onClick={this.login}>Login</button>
        <Link to="/"><div className="cross"></div></Link>
        </form>
      </div>

    );
  }
}
export default Login;
