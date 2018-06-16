import * as React from 'react'
import * as gameLogic from '../lib/game'

export default function Hangman(props) {

  if (!gameLogic.wrongGuessLimit(props.word, props.guesses) && !gameLogic.gameFinished(props.word, props.guesses)) {
    return (<div>
      <h2>{gameLogic.showGuess(props.word, props.guesses)}</h2>
      <h2>{props.guesses}</h2>
      <h2>{gameLogic.wrongGuessCount(props.word, props.guesses)}</h2>
    </div>)
  } else if (gameLogic.isWinner(props.word, props.guesses)) {
    return (<div>
      <h2>You won!</h2>
    </div>)
  } else {
    return (<div>
      <h2>You Lost</h2>
    </div>)
  }
}
