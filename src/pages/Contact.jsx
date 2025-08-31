import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container narrow">
        <motion.h3 className="section-title" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Contact</motion.h3>
        <ul className="contact-list">
          <li>
            <span className="contact-label"><FaEnvelope /> Email:</span>
            <a href="mailto:mk6736767@gmail.com">mk6736767@gmail.com</a>
          </li>
          <li>
            <span className="contact-label"><FaMapMarkerAlt /> Location:</span>
            <span>India</span>
          </li>
          <li>
            <span className="contact-label"><FaGithub /> GitHub:</span>
            <a href="https://github.com/mamtaK16" target="_blank" rel="noreferrer">github.com/mamtaK16</a>
          </li>
          <li>
            <span className="contact-label"><FaLinkedin /> LinkedIn:</span>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">linkedin.com/in/your-profile</a>
          </li>
        </ul>
      </div>
    </section>
  );
} 