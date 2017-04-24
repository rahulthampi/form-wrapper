import React from 'react';
import PropTypes from 'prop-types';
import { Form, Textbox } from 'form-wrapper';

const Register = ({ onSubmit, isValid, canSubmit, setFormValues, ...props }) => (
  <Form formID="userRegistration" submit={onSubmit} formTitle="User Registration" {...props}>
    <Textbox label="Name" name="userName" placeholder="Name" setFormValues={setFormValues} />
    <Textbox label="UserID" name="userID" placeholder="UserID" setFormValues={setFormValues} />
    <Textbox label="EmailID" name="userEmail" isValid={isValid} validation="isEmail" error="This is not a valid email" placeholder="Email address" setFormValues={setFormValues} />
    <Textbox type="password" label="Password" name="userPassword" placeholder="Password" isValid={isValid} validation="isPassword" error="Should be more than 16 chars" setFormValues={setFormValues} />
    <Textbox type="password" label="Confirm Password" name="userConfirmPassword" placeholder="Confirm Password" isValid={isValid} validation="isEqualTo:userPassword" error="no match" setFormValues={setFormValues} />
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
