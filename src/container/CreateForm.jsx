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

      submitForm(e);
    }

    render = () =>
      <WrapperComponent submit={this.submitHandler} />

    static propTypes = {
      submitForm: PropTypes.func.isRequired,
    };
  }
);

export default CreateForm;
