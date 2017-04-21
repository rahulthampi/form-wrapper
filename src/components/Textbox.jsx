import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Textbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: props.value || '',
    };
  }

  handleInputChange = (e) => {
    // handle individual input change here
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    const { inputValue } = this.state;
    const {
      label,
      name,
      className,
      ...inputProps
    } = this.props;
    const wrapperClassName = `input-group ${className}`;

    return (
      <div className={wrapperClassName}>
        {label && <label htmlFor={name}>{label}</label>}
        <input
          value={inputValue}
          onChange={this.handleInputChange}
          name={name}
          {...inputProps}
        />
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
};

Textbox.defaultProps = {
  type: 'text',
  value: undefined,
  className: undefined,
  label: undefined,
};

export default Textbox;
