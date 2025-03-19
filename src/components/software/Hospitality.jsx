import React,{ useState, useEffect } from "react";
import property from "../../assets/comprehensivepropertymanagement.jpg";
import auto from "../../assets/autom.jpg";
import userfriendly from "../../assets/userfriendlys.jpg";
import affoandflex from "../../assets/affoandflex.jpeg";
import guest from "../../assets/guest.jpg";
import operation from "../../assets/operation.jpeg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import h1 from "../../assets/h1.jpeg";
import hospitality from "../../assets/hospitality.jpg";
import darkGradient from "../../assets/darkGradient.jpg";
import starstay from "../../assets/starstay.png";
// import darkgradient from "../../assets/darkGradient.jpg";
import {motion} from "framer-motion";
import Footer from "../Footer";
import {
  FaHotel,
  FaBed,
  FaHome,
  FaUmbrellaBeach,
  FaBuilding,
  FaCampground,
  FaConciergeBell,
  FaCreditCard,
  FaBroom,
  FaNetworkWired,
  FaCashRegister,
  FaUsers,
  FaShieldAlt
} from "react-icons/fa";
import hosp from "../../assets/hospitality.jpeg"
import { collection, query, where, getDocs } from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";
import {  AnimatePresence } from 'framer-motion';

const Hospitality = () => {
  const [productVideos, setProductVideos] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchProductVideosAndImages();
  }, []);
  const fetchProductVideosAndImages = async () => {
    try {
      setLoading(true);
      
      // Fixed case sensitivity - "inventory" instead of "Inventory"
      const videoQuery = query(
        collection(dbFirestore, "products"),
        where("category", "==", "hospitality")
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
        where("category", "==", "hospitality")
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

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  const openFullScreen = (image) => {
    setSelectedImage(image);
  };
  const businessTypes = [
    { icon: <FaHotel />, text: "Hotels" },
    { icon: <FaBed />, text: "Resorts" },
    { icon: <FaHome />, text: "Guest Houses" },
    { icon: <FaUmbrellaBeach />, text: "Vacation Rentals" },
    { icon: <FaBuilding />, text: "Service Apartments" },
    { icon: <FaCampground />, text: "Hostels" },
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
      title: "Effortless Front Desk & Reservation Management",
      description: "Handle bookings, cancellations, and guest check-ins with ease.",
      icon: <FaConciergeBell className="text-5xl mb-4 text-[#f99f2c]" />
    },
    {
      title: "Smart Billing & Payment Integration",
      description: "Streamline billing with seamless payment options.",
      icon: <FaCreditCard className="text-5xl mb-4 text-[#f99f2c]" />
    },
    {
      title: "Housekeeping & Maintenance Tracking",
      description: "Stay organized and improve service quality.",
      icon: <FaBroom className="text-5xl mb-4 text-[#f99f2c]" />
    },
    {
      title: "Channel Manager Integration",
      description: "Sync with OTAs like Booking.com, Expedia, and Airbnb.",
      icon: <FaNetworkWired className="text-5xl mb-4 text-[#f99f2c]" />
    },
    {
      title: "Restaurant & POS Management",
      description: "Simplify dining and room service operations.",
      icon: <FaCashRegister className="text-5xl mb-4 text-[#f99f2c]" />
    },
    {
      title: "Guest CRM & Loyalty Programs",
      description: "Enhance guest satisfaction and retention.",
      icon: <FaUsers className="text-5xl mb-4 text-[#f99f2c]" />
    },
    {
      title: "Multi-Property Management",
      description: "Manage multiple locations from a single dashboard.",
      icon: <FaBuilding className="text-5xl mb-4 text-[#f99f2c]" />
    },
    {
      title: "Data Security & Compliance",
      description: "Secure and GDPR-compliant system for hotel records.",
      icon: <FaShieldAlt className="text-5xl mb-4 text-[#f99f2c]" />
    },
  ];

  return (
    <div className="relative">
       <div className="absolute top-0 bottom-0 right-0 left-0 -z-10">
            <img
              src={darkGradient}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
      {/* Hero Section */}
      <div className="relative overflow-hidden h-screen">
     
        {/* Background gradient overlay */}
        {/* <div className="absolute inset-0  z-10"></div> */}

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={hosp}
            alt="Modern pharmacy interior"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        {/* main content */}
        <div className="relative flex flex-col justify-center items-start gap-10 px-20 h-full w-full">
          {/* top */}
          <div>
            <div className="text-[#fff] textGradient5 text-2xl font-bold mb-3">
              Elevating <span className="textGradient7">Hotel Management</span>{" "}
              with
            </div>
            <div className="text-white textGradient4 text-6xl">
              <span className="block">Smart Platforms</span>
            </div>
          </div>
          {/* bottom */}
          <div className="bg-[#ffffff24] text-[#fff] p-5 rounded-3xl backdrop-blur-sm border">
            <div className="flex items-end gap-5 mb-5">
              <div className="text-4xl text-[#fff]">VTASK</div>
              <div className="h-auto w-[250px] bg-[#fff] p-2 rounded-xl">
                <img
                  src={starstay}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="max-w-[900px]">
              we specialize in delivering cutting-edge Hotel Management Software
              STARSTAY designed to streamline operations, enhance guest
              experiences, and optimize revenue. Whether you run a boutique
              hotel, resort, or a multi-chain property, our all-in-one solution
              automates and simplifies daily tasks, allowing you to focus on
              hospitality. With years of expertise in the hospitality industry,
              we understand the challenges hoteliers face in managing
              reservations, billing, housekeeping, and customer service. Our
              user-friendly software ensures seamless communication between
              departments, real-time analytics, and effortless hotel
              administration.
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose us */}

      <motion.section
        initial={{ opacity: 0, filter: "blur(15px)" }}
        whileInView={{
          opacity: 1,
          filter: "blur(0px)",
          transition: { duration: 1 },
        }}
        className="max-w-[1600px] mx-auto flex flex-col justify-center items-center"
      >
        
        <div className="w-full px-4 py-10 pt-10">
          
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
            className="textGradient5 text-center text-[30px] mb-10 leading-tight"
          >
            Why Choose{" "}
            <span className="block textGradient4 text-[50px]">
              Our Hotel Management Software?
            </span>
          </motion.div>

          {/* Feature Cards */}
          <div className="w-full grid grid-cols-4 gap-3">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative w-full h-[200px] bg-[#ffffff22] rounded-3xl px-10 py-5 flex flex-col items-center justify-center overflow-hidden text-[#fff] textGradient6"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                custom={index}
              >
                {feature.icon}
                <div className="text-[20px] font-semibold leading-tight mb-2 text-center">
                  {feature.title}
                </div>
                <div className="text-[16px] text-center">{feature.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <section className="w-full py-20 text-white relative">
          
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 textGradient4"
            >
              Healthcare Product Showcase
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
          
        </section>
      {/* Business Applications Section */}
      <div className="relative overflow-hidden py-20">
        
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 textGradient4"
          >
            Business Applications
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
      </div>
      <section className="bg-[#fff] py-10 w-full">
        <Footer />
      </section>
    </div>
  );
};



// Add same section as above
export default Hospitality;
