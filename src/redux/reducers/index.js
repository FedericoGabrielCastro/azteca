import { combineReducers } from "redux";
import { setRecognizerSpeechReducer } from "./setRecognizerSpeechReducer";

export const rootReducers = combineReducers({
    setRecognizerSpeechReducer: setRecognizerSpeechReducer
})