export const newGame = 'NEW_GAME'
export const makeGuess = 'MAKE_GUESS'

export function newGame(id, title) {
  return {
    type: NEW_GAME,
    payload: {
      id,
      title
    }
  }
}

export function makeGuess(id, title) {
  return {
    type: MAKE_GUESS,
    payload: {
      id,
      title
    }
  }
}
