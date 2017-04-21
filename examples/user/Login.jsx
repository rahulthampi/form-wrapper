import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'form-wrapper';

const Login = ({ submit }) => (
  <Form formID="userLogin" submit={submit} formTitle="User Login">
    <Input
      label="Email address"
      name="userEmail"
      placeholder="Email address"
      required
    />
    <Input
      label="Password"
      type="password"
      name="userPassword"
      placeholder="Password"
      required
    />
  </Form>
);

Login.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Login;
