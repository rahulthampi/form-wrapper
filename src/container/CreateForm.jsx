import React, { Component } from 'react';

const CreateForm = options => WrapperComponent =>
  class extends Component {
    constructor(props) {
      super(props);

      this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler = (e) => {
      e.preventDefault();
      const { submitForm } = options;

      submitForm(e);
    }

    render = () =>
      <WrapperComponent submit={this.submitHandler} />
  };

export default CreateForm;
