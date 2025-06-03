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
import hospitality from "../../assets/hospitality.jpeg";
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
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";
import { register } from "swiper/element/bundle";
import mazus from '../../assets/mazus.png'
import orfila from '../../assets/orfila.png'
import lavillainn from '../../assets/lavillainn.png'
import { ChevronLeft, ChevronRight } from "lucide-react";


const Hospitality = () => {
   const [openChat, setOpenChat] = useState(false)
  
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
        where("category", "==", "STARSTAY")
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
      icon: <FaConciergeBell className="text-5xl mb-4 text-[#E9275F]" />
    },
    {
      title: "Smart Billing & Payment Integration",
      description: "Streamline billing with seamless payment options.",
      icon: <FaCreditCard className="text-5xl mb-4 text-[#E9275F]" />
    },
    {
      title: "Housekeeping & Maintenance Tracking",
      description: "Stay organized and improve service quality.",
      icon: <FaBroom className="text-5xl mb-4 text-[#E9275F]" />
    },
    {
      title: "Channel Manager Integration",
      description: "Sync with OTAs like Booking.com, Expedia, and Airbnb.",
      icon: <FaNetworkWired className="text-5xl mb-4 text-[#E9275F]" />
    },
    {
      title: "Restaurant & POS Management",
      description: "Simplify dining and room service operations.",
      icon: <FaCashRegister className="text-5xl mb-4 text-[#E9275F]" />
    },
    {
      title: "Guest CRM & Loyalty Programs",
      description: "Enhance guest satisfaction and retention.",
      icon: <FaUsers className="text-5xl mb-4 text-[#E9275F]" />
    },
    {
      title: "Multi-Property Management",
      description: "Manage multiple locations from a single dashboard.",
      icon: <FaBuilding className="text-5xl mb-4 text-[#E9275F]" />
    },
    {
      title: "Data Security & Compliance",
      description: "Secure and GDPR-compliant system for hotel records.",
      icon: <FaShieldAlt className="text-5xl mb-4 text-[#E9275F]" />
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
      name: "Mazuzs Inn",
      logo: mazus,
      location: "Vythiri - Wayanad",
    },
    {
      id: 2,
      name: "Orfila Inn",
      logo: orfila,
      location: "Nedumbassery - Cochin",
    },
    {
      id: 3,
      name: "LA VILLA INN",
      logo: lavillainn,
      location: "Wayanad",
    },
   
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
      <div className="relative min-h-[600px] bg-white overflow-hidden mt-16 md:mt-28">
        {/* Flex Container */}
        <div className="flex flex-col md:flex-row min-h-[600px] w-full max-w-[1400px] mx-auto md:mt-10">
          {/* Left Content (Text Section) */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col justify-center items-start gap-5 sm:gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInVariant} className="relative">
              <div className="absolute -left-4 -top-4 w-12 h-12 md:w-16 md:h-16 bg-[#f160267f] rounded-full opacity-50"></div>
              <div className="relative">
                <div className="text-[#EA2960] text-base md:text-2xl font-bold mb-3">
                  Elevating <span>Hotel Management</span> with
                </div>
                <div className="text-gray-800 text-3xl md:text-4xl lg:text-6xl font-semibold">
                  <span className="block">Smart Platforms</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white shadow-lg text-gray-800 p-4 w-full sm:p-6 md:p-8 rounded-xl sm:rounded-3xl backdrop-blur-sm border border-[#F15E26]"
              variants={fadeInVariant}
            >
              <div className="flex items-end gap-3 sm:gap-5 mb-5">
                <div className="h-auto w-full max-w-[150px] md:max-w-[250px] bg-gray-50 p-2 rounded-xl shadow-sm">
                  <img
                    src={starstay}
                    alt="Star Stay Logo"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <div className="w-full text-sm sm:text-base text-gray-600">
                We specialize in delivering cutting-edge Hotel Management
                Software STARSTAY designed to streamline operations, enhance
                guest experiences, and optimize revenue. Whether you run a
                boutique hotel, resort, or a multi-chain property, our
                all-in-one solution automates and simplifies daily tasks,
                allowing you to focus on hospitality. With years of expertise in
                the hospitality industry, we understand the challenges hoteliers
                face in managing reservations, billing, housekeeping, and
                customer service. Our user-friendly software ensures seamless
                communication between departments, real-time analytics, and
                effortless hotel administration.
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content (Image) - Made responsive */}
          <div className="w-full md:w-1/2 min-h-[400px] md:min-h-[600px] flex items-center justify-center pb-6 md:pb-0">
            <div className="relative w-full max-w-[400px] md:max-w-[600px] h-full">
              {/* Decorative Elements */}
              <div className="absolute -right-6 top-16 w-20 h-20 md:w-32 md:h-32 bg-[#FBD7C8] rounded-full opacity-60 z-0"></div>
              <div className="absolute -left-4 bottom-24 w-16 h-16 md:w-24 md:h-24 bg-[#f1602610] rounded-full opacity-70 z-0"></div>

              <motion.div
                className="w-full h-full p-3 relative z-10"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              >
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl border-4 md:border-8 border-white">
                  <img
                    src={hospitality}
                    alt="Modern hospitality interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
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
              className=" text-center text-[30px] mb-10 leading-tight px-2 text-[#352317]"
            >
              <span className="block  text-[40px] md:text-[50px]">
                What Makes Our STARSTAY Exceptional
              </span>
            </motion.div>

            {/* Feature Cards */}
            <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-3">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="relative w-full h-[250px] md-h-[200px] bg-[#fff] border border-[#E9275F] rounded-3xl px-10 py-5 flex flex-col items-center justify-center overflow-hidden text-[#E9275F] "
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
                  <div className="text-[16px] text-center text-[#000] ">
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
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 "
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
                <p className="text-black text-center text-sm">{type.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* client part  6*/}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black">
              Our Valued Clients
            </h2>
          </div>

          {/* Client logos container */}
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {clients.map((client) => (
              <div
                key={client.id}
                className=" rounded-lg p-4 flex items-center justify-center w-64 h-48"
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
      
      {/* poduct showcase */}
      {/* <section className="w-full py-20 text-white relative bg-[#7d1835]">
        <div className="max-w-[1400px] mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 "
          >
            Hospitality Product Showcase
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

      {/* office partners 8 */}
      <section className="py-12 bg-white md:max-w-[1210px] max-w-[360px] mx-auto w-full">
        <div className="w-full text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Get STARSTAY Now
          </h2>
          <p className="text-gray-600 mb-10 max-w-[600px] w-full mx-auto">
            Everything you need is ready. Start your journey to smarter work and
            experience seamless productivity with STARSTAY — designed to make
            your workflow easier, faster, and more efficient.
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

      <section className="bg-[#fff] py-10 w-full">
        <Footer />
      </section>
    </div>
  );
};



// Add same section as above
export default Hospitality;
