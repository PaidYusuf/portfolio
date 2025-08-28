import React from 'react'
import { motion } from 'framer-motion'
import { Award, Users, Code, Coffee } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: <Award size={40} />,
      number: "20+",
      label: "Completed Projects",
      description: "Successfully delivered projects across various industries"
    },
    {
      icon: <Users size={40} />,
      number: "10+",
      label: "Satisfied Clients",
      description: "Building lasting relationships through quality work"
    },
    {
      icon: <Code size={40} />,
      number: "4+",
      label: "Years Experience",
      description: "Continuously learning and growing in web development"
    },
    {
      icon: <Coffee size={40} />,
      number: "∞",
      label: "Cups of Coffee",
      description: "Fueled by passion and caffeine"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="stats" id="about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">Numbers that tell my story</p>
        </motion.div>

        <motion.div 
          className="stats-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="stat-card"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div 
                className="stat-icon"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {stat.icon}
              </motion.div>
              
              <motion.h3 
                className="stat-number"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {stat.number}
              </motion.h3>
              
              <h4 className="stat-label">{stat.label}</h4>
              <p className="stat-description">{stat.description}</p>
              
              <div className="stat-highlight"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="about-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="about-content">
            <h3>A text for how much they will be satisfied and what I will give to them</h3>
            <p>
              I believe in creating digital experiences that not only look great but also 
              solve real problems. My approach combines technical expertise with creative 
              thinking to deliver solutions that exceed expectations. Every project is an 
              opportunity to push boundaries and create something exceptional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
