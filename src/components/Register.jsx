import React from 'react';

const Register = ({ submit }) => (
  <form id="userLogin" onSubmit={e => submit(e)}>
    <input type="text" placeholder="Name" name="userName" />
    <input type="text" placeholder="Username" name="userID" />
    <input type="email" placeholder="Email address" name="userEmail" />
    <input type="password" placeholder="Password" name="userPassword" />
    <input type="password" placeholder="Confirm Password" name="userConfirmPassword" />
    <button type="submit">Submit</button>
  </form >
);

export default Register;
