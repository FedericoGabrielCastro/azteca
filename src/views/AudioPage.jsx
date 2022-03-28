import React, { useState, useEffect } from 'react'
import { useStyles } from '../style/views/AudioPageStyle'
import AnimatePageRender from '../components/AnimatePageRender'

import * as tf from "@tensorflow/tfjs"
import * as speech from "@tensorflow-models/speech-commands"
import RecognizeAudio from '../components/RecognizeAudio'

const AudioPage = () => {
    const classes = useStyles()

    const [model, setModel] = useState(null)
    const [action, setAction] = useState(null)
    const [labels, setLabels] = useState([])

    // Create recognizer.
    const loadModel = async () => {
        const recognizer = await speech.create("BROWSER_FFT")
        console.log("model loadead")

        await recognizer.ensureModelLoaded()
        console.log(recognizer.wordLabels()) // Recognizer world

        setModel(recognizer)
        setLabels(recognizer.wordLabels())
    }

    // Maping values. 
    const argMax = (arr) => {
        return arr.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
    }

    // 3. Listen for Actions
    const recognizeCommands = async () =>{
        console.log('START RECOGNIZER')
        
        model.listen( result => {
            console.log(result)
            setAction(labels[argMax(Object.values(result.scores))])
        }, 
        {includeSpectrogram:true, probabilityThreshold:0.9})
        setTimeout( () => model.stopListening(), 20e3 )

    }

    useEffect(() => {
        loadModel()
    }, [])

    return (
        <AnimatePageRender>
            <main className={classes.audioPageContent} >
                <section className={classes.wordListContent}>
                    <ul className={classes.ulContent}>
                        <h1 className={classes.titleList}> Recognizer this words </h1>
                        {
                            labels.slice(2).map((item, index) => {
                                return (
                                    <li className={classes.list} key={index}> 
                                        <i> {item} </i>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
                <aside className={classes.audioDetectedContent}>
                    <RecognizeAudio />
                    {/* <button onClick={recognizeCommands}>Command</button> */}
                    {
                        action ? 
                            <h1 className={classes.showRecognizerLabel}> {action} </h1>
                            : <i className={classes.showRecognizerLabel}> No Action Detected </i> 
                    }
                </aside>
                
                
            </main>
        </AnimatePageRender>
    )
}

export default AudioPage