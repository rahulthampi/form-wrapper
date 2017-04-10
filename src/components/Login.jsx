import React from 'react';

const Login = ({ submit }) => (
  <form id="userLogin" onSubmit={e => submit(e)}>
    <input type="text" placeholder="Username" name="username" />
    <input type="password" placeholder="Password" name="userPassword" />
    <button type="submit">Submit</button>
  </form >
);

export default Login;
