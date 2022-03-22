import React from 'react'
import { useStyles } from '../style/components/VideoPageButtonsStyle'

import { BiFace } from 'react-icons/bi'
import { RiBodyScanLine } from 'react-icons/ri'
import { FaRegHandScissors } from 'react-icons/fa'
import { FaRegObjectGroup } from 'react-icons/fa'

const buttons = [
    { title: "face." ,icon: BiFace },
    { title: "body." ,icon: RiBodyScanLine },
    { title: "hand." ,icon: FaRegHandScissors },
    { title: "object" ,icon: FaRegObjectGroup }
]

const VideoPageButtons = () => {
    const classes = useStyles()

    return buttons.map((item, index) => {
        return (
            <button key={index} className={classes.customButtom}>
                <item.icon className={classes.iconOpt}/>
                <h3 className={classes.titleOpt}>
                    <i> Recognize the {item.title} </i>
                </h3>
            </button>
        )
    })
    
}

export default VideoPageButtons