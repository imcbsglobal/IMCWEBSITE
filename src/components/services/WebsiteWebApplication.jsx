import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Footer from "../Footer";
import websiteandweb from "../../assets/webs.png";
import website from "../../assets/websiteslide.jpeg";
import website1 from "../../assets/websiteslide1.jpg";
import website2 from "../../assets/websiteslide2.jpg";
import website3 from "../../assets/websiteslide3.jpg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import darkGradient from "../../assets/darkGradient.jpg";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";
// Import Swiper components correctly
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // Added navigation CSS
// Import required modules
import { Autoplay, Navigation } from "swiper/modules";
import photoshop from "../../assets/photoshop.png";
import sap from "../../assets/SAP.png";
import firebase from "../../assets/firebase.png";
import react from "../../assets/react.png";
import github from "../../assets/github.png";
import aws from "../../assets/aws.png";
import adobexd from "../../assets/adobexd.png";
import illustrator from "../../assets/illustrator.png";
import figma from "../../assets/Figma.png";
import flutter from "../../assets/flutter.png";
import python from "../../assets/python.png";
import hostinger from "../../assets/hostinger.png";
import pgadmin from "../../assets/pgadmin.png";
import appeon from "../../assets/APPEON.png";

const WebsiteWebApplication = () => {
  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  const WebData = [
    {
      title: "Responsive Web Design",
      description:
        "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops.",
    },
    {
      title: "Interactive Web Designing",
      description:
        "We believe that websites should be more than just pretty pictures - it should engage and delight your audience. Our interactive web design services focus on creating memorable user experiences that keep visitors engaged and coming back for more",
    },
    {
      title: "E-commerce Website Development",
      description:
        "Our e-commerce solutions help businesses of all sizes sell their products and services online. We'll design and develop an online store that's tailored to your needs and easy for customers to use, with features like secure payment processing and inventory management.",
    },
    {
      title: "Search Engine Optimization",
      description:
        "Search engine optimization (SEO) is critical for improving your website's visibility and ranking on search engine results pages (SERPs). Our SEO services help you attract more organic traffic to your website and improve your overall online presence.",
    },
    {
      title: "Content Management System",
      description:
        "Managing website content can be a hassle, but with our custom CMS solutions, it doesn't have to be. We'll design and develop a CMS that makes it easy for you to add, edit, and publish content on your website. B2B platform",
    },
    {
      title: "Client Portals",
      description:
        "Give your customers secure, personalized access to their data, services, and communication. We create intuitive client portals that improve transparency, build trust, and enhance overall user experience.",
    },
    {
      title: "HR / CR Solutions",
      description:
        "We develop integrated systems to manage employee operations and customer relationships efficiently. Our tailored solutions help streamline recruitment, payroll, and customer engagement—enhancing productivity and satisfaction across your business.",
    },
    {
      title: "Backend Solutions",
      description:
        "We understand that behind every great website is a powerful backend infrastructure. Our backend solutions ensure that your website's backend is robust, secure, and scalable, with features like database management and server optimization.",
    },
    {
      title: "Corporate Websites",
      description:
        "A professional and engaging online presence is crucial for businesses to stand out in a crowded market. Our corporate website designing services help you create a website that reflects your brand's personality, values, and goals.",
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

  const ChooseUsList = [
    {
      titile: "Customer-Centric Approach",
      description:
        "Our solutions are tailored to meet client needs, ensuring personalized support and ongoing enhancements.",
    },
    {
      titile: "Innovative IT Solutions",
      description:
        "Our cutting-edge software solutions empower hospitals, pharmacies, schools, and businesses with seamless digital management.",
    },
    {
      titile: "Customizable & Scalable Platforms",
      description:
        "Every institution is unique — that's why our software adapts to your specific needs, whether it's healthcare, education, or retail.",
    },
    {
      titile: "Exceptional Support & Maintenance",
      description:
        "Our dedicated customer support team ensures smooth software implementation and continued assistance.",
    },
    {
      titile: "Data Security & Compliance",
      description:
        "Built with robust security features to protect sensitive data and maintain industry compliance.",
    },
    {
      titile: "Cost-Effective Solutions",
      description:
        "Affordable options tailored to fit businesses of every size without compromising quality.",
    },
    {
      titile: "User-Friendly Interfaces",
      description:
        "Designed with simplicity and efficiency in mind, our platforms provide intuitive experiences for every user.",
    },
    {
      titile: "End-to-End Solutions",
      description:
        "From initial setup to post-implementation support, we provide comprehensive services for seamless operations.",
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
        "In the planning phase, we create a sitemap to organise website content and develop wireframes to outline the website's structure and layout. We define the website's visual identity, including the colour palette and typography.",
      img: "img",
    },
    {
      titile: "Design Phase",
      description:
        "The design phase involves creating mockups and prototypes of the website design, based on the wireframes and visual identity defined in the planning phase. We refine the design based on feedback from stakeholders and obtain final approval of the website design.",
      img: "img",
    },
    {
      titile: "Development Phase",
      description:
        "In the development phase, our team of developers code the website using HTML, CSS, and JavaScript. We implement the content management system (CMS) and database, and conduct rigorous testing to ensure the website is functional and user-friendly.",
      img: "img",
    },
    {
      titile: "Launch Phase",
      description:
        "Once the website is complete, we deploy it on the hosting server, conduct final testing and debugging, and launch the website. We also provide maintenance and support services to ensure the website remains secure and functional.",
      img: "img",
    },
    {
      titile: "Maintenance Phase",
      description:
        "In the maintenance phase, we provide ongoing support and maintenance services to ensure the website remains secure and up-to-date. We perform regular updates to the website's content, plugins, and security features, and conduct regular backups to ensure data is protected.",
      img: "img",
    },
  ];

  const titles = ["WEBSITE", "WEB APPLICATION", "E-COMMERCE", "INTEGRATIONS"];
  const images = [website, website1, website2, website3];
  
  // Create navigation references
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <>
      <div className="flex flex-col justify-center items-center overflow-hidden relative bg-[#fff]">
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

<section className="w-full relative px-4 pb-20 pt-32">
  <div className="flex flex-col max-w-[1400px] mx-auto justify-center items-center gap-8">
    
    {/* Main Content and Image Container */}
<div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto justify-center items-center gap-6 sm:gap-8 lg:gap-12">
        
        {/* Left Side - Main Content */}
        <div className="flex-1 flex flex-col justify-center items-start gap-4 sm:gap-6 lg:gap-8 order-2 lg:order-1">
          {/* Main Heading and Description */}
          <div className="text-left w-full">
            <h3 className="text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl  mb-4 sm:mb-6 leading-tight">
              COMPLETE WEB SOLUTIONS
            </h3>
            <p className="text-black text-base sm:text-lg lg:text-xl max-w-full lg:max-w-[600px] mb-6 sm:mb-8 leading-relaxed">
              We create modern, responsive websites tailored to your business needs. From design to deployment, our web development services help you build a strong online presence
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
                src={websiteandweb}
                alt="Modern web development and website design showcase"
                className="w-full h-full object-cover rounded-2xl sm:rounded-3xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
      </div>

    
  </div>
</section>

        <div className="w-full relative pt-10 pb-10">
          <section className="max-w-[1400px] mx-auto w-full px-4">
            <div className="flex flex-col gap-5 mb-10 text-center md:text-left">
              <motion.div
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="text-[#000] text-[30px] md:text-[50px]  leading-tight text-center"
              >
                Best Web Design and Development
                <span className="block">Company INDIA</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                className="max-w-[900px] text-[#000]  mx-auto text-center"
              >
                As a leading web design and development company in Wayanad,
                Kerala, India, IMC Business Solutions specializes in creating
                custom web solutions that help businesses of all sizes succeed
                online. We understand that your website is your business's
                online face, and we work hard to make sure it makes a lasting
                impression on your visitors.
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
              {WebData.map((item, index) => (
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
                  className="w-full h-[250px] md:h-[300px] bg-gradient-to-r p-[1px] backdrop-blur-3xl rounded-3xl border border-[#F3762C]"
                >
                  <div className="rounded-3xl w-full h-full bg-[#ffffff13] p-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.3,
                        ease: "easeOut",
                      }}
                      className="text-[#000] text-lg md:text-xl  mb-3 font-black text-center pt-10"
                    >
                      {item.title}
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.3,
                        ease: "easeOut",
                      }}
                      className=" text-[#000] text-sm md:text-base"
                    >
                      {item.description}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </div>

<section className="w-full relative px-4 pb-20 pt-14">

        {/* Swiper Slider Section */}
    <div className="w-full mt-8">
      <Swiper
        slidesPerView={4} // default view
        spaceBetween={20}
        loop={true}
        breakpoints={{
          0: { slidesPerView: 2 }, // screens from 0px to 740px
          741: { slidesPerView: 3 },
          1000:{slidesPerView:4} ,// screens above 741px
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
              className="relative bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] backdrop-blur-3xl rounded-3xl h-[200px] md:h-[200px] w-full"
            >
              <div className="rounded-3xl w-full h-full bg-[#000] overflow-hidden relative">
                <img
                  src={image}
                  alt={`website${index}`}
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
    </section>
    

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
              {techPartners.map((item)=>(
                <div 
                  className="bg-white backdrop-blur-md rounded-xl p-6 h- autoflex items-center justify-center transition-all duration-300 border border-white/5 hover:border-[#F2662C]/30"
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 20px 25px -5px rgba(242, 102, 44, 0.1), 0 10px 10px -5px rgba(242, 102, 44, 0.04)",
                  }}
                >
                  <img src={item.img} alt={item.name} className="w-full max-h-32 object-contain filter drop-shadow-lg"/>
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
              className="text-[#000] text-[30px] md:text-[50px]  text-center mb-5"
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

export default WebsiteWebApplication;