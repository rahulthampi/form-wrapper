import React, { Component } from 'react';
import { render } from 'react-dom';
import { CreateFormHOC } from 'form-wrapper';

import Login from './Login';
import Register from './Register';

const LoginForm = CreateFormHOC()(Login);
const RegisterForm = CreateFormHOC()(Register);

class App extends Component {
  handleSubmission = (data) => {
    alert(JSON.stringify(data, null, 4));
  }

  render() {
    return (
      <div>
        <LoginForm submitForm={this.handleSubmission} />
        <br />
        <br />
        <RegisterForm submitForm={this.handleSubmission} />
      </div>
    );
  }
}

render(
  <App />,
  document.getElementById('example'),
);
