import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'form-wrapper';

const Register = ({ submit }) => (
  <Form formID="userRegistration" submit={submit} formTitle="User Registration">
    <Input label="Name" name="userName" placeholder="Name" />
    <Input label="UserID" name="userID" placeholder="UserID" />
    <Input label="EmailID" name="userEmail" placeholder="Email address" />
    <Input type="password" label="Password" name="userPassword" placeholder="Password" />
    <Input type="password" label="Confirm Password" name="userConfirmPassword" placeholder="Confirm Password" />
    <button type="submit">Submit</button>
  </Form>
);

Register.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Register;
