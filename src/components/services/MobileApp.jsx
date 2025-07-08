import React, { useEffect, useState, useRef } from "react";
import Footer from "../Footer";
import mobileapp from "../../assets/mobapp.jpg";
import app1 from "../../assets/app1.jpg";
import app2 from "../../assets/app2.jpg";
import app from "../../assets/app.jpg";
import darkGradient from "../../assets/darkGradient.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";
import flutter from "../../assets/flutter.png";
import python from "../../assets/python.png";
import hostinger from "../../assets/hostinger.png";
import pgadmin from "../../assets/pgadmin.png";
import firebase from "../../assets/firebase.png";
import react from "../../assets/react.png";
import github from "../../assets/github.png";
import aws from "../../assets/aws.png";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import website from "../../assets/android.png";
import website1 from "../../assets/ios.png";
import website2 from "../../assets/FLUTTERIMG.png";
import website3 from "../../assets/reactnative.png";

const MobileApp = () => {
  const [openChat, setOpenChat] = useState(false);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const MobileAppData = [
    {
      title: "Custom Mobile App Development",
      description:
        "We design and develop mobile apps tailored to meet the unique needs of your business. From user interfaces to backend systems, we build apps that provide seamless experiences.",
    },
    {
      title: "Cross-Platform App Development",
      description:
        "Our cross-platform mobile app development ensures that your app works flawlessly on both Android and iOS, saving time and cost while maintaining high performance.",
    },
    {
      title: "Mobile App UI/UX Design",
      description:
        "We focus on creating intuitive and engaging user interfaces and experiences that ensure your mobile app stands out and provides users with a smooth, enjoyable journey.",
    },
    {
      title: "Mobile App Integration",
      description:
        "We integrate mobile apps with your existing systems, enabling seamless communication between platforms and delivering a cohesive experience across all touchpoints.",
    },
    {
      title: "Mobile App Testing",
      description:
        "We conduct thorough testing for every mobile app we build, ensuring that the app functions smoothly, with no bugs or performance issues, across all devices and platforms.",
    },
    {
      title: "App Maintenance and Support",
      description:
        "Our post-launch services include ongoing maintenance and support to keep your app updated, secure, and running efficiently, providing you peace of mind.",
    },
    {
      title: "App Security Features",
      description:
        "We prioritize security in mobile app development, implementing robust encryption, authentication, and data protection features to safeguard your app and user information.",
    },
    {
      title: "App Store Optimization (ASO)",
      description:
        "Our ASO services help your app gain visibility and rank higher in app stores, optimizing keywords, metadata, and visuals to attract more downloads and users.",
    },
    {
      title: "Mobile App Analytics",
      description:
        "We integrate advanced analytics into your mobile app, enabling you to track user behavior, app performance, and make data-driven decisions for continuous improvement.",
    },
  ];

  const ChooseUsList = [
    {
      titile: "Customer-Centric Approach",
      description:
        "We put your business goals and users at the center of everything we do. Our solutions are tailored to meet your specific needs, ensuring seamless experiences and ongoing improvements.",
    },
    {
      titile: "Innovative Mobile Solutions",
      description:
        "We leverage the latest technologies to create cutting-edge mobile apps that empower your business, offering smart, scalable, and future-proof solutions for all industries.",
    },
    {
      titile: "Customizable & Scalable Platforms",
      description:
        "We understand that each business is unique. Our mobile apps are designed to be flexible, scalable, and customizable to meet your evolving business needs as you grow.",
    },
    {
      titile: "End-to-End Mobile Solutions",
      description:
        "From initial app concept to post-launch maintenance, we provide complete mobile app development services to ensure your app remains secure, updated, and effective long-term.",
    },
    {
      titile: "Dedicated Support & Maintenance",
      description:
        "We offer continuous support and maintenance, ensuring that your app runs smoothly and is always up-to-date with the latest features and security enhancements.",
    },
    {
      titile: "Expert Development Team",
      description:
        "Our skilled development team excels in creating high-performance mobile apps for Android, iOS, and cross-platform solutions. We ensure smooth functionality and optimal performance, no matter the device.",
    },
    {
      titile: "On-Time Delivery",
      description:
        "We value your time. Our development process is streamlined to ensure that your mobile app is delivered within the agreed timeframe, without compromising quality.",
    },
  ];

  const techPartners = [
    { name: "Python", img: python },
    { name: "React", img: react },
    { name: "Flutter", img: flutter },
    { name: "AWS", img: aws },
    { name: "GitHub", img: github },
    { name: "Hostinger", img: hostinger },
    { name: "PgAdmin", img: pgadmin },
    { name: "Firebase", img: firebase },
  ];

  const titles = ["ANDROID", "IOS", "FLUTTER", "REACT NATIVE"];
  const images = [website, website1, website2, website3];

  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-col justify-center items-center relative bg-white">
        {/* WhatsApp Button */}
        <a href="https://wa.me/+917593820007" className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50">
          <div className="cursor-pointer text-3xl md:text-4xl p-2 md:p-3 bg-[#4DC85A] text-white rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
            <RiWhatsappLine />
          </div>
        </a>

        {/* Hero Section */}
        <div className="w-full relative pt-8 pb-1 overflow-hidden">
          <section className="w-full relative px-4 pb-10 md:pb-20 pt-16 md:pt-32">
            <div className="flex flex-col max-w-7xl mx-auto justify-center items-center gap-4 md:gap-8">
              
              {/* Main Content and Image Container */}
              <div className="flex flex-col lg:flex-row w-full justify-center items-center gap-6 md:gap-8 lg:gap-12">
                
                {/* Left Side - Main Content */}
                <div className="flex-1 flex flex-col justify-center items-start gap-4 md:gap-6 lg:gap-8 order-2 lg:order-1">
                  <div className="text-left w-full">
                    <h1 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                      CRAFTING MOBILE EXPERIENCES
                    </h1>
                    <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl max-w-full lg:max-w-2xl mb-6 md:mb-8 leading-relaxed">
                      We create easy-to-use mobile apps for Android and iOS. Whether you need an app for your business or a new idea, we build fast, reliable, and user-friendly apps to help you grow.
                    </p>
                  </div>
                </div>

                {/* Right Side - Main Image */}
                <div className="flex-1 flex flex-col gap-4 md:gap-6 w-full order-1 lg:order-2">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full h-56 sm:h-72 md:h-90 lg:h-96 xl:h-[450px] bg-gradient-to-r from-gray-400 via-white to-yellow-200 p-[1px] backdrop-blur-3xl rounded-2xl md:rounded-3xl"
                  >
                    <div className="rounded-2xl md:rounded-3xl w-full h-full bg-black overflow-hidden relative">
                      <img
                        src={mobileapp}
                        alt="Mobile app development and design showcase"
                        className="w-full h-full object-cover rounded-2xl md:rounded-3xl transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Mobile App Development Section */}
        <div className="pt-6 md:pt-10 pb-6 md:pb-10 relative w-full overflow-hidden">
          <section className="max-w-7xl mx-auto w-full px-4">
            <div>
              <div className="flex flex-col gap-3 md:gap-5 mb-8 md:mb-10 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-[#352317] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight"
                >
                  MOBILE APP DEVELOPMENT
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-black text-sm sm:text-base md:text-lg max-w-4xl mx-auto leading-relaxed"
                >
                  In today's fast-paced world, every entrepreneur seeks real-time insights into their business. That's why mobile solutions have become essential. We are committed to delivering affordable, high-quality mobile applications while also offering tailored solutions designed to meet unique business needs and drive growth.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {MobileAppData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      y: 50,
                      rotateY: 45,
                      filter: "blur(10px)",
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      rotateY: 0,
                      filter: "blur(0px)",
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full min-h-[180px] md:min-h-[200px] bg-gradient-to-r p-[1px] backdrop-blur-3xl rounded-2xl md:rounded-3xl"
                  >
                    <div className="rounded-2xl md:rounded-3xl w-full h-full bg-[#FCF3E1] p-4 md:p-5">
                      <motion.h3
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className="text-black text-lg md:text-xl font-bold mb-3 text-center"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          ease: "easeOut",
                        }}
                        className="text-black text-sm md:text-base leading-relaxed"
                      >
                        {item.description}
                      </motion.p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Platform Types Slider */}
        <section className="w-full relative px-4 pb-10 md:pb-20 pt-8 md:pt-16 overflow-hidden">
          <div className="w-full mt-4 md:mt-8">
            <Swiper
              slidesPerView={2}
              spaceBetween={15}
              loop={true}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 10 },
                480: { slidesPerView: 2, spaceBetween: 15 },
                768: { slidesPerView: 3, spaceBetween: 20 },
                1024: { slidesPerView: 4, spaceBetween: 25 },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="w-full max-w-7xl mx-auto"
            >
              {images.map((image, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative bg-gradient-to-r from-gray-400 via-white to-yellow-200 p-[1px] backdrop-blur-3xl rounded-2xl md:rounded-3xl h-20 sm:h-24 md:h-32 lg:h-40 xl:h-48 w-full"
                  >
                    <div className="rounded-2xl md:rounded-3xl w-full h-full bg-white overflow-hidden relative">
                      <img
                        src={image}
                        alt={`mobile app ${index + 1}`}
                        className="w-full h-full object-contain rounded-2xl md:rounded-3xl"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
                      <div className="absolute inset-0 flex items-center justify-center z-20">
                        <h3 className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-center px-2 md:px-4">
                          {titles[index]}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Technology Partners Section */}
        <section className="w-full px-4 relative py-12 md:py-24 bg-gradient-to-br from-[#2C3E50] to-[#1A1A2E] text-white overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10 pointer-events-none">
            <div className="absolute top-4 md:top-10 left-4 md:left-10 w-32 md:w-64 h-32 md:h-64 rounded-full bg-[#F2662C] blur-3xl"></div>
            <div className="absolute bottom-4 md:bottom-10 right-4 md:right-10 w-40 md:w-80 h-40 md:h-80 rounded-full bg-[#BF8C60] blur-3xl"></div>
          </div>

          {/* Main content */}
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 md:mb-16"
            >
              <div className="flex flex-col items-center text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F2662C] to-[#BF8C60]">
                    Technology Partners
                  </span>
                </h2>
                <div className="h-1 w-12 md:w-20 bg-gradient-to-r from-[#F2662C] to-[#BF8C60] rounded-full mb-4 md:mb-6"></div>
                <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl px-4">
                  Leveraging cutting-edge tools and technologies to deliver exceptional solutions
                </p>
              </div>
            </motion.div>

            {/* Partner logos carousel */}
            <div className="hidden lg:grid lg:grid-cols-4 xl:grid-cols-8 gap-5">
              {techPartners.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white backdrop-blur-md rounded-xl p-4 md:p-6 h-32 md:h-48 flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-[#F2662C]/30"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full max-h-20 md:max-h-32 object-contain filter drop-shadow-lg"
                  />
                </motion.div>
              ))}
            </div>

            {/* Mobile/Tablet Carousel */}
            <motion.div
              className="w-full lg:hidden"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <Swiper
                  modules={[Autoplay, Navigation]}
                  grabCursor={true}
                  centeredSlides={true}
                  slidesPerView={1}
                  spaceBetween={20}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  navigation={{
                    prevEl: ".prev-tech-partner",
                    nextEl: ".next-tech-partner",
                  }}
                  breakpoints={{
                    320: { slidesPerView: 2, spaceBetween: 15 },
                    480: { slidesPerView: 3, spaceBetween: 20 },
                    640: { slidesPerView: 4, spaceBetween: 25 },
                    768: { slidesPerView: 5, spaceBetween: 30 },
                  }}
                  className="py-6 md:py-10"
                >
                  {techPartners.map((partner, index) => (
                    <SwiperSlide key={index}>
                      <motion.div
                        className="bg-white backdrop-blur-md rounded-xl p-3 md:p-6 h-24 md:h-48 flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-[#F2662C]/30"
                        whileHover={{ y: -5 }}
                      >
                        <img
                          src={partner.img}
                          alt={partner.name}
                          className="w-full max-h-16 md:max-h-32 object-contain filter drop-shadow-lg"
                        />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation buttons */}
                <div className="flex justify-center gap-4 md:gap-8 mt-4 md:mt-8">
                  <button
                    ref={navigationPrevRef}
                    className="prev-tech-partner w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#F2662C] transition-all duration-300"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    ref={navigationNextRef}
                    className="next-tech-partner w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#F2662C] transition-all duration-300"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <div className="w-full relative py-10 md:py-20 overflow-hidden">
          <section className="max-w-6xl w-full mx-auto px-4">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[#352317] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mb-4 md:mb-5"
            >
              Why Choose Us?
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center max-w-4xl mx-auto text-black text-sm sm:text-base md:text-lg mb-8 md:mb-12 leading-relaxed"
            >
              We offer innovative, scalable IT solutions tailored for healthcare, education, and business sectors. Our user-friendly platforms and dedicated support ensure seamless operations and lasting success.
            </motion.div>

            {/* Two-Column Layout with Rows */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-x-12 md:gap-y-16">
              {ChooseUsList.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true, amount: 0.3 }}
                  className="relative flex items-start"
                >
                  {/* Numbered Circle */}
                  <div className="mr-3 md:mr-4 mt-1 flex-shrink-0">
                    <div className="w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-yellow-200 to-yellow-100 flex items-center justify-center shadow-lg">
                      <span className="text-sm md:text-lg font-bold text-black">
                        {index + 1}
                      </span>
                    </div>
                    <div className="hidden md:block absolute top-10 md:top-14 left-5 md:left-7 w-[1px] h-12 md:h-16 bg-gradient-to-b from-yellow-200 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl font-bold text-black mb-2 md:mb-3">
                      {item.titile}
                    </h3>

                    <p className="text-black text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative Accent */}
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-yellow-200 to-transparent mt-3 md:mt-4"></div>
                  </div>

                  {/* Background Glow */}
                  <div className="absolute -z-10 top-0 left-0 w-10 h-10 md:w-14 md:h-14 bg-yellow-200 blur-2xl opacity-20"></div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="w-full bg-white py-4 md:py-10 overflow-hidden">
        <Footer />
      </section>
    </div>
  );
};

export default MobileApp;