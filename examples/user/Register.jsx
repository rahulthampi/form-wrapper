import React from 'react';
import PropTypes from 'prop-types';
import { Form, Textbox } from 'form-wrapper';

const Register = ({ onSubmit, isValid, canSubmit }) => (
  <Form formID="userRegistration" submit={onSubmit} formTitle="User Registration" canSubmit={canSubmit}>
    <Textbox label="Name" name="userName" placeholder="Name" />
    <Textbox label="UserID" name="userID" placeholder="UserID" />
    <Textbox label="EmailID" name="userEmail" isValid={isValid} validation="isEmail" error="This is not a valid email" placeholder="Email address" />
    <Textbox type="password" label="Password" name="userPassword" placeholder="Password" isValid={isValid} validation="isPassword" error="Should be more than 16 chars" />
    <Textbox type="password" label="Confirm Password" name="userConfirmPassword" placeholder="Confirm Password" />
  </Form>
);

Register.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isValid: PropTypes.func,
  canSubmit: PropTypes.bool,
};

Register.defaultProps = {
  isValid: undefined,
  canSubmit: true,
};

export default Register;
