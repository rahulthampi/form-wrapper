import React, { Component } from 'react';

import Login from '../components/Login';
import CreateForm from '../container/CreateForm';

const LoginForm = CreateForm()(Login);

class App extends Component {
  constructor(props) {
    super(props);

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin = (e) => {
    console.log(e.target.elements.username.value);
  };

  render() {
    return (
      <div>
        Welcome to the App
        <LoginForm submitForm={this.handleLogin} />
      </div>
    );
  }
}

export default App;
