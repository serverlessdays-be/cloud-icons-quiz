import React from "react";

const QuizHeader = ({ nr, total }) => {
  return (
    <div className="d-flex justify-content-center">
      <div id="question">
        <h4>
          Question {nr + 1}/{total}
        </h4>
        <p>Can you choose the correct service belonging to this icon !?</p>
      </div>
    </div>
  );
};

export default QuizHeader;
