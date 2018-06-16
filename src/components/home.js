import * as React from 'react'
import {Link} from 'react-router-dom'


export default function home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <h2><Link to='/hangman'> Start the game </Link></h2>
    </div>
  )
}
