import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase } from 'lucide-react';

export const WorkExperience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-8">
        <Briefcase className="text-[#333333]" size={28} />
        <h2 className="text-2xl font-bold text-[#333333]">Work Experience</h2>
      </div>
      <div className="glassmorphism p-6 rounded-lg">
        <h3 className="text-xl font-bold text-[#333333] mb-2">
          Assistant Manager (CPP Operations) - Hindalco Industries
        </h3>
        <p className="text-[#B0B0B0] mb-4">2022 - 2024</p>
        <ul className="space-y-4">
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.1 }}
            className="text-[#333333] glassmorphism-dark p-4 rounded-lg"
          >
            Saved <strong>25+ lakhs INR</strong> by spearheading strategic crisis management initiatives, preventing 5+ critical operational trips
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.2 }}
            className="text-[#333333] glassmorphism-dark p-4 rounded-lg"
          >
            Achieved <strong>12.5% reduction</strong> in auxiliary power consumption through a strategic, data-driven optimization approach
          </motion.li>
          <motion.li
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.3 }}
            className="text-[#333333] glassmorphism-dark p-4 rounded-lg"
          >
            Executed high-risk operations, achieving <strong>zero accidents</strong> and ensuring strict compliance with all safety and operational efficiency
          </motion.li>
        </ul>
      </div>
    </motion.section>
  );
};