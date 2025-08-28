import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "yusuf@example.com",
      href: "mailto:yusuf@example.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Istanbul, Turkey",
      href: "#"
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={24} />,
      href: "https://github.com/PaidYusuf",
      label: "GitHub"
    },
    {
      icon: <Linkedin size={24} />,
      href: "https://linkedin.com/in/yusuf-aslan",
      label: "LinkedIn"
    },
    {
      icon: <Twitter size={24} />,
      href: "https://twitter.com/yusuf_aslan",
      label: "Twitter"
    }
  ]

  return (
    <section className="contact" id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">Ready to start your next project? Get in touch!</p>
        </motion.div>

        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Contact Information</h3>
            <p className="contact-description">
              Feel free to reach out to me for any inquiries, collaborations, or 
              just to say hello. I'm always open to discussing new opportunities.
            </p>

            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="contact-item"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div className="contact-text">
                    <span className="contact-label">{info.label}</span>
                    <span className="contact-value">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="social-links">
              <h4>Follow Me</h4>
              <div className="social-icons">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-container"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>
              
              <div className="form-row">
                <motion.div 
                  className="form-group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
                
                <motion.div 
                  className="form-group"
                  whileFocus={{ scale: 1.02 }}
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </motion.div>
              </div>

              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </motion.div>

              <motion.div 
                className="form-group"
                whileFocus={{ scale: 1.02 }}
              >
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </motion.div>

              <motion.button 
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <motion.footer 
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <p>&copy; 2025 Yusuf Aslan. All rights reserved.</p>
          <p>Built with React & Framer Motion</p>
        </div>
      </motion.footer>
    </section>
  )
}

export default Contact
