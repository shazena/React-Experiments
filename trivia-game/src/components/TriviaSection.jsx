import React from 'react';
import Question from './Question';

export default function TriviaSection({questionList}) {

    const handleFormSubmit = e => {
        e.preventDefault();
        const data = e.target;
        console.log(data);
    }


    return (
        <div className = 'triviaSection'>
            <h2>Answer the Following questions!</h2>
            <form onSubmit = {handleFormSubmit}>
                <div className = 'questionList'>
                    {questionList && questionList.map(question => {
                        return <Question question = {question}/>;
                    })}
                </div>
                <button type = 'submit'>Check my score!</button>
            </form>
        </div>
    )
}
