import React, { useState, useEffect } from "react";

import { getNewListOfQuestions } from "../../services/questionService";

import Answers from "./Answers";
import Footer from "../Footer";
import Popup from "../Popup";
import QuizHeader from "./QuizHeader";
import ServiceImage from "./ServiceImage";
import QuizButtons from "./QuizButtons";
import LoadingSpinner from "../LoadingSpinner";
import useQuery from "../../hooks/useQuery";

const TOTAL_NUMBER_OF_QUESTIONS = 10;

const Quiz = () => {
  const [questions, setQuestions] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [question, setQuestion] = useState();
  const [answers, setAnswers] = useState();
  const [correct, setCorrect] = useState();
  const [nr, setNr] = useState();
  const [playing, setPlaying] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [questionAnswered, setQuestionAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [displayPopup, setDisplayPopup] = useState("d-flex");
  const query = useQuery();

  useEffect(() => {
    const cloudProvider = query.get("quiz").toUpperCase();
    const getQuestions = async () => {
      const newListOfQuestions = await getNewListOfQuestions(cloudProvider);
      setQuestions(newListOfQuestions);
      console.log("updating number");
      setNr(0);
    };
    getQuestions();
  }, []);

  useEffect(() => {
    console.log("number is: ", nr);
    if (nr >= 0) {
      console.log("pushing data");
      pushData();
      setIsLoading(false);
    }
  }, [nr]);

  const pushData = () => {
    setQuestion(questions[nr]);
    setAnswers(questions[nr].answers);
    setCorrect(questions[nr].correct);
  };

  const nextQuestion = () => {
    if (nr === TOTAL_NUMBER_OF_QUESTIONS - 1) {
      setDisplayPopup("flex");
      setPlaying(false);
    } else {
      setQuestionAnswered(false);
      setShowButton(false);
      setNr(nr + 1);
    }
  };

  const handleShowButton = () => {
    setShowButton(true);
    setQuestionAnswered(true);
  };

  const handleStartQuiz = () => {
    setDisplayPopup("none");
    setPlaying(true);
  };

  const handleIncreaseScore = () => {
    setScore(score + 1);
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className="text-center">
        <Popup
          style={{ display: displayPopup }}
          score={score}
          total={TOTAL_NUMBER_OF_QUESTIONS}
          startQuiz={handleStartQuiz}
        />

        <QuizHeader nr={nr} total={TOTAL_NUMBER_OF_QUESTIONS} />

        {playing && (
          <div>
            <ServiceImage s3Key={questions[nr].icon} />

            <QuizButtons
              onClick={nextQuestion}
              show={showButton}
              nr={nr}
              total={TOTAL_NUMBER_OF_QUESTIONS}
            />

            <Answers
              answers={answers}
              correct={correct}
              showButton={handleShowButton}
              isAnswered={questionAnswered}
              increaseScore={handleIncreaseScore}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Quiz;
