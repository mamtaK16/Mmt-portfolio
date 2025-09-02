import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiExternalLink } from 'react-icons/fi';
import { FaLinkedin, FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiJavascript } from 'react-icons/si';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="text-2xl" />,
      // title: 'Email',
      value: 'mk6736767@gmail.com',
      link: 'mailto:mk6736767@gmail.com',
      bgColor: 'bg-purple-500',
      delay: 0.1
    },
    {
      icon: <FaLinkedin className="text-2xl" />,
      // title: 'LinkedIn',
      value: 'mamta-kumari',
      link: 'https://www.linkedin.com/in/mamta-kumari-48882b263',
      bgColor: 'bg-blue-600',
      delay: 0.2
    },
    // {
    //   icon: <FaGithub className="text-2xl" />,
    //   // title: 'GitHub',
    //   value: 'mk-portfolio',
    //   link: 'https://github.com/',
    //   bgColor: 'bg-gray-800',
    //   delay: 0.3
    // },
    {
      icon: <FiMapPin className="text-2xl" />,
      // title: 'Location',
      value: 'Delhi, India',
      link: 'https://maps.google.com?q=Delhi, India',
      bgColor: 'bg-pink-600',
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: 'spring', stiffness: 120, damping: 14 }
    }
  };

  return (
    <div
      name="contact"
      className="relative w-full min-h-screen overflow-hidden bg-gradient-to-tr from-white via-accent to-white"
    >
      {/* subtle animated background shapes for light theme */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            rotate: [0, 180, 360],
            x: [0, 80, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-purple-500/10 rounded-full mix-blend-multiply blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, -180, -360] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[55rem] bg-green-500/5 rounded-full mix-blend-multiply blur-3xl"
        />
      </div>

      <div className="relative pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-14"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-textPrimary mb-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
            >
              Let's <span className="text-secondary">connect</span>
            </motion.h2>
            <motion.p
              className="text-base md:text-lg text-textSecondary max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              Ready to collaborate or chat about technology? I'm always open to new opportunities and conversations!
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* left column: avatar + CTA + stats */}
            <div className="space-y-8">
              {/* avatar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-center"
              >
                <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-full p-1 bg-gradient-to-tr from-fuchsia-400 via-purple-300 to-indigo-400">
                  <div className="w-full h-full rounded-full overflow-hidden bg-black/5 backdrop-blur relative">
                    <img
                      src="/image/portfolio-hero.png"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />

                    {/* coding icons overlay inside circle */}
                    <motion.div className="pointer-events-none" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
                      <motion.div className="absolute top-5 left-6 text-2xl" animate={{ y: [0, -4, 0] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                        <FaHtml5 className="text-[#E44D26] drop-shadow" />
                      </motion.div>
                      <motion.div className="absolute top-7 right-6 text-2xl" animate={{ y: [0, 4, 0] }} transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}>
                        <FaCss3Alt className="text-[#1572B6] drop-shadow" />
                      </motion.div>
                      <motion.div className="absolute bottom-8 left-7 text-2xl" animate={{ y: [0, -3, 0] }} transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}>
                        <SiJavascript className="text-[#F7DF1E] drop-shadow" />
                      </motion.div>
                      <motion.div className="absolute bottom-6 right-7 text-2xl" animate={{ y: [0, 3, 0] }} transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}>
                        <FaReact className="text-[#61DAFB] drop-shadow" />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* floating action icons */}
                <motion.a
                  href="mailto:mk6736767@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -top-3 left-8 md:left-12 p-3 rounded-xl bg-white text-textPrimary border border-black/10 shadow"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  aria-label="Email"
                >
                  <FiMail className="text-xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/mamta-kumari-48882b263"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-24 -left-1 md:-left-3 p-3 rounded-xl bg-white text-textPrimary border border-black/10 shadow"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
              </motion.div>

              {/* CTA card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl bg-white/80 backdrop-blur-sm border border-black/10 text-textPrimary p-6 md:p-8 shadow-xl"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-2">Ready to Build Something Amazing?</h3>
                <a
                  href="mailto:mk6736767@gmail.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-purple-500 hover:bg-purple-600 active:scale-95 transition-all text-white px-4 py-2.5 font-semibold shadow-lg"
                >
                  <FiMail /> Get In Touch
                </a>

                {/* stats */}
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white border border-black/10 p-4 text-center">
                    <div className="text-xl font-extrabold text-textPrimary">24/7</div>
                    <div className="text-sm text-textSecondary">Response Time</div>
                  </div>
                  <div className="rounded-xl bg-white border border-black/10 p-4 text-center">
                    <div className="text-xl font-extrabold text-textPrimary">100%</div>
                    <div className="text-sm text-textSecondary">Commitment</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* right column: contact cards */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="flex items-center justify-center gap-4 md:gap-6 flex-wrap"
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex h-14 w-14 md:h-16 md:w-16 items-center justify-center ${info.bgColor} text-white rounded-2xl shadow hover:translate-y-[-2px] active:scale-95 transition-all`}
                  aria-label={`Open ${index}`}
                >
                  {info.icon}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 