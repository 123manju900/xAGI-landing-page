import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full py-20 bg-[#D4B7A1] text-[#333333]"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <GraduationCap size={48} className="mb-4" />
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Divyasri Bhargavi
          </motion.h1>
          <motion.h2 
            className="text-2xl md:text-3xl mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Founder Office Intern
          </motion.h2>
          <motion.p 
            className="text-xl md:text-2xl text-[#333333]/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            xAGI
          </motion.p>
        </div>
      </div>
    </motion.header>
  );
};