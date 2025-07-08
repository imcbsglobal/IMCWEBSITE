import React from "react";
import { FaInstagram, FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ImLocation } from "react-icons/im";
const Footer = () => {
  const mapUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.0735491927476!2d76.07862677487005!3d11.618106688586558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84f992636da1e2d%3A0xe5e2fd2dafe1f7f3!2sIMC%20BUSINESS%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1739947667097!5m2!1sen!2sin";

  return (
    <div className="flex flex-col justify-center items-center max-w-[1400px] mx-auto px-5 ">
      {/* Logo and Intro Section */}
      <div className="md:flex md:items-center md:justify-center md:gap-40 w-full mb-10">
        {/* Logo and Address Section - 30% width */}
        <div className="md:w-[30%]">
          <div className="w-auto h-[80px] mb-5 md:mb-12">
            <img
              src={logo}
              className="w-full h-full object-contain"
              alt="Logo"
            />
          </div>
          {/* Address */}
          <div className="pl-0 md:pl-16 pb-3">
            <div className="text-[#000] text-xl  font-bold mb-2">
              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-black hover:text-orange-300"
              >
                <ImLocation size={24} />
              </a>
            </div>
            <div className="text-[#000] text-sm md:text-base leading-normal space-y-2 text-left p-1">
  <div>
    <p className="p-1">Palakkunnummal Building,</p>
    <p className="p-1">Near Govt Ayurvedic Hospital</p>
    <p className="p-1">Emily - Kalpetta,</p>
    <p className="p-1">Wayanad - Kerala - 673121</p>
  </div>
  
  <div>
    <p className="pl-1">
      Email:{" "}
      <a
        href="mailto:info@imcbsglobal.com"
        className="text-black hover:underline "
      >
        info@imcbsglobal.com
      </a>
    </p>
  </div>
</div>

          </div>
        </div>

        {/* Footer Links Section - 70% width */}
        <div className="md:w-[70%]">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 w-full mb-10">
            {/* Company Section */}
            <div>
              <div className="text-[#000] text-xl  font-bold mb-2">COMPANY</div>
              <ul className="text-[#000]  text-sm md:text-base ">
                <li className="py-1">
                  <Link to="/aboutimc">About IMC</Link>
                </li>
                <li className="py-1">
                  <Link to="/supports">Supports</Link>
                </li>
                <li className="py-1">
                  <Link to="/becomepartner">Business Partners</Link>
                </li>
                {/* <li className="py-1">
                  <Link to="/career">Career</Link>
                </li> */}
              </ul>
            </div>

            {/* Softwares Section */}
            <div>
              <div className="text-[#000] text-xl  font-bold mb-2">
                SOFTWARES
              </div>
              <ul className="text-[#000]  text-sm md:text-base">
                <li className="py-1">
                  <Link to="/inventory">TASK </Link>
                </li>
                <li className="py-1">
                  <Link to="/healthcare">SHADE </Link>
                </li>
                <li className="py-1">
                  <Link to="/institution">MAGNET </Link>
                </li>
                <li className="py-1">
                  <Link to="/pharmacy">VTASK</Link>
                </li>
                <li className="py-1">
                  <Link to="/restaurant">DINE</Link>
                </li>
                <li className="py-1">
                  <Link to="/hospitality">SHADE</Link>
                </li>
                <li className="py-1">
                  <Link to="/auric">AURIC</Link>
                </li>
              </ul>
            </div>

            {/* Solutions Section */}
            <div>
              <div className="text-[#000] text-xl  font-bold mb-2">
                SOLUTIONS
              </div>
              <ul className="text-[#000]  text-sm md:text-base">
                {/* <li className="py-1">
                  <Link to="/erpsoftware">ERP Software</Link>
                </li> */}
                <li className="py-1">
                  <Link to="/websiteandWebApplications">
                    Website & Web Application
                  </Link>
                </li>
                <li className="py-1">
                  <Link to="/mobileApp">Mobile App Development</Link>
                </li>
                {/* <li className="py-1">
                  <Link to="/businessBranding">Business Consulting</Link>
                </li> */}
                <li className="py-1">
                  <Link to="/digitalmarketing">Digital Marketing</Link>
                </li>
                {/* <li className="py-1">
                  <Link to="/hardwaresolutions">Hardware Solutions</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Policy Links Section */}
      <div className="w-full flex justify-end gap-10 mb-5 text-sm">
        <Link to="/termsandconditions" className="hover:underline">
          Terms & Conditions
        </Link>
        <Link to="/privacypolicy" className="hover:underline">
          Privacy Policy
        </Link>
        <Link to="/refundpolicy" className="hover:underline">
          Refund Policy
        </Link>
      </div>
      {/* Copy Right Section */}
      <div className="border-t w-full pt-5 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="text-sm text-center md:text-left">
          © 2025 IMCB Solutions LLP. All rights reserved.
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