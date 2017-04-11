import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import FormInput from './FormInput';

const Register = ({ submit }) => (
  <Form formID="userRegistration" submit={submit} formTitle="User Registration">
    <FormInput title="Name" name="userName" placeholder="Name" />
    <FormInput title="UserID" name="userID" placeholder="UserID" />
    <FormInput type="email" title="EmailID" name="userEmail" placeholder="Email address" />
    <FormInput type="password" title="Password" name="userPassword" placeholder="Password" />
    <FormInput type="password" title="Confirm Password" name="userConfirmPassword" placeholder="Confirm Password" />
  </Form>
);

Register.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Register;
