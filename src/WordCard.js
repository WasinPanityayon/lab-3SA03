import React, { useState } from 'react';
import _ from 'lodash';

import CharacterCard from './CharacterCard';

const prepareStateFromWord = (given_word) => {
    let word = given_word.toUpperCase()
    let chars = _.shuffle(Array.from(word))
    return {
    word,
    chars,
    attempt: 10,
    guess: '',
    completed: false
    }
}

export default function WordCard(props) {

    const [state, setState] = useState(prepareStateFromWord(props.value))

    const Refresh = () =>{ window.location.reload(); }
    const Answer = () =>{alert(`Anwser is "${props.value}"`); }
    const activationHandler = (c) => {
        console.log(`${c} has been activated.`)

        let guess = state.guess + c
        setState({...state, guess}) 

        if(guess.length === state.word.length){ 
            if(guess === state.word){
                console.log('yeah!')
                setState({...state, guess: '', completed: true})
                alert(`congrats! You found the word ${props.value}`);
                state.attempt = 10
            }else{
                console.log('reset, next attempt')
                setState({...state, guess: '',attempt: state.attempt - 1})
                if (state.attempt === 1) {
                    alert("Game over! You don't have remaining guesses")
                    state.attempt = 10
                    window.location.reload();
                }
            }
        } 
    }

    return (
        <div className='main'>
            <h1>Guess the Word</h1>
            <div className='content'>
                <div>
                    {
                        state.chars.map((c, i) => 
                            <CharacterCard value={c} key={i} activationHandler={activationHandler} attempt={state.attempt}/>
                        )
                    }
                </div>
                <div className='details'>
                    <p className='hint'>Hint: <span>{props.hint}</span></p>
                    <p className='guess'>Remaining Guess: <span>{state.attempt}</span></p>
                    <p className='yourcard'>your card select: 
                        <span className='card2'>
                            "{state.guess}"
                        </span>
                    </p>
                </div>
                <botton className='reset-btn' onClick={Refresh}>Reset game</botton>
                <botton className='reset-btn' onClick={Answer}>Answer</botton>
            </div>
        </div>
    )
}