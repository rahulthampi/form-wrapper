import React from 'react';
import PropTypes from 'prop-types';

const FormInput = ({ className, name, title, type, value, placeholder }) => {
  const wrapperClassName = `input-group ${className}`;

  return (
    <div className={wrapperClassName}>
      {title && <label htmlFor={name}>{title}</label>}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};

FormInput.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  placeholder: PropTypes.string,
};

FormInput.defaultProps = {
  className: '',
  type: 'text',
  title: undefined,
  value: undefined,
  placeholder: undefined,
};

export default FormInput;
