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
  FaTimes
} from "react-icons/fa";
import pharmacy from "../../assets/pharmacyimg.jpeg";
import vtask from "../../assets/VTASK.png";
import Footer from "../Footer";
import pharmacy2 from "../../assets/pharmacyimg1.jpeg";
import pharmacy3 from "../../assets/pharmacyimg2.jpeg";
import darkGradient from "../../assets/darkGradient.jpg";
import { motion } from "framer-motion";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dbFirestore } from "../../firebaseConfig";
import { AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";


const PharmacyManagementPage = () => {
  const businessTypes = [
    { icon: <FaPills />, text: "Retail Pharmacies" },
    { icon: <FaHospitalAlt />, text: "Hospital Pharmacies" },
    { icon: <FaClinicMedical />, text: "Clinical Pharmacies" },
    { icon: <FaStore />, text: "Drug Stores" },
    { icon: <FaIndustry />, text: "Pharmaceutical Distributors" },
    { icon: <FaWarehouse />, text: "Medical Supply Stores" },
  ];
  const [loading, setLoading] = useState(true);
  const [productVideos, setProductVideos] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
     const [openChat, setOpenChat] = useState(false)
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProductVideosAndImages();
  }, []);

  // Define animation variants
  const fadeInVariant = {
    hidden: { opacity: 0, filter: "blur(10px)", y: 50 },
    visible: { opacity: 1, filter: "blur(0px)", y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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
        where("category", "==", "pharmacy")
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
        where("category", "==", "pharmacy")
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
  
  const openFullScreen = (image) => {
    console.log("Opening full screen for:", image);
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };
  
  return (
    <div className="text-white relative min-h-screen">
      {/* Fixed background that covers the entire page */}
      <div className="fixed inset-0 -z-10">
        <img src={darkGradient} alt="" className="w-full h-full object-cover" />
      </div>
      <a href="https://wa.me/+917593820007">
        <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
          <RiWhatsappLine />
        </div>
              
      </a>

      {/* chatbot */}
      <div className="bottom-10 fixed right-10 z-[999] text-[#000]">
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
      <div className="relative overflow-hidden h-screen">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={pharmacy}
            alt="Modern pharmacy interior"
            className="w-full h-full object-cover opacity-30"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
        </div>

        {/* Hero content */}
        <motion.div
          className="relative flex flex-col justify-center items-start gap-5 sm:gap-10 px-6 sm:px-10 md:px-20 h-full w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {/* Left Content */}
          <motion.div variants={fadeInVariant}>
            <div className="text-[#fff] textGradient5 text-lg sm:text-2xl font-bold mb-2 sm:mb-3">
              Experience the Best
            </div>
            <div className="text-white textGradient4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              Pharmacy Management <span className="block">Software</span>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="bg-[#ffffff24] text-[#fff] p-4 sm:p-5 rounded-xl sm:rounded-3xl backdrop-blur-sm border"
            variants={fadeInVariant}
          >
            <div className="flex items-end gap-3 sm:gap-5 mb-3 sm:mb-5">
              <motion.div
                className="text-2xl sm:text-4xl text-[#fff] textGradient6"
                variants={fadeInVariant}
              >
                VTASK
              </motion.div>
              <motion.div
                className="h-auto w-[150px]  sm:w-[200px] md:w-[300px] bg-[#fff] p-1 sm:p-2 rounded-lg sm:rounded-xl"
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
              className="max-w-[900px] text-sm sm:text-base textGradient6"
              variants={fadeInVariant}
            >
              We specialize in developing cutting-edge pharmacy software
              designed to simplify operations, enhance accuracy, and improve
              customer service for pharmacies of all sizes. With years of
              experience in the healthcare tech industry, our mission is to
              provide pharmacists with an efficient, secure, and user-friendly
              platform that streamlines billing, inventory tracking,
              prescriptions, and compliance.
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Features Section */}
      <section className="relative py-10 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-[1400px]">
          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 sm:mb-12 text-center textGradient4"
          >
            Core Features
          </motion.h2>

          {/* Features Grid */}
          <div className="flex justify-center items-center gap-6 sm:gap-10 mb-6 sm:mb-10 flex-col md:flex-row">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              {[
                {
                  icon: <FaClipboardCheck className="text-black text-xl" />,
                  title: "Innovative & Reliable",
                  description:
                    "Advanced features for seamless pharmacy management.",
                },
                {
                  icon: <FaShieldAlt className="text-black text-xl" />,
                  title: "Easy-to-Use Interface",
                  description: "No technical expertise required.",
                },
                {
                  icon: <FaShieldAlt className="text-black text-xl" />,
                  title: "Compliant & Secure",
                  description:
                    "GST, drug regulations, and data security ensured.",
                },
                {
                  icon: <FaChartLine className="text-black text-xl" />,
                  title: "Real Time Reporting App",
                  description: "Manage your pharmacy from anywhere.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="p-4 sm:p-6 rounded-xl border border-white hover:border-[#F99F2C]/50 textGradient6 transition-colors duration-300 shadow-lg"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="bg-[#F99F2C] p-2 sm:p-3 rounded-lg mr-3 sm:mr-4">
                      {feature.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-[#F99F2C]">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Image Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl sm:rounded-3xl bg-gray-800"
            >
              <img
                src={pharmacy2}
                alt=""
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Advanced Features */}
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 mb-6 sm:mb-10">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              className="md:w-full flex items-center justify-center h-full"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-[#F99F2C]/30 rounded-lg blur textGradient6 opacity-30"></div>
                <div className="relative overflow-hidden rounded-lg border border-gray-800 h-full w-full">
                  <div className="w-full h-[250px] sm:h-[300px] md:h-[450px]">
                    <img
                      src={pharmacy3}
                      alt="Pharmacist using VTASK software"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">
                      Trusted by Pharmacies Nationwide
                    </h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      Join hundreds of pharmacies that rely on VTASK for their
                      daily operations.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Features List */}
            <div className="w-full">
              <motion.div
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
                className="rounded-2xl textGradient6 overflow-hidden shadow-xl h-full w-full p-4 sm:p-6"
              >
                <h3 className="text-xl sm:text-2xl textGradient6 font-bold mb-4 sm:mb-6 text-start text-[#F99F2C]">
                  Advanced Capabilities
                </h3>
                <ul className="space-y-4 sm:space-y-6">
                  {[
                    {
                      icon: <FaStore className="text-[#F99F2C]" />,
                      title: "Retail & Wholesale",
                      description:
                        "Compatible for Retail and Wholesale Business operations.",
                    },
                    {
                      icon: <FaBoxes className="text-[#F99F2C]" />,
                      title: "Effortless SKU Management",
                      description:
                        "Inventory tracking, real-time stock visibility, and simplified reorder processes.",
                    },
                    {
                      icon: <FaCalendarAlt className="text-[#F99F2C]" />,
                      title: "One Touch Expiry Handling",
                      description:
                        "Stay ahead of product expirations with VTASK's expiry tracking system.",
                    },
                    {
                      icon: <FaHospital className="text-[#F99F2C]" />,
                      title: "Hospital & Clinical Compatible",
                      description:
                        "Integrated module with our own Hospital Software 'SHADE'.",
                    },
                    {
                      icon: <FaBarcode className="text-[#F99F2C]" />,
                      title: "Barcode and Batch",
                      description: "Most Convenient for Hyper Pharma Concepts.",
                    },
                  ].map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.2,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true }}
                      className="flex items-start"
                    >
                      <div className="bg-[#F99F2C]/20 p-2 rounded mr-3 sm:mr-4 mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                          {feature.title}
                        </h4>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* CTA Section */}
        </div>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 pt-10 sm:pt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl leading-normal sm:text-[30px] md:text-[40px] lg:text-[50px] font-bold text-center mb-6 sm:mb-10 textGradient4"
          >
            Business Applications
          </motion.h2>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-3 sm:gap-6">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4  backdrop-blur-sm rounded-xl   hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3 text-[#000] bg-white w-20 h-20 rounded-full flex items-center justify-center ">
                  {type.icon}
                </div>
                <p className="text-white text-center text-xs sm:text-sm">
                  {type.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <section className="w-full py-10 sm:py-20 text-white relative">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-2xl sm:text-[30px] leading-normal md:text-[40px] lg:text-[50px] font-bold text-center mb-6 sm:mb-10 textGradient4"
            >
              Pharmacy Product Showcase
            </motion.h2>

            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            ) : (
              <>
                {/* Product Videos Slider */}
                {productVideos.length > 0 && (
                  <div className="mb-8 sm:mb-16">
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 textGradient6">
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
                            className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg w-full h-[200px] sm:h-[250px] md:h-[320px]"
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
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 textGradient6">
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
                            className="bg-black/30 backdrop-blur-sm overflow-hidden shadow-lg w-full h-[150px] sm:h-[200px] md:h-[250px] cursor-pointer"
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
        </section>

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

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center py-8 pt-10 sm:pt-20"
        >
          <h2 className="text-xl sm:text-3xl font-bold mb-3 sm:mb-4 textGradient4">
            Ready to Transform Your Pharmacy?
          </h2>

          <p className="text-gray-400 mb-6 sm:mb-8 max-w-2xl textGradient6 mx-auto px-4 text-sm sm:text-base">
            Experience how VTASK can streamline your operations, reduce errors,
            and boost customer satisfaction.
          </p>

          <a href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-[#F99F2C] hover:bg-[#e8922b] textGradient5 text-black font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full transition-all duration-300 shadow-lg shadow-[#F99F2C]/20 text-sm sm:text-base"
            >
              Contact Now
            </motion.button>
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <section className="py-10 text-[#000] bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
};

export default PharmacyManagementPage;