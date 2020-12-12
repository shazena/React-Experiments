import React, {useState, useEffect} from 'react'
import './App.css';
import Header from './components/Header';
import TriviaSection from './components/TriviaSection'
import axios from 'axios';

function App() {
    const [name, setName] = useState('');
    const [nameInput, setNameInput] = useState('');
    const [showInput, setShowInput] = useState(true);
    const [score, setScore] = useState(0);
    const [questionList, setQuestionList] = useState(null);

    useEffect(() => {
        document.title = 'Trivia Game';
        getTriviaQuestions();
    }, []);

    const handleChange = e => {
        const value = e.target.value;
        setNameInput(value);
    }

    const updateName = () => {
        setName(nameInput);
        setShowInput(false);
    }

    const getTriviaQuestions = async () => {
        const response = await axios.get(
            'https://opentdb.com/api.php?amount=10&category=14&type=multiple'
        );
        setQuestionList(response.data.results);
    }


    return (
        <div className = "App">
            <Header/>
            <hr/>
            <div> {/*BEGIN NAME INPUT WELCOME PANEL*/}
                {/*This is the welcome panel*/}
                {/*It can be moved once I figure out how to pass data from a child to a parent*/}
                {showInput === true &&
                (<div id = 'getNameFromUser'>
                    <p>What is your name? </p>
                    <input type = 'text' value = {nameInput} onChange = {handleChange}/>
                    <button onClick = {updateName}>Enter</button>

                </div>)}
                {showInput === false &&
                (<div id = 'showWelcomeMessage'>
                    <h3>Hello, {name}!</h3>
                </div>)}
            </div>
            <hr/>
            {/*END OF NAME INPUT WELCOME PANEL*/}
            {showInput === false &&
            (<div>
                <TriviaSection
                    questionList = {questionList}
                />
                {/*ENTER THE TRIVIA QUESTIONS HERE*/}
            </div>)}

        </div>
    );
}

export default App;
