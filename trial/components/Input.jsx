/* import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value || '',
      isValid: true,
    };
  }

  handleInputChange = (e) => {
    // handle individual input change here
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleInputBlur = (e, rule) => {
    this.setState({
      isValid: this.props.validator(e.target.value, rule),
    });
  }

  render = () => {
    const { inputValue,
      isValid,
    } = this.state;
    const {
      validator,
      validation,
      errorMessage,
      className,
      label,
      name,
      ...inputProps
    } = this.props;
    const wrapperClassName = `input-group ${className}`;

    return (
      <div className={wrapperClassName}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          value={inputValue}
          onChange={this.handleInputChange}
          onBlur={validation && (e => this.handleInputBlur(e, validation))}
          name={name}
          {...inputProps}
        />
        {!isValid && <span className="error-message">{errorMessage}</span>}
      </div>
    );
  }
}

FormInput.propTypes = {
  value: PropTypes.string,
  validation: PropTypes.string,
  errorMessage: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
};

FormInput.defaultProps = {
  type: 'text',
  value: undefined,
  validation: undefined,
  errorMessage: undefined,
  className: undefined,
  label: undefined,
};

export default FormInput;*/
