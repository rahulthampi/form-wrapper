/* import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Validation from '../utils/validation';

const CreateFormHOC = (options = {}) => WrapperComponent =>
  class FormWrapper extends Component {
    submitHandler = (e) => {
      const { submitForm } = this.props;
      const formId = e.target.id;
      const formValues = [...e.target.elements]
        .filter(el => el.type !== 'submit')
        .reduce((acc, el) => ({
          ...acc,
          [el.name]: el.value,
        }), { formId });

      submitForm(
        JSON.stringify(formValues, null, 4),
      );
    }

    runValidator = (value, rule) => Validation[rule](value)

    render = () =>
      <WrapperComponent
        submit={this.submitHandler}
        validator={this.runValidator}
      />

    static propTypes = {
      submitForm: PropTypes.func.isRequired,
    };
  };

export default CreateFormHOC;*/
