import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from '../style/components/RecognizeAudioStyle' 
import { BiMicrophone, BiMicrophoneOff } from 'react-icons/bi'

import { enableRecognizeSpeechSagaAction } from '../redux/actions/enableRecognizeSpeechAction'

const RecognizeAudio = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    const [listenAudio, setListenAudio] = useState(false)

    return (
        <div className={classes.content}>
            <button onClick={() => {dispatch(enableRecognizeSpeechSagaAction())}} className={classes.audioRecognizerButton}>
                {
                    listenAudio ? 
                    <BiMicrophone className={classes.microAudio} /> 
                    : <BiMicrophoneOff className={classes.microAudio} />
                }
            </button>
            <i> Press to start recognizer </i>
        </div>
    )
}

export default RecognizeAudio