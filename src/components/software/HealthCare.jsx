import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUserMd,
  FaNotesMedical,
  FaFlask,
  FaFileInvoiceDollar,
  FaPills,
  FaShieldAlt,
  FaUsersCog,
  FaBalanceScale,
  FaHospital,
  FaClinicMedical,
  FaTeeth,
  FaEye,
  FaAmbulance,
} from "react-icons/fa";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";
import HealthCareImg from "../../assets/healthcareimg.jpg";
import shade from "../../assets/SHADEorg.png";
import Footer from "../Footer";
import darkGradient from "../../assets/darkGradient.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";

import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import arogya from "../../assets/arogya.png";
import hillroom from "../../assets/hillroom.png";
import divine from "../../assets/divine.png";
import vinayaka from "../../assets/vinayaka.png";
import janatha from "../../assets/janatha.png";
import shandha from "../../assets/shantha.png";
import amminikkad from "../../assets/amminikkad.jpg";
import immune from "../../assets/immune.png";
import meera from '../../assets/meera.jpg'
import "locomotive-scroll/dist/locomotive-scroll.css";
import { Pagination } from "swiper/modules";
import { register } from "swiper/element/bundle";

const features = [
  {
    icon: <FaUserMd />,
    title: "OPD & Front Office System",
    desc: "Hassle-free booking, scheduling, and queue management.",
  },
  {
    icon: <FaNotesMedical />,
    title: "Electronic Medical Records (EMR)",
    desc: "Secure and centralized patient records for better diagnosis and treatment.",
  },
  {
    icon: <FaFlask />,
    title: "Laboratory & Diagnostic Management",
    desc: "Integrated lab module for efficient test processing and reporting.",
  },
  {
    icon: <FaFileInvoiceDollar />,
    title: "Scan & Procedures Billing",
    desc: "Automated billing, claims processing, and compliance with regulations.",
  },
  {
    icon: <FaPills />,
    title: "Pharmacy & Inventory Control",
    desc: "Real-time stock tracking, expiry alerts, and prescription management.",
  },
  {
    icon: <FaUsersCog />,
    title: "Doctor & Staff Management",
    desc: "Easy scheduling, shift tracking, and performance monitoring.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Data Security & Compliance",
    desc: "Advanced security measures ensuring data privacy and regulatory compliance.",
  },
  {
    icon: <FaBalanceScale />,
    title: "Financial Transparency",
    desc: "Clear and detailed financial insights for better decision-making.",
  },
];

const HealthCare = () => {
  const [openChat, setOpenChat] = useState(false);

  const [productVideos, setProductVideos] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const businessTypes = [
    { icon: <FaHospital />, text: "Hospitals" },
    { icon: <FaClinicMedical />, text: "Clinics" },
    { icon: <FaUserMd />, text: "Medical Practices" },
    { icon: <FaTeeth />, text: "Dental Clinics" },
    { icon: <FaEye />, text: "Eye Care Centers" },
    { icon: <FaAmbulance />, text: "Emergency Services" },
  ];
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProductVideosAndImages();
  }, []);

  const fetchProductVideosAndImages = async () => {
    try {
      setLoading(true);

      const videoQuery = query(
        collection(dbFirestore, "products"),
        where("category", "==", "SHADE")
      );
      const videoSnapshot = await getDocs(videoQuery);
      const videoData = videoSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Video data:", videoData);
      setProductVideos(videoData);

      const imageQuery = query(
        collection(dbFirestore, "productImages"),
        where("category", "==", "healthcare")
      );
      const imageSnapshot = await getDocs(imageQuery);
      const imageData = imageSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Image data:", imageData);
      setProductImages(imageData);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setLoading(false);
    }
  };

  const openFullScreen = (image) => {
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  const clients = [
    { id: 1, name: "AROGYA", logo: arogya, location: "Meenangadi - Wayanad" },
    {
      id: 2,
      name: "Divine Grace Institutions",
      logo: divine,
      location: "Banglore",
    },
    {
      id: 3,
      name: "Janatha Hospital",
      logo: janatha,
      location: "Engappuzha - Calicut",
    },
    {
      id: 4,
      name: "Hill Blooms Health Care",
      logo: hillroom,
      location: "Coorge-Karnataka",
    },
    {
      id: 5,
      name: "Shantha Polyclinic & Diagnostic Center",
      logo: shandha,
      location: "Pullpally - Wayanad",
    },
    {
      id: 6,
      name: "Amminikkad Mediclic",
      logo: amminikkad,
      location: "Perinthalmanna - Calicut",
    },
    {
      id: 7,
      name: "Immune Poly Clinic & Diagnostic Center",
      logo: immune,
      location: "Valad - Wayanad",
    },
    {
      id: 8,
      name: "Vinayaka Hospital",
      logo: vinayaka,
      location: "Pondalur - Tamil Nadu",
    },
    { id: 9, name: "MEERA", logo: meera, location: "Sulthan Bathery" },
  ];
  const tenants = [
    { name: "RITS SOFTWARE", place: "CALICUT" },
    { name: "RITS SOFTWARE", place: "UAE" },
    { name: "RITS SOFTWARE", place: "KSA" },
    { name: "RITS SOFTWARE", place: "OMAN" },
    { name: "RITS SOFTWARE", place: "QATAR" },
    { name: "RITS SOFTWARE", place: "TANZANIA" },
    { name: "FLASH INNOVATIONS", place: "BANGLORE" },
    { name: "ABSY IT SOLUTIONS", place: "BANGLORE" },
    { name: "SMART INFO TECH", place: "BANGLORE" },
    { name: "SATHYAM INFO TECH", place: "MYSORE" },
    { name: "IMC BUSINESS SOLUTIONS ", place: "MUKKAM" },
    { name: "IMC BUSINESS SOLUTIONS", place: "CHAVAKKAD" },
    { name: "IMC BUSINESS SOLUTIONS ", place: "KOOTHUPARAMBA" },
    { name: "SYSMAC COMPUTERS", place: "WAYANAD" },
    { name: "SYSMAC COMPUTERS", place: "KUTTYADI" },
    { name: "FLASH INNOVATIONS", place: "CALICUT" },
    { name: "FLASH INNOVATIONS", place: "MANGALURE" },
    { name: "ZENOX IT SOLUTIONS", place: "MANJERI" },
    { name: "APEXMAX IT SOLUTIONS", place: "KANNUR" },
    { name: "FINAAX IT SOLUTIONS", place: "TIRUR" },
    { name: "ASTRIC INFO TECH", place: "BALUSERY" },
    { name: "RUBIX IT SOLUTIONS", place: "KOPPAM" },
    // { name: "WINWAY", place: "TRISURE" },

  ];

  useEffect(() => {
    // Register Swiper web component
    register();

    // Configure Swiper after component mounts
    const swiperEl = document.querySelector("swiper-container");

    if (swiperEl) {
      const swiperParams = {
        slidesPerView: 1.5, // Default for mobile
        spaceBetween: 10,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: { slidesPerView: 1.5, spaceBetween: 10 },
          480: { slidesPerView: 2, spaceBetween: 15 },
          640: { slidesPerView: 2.5, spaceBetween: 15 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: 5, spaceBetween: 20 },
        },
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }
  }, []);
  const shadeEnhancements = [
    "Real-time electronic insurance billing",
    "Full-featured Accounts Integration",
    "Minimum Stock and Profit Alerts",
    "Advanced Pricing Formulas",
    "Avoid incorrect distribution of medication",
    "Prescription queue management",
    "Quick, easy, intuitive fill/refill functionality",
    "Controlled Drug Usage Analysis"
  ];

  return (
    <div className="w-full flex flex-col items-center relative overflow-hidden bg-[#fff]">
      {/* WhatsApp Button - Fixed position, visible on all screens */}
      <a href="https://wa.me/+917593820007">
        <div className="fixed bottom-16 right-4 md:bottom-24 md:right-8 z-[999] cursor-pointer text-3xl md:text-4xl p-1 bg-[#4DC85A] text-[#fff] rounded-full shadow-lg hover:scale-110 transition-transform">
          <RiWhatsappLine />
        </div>
      </a>

      {/* Chatbot - Fixed position with improved mobile positioning */}
      <div className="fixed bottom-4 right-4 md:bottom-10 md:right-10 z-[999]">
        <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
      </div>

      {/* Hero Section - Improved mobile padding and spacing */}
      <section className="py-10 md:py-20 relative w-full pt-20 md:pt-32 px-4 md:px-2">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left gap-4 md:gap-8">
          {/* Animated Image - Full width on mobile */}
          <div className="rounded-xl md:rounded-3xl overflow-hidden shadow-lg md:shadow-2xl border-4 md:border-8 border-white w-full lg:w-1/2">
            <motion.img
              src={HealthCareImg}
              alt="Healthcare"
              className="w-full h-auto object-cover rounded-lg md:rounded-2xl"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>
          {/* Animated Text Section - Improved spacing and font sizes */}
          <motion.div
            className="lg:w-1/2 mt-6 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-6xl text-center lg:text-start font-bold text-[#352317]">
              HEALTHCARE MANAGEMENT
            </h1>

            <p className="mt-4 text-sm md:text-base text-start md:text-justify text-[#000]">
              We empower healthcare institutions with our advanced Hospital
              Information Management System 'SHADE'—a comprehensive solution
              designed to optimize hospital workflows, enhance patient care, and
              improve operational efficiency.
              <span className="block md:text-justify mb-2 text-[#000]">
                Our HIMS software integrates patient management, billing,
                electronic medical records (EMR), appointment scheduling,
                pharmacy, lab management, and more—all in one seamless platform.
                Whether you run a single hospital, a multi-specialty clinic, or
                a healthcare network, our system ensures smooth and automated
                operations, reducing paperwork and enhancing productivity.
              </span>
            </p>

            {/* Logo Animation - Centered on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-start items-center w-full lg:w-[250px] bg-white mt-5"
            >
              <img
                src={shade}
                alt="shade"
                className="h-[60px] md:h-[80px] object-contain px-2"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid Animation - Improved grid layout for mobile */}
      <section className="bg-[#8bb6af6f] w-full py-8 md:py-12">
        <div className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-4 pb-5 font-bold">
          What Makes Our Shade Exceptional
        </div>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 md:mt-12 max-w-[1400px] mx-auto mb-5 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white flex flex-col items-center p-4 md:p-6 rounded-xl md:rounded-2xl shadow-md md:shadow-lg text-center hover:scale-105 transition border border-white mb-4 md:mb-10"
              variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="text-3xl md:text-4xl text-[#F99F2C]">
                {feature.icon}
              </div>
              <h3 className="mt-3 text-base md:text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="mt-2 text-xs md:text-sm text-[#000]">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

     
      {/* Business Applications - Improved grid for mobile */}
      <section className="bg-[#fff] w-full py-8 md:py-10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6 mb-8 md:mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-10 text-black"
          >
            Business Applications
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-6">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-3 md:p-4 backdrop-blur-sm rounded-xl hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-2xl md:text-4xl mb-2 md:mb-3 text-[#000] bg-white border border-black w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center">
                  {type.icon}
                </div>
                <p className="text-black text-center text-xs md:text-sm">
                  {type.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Section - Improved slider for mobile */}
      <section className="py-8 md:py-10 relative px-4 bg-white w-full max-w-[1400px]">
        <div className="text-center w-full mb-6 md:mb-10">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-black">
            Our Valued Clients
          </h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="container mx-auto relative"
        >
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            navigation={{
              nextEl: ".next-slide",
              prevEl: ".prev-slide",
            }}
            modules={[Autoplay, Navigation]}
            className="w-full"
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 12 },
              480: { slidesPerView: 2, spaceBetween: 14 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 24 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
              1400: { slidesPerView: 6, spaceBetween: 30 },
            }}
          >
            {clients.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className=" rounded-lg flex flex-col items-center justify-center h-[130px] sm:h-[150px] md:h-[160px] px-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] pt-2"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <motion.button
            // whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="prev-slide absolute left-2 top-1/2 -translate-y-1/2 hover:bg-black hover:text-white text-black p-2 rounded-full z-10"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            // whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="next-slide absolute right-2 top-1/2 -translate-y-1/2 hover:bg-black hover:text-white text-black p-2 rounded-full z-10"
          >
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* Product Showcase Section - Improved mobile layout */}
      {/* <section className="w-full py-10 md:py-20 text-white relative bg-[#083D4C]">
        <div className="max-w-[1400px] mx-auto px-4 md:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-10"
          >
            Healthcare Solutions Showcase
          </motion.h2>

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-8 w-8 md:h-12 md:w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <>
              
              {productVideos.length > 0 && (
                <div className="mb-10 md:mb-16">
                  <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
                    Product Videos
                  </h3>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={10}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                      320: { slidesPerView: 1, spaceBetween: 10 },
                      640: { slidesPerView: 1.5, spaceBetween: 15 },
                      768: { slidesPerView: 2, spaceBetween: 20 },
                      1024: { slidesPerView: 3, spaceBetween: 20 },
                    }}
                    className="pb-4 md:pb-6"
                  >
                    {productVideos.map((video) => (
                      <SwiperSlide key={video.id}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6 }}
                          className="bg-black/30 backdrop-blur-sm rounded-lg md:rounded-xl overflow-hidden shadow-lg w-full h-[200px] sm:h-[240px] md:h-[320px]"
                        >
                          <iframe
                            className="w-full h-full"
                            src={video.videoUrl}
                            title={video.name}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        </motion.div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              )}
            </>
          )}
        </div>
      </section> */}

      {/* Partners Section - Improved mobile layout */}
      <section className="py-12 bg-white md:max-w-[1210px] max-w-[360px] mx-auto w-full">
        <div className="w-full text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">
            Get SHADE Now
          </h2>
          <p className="text-gray-600 mb-6 md:mb-10 max-w-[600px] w-full mx-auto text-sm md:text-base">
            Everything you need is ready. Start your journey to smarter work and
            experience seamless productivity with SHADE — designed to make your
            workflow easier, faster, and more efficient.
          </p>

          <div className="px-4 py-12 ">
            {/* The chain connector line */}
            <div className="relative">
              <div className="absolute top-[70px] left-0 w-full h-1 bg-gradient-to-r from-[#083D4C] to-[#24B6A3]"></div>

              <Swiper
                modules={[Autoplay]}
                spaceBetween={10}
                slidesPerView="auto"
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                className="w-full"
              >
                {tenants.map((item, index) => (
                  <SwiperSlide key={index} className="!w-auto ">
                    <div className="px-2">
                      <div className="relative transform transition-transform  duration-300">
                        <div className="relative h-36 w-36">
                          {/* Outer gradient circle */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#083D4C] via-[#23829c] to-[#24B6A3] shadow-lg"></div>

                          {/* Inner white circle */}
                          <div className="absolute inset-[6px] rounded-full bg-white flex flex-col justify-center items-center text-center px-2 py-4 overflow-hidden">
                            <div className="font-bold text-sm text-gray-800 leading-tight">
                              {item.name}
                            </div>
                            <div className="text-xs text-gray-600 mt-2 leading-none">
                              {item.place}
                            </div>
                          </div>

                          {/* Chain connectors */}
                          <div className="absolute left-0 top-1/2 transform -translate-x-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#24B6A3] z-10"></div>
                          <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#083D4C] z-10"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>

        {/* Custom CSS for clip-path */}
        <style jsx>{`
          .clip-path-polygon {
            clip-path: polygon(
              50% 0%,
              100% 25%,
              100% 75%,
              50% 100%,
              0% 75%,
              0% 25%
            );
          }
        `}</style>
      </section>

 {/* SHADE Enhancement Section */}
 <section className="bg-gradient-to-b from-gray-50 to-gray-100 w-full py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 bg-blue-50 rounded-full text-blue-800 font-semibold mb-4"
          >
            Innovation at Work
          </motion.div> */}

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#083D4C] to-[#0a617a] inline-block text-transparent bg-clip-text"
            >
              SHADE Feature Enhancements
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              Discover the cutting-edge capabilities that make our SHADE system
              the smartest choice for modern homes and businesses.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 md:gap-6">
            {shadeEnhancements.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-3 bg-white rounded-xl shadow p-4 text-sm text-[#000] font-medium border border-gray-200 hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-10 h-10 min-w-[2rem] rounded-full bg-blue-50 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#083D4C]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <p className="text-gray-800 font-medium text-lg m-0 leading-snug">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff] py-6 md:py-10 text-[#000] w-full">
        <Footer />
      </section>
    </div>
  );
};

export default HealthCare;
