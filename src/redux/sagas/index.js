import { takeLatest } from 'redux-saga/effects'
import { setRecognizerSpeechSaga } from './setRecognizerSpeechSaga'

import { SET_RECOGNIZER_AUDIO_SAGA } from '../types'

export function* watcherSaga() {
    // yield takeLatest(GET_RECOGNIZER_AUDIO_SAGA, startRecognizerAudioSaga)
    yield takeLatest(SET_RECOGNIZER_AUDIO_SAGA, setRecognizerSpeechSaga)
}