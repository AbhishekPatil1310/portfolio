import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Typewriter } from 'react-simple-typewriter';
import darkeBackground from '../assets/darkeBackground.jpeg';

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white px-4 w-full max-w-6xl"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        {/* 🔹 Left Section – Text */}
        <div className="text-center md:text-left flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow">Abhishek Patil</h1>
          <h2 className="text-xl h-8 mb-4">
            <Typewriter
              words={['Full Stack Developer', 'React Enthusiast', 'Node.js Lover']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-white/90 leading-relaxed max-w-lg">
            I build scalable web applications and beautiful user interfaces.
            <br />
            Skilled in React, Node.js, MongoDB, and cloud deployment.
          </p>

          {/* 🔹 Resume + Socials */}
          <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="/AbhishekPatil.pdf"
              download
              className="bg-white text-blue-600 px-6 py-2 rounded-full shadow hover:bg-blue-600 hover:text-white transition"
            >
              Download Resume
            </a>
            <div className="flex gap-5 text-white text-2xl">
              <a href="https://linkedin.com/in/abhishek-patil-a0a82431a" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-blue-400 transition" />
              </a>
              <a href="https://github.com/AbhishekPatil1310" target="_blank" rel="noopener noreferrer">
                <FaGithub className="hover:text-gray-300 transition" />
              </a>
            </div>
          </div>
        </div>

        {/* 🔹 Right Section – Image */}
        <div className="flex justify-center md:justify-end flex-1">
          <img
            src={darkeBackground}
            alt="Abhishek Patil"
            className="w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-white object-cover shadow-lg"
          />
        </div>
      </div>
    </motion.div>
  );
}
