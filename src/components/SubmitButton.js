import React, {Component} from 'react'


export class SubmitButton extends Component {

  handleClick = (event) => {


    if (this.props.guesses.includes(event.target.value)) {
    //  console.log('used this letter')
    } else {
      this.props.makeGuess(event.target.value.toLowerCase())
    }



  }
    render() {
      const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");

      return (
        <div>
          {alphabet.map((letter, index) => <button key={letter} onClick={this.handleClick} value={letter}>{letter}</button>)}
        </div>
      );
    }

}
