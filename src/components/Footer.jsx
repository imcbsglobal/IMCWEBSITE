import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import logo from "../assets/logo.png"

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center max-w-[1400px] mx-auto'>
        <div className='flex justify-between items-center w-full mb-20'>
            <div className='w-auto h-[80px]'>
                <img src={logo} className='w-full h-full object-contain drop-shadow-sm' alt="" />
            </div>
            <div className='lg:w-[500px] md:w-[300px] text-start textGradient6'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nobis nihil, iste voluptas doloribus ut incidunt? Voluptates cupiditate praesentium asperiores. Nihil hic, eum provident ea iste animi vel ducimus saepe.
            </div>
        </div>
      <div className='flex justify-between w-full mb-10'>
        {/* First */}
        <div>
            <div className='text-[#000] text-2xl textGradient6 font-bold mb-2'>SOFTWARES</div>
            <ul className='text-[#000] textGradient6'>
                <li>Inventory Management</li>
                <li>Health Care Management</li>
                <li>Restaurants</li>
                <li>Hospitality</li>
                <li>Institution Management</li>
            </ul>
        </div>
        {/* Second */}
        <div>
            <div className='text-[#000] text-2xl textGradient6 font-bold mb-2'>SERVICES</div>
            <ul className='text-[#000] textGradient6'>
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
            <div className='text-[#000] text-2xl textGradient6 font-bold mb-2'>BUSINESS</div>
            <ul className='text-[#000] textGradient6'>
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
            <div className='text-[#000] text-2xl textGradient6 font-bold mb-2'>COMPANY</div>
            <ul className='text-[#000] textGradient6'>
                <li>About IMC</li>
                <li>Team</li>
                <li>Goal & Missions</li>
                <li>Customers</li>
                <li>Supports</li>
                <li>Business Opportunities</li>
            </ul>
        </div>
      </div>

      {/* Copy Right */}
      <div className='border-t w-full pt-10 flex justify-between items-center'>
        <div className=''>
        © 2025 IMC Business Solutions. All rights reserved.
        </div>
        <div className='flex justify-center items-center gap-2 list-none'>
            <li className='cursor-pointer'><FaInstagram/></li>
            <li className='cursor-pointer'><CiFacebook/></li>
            <li className='cursor-pointer'><FaWhatsapp/></li>
            <li className='cursor-pointer'><CiLinkedin/></li>
            <li className='cursor-pointer'><FaXTwitter/></li>
        </div>
      </div>
    </div>
  )
}

export default Footer
