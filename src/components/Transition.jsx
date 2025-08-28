import React from 'react'
import { motion } from 'framer-motion'

const Transition = () => {
  return (
    <section className="transition-section">
      <div className="gradient-overlay">
        <motion.div 
          className="floating-elements"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="floating-circle circle-1"></div>
          <div className="floating-circle circle-2"></div>
          <div className="floating-circle circle-3"></div>
        </motion.div>
      </div>
    </section>
  )
}

export default Transition
