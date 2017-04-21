import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
      const formValues = [...e.target.elements]
        .filter(el => el.type !== 'submit')
        .reduce((acc, el) => ({
          ...acc,
          [el.name]: {
            value: el.value,
            props: el.dataset,
          },
        }), { formID });

      // TODO: handle form submit here
      // this.setState({ isSubmitted: true });
      submitForm(
        JSON.stringify(formValues, null, 4),
      );
    }

    handleValidation = (e) => {
      // handle form validation
      console.log(e.target.dataset);
    }

    render = () => (
      <WrapperComponent
        onSubmit={this.handleSubmitForm}
        onBlur={this.handleValidation}
      />
    )

    static propTypes = {
      submitForm: PropTypes.func.isRequired,
    };
  }
);

export default CreateForm;
