import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import FormInput from './Input';

const Login = ({ submit }) => (
  <Form formID="userLogin" submit={submit} formTitle="User Login">
    <FormInput title="Username" name="userID" placeholder="Username" />
    <FormInput title="Password" type="password" name="userPassword" placeholder="Password" />
  </Form>
);

Login.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Login;
