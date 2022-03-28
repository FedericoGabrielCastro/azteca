import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    audioPageContent: {
        display: "flex",
        height: "100vh"
    },
    wordListContent: {
        display: "flex",
        width: "40%",
        alignItems: "center",
        justifyContent: "center"
    },
    ulContent: {
        textAlign: "center",
        color: "#fff",
        fontSize: "1.2em",
        listStyle: "none"
    },
    titleList: {
        color: "#fff"
    },
    audioDetectedContent: {
        display: "flex",
        width: "60%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
    },
    showRecognizerLabel: {
        fontSize: "2em",
        textAlign: "center"
    }
}))