import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { collection, query, where, getDocs } from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";
import { register } from "swiper/element/bundle";
import Footer from "../Footer";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";
import auriclogo from '../../assets/AURIC.png'
import jwelery from '../../assets/jwelery.jpg'
import {
  FaGem,
  FaRing,
  FaCrown,
  FaRegClock,
  FaRegStar,
  FaUserFriends,
  FaShieldAlt,
  FaCertificate,
  FaHandHoldingUsd,
  FaSyncAlt,
  FaTags,
  FaRegCreditCard
} from "react-icons/fa";

import anugraha from '../../assets/anugraha.png'


const Auric = () => {
  const [openChat, setOpenChat] = useState(false);
  const [productVideos, setProductVideos] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProductVideosAndImages();
    
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

  const fetchProductVideosAndImages = async () => {
    try {
      setLoading(true);
      
      // Query for jewelry videos
      const videoQuery = query(
        collection(dbFirestore, "products"),
        where("category", "==", "AURIC")
      );
      const videoSnapshot = await getDocs(videoQuery);
      const videoData = videoSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Video data:", videoData);
      setProductVideos(videoData);
      
      // Query for jewelry images
      const imageQuery = query(
        collection(dbFirestore, "productImages"),
        where("category", "==", "jewelry")
      );
      const imageSnapshot = await getDocs(imageQuery);
      const imageData = imageSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Image data:", imageData);
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

  const jewelryTypes = [
    { icon: <FaRing />, text: "Rings" },
    { icon: <FaGem />, text: "Diamonds" },
    { icon: <FaCrown />, text: "Necklaces" },
    { icon: <FaRegClock />, text: "Watches" },
    { icon: <FaRegStar />, text: "Pendants" },
    { icon: <FaGem />, text: "Earrings" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const features = [
    {
      title: "Seamless Inventory Management",
      description: "Track every piece of jewelry with precision and ease.",
      icon: <FaGem className="text-5xl mb-4 text-[#C9A55C]" />
    },
    {
      title: "Customer Profile Management",
      description: "Remember preferences and purchase history for personalized service.",
      icon: <FaUserFriends className="text-5xl mb-4 text-[#C9A55C]" />
    },
    {
      title: "Security & Authentication",
      description: "Ensure authenticity and security of high-value items.",
      icon: <FaShieldAlt className="text-5xl mb-4 text-[#C9A55C]" />
    },
    {
      title: "Certification Management",
      description: "Digital storage for certificates and appraisals.",
      icon: <FaCertificate className="text-5xl mb-4 text-[#C9A55C]" />
    },
    {
      title: "Competitive Pricing Tools",
      description: "Set optimal prices based on market trends and costs.",
      icon: <FaHandHoldingUsd className="text-5xl mb-4 text-[#C9A55C]" />
    },
    {
      title: "Repair & Service Tracking",
      description: "Manage repairs, polishing, and maintenance services.",
      icon: <FaSyncAlt className="text-5xl mb-4 text-[#C9A55C]" />
    },
    {
      title: "Promotion & Loyalty Programs",
      description: "Create and track special offers and customer rewards.",
      icon: <FaTags className="text-5xl mb-4 text-[#C9A55C]" />
    },
    {
      title: "Smart Payment Processing",
      description: "Handle payments, layaways, and financing with ease.",
      icon: <FaRegCreditCard className="text-5xl mb-4 text-[#C9A55C]" />
    },
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

  const clients = [
    {
      id: 1,
      name: "ANUGRAHA ",
      logo: anugraha,
      location: "Dubai, UAE",
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <a href="https://wa.me/+917593820007">
        <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
          <RiWhatsappLine />
        </div>
      </a>

      {/* chatbot */}
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
    <div className="relative min-h-[600px] bg-gradient-to-br from-slate-50 to-white overflow-hidden w-full py-16">
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-[#C9A55C]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#C9A55C]/15 rounded-full blur-2xl"></div>
      
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Left Content Section */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center gap-8 pr-0 lg:pr-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInVariant} className="space-y-4">
            {/* <div className="inline-flex items-center gap-2 bg-[#C9A55C]/10 px-4 py-2 rounded-full">
              <div className="w-2 h-2 bg-[#C9A55C] rounded-full"></div>
              <span className="text-[#C9A55C] text-sm ">AURIC JEWELRY MANAGEMENT</span>
            </div>
             */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl  text-gray-900 leading-tight">
            
              <span className="block text-[#C9A55C]">Jewelry Management</span>
              <span className="block text-gray-700">with Luxury Solutions</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-xl">
              AURIC is our comprehensive Jewellery Management software that streamlines various activities in your shops to ensure smooth workflow and efficient business operations.
            </p>
          </motion.div>

         
          

        
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="w-full lg:w-1/2 flex items-center justify-center mt-12 lg:mt-0"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full max-w-lg">
            {/* Decorative Background Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#C9A55C]/20 rounded-full blur-xl"></div>
            {/* <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#C9A55C]/30 rounded-full blur-lg"></div> */}
            
            {/* Main Image Container */}
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border-4 ">
              <div className="aspect-[4/5] w-full">
                <img
                  src={jwelery}
                  alt="Luxury jewelry showcase"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Card Overlay */}
              
            </div>
          </div>
        </motion.div>
      </div>
    </div>
      {/* Why Choose us */}
      <div className="bg-[#fff]">
        <motion.section
          initial={{ opacity: 0, filter: "blur(15px)" }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            transition: { duration: 1 },
          }}
          className="max-w-[1400px] mx-auto flex flex-col justify-center items-center"
        >
          <div className="w-full px-4 py-10 pt-10">
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
              className="text-center text-[30px] mb-10 leading-tight px-2 text-[#352317]"
            >
              <span className="block text-[40px] md:text-[50px]">
                What Makes Our AURIC Exceptional
              </span>
            </motion.div>

            {/* Feature Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative w-full h-[250px] md-h-[200px] bg-[#fff] border border-[#C9A55C] rounded-3xl px-10 py-5 flex flex-col items-center justify-center overflow-hidden text-[#C9A55C]"
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  custom={index}
                >
                  {feature.icon}
                  <div className="text-[20px] font-semibold leading-tight mb-2 text-center text-[#352317]">
                    {feature.title}
                  </div>
                  <div className="text-[16px] text-center text-[#000]">
                    {feature.description}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      </div>

      {/* Business Applications Section */}
      <div className="relative overflow-hidden py-10">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[30px] sm:text-[40px] md:text-[50px]  text-center mb-10"
          >
            Jewelry Categories Applications
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {jewelryTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4 backdrop-blur-sm rounded-xl hover:border-gold-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3 text-[#000] border border-[#C9A55C] bg-white w-20 h-20 rounded-full flex items-center justify-center">
                  {type.icon}
                </div>
                <p className="text-black text-center text-sm">{type.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* client part */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl  text-black">
              Our Valued Clients
            </h2>
          </div>

          {/* Client logos container */}
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {clients.map((client) => (
              <div
                key={client.id}
                className="rounded-lg p-4 flex items-center justify-center w-64 h-48"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* product showcase */}
      {/* <section className="w-full py-20 text-white relative bg-[#896b2e]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10"
          >
            Jewelry Management Showcase
          </motion.h2>

          {loading ? (
            <div className="flex justify-center items-center h-40">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
            </div>
          ) : (
            <>
              
              {productVideos.length > 0 && (
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-6">Product Videos</h3>
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

      {/* business partners */}
      <section className="py-12 bg-white md:max-w-[1210px] max-w-[360px] mx-auto w-full">
        <div className="w-full text-center">
          <h2 className="text-3xl  text-gray-800 mb-6">
            Get AURIC Now
          </h2>
          <p className="text-gray-600 mb-10 max-w-[600px] w-full mx-auto">
            Everything you need is ready. Start your journey to smarter jewelry
            management and experience seamless inventory control with AURIC —
            designed to make your business operations easier, more secure, and
            more profitable.
          </p>

          <div className="px-4 py-12">
            {/* The chain connector line */}
            <div className="relative">
              <div className="absolute top-[70px] left-0 w-full h-1 bg-gradient-to-r from-[#020709] to-[#E5BF73]"></div>

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
                  <SwiperSlide key={index} className="!w-auto">
                    <div className="px-2">
                      <div className="relative transform transition-transform duration-300">
                        <div className="relative h-36 w-36">
                          {/* Outer gradient circle */}
                          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#020709] via-[#D4B36A] to-[#E5BF73] shadow-lg"></div>

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
                          <div className="absolute left-0 top-1/2 transform -translate-x-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#C9A55C] z-10"></div>
                          <div className="absolute right-0 top-1/2 transform translate-x-3 -translate-y-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#020709] z-10"></div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff] py-10 w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Auric;