import React from 'react'
import { Link } from 'react-router-dom'
import { useStyles } from '../style/views/HomePageStyle'

import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { BsChatSquareText } from "react-icons/bs"
import { AiOutlineAudio } from 'react-icons/ai' 

import AnimatePageRender from '../components/AnimatePageRender'

const buttons = [
    { icon: AiOutlineVideoCameraAdd, to: "/video"},
    { icon: BsChatSquareText, to: "/text" },
    { icon: AiOutlineAudio, to: "/audio"},
]

const HomePage = () => {
    const classes = useStyles()

    return (
        <AnimatePageRender>
            <main className={classes.homeContent}>
                <section>
                    <h1 className={classes.titleApp}>
                        <i>React IA with TensorFlow</i>
                    </h1>
                </section>
                <section className={classes.buttonsContent}>
                    {
                        buttons.map((item, index) => {
                            return (
                                <Link to={item.to} key={index} className={classes.buttonOpt}>
                                    <item.icon className={classes.iconOpt} />
                                </Link>
                            )
                        })
                    }
                </section>
            </main>
        </AnimatePageRender>
    )
}

export default HomePage