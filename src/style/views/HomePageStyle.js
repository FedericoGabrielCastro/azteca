import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    homeContent: {
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10vh"
    },
    titleApp: {
        fontSize: "calc(2em + 1vw)",
        textAlign: "center",
        color: "#000",
    },
    buttonsContent: {
        display: "flex",
        width: "50vh",
        justifyContent: "space-around",
        gap: "10px",
    },
    buttonOpt: {
        cursor: "pointer",
        padding: "30px 40px",
        border: "2px solid #337AB7",
        borderRadius: "10%",
        backgroundColor: "#000",
        transition: "2s",
        "&:hover": {
            backgroundColor: "#fff"
        }
    },
    iconOpt: {
        fontSize: "calc(2em + 1vw)",
        color: "#337"
    }
}))