import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../components/Form';
import Textbox from '../components/Textbox';

import Validation from '../utils/validation';

// const CreateForm = WrapperComponent => (
class FormWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canSubmit: false,
      isSubmitted: false,
    };
  }

  handleSubmitForm = (e) => {
    e.preventDefault();
    const { submitForm } = this.props;
    const formID = e.target.id;
    const formElements = [...e.target.elements].filter(el => el.type !== 'submit');
    const formValues = formElements
      .reduce((acc, el) => ({
        ...acc,
        [el.name]: el.value,
      }), { formID });

    // TODO: handle form submit here
    // this.setState({ isSubmitted: true });
    submitForm(
      JSON.stringify(formValues, null, 4),
    );
  }

  handleValidation = (e, rule) => {
    // handle form validation
    const target = e.target.name;
    const value = e.target.value;

    if (typeof Validation[rule] !== 'function') {
      console.error(`FormWrapper: Validation rule for ${target} is not a valid rule`);
      return false;
    }
    return Validation[rule](value);
  }

  render = () => (
    <Form formID="userRegistration" submit={this.handleSubmitForm} formTitle="User Registration" canSubmit={this.state.canSubmit}>
      <Textbox label="Name" name="userName" placeholder="Name" />
      <Textbox label="UserID" name="userID" placeholder="UserID" />
      <Textbox label="EmailID" name="userEmail" isValid={this.handleValidation} validation="isEmail" error="This is not a valid email" placeholder="Email address" />
      <Textbox type="password" label="Password" name="userPassword" placeholder="Password" isValid={this.handleValidation} validation="isPassword" error="Should be more than 8 chars" />
      <Textbox type="password" label="Confirm Password" name="userConfirmPassword" placeholder="Confirm Password" />
    </Form>
  )
}

FormWrapper.propTypes = {
  submitForm: PropTypes.func.isRequired,
};
// );

// export default CreateForm;
export default FormWrapper;
