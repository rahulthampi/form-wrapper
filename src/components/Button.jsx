import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, type }) => (
  <button type={type}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Button.defaultProps = {
  type: null,
};

export default Button;
