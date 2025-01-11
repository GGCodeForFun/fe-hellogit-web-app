import React from "react";

import greenwichLogo from '@/assets/icons/greenwich-uni.svg'
import clubLogo_1 from '@/assets/icons/logo_1.svg'

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center justify-between bg-[#333333]/15 px-16 py-10 md:flex-row">
      {/* Social Media Icons */}
      <div className="mb-4 flex space-x-4 md:mb-0">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-gray-700 shadow hover:text-blue-600"
        >
          <i className="fab fa-facebook-f"></i>
        </a>

        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-gray-700 shadow hover:text-red-600"
        >
          <i className="fab fa-youtube"></i>
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl text-gray-700 shadow hover:text-pink-600"
        >
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Logos */}
      <div className="flex space-x-6 items-center">
        <img
          src={greenwichLogo}
          alt="University of Greenwich Logo"
          className="h-20"
        />
        <img src={clubLogo_1} alt="HelloGIT Logo" className="h-14" />
      </div>
    </footer>
  );
};

export default Footer;
