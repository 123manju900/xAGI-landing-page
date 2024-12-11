import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Sparkles } from 'lucide-react';

export const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skills = {
    coding: ['Python', 'SQL', 'C'],
    genAI: ['Cursor', 'Vercel V0', 'Canva', 'Bolt AI', 'Windsurfer AI']
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-8">
        <Sparkles className="text-[#333333]" size={28} />
        <h2 className="text-2xl font-bold text-[#333333]">Skills Highlight</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.1 }}
          className="glassmorphism p-6 rounded-lg"
        >
          <div className="flex items-center gap-2 mb-4">
            <Code size={20} className="text-[#333333]" />
            <h3 className="text-xl font-bold text-[#333333]">Coding</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.coding.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 glassmorphism-dark text-[#333333] rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.2 }}
          className="glassmorphism p-6 rounded-lg"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles size={20} className="text-[#333333]" />
            <h3 className="text-xl font-bold text-[#333333]">GenAI Tools</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {skills.genAI.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 glassmorphism-dark text-[#333333] rounded-full text-sm font-medium"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};