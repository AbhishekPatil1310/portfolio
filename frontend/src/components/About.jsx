import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

export default function AboutMe() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-24 px-4 md:px-6 flex items-center justify-center text-black mb-4"
    >
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between gap-10">
        {/* 🔹 Left Section – About Text */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-5xl font-bold mb-6">About Me</h2>

          <p className="text-xl leading-relaxed">
            I am a Computer Science graduate from{' '}
            <span className="font-semibold text-black mb-4">
              M S Ramaiah University of Applied Sciences
            </span>
            . I’m passionate about building interactive and responsive websites using the{' '}
            <span className="font-semibold text-black mb-4">MERN stack</span> (MongoDB, Express, React, Node.js).
          </p>

          <p className="mt-6 text-xl leading-relaxed">
            I also have good knowledge of{' '}
            <span className="font-semibold text-black mb-4">Python (Flask)</span> and{' '}
            <span className="font-semibold text-black mb-4">MySQL</span> for backend and database development.
          </p>

          <p className="mt-8 text-lg italictext-black mb-4">
            "Always eager to learn, adapt, and build something impactful."
          </p>
        </div>

        {/* 🔹 Right Section – Quick Stats / Skills */}
        <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6 text-lg">

          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-2xl text-green-400" />
            <span>Fluent in Python</span>
          </div>
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-2xl text-green-400" />
            <span>Mysql</span>
          </div>
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-2xl text-green-400" />
            <span>MERN Stack</span>
          </div>
          <div className="flex items-center gap-4">
            <FaCheckCircle className="text-2xl text-green-400" />
            <span>fresher</span>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
