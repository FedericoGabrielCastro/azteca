import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useStyles } from '../style/views/AudioPageStyle'
import AnimatePageRender from '../components/AnimatePageRender'

import * as tf from "@tensorflow/tfjs"
import * as speech from "@tensorflow-models/speech-commands"

import RecognizeAudio from '../components/RecognizeAudio'

import { setRecognizerSpeechSagaAction } from '../redux/actions/setRecognizerSpeechAction'

const AudioPage = () => {
    const classes = useStyles()

    const dispatch = useDispatch()

    const wordModel = useSelector(store => store.setRecognizerSpeechReducer.model) // Load speech model.
    const wordList = useSelector(store => store.setRecognizerSpeechReducer.wordList) // Load speech model word list.
    console.log(wordList)
    const [action, setAction] = useState(null)

    // Maping values. 
    const argMax = (arr) => {
        return arr.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
    }

    // 3. Listen for Actions
    const recognizeCommands = async () =>{
        console.log('START RECOGNIZER')
        
        wordModel.listen( result => {
            console.log(result)
            setAction(wordList[argMax(Object.values(result.scores))])
        }, 
        {includeSpectrogram:true, probabilityThreshold:0.9})
        setTimeout( () => wordModel.stopListening(), 20e3 )
    }

    useEffect(() => {
        dispatch(setRecognizerSpeechSagaAction())
    }, [dispatch, setRecognizerSpeechSagaAction])

    return (
        <AnimatePageRender>
            <main className={classes.audioPageContent} >
                <section className={classes.wordListContent}>
                    <ul className={classes.ulContent}>
                        <h1 className={classes.titleList}> Recognizer this words </h1>
                        {
                            wordList.slice(2).map((item, index) => {
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