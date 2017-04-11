import React, { Component } from 'react';
import { render } from 'react-dom';

import { CreateFormHOC } from 'form-wrapper';
import Login from './Login';
import Register from './Register';

const LoginForm = CreateFormHOC()(Login);
const RegisterForm = CreateFormHOC()(Register);

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  handleLogin = (data) => {
    alert(JSON.stringify(data, null, 4));
  }

  handleRegistration = (data) => {
    alert(JSON.stringify(data, null, 4));
  }

  render() {
    return (
      <div>
        <LoginForm submitForm={this.handleLogin} />
        <RegisterForm submitForm={this.handleRegistration} />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('example'),
);
