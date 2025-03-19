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
import GradientBg from "../assets/gradientbg.jpg"
import darkGradient from "../assets/darkgradient.jpg"
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
import figma from '../assets/figma.png'
import flutter from '../assets/flutter.png'
import python from '../assets/python.png'
import hostinger from '../assets/hostinger.png'
import pgadmin from '../assets/pgadmin.png'
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
      "title": "Boost Your Brand's Online Presence",
      "section": "Digital Marketing",
      "para": "Harness the power of data-driven strategies, SEO, and social media to increase brand visibility, drive engagement, and accelerate business growth in the digital landscape.",
      "link": "/digitalmarketing"
    },
    {
      "no": "05",
      "name": "Hardware Solutions",
      "img": hardware,
      "title": "Reliable IT Infrastructure & Support",
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


  return (
    <div data-scroll-container className="relative overflow-hidden ">
      <div className="fixed top-0 left-0 bottom-0 right-0 -z-10 opacity-40"></div>

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
          <img src={GradientBg} className="w-full h-full object-cover" />
        </div>
        {/* Video Background */}
        <div className="absolute z-40 h-screen w-full">
          <Gradient className="w-full h-screen" />
        </div>
        <div className="w-full  pt-10 md:pt-0 absolute px-2 md:px-10 h-full flex flex-col justify-center">
          <div className="flex flex-col gap-4 mb-2 md:mb-5 textGradient5">
            <div className="text-[#fff] md:flex text-4xl md:text-[40px] lg:text-7xl items-center gap-4 font-bold">
              <div className="flex items-center gap-4 overflow-hidden">
                <motion.span
                  initial="hidden"
                  animate="visible"
                  custom={0}
                  variants={textRevealVariants}
                >
                  Empower
                </motion.span>
                <motion.span
                  className="md:w-[120px] md:h-[50px] w-[150px] lg:h-[90px] lg:w-[150px] h-[60px] rounded-full bg-[#fff] overflow-hidden"
                  initial="hidden"
                  animate="visible"
                  custom={1}
                  variants={textRevealVariants}
                >
                  <img
                    src={bannert1}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.span>
              </div>
              <motion.span
                className="block lg:flex"
                initial="hidden"
                animate="visible"
                custom={2}
                variants={textRevealVariants}
              >
                innovation
              </motion.span>
            </div>

            <div className="md:flex text-[#fff] md:text-[40px] text-4xl lg:text-7xl gap-4 font-bold">
              <div className="flex items-center gap-4">
                <motion.span
                  className="md:w-[120px] md:h-[50px] w-[150px] lg:h-[90px] lg:w-[150px] h-[60px] rounded-full bg-[#fff] overflow-hidden"
                  initial="hidden"
                  animate="visible"
                  custom={3}
                  variants={textRevealVariants}
                >
                  <img
                    src={bannert2}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.span>
                <motion.span
                  initial="hidden"
                  animate="visible"
                  custom={4}
                  variants={textRevealVariants}
                >
                  to
                </motion.span>
              </div>
              <div className="flex items-center gap-4">
                <motion.span
                  initial="hidden"
                  animate="visible"
                  custom={5}
                  variants={textRevealVariants}
                >
                  redefine
                </motion.span>
                <motion.span
                  className="w-[120px] h-[60px] md:w-[120px] md:h-[60px] lg:h-[90px] lg:w-[150px] rounded-full bg-[#fff] overflow-hidden"
                  initial="hidden"
                  animate="visible"
                  custom={6}
                  variants={textRevealVariants}
                >
                  <img
                    src={bannert3}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </motion.span>
              </div>
            </div>

            <motion.div
              className="flex text-[#fff] md:text-[40px] mt-[-10px] md:mt-0 text-4xl lg:text-7xl font-bold"
              initial="hidden"
              animate="visible"
              custom={7}
              variants={textRevealVariants}
            >
              tomorrow
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:flex justify-between w-full">
            <motion.div
              className="text-[#fff] text-[12px] md:text-base max-w-[900px] w-full mb-3 md:mb-10 lg:mb-0 text-start lg:text-start"
              initial="hidden"
              animate="visible"
              custom={8}
              variants={textRevealVariants}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium molestiae nostrum repudiandae optio, repellat, laborum
              quaerat quam quidem illo, corporis suscipit dicta earum asperiores
              magni obcaecati commodi porro voluptates tenetur. Obcaecati
              voluptas, enim voluptatem voluptatibus earum repellendus, sapiente
              fugit maxime maiores inventore vel, alias aliquam ea? Quod
              similique commodi quis eius minima cum ex eos vero praesentium
              itaque. Molestiae, sed.
            </motion.div>

            <div className="flex gap-3 items-center relative z-50">
              <a href="https://imcportfolio.in/">
                <motion.div
                  className="relative flex items-center"
                  initial="hidden"
                  animate="visible"
                  custom={9}
                  variants={textRevealVariants}
                >
                  <GradientText
                    colors={[
                      "#F7F7F7",
                      "#D9DFC6",
                      "#FFB22C",
                      "#4079ff",
                      "#2D336B",
                    ]}
                    animationSpeed={3}
                    showBorder={true}
                    className="custom-class px-5 md:px-10 py-2 text-sm md:text-xl"
                  >
                    Portfolio
                  </GradientText>
                  <span className="text-[#fff] hidden md:flex absolute right-2 md:right-4">
                    <FaGlobe />
                  </span>
                </motion.div>
              </a>

              <motion.div
                initial="hidden"
                animate="visible"
                custom={10}
                variants={textRevealVariants}
              >
                <GradientText
                  colors={[
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                    "#4079ff",
                    "#40ffaa",
                  ]}
                  animationSpeed={3}
                  showBorder={true}
                  className="custom-class px-5 text-sm md:px-10 py-2 md:text-xl"
                >
                  Enquire !
                </GradientText>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto h-full px-4 md:px-6 flex items-center justify-center">
          <div className=""></div>
        </div>
      </section>

      {/* About */}
      <section className="w-full relative z-10 py-10">
        <div className="absolute top-0 bottom-0 right-0 left-0 -z-10 w-full">
          <motion.img
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1.5 }}
            src={GradientBg}
            alt=""
            className="w-full h-full object-cover"
          />
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
                    className="text-[38px] md:text-[50px] leading-[50px] textGradient4 text-[#fff] font-semibold"
                    variants={fadeInUp}
                    transition={{ delay: 0.2 }}
                  >
                    Know more about us
                  </motion.div>
                  <motion.div
                    className="textGradient5 text-[16px] md:text-[30px] font-bold text-[#fff]"
                    variants={fadeInUp}
                    transition={{ delay: 0.3 }}
                  >
                    Our Journey to Digital Excellence
                  </motion.div>
                </div>
                <motion.div
                  className="textGradient6 text-[#fff] leading-relaxed md:text-justify"
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

       {/* Stats section */}
       <div className="px-3 md:px-0" ref={statsRef}>
          <motion.section
            className="w-full max-w-[1400px] mx-auto rounded-3xl bg-gradient-to-r p-[1px]"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.div
              className="backdrop-blur-3xl bg-[#0000001a] rounded-3xl w-full px-10 py-10 md:px-0"
              initial={{ opacity: 0 }}
              animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 md:flex w-full justify-between h-full gap-6 px-3">
                <motion.div
                  className="flex flex-col items-center md:flex-row gap-2"
                  custom={0}
                  animate={controls1}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="md:text-[65px] text-[50px] textGradient font-black leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    15+
                  </motion.div>
                  <motion.div
                    className="leading-tight text-[20px] md:text-[30px] textGradient text-center md:text-left"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Years of <span className="block">Experience</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center md:flex-row gap-2"
                  custom={1}
                  animate={controls2}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="md:text-[65px] text-[50px] textGradient font-black leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    20+
                  </motion.div>
                  <motion.div
                    className="leading-tight text-[20px] md:text-[30px] textGradient text-center md:text-left"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    Skilled <span className="block">Professionals</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center md:flex-row gap-2"
                  custom={2}
                  animate={controls3}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="text-[45px] md:text-[65px] textGradient font-black leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    100%
                  </motion.div>
                  <motion.div
                    className="leading-tight text-[20px] md:text-[30px] textGradient text-center md:text-left"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    Customer <span className="block">Satisfaction</span>
                  </motion.div>
                </motion.div>

                <motion.div
                  className="flex flex-col items-center md:flex-row gap-2"
                  custom={3}
                  animate={controls4}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="text-[45px] md:text-[65px] textGradient font-black leading-none"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    1500+
                  </motion.div>
                  <motion.div
                    className="leading-tight text-[20px] md:text-[30px] textGradient text-center md:text-left"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Clients
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </section>

      {/* Count */}

      {/* Softwares */}
      <section className="px-3 md:px-0 relative py-20">
        <motion.div
          className="absolute top-0 bottom-0 right-0 left-0 w-full h-full -z-10"
          // initial={{ opacity: 0 }}
          // whileInView={{ opacity: 1 }}
          // exit={{ opacity: 0, filter: "blur(10px)" }}
          // transition={{ duration: 0.8 }}
          // viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src={darkGradient}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div>
          {/* Title Portion */}
          <div className="md:flex md:justify-between md:items-center md:gap-10 mb-10 max-w-[1400px] mx-auto">
            <motion.div
              className="text-[#fff] text-[36px] md:text-[50px] textGradient4 leading-tight md:w-[60%]"
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -20, filter: "blur(5px)" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Solutions
              <span className="block text-[26px] md:text-[40px]">
                What We Build for You
              </span>
            </motion.div>
            <motion.div
              className="text-[#fff] md:w-[40%] textGradient6"
              initial={{ opacity: 0, x: 30, rotateY: 5 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: -20, filter: "blur(5px)" }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Explore our suite of innovative solutions designed to streamline
              your business operations and enhance efficiency. From tailored
              enterprise applications to dynamic web platforms, we deliver
              technology that aligns with your unique goals.
            </motion.div>
          </div>
          {/* Software List */}
          <div>
            {softwareList.map((item, index) => (
              <motion.div
                key={index}
                className="border-b-2 border-[#ffffff] pb-5 pt-5"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30, filter: "blur(8px)" }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-10 max-w-[1400px] mx-auto">
                  <motion.div
                    className="flex flex-col gap-2 text-[#fff] p-16"
                    initial={{ opacity: 0, x: -40, rotateY: -10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: 20, filter: "blur(5px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.2 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.4 }}
                  >
                    {/* <div className=" italic">{item.no}</div> */}
                    <div className="text-3xl textGradient4">{item.name}</div>
                  </motion.div>
                  <motion.div
                    className="w-full h-[250px] rounded-3xl bg-[#ffffff5d] backdrop-blur-md border border-[#fff] overflow-hidden"
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      rotateX: 5,
                      rotateY: 5,
                      z: -100,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                      rotateX: 0,
                      rotateY: 0,
                      z: 0,
                    }}
                    whileHover={{
                      scale: 1.02,
                      rotateY: 2,
                      z: 20,
                      transition: { duration: 0.3 },
                    }}
                    exit={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
                    transition={{
                      duration: 0.8,
                      delay: 0.3 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.4 }}
                  >
                    <img
                      src={item.img}
                      alt="Descriptive image text"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <motion.div
                    className="pt-16"
                    initial={{ opacity: 0, x: 40, rotateY: 10 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    exit={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                    transition={{
                      duration: 0.7,
                      delay: 0.4 + index * 0.1,
                      ease: "easeOut",
                    }}
                    viewport={{ once: false, amount: 0.4 }}
                  >
                    <div className="textGradient5 mb-3 font-bold text-[#fff]">
                      {item.title}
                    </div>
                    <div className="flex gap-5 textGradient6">
                      <div className="text-[#fff]">{item.section}</div>
                      <div className="text-[#ffff]">{item.para}</div>
                    </div>
                    <motion.div
                      className="mt-5 flex justify-start items-center gap-2 text-[#fff]"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      whileHover={{ x: 5 }}
                      exit={{ opacity: 0, y: -10, filter: "blur(3px)" }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      viewport={{ once: false, amount: 0.8 }}
                    >
                      <Link
                        to={item.link}
                        className="flex items-center gap-2 hover:underline"
                      >
                        Learn More <MdOutlineArrowOutward />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* technology */}
      <section className="w-full px-5 md:px-0 relative py-20  text-white">
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
          <p className="text-lg text-gray-400 mt-3">
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
            modules={[Autoplay]}
            spaceBetween={30}
            slidesPerView={2}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
            className="w-full"
          >
            {techPartners.map((partner, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="relative flex flex-col items-center  p-5 rounded-lg hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={partner.img}
                    alt={partner.name}
                    className="w-[200px] h-[150px] object-contain "
                  />
                  {/* <p className="mt-3 text-lg font-semibold text-white drop-shadow-md">
                    {partner.name}
                  </p> */}
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20">
        <div className="absolute top-0 bottom-0 left-0 right-0 w-full -z-10">
          <img
            src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30471.jpg?uid=R125770999&ga=GA1.1.845910522.1736145162&semt=ais_hybrid"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10 textGradient4 text-[36px] md:text-[50px] text-[#fff] text-center">
            Words from Our Valued Clients
          </div>
          <Testimonials />
        </div>
      </section>

      <section className="w-full px-5 py-20 relative">
        <motion.div
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
        </motion.div>
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
                <div className="w-full grid grid-cols-2 gap-5 mb-3 textGradient6">
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
