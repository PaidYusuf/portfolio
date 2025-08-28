import React from 'react'
import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "CSS/SCSS", level: 90 },
        { name: "HTML5", level: 95 },
        { name: "Vue.js", level: 80 }
      ]
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "REST APIs", level: 90 }
      ]
    }
  ]

  const services = [
    "Web Application Development",
    "Responsive Design",
    "API Development & Integration",
    "Database Design & Management",
    "Performance Optimization",
    "Code Review & Consultation",
    "UI/UX Implementation",
    "Testing & Debugging"
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="skills" id="services">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Services</h2>
          <p className="section-subtitle">All skills and services I can provide</p>
        </motion.div>

        <div className="skills-content">
          <div className="skills-section">
            <motion.div 
              className="skills-categories"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {skillCategories.map((category, categoryIndex) => (
                <motion.div 
                  key={categoryIndex}
                  className="skill-category"
                  variants={itemVariants}
                >
                  <h3 className="category-title">{category.title}</h3>
                  <div className="skills-list">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div 
                        key={skillIndex}
                        className="skill-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="skill-header">
                          <span className="skill-name">{skill.name}</span>
                          <span className="skill-percentage">{skill.level}%</span>
                        </div>
                        <div className="skill-bar">
                          <motion.div 
                            className="skill-progress"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div className="services-section">
            <motion.div 
              className="services-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Services I Provide</h3>
              <motion.div 
                className="services-list"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {services.map((service, index) => (
                  <motion.div 
                    key={index}
                    className="service-item"
                    variants={itemVariants}
                    whileHover={{ x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="service-bullet">→</span>
                    <span className="service-text">{service}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
