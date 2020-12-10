import React from "react";

const QuizButtons = ({ onClick, show, nr, total }) => {
  return (
    <div className="d-flex justify-content-center">
      <div id="submit" className="d-flex justify-content-center">
        {show ? (
          <button className="fancy-btn" onClick={onClick}>
            {nr === total ? "Finish quiz" : "Next question"}
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default QuizButtons;
