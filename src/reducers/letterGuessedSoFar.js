export default (state = [], action = {}) => {
  switch (action.type) {
  case 'MAKE_GUESS':
    return [...state, action.payload]
  case 'NEW_GAME':
    return []
  default:
    return state
  }

}
