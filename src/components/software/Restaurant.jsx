import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import restaurant from '../../assets/restaurantmanagement.jpg'
import { FaBoxes, FaCalculator, FaChartBar, FaCoffee, FaConciergeBell, FaDatabase, FaGlassMartini, FaMobileAlt, FaPizzaSlice, FaPrint, FaQrcode, FaStream, FaTable, FaTruck, FaUtensils, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion"
import Footer from '../Footer'
import darkGradient from "../../assets/darkGradient.jpg";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { dbFirestore } from "../../firebaseConfig";
import {  AnimatePresence } from 'framer-motion';

export const businessTypes = [
  { icon: <FaUtensils />, text: "Restaurants" },
  { icon: <FaCoffee />, text: "Cafes" },
  { icon: <FaPizzaSlice />, text: "Fast Food Chains" },
  { icon: <FaGlassMartini />, text: "Bars & Pubs" },
  { icon: <FaTruck />, text: "Food Trucks" },
  { icon: <FaConciergeBell />, text: "Catering Services" },
];

const Restaurant = () => {
  const features = [
    { icon: <FaCalculator />, title: "Fast & Efficient Billing", description: "Quick and accurate billing system to enhance customer satisfaction" },
    { icon: <FaTable />, title: "Table & Order Management", description: "Seamless table allocation and order tracking system" },
    { icon: <FaBoxes />, title: "Store Keeping and Inventory", description: "Efficient inventory management and stock control" },
    { icon: <FaChartBar />, title: "Accounts and Detailed Reports", description: "Comprehensive financial tracking and business analytics" },
    { icon: <FaQrcode />, title: "Contactless dine-in with QR Menu", description: "Modern contactless dining experience with digital menus" },
    { icon: <FaDatabase />, title: "Data Backup and Security", description: "Secure data storage with automated backup systems" },
    { icon: <FaMobileAlt />, title: "Order Taking App", description: "Mobile application for streamlined order management" },
    { icon: <FaStream />, title: "Live Stream Mobile Applications", description: "Real-time order tracking and management" },
    { icon: <FaWhatsapp />, title: "Whatsapp and SMS Integrations", description: "Integrated communication channels for better customer service" },
    { icon: <FaPrint />, title: "Multi Type Print Handling", description: "Versatile printing options for various business needs" },
  ];
  const [loading, setLoading] = useState(true);
  const [productVideos, setProductVideos] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null)

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
        where("category", "==", "restaurant")
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
        where("category", "==", "restaurant")
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
  return (
    <div className="relative">
      <div className="fixed inset-0 -z-10">
              <img src={darkGradient} alt="" className="w-full h-full object-cover" />
            </div>
      {/* <div className="fixed top-0 left-0 w-full h-full bg-[url('./assets/bgimage.jpg')] bg-no-repeat bg-cover bg-center bg-fixed -z-10" />
      <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-t from-[#111827] to-transparent -z-10" /> */}
      <div className="pt-[100px] flex flex-col justify-center items-center w-full px-2">
      <section
        id="restaurant"
        className="max-w-[1400px] mx-auto bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] backdrop-blur-3xl w-full rounded-3xl h-auto overflow-hidden mb-20"
      >
        <motion.div
          className="flex flex-col md:flex-row md:justify-center md:items-center overflow-hidden text-[#fff] md:gap-2 rounded-3xl w-full h-full bg-[#02343D]"
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
                className="text-[40px] md:text-[30px] textGradient5 leading-tight mb-3 md:mb-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
                viewport={{ once: true }}
              >
                Simplify Your{" "}
                <span className="textGradient4 text-[60px]">
                  Restaurant Billing and Management
                </span>
              </motion.div>

              <motion.div
                className="textGradient6 md:pr-36 mb-5 md:mb-10 text-[14px] md:text-[16px]"
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
                className="flex flex-col sm:flex-row items-start sm:items-center gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.7 }}
                viewport={{ once: true }}
              >
                <div className="textGradient5 px-10 py-2 rounded-3xl border">
                  <Link to="/customers">More</Link>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="w-full md:w-[50%] h-[300px] md:h-full rounded-l-full overflow-hidden"
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
      
      {/* Features Grid Section */}
      <motion.div
      className="max-w-[1400px] mx-auto px-4 pb-20"
      initial={{ opacity: 0, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-10 textGradient4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        Key Features
      </motion.h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-xl bg-gradient-to-r bg-[#ffffff1c] transition-all duration-300 group"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="text-3xl mb-4 text-[#F99F2C] textGradient5 group-hover:scale-110 transition-transform duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true }}
            >
              {feature.icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-400 text-sm">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>

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

    <div className="max-w-[1400px] mx-auto px-6 pt-10 py-10">
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

        <section className="py-10 bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
}

export default Restaurant



