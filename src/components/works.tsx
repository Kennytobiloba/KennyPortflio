"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Categories } from "../../data";

const Works = () => {
  const [activeTab, setActiveTab] = useState("Single Pages");
  const currentCategory = Categories.find((cat) => cat.title === activeTab);

  return (
    <div className="h-auto px-6 py-16 mt-10 text-white">
      <motion.h2
        className="text-4xl font-bold text-start mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Works
      </motion.h2>

      {/* Tabs with underline */}
      <div className="relative flex justify-start lg:space-x-6 space-x-2 space-y-4 mb-12 pb-2 flex-wrap lg:flex-nowrap">
        {Categories.map((cat) => (
          <div
            key={cat.title}
            onClick={() => setActiveTab(cat.title)}
            className="cursor-pointer relative px-2 text-sm sm:text-base"
          >
            <span
              className={`transition-colors duration-300 ${activeTab === cat.title ? "text-green-400" : "text-gray-400"}`}
            >
              {cat.title}
            </span>
            {activeTab === cat.title && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 right-0 -bottom-[2px] h-[1px] bg-green-400 rounded"
              />
            )}
          </div>
        ))}
      </div>

      {/* Infinite Carousel (container sliding) */}
      <div className="overflow-hidden">
        <motion.div
          className="flex space-x-8"
          animate={{
            x: ["0%", "-100%"], // Slide the entire container to the left
          }}
          transition={{
            duration: 20, // Control the speed of sliding
            repeat: Infinity, // Infinite loop
            repeatType: "loop", // Loop the animation
            ease: "linear", // Smooth motion
          }}
        >
          {/* Duplicate the elements for smooth looping */}
          <motion.div className="flex space-x-8">
            {currentCategory?.projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-xl transition w-96"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Image with Scroll Effect */}
                <div className="w-full h-40 overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Project Details */}
                <h3 className="text-lg font-semibold text-green-400">{project.name}</h3>
                <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                <p className="text-sm text-gray-400 mt-2">
                  <strong>Technologies Used:</strong> {project.technologies}
                </p>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline mt-4 block"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </motion.div>

          {/* Duplicate the elements again for seamless infinite loop */}
          <motion.div className="flex space-x-8">
            {currentCategory?.projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:shadow-xl transition w-96"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {/* Image with Scroll Effect */}
                <div className="w-full h-40 overflow-hidden mb-4">
                  <Image
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>

                {/* Project Details */}
                <h3 className="text-lg font-semibold text-green-400">{project.name}</h3>
                <p className="text-sm text-gray-400 mt-2">{project.description}</p>
                <p className="text-sm text-gray-400 mt-2">
                  <strong>Technologies Used:</strong> {project.technologies}
                </p>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:underline mt-4 block"
                >
                  View Project
                </a>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Works;
