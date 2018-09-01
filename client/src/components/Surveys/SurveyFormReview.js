import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = (props) => {
  const { onCancel, formValues } = props;
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button className="yellow darken-2 btn-flat" onClick={onCancel}>
        Back
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps)(SurveyFormReview);
