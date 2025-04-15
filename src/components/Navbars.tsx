import Image from 'next/image';
import React from 'react';
import Logo from "../assests/logo.jpg";

const Navbars = () => {
  return (
    <div className="flex items-center lg:justify-between gap-4 px-2 md:px-6 py-4 bg-black shadow-md w-full">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Image width={40} height={40} alt='img' src={Logo} className="rounded-full" />
      </div>

      {/* Buttons Section */}
      <div className="flex gap-4">
        <a 
         href="https://wa.me/2348140255031?text=Hello%20Julieth%2C%20I%20saw%20your%20portfolio!"
        className="bubble-hover hover:bg-green-500 flex text-white rounded-2xl border-white hover:border-transparent border-2 lg:px-4 lg:text-lg px-2 text-[16px] py-2 font-bold">
          Send message
        </a>
        <a
         href="https://wa.me/2348140255031?text=Hello%20Julieth%2C%20I%20saw%20your%20portfolio!"
         className="bubble-hover text-[16px]  hover:bg-green-500 rounded-2xl text-white border-white hover:border-transparent border-2 lg:px-4 px-2 lg:text-lg py-2 font-bold">
          Book now
        </a>
      </div>
    </div>
  );
};

export default Navbars;
