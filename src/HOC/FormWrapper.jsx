import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Helpers from '../utils/helpers';
import Validation from '../utils/validation';

const CreateForm = WrapperComponent => (
  class FormWrapper extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isSubmitted: false,
        formValues: {},
        canSubmit: false,
      };
    }

    setFormValues = (target, isInputValid) => {
      this.setState({
        formValues: ({
          ...this.state.formValues,
          [target.name]: {
            value: target.value,
            isInputValid,
          },
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

    handleValidation = (target, validationParams) => {
      const targetName = target.name;
      const targetValue = target.value;
      const [rule, ...valParams] = validationParams;
      const { formValues } = this.state;

      if (!Validation[rule] && typeof Validation[rule] !== 'function') {
        return Helpers.throwError(`FormWrapper: Validation rule '${rule}' for '${targetName}' is invalid`);
      }

      if (validationParams.length > 1) {
        return Validation[rule](formValues, targetValue, valParams);
      }

      return Validation[rule](targetValue);
    }

    render = () => (
      <WrapperComponent
        onSubmit={this.handleSubmitForm}
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
