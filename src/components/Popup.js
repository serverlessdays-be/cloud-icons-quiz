import React from 'react';

class Popup extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            time: 'start',
            title: 'Welcome to the Serverless Icon Quiz',
            text: "Let's dive in!",
            buttonText: 'Start the quiz',
            completed: false
        };

        this.popupHandle = this.popupHandle.bind(this);
    }

    popupHandle() {
        let { time } = this.state;

        if (time === 'start') {
            this.setState({
                time: 'end',
                title: 'Congratulations!',
                buttonText: 'Restart'
            });

            this.props.startQuiz();
        } else {
            window.location.reload();
        }
    }

    createMarkup() {
        let text = ''
        if (!this.state.completed) {
            text = "Let's dive in and prove ourselves!"
        } else if (this.state.completed) {
            text = 'You have (not) completed the quiz. <br /> You now have: <strong>' + this.props.score + '</strong> out of <strong>' + this.props.total + '</strong> questions right. Go for it (again)!'
        }
        return { __html: text };
    }


    render() {

        let { title, text, buttonText } = this.state;

        let { style } = this.props;

        return (
            <div className="popup-container" style={style}>
                <div className="container">

                    <div className="popup">
                        <h1>{title}</h1>
                        <p>{this.props.score !== 0 ? this.props.score + ' out of ' + this.props.total : "Let's dive in and prove ourselves! "}</p>
                        <p>
                            Interested in more serverless? Join: <a href="https://www.meetup.com/nl-NL/ServerlessDays-Belgium/events/272333878/" target="_blank" rel="noopener noreferrer">
                                <strong>ServerlessDaysBE!</strong>
                            </a></p>
                        <button className="fancy-btn" onClick={this.popupHandle}>{buttonText}</button>
                    </div>
                </div>
            </div>

        );
    }
}

export default Popup
