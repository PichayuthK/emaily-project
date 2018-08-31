import React from 'react';

const SurveyFormReview = (props) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button className="yellow darken-2 btn-flat" onClick={props.onCancel}>
        Back
      </button>
    </div>
  );
};

export default SurveyFormReview;
