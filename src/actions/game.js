import {randomWord} from '../lib/game'


export const NEW_GAME = 'NEW_GAME'
export const MAKE_GUESS = 'MAKE_GUESS'

const newWord = randomWord().toString()


export function newGame(word , guesses) {
  return {
    type: NEW_GAME,
    payload: {
      word: newWord ,
       guesses: []
     }
  }
}

export function makeGuess(guesses) {
  return {
    type: MAKE_GUESS,
    payload: guesses
  }
}
