import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface AchievementProps {
  year: string;
  achievements: string[];
}

export const Achievement = ({ year, achievements }: AchievementProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="mb-12"
    >
      <div className="flex items-start gap-8">
        <div className="flex-shrink-0">
          <span className="text-2xl font-bold text-[#333333]">{year}</span>
        </div>
        <div className="flex-grow">
          <ul className="space-y-4">
            {achievements.map((achievement, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#F8F8F8] p-4 rounded-lg shadow-sm"
              >
                {achievement}
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};