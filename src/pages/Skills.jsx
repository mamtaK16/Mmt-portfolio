import React from 'react';
import { motion } from 'framer-motion';
import { FaJsSquare, FaReact, FaHtml5, FaCss3Alt, FaServer, FaToolbox } from 'react-icons/fa';

const SKILLS = [
  { name: 'React.js', level: 88, icon: <FaReact /> },
  { name: 'JavaScript (ES6+)', level: 90, icon: <FaJsSquare /> },
  { name: 'TypeScript', level: 75, icon: <FaToolbox /> },
  { name: 'Redux', level: 78, icon: <FaToolbox /> },
  { name: 'HTML5', level: 95, icon: <FaHtml5 /> },
  { name: 'CSS3', level: 90, icon: <FaCss3Alt /> },
  { name: 'Tailwind CSS', level: 85, icon: <FaToolbox /> },
  { name: 'Axios / Fetch APIs', level: 82, icon: <FaServer /> },
  { name: 'Git', level: 84, icon: <FaToolbox /> },
  { name: 'WordPress', level: 80, icon: <FaToolbox /> },
];

export default function Skills() {
  return (
    <section id="skills" className="section alt">
      <div className="container">
        <motion.h3 className="section-title" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Skills</motion.h3>
        <div className="skills-grid">
          {SKILLS.map((skill, idx) => (
            <motion.div key={skill.name} className="skill-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.03 }}>
              <div className="skill-head">
                <span className="skill-name" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ fontSize: 18 }}>{skill.icon}</span>
                  {skill.name}
                </span>
                <span className="skill-level">{skill.level}%</span>
              </div>
              <div className="skill-bar" aria-label={`${skill.name} proficiency`}>
                <motion.div className="skill-progress" initial={{ width: 0 }} whileInView={{ width: `${skill.level}%` }} viewport={{ once: true }} transition={{ duration: 1.1 }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 