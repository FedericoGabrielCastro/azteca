import {
    SET_RECOGNIZER_AUDIO_LOADED,
    SET_RECOGNIZER_AUDIO_ERROR
} from '../types'

export const initialState = {
    model: null,
    action: null,
    wordList: []
}

export const setRecognizerSpeechReducer = (state = initialState, { type, recognizer, wordList }) => {
    switch (type) {

        case SET_RECOGNIZER_AUDIO_LOADED:
            return {
                model: recognizer,
                wordList: wordList
            }

        default:
            return state
    }
}
