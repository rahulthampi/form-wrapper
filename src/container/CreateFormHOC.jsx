import React, { Component } from 'react';
import PropTypes from 'prop-types';

const CreateForm = (options = {}) => WrapperComponent => (
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
      submitForm(
        formEl.reduce((a, b) => {
          if (b.type !== 'submit') a[b.name] = b.value;
          return a;
        }, {}),
        formId,
      );
    }

    render = () =>
      <WrapperComponent submit={this.submitHandler} />

    static propTypes = {
      submitForm: PropTypes.func.isRequired,
    };
  }
);

export default CreateForm;
