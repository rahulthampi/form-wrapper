import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import TextBox from './TextBox';

const Login = ({ submit }) => (
  <Form formID="userLogin" submit={submit} formTitle="User Login">
    <TextBox title="Username" name="userID" placeholder="Username" />
    <TextBox title="Password" type="password" name="userPassword" placeholder="Password" />
  </Form>
);

Login.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Login;
