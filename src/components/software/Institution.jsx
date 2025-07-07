import React, { useEffect, useState } from "react";
import communication from "../../assets/communication.png";
import user1 from "../../assets/userfriendly.png";
import time from "../../assets/time.png";
import institution from "../../assets/institutionmanagement1.jpeg";
import institution1 from "../../assets/institutionmanagement.jpg";
import institution2 from "../../assets/institutionmanagement2.jpg";
import darkGradient from "../../assets/darkGradient.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";
import magnet from "../../assets/MAGNET.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination,Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaUsers,
  FaMoneyBillWave,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaBook,
  FaTasks,
  FaUserGraduate,
  FaChartLine,
  FaBookReader,
  FaStore,
  FaBed,
  FaUserTie,
  FaBus,
  FaCalculator,
} from "react-icons/fa";
import Footer from ".././Footer";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";
import { register } from "swiper/element/bundle";





import divine from '../../assets/divine.png'

import bhavans from '../../assets/bhavansorg.png'
import ideal from '../../assets/ideal.png'
import greenhills from '../../assets/GREENHILLS.png'
import nair from '../../assets/nairservicesociety.png'
import mcf from '../../assets/mcf.png'
import convent from '../../assets/convent.jpg'


const Institution = () => {
  const [openChat, setOpenChat] = useState(false);

  const [productVideos, setProductVideos] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const businessTypes = [
    { icon: <FaUserGraduate />, text: "Schools & Universities" },
    { icon: <FaChalkboardTeacher />, text: "Training Institutes" },
    { icon: <FaBookReader />, text: "Coaching Centers" },
    { icon: <FaBook />, text: "Language Schools" },
    { icon: <FaUserTie />, text: "Professional Training" },
    { icon: <FaUsers />, text: "Educational" },
  ];
  const cardVariants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.5, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, delay: 0.5, ease: "easeOut" },
    },
  };
  const clients = [
    {
      id: 1,
      name: "IDEAL ENGLISH SCHOOL",
      logo: ideal,
      location: "Sulthan Bathery - Wayanad",
    },
    {
      id: 2,
      name: "Nair Service Society",
      logo: nair,
      location: "Kalpetta - Wayanad",
    },
    {
      id: 3,
      name: "MCF Public School",
      logo: mcf,
      location: "Kalpetta - Wayanad",
    },
    {
      id: 4,
      name: "Convent School",
      logo: convent,
      location: "Kalpetta - Wayanad",
    },
    {
      id: 5,
      name: "Bhavan's Vidya Mandir",
      logo: bhavans,
      location: "Sulthan Bathery - Wayanad",
    },
    {
      id: 6,
      name: "Divine Grace Institutions",
      logo: divine
      ,
      location: "Banglore ",
    },
    {
      id: 7,
      name: "The Greenhills Public School",
      logo: greenhills,
      location: "Sulthan Bathery - Wayanad ",
    },
    
  ];

  const features = [
    {
      title: "Comprehensive & User-Friendly",
      text: "A single platform for managing all academic and administrative tasks efficiently.",
      icon: <FaTasks />,
      bg: "bg-[#242A2F]",
      textColor: "text-white",
    },
    {
      title: "Student & Faculty Management",
      text: "Streamline admissions, attendance, and performance tracking for institutions.",
      icon: <FaUsers />,
      bg: "bg-[#242A2F]",
      textColor: "text-white",
    },
    {
      title: "Automated Fee & Finance Management",
      text: "Easy invoicing, online payments, and financial reports for better financial management.",
      icon: <FaMoneyBillWave />,
      bg: "bg-[#242A2F]",
      textColor: "text-white",
    },
    {
      title: "Parent & Student Portal",
      text: "Seamless communication through web and mobile apps, keeping everyone connected.",
      icon: <FaChalkboardTeacher />,
      bg: "bg-[#242A2F]",
      textColor: "text-white",
    },
    {
      title: "Timetable & Exam Scheduling",
      text: "Hassle-free academic planning with automated scheduling features.",
      icon: <FaCalendarAlt />,
      bg: "bg-[#242A2F]",
      textColor: "text-white",
    },
    {
      title: "Library & Inventory Management",
      text: "Organize resources efficiently and manage inventories with ease.",
      icon: <FaBook />,
      bg: "bg-[#242A2F]",
      textColor: "text-white",
    },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProductVideosAndImages();
  }, []);

  const fetchProductVideosAndImages = async () => {
    try {
      setLoading(true);

      // Query for videos from the "institution" category
      const videoQuery = query(
        collection(dbFirestore, "products"),
        where("category", "==", "MAGNET")
      );
      const videoSnapshot = await getDocs(videoQuery);
      const videoData = videoSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Video data:", videoData); // Debug log
      setProductVideos(videoData);

      // Query for images from the "institution" category
      const imageQuery = query(
        collection(dbFirestore, "productImages"),
        where("category", "==", "institution")
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
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  const features1 = [
    { icon: <FaUserGraduate />, text: "Students Information" },
    { icon: <FaMoneyBillWave />, text: "Fees" },
    { icon: <FaChartLine />, text: "Marks & Progress" },
    { icon: <FaBookReader />, text: "Library" },
    { icon: <FaStore />, text: "Store Management" },
    { icon: <FaBed />, text: "Hostel" },
    { icon: <FaUserTie />, text: "Staff Details" },
    { icon: <FaBus />, text: "School Bus" },
    { icon: <FaCalculator />, text: "Accounting" },
  ];

  const fadeInVariant = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeInOut" },
    },
  };

  // Animation Variants
  const fadeInVariant2 = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 40 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
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

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full relative">
        {/* <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 h-full w-full">
          <img
            src={darkGradient}
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}
        <a href="https://wa.me/+917593820007">
          <div className=" md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
            <RiWhatsappLine />
          </div>
                
        </a>
        {/* chatbot */}
        {/* <div className="bottom-10 fixed right-10 z-[999]">
          {openChat ? (
            <div className="fixed bottom-10 z-[999] right-10">
              <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
            </div>
          ) : (
            <div className="fixed bottom-10 z-[999] right-10">
              <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
            </div>
          )}
        </div> */}
        {/* 1  main */}
        <section
          id="institutionmanagement"
          className="w-full relative pb-10 pt-15 bg-[#FFF]"
        >
          <div className="w-full max-w-[1400px] mx-auto px-4 py-10 rounded-3xl">
            <motion.div
              className="container mx-auto py-16 px-4 w-full flex flex-col items-center text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariant}
            >
              {/* Heading and Image Section */}
              <motion.div
                className="flex flex-col md:flex-row items-center gap-8 w-full"
                variants={fadeInVariant2}
              >
                {/* Left-side Image */}
                <motion.div
                  className="w-full md:w-1/2 shadow-2xl border-8 border-white"
                  variants={fadeInVariant2}
                >
                  <img
                    src={institution} // Replace with the correct image source
                    alt="Institution Management"
                    className="rounded-lg shadow-md w-full object-cover"
                  />
                </motion.div>

                {/* Right-side Content */}
                <motion.div
                  className="w-full md:w-1/2 text-left"
                  variants={fadeInVariant2}
                >
                  <h2 className="text-[32px] md:text-[40px] text-[#352317]  mb-4">
                   Smart Solutions for Efficient Institution Management
                  </h2>
                  <p className="text-[#000] ">
                    We are dedicated to revolutionizing educational and
                    institutional management with our powerful Institution
                    Management Software 'MAGNET'. Designed for schools,
                    colleges, and training centers, our software automates
                    administrative tasks, improves communication, and enhances
                    efficiency.
                  </p>
                  <div className="flex justify-start items-start w-[120px] rounded-2xl  bg-white mt-2">
                    <img
                      src={magnet}
                      alt="MAGNET"
                      className="h-[120px] object-contain px-4 py-3"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Feature Icons Section */}
            <motion.div
              className="  max-w-[1400px] mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariant}
            >
              <motion.div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-8">
                {features1.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col py-4 items-center group border border-[#352317] rounded-full"
                    variants={fadeInVariant}
                  >
                    <div className=" flex items-center justify-center text-[#1BAB6F]  mb-2 group-hover:scale-110 transition-transform p-1 md:text-[40px] text-[30px]">
                      {feature.icon}
                    </div>
                    <p className="text-[#000] text-center md:text-xl text-md p-2 md:p-0">
                      {feature.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* <motion.div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                {features1.slice(5).map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center group border border-white rounded-full py-4"
                    variants={fadeInVariant}
                  >
                    <div className="text-[30px] rounded-full flex items-center justify-center shadow-lg mb-2 group-hover:scale-110 transition-transform text-[#F99F2C] text-[#]">
                      {feature.icon}
                    </div>
                    <p className="text-white text-center text-sm">
                      {feature.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div> */}
            </motion.div>
          </div>
        </section>

        {/* 2 key feature */}
        <section className="bg-[#d5f2e6] w-full py-12 ">
          {/* Feature Cards Section */}
          <div className="max-w-[1400px] mx-auto px-4">
            <h2 className="text-5xl  text-center text-gray-800 mb-10">
              Capabilities That Drive Results
            </h2>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={containerVariant}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`border border-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow ${feature.bg}`}
                  variants={fadeInVariant}
                >
                  <motion.div
                    className="border border-[#fff] rounded-full w-12 h-12 text-[#fff] flex items-center justify-center mb-4"
                    variants={fadeInVariant}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h4
                    className={`font-semibold mb-3 text-lg ${feature.textColor}`}
                    variants={fadeInVariant}
                  >
                    {feature.title}
                  </motion.h4>
                  <motion.p
                    className={`text-sm ${feature.textColor}/90`}
                    variants={fadeInVariant}
                  >
                    {feature.text}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
       
        {/* 3 why choose*/}
        <section className="bg-white w-full">
          <div className="max-w-[1400px] leading-tight mx-auto px-6 pt-10 mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl lg:text-2xl  leading-tight text-center"
            >
              Why Choose Our
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="block  relative text-5xl z-50 mb-10 leading-normal text-center"
            >
              Institution Management Software?
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#d5f2e6] p-6 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={user1}
                    alt="User Friendly"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-black">
                  User-Friendly Design
                </h3>
                <p className="text-center text-black">
                  Intuitive interface that requires minimal training, making it
                  accessible to all staff members regardless of technical
                  expertise.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#d5f2e6] p-6 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={time}
                    alt="Time Saving"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-black">
                  Time-Saving Automation
                </h3>
                <p className="text-center text-black">
                  Automate routine tasks like attendance tracking, report
                  generation, and fee calculations, giving staff more time for
                  meaningful work.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#d5f2e6] p-6 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={communication}
                    alt="Communication"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-black">
                  Enhanced Communication
                </h3>
                <p className="text-center text-black">
                  Streamline communication between administrators, teachers,
                  students, and parents through integrated messaging and
                  notification systems.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="pt-5 pb-10 relative px-4 sm:px-10 md:px-20 bg-white w-full">
          <div className="text-center w-full mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl  text-black">
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

        {/* 4 bussiness op*/}
        <section className="bg-[#fff] w-full">
          <div className="max-w-[1400px] mx-auto px-6 pt-20 mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px]  text-center mb-10 text-[#000]"
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
                  className="flex flex-col items-center justify-center p-4  backdrop-blur-sm rounded-xl   hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-3 text-[#000] border border-[#000] bg-white w-20 h-20 rounded-full flex items-center justify-center ">
                    {type.icon}
                  </div>
                  <p className="text-[#000] text-center text-sm">{type.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* 5 Product Showcase Section */}
        {/* <section className="w-full pt-10 text-white relative bg-[#242A2F]">
          <div className="max-w-[1400px] mx-auto px-6 mb-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center "
            >
              Institution Solutions Showcase
            </motion.h2>

            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            ) : (
              <>
                
                {productVideos.length > 0 && (
                  <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-6 ">Product Videos</h3>
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
        </section> */}

        {/* 6 office partners  */}
        <section className="py-12 bg-white md:max-w-[1210px] max-w-[360px] mx-auto w-full">
          <div className="w-full text-center">
            <h2 className="text-3xl  text-gray-800 mb-6">
              Get MAGNET Now
            </h2>
            <p className="text-gray-600 mb-10 max-w-[600px] w-full mx-auto">
              Everything you need is ready. Start your journey to smarter work
              and experience seamless productivity with MAGNET — designed to
              make your workflow easier, faster, and more efficient.
            </p>

          <div className="px-4 py-12 ">
                       {/* The chain connector line */}
                       <div className="relative">
                         <div className="absolute top-[70px] left-0 w-full h-1 bg-gradient-to-r from-[#242A2F] to-[#1B9AC8]"></div>
         
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
                                     <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#242A2F] via-[#1B9AC8] to-[#1BAB6F] shadow-lg"></div>
         
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
                                     <div className="absolute left-0 top-1/2 transform -translate-x-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#242A2F] z-10"></div>
                                     <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#1B9AC8] z-10"></div>
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
      </div>

      <section className="bg-[#fff] py-10 w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Institution;


