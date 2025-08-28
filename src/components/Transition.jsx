import React from 'react'
import { motion } from 'framer-motion'

const Transition = () => {
  return (
    <section className="transition-section">
      <motion.div 
        className="gradient-overlay"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="animated-gradient"
          animate={{ 
            background: [
              'linear-gradient(180deg, rgba(248, 250, 252, 1) 0%, rgba(15, 23, 42, 0) 100%)',
              'linear-gradient(180deg, rgba(248, 250, 252, 0.8) 0%, rgba(15, 23, 42, 0.2) 100%)',
              'linear-gradient(180deg, rgba(248, 250, 252, 0.5) 0%, rgba(15, 23, 42, 0.5) 100%)',
              'linear-gradient(180deg, rgba(248, 250, 252, 0.2) 0%, rgba(15, 23, 42, 0.8) 100%)',
              'linear-gradient(180deg, rgba(248, 250, 252, 0) 0%, rgba(15, 23, 42, 1) 100%)',
            ]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div 
          className="floating-elements"
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0]
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {/* Morphing shapes */}
          <motion.div 
            className="morph-shape shape-1"
            animate={{
              scale: [1, 1.2, 0.8, 1],
              rotate: [0, 90, 180, 270, 360],
              borderRadius: ["50%", "20%", "50%", "20%", "50%"]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="morph-shape shape-2"
            animate={{
              scale: [0.8, 1.3, 1, 0.8],
              rotate: [360, 270, 180, 90, 0],
              borderRadius: ["20%", "50%", "30%", "50%", "20%"]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          
          <motion.div 
            className="morph-shape shape-3"
            animate={{
              scale: [1.1, 0.9, 1.4, 1.1],
              rotate: [0, 120, 240, 360],
              borderRadius: ["30%", "50%", "25%", "30%"]
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </motion.div>
        
        {/* Particle effects */}
        <motion.div className="particles">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -50, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Transition
