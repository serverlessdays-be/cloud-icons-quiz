import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import TwitterShare from "./socials/TwitterShare";

const Popup = ({ startQuiz, score, total, style, quiz }) => {
  const [time, setTime] = useState("start");
  const [title, setTitle] = useState("Welcome to the Serverless Icon Quiz");
  const [buttonText, setButtonText] = useState("Start the quiz");
  const history = useHistory();

  const popupHandle = () => {
    if (time === "start") {
      setTime("end");
      setTitle("Congratulations!");
      setButtonText("New quiz!");
      startQuiz();
    } else {
      history.push("/");
    }
  };

  return (
    <div className="popup-container" style={style}>
      <div className="container">
        <div className="popup">
          <h1>{title}</h1>
          <p>
            <b>
              {score
                ? score + " out of " + total
                : "Let's dive in and prove ourselves! "}
            </b>
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "0.5rem",
            }}
          >
            {score && (
              <>
                <p>Share this result on Twitter: </p>
                <TwitterShare score={score} quiz={quiz} />
              </>
            )}
            <p>
              Interested in more serverless? Join:
              <a
                href="https://www.meetup.com/nl-NL/ServerlessDays-Belgium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <strong> ServerlessDaysBE!</strong>
              </a>
            </p>
            <button className="fancy-btn" onClick={popupHandle}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
