import React, { Component } from 'react';

import LoginForm from '../components/Login';

class App extends Component {
  render() {
    return (
      <div>
        Welcome to the App
        <LoginForm />
      </div>
    );
  }
}

export default App;
