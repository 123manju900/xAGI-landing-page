import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail size={24} />,
      text: 'divyasribhargavi@gmail.com',
      href: 'mailto:divyasribhargavi@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      text: '7799595208',
      href: 'tel:+917799595208'
    },
    {
      icon: <MapPin size={24} />,
      text: 'Mumbai',
      href: null
    },
    {
      icon: <Linkedin size={24} />,
      text: 'LinkedIn Profile',
      href: 'https://www.linkedin.com/in/divya-sri-bhargavi-3bbb03193/'
    },
    {
      icon: <Github size={24} />,
      text: 'GitHub Profile',
      href: 'https://github.com/123manju900'
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="bg-[#F8F8F8] py-20"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#333333]">Get in Touch</h2>
        <div className="max-w-2xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-[#333333]">{item.icon}</span>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-[#333333] hover:text-[#D4B7A1] transition-colors"
                >
                  {item.text}
                </a>
              ) : (
                <span className="text-[#333333]">{item.text}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};