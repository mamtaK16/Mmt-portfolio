import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const PROJECTS = [
  {
    title: 'Client Document Management Portal',
    description: 'Redesigned React/Redux portal; cut document verification time by 60% via real-time updates and intuitive UIs.',
    demo: '#',
    code: 'https://github.com/mamtaK16',
  },
  {
    title: 'Website Management (DIRO)',
    description: 'Managed WordPress site; optimized content updates and integrated Astra for vulnerability management.',
    demo: '#',
    code: 'https://github.com/mamtaK16',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React, deployed on GitHub Pages.',
    demo: '#',
    code: 'https://github.com/mamtaK16',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.h3 className="section-title" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Projects</motion.h3>
        <div className="card-grid">
          {PROJECTS.map((p, idx) => (
            <motion.article key={p.title} className="card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }}>
              <h4 className="card-title">{p.title}</h4>
              <p className="card-desc" style={{ color: 'var(--muted)' }}>{p.description}</p>
              <div className="card-actions">
                <a className="btn btn-small btn-primary" href={p.demo} target="_blank" rel="noreferrer"><FaExternalLinkAlt /> Demo</a>
                <a className="btn btn-small btn-outline" href={p.code} target="_blank" rel="noreferrer"><FaGithub /> Code</a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
} 