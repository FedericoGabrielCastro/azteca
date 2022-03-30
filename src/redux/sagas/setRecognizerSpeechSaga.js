import { put, call } from "redux-saga/effects";
import * as tf from "@tensorflow/tfjs"
import * as speech from "@tensorflow-models/speech-commands"

import { SET_RECOGNIZER_AUDIO_LOADED } from "../types";

export const loadRecognizerSpeech = async () => {
    const recognize = speech.create("BROWSER_FFT")
    await recognize.ensureModelLoaded()

    return recognize
}

export function* setRecognizerSpeechSaga() {
    
    try {
        const recognizer = yield call(loadRecognizerSpeech)
        const wordList = recognizer.wordLabels()
        console.log("Desde saga", recognizer)
        console.log("Desde saga", wordList)
        yield put({
            type: SET_RECOGNIZER_AUDIO_LOADED, 
            recognizer: recognizer,
            wordList: wordList
        })

    } catch (error) {
        console.log("ERROR LOAD RECOGNIZER", error)
    }
}