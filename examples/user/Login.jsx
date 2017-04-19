import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'form-wrapper';

const Login = ({ submit }) => (
  <Form formID="userLogin" submit={submit} formTitle="User Login">
    <Input label="Email address" name="userEmail" placeholder="Email address" rule="isEmptyString" msg="is empty" required />
    <Input label="Password" type="password" name="userPassword" placeholder="Password" rule="isEmptyString" msg="is empty" required />
    <button type="submit">Submit</button>
  </Form>
);

Login.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Login;
