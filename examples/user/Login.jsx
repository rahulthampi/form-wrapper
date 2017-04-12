import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'form-wrapper';

const Login = ({ submit }) => (
  <Form formID="userLogin" submit={submit} formTitle="User Login">
    <Input title="Username" type="text" name="userID" placeholder="Username" />
    <Input title="Password" type="password" name="userPassword" placeholder="Password" />
    <button type="submit">Submit</button>
  </Form>
);

Login.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Login;
