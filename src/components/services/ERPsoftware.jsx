import React from 'react'
import { useState, useRef, useEffect } from 'react';
import Footer from '../Footer';
import darkGradient from "../../assets/darkgradient.jpg";
import taskpro from '../../assets/Task Pro.png'
import shade from '../../assets/SHADEorg.png'
import vtask from '../../assets/VTASK.png'
import dine from '../../assets/DINE_1_copy.png'
import club from '../../assets/CLUBLOGIC.png'
import magnet from '../../assets/MAGNET.png'
import auric from '../../assets/AURIC.png'
import star from '../../assets/starstay.png'
import eway from '../../assets/ewaytask.png'
import dinepro from '../../assets/dinepro.png'
import magicpda from '../../assets/magicpda.png'
import dinekot from '../../assets/dinekot.png'
const ERPSoftware = () => {
  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const [selectedSoftware, setSelectedSoftware] = useState(null);
  const softwareDetails = {
    "TASK PRO": {
      title: "TASK PRO",
      Image:taskpro,
      description: "A Windows-based financial software that aids businesses in managing financial transactions, stock levels, sales, and deliveries. It ensures product availability, generates reports, and provides real-time financial data for informed decision-making, enhancing business operations.",
      features: [
        "Financial Transaction Management",
        "Inventory Control System",
        "Sales Analytics Dashboard",
        "Delivery Management Tool",
        "Real-time Financial Reporting"
      ]
    },
    "Shade": {
      title: "Shade Hospital Management Software",
      Image:shade,

      description: "A flexible solution for hospitals and clinics, offering tools for patient management, appointment scheduling, billing, revenue management, and reporting, aiming to streamline processes and improve patient care quality.",
      features: [
        "Patient Records Management",
        "Appointment Scheduling System",
        "Comprehensive Billing System",
        "Revenue Cycle Management",
        "Healthcare Analytics & Reporting"
      ]
    },
    "VTASK": {
      title: "VTASK Pharmacy Management",
      Image:vtask,

      description: "A Pharmacy Management software that automates inventory, revenue, and billing processes, providing a trusted solution for wholesale and retail sectors. It generates reports and analytics, improving efficiency, accuracy, and patient safety.",
      features: [
        "Prescription Management",
        "Pharmaceutical Inventory Control",
        "Patient Information System",
        "Revenue & Billing Automation",
        "Regulatory Compliance Tools"
      ]
    },
    "DINE": {
      title: "DINE Restaurant Management",
      Image:dine,

      description: "A restaurant management software that streamlines ordering, billing, and payment processes, integrates with POS systems and Android platforms, and generates reports and analytics for sales, inventory, and customer behavior.",
      features: [
        "Table & Order Management",
        "Menu & Recipe Control",
        "POS System Integration",
        "Inventory & Stock Monitoring",
        "Customer Behavior Analytics"
      ]
    },
    "Club Logic": {
      title: "Club Logic Fitness Management",
      Image:club,

      description: "A software designed for fitness clubs and gyms, enhancing operations like membership management, attendance, scheduling, billing, and fee collection, thereby saving time and enhancing customer satisfaction.",
      features: [
        "Membership Management System",
        "Class & Equipment Scheduling",
        "Attendance Tracking Tools",
        "Automated Billing & Payments",
        "Fitness Progress Monitoring"
      ]
    },
    "Magnet": {
      title: "Magnet School Management",
      Image:magnet,

      description: "A digital platform that streamlines school operations, improving data accuracy and communication. It streamlines student and teacher records, attendance tracking, and other functions, allowing schools to focus on education.",
      features: [
        "Student Information System",
        "Teacher Management Portal",
        "Attendance & Grading System",
        "Parent Communication Tools",
        "Academic Performance Analytics"
      ]
    },
    "Auric": {
      title: "Auric Jewellery Management",
      Image:auric,

      description: "A software solution for jewellery retailers, wholesalers, and manufacturers, assisting in inventory management, customer tracking, sales, and accounting. It offers features like barcoding, gemstone tracking, and product customization.",
      features: [
        "Jewellery Inventory System",
        "Gemstone Tracking & Certification",
        "Customer Relationship Management",
        "Design & Customization Tools",
        "Sales & Accounting Integration"
      ]
    },
    "STARSTAY": {
      title: "STARSTAY Hotel Management",
      Image:star,

      description: "A user-friendly hotel management software that streamlines operations like front-desk management, room booking, billing, housekeeping, and reporting, automating manual tasks and integrating with other systems for improved efficiency.",
      features: [
        "Front-Desk Operations Management",
        "Room Booking & Availability System",
        "Housekeeping Coordination Tools",
        "Guest Relationship Management",
        "Revenue & Occupancy Analytics"
      ]
    }
  };

  const softwareSectionRef = useRef(null);

  const handleSoftwareClick = (software) => {
    setSelectedSoftware(software);

    // Scroll to the software section
    if (softwareSectionRef.current) {
      softwareSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [active, setActive] = useState(false);
    
  useEffect(() => {
    // Scroll to top when this component loads
    window.scrollTo({ top: 0, behavior: "smooth" });

    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  return (
    <div>
      <div className="relative w-full">
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 -z-10">
          <img
            src={darkGradient}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <section className="w-full max-w-[1400px] mb-10 mx-auto pt-20 py-10">
          <div className="text-gray-200 p-4 md:p-8">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-8">
              <h1 className="text-4xl md:text-7xl font-light mb-4 md:mb-8 textGradient4 text-center">
                ERP SOFTWARE SOLUTIONS
              </h1>

              {/* Article Info Grid */}
              <div className="flex items-center justify-center textGradient6">
                <div className="w-full md:w-[80%]">
                  <p className="text-sm leading-relaxed text-center px-4 md:px-0">
                    <span className="text-xl md:text-2xl font-semibold block mb-4">
                      Elevate Your Business with Our Software
                    </span>
                    At Absy IT Solutions, our transformative software solutions
                    are crafted to drive business success. We offer innovative,
                    tailored software that enhances efficiency and supports
                    growth, seamlessly integrating into your operations for
                    optimal performance.
                  </p>
                </div>
              </div>
            </div>

            {/* Animated Banner */}
            {/* <div className="w-full overflow-hidden rounded-3xl mb-10">
              <div className="bg-gradient-to-r from-purple-900 via-blue-800 to-indigo-900 p-8 md:p-12 animate-pulse">
                <h2 className="text-3xl md:text-4xl text-center text-white font-bold mb-4">
                  Industry-Specific Solutions
                </h2>
                <p className="text-center text-white text-lg md:text-xl">
                  Powerful ERP software tailored for your industry's unique
                  requirements
                </p>
              </div>
            </div> */}

            {/* Software Cards */}
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {Object.keys(softwareDetails).map((key, index) => (
                <div
                  key={index}
                  className="w-full md:w-[45%] lg:w-[30%] rounded-xl overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105"
                  onClick={() => handleSoftwareClick(softwareDetails[key])}
                >
                  <div className="bg-gradient-to-r bg-[#ffffff1c] p-[1px] h-full">
                    <div className="bg-gradient-to-b bg-[#ffffff1c]h-full p-6 rounded-xl">
                      <h3 className="text-2xl font-bold mb-3 textGradient5 bg-[#ffffff]">
                        <div className="bg-white rounded-lg p-4 mb-4">
                          {" "}
                          {/* Added logo background container */}
                          <img
                            src={softwareDetails[key].Image}
                            alt={softwareDetails[key].title}
                            className="w-full h-20 object-contain"
                          />
                        </div>
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                        {softwareDetails[key].description}
                      </p>
                      <div className="text-orange-400 flex items-center justify-end">
                        <span>Explore features</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 ml-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Selected Software Details Section */}
        <section
          ref={softwareSectionRef}
          className="w-full max-w-[1400px] mx-auto py-10"
        >
          {selectedSoftware && (
            <div className="bg-gradient-to-r bg-[#ffffff1c] p-[1px] rounded-3xl mx-4 md:mx-8">
              <div className="bg-[#ffffff1c] rounded-3xl p-6 md:p-10">
                <div className="mb-8">
                  <h2 className="text-3xl md:text-5xl font-bold textGradient4 mb-4">
                    {selectedSoftware.title}
                  </h2>
                  <div className="w-32 h-1 bg-gradient-to-r from-[#F99F2C] to-[#f18a04] mb-6"></div>
                  <p className="text-lg md:text-xl text-gray-300">
                    {selectedSoftware.description}
                  </p>
                </div>

                <h3 className="text-2xl md:text-3xl font-semibold textGradient6 mb-6">
                  Key Features
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {selectedSoftware.features.map((feature, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-r bg-[#ffffff1c] rounded-xl p-6 transform transition-all duration-300 hover:scale-105"
                    >
                      <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#F99F2C] to-[#f18a04] flex items-center justify-center mb-4">
                        <span className="text-xl font-bold text-white">
                          {index + 1}
                        </span>
                      </div>
                      <h4 className="text-lg font-medium text-white mb-2">
                        {feature}
                      </h4>
                    </div>
                  ))}
                </div>

                {/* <div className="mt-8 text-center">
                  <button className="bg-gradient-to-r from-[#F99F2C] to-[#f18a04] hover:from-[#F99F2C] hover:to-[#f18a04] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Request Demo
                  </button>
                </div> */}
              </div>
            </div>
          )}
        </section>

        {/* Mobile Apps Section */}
        <section className="w-full max-w-[1400px] mx-auto py-10 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center textGradient4 mb-10">
            Our Mobile Applications
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-4xl mx-auto">
            At Absy IT Solutions, our groundbreaking mobile application development services are designed to propel your business forward. We create innovative, custom mobile apps that boost efficiency, support growth, and seamlessly integrate into your operations for unparalleled performance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* TASK PRO */}
            <div className="bg-gradient-to-r bg-[#ffffff1c] p-[1px] rounded-xl">
              <div className="bg-[#ffffff1c] h-full rounded-xl p-6">
                {/* <h3 className="text-2xl font-bold text-white mb-4">TASK PRO</h3> */}
                <div className='h-16 w-16 '><img src={taskpro} alt="" className='h-full w-full object-contain' /></div>
                <p className="text-gray-300 mb-6">
                  A user-friendly mobile application designed for monitoring business in real-time. Various types of business reports are available for comprehensive business insights.
                </p>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#F99F2C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span>Real-time Business Monitoring</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#F99F2C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span>Comprehensive Business Reports</span>
                  </div>
                </div>
              </div>
            </div>

            {/* EWAY TASK */}
            <div className="bg-gradient-to-r bg-[#ffffff1c] p-[1px] rounded-xl">
              <div className="bg-[#ffffff1c] h-full rounded-xl p-6">
                {/* <h3 className="text-2xl font-bold text-white mb-4">EWAY TASK</h3> */}
                <div className='h-16 w-16 '><img src={eway} alt="" className='h-full w-full object-contain' /></div>
                
                <p className="text-gray-300 mb-6">
                  An ultimate solution designed for distribution-based business concepts, providing facilities for direct sales, order taking, sales return, and collections with user-wise and area-wise entry capabilities.
                </p>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#F99F2C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span>Direct Sales & Order Management</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#F99F2C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span>Area-wise Entry System</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Dine Pro */}
            <div className="bg-gradient-to-r bg-[#ffffff1c] p-[1px] rounded-xl">
              <div className="bg-[#ffffff1c] h-full rounded-xl p-6">
                {/* <h3 className="text-2xl font-bold text-white mb-4">Dine Pro</h3> */}
                <div className='h-16 w-16 '><img src={dinepro} alt="" className='h-full w-full object-contain' /></div>

                <p className="text-gray-300 mb-6">
                  A comprehensive dine reporting application that streamlines restaurant operations management with detailed reports on sales, inventory, and customer behavior analysis.
                </p>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#F99F2C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span>Detailed Sales Analytics</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#F99F2C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span>Customer Behavior Insights</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Magic PDA */}
            <div className="bg-gradient-to-r bg-[#ffffff1c] p-[1px] rounded-xl">
              <div className="bg-[#ffffff1c] h-full rounded-xl p-6">
                {/* <h3 className="text-2xl font-bold text-white mb-4">Magic PDA</h3>
                 */}
                <div className='h-16 w-16 '><img src={magicpda} alt="" className='h-full w-full object-contain' /></div>

                <p className="text-gray-300 mb-6">
                  A powerful Android application for managing hypermarket and supermarket activities, featuring stock management, product details with live stock, GRN Entries, Floor Billing, and advanced shelf tag printing.
                </p>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#F99F2C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span>Live Stock Management</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#F99F2C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span>Bluetooth Shelf Tag Printing</span>
                  </div>
                </div>
              </div>
            </div>

            {/* DINE KOT */}
            <div className="bg-gradient-to-r bg-[#ffffff1c] p-[1px] rounded-xl">
              <div className="bg-[#ffffff1c] h-full rounded-xl p-6">
                {/* <h3 className="text-2xl font-bold text-white mb-4">DINE KOT</h3> */}
                <div className='h-16 w-16 '><img src={dinekot} alt="" className='h-full w-full object-contain' /></div>

                <p className="text-gray-300 mb-6">
                  An application designed for managing flexible restaurant operations, featuring KOT entry and billing facilities with easy management of multiple kitchen-wise printing.
                </p>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#F99F2C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span>KOT Entry System</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-[#F99F2C] mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    <span>Multi-Kitchen Printing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="w-full max-w-[1400px] mx-auto py-10 px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center textGradient4 mb-10">
            Why Choose Our ERP Solutions?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-r bg-[#ffffff1c] p-[1px] rounded-xl">
              <div className="bg-[#ffffff1c] h-full rounded-xl p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#F99F2C] to-[#f18a04] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-3">
                  Enhanced Efficiency
                </h3>
                <p className="text-gray-400 text-center">
                  Streamline operations and reduce manual tasks with our
                  automated solutions
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r bg-[#ffffff1c] p-[1px] rounded-xl">
              <div className="bg-[#ffffff1c] h-full rounded-xl p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#F99F2C] to-[#f18a04] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-3">
                  Data-Driven Insights
                </h3>
                <p className="text-gray-400 text-center">
                  Make informed decisions with comprehensive analytics and
                  reporting tools
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r bg-[#ffffff1c] p-[1px] rounded-xl">
              <div className="bg-[#ffffff1c] h-full rounded-xl p-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#F99F2C] to-[#f18a04] rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-center text-white mb-3">
                  Customized Solutions
                </h3>
                <p className="text-gray-400 text-center">
                  Tailored software that adapts to your specific industry
                  requirements
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full max-w-[1400px] mx-auto py-10 px-4 md:px-8 mb-10">
          <div className="bg-gradient-to-r  rounded-3xl p-8 md:p-12">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Schedule a consultation with our ERP specialists today
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <button className="bg-[#F99F2C] text-white hover:bg-[#e89427] font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  Book a Demo
                </button>
                <button className="bg-transparent border-2 border-[#F99F2C] text-white hover:bg-[#F99F2C]/10 font-bold py-3 px-8 rounded-lg transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="w-full bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
}

export default ERPSoftware