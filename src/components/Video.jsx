import React, {useEffect, useRef} from 'react'
import { useStyles } from '../style/components/VideoStyle'
import "@tensorflow/tfjs"
import * as facemesh from "@tensorflow-models/facemesh"
import Webcam from "react-webcam"

import { drawMesh } from '../utils/faceTriangulationDrawer'


const Video = () => {
    const classes = useStyles()

    // Setup references.
    const webcamRef = useRef(null)
    const canvasRef = useRef(null) 
    
    // Load facemesh.
    const runFaceMesh = async () => {
        const net = await facemesh.load({
            inputResolution: {
                width: 640,
                height: 480
            }, scale: 0.8
        })
        // Detect the face every 100 miliseconds
        setInterval(() => {
            detect(net)
            console.log("NEW DETECT FACE")
        }, 100)
    }

    // Detect function.
    const detect = async (net) => {
        if(
            typeof webcamRef.current !== "undefined" 
            && webcamRef.current !== null 
            && webcamRef.current.video.readyState === 4){
            // Get video properties.
            const video = webcamRef.current.video
            const videoWidth = webcamRef.current.video.videoWidth
            const videoHeight = webcamRef.current.video.videoHeight
            
            // Set video width.
            webcamRef.current.video.width = videoWidth
            webcamRef.current.video.height = videoHeight

            // Set canvas width.
            canvasRef.current.width = videoWidth
            canvasRef.current.height = videoHeight
            // Make detections.
            const face = await net.estimateFaces(video)
            console.log(face)
            // Get canvas context for drawing.
            const ctx = canvasRef.current.getContext("2d")
            drawMesh(face, ctx)
        }
    }

    useEffect(() => {
        runFaceMesh()
    })

    return (
        <div>
            <Webcam 
                    ref={webcamRef}
                    className={classes.webcam}
                />
                <canvas 
                    ref={canvasRef}
                    className={classes.canvasWebcam}
                />
        </div>
    )
}

export default Video