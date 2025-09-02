import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function Experience() {
  return (
    <section id="experience" className="section alt">
      <div className="container narrow">
        <motion.h3 className="section-title" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>Experience</motion.h3>
        <motion.div className="timeline" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
          <div className="timeline-item">
            <h4>DIRO — Frontend Developer (2023 — Present)</h4>
            <ul>
              <li><FaCheckCircle style={{ color: 'var(--text)' }} /> Managed corporate WordPress site with security hardening and Astra integration.</li>
              <li><FaCheckCircle style={{ color: 'var(--text)' }} /> Solved auth edge cases for bank clients; shipped fixes to live environment.</li>
              <li><FaCheckCircle style={{ color: 'var(--text)' }} /> Built and maintained Client Portal (React) with clean UI and API integrations.</li>
              <li><FaCheckCircle style={{ color: 'var(--text)' }} /> Authored Swagger docs for public APIs to streamline client interactions.</li>
              <li><FaCheckCircle style={{ color: 'var(--text)' }} /> Created custom client landing pages aligned to business goals and UX best practices.</li>
              <li><FaCheckCircle style={{ color: 'var(--text)' }} /> Implemented health status page for project monitoring.</li>
              <li><FaCheckCircle style={{ color: 'var(--text)' }} /> Drove advanced SEO strategies improving visibility and competitive positioning.</li>
              <li><FaCheckCircle style={{ color: 'var(--text)' }} /> Leveraged AI tools (Copilot/ChatGPT/etc.) to enhance code quality and workflows.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 