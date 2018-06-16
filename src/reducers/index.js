import {combineReducers} from 'redux'
import letterGuessedSoFar from './letterGuessedSoFar'
import wordBeingGuessed from './wordBeingGuessed'


export  default combineReducers({
  letterGuessedSoFar,wordBeingGuessed
})
