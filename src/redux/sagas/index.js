import { takeLatest } from 'redux-saga/effects'

import { setRecognizerSpeechSaga } from './setRecognizerSpeechSaga'
import { enableRecognizeSpeechSaga } from './enableRecognizeSpeechSaga'

import { 
    SET_RECOGNIZER_AUDIO_SAGA,
    START_RECOGNIZER_SPEECH_SAGA
} from '../types'

export function* watcherSaga() {
    yield takeLatest(SET_RECOGNIZER_AUDIO_SAGA, setRecognizerSpeechSaga)
    // yield takeLatest(START_RECOGNIZER_SPEECH_SAGA, enableRecognizeSpeechSaga)
}

