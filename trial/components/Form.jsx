/* import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  submit = (e) => {
    e.preventDefault();
    this.props.submit(e);
  }

  render() {
    const { formID, formTitle } = this.props;

    return (
      <form id={formID} onSubmit={e => this.submit(e)}>
        {formTitle && <div className="form-title"><h3>{formTitle}</h3></div>}
        {this.props.children}
        <button type="submit" className={`${formID}-btn`}>Submit</button>
      </form>
    );
  }
}

Form.propTypes = {
  formID: PropTypes.string.isRequired,
  children: PropTypes.array.isRequired,
  submit: PropTypes.func.isRequired,
  formTitle: PropTypes.string,
};

Form.defaultProps = {
  formTitle: undefined,
};

export default Form;*/
