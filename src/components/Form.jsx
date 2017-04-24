import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { formID, formTitle, submit, submitText, children, canSubmit } = this.props;

    return (
      <form id={formID} onSubmit={submit}>
        {formTitle &&
          <div className="form-title">
            <h3>{formTitle}</h3>
          </div>
        }
        {children}
        <button type="submit" className={`${formID}-btn`} disabled={!canSubmit}>{submitText}</button>
      </form>
    );
  }
}

Form.propTypes = {
  submit: PropTypes.func.isRequired,
  children: PropTypes.array.isRequired,
  formID: PropTypes.string.isRequired,
  submitText: PropTypes.string,
  formTitle: PropTypes.string,
};

Form.defaultProps = {
  submitText: 'Submit',
  formTitle: undefined,
};

export default Form;
