import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Helpers from '../utils/helpers';
import Validation from '../utils/validation';

const CreateForm = WrapperComponent => (
  class FormWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        canSubmit: false,
        isSubmitted: false,
        formValues: {},
      };
    }

    setFormValues = (target, value) => {
      this.setState({
        formValues: ({
          ...this.state.formValues,
          [target]: value,
        }),
      });
    }

    handleSubmitForm = (e) => {
      e.preventDefault();
      const { submitForm } = this.props;
      const formValues = Helpers.formToJSON(e.target);

      // TODO: handle form submit here
      submitForm(
        JSON.stringify(formValues, null, 4),
      );
    }

    handleValidation = (e, validationParams) => {
      const [rule, ...valParams] = validationParams;
      const target = e.target.name;
      const value = e.target.value;
      const { formValues } = this.state;

      if (!Validation[rule] && typeof Validation[rule] !== 'function') {
        console.error(`FormWrapper: Validation rule '${rule}' for '${target}' is invalid`);
        return false;
      }

      if (validationParams.length > 1) {
        return Validation[rule](formValues, value, valParams);
      }

      return Validation[rule](value);
    }

    render = () => (
      <WrapperComponent
        onSubmit={this.handleSubmitForm}
        canSubmit={this.state.canSubmit}
        isValid={this.handleValidation}
        formValues={this.state.formValues}
        setFormValues={this.setFormValues}
      />
    )

    static propTypes = {
      submitForm: PropTypes.func.isRequired,
    };
  }
);

export default CreateForm;
