import * as React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (<div>
    <h1>Welcome to Home Page</h1>
    <Link to='/hangman'>
      Start the game
    </Link>
  </div>)
}
