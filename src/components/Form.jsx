import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ formID, submit, formTitle, children }) => (
  <form id={formID} onSubmit={e => submit(e)}>
    {formTitle && <div>{formTitle}</div>}
    {' '}
    {children}
  </form>
);

Form.propTypes = {
  formID: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  formTitle: PropTypes.string,
};

Form.defaultProps = {
  formTitle: undefined,
};

export default Form;
