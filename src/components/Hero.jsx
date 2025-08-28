import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              YUSUF ASLAN
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Full Stack Developer
            </motion.h2>
            
            <motion.p 
              className="hero-description"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              I create modern, responsive web applications with cutting-edge technologies. 
              Passionate about clean code, user experience, and innovative solutions that 
              solve real-world problems. Let's build something amazing together.
            </motion.p>
            
            <motion.button 
              className="cta-button"
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05, backgroundColor: "#ff6b6b" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Contact Me
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="hero-right"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-card">
              <h3>Let's Get To Work</h3>
              <p>Ready to bring your ideas to life with modern web technologies.</p>
              <div className="card-highlight"></div>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={scrollToProjects}
        >
          <ArrowDown size={24} />
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
