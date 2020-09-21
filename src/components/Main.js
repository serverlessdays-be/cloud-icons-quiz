import React from 'react';

import { listServices } from '../graphql/queries'
import { API, graphqlOperation, Storage } from 'aws-amplify'


import data from '../data/data';
import Answers from './Answers';
import Footer from './Footer';
import Popup from './Popup';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nr: 0,
            total: data.length,
            showButton: false,
            questionAnswered: false,
            score: 0,
            displayPopup: 'd-flex',
            services: [],
            names: [],
            questionImage: null
        }
        this.nextQuestion = this.nextQuestion.bind(this);
        this.handleShowButton = this.handleShowButton.bind(this);
        this.handleStartQuiz = this.handleStartQuiz.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    }

    pushData(nr) {
        this.setState({
            question: data[nr].question,
            answers: [data[nr].answers[0], data[nr].answers[1], data[nr].answers[2], data[nr].answers[3]],
            correct: data[nr].correct,
            nr: this.state.nr + 1
        });
    }

    async componentDidMount() {
        console.log('invoking getAllServiceOptiosn')
        await this.getAllServiceOptions()
        this.state.services.forEach((service) => {
            this.state.names.push(service.serviceName)
        })
        console.log(this.state.names)
        await this.selectFile(this.state.services[0].icon)
    }

    async getAllServiceOptions() {
        try {
            console.log('making api call')
            const result = await API.graphql({
                query: listServices,
                authMode: 'API_KEY',
            })
            this.state.services = result.data.listServices.items

            console.log(`${JSON.stringify(this.state.services)}`)
        } catch (err) {
            console.log('err: ', err)
        }
    }

    selectFile = async (key) => {
        const result = await Storage.get(key, { level: 'public' })
        console.log(result)
        this.setState({ questionImage: result })
        console.log(`Current image: ${JSON.stringify(this.state.questionImage)}`)
    }

    componentWillMount() {
        let { nr } = this.state;
        this.pushData(nr);
    }

    nextQuestion() {
        let { nr, total, score } = this.state;

        if (nr === total) {
            this.setState({
                displayPopup: 'flex'
            });
        } else {
            this.pushData(nr);
            this.setState({
                showButton: false,
                questionAnswered: false
            });
        }

    }

    handleShowButton() {
        this.setState({
            showButton: true,
            questionAnswered: true
        })
    }

    handleStartQuiz() {
        console.log('handling start')
        this.setState({
            displayPopup: 'none',
            nr: 1
        });
    }

    handleIncreaseScore() {
        console.log('increasing score')
        this.setState({
            score: this.state.score + 1
        });
    }

    render() {
        let { nr, total, question, answers, correct, showButton, questionAnswered, displayPopup, score } = this.state;

        return (
            <div className="container">
                <div className="text-center">
                    <Popup style={{ display: displayPopup }} score={score} total={total} startQuiz={this.handleStartQuiz} />

                    <div className="d-flex justify-content-center">
                        <div id="question">
                            <h4>Question {nr}/{total}</h4>
                            <p>Can you choose the correct service belonging to this icon !?</p>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <img src={this.state.questionImage} className="img-fluid" />
                    </div>


                    <div className="d-flex justify-content-center">
                        <img src={`${data[nr - 1].icon}`} className="img-fluid" />
                    </div>



                    <div className="d-flex justify-content-center">
                        <div id="submit" className="d-flex justify-content-center">
                            {showButton ? <button className="fancy-btn" onClick={this.nextQuestion} >{nr === total ? 'Finish quiz' : 'Next question'}</button> : null}
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Answers answers={answers} correct={correct} showButton={this.handleShowButton} isAnswered={questionAnswered} increaseScore={this.handleIncreaseScore} />
                    </div>
                </div>
                <Footer />

            </div>
        );
    }
};

export default Main
