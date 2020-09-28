import React from "react";

import { Storage } from "aws-amplify";

import { getNewListOfQuestions } from "../services/questionService";

import Answers from "./Answers";
import Footer from "./Footer";
import Popup from "./Popup";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nr: 0,
      total: 10,
      showButton: false,
      questionAnswered: false,
      score: 0,
      displayPopup: "d-flex",
      questions: null,
      questionImage: null,
      isLoading: true,
    };

    this.nextQuestion = this.nextQuestion.bind(this);
    this.handleShowButton = this.handleShowButton.bind(this);
    this.handleStartQuiz = this.handleStartQuiz.bind(this);
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  }

  pushData(nr) {
    this.setState({
      questionImage: this.selectFile(this.state.questions[nr].icon),
      question: this.state.questions[nr].question,
      answers: [
        this.state.questions[nr].answers[0],
        this.state.questions[nr].answers[1],
        this.state.questions[nr].answers[2],
        this.state.questions[nr].answers[3],
      ],
      correct: this.state.questions[nr].correct,
      nr: this.state.nr + 1,
    });
  }

  async componentDidMount() {
    const newListOfQuestions = await getNewListOfQuestions();
    this.setState({ questions: newListOfQuestions });

    let { nr } = this.state;

    if (this.state.questions) {
      this.pushData(nr);
      this.setState({ isLoading: false });
    }
  }

  selectFile = async (key) => {
    const result = await Storage.get(key, { level: "public" });
    this.setState({ questionImage: result });
  };

  nextQuestion() {
    let { nr, total } = this.state;

    if (nr === total) {
      this.setState({
        displayPopup: "flex",
      });
    } else {
      this.pushData(nr);
      this.setState({
        showButton: false,
        questionAnswered: false,
      });
    }
  }

  handleShowButton() {
    this.setState({
      showButton: true,
      questionAnswered: true,
    });
  }

  handleStartQuiz() {
    this.setState({
      displayPopup: "none",
      nr: 1,
    });
  }

  handleIncreaseScore() {
    this.setState({
      score: this.state.score + 1,
    });
  }

  render() {
    let {
      nr,
      total,
      answers,
      correct,
      showButton,
      questionAnswered,
      displayPopup,
      score,
      isLoading,
    } = this.state;

    if (isLoading) {
      return (
        <div className="App">
          <b>Loading...</b>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="text-center">
          <Popup
            style={{ display: displayPopup }}
            score={score}
            total={total}
            startQuiz={this.handleStartQuiz}
          />

          <div className="d-flex justify-content-center">
            <div id="question">
              <h4>
                Question {nr}/{total}
              </h4>
              <p>
                Can you choose the correct service belonging to this icon !?
              </p>
            </div>
          </div>

          {this.state.questions ? (
            <div>
              <div className="d-flex justify-content-center">
                <img src={this.state.questionImage} className="img-fluid" />
              </div>

              <div className="d-flex justify-content-center">
                <div id="submit" className="d-flex justify-content-center">
                  {showButton ? (
                    <button className="fancy-btn" onClick={this.nextQuestion}>
                      {nr === total ? "Finish quiz" : "Next question"}
                    </button>
                  ) : null}
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <Answers
                  answers={answers}
                  correct={correct}
                  showButton={this.handleShowButton}
                  isAnswered={questionAnswered}
                  increaseScore={this.handleIncreaseScore}
                />
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <div id="submit" className="d-flex justify-content-center">
                <p>
                  <i>Add questions as an admin or turn on your internet.</i>
                </p>
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
