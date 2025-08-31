import React from 'react';
import { motion } from 'framer-motion';
import About from './About';
// import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

export default function Home() {
  return (
    <>
      <section id="home" className="section hero">
        <div className="container hero-inner">
          <div className="hero-grid">
            <div>
              <motion.p className="eyebrow" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                FRONTEND DEVELOPER 👋
              </motion.p>
              <motion.h1 className="hero-title" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.05 }}>
                Hi, I'm <span className="accent">Mamta</span>
              </motion.h1>
              <motion.h2 className="hero-subtitle" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
                Building scalable, intuitive web apps
              </motion.h2>
              <motion.p className="hero-tagline" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.15 }}>
                Experienced frontend developer specializing in creating modern and intuitive web applications with a focus on
                performance and user experience.
              </motion.p>
              <motion.div className="actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                <a className="btn btn-primary" href="/#contact">Contact me →</a>
                {/* Place your resume file at public/resume.pdf */}
                <a className="btn btn-outline" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
              </motion.div>
            </div>
            <div className="hero-illustration">
              <img src="https://dummyimage.com/480x300/ede9fe/7c3aed.png&text=Developer+illustration" alt="Developer illustration" style={{ width: '100%', height: 'auto', borderRadius: 16, border: '1px solid var(--border)' }} />
              <div className="badge">
                <span className="badge-dot" />
                <div>
                  <div className="badge-value">1.8</div>
                  <div className="badge-label">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <motion.h2 className="section-title" initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: 'center', fontSize: 40 }}>
            Focusing on the <span className="accent">best</span>
          </motion.h2>
          <p style={{ textAlign: 'center', color: 'var(--muted)', maxWidth: 820, margin: '0 auto 28px' }}>
            Delivering excellence through modern technologies and design principles
          </p>
          <div className="feature-grid">
            <motion.div className="feature-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="feature-title"><span className="accent">Multiple</span> tech stack</div>
              <p>I have worked with multiple technologies and frameworks to build scalable and efficient applications.</p>
            </motion.div>
            <motion.div className="feature-card" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="feature-title">Dev & <span className="accent">design</span></div>
              <p>Excels in development and design to deliver seamless, intuitive user experiences.</p>
            </motion.div>
            <motion.div className="feature-card feature-wide" initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="feature-title">Open to <span className="accent">collaborations</span></div>
              <p>From small features to your next big SaaS, I enjoy collaborating on meaningful projects.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <About />
      {/* <Skills /> */}
      <Projects />
      <Experience />
      <Contact />
    </>
  );
} 