import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import restaurant from "../../assets/restaurantmanagement.jpg";
import {
  FaBoxes,
  FaCalculator,
  FaChartBar,
  FaCoffee,
  FaConciergeBell,
  FaDatabase,
  FaGlassMartini,
  FaMobileAlt,
  FaPizzaSlice,
  FaPrint,
  FaQrcode,
  FaStream,
  FaTable,
  FaTruck,
  FaUtensils,
  FaWhatsapp,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "../Footer";
import darkGradient from "../../assets/darkGradient.jpg";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";
import { AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";
import DineLogo from "../../assets/DINE_1_copy.png";
import { register } from "swiper/element/bundle";
import momsbake from "../../assets/momsbake.jpg";
import arabia from "../../assets/arabia.jpg";
import newform from "../../assets/newform.jpg";
import union from "../../assets/union.jpg";
import yemkem from "../../assets/yemkem.png";
import aastha from "../../assets/AASTHA.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ddd from '../../assets/DDD.jpg'
import print from '../../assets/printer.jpg'
import cmenu from '../../assets/cmenu.jpg'
import {
  FaMoneyBillWave,
  FaChartLine,
  FaCloudDownloadAlt,
  FaShieldAlt,
  FaUser,
  FaCogs,
  FaWindowRestore,
} from "react-icons/fa";
import { RiUserStarFill } from "react-icons/ri";
import { IoFastFoodOutline } from "react-icons/io5";
import dineq from "../../assets/dineqr.jpg";
import {
  CreditCard,
  UtensilsCrossed,
  MessageCircle,
  MonitorPlay,
  MonitorSmartphone,
} from "lucide-react";

export const businessTypes = [
  { icon: <FaUtensils />, text: "Restaurants" },
  { icon: <FaCoffee />, text: "Cafes" },
  { icon: <FaPizzaSlice />, text: "Fast Food Chains" },
  { icon: <FaGlassMartini />, text: "Bars & Pubs" },
  { icon: <FaTruck />, text: "Food Trucks" },
  { icon: <FaConciergeBell />, text: "Catering Services" },
];
import mandhi from '../../assets/mandhihouse.jpg'
const Restaurant = () => {
  const features = [
    {
      icon: <FaCalculator />,
      title: "Fast & Efficient Billing",
      description:
        "Quick and accurate billing system to enhance customer satisfaction",
    },
    {
      icon: <FaTable />,
      title: "Table & Order Management",
      description: "Seamless table allocation and order tracking system",
    },
    {
      icon: <FaBoxes />,
      title: "Store Keeping and Inventory",
      description: "Efficient inventory management and stock control",
    },
    {
      icon: <FaChartBar />,
      title: "Accounts and Detailed Reports",
      description: "Comprehensive financial tracking and business analytics",
    },
    {
      icon: <FaQrcode />,
      title: "Contactless dine-in with QR Menu",
      description: "Modern contactless dining experience with digital menus",
    },
    {
      icon: <FaDatabase />,
      title: "Data Backup and Security",
      description: "Secure data storage with automated backup systems",
    },
    {
      icon: <FaMobileAlt />,
      title: "Order Taking App",
      description: "Mobile application for streamlined order management",
    },
    {
      icon: <FaStream />,
      title: "Live Stream Mobile Applications",
      description: "Real-time order tracking and management",
    },
    {
      icon: <FaWhatsapp />,
      title: "Whatsapp and SMS Integrations",
      description:
        "Integrated communication channels for better customer service",
    },
    {
      icon: <FaPrint />,
      title: "Multi Type Print Handling",
      description: "Versatile printing options for various business needs",
    },
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

  const fetchProductVideosAndImages = async () => {
    try {
      setLoading(true);

      const videoQuery = query(
        collection(dbFirestore, "products"),
        where("category", "==", "DINE")
      );
      const videoSnapshot = await getDocs(videoQuery);
      const videoData = videoSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductVideos(videoData);

      const imageQuery = query(
        collection(dbFirestore, "productImages"),
        where("category", "==", "DINE")
      );
      const imageSnapshot = await getDocs(imageQuery);
      const imageData = imageSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProductImages(imageData);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setLoading(false);
    }
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  const openFullScreen = (image) => {
    setSelectedImage(image);
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
      name: "NewForm Bakes",
      logo: newform,
      location: "Kalpetta - Wayanad",
    },
    {
      id: 2,
      name: "Mom's Bakes",
      logo: momsbake,
      location: "Cheruppalassery - Palakkad",
    },
    {
      id: 3,
      name: "MAMMA ARABIA",
      logo: arabia,
      location: "Koppam - Palakkad",
    },
    {
      id: 4,
      name: "Union ",
      logo: union,
      location: "Nilambur - Malappuram",
    },
    {
      id: 5,
      name: "Ke Yem Holidays Restaurant ",
      logo: yemkem,
      location: "Wayanad",
    },
    {
      id: 6,
      name: "Aastha Hotel ",
      logo: aastha,
      location: "Pullpally - Wayanad",
    },
    {
      id: 7,
      name: "Mandhi House ",
      logo: mandhi,
      location: "Pullpally - Wayanad",
    },
  ];

  const keyfeatures = [
    {
      title: "Android mobile billing and KOT",
      description:
        "Enable your staff to take orders and process payments on the go using Android smartphones or tablets, making service fast and mobile.",
      image: dineq,
      alt: "Android mobile billing application",
    },
    {
      title: "Multiple sales window",
      description:
        "Operate from multiple billing terminals simultaneously and sync them with a central system to ensure efficiency in high-volume environments.",
      image: dineq,
      alt: "Multiple sales window interface",
    },
    {
      title: "Customizable Printing solutions",
      description:
        "Easily customize your restaurant’s billing with logo printing, editable bill formats, customer details, and integrated QR codes for seamless payments.",
      image: print,
      alt: "Customizable bill format example",
    },

    {
      title: "C-Menu",
      description:
        "Enhance customer experience with digital menu cards. Allow customers to view detailed menu items with images, descriptions, and pricing. Integrate with QR code scanning for contactless ordering right from their tables.",
      image: cmenu,
      alt: "Digital C-Menu example",
    },
    {
      title: "Digital Display System",
      description:
        "Showcase your menu in a dynamic and attractive way with our Digital Display System. Display menu items with vivid images, names, and prices on digital screens, making it easy for customers to browse and decide. Perfect for restaurants aiming for a modern, organized, and engaging customer experience.",
      image: ddd,
      alt: "Digital Display system",
    },
  ];

  const compatibilityFeatures = [
    {
      icon: <CreditCard className="w-10 h-10 text-red-500" />,
      label: "Payment Integration",
    },
    //  { icon: <UtensilsCrossed className="w-10 h-10 text-red-500" />, label: "KOT App" },
    {
      icon: <MessageCircle className="w-10 h-10 text-red-500" />,
      label: "SMS / WhatsApp Alerts",
    },
    {
      icon: <MonitorPlay className="w-10 h-10 text-red-500" />,
      label: "Live Streaming App",
    },
    {
      icon: <MonitorSmartphone className="w-10 h-10 text-red-500" />,
      label: "On Any Windows Device",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const handleImageClick = (image) => {
    setCurrentImage(image);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };
  return (
    <div className="relative">
      {/* WhatsApp Button */}
      <a href="https://wa.me/+917593820007">
        <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
          <RiWhatsappLine />
        </div>
      </a>

      {/* Chatbot */}
      <div className="bottom-10 fixed right-10 z-[999]">
        {openChat ? (
          <div className="fixed bottom-10 z-[999] right-10">
            <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
          </div>
        ) : (
          <div className="fixed bottom-10 z-[999] right-10">
            <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
          </div>
        )}
      </div>

      {/* Hero Section */}
      <div className="pt-[100px] flex flex-col justify-center items-center w-full px-2 bg-white">
        <section
          id="restaurant"
          className="max-w-[1400px] mx-auto bg-gradient-to-r h-[600px] from-[#25080A] via-[#4d1c1f] to-[#bf4048] p-[2px] backdrop-blur-3xl w-full rounded-3xl  overflow-hidden mb-20"
        >
          <motion.div
            className="flex flex-col md:flex-row md:justify-center md:items-center overflow-hidden md:gap-2 rounded-3xl w-full h-full bg-white"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Text Section */}
            <motion.div
              className="w-full md:w-[60%] h-full flex justify-center items-center p-5 md:p-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div>
                <motion.div
                  className="text-[20px] leading-normal lg:text-[30px] mb-3 font-bold md:mb-5 text-[#25080A]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                  viewport={{ once: true }}
                >
                  Simplify Your{" "}
                  <span className="md:text-[50px] leading-tight lg:text-[60px] block text-4xl text-[#000]">
                    Restaurant Billing and Management
                  </span>
                </motion.div>

                <motion.div
                  className="lg:pr-36 mb-5 md:mb-5 text-[14px] md:text-[16px] text-[#25080A]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Our Restaurant Billing Software is designed to streamline your
                  restaurant operations, ensuring fast and hassle-free billing,
                  efficient order management, and seamless payment processing.
                  Whether you run a small café, a fine-dining restaurant, or a
                  multi-chain food business, our software adapts to your needs
                  with advanced features and an intuitive interface.
                </motion.div>

                <motion.div
                  className="w-[300px] h-[100px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <div className="  p-2 rounded-3xl shadow-2xl border-8 border-white">
                    <img src={DineLogo} alt="dinelogo" />
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Image Section */}
            <motion.div
              className="w-full md:w-[50%] h-[300px] md:h-full overflow-hidden md:rounded-l-full"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src={restaurant}
                className="w-full h-full object-cover"
                alt="Restaurant"
              />
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* Features Section */}
      <div className="pt-[50px] flex flex-col justify-center items-center w-full px-2 bg-[#f5e4e4]">
        <motion.div
          className="max-w-[1400px] leading-normal mx-auto px-4 pb-20"
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center leading-normal mb-10 text-[#25080A]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            What Makes Our DINE Exceptional
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-5 gap-6"
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl bg-white shadow-lg border border-[#EF5033] transition-all duration-300 group hover:shadow-xl"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <motion.div
                  className="text-3xl mb-4 text-[#EF5033] group-hover:scale-110 transition-transform duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mb-2 text-[#25080A]">
                  {feature.title}
                </h3>
                <p className="text-[#25080A] text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* key features */}
      <section className="py-16 bg-white max-w-[1400px] mx-auto">
        <div className="w-full flex flex-col items-center px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What DINE Offers
          </h2>

          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            {keyfeatures.slice(0, 5).map((feature, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg p-3 "
              >
                {/* Image */}
                <div className="w-full  ">
                  <img
                    src={feature.image}
                    alt={feature.alt}
                    className="h-52 w-full object-contain rounded-lg cursor-pointer"
                    onClick={() => handleImageClick(feature.image)}
                  />
                  {isOpen && (
                    <div className="fixed inset-0 bg-[#ffffff26]  flex items-center justify-center z-50 ">
                      <div className="relative shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
                        <img
                          src={currentImage}
                          alt="Full View"
                          className="max-h-[70vh] max-w-[70vw] rounded-lg"
                        />
                        <button
                          onClick={handleClose}
                          className="absolute top-2 right-2 bg-white text-black rounded-full p-2 shadow-lg"
                        >
                          ✕
                        </button>
                      </div>
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 mt-2 p-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed p-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* compactability */}
      <div className="bg-[#fef2f2] py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Compatibility
        </h2>
        <p className="text-center text-gray-600 max-w-xl mx-auto mb-12">
          DINE POS is fully equipped to run across devices and integrate with
          essential tools for your business.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {compatibilityFeatures.map((item, index) => (
            <div
              key={index}
              className="bg-white hover:shadow-lg transition-shadow duration-300 rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">
                {item.label}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Business Applications Section - Same dark background as Product Showcase */}
      <div className="pt-[50px] flex flex-col justify-center items-center w-full px-2 bg-[#fff]">
        <div className="max-w-[1400px] mx-auto px-6 pt-10 py-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 text-black"
          >
            Business Applications
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4 rounded-xl transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="text-4xl mb-3 text-[#25080A] border border-[#000] bg-white w-20 h-20 rounded-full flex items-center justify-center">
                  {type.icon}
                </div>
                <p className="text-black text-center text-sm">{type.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* clients */}
      <section className="pt-5 pb-10 relative px-4 sm:px-10 md:px-20 bg-white w-full">
        <div className="text-center w-full mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black">
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
                  className="  rounded-lg  flex flex-col items-center justify-center h-[130px] sm:h-[150px] md:h-[160px] px-4"
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
            className="prev-slide absolute left-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
          >
            <ChevronLeft size={20} />
          </motion.button>
          <motion.button
            // whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="next-slide absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full z-10"
          >
            <ChevronRight size={20} />
          </motion.button>
        </motion.div>
      </section>

      {/* Product Showcase Section - Darker Background */}
      <div className="pt-[50px] flex flex-col justify-center items-center w-full px-2 bg-[#1A0D0E]">
        <section className="w-full py-10 text-white relative">
          <div className="max-w-[1400px] mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10"
            >
              Restaurant Product Showcase
            </motion.h2>

            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            ) : (
              <>
                {/* Product Videos Slider */}
                {productVideos.length > 0 && (
                  <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-6 text-[#fff]">
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
                            className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg w-full h-[320px]"
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
        </section>
      </div>

      {/* office partners 8 */}
      <section className="py-12 bg-white md:max-w-[1210px] max-w-[360px] mx-auto w-full">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get DINE Now
          </h2>
          <p className="text-gray-600 mb-10 max-w-[600px] w-full mx-auto">
            Everything you need is ready. Start your journey to smarter work and
            experience seamless productivity with DINE — designed to make your
            workflow easier, faster, and more efficient.
          </p>

          <div className="px-4 py-12 ">
            {/* The chain connector line */}
            <div className="relative">
              <div className="absolute top-[70px] left-0 w-full h-1 bg-gradient-to-r from-[#25080A] to-[#F14D33]"></div>

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
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#25080A] via-[#582814] to-[#F14D33] shadow-lg"></div>

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
                          <div className="absolute left-0 top-1/2 transform -translate-x-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#F14D33] z-10"></div>
                          <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#582814] z-10"></div>
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

      {/* Footer Section */}
      <section className="py-10 bg-white w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Restaurant;
