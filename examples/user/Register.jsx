import React from 'react';
import PropTypes from 'prop-types';
import { Form, Textbox } from 'form-wrapper';

const Register = ({ onSubmit, onBlur }) => (
  <Form formID="userRegistration" submit={onSubmit} formTitle="User Registration">
    <Textbox label="Name" name="userName" placeholder="Name" />
    <Textbox label="UserID" name="userID" placeholder="UserID" />
    <Textbox label="EmailID" name="userEmail" onBlur={onBlur} data-validation="isEmail" data-validationError="This is not a valid email" placeholder="Email address" />
    <Textbox type="password" label="Password" name="userPassword" placeholder="Password" />
    <Textbox type="password" label="Confirm Password" name="userConfirmPassword" placeholder="Confirm Password" data-validation="isEqual:userPassword" data-validationError="Passwords does not match" />
  </Form>
);

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Register;
