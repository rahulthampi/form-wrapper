import React from 'react';

const Register = ({ handleSubmit }) => (
  <form id="userLogin" onSubmit={e => handleSubmit(e)}>
    <input type="text" placeholder="Username" name="username" />
    <input type="password" placeholder="Password" name="userPassword" />
    <button type="submit">Submit</button>
  </form >
);

export default Register;
