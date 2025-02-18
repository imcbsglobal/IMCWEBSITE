import React from "react";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1400px] mx-auto px-5 py-10">
      {/* Logo and Intro Section */}
      <div className="md:flex md:justify-between w-full mb-10">
        <div className="w-auto h-[80px] mb-5 md:mb-0">
          <img src={logo} className="w-full h-full object-contain" alt="Logo" />
        </div>
        <div className="md:w-[60%] lg:w-[500px] text-start textGradient6 text-sm md:text-base">
        © 2025 IMC Business Solutions. Leading IT solutions provider in Kerala since 2017.  
        Empowering businesses with innovative software and technology solutions.
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full mb-10">
        {/* First */}
        <div>
          <div className="text-[#000] text-xl textGradient6 font-bold mb-2">
            SOFTWARES
          </div>
          <ul className="text-[#000] textGradient6 text-sm md:text-base">
            <li>Inventory Management</li>
            <li>Health Care Management</li>
            <li>Restaurants</li>
            <li>Hospitality</li>
            <li>Institution Management</li>
          </ul>
        </div>
        {/* Second */}
        <div>
          <div className="text-[#000] text-xl textGradient6 font-bold mb-2">
            SERVICES
          </div>
          <ul className="text-[#000] textGradient6 text-sm md:text-base">
            <li>Website & Web Application</li>
            <li>Health Care Management</li>
            <li>Mobile App</li>
            <li>Digital Marketing/SEO</li>
            <li>Branding</li>
            <li>Graphics & Creatives</li>
            <li>Business Brandings</li>
          </ul>
        </div>
        {/* Third */}
        <div>
          <div className="text-[#000] text-xl textGradient6 font-bold mb-2">
            BUSINESS
          </div>
          <ul className="text-[#000] textGradient6 text-sm md:text-base">
            <li>Retail & Wholesale</li>
            <li>Pharmacies</li>
            <li>School & Colleges</li>
            <li>Hospital & Clinics</li>
            <li>Restaurants</li>
            <li>Hotels</li>
          </ul>
        </div>
        {/* Fourth */}
        <div>
          <div className="text-[#000] text-xl textGradient6 font-bold mb-2">
            COMPANY
          </div>
          <ul className="text-[#000] textGradient6 text-sm md:text-base">
            <li>About IMC</li>
            <li>Team</li>
            <li>Goal & Missions</li>
            <li>Customers</li>
            <li>Supports</li>
            <li>Business Opportunities</li>
          </ul>
        </div>
      </div>

      {/* Copy Right Section */}
      <div className="border-t w-full pt-5 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="text-sm text-center md:text-left">
          © 2025 IMC Business Solutions. All rights reserved.
        </div>
        <ul className="flex justify-center gap-4">
          <li className="cursor-pointer text-xl">
            <FaInstagram />
          </li>
          <li className="cursor-pointer text-xl">
            <CiFacebook />
          </li>
          <li className="cursor-pointer text-xl">
            <FaWhatsapp />
          </li>
          <li className="cursor-pointer text-xl">
            <CiLinkedin />
          </li>
          <li className="cursor-pointer text-xl">
            <FaXTwitter />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
