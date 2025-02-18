import React from "react";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
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
          © 2025 IMC Business Solutions. Leading IT solutions provider in Kerala
          since 2017. Empowering businesses with innovative software and
          technology solutions.
        </div>
      </div>

      {/* Footer Links Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full mb-10">
        {/* Softwares Section */}
        <div>
          <div className="text-[#000] text-xl textGradient6 font-bold mb-2">
            SOFTWARES
          </div>
          <ul className="text-[#000] textGradient6 text-sm md:text-base">
            <li><Link to="/software#restaurant">Restaurants</Link></li>
            <li><Link to="/software#inventorymanagement">Inventory Management</Link></li>
            <li><Link to="/software#healthcaremanagement">Health Care Management</Link></li>
            <li><Link to="/software#hospitality">Hospitality</Link></li>
            <li><Link to="/software#institutionmanagement">Institution Management</Link></li>
          </ul>
        </div>
        {/* Services Section */}
        <div>
          <div className="text-[#000] text-xl textGradient6 font-bold mb-2">
            SERVICES
          </div>
          <ul className="text-[#000] textGradient6 text-sm md:text-base">
            <li><Link to="/websiteandWebApplications">Website & Web Application</Link></li>
            <li><Link to="/mobileApp">Mobile App Development</Link></li>
            <li><Link to="/digitalmarketingandSEO">Digital Marketing / SEO</Link></li>
            <li><Link to="/branding">Branding</Link></li>
            <li><Link to="/graphicsandCreatives">Graphics & Creatives</Link></li>
            <li><Link to="/businessBranding">Business Branding</Link></li>
          </ul>
        </div>
        {/* Business Section */}
        <div>
          <div className="text-[#000] text-xl textGradient6 font-bold mb-2">
            BUSINESS
          </div>
          <ul className="text-[#000] textGradient6 text-sm md:text-base">
            <li><Link to="/business#retailswholesale">Retails & Wholesale</Link></li>
            <li><Link to="/business#pharmacies">Pharmacies</Link></li>
            <li><Link to="/business#school">School / Colleges</Link></li>
            <li><Link to="/business#hospitalClinics">Hospital & Clinics</Link></li>
            <li><Link to="/business#restaurantBusiness">Restaurants</Link></li>
            <li><Link to="/business#hotelBusiness">Hotels</Link></li>
          </ul>
        </div>
        {/* Company Section */}
        <div>
          <div className="text-[#000] text-xl textGradient6 font-bold mb-2">
            COMPANY
          </div>
          <ul className="text-[#000] textGradient6 text-sm md:text-base">
            <li><Link to="/company#aboutid">About IMC</Link></li>
            <li><Link to="/company#team">Team</Link></li>
            <li><Link to="/company#goalsmission">Goals & Missions</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/company#supports">Supports</Link></li>
            <li><Link to="/company#bussinessopportunities">Business Opportunities</Link></li>
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
            <a
              href="https://www.instagram.com/imcbusinesssolution/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="cursor-pointer text-xl">
            <a
              href="https://www.facebook.com/people/IMC-Business-Solution/100069040622427/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiFacebook />
            </a>
          </li>
          <li className="cursor-pointer text-xl">
            <a
              href="https://api.whatsapp.com/send/?phone=917593820005&text&type=phone_number&app_absent=0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </li>
          <li className="cursor-pointer text-xl">
            <a
              href="https://www.linkedin.com/in/imc-business-solutions-0b0066335/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiLinkedin />
            </a>
          </li>
          <li className="cursor-pointer text-xl">
            <a
              href="https://imcportfolio.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;