import React, {useState, useEffect} from 'react';

export default function Question({question}) {

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const [answerChoices, setAnswerChoices] = useState([question.correct_answer, ...question.incorrect_answers]);
    const [shuffledArray, setShuffledArray] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState('');
    const [pointValue, setPointValue] = useState(null);

    useEffect(() => {
            shuffleAnswers();
            setShuffledArray(answerChoices);
        }, [answerChoices]
    )
    const shuffleAnswers = () => {
        shuffleArray(answerChoices);
    }

    const handleChangeAnswer = e => {
        const answerChoice = e.target.value;
        setSelectedAnswer(answerChoice);
        if (answerChoice === question.correct_answer) {
            setPointValue(1);
            console.log(selectedAnswer);
            console.log(pointValue);
        } else {
            setPointValue(0);
            console.log(selectedAnswer);
            console.log(pointValue);
        }
    }

    return (
        <div className = 'card' onLoad = {shuffleAnswers}>
            <h4>{question.question}</h4>
            {shuffledArray && (<div>
                <form>
                    <label><input type = 'radio' name = 'answer' value = {shuffledArray[0]}
                                  onClick = {handleChangeAnswer}/>
                        {shuffledArray[0]}</label>
                    <br/>
                    <label><input type = 'radio' name = 'answer' value = {shuffledArray[1]}
                                  onClick = {handleChangeAnswer}/>
                        {shuffledArray[1]}</label>
                    <br/>
                    <label><input type = 'radio' name = 'answer' value = {shuffledArray[2]}
                                  onClick = {handleChangeAnswer}/>
                        {shuffledArray[2]}</label>
                    <br/>
                    <label><input type = 'radio' name = 'answer' value = {shuffledArray[3]}
                                  onClick = {handleChangeAnswer}/>
                        {shuffledArray[3]}</label>
                    <br/>
                    <br/>
                </form>
            </div>)}
            {pointValue === 0 && <p>Incorrect</p>}
            {pointValue === 1 && <p>Correct!!</p>}
            <hr className = 'questionDivider'/>
        </div>
    )
}
