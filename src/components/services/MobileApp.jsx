import React, { useEffect, useState, useRef } from "react";
import Footer from "../Footer";
import mobileapp from "../../assets/mobileapp1.jpg";
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
import "swiper/css/navigation"; // Added navigation CSS
// Import required modules
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import website from "../../assets/android.jpg";
import website1 from "../../assets/ios.png";
import website2 from "../../assets/FLUTTERIMG.png";
import website3 from "../../assets/reactnative.png";


const MobileApp = () => {
  const [openChat, setOpenChat] = useState(false);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  useEffect(() => {
    // Scroll to the top of the page on mount
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

  const processList = [
    {
      titile: "Discovery Phase",
      description:
        "During the discovery phase, we work closely with our clients to understand their business objectives and gather project requirements. We identify the target audience and user personas, and conduct extensive research on industry trends and competitor websites to gain insights and ideas.",
      img: "img",
    },
    {
      titile: "Planning Phase",
      description:
        "In this phase, we map out the app's functionalities, define the user experience (UX) flow, and create wireframes to outline the app’s structure and key features. We also finalize the app's visual design, ensuring alignment with your brand identity.",
      img: "img",
    },
    {
      titile: "Design Phase",
      description:
        "We develop the app’s visual design, focusing on an intuitive user interface (UI) and seamless experience. Our team creates interactive prototypes and refines the design based on your feedback. The goal is to ensure that the design is both functional and visually appealing to your users.",
      img: "img",
    },
    {
      titile: "Development Phase",
      description:
        "In the development phase, we bring the app to life by coding it with the latest technologies. Our skilled developers use frameworks and tools to create high-performance mobile apps, whether for Android, iOS, or both. We ensure that the app is secure, fast, and capable of delivering a smooth user experience.",
      img: "img",
    },
    {
      titile: "Launch Phase",
      description:
        "Once the app is developed, we prepare for launch. We test the app thoroughly to eliminate any bugs, ensure compatibility with multiple devices, and perform final quality assurance checks. We then deploy the app to app stores, ensuring a smooth release and visibility.",
      img: "img",
    },
    {
      titile: "Maintenance Phase",
      description:
        "Post-launch, we provide ongoing support and maintenance services. We ensure that the app is updated regularly, fix any issues that arise, and offer continuous improvements to meet evolving user needs and keep the app up-to-date with the latest OS versions",
      img: "img",
    },
  ];

  const techPartners = [
    // { name: "APPEON", img: appeon },
    { name: "Python", img: python },
    { name: "React", img: react },
    { name: "Flutter", img: flutter },
    // { name: "SAP", img: sap },
    { name: "AWS", img: aws },
    { name: "GitHub", img: github },
    { name: "Hostinger", img: hostinger },
    { name: "PgAdmin", img: pgadmin },
    { name: "Firebase", img: firebase },
    // { name: "Photoshop", img: photoshop },
    // { name: "Illustrator", img: illustrator },
    // { name: "Adobe XD", img: adobexd },
    // { name: "Figma", img: figma },
  ];

  const titles = ["ANDROID", "IOS", "FLUTTER","REACT NATIVE"];
  const images = [website, website1, website2,website3];

  return (
    <>
      <div className="flex flex-col justify-center items-center relative bg-[#fff]">
        {/* <div className="w-full absolute top-0 bottom-0 left-0 right-0 -z-10">
          <img
            src={darkGradient}
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}
        <a href="https://wa.me/+917593820007">
          <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
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

        {/* intro */}
        <div className="w-full relative pt-8 pb-1">
         <section className="w-full relative px-4 pb-20 pt-32">
      <div className="flex flex-col max-w-[1400px] mx-auto justify-center items-center gap-8">
        
        {/* Main Content and Image Container */}
        <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto justify-center items-center gap-6 sm:gap-8 lg:gap-12">
          
          {/* Left Side - Main Content */}
          <div className="flex-1 flex flex-col justify-center items-start gap-4 sm:gap-6 lg:gap-8 order-2 lg:order-1">
            {/* Main Heading and Description */}
            <div className="text-left w-full">
              <h3 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  mb-4 sm:mb-6 leading-tight">
                CRAFTING MOBILE EXPERIENCES
              </h3>
              <p className="text-black text-base sm:text-lg lg:text-xl max-w-full lg:max-w-[600px] mb-6 sm:mb-8 leading-relaxed">
                We create easy-to-use mobile apps for Android and iOS. Whether you need an app for your business or a new idea, we build fast, reliable, and user-friendly apps to help you grow.
              </p>
            </div>
          </div>

          {/* Right Side - Main Image */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-6 w-full order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] backdrop-blur-3xl rounded-2xl sm:rounded-3xl"
            >
              <div className="rounded-2xl sm:rounded-3xl w-full h-full bg-[#000] overflow-hidden relative">
                <img
                  src={mobileapp}
                  alt="Mobile app development and design showcase"
                  className="w-full h-full object-cover rounded-2xl sm:rounded-3xl transition-transform duration-300 hover:scale-105"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Swiper Slider Section */}
        <div className="w-full mt-8">
          <Swiper
            slidesPerView={4} // default view
            spaceBetween={20}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 2 }, // screens from 0px to 740px
              741: { slidesPerView: 3 },
              1000: { slidesPerView: 4 }, // screens above 741px
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{
                    duration: 1,
                    delay: index * 0.3,
                    ease: "easeOut",
                  }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="relative bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] backdrop-blur-3xl rounded-3xl h-[200px] md:h-[300px] w-full"
                >
                  <div className="rounded-3xl w-full h-full bg-[#000] overflow-hidden relative">
                    <img
                      src={image}
                      alt={`mobile app ${index + 1}`}
                      className="w-full h-full object-cover rounded-3xl"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <h3 className="text-white text-xl md:text-4xl font-bold text-center px-4">
                        {titles[index]}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
        </div>

        {/* mobile app DEVELOPMENT */}
        <div className="py-20 relative w-full">
          <section className="max-w-[1400px] mx-auto w-full px-4">
            <div>
              <div className="flex flex-col gap-5 mb-10 text-center">
                <motion.h2
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-[#352317] text-[30px] sm:text-[40px] lg:text-[50px]  leading-tight"
                >
                  MOBILE APP DEVELOPMENT
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  viewport={{ once: false, amount: 0.3 }}
                  className="text-[#000]  max-w-[1000px] mx-auto"
                >
                  In today's fast-paced world, every entrepreneur seeks
                  real-time insights into their business. That's why mobile
                  solutions have become essential. We are committed to
                  delivering affordable, high-quality mobile applications while
                  also offering tailored solutions designed to meet unique
                  business needs and drive growth.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
                      delay: index * 0.3,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.3 }}
                    className="w-full h-[220px] md:h-[200px] bg-gradient-to-r p-[1px] backdrop-blur-3xl rounded-3xl"
                  >
                    <div className="rounded-3xl w-full h-full bg-[#FCF3E1] p-5">
                      <motion.h3
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.3,
                          ease: "easeOut",
                        }}
                        className="text-[#000] text-xl  mb-3 font-black text-center"
                      >
                        {item.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.3,
                          ease: "easeOut",
                        }}
                        className=" text-[#000]"
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

        {/* Technology Partners Section */}
        <section className="w-full px-5 md:px-0 relative py-24 bg-gradient-to-br from-[#2C3E50] to-[#1A1A2E] text-white overflow-hidden">
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 -z-10">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-[#F2662C] blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-[#BF8C60] blur-3xl"></div>
          </div>

          {/* Dotted pattern background */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 -z-5">
            <div className="w-full h-full bg-[radial-gradient(circle,_#ffffff_1px,_transparent_1px)] bg-[length:20px_20px]"></div>
          </div>

          {/* Main content */}
          <div className="max-w-[1400px] mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <div className="flex flex-col items-center text-center">
                <h2 className="text-4xl md:text-5xl font-bold mb-3 inline-block">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#F2662C] to-[#BF8C60]">
                    Technology Partners
                  </span>
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-[#F2662C] to-[#BF8C60] rounded-full mb-6"></div>
                <p className="text-lg text-gray-300 max-w-2xl">
                  Leveraging cutting-edge tools and technologies to deliver
                  exceptional solutions
                </p>
              </div>
            </motion.div>

            {/* Partner logos carousel */}
            <div className="lg:flex hidden gap-5">
              {techPartners.map((item) => (
                <div
                  className="bg-white backdrop-blur-md rounded-xl p-6 h- autoflex items-center justify-center transition-all duration-300 border border-white/5 hover:border-[#F2662C]/30"
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 20px 25px -5px rgba(242, 102, 44, 0.1), 0 10px 10px -5px rgba(242, 102, 44, 0.04)",
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full max-h-32 object-contain filter drop-shadow-lg"
                  />
                </div>
              ))}
            </div>
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
                  spaceBetween={40}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  navigation={{
                    prevEl: ".prev-tech-partner",
                    nextEl: ".next-tech-partner",
                  }}
                  onSwiper={(swiper) => {
                    setTimeout(() => {
                      if (
                        navigationPrevRef.current &&
                        navigationNextRef.current
                      ) {
                        swiper.navigation.prevEl = navigationPrevRef.current;
                        swiper.navigation.nextEl = navigationNextRef.current;
                        swiper.navigation.init();
                        swiper.navigation.update();
                      }
                    });
                  }}
                  breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 6 },
                    1280: { slidesPerView: 8 },
                  }}
                  className="py-10"
                >
                  {techPartners.map((partner, index) => (
                    <SwiperSlide key={index}>
                      <motion.div
                        className="bg-white backdrop-blur-md rounded-xl p-6 h-48 flex items-center justify-center transition-all duration-300 border border-white/5 hover:border-[#F2662C]/30"
                        whileHover={{
                          y: -10,
                          boxShadow:
                            "0 20px 25px -5px rgba(242, 102, 44, 0.1), 0 10px 10px -5px rgba(242, 102, 44, 0.04)",
                        }}
                      >
                        <img
                          src={partner.img}
                          alt={partner.name}
                          className="w-full max-h-32 object-contain filter drop-shadow-lg"
                        />
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom navigation buttons */}
                <div className="flex justify-center gap-8 mt-8">
                  <button
                    ref={navigationPrevRef}
                    className="prev-tech-partner w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#F2662C] transition-all duration-300"
                    aria-label="Previous slide"
                  >
                    <ChevronLeft size={24} />
                  </button>
                  <button
                    ref={navigationNextRef}
                    className="next-tech-partner w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-[#F2662C] transition-all duration-300"
                    aria-label="Next slide"
                  >
                    <ChevronRight size={24} />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <div className="w-full relative py-20">
          <section className="max-w-[1200px] w-full mx-auto px-4">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-[#352317] text-[30px] md:text-[50px]  text-center mb-5"
            >
              Why Choose Us?
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-center max-w-[900px] mx-auto text-[#000]  mb-12"
            >
              We offer innovative, scalable IT solutions tailored for
              healthcare, education, and business sectors. Our user-friendly
              platforms and dedicated support ensure seamless operations and
              lasting success.
            </motion.div>

            {/* Two-Column Layout with Rows */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
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
                  <div className="mr-4 mt-1">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#ffdd9e] to-[#ffffff80] flex items-center justify-center shadow-lg">
                      <span className="text-lg font-bold text-[#000]">
                        {index + 1}
                      </span>
                    </div>
                    <div className="absolute top-14 left-7 w-[1px] h-16 bg-gradient-to-b from-[#ffdd9e] to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold  text-[#000] mb-3">
                      {item.titile}
                    </h3>

                    <p className="text-[#000] text-base leading-relaxed">
                      {item.description}
                    </p>

                    {/* Decorative Accent */}
                    <div className="w-16 h-1 bg-gradient-to-r from-[#ffdd9e] to-transparent mt-4"></div>
                  </div>

                  {/* Background Glow */}
                  <div className="absolute -z-10 top-0 left-0 w-14 h-14 bg-[#ffdd9e] blur-2xl opacity-20"></div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <section className="w-full bg-[#fff] py-10">
        <Footer />
      </section>
    </>
  );
};

export default MobileApp;
