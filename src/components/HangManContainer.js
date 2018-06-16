import React, {Component} from 'react'
import Hangman from './Hangman'
import {connect} from 'react-redux'
import {newGame, makeGuess} from '../actions/game'

class HangManContainer extends Component {

  componentDidMount() {
    this.props.newGame()
  }

  render() {
    return (<div>
      <Hangman word={this.props.game.word} guesses={this.props.game.guesses}/>
      <button onClick={this.props.newGame}>
        Start New Game
      </button>
    </div>)
  }

}

const mapStateToProps = (state) => {
  return {game: state.game}
}

export default connect(mapStateToProps, {newGame, makeGuess})(HangManContainer)
