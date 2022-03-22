import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    videoPageContent: {
        display: "flex",
        height: "100vh"
    },
    buttonsContent: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        gap: "10%",

    },
    videoContent: {
        display: "flex",
        flexDirection: "column",
        padding: "6%",
        width: "50%"
    }
}))