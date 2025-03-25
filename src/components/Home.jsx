import React, { useEffect, useRef, useState } from "react";
import blackshade from "../assets/whiteshade.png";
import banner from "../assets/banner.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import ChatBot from "./ChatBot";
import inv from "../assets/invorg.jpeg";
import abouthome2 from "../assets/knowmoreabout.jpeg";
import hosopitality from "../assets/hospitality.jpg";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpg";
import service7 from "../assets/service7.jpg";
import service8 from "../assets/service8.jpg";
import service9 from "../assets/service9.jpg";
import service10 from "../assets/service10.jpg";
import service11 from "../assets/service12.jpg";
import service12 from "../assets/service11.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { MdPhone } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Gradient from "./Gradient";
import GradientText from "./GradientText";
import { motion, useAnimation } from "framer-motion"
import GradientBg from "../assets/gradientBg.jpg"
import darkGradient from "../assets/darkGradient.jpg"
import bannert1 from "../assets/bannert1.jpeg"
import bannert2 from "../assets/bannert2.jpeg"
import bannert3 from "../assets/bannert3.jpeg"
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import healthcare from "../assets/healthcare.jpg";
import restaurant from "../assets/restaurants.jpg";
import institution from "../assets/institution.jpg";
import hardwareicon from "../assets/hardware.png";
import expertteam from "../assets/expertteam.jpg";
import mobileexpertise from "../assets/mobileexpertise.png";
import userfriendly from "../assets/userfriendly.jpg";
import security from "../assets/security.png";
import uiux from "../assets/uiux.jpg"
import retailandwholesale from "../assets/retailandwholesale.jpg"
import pharmacies from "../assets/pharmacies.jpg"
import schoolcollege from "../assets/schoolcollege.jpg"
import hospitalandclinics from "../assets/hospitalandclinics.jpg"
import restaurants from "../assets/restaurant.jpg"
import bannerVideo from "../assets/bannervideo.mp4";
import ASCIIText from './ASCIIText';
import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa6";
import CircularText from "./CircularText";
import { useInView } from "react-intersection-observer";
import webdev from '../assets/webdev.jpeg'
import mobileapp from '../assets/mobile.jpeg'
import consultancy from '../assets/consultancy.jpeg'
import digitalmarketing from '../assets/digital.jpeg'
import hardware from '../assets/hardware.jpeg'
import photoshop from '../assets/photoshop.png'
import sap from '../assets/SAP.png'
import firebase from '../assets/firebase.png'
import react from '../assets/react.png'
import github from '../assets/github.png'
import aws from '../assets/aws.png'
import adobexd from '../assets/adobexd.png'
import illustrator from '../assets/illustrator.png'
import figma from '../assets/Figma.png'
import flutter from '../assets/flutter.png'
import python from '../assets/python.png'
import hostinger from '../assets/hostinger.png'
import pgadmin from '../assets/pgadmin.png'
import { RiWhatsappLine } from "react-icons/ri";
import banners from '../assets/banner2.jpg'
import appeon from '../assets/APPEON.png'
import CountUp from './CountUp'
import { ChevronLeft, ChevronRight } from "lucide-react";

import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
// import { Autoplay } from 'swiper/modules';
const Home = () => {pgadmin
  const canvasRef = useRef(null);
  const [result, setResult] = React.useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  // const dropdownMenus = {
    
  //   softwares: [
  //     { name: "Restaurants", path:"/software#restaurant" },
  //     { name: "Inventory Management", path:"/software#inventorymanagement" },
  //     { name: "Health Care Management", path:"/software#healthcaremanagement" },
      
  //     { name: "Hospitality", path:"/software#hospitality" },
  //     { name: "Institution Management",  path:"/software#institutionmanagement" },
  //   ]
  // };
  const swiperRef = useRef(null);
  const locoRef = useRef(null);
  useEffect(() => {
    if (!locoRef.current) return;

    const locoScroll = new LocomotiveScroll({
      el: locoRef.current,
      smooth: true,
      lerp: 0.1,
    });

    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);
  // const mainRef = useRef();
  const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: ""
    });

  useEffect(() => {
    // Ensure the container and its children are fully rendered
    if (!mainRef.current) return;

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: mainRef.current, // Reference to the scroll container
      smooth: true,
      lerp: 0.1,
    });

    // Cleanup Locomotive Scroll instance on unmount
    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const softwareList = [
    {
      "no": "01",
      "name": "ERP SOFTWARE",
      "img": inv,
      "title": "Streamline Your Business Operations",
      "section": "ERP SOFTWARE",
      "para": "Enhance productivity with a powerful ERP system that integrates finance, HR, sales, and inventory. Automate processes, reduce costs, and gain real-time insights for smarter decision-making.",
      "link": "/erpsoftware"
    },
    
    {
      "no": "02",
      "name": "Website Development",
      "img": webdev,
      "title": "Building Engaging Digital Experiences",
      "section": "Website Development",
      "para": "Crafting responsive, high-performance websites that enhance user engagement, strengthen brand presence, and drive business growth.",
      "link": "/websiteandWebApplications"
    },
    
    {
      "no": "03",
      "name": "Mobile App Development",
      "img": mobileapp,
      "title": "Innovative And Scalable Mobile Solutions",
      "section": "App Development",
      "para": "Creating high-performance mobile applications that enhance user engagement, improve accessibility, and drive business growth in a digital-first world.",
      "link": "/mobileApp" 
       },
    
    {
      "no": "04",
      "name": "Business Consultancy",
      "img": consultancy,
      "title": "Strategic Solutions for Business Growth",
      "section": "Business Consultancy",
      "para": "Empowering businesses with expert guidance, data-driven insights, and tailored strategies to enhance efficiency, maximize profitability, and drive sustainable growth.",
      "link": "/businessBranding"
    }
    ,
    {
      "no": "05",
      "name": "Digital Marketing",
      "img": digitalmarketing,
      "title": "Boost Your Brands Online Presence",
      "section": "Digital Marketing",
      "para": "Harness the power of data-driven strategies, SEO, and social media to increase brand visibility, drive engagement, and accelerate business growth in the digital landscape.",
      "link": "/digitalmarketing"
    },
    {
      "no": "05",
      "name": "Hardware Solutions",
      "img": hardware,
      "title": "Reliable IT Infrastructure and Support",
      "section": "Hardware Solutions",
      "para": "Providing high-quality hardware solutions, from servers to networking equipment, ensuring seamless performance, security, and scalability for your business needs.",
      "link": "/hardwaresolutions"
    }
    

  ];

  const services = [
    {
      title: "WEBSITE AND WEB APPLICATION DEVELOPMENT",
      description:
        "We specialize in creating modern, responsive websites and powerful web applications tailored to your business needs. Our solutions blend seamless user experiences with cutting-edge technologies to help you engage customers, streamline operations, and drive growth. From design to deployment, we bring your ideas to life online.",
      img1: service1,
      img2: service2,
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      description:
        "We craft innovative and user-friendly mobile applications designed to meet your business goals. Our team specializes in building secure, scalable, and high-performance apps for iOS and Android platforms, ensuring a seamless experience for your users. From concept to launch, we deliver apps that drive engagement and success.",
      img1: service3,
      img2: service4,
    },
    {
      title: "DIGITAL MARKETING/SEO",
      description:
        "Boost your online presence and connect with your audience through strategic digital marketing and SEO services. We help drive organic traffic, enhance search engine rankings, and create targeted campaigns that deliver measurable results. From content creation to social media and paid ads, we fuel your brand’s digital growth.",
      img1: service5,
      img2: service6,
    },
    {
      title: "BRANDING ",
      description:
        "We help businesses build a strong and memorable identity. From logo design and brand strategy to visual elements and messaging, we craft cohesive branding solutions that resonate with your audience and reflect your values. Stand out, connect deeply, and leave a lasting impression.",
      img1: service7,
      img2: service8,
    },
    {
      title: "GRAPHICS AND CREATIVES",
      description:
        "We bring ideas to life with visually stunning designs and creative content. From eye-catching social media graphics to impactful marketing materials, our designs are crafted to captivate your audience and elevate your brand’s message. Let’s make your visuals unforgettable",
      img1: service9,
      img2: service10,
    },
    {
      title: "BUSINESS BRANDINGS",
      description:
        "We specialize in building a unique and powerful brand identity for businesses of all sizes. Our comprehensive branding services include logo design, brand positioning, messaging, and visual aesthetics that align with your vision. We help you create a brand that stands out, fosters trust, and connects with your target audience.",
      img1: service11,
      img2: service12,
    },
  ];


  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "3e557a00-0b21-45e5-b274-496427ac9210");
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
        setIsPopupVisible(true);
        setTimeout(() => setIsPopupVisible(false), 3000); // Hide popup after 3 seconds
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("Error submitting form");
    }
  };
 
  const mainRef = useRef();

  useEffect(() => {
    // Ensure the container and its children are fully rendered
    if (!mainRef.current) return;

    // Initialize Locomotive Scroll
    const locoScroll = new LocomotiveScroll({
      el: mainRef.current, // Reference to the scroll container
      smooth: true,
      lerp: 0.1,
    });

    // Cleanup Locomotive Scroll instance on unmount
    return () => {
      if (locoScroll) locoScroll.destroy();
    };
  }, []);

useEffect(() => {
  // Ensure the container and its children are fully rendered
  if (!mainRef.current) return;

  // Initialize Locomotive Scroll
  const locoScroll = new LocomotiveScroll({
    el: mainRef.current, // Reference to the scroll container
    smooth: true,
    lerp: 0.1,
  });

  // Cleanup Locomotive Scroll instance on unmount
  return () => {
    if (locoScroll) locoScroll.destroy();
  };
}, []);


   const [openChat, setOpenChat] = useState(false)

   const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        // Using a standard easing name instead of cubic-bezier
        ease: "easeOut"
      }
    })
  };

  const abouthome = abouthome2;

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  
  const fadeInRight = {
    hidden: { opacity: 0, x: -60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const fadeInLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const scale3d = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };
  
  const statCounter = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (custom) => ({ 
      opacity: 1, 
      scale: 1,
      transition: { 
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // Main content section animation
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  // Image animation
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  // Stats section animation
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  // Stats numbers animation controls
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  
  useEffect(() => {
    if (statsInView) {
      controls1.start("visible");
      controls2.start("visible");
      controls3.start("visible");
      controls4.start("visible");
    }
  }, [statsInView, controls1, controls2, controls3, controls4]);

  const techPartners = [
    { name: "Photoshop", img: photoshop },
    { name: "Illustrator", img: illustrator },
    { name: "Adobe XD", img: adobexd },
    { name: "Figma", img: figma },
    { name: "React", img: react },
    { name: "Python", img: python },
    { name: "Flutter", img: flutter },
    { name: "Hostinger", img: hostinger },
    { name: "AWS", img: aws },
    { name: "GitHub", img: github },
    { name: "PgAdmin", img: pgadmin },
    { name: "Firebase", img: firebase },
    { name: "SAP", img: sap },
    {name:"APPEON", img:appeon},
  ];
  // Service

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      filter: "blur(10px)",
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      scale: 0.95,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 15,
        duration: 0.6
      }
    },
    exit: {
      y: -20,
      opacity: 0,
      filter: "blur(5px)",
      transition: { duration: 0.4 }
    }
  };

  const imageVariants = {
    hidden: { 
      scale: 0.9, 
      opacity: 0,
      rotateX: 5,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 20,
        duration: 0.8
      }
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      filter: "blur(8px)",
      transition: { duration: 0.5 }
    }
  };

  const SectionRef = React.useRef(null);
  const isInView = useInView(SectionRef, { once: false, amount: 0.2 });

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? softwareList.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === softwareList.length - 1 ? 0 : prev + 1));
  };
  const [startIndex, setStartIndex] = useState(0);

  return (
    <div data-scroll-container className="relative overflow-hidden ">
      <div className="fixed top-0 left-0 bottom-0 right-0 -z-10 opacity-40"></div>

      {/* Whatsapp */}
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
      <div className="fixed opacity-40 -z-10 top-0 left-0 right-0 bottom-0 "></div>

      {/* Banner */}
      <section className="relative h-screen flex flex-col justify-start items-center">
        <div className="w-full h-full object-cover absolute top-0 left-0 bottom-0 right-0">
          <img
            src={banners}
            className="w-full h-full object-cover"
            alt="Banner Image"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#352317] via-[#3523176f] to-transparent opacity-100"></div>
        </div>

        <div className="w-full h-full absolute flex flex-col items-center md:items-start justify-center text-center md:text-start px-4 md:pl-36">
          <motion.h1
            className="text-[#fff] text-4xl md:text-6xl lg:text-8xl font-bold mb-4 textGradient6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            IMC
          </motion.h1>
          <motion.p
            className="text-[#fff] text-sm md:text-lg max-w-2xl pb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Elevate your business with cutting-edge IT solutions. From Retail to
            Healthcare, Education, and Hospitality – IMC Business Solutions is
            here to transform your success.
          </motion.p>
          <div className=" flex gap-4">
            <motion.button
              className="px-6 py-3 text-sm md:text-lg font-semibold text-white border border-orange-400 rounded-3xl shadow-lg hover:opacity-80 transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Discover More
            </motion.button>
            <a href="/contact">
              <motion.button
                className="px-6 py-3 text-sm md:text-lg font-semibold text-white border border-orange-400 rounded-3xl shadow-lg hover:opacity-80 transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Contact Now
              </motion.button>
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="w-full relative z-10 py-10">
        <div className=" bg-[#f3e5c9] absolute top-0 bottom-0 right-0 left-0 -z-10 w-full">
          {/* <motion.img
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1.5 }}
            src={GradientBg}
            alt=""
            className="w-full h-full object-cover"
          /> */}
        </div>
        <div className="max-w-[1440px] mx-auto mb-10">
          <div className="md:flex md:justify-center md:items-center md:gap-10 w-full px-4">
            {/* left side content */}
            <motion.div
              className="md:w-[60%] py-5 flex flex-col gap-2"
              ref={contentRef}
              initial="hidden"
              animate={contentInView ? "visible" : "hidden"}
              variants={fadeInRight}
            >
              <div>
                <div className="flex flex-col gap-2 mb-5">
                  <motion.div
                    className="text-[38px] md:text-[50px] leading-[50px] textGradient4 text-[#32251F] font-semibold"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                  >
                    Know more about us
                  </motion.div>
                  <motion.div
                    className="textGradient5 text-[16px] md:text-[30px] font-bold text-[#2e1e14]"
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                  >
                    Our Journey to Digital Excellence
                  </motion.div>
                </div>
                <motion.div
                  className="textGradient6 text-[#000] leading-relaxed md:text-justify"
                  variants={fadeInUp}
                  transition={{ delay: 0.4 }}
                >
                  IMC Business Solutions is a leading software company in India
                  since 2017, offering a comprehensive management platform and a
                  wide range of IT solutions, including business software,
                  Android/iOS development, web development, hardware services,
                  and IT support.
                  <motion.span variants={fadeInUp} transition={{ delay: 0.5 }}>
                    Our primary mission is to bring RITS Software's innovative
                    products to global markets. As a professionally competent IT
                    firm, RITS Software blends expert software development with
                    a customer-focused management approach.{" "}
                  </motion.span>
                  <motion.span variants={fadeInUp} transition={{ delay: 0.6 }}>
                    {" "}
                    We also operate Sysmac, a dedicated division providing
                    hardware solutions and services to our clients.
                  </motion.span>
                  <motion.span variants={fadeInUp} transition={{ delay: 0.7 }}>
                    IMC delivers tailored software and technology solutions for
                    businesses in India and beyond. With over 1,200 happy
                    clients and 10+ branches across South India, we continue to
                    empower businesses with cutting-edge technology solutions.
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>

            {/* right side image */}
            <motion.div
              className="md:w-[40%] bg-[#000] h-[500px] rounded-md overflow-hidden"
              ref={imageRef}
              initial="hidden"
              animate={imageInView ? "visible" : "hidden"}
              variants={scale3d}
              style={{ perspective: "1000px" }}
            >
              <motion.img
                src={abouthome}
                alt=""
                className="h-full w-full object-cover"
                whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-[#fcf3e1] relative  flex flex-col items-center justify-center px-4 py-12 md:pt-24 overflow-hidden">
        <motion.div
          className="text-center mb-6 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#32251F] textGradient4">
            Comprehensive IT Solutions for Your Business
          </h2>
          <p className="text-base md:text-lg text-[#000] mt-2 textGradient6 max-w-3xl mx-auto">
            Explore our suite of innovative solutions designed to streamline
            your business operations and enhance efficiency.
          </p>
        </motion.div>

        <motion.div
          className="relative w-full max-w-[1400px] mx-auto px-4"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Custom previous button - hidden on mobile */}
          <button className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full shadow-md text-[#32251F] hover:bg-[#fcf3e1] transition-colors ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              prevEl: ".custom-swiper-button-prev",
              nextEl: ".custom-swiper-button-next",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            ref={swiperRef}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="h-[400px] md:h-[500px]"
          >
            {softwareList.map((software, index) => (
              <SwiperSlide key={index} className="relative w-full h-full p-3">
                <motion.div
                  className="relative h-full rounded-lg overflow-hidden"
                  whileHover={{
                    scale: 1.03,
                    transition: { duration: 0.3 },
                  }}
                >
                  <img
                    src={software.img}
                    alt={software.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 md:p-6 text-white text-center h-[150px] md:h-[200px] w-full"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <h2 className="text-xl md:text-2xl font-bold">
                      {software.name}
                    </h2>
                    <p className="text-sm md:text-md mt-2">{software.para}</p>
                  </motion.div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom next button - hidden on mobile */}
          <button className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full shadow-md text-[#32251F] hover:bg-[#fcf3e1] transition-colors ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </motion.div>

        {/* Pagination dots with animation */}
        <motion.div
          className="mt-6 md:mt-8 flex justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {softwareList.map((_, index) => (
            <motion.button
              key={index}
              className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-gray-300 hover:bg-[#32251F] focus:bg-[#32251F]"
              onClick={() => swiperRef.current.swiper.slideTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </section>

      {/* technology */}
      <section className="w-full px-5 md:px-0 relative py-20 text-white bg-[#352317]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10"
        >
          <img
            src={darkGradient}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold leading-normal textGradient4">
            Our Trusted Tech Allies
          </h2>
          <p className="text-lg text-[#fff] mt-3">
            Our solutions are powered by the latest tools and technologies.
          </p>
        </div>

        {/* Swiper for Partner Logos */}
        <motion.div
          className="max-w-[1400px] mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Swiper
            modules={[Autoplay, Navigation]} // Added Navigation module
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            navigation={{ nextEl: ".next-partner", prevEl: ".prev-partner" }} // Added navigation
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="w-full relative"
          >
            {techPartners.map((partner, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="relative flex flex-col items-center p-5 rounded-lg hover:scale-105 transition-transform bg-[#fcf3e1] backdrop-blur-sm"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="w-[200px] h-[150px] object-contain"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons - Visible on Mobile */}
          <div className="flex justify-between w-full px-5 mt-4 ">
            <button className="prev-partner p-2 rounded-full text-white hover:text-orange-300  transition-all">
              <ChevronLeft size={30} />
            </button>
            <button className="next-partner p-2 rounded-full text-white hover:text-orange-300 transition-all">
              <ChevronRight size={30} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 bg-[#fcf3e1]">
        {/* <div className="absolute top-0 bottom-0 left-0 right-0 w-full -z-10">
          <img
            src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30471.jpg?uid=R125770999&ga=GA1.1.845910522.1736145162&semt=ais_hybrid"
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 textGradient4 text-[36px] md:text-[50px] text-[#32251F] text-center">
            Words from Our Valued Clients
          </div>
          <Testimonials />
        </div>
      </section>

      {/* Stats section */}
      <section className="bg-[#f3e5c9] w-full">
        <div
          className="px-3 md:px-2 text-[#32251F] max-w-[1400px] mx-auto"
          ref={statsRef}
        >
          <motion.section
            className="w-full max-w-[1400px] mx-auto rounded-3xl bg-gradient-to-r p-[1px]"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.div
              className="backdrop-blur-3xl rounded-3xl w-full px-10 py-10 md:px-0"
              initial={{ opacity: 0 }}
              animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 w-full justify-between h-full gap-8 px-3">
                {/* Stats Item 1 */}
                <motion.div
                  className="flex flex-col items-start md:flex-row gap-2 py-5"
                  custom={0}
                  animate={controls1}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="md:text-[65px] text-[50px] textGradient font-black leading-none pr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <CountUp
                      from={0}
                      to={15}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </motion.div>
                  <motion.div
                    className="leading-tight text-[20px] md:text-[30px] textGradient text-left border-b-2 p-2 border-[#3523171d]"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Years of <span className="block">Experience</span>
                  </motion.div>
                </motion.div>

                {/* Stats Item 2 */}
                {/* <motion.div
                  className="flex flex-col items-start md:flex-row gap-2 py-5"
                  custom={1}
                  animate={controls2}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="md:text-[65px] text-[50px] textGradient font-black leading-none pr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                   <CountUp
                      from={0}
                      to={20}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </motion.div>
                  <motion.div
                    className="leading-tight text-[20px] md:text-[30px] textGradient text-left border-b-2 p-2 border-[#3523171d]"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Skilled <span className="block">Professionals</span>
                  </motion.div>
                </motion.div> */}

                {/* Stats Item 3 */}
                {/* <motion.div
                  className="flex flex-col items-start md:flex-row gap-2 py-5"
                  custom={2}
                  animate={controls3}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="text-[45px] md:text-[65px] textGradient font-black leading-none pr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <CountUp
                      from={0}
                      to={100}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />%
                  </motion.div>
                  <motion.div
                    className="leading-tight text-[20px] md:text-[30px] textGradient text-left border-b-2 p-2 border-[#3523171d]"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Customer <span className="block">Satisfaction</span>
                  </motion.div>
                </motion.div> */}

                {/* Stats Item 4 */}
                <motion.div
                  className="flex flex-col items-start md:flex-row gap-2 py-5"
                  custom={3}
                  animate={controls4}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="text-[45px] md:text-[65px] textGradient font-black leading-none pr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <CountUp
                      from={0}
                      to={50}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </motion.div>
                  <motion.div
                    className="leading-tight text-[20px] md:text-[30px] textGradient text-left border-b-2 p-2 border-[#3523171d]"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Products
                  </motion.div>
                </motion.div>

                {/* Stats Item 5 */}
                <motion.div
                  className="flex flex-col items-start md:flex-row gap-2 py-5"
                  custom={4}
                  animate={controls1}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="md:text-[65px] text-[50px] textGradient font-black leading-none pr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <CountUp
                      from={0}
                      to={18}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    k
                  </motion.div>
                  <motion.div
                    className="leading-tight text-[20px] md:text-[30px] textGradient text-left border-b-2 p-2 border-[#3523171d]"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Users <span className="block">Globally</span>
                  </motion.div>
                </motion.div>

                {/* Stats Item 6 */}
                <motion.div
                  className="flex flex-col items-start md:flex-row gap-2 py-5"
                  custom={5}
                  animate={controls1}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="md:text-[65px] text-[50px] textGradient font-black leading-none pr-4 md:pl-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <CountUp
                      from={0}
                      to={7}
                      separator=","
                      direction="up"
                      duration={1}
                      className="count-up-text"
                    />
                    +
                  </motion.div>
                  <motion.div
                    className="leading-tight text-[20px] md:text-[30px] textGradient text-left border-b-2 p-2 border-[#3523171d] md:pl-24"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Countries <span className="block">Served</span>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </section>

      {/* contact */}
      <section className="w-full px-5 py-20 relative bg-[#352317]">
        {/* <motion.div
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // transition={{ duration: 0.8 }}
          className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10"
        >
          <img
            src={darkGradient}
            alt=""
            className="h-full w-full object-cover"
          />
        </motion.div> */}
        <div className="w-full max-w-[1400px] mx-auto">
          {/* Heading Section */}
          <div className="flex flex-col md:flex-row justify-between items-start w-full mb-16 gap-5 md:gap-10">
            <div className="md:w-[60%] flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#fff] text-[36px] md:text-[50px] textGradient4 leading-tight"
              >
                Get in Touch and Lets
                <span className="block">Make It Happen</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#fff] textGradient6 text-base md:text-lg"
              >
                Get in touch with us! Whether you have questions, need support,
                or want to learn more about our services, we're here to assist
                you. Simply fill out the form below, and we'll respond promptly.
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="md:w-[50%]"
            >
              <CircularText
                text="IMC*BUSINESS*SOLUTIONS"
                onHover="speedUp"
                spinDuration={20}
                className="custom-class"
              />
            </motion.div>
          </div>

          {/* Contact Form Section */}
          <div className="flex flex-col-reverse md:flex-row justify-start items-start gap-10 w-full">
            {/* Contact Details Section */}
            <div className="w-full md:w-[50%]">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col gap-5 textGradient6 mb-10 text-lg md:text-xl"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="text-[#fff]"
                >
                  info@imcbsglobal.com
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="text-[#fff]"
                >
                  +91 75938 20007
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                  className="text-[#fff]"
                >
                  Palakkunnummal Building, Near Govt Ayurvedic Hospital Emily{" "}
                  <span className="block">
                    Kalpetta, Wayanad, Kerala – 673121
                  </span>
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex"
              >
                <div className="bg-gradient-to-r p-[1px] backdrop-blur-3xl rounded-3xl">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = "tel:+917593820007")}
                    className="text-[#fff] w-full h-full bg-[#00000020] backdrop-blur-sm text-xl md:text-3xl px-8 py-3 rounded-3xl border textGradient6 hover:bg-gray-700"
                  >
                    Contact Us
                  </motion.button>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="w-full md:w-[50%] flex flex-col gap-5"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="text-[#fff] textGradient6 text-xl md:text-2xl"
              >
                Here to bring your concept to life, manage your ongoing project,
                or expand your existing development team.
              </motion.div>
              <motion.form
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                onSubmit={onSubmit}
              >
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5 mb-3 textGradient6">
                  {/* Input fields with individual animations */}
                  {["firstName", "lastName", "email", "phone"].map(
                    (field, index) => (
                      <motion.input
                        key={field}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                        type={
                          field === "email"
                            ? "email"
                            : field === "phone"
                            ? "tel"
                            : "text"
                        }
                        name={field}
                        value={formData[field]}
                        onChange={handleInputChange}
                        placeholder={`${
                          field.charAt(0).toUpperCase() + field.slice(1)
                        }*`}
                        required
                        className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                      />
                    )
                  )}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                  className="w-full mb-3"
                >
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter Your Message"
                    required
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.2 }}
                  className="w-full"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full text-[#000] px-8 py-3 bg-[#fff] rounded-3xl textGradient6"
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </motion.form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
