import React from 'react'
import { useStyles } from '../style/components/LoadingPage'

const LoadingPage = () => {
    const classes = useStyles()

    return (
        <h3 className={classes.textInfo}>
            <i>Loading ...</i>
        </h3>
    )
}

export default LoadingPage