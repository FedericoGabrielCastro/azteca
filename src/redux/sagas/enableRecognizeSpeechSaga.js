import { select } from 'redux-saga/effects'
import { store } from '../store'

export const getWordModel = () => store.getState().setRecognizerSpeechReducer.model

export function* stateRecognizeSpeechSaga() {
    // function recognizeCommands go to be here.
}