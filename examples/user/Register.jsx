import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'form-wrapper';

const Register = ({ submit }) => (
  <Form formID="userRegistration" submit={submit} formTitle="User Registration">
    <Input type="text" title="Name" name="userName" placeholder="Name" />
    <Input type="text" title="UserID" name="userID" placeholder="UserID" />
    <Input type="email" title="EmailID" name="userEmail" placeholder="Email address" />
    <Input type="password" title="Password" name="userPassword" placeholder="Password" />
    <Input type="password" title="Confirm Password" name="userConfirmPassword" placeholder="Confirm Password" />
    <button type="submit">Submit</button>
  </Form>
);

Register.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Register;
