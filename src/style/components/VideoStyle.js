import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    webcam: {
        border: "6px solid #337AB7",
        borderRadius: "10%",
        position: "absolute",
        width: 640,
        height: 480
    },
    canvasWebcam: {
        position: "absolute",
        width: 640,
        height: 480
    }
}))