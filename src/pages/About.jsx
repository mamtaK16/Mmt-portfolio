import React from 'react';
import { motion } from 'framer-motion';

const SKILL_ICONS = [
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Redux', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg' },
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Tailwind', src: 'https://avatars.githubusercontent.com/u/67109815?s=200&v=4' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'OpenAI', src: 'https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png' },
  { name: 'Cursor', src: 'https://avatars.githubusercontent.com/u/139895814?s=200&v=4' },
  { name: 'CMS', src: 'https://cdn-icons-png.flaticon.com/512/3039/3039385.png' },
];

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', fontSize: 40 }}>
          About <span className="accent">me</span>
        </motion.h2>
        <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: 900, margin: '0 auto 26px' }}>
          A passionate frontend developer focused on creating impactful web solutions. Dedicated to building user-friendly and engaging
          digital experiences.
        </p>
        <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: 900, margin: '0 auto 34px' }}>
          My journey into coding began with curiosity about how systems work and how code enables functionality used by people worldwide.
          I discovered that coding is not just a skill but a way to bring ideas to life.
        </p>

        <div className="about-cards">
          <motion.div className="about-card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="about-card-title">Certificates</div>
            <div className="about-card-body">
              <div><strong>MERN Stack Development</strong></div>
              <div>Aptron Pvt Ltd Institute • 2023</div>
            </div>
          </motion.div>
          <motion.div className="about-card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="about-card-title">Education</div>
            <div className="about-card-body">
              <div><strong>B.A (Political Honours)</strong></div>
              <div>Delhi University • 2023</div>
            </div>
          </motion.div>
          <motion.div className="about-card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="about-card-title">Achievements</div>
            <div className="about-card-body">
              <div>Open Source Contributor – active on GitHub</div>
            </div>
          </motion.div>
        </div>

        <h3 style={{ margin: '28px 0 16px' }}>Technical skills & tools</h3>
        <div className="icon-grid">
          {SKILL_ICONS.map((icon) => (
            <div key={icon.name} className="icon-tile" title={icon.name}>
              <img src={icon.src} alt={icon.name} />
              <span>{icon.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 