import React from "react";

const Footer = () => {
  return (
    <footer className=" dark:bg-gray-900 py-10 px-4 mt-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p className="text-sm  text-white">
            &copy; {new Date().getFullYear()} <span className="font-semibold text-green-500">Kenny</span>. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-white">
          <a href="#about" className="hover:text-green-500 transition">About</a>
          <a href="#projects" className="hover:text-green-500 transition">Projects</a>
          <a href="#contact" className="hover:text-green-500 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
