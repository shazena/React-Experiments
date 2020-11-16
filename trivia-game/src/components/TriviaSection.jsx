import React from 'react';
import Question from './Question';

export default function TriviaSection({questionList}) {
    return (
        <div className = 'triviaSection'>
            <h2>Answer the Following questions!</h2>
            <div className = 'questionList'>
                {questionList && questionList.map(question => {
                    return <Question question = {question}/>;
                })}
            </div>
        </div>
    )
}
