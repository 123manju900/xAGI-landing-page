import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award } from 'lucide-react';

export const ScholasticAchievements = () => {
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
        <Award className="text-[#333333]" size={28} />
        <h2 className="text-2xl font-bold text-[#333333]">Scholastic Achievements</h2>
      </div>
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.1 }}
          className="bg-[#F8F8F8] p-6 rounded-lg shadow-sm"
        >
          <p className="text-[#333333]">
            Awarded the <strong>Outstanding Research Award 2022</strong> for the paper published in IEEE Xplore on Generative AI.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ delay: 0.2 }}
          className="bg-[#F8F8F8] p-6 rounded-lg shadow-sm"
        >
          <p className="text-[#333333]">
            Secured <strong>Top 300 ranking out of 10,000 participants</strong> in the Udacity & Microsoft Azure scholarship competition at global level.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};