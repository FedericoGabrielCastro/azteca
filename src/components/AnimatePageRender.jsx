import React from 'react'
import { motion } from 'framer-motion'

const animation = {
    initial: { opacity: 0, y: 1000 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 1, x: -1000 }
}

const AnimatePageRender = ({ children }) => {
    
    return (
        <motion.div 
            variants={animation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 1 }}
            style={{ overflow: "hidden" }}
        >
            { children }
        </motion.div>
    )
}

export default AnimatePageRender