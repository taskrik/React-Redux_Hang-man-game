import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import { Route } from 'react-router-dom'
import hangman from './components/hangman'
import home from './components/home'

class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <Route exact path="/" component={home} />
        <Route exact path="/hangman" component={hangman} />

      </div>
    </Provider>
    );
  }
}

export default App;
