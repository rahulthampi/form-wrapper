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
    const target = e.target;
    const { isInputValid } = this.state;

    this.setState({
      inputValue: target.value,
    }, () => {
      // TODO: need to rethink on setting values from here
      this.props.setFormValues(target, isInputValid);
    });
  }

  handleInputBlur = (e) => {
    const {
      validation,
      isValid,
      setFormValues,
    } = this.props;
    const { isInputValid } = this.state;
    const target = e.target;

    if (validation) {
      this.setState({
        isInputValid: isValid(target, validation),
      }, () => {
        // TODO: need to rethink on setting values from here
        setFormValues(target, isInputValid);
      });
    }
    // TODO: need to rethink on setting values from here
    setFormValues(target, isInputValid);
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
          onBlur={this.handleInputBlur}
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
  setFormValues: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  validation: PropTypes.array,
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
