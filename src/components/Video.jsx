import React, {useEffect, useRef} from 'react'
import { useStyles } from '../style/components/VideoStyle'
import Webcam from "react-webcam"

import "@tensorflow/tfjs"
import * as facemesh from "@tensorflow-models/facemesh"
import * as handpose from "@tensorflow-models/handpose"
import * as posenet from "@tensorflow-models/posenet"

// import { drawMesh } from '../utils/faceTriangulationDrawer'
// import { drawHand } from '../utils/handPrediction'
import { drawKeypoints, drawSkeleton } from '../utils/bodyPredictionDraw'


const Video = () => {
    const classes = useStyles()

    // Setup references.
    const webcamRef = useRef(null)
    const canvasRef = useRef(null) 
    
    // Load facemesh.
    // const runFaceMesh = async () => {
    //     const net = await facemesh.load({
    //         inputResolution: {
    //             width: 640,
    //             height: 480
    //         },
    //          scale: 0.8
    //     })
        
    //     // Detect the face every 100 miliseconds
    //     setInterval(() => {
    //         detect(net)
    //         console.log("NEW DETECT FACE")
    //     }, 1000)
    // }

    // // Load hands.
    // const runHandPose = async () => {
    //     const net = await handpose.load()
        
    //     // Detect the face every 100 miliseconds
    //     setInterval(() => {
    //         detect(net)
    //         console.log("NEW DETECT HAND")
    //     }, 100)
    // }

    // Load posenet.
    const runPosenet = async () => {
        const net = await posenet.load({
            inputResolution: {
                width: 640,
                height: 480
            }, 
            scale: 0.8
        })
        
        // Detect the face every 100 miliseconds
        setInterval(() => {
            detect(net)
            console.log("NEW DETECT POSE")
        }, 10000)
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
            // canvasRef.current.width = videoWidth
            // canvasRef.current.height = videoHeight
            
            // Make detections.
            // const face = await net.estimateFaces(video)
            // const hand = await net.estimateHands(video)
            const pose = await net.estimateSinglePose(video)
            console.log(pose)

            // Get canvas context for drawing.
            // const ctx = canvasRef.current.getContext("2d")
            // drawMesh(face, ctx)
            // drawHand(hand, ctx)
            drawCanvas(pose, video, videoWidth, videoHeight, canvasRef)

        }
    }

    // Draw canvas for body detection.
    const drawCanvas = (pose, video, videoWidth, videoHeight, canvas) => {
        const ctx = canvas.current.getContext("2d")

        canvas.current.width = videoWidth
        canvas.current.height = videoHeight

        drawKeypoints(pose["keypoints"], 0.6, ctx);
        drawSkeleton(pose["keypoints"], 0.7, ctx);
    }

    useEffect(() => {
        // runFaceMesh()
        // runHandPose()
        runPosenet()
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