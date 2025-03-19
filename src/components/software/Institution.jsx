import React, { useEffect, useState } from "react";
import communication from "../../assets/communication.png";
import user1 from "../../assets/userfriendly.png";
import time from "../../assets/time.png";
import institution from "../../assets/institutionmanagement1.jpeg";
import institution1 from "../../assets/institutionmanagement.jpg";
import institution2 from "../../assets/institutionmanagement2.jpg";
import darkGradient from "../../assets/darkGradient.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dbFirestore } from "../../firebaseConfig";
import magnet from "../../assets/MAGNET.png";

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

const Institution = () => {
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
    { icon: <FaUsers />, text: "Educational NGOs" },
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

  const features = [
    {
      title: "Comprehensive & User-Friendly",
      text: "A single platform for managing all academic and administrative tasks efficiently.",
      icon: <FaTasks />,
      bg: "bg-gradient-to-r from-[#d83a12] to-[#F99F2C]",
      textColor: "text-white",
    },
    {
      title: "Student & Faculty Management",
      text: "Streamline admissions, attendance, and performance tracking for institutions.",
      icon: <FaUsers />,
      bg: "bg-[#ffffff2e] backdrop-blur-sm",
      textColor: "text-white",
    },
    {
      title: "Automated Fee & Finance Management",
      text: "Easy invoicing, online payments, and financial reports for better financial management.",
      icon: <FaMoneyBillWave />,
      bg: "bg-gradient-to-r from-[#d83a12] to-[#F99F2C]",
      textColor: "text-white",
    },
    {
      title: "Parent & Student Portal",
      text: "Seamless communication through web and mobile apps, keeping everyone connected.",
      icon: <FaChalkboardTeacher />,
      bg: "bg-[#ffffff2e] backdrop-blur-sm",
      textColor: "text-white",
    },
    {
      title: "Timetable & Exam Scheduling",
      text: "Hassle-free academic planning with automated scheduling features.",
      icon: <FaCalendarAlt />,
      bg: "bg-gradient-to-r from-[#d83a12] to-[#F99F2C]",
      textColor: "text-white",
    },
    {
      title: "Library & Inventory Management",
      text: "Organize resources efficiently and manage inventories with ease.",
      icon: <FaBook />,
      bg: "bg-[#ffffff2e] backdrop-blur-sm",
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
        where("category", "==", "institution")
      );
      const videoSnapshot = await getDocs(videoQuery);
      const videoData = videoSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      console.log("Video data:", videoData); // Debug log
      setProductVideos(videoData);
      
      // Query for images from the "institution" category
      const imageQuery = query(
        collection(dbFirestore, "productImages"),
        where("category", "==", "institution")
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

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full relative">
          <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 h-full w-full">
                    <img
                      src={darkGradient}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
        <section
          id="institutionmanagement"
          className="w-full relative pb-20 pt-20"
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
                  className="w-full md:w-1/2"
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
                  <h2 className="text-[32px] md:text-[40px] text-gray-800 textGradient4 mb-4">
                    Simplifying Institution Management with Smart Technology
                  </h2>
                  <p className="text-white textGradient6">
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
              className="mb-20 max-w-[1400px] mx-auto"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariant}
            >
              <motion.div className="grid grid-cols-3 md:grid-cols-5 gap-6 mb-8">
                {features1.slice(0, 5).map((feature, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col py-4 items-center group border border-white rounded-full"
                    variants={fadeInVariant}
                  >
                    <div className=" rounded-full flex items-center justify-center text-[#F99F2C] shadow-lg mb-2 group-hover:scale-110 transition-transform p-1 text-[30px]">
                      {feature.icon}
                    </div>
                    <p className="text-white text-center text-sm">
                      {feature.text}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div className="grid grid-cols-3 md:grid-cols-4 gap-6">
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
              </motion.div>
            </motion.div>

            {/* Feature Cards Section */}
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
                    className="border border-white/30 rounded-full w-12 h-12 text-[#fff] flex items-center justify-center mb-4"
                    variants={fadeInVariant}
                  >
                    {feature.icon}
                  </motion.div>
                  <motion.h4
                    className={`font-semibold mb-3 text-lg ${feature.textColor}`} // ✅ Fixed Template Literal
                    variants={fadeInVariant}
                  >
                    {feature.title}
                  </motion.h4>
                  <motion.p
                    className={`text-sm ${feature.textColor}/90`} // ✅ Fixed Template Literal
                    variants={fadeInVariant}
                  >
                    {feature.text}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Product Showcase Section */}
        <section className="w-full py-20 text-white relative">
          
          <div className="max-w-[1400px] mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 textGradient4"
            >
              Healthcare Solutions Showcase
            </motion.h2>

            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            ) : (
              <>
                {/* Product Videos */}
                {productVideos.length > 0 && (
                  <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-6 textGradient6">
                      Product Videos
                    </h3>
                    <div className="flex flex-nowrap overflow-x-auto pb-4 gap-4">
                      {productVideos.map((video) => (
                        <motion.div
                          key={video.id}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.6 }}
                          className="bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg min-w-[320px] max-w-[400px] flex-shrink-0 h-[320px]"
                        >
                          <div className="w-[400px] h-[320px]">
                            {video.videoUrl && (
                              <iframe
                                className="w-full h-full"
                                src={video.videoUrl}
                                title={video.name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              />
                            )}
                          </div>
                          {/* <div className="p-4">
                                                   <h4 className="text-xl font-semibold mb-2 textGradient4">
                                                     {video.name}
                                                   </h4>
                                                 </div> */}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Product Images */}
                {productImages.length > 0 && (
                  <div>
                    <h3 className="text-2xl font-bold mb-6 textGradient6">
                      Product Images
                    </h3>
                    <div className="flex flex-nowrap overflow-x-auto pb-4 gap-4">
                      {productImages.map((image) => (
                        <motion.div
                          key={image.id}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6 }}
                          className="bg-black/30 backdrop-blur-sm  overflow-hidden shadow-lg min-w-[300px] max-w-[400px] h-[250px] flex-shrink-0 cursor-pointer"
                          onClick={() => openFullScreen(image)}
                        >
                          <div className="w-auto h-auto">
                            <img
                              src={image.imageUrl}
                              alt={image.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                          {/* <div className="p-4">
                                                  <h4 className="text-lg font-semibold mb-1 textGradient4 text-center">
                                                    {image.name}
                                                  </h4>
                                                </div> */}
                        </motion.div>
                      ))}
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
                          <div className="relative  h-[500px] p-4">
                            <button
                              className="absolute top-4 right-4   rounded-full p-2 "
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
                            <div className="mt-2 text-white text-center">
                              <h3 className="text-xl font-semibold">
                                {selectedImage.name}
                              </h3>
                              {selectedImage.description && (
                                <p className="mt-1 text-white/80">
                                  {selectedImage.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}

                {productVideos.length === 0 && productImages.length === 0 && (
                  <div className="text-center py-10">
                    <p className="text-xl textGradient6">
                      No product media available yet. Check back soon!
                    </p>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="max-w-[1400px] mx-auto px-6 pt-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Why Choose Our Institution Management Software?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#ffffff1c] p-6 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={user1}
                    alt="User Friendly"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-white">
                  User-Friendly Design
                </h3>
                <p className="text-center text-gray-100">
                  Intuitive interface that requires minimal training, making it
                  accessible to all staff members regardless of technical
                  expertise.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-[#ffffff1c] p-6 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={time}
                    alt="Time Saving"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-white">
                  Time-Saving Automation
                </h3>
                <p className="text-center text-gray-100">
                  Automate routine tasks like attendance tracking, report
                  generation, and fee calculations, giving staff more time for
                  meaningful work.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-[#ffffff1c] p-6 rounded-lg shadow-md"
              >
                <div className="w-16 h-16 mx-auto mb-4">
                  <img
                    src={communication}
                    alt="Communication"
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-center mb-3 text-white">
                  Enhanced Communication
                </h3>
                <p className="text-center text-gray-100">
                  Streamline communication between administrators, teachers,
                  students, and parents through integrated messaging and
                  notification systems.
                </p>
              </motion.div>
            </div>
          </div>
          <div className="max-w-[1400px] mx-auto px-6 pt-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 textGradient4"
          >
            Business Applications
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center p-4 bg-black/30 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="text-4xl mb-3 text-[#f99f2c]">{type.icon}</div>
                <p className="text-white text-center text-sm">{type.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        </section>

        {/* Fullscreen Image Modal */}
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
      </div>
      
        
        
    
      <section className="bg-[#fff] py-10 w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Institution;

// First, add the businessTypes array after your other constant definitions (after features1)


// Then, add the section before the Footer section in the return statement
