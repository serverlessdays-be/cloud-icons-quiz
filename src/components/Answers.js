import React, { useState, useEffect } from 'react';

function Answers(props) {
    const [isAnswered, setIsAnswered] = useState(props.isAnswered)
    const [classNames, setClassNames] = useState(['', '', '', ''])
    const [answers, setAnswers] = useState(props.answers)

    function checkAnswer(e) {

        if (!isAnswered) {
            let elem = e.currentTarget;
            let { correct, increaseScore } = props;
            // TODO: this is not logical, I don't want to do the minus 1 in the if block
            let answer = Number(elem.dataset.id);
            let updatedClassNames = classNames;

            if (answer - 1 === correct) {
                updatedClassNames[answer - 1] = 'right';
                console.log('increasing score')
                increaseScore();
            }
            else {
                console.log('wrong')
                updatedClassNames[answer - 1] = 'wrong';
                updatedClassNames[correct] = 'right'
            }

            setClassNames(updatedClassNames)
            props.showButton();
        }
    }

    useEffect(() => {
        setClassNames(['', '', '', ''])
        setIsAnswered(props.isAnswered)
        setAnswers(props.answers)
    }, [props.answers])

    return (
        <div id="answers">
            <ul>
                <li onClick={checkAnswer} className={classNames[0]} data-id="1"><span>A</span> <p>{answers[0]}</p></li>
                <li onClick={checkAnswer} className={classNames[1]} data-id="2"><span>B</span> <p>{answers[1]}</p></li>
                <li onClick={checkAnswer} className={classNames[2]} data-id="3"><span>C</span> <p>{answers[2]}</p></li>
                <li onClick={checkAnswer} className={classNames[3]} data-id="4"><span>D</span> <p>{answers[3]}</p></li>
            </ul>
        </div>
    );
}

export default Answers