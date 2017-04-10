import React, { Component } from 'react';

import Login from '../components/Login';
import Register from '../components/Register';
import CreateForm from '../container/CreateForm';

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
        Welcome to the App
        <LoginForm submitForm={this.handleLogin} />
        <RegisterForm submitForm={this.handleRegistration} />
      </div>
    );
  }
}

export default App;
