import {makeStyles} from '@material-ui/core'

export const useStyles = makeStyles(({
    customButtom: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "50px",
        padding: "10px",
        cursor: "pointer",
        border: "6px solid #337AB7",
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
    },
    titleOpt: {
        fontSize: "calc(.5em + 1vw)",
        color: "#337"
    }
    
}))