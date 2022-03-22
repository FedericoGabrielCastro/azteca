import React from 'react'
import AnimatePageRender from '../components/AnimatePageRender'
import { useStyles } from '../style/views/VideoPageStyle'

import VideoPageButtons from '../components/VideoPageButtons'
import Video from '../components/Video'

const VideoPage = () => {
    const classes = useStyles()
    
    return (
        <AnimatePageRender>
            <main className={classes.videoPageContent}>
                <aside className={classes.videoContent}>
                    <Video />
                </aside>
                <section className={classes.buttonsContent}>
                    <VideoPageButtons />
                </section>
            </main>
        </AnimatePageRender>
    )
}

export default VideoPage