import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Validation from '../utils/validation';

const CreateForm = WrapperComponent => (
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
      submitForm(
        JSON.stringify(formValues, null, 4),
      );
    }

    handleValidation = (e, rule) => {
      const target = e.target.name;
      const value = e.target.value;

      if (typeof Validation[rule] !== 'function') {
        console.error(`FormWrapper: Validation rule '${rule}' for '${target}' is invalid`);
        return false;
      }
      return Validation[rule](value);
    }

    render = () => (
      <WrapperComponent
        onSubmit={this.handleSubmitForm}
        canSubmit={this.state.canSubmit}
        isValid={this.handleValidation}
      />
    )

    static propTypes = {
      submitForm: PropTypes.func.isRequired,
    };
  }
);

export default CreateForm;
