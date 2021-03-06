import React, { useState, useEffect } from "react";

function Answers(props) {
  const [isAnswered, setIsAnswered] = useState(props.isAnswered);
  const [classNames, setClassNames] = useState(["", "", "", ""]);
  const [answers, setAnswers] = useState(props.answers);

  function checkAnswer(e) {
    if (!isAnswered) {
      let elem = e.currentTarget;
      let { correct, increaseScore } = props;
      // TODO: this is not logical, I don't want to do the minus 1 in the if block
      let answer = Number(elem.dataset.id);
      let updatedClassNames = classNames;

      if (answer - 1 === correct) {
        updatedClassNames[answer - 1] = "right";
        increaseScore();
      } else {
        updatedClassNames[answer - 1] = "wrong";
        updatedClassNames[correct] = "right";
      }

      setClassNames(updatedClassNames);
      props.showButton();
    }
  }

  useEffect(() => {
    setClassNames(["", "", "", ""]);
    setIsAnswered(props.isAnswered);
    setAnswers(props.answers);
  }, [props.answers]);

  return (
    <div className="d-flex justify-content-center">
      <div id="answers">
        <ul>
          <li onClick={checkAnswer} className={classNames[0]} data-id="1">
            <span>1.</span> <p>{answers[0]}</p>
          </li>
          <li onClick={checkAnswer} className={classNames[1]} data-id="2">
            <span>2.</span> <p>{answers[1]}</p>
          </li>
          <li onClick={checkAnswer} className={classNames[2]} data-id="3">
            <span>3.</span> <p>{answers[2]}</p>
          </li>
          <li onClick={checkAnswer} className={classNames[3]} data-id="4">
            <span>4.</span> <p>{answers[3]}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Answers;
