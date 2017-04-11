import React, { Component } from 'react';

import CreateForm from '../container/CreateFormHOC';
import Login from '../components/Login';
import Register from '../components/Register';

const LoginForm = CreateForm()(Login);
const RegisterForm = CreateForm()(Register);

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
  }

  handleLogin = (elements) => {
    console.log(elements);
  }

  handleRegistration = (elements) => {
    console.log(elements);
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

export default App;
