import React, { useEffect, useState } from 'react';
import { FaUserMd, FaNotesMedical, FaFlask, FaFileInvoiceDollar, FaPills, FaShieldAlt, FaUsersCog, FaBalanceScale } from 'react-icons/fa';
import HealthCareImg from '../../assets/healthcareimg.jpg';
import shade from '../../assets/SHADEorg.png'
import Footer from ".././Footer";
const features = [
  { icon: <FaUserMd />, title: 'Patient Registration & Appointment Management', desc: 'Hassle-free booking, scheduling, and queue management.' },
  { icon: <FaNotesMedical />, title: 'Electronic Medical Records (EMR)', desc: 'Secure and centralized patient records for better diagnosis and treatment.' },
  { icon: <FaFlask />, title: 'Laboratory & Diagnostic Management', desc: 'Integrated lab module for efficient test processing and reporting.' },
  { icon: <FaFileInvoiceDollar />, title: 'Scan & Procedures Billing', desc: 'Automated billing, claims processing, and compliance with regulations.' },
  { icon: <FaPills />, title: 'Pharmacy & Inventory Control', desc: 'Real-time stock tracking, expiry alerts, and prescription management.' },
  { icon: <FaUsersCog />, title: 'Doctor & Staff Management', desc: 'Easy scheduling, shift tracking, and performance monitoring.' },
  { icon: <FaShieldAlt />, title: 'Data Security & Compliance', desc: 'Advanced security measures ensuring data privacy and regulatory compliance.' },
  { icon: <FaBalanceScale />, title: 'Financial Transparency', desc: 'Clear and detailed financial insights for better decision-making.' },
];

const HealthCare = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-20 text-white mt-10 ">
      {/* Hero Section */}
      <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left  gap-8">
        <img
          src={HealthCareImg}
          alt="Healthcare"
          className="w-full lg:w-1/2 rounded-3xl shadow-lg"
        />
        <div className="lg:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold textGradient4">
            HEALTHCARE MANAGEMENT
          </h1>

          <p className="mt-4   textGradient6 text-justify">
            we empower healthcare institutions with our advanced Hospital
            Information Management System ‘SHADE’ a comprehensive solution
            designed to optimize hospital workflows, enhance patient care, and
            improve operational efficiency.
            <span className="block text-justify">
              Our HIMS software integrates patient management, billing,
              electronic medical records (EMR), appointment scheduling,
              pharmacy, lab management, and more—all in one seamless platform.
              Whether you run a single hospital, a multi-specialty clinic, or a
              healthcare network, our system ensures smooth and automated
              operations, reducing paperwork and enhancing productivity.
            </span>
          </p>
          <div className="flex justify-start items-start w-[250px] bg-white mt-2">
          <img src={shade} alt="shade" className=" h-[80px] object-contain px-2" />
        </div>
        </div>
        
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-[1400px] mx-auto mb-20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition border border-white"
          >
            <div className="text-4xl text-white">{feature.icon}</div>
            <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm text-gray-300">{feature.desc}</p>
          </div>
        ))}
      </div>
      <section className="bg-[#fff] py-10 w-full">
          <Footer />
        </section>
    </div>
  );
};

export default HealthCare;
