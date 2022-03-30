import {
    SET_RECOGNIZER_AUDIO_SAGA,
    SET_RECOGNIZER_AUDIO_LOADED,
} from '../types'

export const setRecognizerSpeechSagaAction = () => ({
    type: SET_RECOGNIZER_AUDIO_SAGA,
})

export const setRecognizerSpeechStartAction = ( recognizer, wordList ) => ({
    type: SET_RECOGNIZER_AUDIO_LOADED,
    recognizer: recognizer,
    wordList: wordList
})
