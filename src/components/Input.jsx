import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Validation from '../utils/validation';

class FormInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value || '',
      isValid: true,
    };
  }

  handleChange = (e) => {
    const { rule } = this.props;

    this.setState({
      value: e.target.value,
      isValid: Validation[rule](e.target.value),
    });
  };

  render() {
    const { isValid } = this.state;
    const {
      className,
      name,
      label,
      type,
      placeholder,
      required,
      validationMessage,
    } = this.props;
    const wrapperClassName = `input-group ${className}${!isValid && 'validation-error'}`;

    return (
      <div className={wrapperClassName}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          type={type}
          name={name}
          value={this.state.value}
          onChange={this.handleChange}
          placeholder={placeholder}
          required={required}
        />
        {!isValid && <span className="validation-error-message">{validationMessage}</span>}
      </div>
    );
  }
}

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  rule: PropTypes.string,
  validationMessage: PropTypes.string,
  required: PropTypes.bool,
};

FormInput.defaultProps = {
  className: '',
  type: 'text',
  label: undefined,
  value: undefined,
  placeholder: undefined,
  rule: undefined,
  validationMessage: undefined,
  required: false,
};

export default FormInput;
