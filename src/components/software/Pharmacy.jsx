import React, { useEffect, useState } from "react";
import {
  FaBarcode,
  FaBoxes,
  FaCalendarAlt,
  FaChartLine,
  FaClinicMedical,
  FaClipboardCheck,
  FaHospital,
  FaHospitalAlt,
  FaIndustry,
  FaPills,
  FaShieldAlt,
  FaStore,
  FaWarehouse,
  FaTimes,
  FaCalculator,
  FaBoxOpen,
  FaLock,
  FaCapsules,
  FaChartBar,
  FaMobileAlt , 
  FaCommentDots ,
  FaArchive ,
  FaUsers,
  FaMousePointer
} from "react-icons/fa";
import pharmacy from "../../assets/pharmacyimg.jpeg";
import vtask from "../../assets/VTASK.png";
import Footer from "../Footer";
import pharmacy2 from "../../assets/PP.jpeg";
import pharmacy3 from "../../assets/pharmacyimg2.jpeg";
import darkGradient from "../../assets/darkGradient.jpg";
import { motion } from "framer-motion";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";
import { AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";
import { register } from "swiper/element/bundle";
import alfa from '../../assets/ALFA.jpeg'
import n4medicals from '../../assets/n4medicals.jpg'
import vinayaka from '../../assets/vinayaka.png'
import { ChevronLeft, ChevronRight } from "lucide-react";
import hyperfarma from '../../assets/hyperfarma.png'
import barcode from '../../assets/barcode.jpg'
import expiry from '../../assets/expiry.jpeg'
import sku from '../../assets/sku.jpeg'
import analytics from '../../assets/anlysis.jpeg'
import app from '../../assets/app.jpeg'
import sms from '../../assets/sms.jpeg'
import deadstock from '../../assets/deadstock.jpeg'
import privacy from '../../assets/privacy.jpeg'
import crm from '../../assets/crm.jpeg'
import meera from '../../assets/meera.jpg'
import cureandcare from '../../assets/CARE & CURE.jpg'
import aswini from '../../assets/ASWINI.jpg'
import topcare from '../../assets/top care.png'
const PharmacyManagementPage = () => {
  const businessTypes = [
    { icon: <FaPills />, text: "Retail Pharmacies" },
    { icon: <FaHospitalAlt />, text: "Hospital Pharmacies" },
    { icon: <FaClinicMedical />, text: "Clinical Pharmacies" },
    { icon: <FaStore />, text: "Drug Stores" },
    { icon: <FaIndustry />, text: "Pharmaceutical Distributors" },
    { icon: <FaWarehouse />, text: "Medical Supply Stores" },
    { icon: <FaCapsules />, text: "Hyper Pharma" },
  ];
  const [loading, setLoading] = useState(true);
  const [productVideos, setProductVideos] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProductVideosAndImages();
  }, []);

  // Define animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 50 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.3 } },
  };

  const fetchProductVideosAndImages = async () => {
    try {
      setLoading(true);

      // Fixed case sensitivity - "inventory" instead of "Inventory"
      const videoQuery = query(
        collection(dbFirestore, "products"),
        where("category", "==", "VTASK")
      );
      const videoSnapshot = await getDocs(videoQuery);
      const videoData = videoSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Video data:", videoData); // Debug log
      setProductVideos(videoData);

      // Fixed case sensitivity - "inventory" instead of "Inventory"
      const imageQuery = query(
        collection(dbFirestore, "productImages"),
        where("category", "==", "pharmacy")
      );
      const imageSnapshot = await getDocs(imageQuery);
      const imageData = imageSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Image data:", imageData); // Debug log
      setProductImages(imageData);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setLoading(false);
    }
  };

  const openFullScreen = (image) => {
    console.log("Opening full screen for:", image);
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };
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
        slidesPerView: 5,
        spaceBetween: 20,
        loop: true,
        autoplay: {
          delay: 1000,
          disableOnInteraction: false,
        },
        breakpoints: {
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        },
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
    }
  }, []);


   const clients = [
    {
      id: 1,
      name: "Alfa Agencies",
      logo: alfa,
      location: "Calicut",
    },
    
    {
      id: 2,
      name: "Vinayaka Hospital",
      logo: vinayaka,
      location: "Pandalur",
    },
     { id: 3, name: "MEERA", logo: meera, location: "Sulthan Bathery" },
     { id: 4, name: "CARE & CURE", logo: cureandcare, location: "Sulthan Bathery" },
     { id: 5, name: "ASWINI", logo: aswini, location: "Sulthan Bathery" },
     { id: 6, name: "TOP CARE ", logo: topcare, location: "Sulthan Bathery" },
      ];

  return (
    <div className="text-white relative min-h-screen overflow-hidden">
      {/* Fixed background that covers the entire page */}

      <a href="https://wa.me/+917593820007">
        <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
          <RiWhatsappLine />
        </div>
              
      </a>

      {/* chatbot */}
      {/* <div className="bottom-10 fixed right-10 z-[999] text-[#000]">
        {openChat ? (
          <div className="fixed bottom-10 z-[999] right-10">
            <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
          </div>
        ) : (
          <div className="fixed bottom-10 z-[999] right-10">
            <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
          </div>
        )}
      </div>*/}

      {/* Hero Section */}
      <div className="relative h-[600px]  bg-white overflow-hidden mt-24">
        {/* Decorative background elements */}

        {/* Flex container - keeping the same structure */}
        <div className="flex flex-col md:flex-row h-full w-full max-w-[1400px] mx-auto">
          {/* Left Content (Text) - keeping the same content */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center items-start gap-5 sm:gap-10 px-6 sm:px-10 md:px-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInVariant} className="relative mt-5">
              <div className="absolute -left-4 -top-4 w-16 h-16 bg-[#f160267f] rounded-full opacity-50"></div>
              <div className="relative">
                <div className="text-[#F15E26] text-lg sm:text-2xl  mb-2 sm:mb-3">
                  Experience the Best
                </div>
                <div className="text-gray-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl ">
                  Pharmacy Management <span className="block">Software</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white shadow-lg text-gray-800 p-6 sm:p-8 rounded-xl sm:rounded-3xl backdrop-blur-sm border border-[#F15E26]"
              variants={fadeInVariant}
            >
              <div className="flex items-end gap-3 sm:gap-5 mb-3 sm:mb-5">
                <motion.div
                  className="h-auto w-[150px] sm:w-[200px] md:w-[300px] bg-gray-50 p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-sm"
                  variants={fadeInVariant}
                >
                  <img
                    src={vtask}
                    alt="VTASK Logo"
                    className="h-full w-full object-contain"
                  />
                </motion.div>
              </div>
              <motion.div
                className="max-w-[900px] text-sm sm:text-base text-gray-600"
                variants={fadeInVariant}
              >
                We specialize in developing cutting-edge pharmacy software
                designed to simplify operations, enhance accuracy, and improve
                customer service for pharmacies of all sizes...
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content (Image) - keeping the same structure */}
          <div className="w-full md:w-1/2 h-[600px] flex items-center justify-center">
            <div className="relative w-[600px] h-full">
              {/* Decorative elements */}
              <div className="absolute -right-6 top-16 w-32 h-32 bg-[#3DC6EB] rounded-full opacity-60 z-0"></div>
              <div className="absolute -left-4 bottom-24 w-24 h-24 bg-teal-50 rounded-full opacity-70 z-0"></div>

              <motion.div
                className="w-full h-full p-3 relative z-10"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img
                    src={pharmacy}
                    alt="Modern pharmacy interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="relative py-10 sm:py-16 bg-[#fff] ">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1400px] ">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl  mb-8 sm:mb-12 text-center text-black"
          >
            What Makes Our VTask Exceptional
          </motion.h2>

          {/* Features Grid */}
          <div className="container mx-auto px-4 py-12">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              {/* Features Section */}
              <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {[
                    {
                      icon: <FaClipboardCheck className="text-white text-xl" />,
                      title: "Innovative & Reliable",
                      description:
                        "Advanced features for seamless pharmacy management.",
                    },
                    {
                      icon: <FaMousePointer className="text-white text-xl" />,
                      title: "Easy-to-Use Interface",
                      description: "No technical expertise required.",
                    },
                    {
                      icon: <FaShieldAlt className="text-white text-xl" />,
                      title: "Compliant & Secure",
                      description:
                        "GST, drug regulations, and data security ensured.",
                    },

                    {
                      icon: <FaStore className="text-white text-xl" />,
                      title: "Retail & Wholesale",
                      description:
                        "Compatible for Retail and Wholesale Business operations.",
                    },
                    {
                      icon: <FaChartLine className="text-white text-xl" />,
                      title: "Insightful Business Reports",
                      description:
                        "Generate detailed sales, purchase, and profit reports to drive smarter decisions.",
                    },

                    {
                      icon: <FaHospital className="text-white text-xl" />,
                      title: "Hospital & Clinical Compatible",
                      description:
                        "Integrated module with our own Hospital Software 'SHADE'.",
                    },

                    {
                      icon: <FaCalculator className="text-white text-xl" />,
                      title: "Reliable Accounting",
                      description:
                        "Accurate and dependable accounting solutions to manage your pharmacy’s finances with confidence.",
                    },
                    {
                      icon: <FaBoxOpen className="text-white text-xl" />,
                      title: "Advanced Inventory Management",
                      description:
                        "Sophisticated stock control with forecasting and optimization tools.",
                    },
                    {
                      icon: <FaLock className="text-white text-xl" />,
                      title: "Data Backup & Security",
                      description:
                        "Automated cloud backups and enterprise-grade security protocols.",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="p-4 rounded-xl border border-[#EFE42D] hover:border-[#F99F2C] hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex items-center mb-3">
                        <div className="bg-[#F89C35] p-2 rounded-lg mr-3 flex items-center justify-center">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-[#F89C35] ">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-black text-sm">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Image Section */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="w-full lg:w-1/3 h-[455px] rounded-xl overflow-hidden shadow-xl"
              >
                <img
                  src={pharmacy2}
                  alt="Pharmacy Management System"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
{/* features 2 */}
      <section class="bg-gray-50 py-24">
        <div class="container mx-auto px-6 max-w-7xl">
          <div class="flex flex-col md:flex-row items-start md:items-center justify-between mb-16">
            <div class="relative md:w-1/2">
              <div class="w-12 h-12 rounded-full bg-purple-600 absolute -left-6 -top-6 opacity-20"></div>
              <h2 class="text-4xl  text-gray-800 leading-tight">
                VTASK <span class="text-purple-600">Key Features</span>
              </h2>
              <div class="h-1 w-24 bg-purple-600 mt-4"></div>
            </div>
            <p class="text-gray-600 md:w-1/2 mt-4 md:mt-0 text-lg">
              Next-generation pharmacy management tools designed to streamline
              operations and enhance customer service
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div class="relative h-52 overflow-hidden">
                <img
                  src={barcode}
                  alt="Barcode scanning system in pharmacy"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-purple-900 to-transparent opacity-70"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 class="text-xl font-bold tracking-tight flex items-center">
                    <svg
                      class="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 7h10v10m0-10L7 17"
                      ></path>
                    </svg>
                    Barcode & Batch Management
                  </h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-700">
                  Streamline inventory tracking with integrated barcode scanning
                  for quick checkout and precise batch control, perfect for
                  high-volume pharmacies.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div class="relative h-52 overflow-hidden">
                <img
                  src={expiry}
                  alt="Calendar showing expiry dates"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-70"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 class="text-xl font-bold tracking-tight flex items-center">
                    <svg
                      class="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Expiry Handling
                  </h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-700">
                  Receive timely alerts for approaching expiry dates and manage
                  them with a single click to ensure only fresh medications
                  reach customers.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div class="relative h-52 overflow-hidden">
                <img
                  src={sku}
                  alt="Organized pharmacy inventory"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-pink-900 to-transparent opacity-70"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 class="text-xl font-bold tracking-tight flex items-center">
                    <svg
                      class="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      ></path>
                    </svg>
                    Effortless SKU Management
                  </h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-700">
                  Organize products with intelligent categorization and powerful
                  search tools to efficiently manage thousands of items with
                  minimal effort.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div class="relative h-52 overflow-hidden">
                <img
                  src={analytics}
                  alt="Business analytics dashboard"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-amber-900 to-transparent opacity-70"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 class="text-xl font-bold tracking-tight flex items-center">
                    <svg
                      class="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                      ></path>
                    </svg>
                    Advanced Analytical reports
                  </h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-700">
                  Transform data into actionable insights with customizable
                  dashboards for smarter decision-making and business growth.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div class="relative h-52 overflow-hidden">
                <img
                  src={app}
                  alt="Mobile reporting app"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-70"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 class="text-xl font-bold tracking-tight flex items-center">
                    <svg
                      class="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      ></path>
                    </svg>
                    Realtime Reporting App
                  </h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-700">
                  Access real-time performance metrics from anywhere with our
                  dedicated mobile app for instant business insights on the go.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div class="relative h-52 overflow-hidden">
                <img
                  src={sms}
                  alt="SMS and WhatsApp messaging"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-violet-900 to-transparent opacity-70"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 class="text-xl font-bold tracking-tight flex items-center">
                    <svg
                      class="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      ></path>
                    </svg>
                    SMS / whatsapp Integration
                  </h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-700">
                  Connect with customers via SMS and WhatsApp for automated
                  refill reminders, prescription notifications, and targeted
                  campaigns.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div class="relative h-52 overflow-hidden">
                <img
                  src={deadstock}
                  alt="Deadstock inventory management"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-red-900 to-transparent opacity-70"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 class="text-xl font-bold tracking-tight flex items-center">
                    <svg
                      class="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      ></path>
                    </svg>
                    Deadstock Handling
                  </h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-700">
                  Identify slow-moving inventory with intelligent algorithms and
                  implement strategic actions to reduce losses and optimize
                  capital.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div class="relative h-52 overflow-hidden">
                <img
                  src={privacy}
                  alt="Financial security interface"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-cyan-900 to-transparent opacity-70"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 class="text-xl font-bold tracking-tight flex items-center">
                    <svg
                      class="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                    Financial Privacy Management
                  </h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-700">
                  Protect sensitive financial data with advanced role-based
                  access controls while maintaining full regulatory compliance.
                </p>
              </div>
            </div>

            <div class="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group">
              <div class="relative h-52 overflow-hidden">
                <img
                  src={crm}
                  alt="Customer relationship management"
                  class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-70"></div>
                <div class="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 class="text-xl font-bold tracking-tight flex items-center">
                    <svg
                      class="w-6 h-6 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                    CRM & Loyalty
                  </h3>
                </div>
              </div>
              <div class="p-6">
                <p class="text-gray-700">
                  Build customer relationships and increase lifetime value with
                  integrated loyalty programs and personalized engagement tools.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Applications Section - Same dark background as Product Showcase */}
      <div className="pt-[50px] flex flex-col justify-center items-center w-full px-2 bg-[#fff]">
        <div className="max-w-[1400px] mx-auto px-6 pt-10 py-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[30px] sm:text-[40px] md:text-[50px]  text-center mb-10 text-black"
          >
            Business Applications
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3 text-[#000] bg-white border border-[#000] w-20 h-20 rounded-full flex items-center justify-center">
                  {type.icon}
                </div>
                <p className="text-black text-center text-sm">{type.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      
     {/* client part  6*/}
<section className="py-16 bg-white relative"> {/* Add relative here */}
  <div className="container mx-auto px-4">
    {/* Heading */}
    <div className="text-center mb-12">
      <h2 className="text-4xl  text-black">
        Our Valued Clients
      </h2>
    </div>

    {/* Client logos container */}
    <div className="max-w-7xl mx-auto relative"> {/* Add relative here */}
      {/* Slider for small and medium screens */}
      <div className="block">
        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView={1 }
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".next-slide",
            prevEl: ".prev-slide",
          }}
          breakpoints={{
            480: { slidesPerView: 2.2 },
            640: { slidesPerView: 3 },
            1000: { slidesPerView: 4 },
            1400: { slidesPerView: 6 },
          }}
        >
          {clients.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="rounded-lg p-4 flex items-center justify-center w-64 h-48 mx-auto">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons - Add z-50 to ensure they're on top */}
        <motion.button
          transition={{ duration: 0.3 }}
          className="prev-slide absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full z-50"
        >
          <ChevronLeft size={20} />
        </motion.button>
        <motion.button
          transition={{ duration: 0.3 }}
          className="next-slide absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full z-50"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>
    </div>
  </div>
</section>

      {/* products showcase */}
      {/* <section className="w-full py-10 sm:py-20 text-white relative bg-[#F15E26]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1 }}
            className="text-2xl sm:text-[30px] leading-normal md:text-[40px] lg:text-[50px] font-bold text-center mb-6 sm:mb-10 "
          >
            Pharmacy Product Showcase
          </motion.h2>

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <>
             
              {productVideos.length > 0 && (
                <div className="mb-8 sm:mb-16">
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 ">
                    Product Videos
                  </h3>
                  <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    breakpoints={{
                      640: { slidesPerView: 1 },
                      768: { slidesPerView: 2 },
                      1024: { slidesPerView: 3 },
                    }}
                    className="pb-4"
                  >
                    {productVideos.map((video) => (
                      <SwiperSlide key={video.id}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6 }}
                          className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg w-full h-[300px] sm:h-[300px] md:h-[320px]"
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

      {/* office partners 8 */}
      <section className="py-12 bg-white md:max-w-[1210px] max-w-[360px] mx-auto w-full">
        <div className="w-full text-center">
          <h2 className="text-3xl  text-gray-800 mb-6">
            Get VTASK Now
          </h2>
          <p className="text-gray-600 mb-10 max-w-[600px] w-full mx-auto">
            Everything you need is ready. Start your journey to smarter work and
            experience seamless productivity with VTASK — designed to make your
            workflow easier, faster, and more efficient.
          </p>

          <div className="px-4 py-12 ">
            {/* The chain connector line */}
            <div className="relative">
              <div className="absolute top-[70px] left-0 w-full h-1 bg-gradient-to-r from-[#F26934] to-pink-500"></div>

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
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#F26934] via-[#F26934] to-pink-500 shadow-lg"></div>

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
                          <div className="absolute left-0 top-1/2 transform -translate-x-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#F26934] z-10"></div>
                          <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-pink-500 z-10"></div>
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
      {/* Footer */}
      <section className="py-10 text-[#000] bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
};

export default PharmacyManagementPage;
