import React, { useEffect, useState } from 'react'
import inventory from '../../assets/inventory.jpg'
import { TiTick } from "react-icons/ti";
import opt from '../../assets/optimization.png'
import time from '../../assets/timer.png'
import gear from '../../assets/gear.png'
import multichanel from '../../assets/multichanel.png'
import analytics from '../../assets/analytics.png'
import Footer from ".././Footer";
import ecommerce from '../../assets/ecommerce.png'
import vanSales from '../../assets/vansales.jpg'
import deliveryTracking from '../../assets/delivery.jpg'
import employeeTracking from '../../assets/employee.jpg'
import WhatsApps from '../../assets/whatsapp.jpg'
import gpay from '../../assets/payment.jpg'
import hybrid from '../../assets/hybriddata.jpg'
import task from '../../assets/taskcopy.png'
import icare from '../../assets/icarecopy.png'
import bcare from '../../assets/Bcare.png'
import darkGradient from "../../assets/darkGradient.jpg"
import { motion } from "framer-motion"
import { collection, getDocs, query, where } from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";
import {  AnimatePresence } from 'framer-motion';
// import { businessTypes } from './Restaurant';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MultiStore from "../../assets/multistore.jpg"
import hypermarket from '../../assets/hypermarket.png'
import Supermarket from '../../assets/supermarket.png'
import botique from '../../assets/botique.png'
import hardware from '../../assets/hardware1.png'
import footware from '../../assets/footware.png'
import textiles from '../../assets/textiles.png'
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";

const Inventory = () => {
  const [productVideos, setProductVideos] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
   const [openChat, setOpenChat] = useState(false)

  const openFullScreen = (image) => {
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };
  const features = [
    {
      image: ecommerce,
      title: "E Commerce",
      description:
        "Seamless online shopping solutions for your business growth.",
    },
    {
      image: vanSales,
      title: "Van Sales Applications",
      description:
        "Empower your sales team with mobile van sales applications.",
    },
    {
      image: deliveryTracking,
      title: "Delivery Tracking Solutions",
      description: "Real time tracking for efficient delivery management.",
    },
    {
      image: employeeTracking,
      title: "Employee Tracking System",
      description: "Monitor and manage your workforce with ease.",
    },
    {
      image: hybrid,
      title: "Hybrid Data Management System",
      description: "Integrated data management for smooth business operations.",
    },
    {
      image: gpay,
      title: "Digital Payment Integration",
      description:
        "Secure and seamless digital transactions for your business.",
    },
    {
      image: WhatsApps,
      title: "WhatsApp SMS Integration",
      description:
        "Instant communication with customers through WhatsApp and SMS.",
    },
    {
      image: MultiStore,
      title: "Multi Store Management",
      description:
        "Seamlessly manage multiple store locations from a single platform. Track inventory, sales, and performance across all branches in real time for better efficiency and control.",
    },

    // Removed duplicated features to avoid repetition
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchProductVideosAndImages();
  }, []);

  const fetchProductVideosAndImages = async () => {
    try {
      setLoading(true);
      
      // Fixed case sensitivity - "inventory" instead of "Inventory"
      const videoQuery = query(
        collection(dbFirestore, "products"),
        where("category", "==", "inventory")
      );
      const videoSnapshot = await getDocs(videoQuery);
      const videoData = videoSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Video data:", videoData); // Debug log
      setProductVideos(videoData);
      
      // Fixed case sensitivity - "inventory" instead of "Inventory"
      const imageQuery = query(
        collection(dbFirestore, "productImages"),
        where("category", "==", "inventory")
      );
      const imageSnapshot = await getDocs(imageQuery);
      const imageData = imageSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Image data:", imageData); // Debug log
      setProductImages(imageData);
      
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setLoading(false);
    }
  };

  const businessTypes = [
    { icon: hypermarket, text: "Hypermarket" },
    { icon: Supermarket, text: "Supermarket" },
    { icon: textiles, text: "Textiles" },
    { icon: footware, text: "Footware" },
    { icon: botique, text: "Botique" },
    { icon: hardware, text: "Hypermarket" },
  ];
  
  return (
    <div className="overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 h-full w-full">
          <img
            src={darkGradient}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <a href="https://wa.me/+917593820007">
                <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
                  <RiWhatsappLine/>
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
        <section
          id="inventorymanagement"
          className="w-full relative pb-20 px-2 pt-32 overflow-hidden"
        >
          <div className="w-full px-2 max-w-[1400px] mx-auto">
            <motion.div
              className="flex flex-col md:flex-row w-full md:justify-center md:items-center md:gap-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* Left - Image Section */}
              <motion.div
                className="w-full md:w-[50%] h-[300px] md:h-[500px] p-[1px] bg-[#3c3333] backdrop-blur-3xl rounded-3xl mb-5 md:mb-0 relative"
                initial={{ scale: 0.8, rotateY: 45, filter: "blur(10px)" }}
                whileInView={{ scale: 1, rotateY: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="rounded-3xl w-full h-full bg-black overflow-hidden shadow-lg">
                  <motion.img
                    src={inventory}
                    alt="Inventory"
                    className="h-full w-full object-cover rounded-3xl"
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>

              {/* Right - Text Section */}
              <div className="w-full md:w-[50%] flex flex-col justify-center items-start p-5">
                <motion.div
                  className="text-[#fff] text-[40px] md:text-[50px] mb-3 md:mb-5 textGradient4 leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Make Inventory More Powerful and Accurate
                </motion.div>

                <motion.div
                  className="text-[#fff] textGradient6 mb-5 text-[14px] md:text-[16px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  The effective inventory management is the backbone of a
                  successful business. Our innovative solutions ensure seamless
                  stock control, optimize resource utilization, and enhance
                  operational efficiency. TASK is our Incredible Financial
                  Accounting Software. TASK is a Windows-based Financial
                  Software that can be customized to your needs. Its powerful
                  accounting features and high flexibility make it unique among
                  its kind.
                </motion.div>

                <motion.div
                  className="flex justify-start items-start"
                  initial={{ opacity: 0, x: -50, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={task}
                    alt="TASK Logo"
                    className="w-full h-[100px]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* icons */}
        <section className="w-full py-20 relative">
          <div className="max-w-[1400px] w-full mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6 place-items-center">
              {[
                {
                  img: time,
                  title: "Real Time Inventory Tracking",
                  desc: "Gain full visibility into your stock levels with our real-time tracking system. Reduce stock discrepancies and prevent shortages or overstocking.",
                },
                {
                  img: gear,
                  title: "Automated Stock Replenishment",
                  desc: "Leverage intelligent automation to maintain optimal inventory levels. Our system ensures timely reordering, preventing supply chain disruptions.",
                },
                {
                  img: multichanel,
                  title: "Multi Channel Integration",
                  desc: "Synchronize your inventory across multiple sales channels, warehouses, and locations. Whether you operate online, in-store, or both, we streamline inventory updates for a hassle-free experience.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="w-full h-auto flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-white rounded-full p-3 mb-3">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-white text-lg sm:text-xl textGradient4 font-extrabold">
                    {item.title}
                  </div>
                  <div className="textGradient6 text-sm sm:text-lg text-white font-thin">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap w-full gap-6 justify-center mx-auto mt-6">
              {[
                {
                  img: analytics,
                  title: "Advanced Analytics and Reporting",
                  desc: "Make data-driven decisions with our in-depth analytics. Monitor inventory trends, forecast demand, and optimize purchasing strategies with ease.",
                },
                {
                  img: opt,
                  title: "Scalable and Customizable Solutions",
                  desc: "Whether you're a small business or a large enterprise, our inventory management solutions are designed to scale with your needs. Customize features to align with your business goals.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="w-full sm:w-[500px] h-auto flex flex-col items-center justify-center text-center"
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-white rounded-full p-3 mb-3">
                    <img
                      src={item.img}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-white text-lg sm:text-xl textGradient4 font-extrabold">
                    {item.title}
                  </div>
                  <div className="textGradient6 text-sm sm:text-lg text-white font-thin">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features grid - Fixed grid responsiveness */}
        <section className="w-full py-20 text-white relative">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 textGradient4"
            >
              Our Advanced Features
            </motion.h2>

            {/* Fixed grid columns for better responsiveness */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 auto-rows-fr">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative p-6 rounded-xl shadow-lg text-center flex flex-col items-center h-[400px]"
                >
                  <div className="w-[200px] overflow-hidden absolute top-0 h-[200px] bg-white rounded-tl-full rounded-tr-full rounded-br-full flex items-center justify-center mb-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-tl-full rounded-tr-full rounded-br-full"
                    />
                  </div>
                  <div className="mt-[200px] pt-4">
                    <h3 className="text-xl font-bold mb-2 textGradient4">
                      {feature.title}
                    </h3>
                    <p className="text-sm textGradient6">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Videos and Images Section */}
        <section className="w-full py-20 text-white relative">
          <div className="max-w-[1400px] mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 textGradient4"
            >
              Inventory Product Showcase
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
                    <h3 className="text-2xl font-bold mb-6 textGradient6">
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

                {/* Product Images Slider */}
                {productImages.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6 textGradient6">
                      Product Images
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
                      {productImages.map((image) => (
                        <SwiperSlide key={image.id}>
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="bg-black/30 backdrop-blur-sm overflow-hidden shadow-lg w-full h-[250px] cursor-pointer"
                            onClick={() => openFullScreen(image)}
                          >
                            <img
                              src={image.imageUrl}
                              alt={image.name}
                              className="w-full h-full object-contain"
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
          {/* Full screen image overlay */}
          <AnimatePresence>
            {selectedImage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
                onClick={closeFullScreen}
              >
                <div className="relative max-w-6xl max-h-[600px] p-4">
                  <button
                    className="absolute top-4 right-4  rounded-full p-2 text-white"
                    onClick={closeFullScreen}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="black"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <img
                    src={selectedImage.imageUrl}
                    alt={selectedImage.name}
                    className="max-w-full max-h-[90vh] object-contain"
                  />
                  {/* <div className="mt-2 text-white text-center">
                                  <h3 className="text-xl font-semibold">{selectedImage.name}</h3>
                                  {selectedImage.description && (
                                    <p className="mt-1 text-white/80">
                                      {selectedImage.description}
                                    </p>
                                  )}
                                </div> */}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="max-w-[1400px] mx-auto px-6 pt-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 textGradient4"
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
                <div className="text-4xl mb-3 text-[#000] bg-white w-20 h-20 rounded-full flex items-center justify-center ">
                    <img
                      src={type.icon}
                      alt=""
                      className="w-full h-full object-contain p-3"
                    />
                  </div>
                  <p className="text-white text-center text-sm">{type.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TASK Features */}
        <section className="w-full py-10 relative text-white">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 textGradient4"
            >
              Why Choose TASK?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Real time inventory tracking across multiple locations",
                "Barcode scanning for quick and accurate stock management",
                "Automated purchase order generation based on stock levels",
                "Detailed reporting on stock movements and valuations",
                "Integration with e commerce platforms and POS systems",
                "Batch tracking and serial number management",
                "Mobile access for inventory checks on the go",
                "Role based access controls for enhanced security",
                "Stock forecasting based on historical data and trends",
                "Customizable alerts for low stock and expiring items",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-white/5 backdrop-blur-sm"
                >
                  <div className="text-green-400 mt-1">
                    <TiTick size={20} />
                  </div>
                  <p className="textGradient6">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* iCare & BCare Section */}
        <section className="w-full py-20 relative">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-16 textGradient4"
            >
              Our Specialized Solutions
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* iCare */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center"
              >
                <div className="w-full mb-6">
                  <img
                    src={icare}
                    alt="iCare"
                    className="h-16 object-contain"
                  />
                </div>
               
                <p className="text-white textGradient6 text-start mb-6">
                  Our comprehensive retail management solution designed
                  specifically for your inventory needs. iCare offers seamless
                  POS integration, customer relationship management, and
                  detailed stock control.
                </p>
                {/* <ul className="text-white textGradient6 mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <TiTick className="text-green-400" size={20} />
                    <span>
                      Smart inventory forecasting based on sales trends
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TiTick className="text-green-400" size={20} />
                    <span>Integrated POS and inventory management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TiTick className="text-green-400" size={20} />
                    <span>Customer purchase history tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TiTick className="text-green-400" size={20} />
                    <span>Real-time stock availability across outlets</span>
                  </li>
                </ul> */}
                {/* <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-8 rounded-full font-semibold transition duration-300">
                  Learn More
                </button> */}
              </motion.div>

              {/* BCare */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center"
              >
                <div className="w-full mb-6">
                  <img
                    src={bcare}
                    alt="BCare"
                    className="h-16 object-contain"
                  />
                </div>
               
                <p className="text-white textGradient6 text-start mb-6">
                  B Care is an intermediate version of Our Financial Account
                  System. Which is designed for a medium level business
                  Automations. B Care is a well appreciated product from our
                  valued customer in Business Industry.
                </p>
                {/* <ul className="text-white textGradient6 mb-6 space-y-2">
                  <li className="flex items-center gap-2">
                    <TiTick className="text-green-400" size={20} />
                    <span>Multi-warehouse inventory management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TiTick className="text-green-400" size={20} />
                    <span>Supplier relationship management</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TiTick className="text-green-400" size={20} />
                    <span>Bulk order processing and fulfillment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <TiTick className="text-green-400" size={20} />
                    <span>Advanced inventory forecasting and analytics</span>
                  </li>
                </ul> */}
                {/* <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 px-8 rounded-full font-semibold transition duration-300">
                  Learn More
                </button> */}
              </motion.div>
            </div>
          </div>
        </section>

        {/* contact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center py-8 pt-10 sm:pt-20"
        >
          <h2 className="text-xl sm:text-3xl font-bold textGradient4 mb-3 sm:mb-4 text-white">
            Ready to Transform?
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto textGradient6 px-4 text-sm sm:text-base">
            Experience how TASK can streamline your operations, reduce errors,
            and boost customer satisfaction.
          </p>
          <a href="/contact">
            <button className="bg-[#F99F2C] hover:bg-[#e8922b] text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F99F2C]/20 text-sm sm:text-base textGradient5 border">
              Contact Now
            </button>
          </a>
        </motion.div>
      </div>
      <section className="py-10 bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Inventory;