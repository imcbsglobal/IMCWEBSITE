import React, { useState, useEffect, useRef } from "react";
import Footer from "../Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../ChatBot";
import banner from "../../assets/become.png";
import { FaRegHandshake } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoRocketOutline } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import rits from '../../assets/rits.png'
import dq from '../../assets/dq teck logo.png'
import flash from '../../assets/flash.png'
import sysmac from '../../assets/SYSMAC LOGO-01.png'
import imc from '../../assets/IMC Logo  BLACK.png'
import absy from '../../assets/absy logo final.png'
import partner from '../../assets/partner.jpeg'
import zenox from '../../assets/zenox.png'
import partnerorg from "../../assets/partner.jpg"

const Company = () => {
  const [openChat, setOpenChat] = useState(false);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });
  const isDescriptionInView = useInView(descriptionRef, { once: true });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Card animation variants
  const cardVariants2 = {
    hidden: { opacity: 0, filter: "blur(15px)", scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  // Partnership opportunities
  const opportunities = [
    {
      title: "Strategic Collaboration",
      description:
        "Form dynamic partnerships that drive innovation, leverage shared expertise, and create mutually beneficial growth opportunities across technological landscapes.",
      icon: <FaRegHandshake />,
    },
    {
      title: "Technology Integration",
      description:
        "Seamlessly blend cutting-edge technologies, unlock new capabilities, and develop integrated solutions that transform business potential and market reach.",
      icon: <FaRegLightbulb />,
    },
    {
      title: "Market Expansion",
      description:
        "Explore new markets, diversify your technological portfolio, and gain competitive advantages through strategic alliances and collaborative networks.",
      icon: <CiGlobe />,
    },
    {
      title: "Innovation Ecosystem",
      description:
        "Join a forward-thinking ecosystem that nurtures creativity, supports technological breakthroughs, and accelerates digital transformation strategies.",
      icon: <IoRocketOutline />,
    },
  ];

  // Partnership benefits
  const partnershipBenefits = [
    "Financial Opportunities: Partners can enjoy lucrative income streams based on  performance",
    "Training and Development: IMC provides training sessions and seminars to enhance leadership skills and recharge associates with positive energy.",
    "Recognition and Rewards: Associates are eligible for various rewards, incentives, and recognitions, including funds for travel, motorbikes, cars, houses, and more",
    "Supportive Network: A dedicated and professional team operates behind the scenes to ensure smooth business operations.",
    "Quality Products: Partners gain access to a wide range of health-friendly products and software solutions.",
  ];
  

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
    subject: "",
    content: "",
  });
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "3e557a00-0b21-45e5-b274-496427ac9210");
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          firstName: "",
          secondName: "",
          phone: "",
          email: "",
          subject: "",
          content: "",
        });
        setTimeout(() => setIsPopupVisible(false), 3000);
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("Error submitting form");
    }
  };

  const slides = [
    {
      image: rits,
      title: "Technical Partners",
    },
    {
      image: dq,
      title: "Technical Partners",
    },
    {
      image: flash,
      title: "Reseller Partners",
    },
    {
      image: sysmac,
      title: "Channel Partners",
    },
    // {
    //   image: imc,
    //   title: "Channel Partners",
    // },
    {
      image: absy,
      title: "Reseller Partners",
    },
    {
      image: zenox,
      title: "Reseller Partners",
    },
  ];
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: i * 0.1,
        duration: 0.8, 
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };
  
  return (
    <div className="relative overflow-hidden">
      {/* WhatsApp Contact Button */}
      <a href="https://wa.me/+917593820007">
        <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
          <RiWhatsappLine />
        </div>
      </a>

      {/* ChatBot */}
      {/* <div className="bottom-10 fixed right-10 z-[999]">
        <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
      </div> */}

      {/* Banner Section */}
      <div className="w-full h-auto bg-cover bg-center flex flex-col md:flex-row items-center justify-center  px-4 py-12 mt-14">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover    hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 max-w-4xl text-center md:text-left text-black px-4">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Stronger Together, Smarter Tomorrow
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl mb-8"
          >
            Transform Your Business Through Strategic Technological
            Collaborations
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <button
              className="bg-[#352317] text-[#fff] hover:text-black border-[#fff] px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all hover:border-[#000] border-2 hover:bg-white hover:font-bold" 
              onClick={() => setIsPopupVisible(true)}
            >
              Explore Partnership Opportunities
            </button>
          </motion.div>
        </div>
      </div>

      {/* Business Opportunities Section */}
      {/* <div className="flex flex-col justify-center items-center w-full relative bg-[#FCF3E1] py-16">
        <section className="max-w-[1400px] mx-auto w-full px-6">
          <div className="text-center mb-16">
            <motion.span
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              className="text-[#6D4C28] font-medium uppercase tracking-wider"
            >
              Explore Possibilities
            </motion.span>

            <motion.h2
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              custom={1}
              className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-[#352317]"
            >
              Partnership Opportunities
            </motion.h2>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              custom={2}
              className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"
            ></motion.div>
            <motion.p
              variants={cardVariants2}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              className="text-base max-w-[800px] mx-auto "
            >
              Discover transformative partnership models designed to accelerate
              your technological capabilities and business growth.
            </motion.p>
          </div>

          
          <div className="grid gap-6 sm:grid-cols-2 mb-24">
            {opportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                className=" p-6  rounded-3xl text-[#000] border border-[#7a5a3a] flex flex-col gap-4"
                variants={cardVariants2}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                custom={index}
              >
                <div className="text-4xl mb-2 text-[#ec972e]">
                  {opportunity.icon}
                </div>
                <h3 className="text-xl font-semibold">{opportunity.title}</h3>
                <p className="text-sm">{opportunity.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </div> */}


      {/* Partnership Benefits with zigzag layout */}
      <section
        id="benefits"
        className="py-24 bg-[#352317] relative overflow-hidden"
      >
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="20" cy="20" r="1" fill="#F3E5C9" />
            </pattern>
            <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span className="text-[#F3E5C9] font-medium uppercase tracking-wider">
              Why Partner With Us
            </span> */}
            <h2 className="text-4xl md:text-5xl font-bold mt-2 text-white">
              Partnership Benefits
            </h2>
            <div className="w-24 h-1 bg-[#F3E5C9] mx-auto mt-4"></div>
          </motion.div>

          <div className="space-y-16">
            {/* Zigzag layout with alternating image and text */}
            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={partnerorg}
                  alt="Partnership"
                  className="w-full h-[550px] rounded-3xl shadow-2xl object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <ul className="space-y-4">
                  {partnershipBenefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-start gap-4 border border-white/5 hover:bg-white/15 transition-all"
                    >
                      <div className="text-[#F3E5C9] text-2xl flex-shrink-0 mt-1">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-white font-medium">{benefit}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
              <motion.div
                className="order-2 md:order-1"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* <ul className="space-y-4">
                  {partnershipBenefits.slice(3).map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-start gap-4 border border-white/5 hover:bg-white/15 transition-all"
                    >
                      <div className="text-[#F3E5C9] text-2xl flex-shrink-0 mt-1">
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <p className="text-white font-medium">{benefit}</p>
                    </motion.li>
                  ))}
                </ul> */}
              </motion.div>

              <motion.div
                className="order-1 md:order-2"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              ></motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* types of parterns */}

      <section className="flex justify-center items-center py-16 bg-[#fef5e7]">
        <div className="w-[1300px] h-auto p-7">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span className="text-[#6D4C28] font-medium uppercase tracking-wider">
              Find Your Fit
            </span> */}
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-[#352317]">
              Types of Partners
            </h2>
            <div className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Technical Partners */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-[#e2cdb2]">
              <h3 className="text-2xl font-semibold mb-3 text-center text-[#7a5a3a]">
                Technical Partners
              </h3>
              <p className="text-gray-700 text-center">
                Collaborate with us on software, infrastructure, and
                cutting-edge solutions that drive innovation.
              </p>
            </div>

            {/* Channel Partners */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-[#e2cdb2]">
              <h3 className="text-2xl font-semibold mb-3 text-center text-[#7a5a3a]">
                Channel Partners
              </h3>
              <p className="text-gray-700 text-center">
                Operate under our brand to deliver products and services
                locally, manage daily business activities, and expand market
                presence in your region.
              </p>
            </div>

            {/* Reseller Partners */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-[#e2cdb2]">
              <h3 className="text-2xl font-semibold mb-3 text-center text-[#7a5a3a]">
                Reseller Partners
              </h3>
              <p className="text-gray-700 text-center">
                Resell our solutions to your customers and grow your business
                with competitive margins.
              </p>
            </div>

            {/* Marketing Partners */}
            <div className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border border-[#e2cdb2]">
              <h3 className="text-2xl font-semibold mb-3 text-center text-[#7a5a3a]">
                Marketing Partners
              </h3>
              <p className="text-gray-700 text-center">
                Partner with us to drive brand awareness and generate qualified
                leads through strategic campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Showcase Section */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#6D4C28] font-medium uppercase tracking-wider">
             
            </span>
            <h2 className=" font-bold mt-2 mb-4 text-[#352317] text-4xl">
            Our Network
            </h2>
            <div className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
          </motion.div>

          {/* Logo Carousel with improved styling */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pb-8"
          >
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop
              className="py-8"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    className="flex flex-col items-center bg-[#F8F8F8] rounded-xl p-6 shadow-sm hover:shadow-md transition-all h-48"
                    whileHover={{ y: -5 }}
                  >
                    <div className="h-24 flex items-center justify-center mb-4">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="h-auto max-h-24 w-auto max-w-full object-contain"
                      />
                    </div>
                    <div className="px-3 py-1 bg-[#F3E5C9] rounded-full">
                      <p className="text-center text-sm font-medium text-[#352317]">
                        {slide.title}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-[#352317] to-[#6D4C28] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern
              id="diagonalHatch"
              width="10"
              height="10"
              patternTransform="rotate(45 0 0)"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="10"
                style={{ stroke: "white", strokeWidth: 1 }}
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#diagonalHatch)" />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Business Through Partnership?
          </motion.h2>

          <motion.p
            className="text-xl text-[#F3E5C9] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join our network of innovative partners and unlock new possibilities
            for growth and success.
          </motion.p>

          <motion.button
            className="bg-white text-[#352317] px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:bg-[#F3E5C9] transition-all"
            onClick={() => setIsPopupVisible(true)}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Partner Today
          </motion.button>
        </div>
      </section> */}

      {/* Popup Form with improved styling */}
      {isPopupVisible && (
       <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-start z-[999] backdrop-blur-sm overflow-y-auto px-4 py-10">

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-white p-8 rounded-2xl w-full max-w-lg shadow-2xl relative overflow-hidden max-h-screen overflow-y-auto"

          >
            {/* Background pattern */}
            <div className="absolute inset-0 -z-10 opacity-5">
              <svg width="100%" height="100%">
                <pattern
                  id="formPattern"
                  x="0"
                  y="0"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="10" cy="10" r="1" fill="#352317" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#formPattern)" />
              </svg>
            </div>

            {/* Color accent */}
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#352317] to-[#BF8C60]"></div>

            {/* Close button */}
            <button
              onClick={() => setIsPopupVisible(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
              aria-label="Close"
            >
              <IoCloseSharp className="text-2xl" />
            </button>

            <h2 className="text-2xl font-bold mb-1 text-[#352317]">
              Partner With Us
            </h2>
            <p className="text-gray-600 mb-6">
              Complete the form below to start your partnership journey
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BF8C60] focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="secondName"
                    placeholder="Enter your last name"
                    value={formData.secondName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BF8C60] focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BF8C60] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BF8C60] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Interest Area
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="e.g., Technical Partnership, Reseller, etc."
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BF8C60] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  name="content"
                  placeholder="Tell us about your partnership interests and goals"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#BF8C60] focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#352317] to-[#6D4C28] text-white py-3 px-6 rounded-lg font-medium text-lg hover:from-[#4D341C] hover:to-[#7A5A3A] transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Submit Partnership Request</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </button>
            </form>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 p-3 rounded-lg text-center ${
                  result.includes("Success")
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
                }`}
              >
                {result}
              </motion.div>
            )}
          </motion.div>
        </div>
      )}
      {/* Footer */}
      <section className="py-10 bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Company;
