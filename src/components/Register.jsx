import React from 'react';
import PropTypes from 'prop-types';

import Form from './Form';
import TextBox from './TextBox';

const Register = ({ submit }) => (
  <Form formID="userRegistration" submit={submit} formTitle="User Registration">
    <TextBox title="Name" name="userName" placeholder="Name" />
    <TextBox title="UserID" name="userID" placeholder="UserID" />
    <TextBox type="email" title="EmailID" name="userEmail" placeholder="Email address" />
    <TextBox type="password" title="Password" name="userPassword" placeholder="Password" />
    <TextBox type="password" title="Confirm Password" name="userConfirmPassword" placeholder="Confirm Password" />
  </Form>
);

Register.propTypes = {
  submit: PropTypes.func.isRequired,
};

export default Register;
