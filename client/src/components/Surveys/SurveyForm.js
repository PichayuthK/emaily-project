import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

import SurveyField from './SurveyField';

class SurveyForm extends Component {
  state = {};

  renderField() {
    return (
      <div>
        <Field
          type="text"
          name="title"
          component={SurveyField}
          label="Survey title"
        />
        <Field
          type="text"
          name="subject"
          component={SurveyField}
          label="Subject line"
        />
        <Field
          type="text"
          name="body"
          component={SurveyField}
          label="Email body"
        />
        <Field
          type="text"
          name="emails"
          component={SurveyField}
          label="Recipient list"
        />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit((values) => console.log(values))}
        >
          {this.renderField()}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
