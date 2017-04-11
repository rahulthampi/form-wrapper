import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CreateFormHOC = (options = {}) => WrapperComponent =>
  class extends Component {
    constructor(props) {
      super(props);

      this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler = (e) => {
      e.preventDefault();
      const { submitForm } = this.props;
      const formId = e.target.id;
      const formEl = [...e.target.elements];
      const formValues = formEl
        .filter(el => el.type !== 'submit')
        .reduce((acc, el) => ({
          ...acc,
          [el.name]: el.value,
        }), {});

      submitForm(
        formValues,
        formId,
      );
    }

    render = () =>
      <WrapperComponent submit={this.submitHandler} />

    static propTypes = {
      submitForm: PropTypes.func.isRequired,
    };
  };

export default CreateFormHOC;
