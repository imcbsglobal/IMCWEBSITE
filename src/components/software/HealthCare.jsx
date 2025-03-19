import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserMd, FaNotesMedical, FaFlask, FaFileInvoiceDollar, FaPills, FaShieldAlt, FaUsersCog, FaBalanceScale, FaHospital, FaClinicMedical, FaTeeth, FaEye, FaAmbulance } from 'react-icons/fa';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dbFirestore } from "../../firebaseConfig";
import HealthCareImg from '../../assets/healthcareimg.jpg';
import shade from '../../assets/SHADEorg.png';
import Footer from '../Footer';
import darkGradient from '../../assets/darkGradient.jpg';

const features = [
  { icon: <FaUserMd />, title: 'Patient Registration & Appointment Management', desc: 'Hassle-free booking, scheduling, and queue management.' },
  { icon: <FaNotesMedical />, title: 'Electronic Medical Records (EMR)', desc: 'Secure and centralized patient records for better diagnosis and treatment.' },
  { icon: <FaFlask />, title: 'Laboratory & Diagnostic Management', desc: 'Integrated lab module for efficient test processing and reporting.' },
  { icon: <FaFileInvoiceDollar />, title: 'Scan & Procedures Billing', desc: 'Automated billing, claims processing, and compliance with regulations.' },
  { icon: <FaPills />, title: 'Pharmacy & Inventory Control', desc: 'Real-time stock tracking, expiry alerts, and prescription management.' },
  { icon: <FaUsersCog />, title: 'Doctor & Staff Management', desc: 'Easy scheduling, shift tracking, and performance monitoring.' },
  { icon: <FaShieldAlt />, title: 'Data Security & Compliance', desc: 'Advanced security measures ensuring data privacy and regulatory compliance.' },
  { icon: <FaBalanceScale />, title: 'Financial Transparency', desc: 'Clear and detailed financial insights for better decision-making.' },
];

const HealthCare = () => {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetchProductVideosAndImages();
  }, []);

   const fetchProductVideosAndImages = async () => {
      try {
        setLoading(true);
        
        // Fixed case sensitivity - "inventory" instead of "Inventory"
        const videoQuery = query(
          collection(dbFirestore, "products"),
          where("category", "==", "healthcare")
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
          where("category", "==", "healthcare")
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

  return (
    <div className="w-full flex flex-col items-center text-white relative">
        <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 h-full w-full">
                  <img
                    src={darkGradient}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
      <section className="py-20 relative w-full pt-32">
        

        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-center text-center lg:text-left gap-8">
          <motion.img
            src={HealthCareImg}
            alt="Healthcare"
            className="w-full lg:w-1/2 rounded-3xl shadow-lg"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
          />

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold textGradient4">
              HEALTHCARE MANAGEMENT
            </h1>

            <p className="mt-4 textGradient6 text-justify">
              We empower healthcare institutions with our advanced Hospital
              Information Management System 'SHADE'—a comprehensive solution
              designed to optimize hospital workflows, enhance patient care, and
              improve operational efficiency.
              <span className="block text-justify">
                Our HIMS software integrates patient management, billing,
                electronic medical records (EMR), appointment scheduling,
                pharmacy, lab management, and more—all in one seamless platform.
                Whether you run a single hospital, a multi-specialty clinic, or
                a healthcare network, our system ensures smooth and automated
                operations, reducing paperwork and enhancing productivity.
              </span>
            </p>
            <div className="flex justify-start items-start w-[250px] bg-white mt-2">
              <img
                src={shade}
                alt="shade"
                className="h-[80px] object-contain px-2"
              />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 max-w-[1400px] mx-auto mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center p-6 rounded-2xl shadow-lg text-center hover:scale-105 transition border border-white"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="text-4xl text-[#F99F2C]">{feature.icon}</div>
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
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

      <section className="bg-[#fff] py-10 w-full">
        <Footer />
      </section>
    </div>
  );
};

export default HealthCare;



