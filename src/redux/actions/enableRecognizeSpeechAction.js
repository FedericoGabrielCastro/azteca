import { 
    START_RECOGNIZER_SPEECH_SAGA,
} from "../types"; 

export const enableRecognizeSpeechSagaAction = () => ({
    type: START_RECOGNIZER_SPEECH_SAGA, 
})
