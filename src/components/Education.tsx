import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

interface Education {
  institution: string;
  degree: string;
  years: string;
  grade: string;
}

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const educationList: Education[] = [
    {
      institution: "BITSoM",
      degree: "MBA",
      years: "2024 to 2026",
      grade: "3.0/4.0"
    },
    {
      institution: "Malla Reddy Engineering College",
      degree: "B.Tech",
      years: "2018 to 2022",
      grade: "81.8%"
    },
    {
      institution: "Sri Gayatri Junior College",
      degree: "Intermediate",
      years: "2016 to 2018",
      grade: "96%"
    },
    {
      institution: "St. Alphonsa's High School",
      degree: "10th Standard",
      years: "2015 to 2016",
      grade: "92%"
    }
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="text-[#333333]" size={28} />
        <h2 className="text-2xl font-bold text-[#333333]">Education</h2>
      </div>
      <div className="space-y-6">
        {educationList.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#F8F8F8] p-6 rounded-lg shadow-sm"
          >
            <h3 className="text-xl font-bold text-[#333333] mb-2">{edu.institution}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <p className="text-[#333333]">{edu.degree}</p>
              <p className="text-[#B0B0B0]">{edu.years}</p>
              <p className="text-[#333333] font-semibold">{edu.grade}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};