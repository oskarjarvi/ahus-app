import React, { Component } from 'react';
import base from './base';

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
        <form>
          <label htmlFor="InputEmail">Email address</label>
          <input value={this.state.email} onChange={this.handleChange} type="email" name="email"
          id="InputEmail" aria-describedby="emailHelp"
          placeholder="Enter email"/>
          <label htmlFor="InputPassword">Password</label>
          <input value={this.state.password} onChange={this.handleChange} type="password" name="password"
          id="InputPassword" placeholder="Password"/>
          <button type="submit" onClick={this.login}>Login</button>
        </form>
      </div>

    );
  }
}
export default Login;
