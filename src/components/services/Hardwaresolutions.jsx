import React, { useEffect, useState } from "react";
import Footer from "../Footer";
import hardwareImg from '../../assets/graphic.jpeg';
import serverRoom from '../../assets/server-room.jpeg';
import posSystem from '../../assets/pos-system.jpeg';
import securityCamera from '../../assets/security-camera.jpeg';
import technician from '../../assets/technician.jpeg';
import clientTestimonial from '../../assets/client-testimonial.jpeg';
import { FaServer, FaCloudDownloadAlt, FaNetworkWired } from "react-icons/fa";
import { MdSecurity, MdDevices, MdBusinessCenter } from "react-icons/md";
import { BsTools, BsHeadset, BsShieldCheck } from "react-icons/bs";
import { IoMdSpeedometer } from "react-icons/io";
import { TbCertificate } from "react-icons/tb";
import support from '../../assets/eye.png';
import quality from '../../assets/ideas.png';
import innovation from '../../assets/innovation.png';
import warranty from '../../assets/warranty.png';
import darkGradient from "../../assets/darkGradient.jpg";
import { motion } from "framer-motion";

const Hardwaresolutions = () => {
  const [activeTab, setActiveTab] = useState("pos");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const solutions = {
    pos: {
      title: "POS Systems & Equipment",
      description: "State-of-the-art point-of-sale systems that streamline your business operations and enhance customer experience.",
      image: posSystem,
      features: [
        "Touchscreen terminals with intuitive interfaces",
        "Integrated payment processing solutions",
        "Inventory management capabilities",
        "Customer loyalty program integration",
        "Real-time sales analytics and reporting"
      ]
    },
    security: {
      title: "Security Hardware",
      description: "Comprehensive security solutions to protect your business assets and ensure peace of mind.",
      image: securityCamera,
      features: [
        "High-definition CCTV surveillance systems",
        "Access control with biometric authentication",
        "Intrusion detection and alarm systems",
        "Video analytics with AI-powered monitoring",
        "Remote monitoring and management capabilities"
      ]
    },
    network: {
      title: "Network Infrastructure",
      description: "Robust networking solutions that form the backbone of your digital operations.",
      image: serverRoom,
      features: [
        "High-performance routers and switches",
        "Wireless access points for seamless connectivity",
        "Network security appliances and firewalls",
        "Structured cabling and fiber optic solutions",
        "Network monitoring and management tools"
      ]
    },
    support: {
      title: "Maintenance & Support",
      description: "Comprehensive support services to keep your hardware running smoothly and efficiently.",
      image: technician,
      features: [
        "24/7 technical support and troubleshooting",
        "Preventive maintenance programs",
        "On-site repair services",
        "Hardware upgrades and replacements",
        "System health monitoring and diagnostics"
      ]
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <div className="py-20 w-full relative pt-32 pb-20">
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 -z-10">
          <motion.img
            src={darkGradient}
            alt=""
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>

        <section className="w-full max-w-[1400px] mx-auto rounded-3xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div
              className="flex flex-col gap-6 justify-center"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-[32px] md:text-[50px] font-semibold textGradient4">
                Hardware <span className="block">Solutions</span>
              </h2>
              <p className="text-white text-lg opacity-90">
                Cutting-edge hardware solutions designed to optimize your
                business operations, enhance security, and drive productivity to
                new heights.
              </p>

              <ul className="space-y-4">
                {[
                  {
                    icon: <FaServer />,
                    title: "POS Systems  Equipment",
                    text: "Complete point-of-sale solutions including touchscreen terminals, cash drawers, and customer displays for seamless business operations.",
                  },
                  {
                    icon: <MdSecurity />,
                    title: "Security Hardware",
                    text: "Advanced security systems including CCTV cameras, access control devices, and biometric scanners for comprehensive protection.",
                  },
                  {
                    icon: <FaNetworkWired />,
                    title: "Network Infrastructure",
                    text: "Enterprise-grade networking equipment including routers, switches, and wireless access points for reliable connectivity.",
                  },
                  {
                    icon: <BsTools />,
                    title: "Maintenance  Support",
                    text: "Professional hardware maintenance, repairs, and technical support to ensure your systems run smoothly and efficiently.",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="w-full bg-gradient-to-r p-[1px] rounded-3xl overflow-hidden"
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  >
                    <div className="w-full h-full bg-[#ffffff13] backdrop-blur-sm p-4 flex items-start gap-4 rounded-3xl">
                      <div className="text-white text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold textGradient4 text-[20px]">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#fff] textGradient6">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative w-full h-full bg-[#000] rounded-3xl overflow-hidden">
                <motion.img
                  src={hardwareImg}
                  alt="Hardware Solutions"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* Solutions Detail Section */}
      <div className="w-full relative py-20 ">
        <div className="w-full absolute top-0 bottom-0 left-0 right-0 -z-10">
          <motion.img
            src={darkGradient}
            alt=""
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <h2 className="text-[32px] md:text-[40px] font-semibold textGradient4 mb-4">
              Comprehensive Hardware Solutions
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto opacity-90">
              Explore our range of industry-leading hardware solutions designed
              to meet your specific business needs and challenges.
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {Object.keys(solutions).map((key) => (
              <motion.button
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className={` rounded-full text-white font-medium ${
                  activeTab === key
                    ? "bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] text-white p-[1px]"
                    : "bg-[#ffffff13] hover:bg-[#ffffff20]"
                }`}
                onClick={() => setActiveTab(key)}
              >
                <div className="bg-black px-6 py-3 rounded-full">
                {solutions[key].title}

                </div>
                
              </motion.button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r p-[1px] rounded-3xl overflow-hidden"
            >
              <div className="w-full h-full bg-[#111] rounded-3xl overflow-hidden">
                <img
                  src={solutions[activeTab].image}
                  alt={solutions[activeTab].title}
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold textGradient4 mb-4">
                {solutions[activeTab].title}
              </h3>
              <p className="text-white opacity-90 mb-6">
                {solutions[activeTab].description}
              </p>

              <ul className="space-y-3">
                {solutions[activeTab].features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#8d8d8d] to-[#ffdd9e] flex items-center justify-center">
                      <span className="text-black text-xs">✓</span>
                    </div>
                    <span className="text-white">{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <a href="/contact">
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="mt-8  p-[1px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] rounded-full text-white font-medium w-fit"
              >
                <div className="bg-black px-6 py-3 rounded-full">
                Contact now
                </div>
                
              </motion.button>
              </a>
            </motion.div>
            
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="w-full relative py-20">
        <div className="w-full absolute top-0 right-0 bottom-0 left-0 -z-10">
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={darkGradient}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <section className="w-full max-w-[1400px] mx-auto rounded-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[32px] md:text-[40px] font-semibold textGradient4 mb-4">
              Why Choose Our Hardware Solutions
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto opacity-90">
              Our commitment to excellence and customer satisfaction sets us
              apart in delivering premium hardware solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center w-full bg-gradient-to-r overflow-hidden p-[1px] rounded-3xl"
            >
              <div className="bg-[#ffffff0f] backdrop-blur-sm p-8 rounded-3xl shadow-md w-full h-full">
                <h3 className="text-2xl font-semibold textGradient4 text-[#fff] mb-6">
                  Our Commitment to Excellence
                </h3>
                <ul className="space-y-6">
                  {[
                    {
                      icon: support,
                      title: "24/7 Technical Support",
                      description:
                        "Round-the-clock expert assistance whenever you need it",
                    },
                    {
                      icon: quality,
                      title: "Premium Quality Hardware",
                      description:
                        "Industry-leading equipment & parts from trusted brands",
                    },
                    {
                      icon: innovation,
                      title: "Innovation Driven Solutions",
                      description:
                        "Cutting-edge technology to keep you ahead of the competition",
                    },
                    {
                      icon: warranty,
                      title: "Extended Warranties",
                      description:
                        "Comprehensive warranty programs to protect your investment",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-4 textGradient4">
                        <div className="w-16 h-16 rounded-xl">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div>
                          <span className="text-white font-semibold">
                            {item.title}
                          </span>
                          <p className="text-white opacity-80 text-sm">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center w-full bg-gradient-to-r overflow-hidden p-[1px] rounded-3xl"
            >
              <div className="bg-[#ffffff0f] w-full h-full p-8 rounded-3xl shadow-md">
                <h3 className="text-2xl font-semibold text-white mb-6">
                  Our Success Metrics
                </h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  {[
                    {
                      label: "Successful Installations",
                      value: "500+",
                      extra: "Systems Deployed",
                      icon: <MdDevices className="text-white text-4xl" />,
                    },
                    {
                      label: "Client Satisfaction",
                      value: "98%",
                      extra: "Industry Leading",
                      icon: <BsHeadset className="text-white text-4xl" />,
                    },
                    {
                      label: "Certified Technicians",
                      value: "20+",
                      extra: "Industry Experts",
                      icon: <TbCertificate className="text-white text-4xl" />,
                    },
                    {
                      label: "Response Time",
                      value: "<1hr",
                      extra: "Average Response",
                      icon: <IoMdSpeedometer className="text-white text-4xl" />,
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                      viewport={{ once: true }}
                      className="bg-[#ffffff08] p-4 rounded-xl flex flex-col items-center"
                    >
                      {item.icon}
                      <h4 className="text-2xl font-bold text-white mt-2">
                        {item.value}
                      </h4>
                      <p className="text-sm text-white opacity-80 text-center">
                        {item.label}
                      </p>
                      {item.extra && (
                        <p className="text-[#ffffff] text-xs opacity-70 text-center">
                          {item.extra}
                        </p>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-[#ffffff08] p-4 rounded-xl"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={clientTestimonial}
                      alt="Client Testimonial"
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white text-sm italic">
                        "The hardware solutions provided have transformed our
                        business operations, improving efficiency by over 40%."
                      </p>
                      <p className="text-white text-xs mt-1 opacity-70">
                        — John Smith, CEO of TechCorp
                      </p>
                    </div>
                  </div>
                </motion.div> */}
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Industries We Serve */}
      <div className="w-full relative py-20 ">
        <div className="absolute inset-0 -z-10 w-full h-full">
          <motion.img
            src={darkGradient}
            alt=""
            className="w-full h-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </div>
        <div className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[32px] md:text-[40px] font-semibold textGradient4 mb-4">
              Industries We Serve
            </h2>
            <p className="text-white text-lg max-w-2xl mx-auto opacity-90">
              Our hardware solutions are tailored to meet the unique challenges
              of various industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: <MdBusinessCenter />,
                title: "Retail & Hospitality",
                description:
                  "POS systems, inventory management, and customer displays for seamless shopping experiences.",
              },
              {
                icon: <FaCloudDownloadAlt />,
                title: "Healthcare",
                description:
                  "Secure patient data management systems and specialized medical equipment hardware.",
              },
              {
                icon: <BsShieldCheck />,
                title: "Finance & Banking",
                description:
                  "Secure transaction systems, ATM hardware, and fraud prevention solutions.",
              },
              {
                icon: <FaNetworkWired />,
                title: "Education",
                description:
                  "Interactive learning hardware, campus security systems, and network infrastructure.",
              },
              {
                icon: <MdDevices />,
                title: "Manufacturing",
                description:
                  "Industrial control systems, quality control hardware, and production monitoring tools.",
              },
              {
                icon: <MdSecurity />,
                title: "Government & Public Sector",
                description:
                  "Secure communication systems, identity verification, and public safety hardware.",
              },
            ].map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r p-[1px] rounded-3xl overflow-hidden"
              >
                <div className="bg-[#ffffff0f] backdrop-blur-sm p-6 rounded-3xl h-full">
                  <div className="text-white text-3xl mb-4">
                    {industry.icon}
                  </div>
                  <h3 className="text-xl font-semibold textGradient4 mb-2">
                    {industry.title}
                  </h3>
                  <p className="text-white opacity-80 text-sm">
                    {industry.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full relative py-20">
        <div className="w-full absolute top-0 right-0 bottom-0 left-0 -z-10">
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={darkGradient}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <section className="w-full max-w-[1400px] mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r p-[1px] rounded-3xl overflow-hidden"
          >
            <div className="bg-[#ffffff13] backdrop-blur-sm p-10 rounded-3xl text-center">
              <h2 className="text-[32px] md:text-[40px] font-semibold textGradient4 mb-4">
                Ready to Transform Your Hardware Infrastructure?
              </h2>
              <p className="text-white text-lg max-w-2xl mx-auto opacity-90 mb-8">
                Contact our team of experts today to discuss your specific
                hardware needs and discover how our solutions can drive your
                business forward.
              </p>
              {/* <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-3 bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] rounded-full text-black font-medium">
                  Request a Consultation
                </button>
                <button className="px-8 py-3 bg-[#ffffff13] rounded-full text-white font-medium border border-white/20">
                  View Case Studies
                </button>
              </div> */}
            </div>
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <section className="py-10 bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Hardwaresolutions;