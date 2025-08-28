import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Check if we're in the dark sections (About Me and beyond)
      const aboutSection = document.getElementById('about')
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop - 100
        setIsDarkMode(window.scrollY >= aboutTop)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header 
      className={`header ${isScrolled ? 'scrolled' : ''} ${isDarkMode ? 'dark-mode' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          YUSUF ASLAN
        </motion.div>
        
        <nav className="nav">
          {['Projects', 'About', 'Services', 'Contact'].map((item, index) => (
            <motion.button
              key={item}
              className="nav-item"
              onClick={() => scrollToSection(item.toLowerCase())}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {item}
            </motion.button>
          ))}
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
