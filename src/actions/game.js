const newGame = 'NEW_GAME'
const makeGuess = 'MAKE_GUESS'

export function newGame(randomWord) {
  return {
    type: NEW_GAME,
    payload: randomWord
  }
}

export function makeGuess(guessLetter) {
  return {
    type: MAKE_GUESS,
    payload: guessLetter
  }
}
