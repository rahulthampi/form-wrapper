import React, { Component } from 'react';
import { render } from 'react-dom';
import { CreateForm } from 'form-wrapper';

// import Register from './Register';

// const RegisterForm = CreateForm(Register);

class App extends Component {
  handleSubmission = (data) => {
    alert(data);
  }

  render = () => (
    // <RegisterForm submitForm={this.handleSubmission} />
    <CreateForm submitForm={this.handleSubmission} />
  )
}

render(
  <App />,
  document.getElementById('example'),
);
