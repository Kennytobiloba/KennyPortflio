"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className=" text-white flex items-start lg:mt-12 mt-4 justify-start px-6 py-20 h-auto">
      <div className="max-w-5xl text-start space-y-6">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl sm:text-6xl font-extrabold text-white"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Olaatunbi Kehinde
        </motion.h1>

        {/* Animated Subtitle */}
        <motion.h2
          className="text-xl sm:text-2xl text-gray-300"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Fullstack Developer • <span className="text-green-400">Frontend</span> Enthusiast
        </motion.h2>

        {/* Animated Paragraphs with Grid Layout */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 text-lg text-gray-400 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p>
            I’m a passionate fullstack developer with 3 years of experience. I started my journey with <span className="text-green-400">frontend</span> development, building sleek and responsive UIs.
          </p>
          <p>
            Over the past year, I’ve embraced backend development. I love turning ideas into real, user-centered web applications with clean and efficient code. <a 
             href='https://docs.google.com/document/d/1-hcQD59Clpvuaz4Hq8KSiRlmZa88Zkp7/edit?usp=drive_link&ouid=100095419875272038048&rtpof=true&sd=true'
            className="text-green-400 underline cursor-pointer">Check my CV</a> to learn more.
          </p>
        </motion.div>

        {/* Animated Call to Action Buttons */}
        <motion.div
          className="flex justify-start gap-4 pt-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <a 
          href="https://wa.me/2348140255031?text=Hello%20Julieth%2C%20I%20saw%20your%20portfolio!"
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition duration-300">
            Hire Me
          </a>
          <a 
           href='https://docs.google.com/document/d/1-hcQD59Clpvuaz4Hq8KSiRlmZa88Zkp7/edit?usp=drive_link&ouid=100095419875272038048&rtpof=true&sd=true'
          className="border border-green-500 text-green-400 px-6 py-2 rounded-lg font-semibold hover:bg-green-800 transition duration-300">
            Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
