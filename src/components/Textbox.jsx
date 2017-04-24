import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value || '',
      isInputValid: true,
    };
  }

  handleInputChange = (e) => {
    // handle individual input change here
    const target = e.target.name;
    const newValue = e.target.value;
    this.props.setFormValues(target, newValue);

    this.setState({
      inputValue: newValue,
    });
  }

  handleInputBlur = (e, validation) => {
    if (this.props.validation) {
      this.setState({
        isInputValid: this.props.isValid(e, validation),
      });
    }
  }

  render() {
    const {
      inputValue,
      isInputValid,
    } = this.state;
    const {
      label,
      name,
      className,
      validation,
      isValid,
      error,
      setFormValues,
      ...inputProps
    } = this.props;
    const wrapperClassName = `input-group ${className}`;

    return (
      <div className={wrapperClassName}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          value={inputValue}
          onChange={this.handleInputChange}
          onBlur={e => this.handleInputBlur(e, validation)}
          name={name}
          {...inputProps}
        />
        {!isInputValid && <span className="validation-error">{error}</span>}
      </div>
    );
  }
}

Textbox.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  validation: PropTypes.string,
  error: PropTypes.string,
  isValid: PropTypes.func,
};

Textbox.defaultProps = {
  type: 'text',
  value: undefined,
  className: undefined,
  label: undefined,
  validation: undefined,
  error: undefined,
  isValid: undefined,
};

export default Textbox;
