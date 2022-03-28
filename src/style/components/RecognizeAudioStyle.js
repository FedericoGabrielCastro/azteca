import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    content: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        gap: "10px"
    },
    audioRecognizerButton: {
        padding: "20px",
        border: "2px solid #337",
        borderRadius: 15,
        background: "#000",
        transition: "2s",
        "&:hover": {
            background: "#fff"
        }
    },
    microAudio: {
        fontSize: "4em",
        color: "#337"
    }
}))