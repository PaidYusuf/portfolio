import React, { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Skills from './components/Skills'
import Contact from './components/Contact'
import './App.css'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <div className="app">
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Header />
      <main>
        <Hero />
        <Projects />
        <Stats />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}

export default App
