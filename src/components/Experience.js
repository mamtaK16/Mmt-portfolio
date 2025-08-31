import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle, FaTimes } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      id: "diro",
      company: "DIRO",
      role: "Frontend developer",
      period: "2023 - Present",
      description: "Overseeing the management and continuous improvement of the diro.io website using WordPress, ensuring a seamless user experience through optimized design and functionality. Spearheading the development of advanced product features to align with business goals and user needs. Leading the design and implementation of a React-based Client Portal, delivering a dynamic and intuitive platform for enhanced client interactions.",
      image: "/image/Writing_codes.png",
      keyPoints: [
        "Managed and optimized diro.io WordPress site for UX and performance",
        "Led design and delivery of advanced product features",
        "Built React-based Client Portal for client interactions",
        "Collaborated cross-functionally to align tech with business goals",
        "Implemented best practices for accessibility and responsiveness"
      ]
    },
    // Add more experiences here
  ];

  const [expandedId, setExpandedId] = useState(null);
  const selectedExperience = experiences.find((e) => e.id === expandedId) || null;

  return (
    <div name="experience" className="relative w-full bg-gradient-to-tr from-white via-accent to-white pt-16 pb-16 overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-20 -right-20 w-96 h-96 bg-purple-500/10 rounded-full mix-blend-multiply filter blur-xl"
        />
       
      </div>

      <div className="relative max-w-screen-xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8"
        >
          <motion.h2 
            className="text-6xl font-bold text-textPrimary mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Professional <span className="text-secondary">experience</span>
          </motion.h2>
          <motion.p 
            className="text-textSecondary text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            My journey in web development and software engineering
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 place-items-center gap-6"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className="flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.97, y: 0 }}
                onClick={() => setExpandedId(expandedId === experience.id ? null : experience.id)}
                className="inline-flex items-center gap-3 bg-secondary text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-lg font-medium"
              >
                {expandedId === experience.id ? (
                  <>
                    Close <FaTimes />
                  </>
                ) : (
                  <>
                    View details <FaArrowRight />
                  </>
                )}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 max-w-5xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-textPrimary mb-4 text-center">
              {selectedExperience.role} at {selectedExperience.company}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {selectedExperience.keyPoints.map((point, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-sm rounded-xl p-5 shadow hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <FaCheckCircle className="text-secondary text-2xl mt-1" />
                    <p className="text-textSecondary">{point}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Experience; 