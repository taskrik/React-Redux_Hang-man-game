import React, {Component} from 'react';
import './App.css';
import {Route} from 'react-router-dom'
import HangManContainer from './components/HangManContainer'
import HomeContainer from './components/HomeContainer'

class App extends Component {
  render() {
    return (<div className="App">

      <Route exact="exact" path="/" component={HomeContainer}/>
      <Route exact="exact" path="/hangman" component={HangManContainer}/>

    </div>);
  }
}

export default App;
