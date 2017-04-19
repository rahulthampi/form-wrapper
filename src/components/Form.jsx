import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render = () => {
    const { formID, submit, formTitle, children } = this.props;

    return (
      <form id={formID} onSubmit={e => submit(e)}>
        {formTitle && <div><h4>{formTitle}</h4></div>}
        {' '}
        {children}
      </form>
    );
  }
}

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
