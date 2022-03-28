import React, { useState } from 'react'
import { useStyles } from '../style/components/RecognizeAudioStyle' 
import { BiMicrophone, BiMicrophoneOff } from 'react-icons/bi'

const RecognizeAudio = () => {
    const classes = useStyles()

    const [listenAudio, setListenAudio] = useState(false)

    return (
        <div className={classes.content}>
            <button className={classes.audioRecognizerButton}>
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