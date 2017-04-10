import React from 'react';

import CreateForm from '../container/CreateForm';

const Login = ({ submit }) => (
  <form id="userLogin" onSubmit={e => submit(e)}>
    <input type="text" placeholder="Username" name="username" />
    <input type="password" placeholder="Password" name="userPassword" />
    <button type="submit">Submit</button>
  </form >
);

const submitForm = (e) => {
  console.log(e.target.elements.username.value);
};

const LoginForm = CreateForm({
  submitForm,
})(Login);

export default LoginForm;
