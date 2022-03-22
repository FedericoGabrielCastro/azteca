import React, { lazy, Suspense} from 'react'
import { Navigate, Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import LoadingPage from '../components/LoadingPage'

const HomePage = lazy(() => import('../views/HomePage')) 
const AudioPage = lazy(() => import('../views/AudioPage')) 
const TextPage = lazy(() => import('../views/TextPage')) 
const VideoPage = lazy(() => import('../views/VideoPage')) 

const manageRoutes = [
    { element: HomePage, path: "/"},
    { element: VideoPage, path: "/video"},
    { element: TextPage, path: "/text"},
    { element: AudioPage, path: "/audio"}
]

const CustomRoutes = () => {

    const location = useLocation()
    
    return (
        <AnimatePresence initial={false} exitBeforeEnter>
            <Routes location={location} key={location.key}>
                {
                    manageRoutes.map((item, index) => {
                        return <Route key={index} path={item.path} element={
                            <Suspense fallback={ <LoadingPage /> }>
                                <item.element/>
                            </Suspense>
                        }/>
                    })
                }
                <Route path="*" element={ <Navigate to="/" replace /> }/> 
            </Routes>
        </AnimatePresence>
    )
}

export default CustomRoutes