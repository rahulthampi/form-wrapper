import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CreateFormHOC = (options = {}) => WrapperComponent =>
  class FormWrapper extends Component {
    submitHandler = (e) => {
      e.preventDefault();
      const { submitForm } = this.props;
      const formId = e.target.id;
      const formValues = [...e.target.elements]
        .filter(el => el.type !== 'submit')
        .reduce((acc, el) => ({
          ...acc,
          [el.name]: el.value,
        }), { formId });

      submitForm(
        formValues,
      );
    }

    render = () =>
      <WrapperComponent submit={this.submitHandler} />

    static propTypes = {
      submitForm: PropTypes.func.isRequired,
    };
  };

export default CreateFormHOC;
