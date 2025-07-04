import React, { useEffect, useRef, useState } from "react";
import blackshade from "../assets/whiteshade.png";
import banner from "../assets/banner.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import ChatBot from "./ChatBot";
import inv from "../assets/invorg.jpeg";

import { Swiper, SwiperSlide } from "swiper/react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { MdPhone } from "react-icons/md";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Gradient from "./Gradient";
import GradientText from "./GradientText";
import {
  motion,
  useAnimation,
  useTransform,
  useSpring,
  useScroll,
} from "framer-motion";
import GradientBg from "../assets/gradientBg.jpg";
import darkGradient from "../assets/darkGradient.jpg";

import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { Link } from "react-router-dom";
import { FaGlobe } from "react-icons/fa6";
import CircularText from "./CircularText";
import { useInView } from "react-intersection-observer";
import webdev from "../assets/webdev.jpeg";
import mobileapp from "../assets/app.png";
import consultancy from "../assets/consultancy.jpeg";
import digitalmarketing from "../assets/digital.jpeg";
import hardware from "../assets/hardware.jpeg";
import photoshop from "../assets/photoshop.png";
import sap from "../assets/SAP.png";
import firebase from "../assets/firebase.png";
import react from "../assets/react.png";
import github from "../assets/github.png";
import aws from "../assets/aws.png";
import adobexd from "../assets/adobexd.png";
import illustrator from "../assets/illustrator.png";
import figma from "../assets/Figma.png";
import flutter from "../assets/flutter.png";
import python from "../assets/python.png";
import hostinger from "../assets/hostinger.png";
import pgadmin from "../assets/pgadmin.png";
import { RiWhatsappLine } from "react-icons/ri";
import banners from "../assets/banner2.jpg";
import appeon from "../assets/APPEON.png";
import CountUp from "./CountUp";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MdOutlineArrowBack, MdOutlineArrowForward } from "react-icons/md";
import homebanner from "../assets/bp2.jpg";
import aboutmain from "../assets/newhomebanner.jpeg";
import { IoCloseSharp } from "react-icons/io5";

// import { Autoplay } from 'swiper/modules';
const Home = () => {
  pgadmin;
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

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Text animations (bottom to top reveal)
  const titleOpacity = useTransform(smoothProgress, [0, 0.25], [0, 1]);
  const titleY = useTransform(smoothProgress, [0, 0.25], [50, 0]);
  const titleBlur = useTransform(smoothProgress, [0.6, 0.8], [0, 8]);

  const paragraphOpacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);
  const paragraphY = useTransform(smoothProgress, [0.2, 0.4], [50, 0]);
  const paragraphBlur = useTransform(smoothProgress, [0.7, 0.9], [0, 5]);

  // Banner image animations
  const imageScale = useTransform(smoothProgress, [0.4, 0.6], [0.8, 1]);
  const imageOpacity = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);
  const imageRotateX = useTransform(smoothProgress, [0.4, 0.6], [10, 0]);
  const imageRotateY = useTransform(smoothProgress, [0.4, 0.6], [5, 0]);
  const imagePerspective = useTransform(
    smoothProgress,
    [0.4, 0.6],
    [800, 1200]
  );

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
    message: "",
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const softwareList = [
    {
      no: "01",
      name: "ERP Software",
      img: inv,
      title: "Streamline Your Business Operations",
      section: "ERP SOFTWARE",
      para: "Enhance productivity with a powerful ERP system that integrates finance, HR, sales, and inventory. Automate processes, reduce costs, and gain real-time insights for smarter decision-making.",
      link: "/erpsoftware",
    },

    {
      no: "02",
      name: "Website Development",
      img: webdev,
      title: "Building Engaging Digital Experiences",
      section: "Website Development",
      para: "Crafting responsive, high-performance websites that enhance user engagement, strengthen brand presence, and drive business growth.",
      link: "/websiteandWebApplications",
    },

    {
      no: "03",
      name: "Mobile App Development",
      img: mobileapp,
      title: "Innovative And Scalable Mobile Solutions",
      section: "App Development",
      para: "Creating high-performance mobile applications that enhance user engagement, improve accessibility, and drive business growth in a digital-first world.",
      link: "/mobileApp",
    },

    {
      no: "04",
      name: "Business Consultancy",
      img: consultancy,
      title: "Strategic Solutions for Business Growth",
      section: "Business Consultancy",
      para: "Empowering businesses with expert guidance, data-driven insights, and tailored strategies to enhance efficiency, maximize profitability, and drive sustainable growth.",
      link: "/businessBranding",
    },
    {
      no: "05",
      name: "Digital Marketing",
      img: digitalmarketing,
      title: "Boost Your Brands Online Presence",
      section: "Digital Marketing",
      para: "Harness the power of data-driven strategies, SEO, and social media to increase brand visibility, drive engagement, and accelerate business growth in the digital landscape.",
      link: "/digitalmarketing",
    },
    {
      no: "05",
      name: "Hardware Solutions",
      img: hardware,
      title: "Reliable IT Infrastructure and Support",
      section: "Hardware Solutions",
      para: "Providing high-quality hardware solutions, from servers to networking equipment, ensuring seamless performance, security, and scalability for your business needs.",
      link: "/hardwaresolutions",
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
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
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

  const [openChat, setOpenChat] = useState(false);

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        // Using a standard easing name instead of cubic-bezier
        ease: "easeOut",
      },
    }),
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const scale3d = {
    hidden: { opacity: 0, scale: 0.8, rotateY: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const statCounter = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: (custom) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: custom * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
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
    { name: "APPEON", img: appeon },
    { name: "Python", img: python },
    { name: "React", img: react },
    { name: "Flutter", img: flutter },
    { name: "SAP", img: sap },
    { name: "AWS", img: aws },
    { name: "GitHub", img: github },
    { name: "Hostinger", img: hostinger },
    { name: "PgAdmin", img: pgadmin },
    { name: "Firebase", img: firebase },
    { name: "Photoshop", img: photoshop },
    { name: "Illustrator", img: illustrator },
    { name: "Adobe XD", img: adobexd },
    { name: "Figma", img: figma },    
    
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
      transition: { duration: 0.5 },
    },
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
        duration: 0.6,
      },
    },
    exit: {
      y: -20,
      opacity: 0,
      filter: "blur(5px)",
      transition: { duration: 0.4 },
    },
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
        duration: 0.8,
      },
    },
    exit: {
      scale: 0.95,
      opacity: 0,
      filter: "blur(8px)",
      transition: { duration: 0.5 },
    },
  };

  const SectionRef = React.useRef(null);
  const isInView = useInView(SectionRef, { once: false, amount: 0.2 });

  const [currentIndex, setCurrentIndex] = useState(0);

  // const prevSlide = () => {
  //   setCurrentIndex((prev) =>
  //     prev === 0 ? softwareList.length - 1 : prev - 1
  //   );
  // };

  // const nextSlide = () => {
  //   setCurrentIndex((prev) =>
  //     prev === softwareList.length - 1 ? 0 : prev + 1
  //   );
  // };
  const [startIndex, setStartIndex] = useState(0);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/businessBranding#consultation-form"); // Redirect to page and section
  };
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

   const [isPopupVisible1, setIsPopupVisible1] = useState(false);
    const [formData1, setFormData1] = useState({
      firstName: "",
      secondName: "",
      phone: "",
      email: "",
      subject: "",
      content: "",
    });
    const [result1, setResult1] = useState("");
  
    const handleInputChange1 = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
  
    const onSubmit1 = async (event) => {
      event.preventDefault();
      setResult("Sending...");
  
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", "3e557a00-0b21-45e5-b274-496427ac9210");
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });
  
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formDataToSend,
        });
  
        const data = await response.json();
  
        if (data.success) {
          setResult("Form Submitted Successfully");
          setFormData({ firstName: "", secondName: "", phone: "", email: "", subject: "", content: "" });
          setTimeout(() => setIsPopupVisible(false), 3000);
        } else {
          setResult(data.message);
        }
      } catch (error) {
        console.error("Error submitting form", error);
        setResult("Error submitting form");
      }
    };
   const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? softwareList.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === softwareList.length - 1 ? 0 : prev + 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === softwareList.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, softwareList.length]);

  // Resume auto-play after 10 seconds of inactivity
  useEffect(() => {
    if (isAutoPlaying) return;

    const timeout = setTimeout(() => {
      setIsAutoPlaying(true);
    }, 10000);

    return () => clearTimeout(timeout);
  }, [isAutoPlaying, currentIndex]);

  
  return (
    <div data-scroll-container className="relative overflow-hidden ">
      <div className="fixed top-0 left-0 bottom-0 right-0 -z-10 opacity-40 m-0"></div>

      {/* Whatsapp */}
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

      <div className="fixed opacity-40 -z-10 top-0 left-0 right-0 bottom-0 "></div>

      {/* Banner */}
      <div className="flex flex-col justify-center items-center w-full bg-[#fff]">
        <section
          id="aboutid"
          className="w-full relative pb-10 pt-[100px] md:pt-[100px]"
          ref={sectionRef}
        >
          {/* <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10">
              <img src={darkGradient} alt="Background Gradient" />
            </div> */}
          <div className="w-full px-2 max-w-[1400px] mx-auto">
            <motion.div
              className="text-[#32251F]  text-[36px] md:text-[55px] mb-5 
                 font-bold text-center leading-tight overflow-hidden "
              style={{
                opacity: titleOpacity,
                y: titleY,
                filter: useTransform(titleBlur, (blur) => `blur(${blur}px)`),
              }}
            >
              <motion.span
                className="block  text-[20px] md:text-[40px]"
                style={{
                  opacity: useTransform(smoothProgress, [0.1, 0.3], [0, 1]),
                  y: useTransform(smoothProgress, [0.1, 0.3], [30, 0]),
                }}
              >
                Future - Ready IT Solutions by IMC Business Solutions
              </motion.span>
            </motion.div>

            <motion.div
              className="text-[#000] max-w-[700px] mb-1 mx-auto px-2  text-center overflow-hidden"
              style={{
                opacity: paragraphOpacity,
                y: paragraphY,
                filter: useTransform(
                  paragraphBlur,
                  (blur) => `blur(${blur}px)`
                ),
              }}
            >
              Crafting intelligent IT systems and web platforms for Tomorrow's Enterprise.
            </motion.div>
            <motion.div
              className="text-[#32251F]  text-[36px] md:text-[50px] mb-5 
                 font-bold text-center leading-tight overflow-hidden"
              style={{
                opacity: titleOpacity,
                y: titleY,
                filter: useTransform(titleBlur, (blur) => `blur(${blur}px)`),
              }}
            ></motion.div>
            <motion.div
              className="h-[600px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl"
              // style={{
              //   opacity: imageOpacity,
              //   scale: imageScale,
              //   perspective: imagePerspective,
              // }}
              // ref={imageRef}
            >
              <motion.div
                className="rounded-3xl w-full h-full bg-[#000] overflow-hidden"
                // style={{
                //   rotateX: imageRotateX,
                //   rotateY: imageRotateY,
                //   transformStyle: "preserve-3d",
                // }}
              >
                <motion.img
                  src={aboutmain}
                  alt="About IMC"
                  className="w-full h-full object-cover"
                  style={{
                    scale: useTransform(
                      smoothProgress,
                      [0.4, 0.7, 1],
                      [1, 1.05, 1.1]
                    ),
                  }}
                  whileInView={{
                    transition: {
                      duration: 1.5,
                      ease: "easeOut",
                    },
                  }}
                />
              </motion.div>
            </motion.div>
            <div className="  flex items-center justify-center pt-2">
              <motion.button
                className="px-6 py-3 text-sm sm:text-lg font-semibold text-[#000] border border-[#32251F] rounded-3xl  hover:bg-[#32251F] hover:text-white transition"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                onClick={() => setIsPopupVisible1(true)}
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </section>
      </div>

      {/* Stats section */}
      <section className="bg-[#71503a] w-full py-10 md:py-0">
        <div
          className="px-4 sm:px-6 md:px-8 text-white max-w-[1400px] mx-auto"
          ref={statsRef}
        >
          <motion.section
            className="w-full max-w-[1400px] mx-auto rounded-3xl bg-gradient-to-r p-[1px]"
            initial="hidden"
            animate={statsInView ? "visible" : "hidden"}
            variants={fadeInUp}
          >
            <motion.div
              className="rounded-3xl w-full px-4 sm:px-6 md:px-10 py-8 md:py-10"
              initial={{ opacity: 0 }}
              animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-8 md:mb-10 text-[28px] sm:text-[36px] md:text-[50px] text-center font-bold">
                Our Achievements at a Glance
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {/* Stats Item 1 */}
                <motion.div
                  className="flex flex-col sm:flex-row items-start gap-2 py-4"
                  custom={0}
                  animate={controls1}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="text-[50px] sm:text-[50px] md:text-[65px] font-bold leading-none pr-0 sm:pr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <CountUp from={0} to={15} duration={1} />+
                  </motion.div>
                  <motion.div
                    className="text-[18px] sm:text-[20px] md:text-[26px] leading-tight"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Years of <span className="block">Experience</span>
                  </motion.div>
                </motion.div>

                {/* Stats Item 2 */}
                <motion.div
                  className="flex flex-col sm:flex-row items-start gap-2 py-4"
                  custom={3}
                  animate={controls4}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="text-[50px] sm:text-[50px] md:text-[65px] font-bold leading-none pr-0 sm:pr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.9 }}
                  >
                    <CountUp from={0} to={50} duration={1} />+
                  </motion.div>
                  <motion.div
                    className="text-[18px] sm:text-[20px] md:text-[26px] leading-tight"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                  >
                    Products
                  </motion.div>
                </motion.div>

                {/* Stats Item 3 */}
                <motion.div
                  className="flex flex-col sm:flex-row items-start gap-2 py-4"
                  custom={4}
                  animate={controls1}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="text-[50px] sm:text-[50px] md:text-[65px] font-bold leading-none pr-0 sm:pr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <CountUp from={0} to={25} duration={1} />k
                  </motion.div>
                  <motion.div
                    className="text-[18px] sm:text-[20px] md:text-[26px] leading-tight"
                    initial={{ opacity: 0 }}
                    animate={statsInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    Users <span className="block">Globally</span>
                  </motion.div>
                </motion.div>

                {/* Stats Item 4 */}
                <motion.div
                  className="flex flex-col sm:flex-row items-start gap-2 py-4"
                  custom={5}
                  animate={controls1}
                  initial="hidden"
                  variants={statCounter}
                >
                  <motion.div
                    className="text-[50px] sm:text-[50px] md:text-[65px] font-bold leading-none pr-0 sm:pr-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      statsInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <CountUp from={0} to={7} duration={1} />+
                  </motion.div>
                  <motion.div
                    className="text-[18px] sm:text-[20px] md:text-[26px] leading-tight"
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

      {/* Solutions */}
      <section className="bg-[#fff0] relative flex flex-col items-center justify-center px-4 py-12 md:pt-24 overflow-hidden">
      <motion.div
        className="text-center mb-6 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#32251F] mb-2">
          All-In-One IT Support For Your Business
        </h2>
        <div className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
        <p className="text-base md:text-lg text-[#000] mt-2 max-w-3xl mx-auto">
          Discover Smart Solutions To Make Your Business run Smoother and Faster
        </p>
      </motion.div>

      <motion.div
        className="relative w-full max-w-[1200px] mx-auto px-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.10 }}
      >
        {/* Custom previous button */}
        <button 
          onClick={prevSlide}
          className="custom-swiper-button-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center  rounded-full shadow-md text-[#32251F] hover:bg-[#fcf3e1] transition-colors"
        >
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

        <div className="w-full max-w-6xl mx-auto p-4 bg-white">
          <div className="h-[450px] md:h-[450px] rounded-2xl overflow-hidden  relative">
            {/* Slider container */}
            <div 
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
{softwareList.map((software, index) => (
  <div key={index} className="relative w-full h-full flex-shrink-0">
    <motion.div
      className="flex h-full relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.10 }}
    >
      {/* Left side - Image (larger and behind) */}
      <div className="relative overflow-hidden z-10 w-[700px]" style={{ width: 'calc(50% + 30px)', height: 'calc(100% + 60px)' }}>
        <img
          src={software.img}
          alt={software.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20"></div>
      </div>
      
      {/* Right side - Content (smaller, overlapping) */}
      <motion.div
        className="bg-white flex flex-col justify-center px-8 md:px-12 py-8 -ml-24 z-20 relative shadow-lg mt-7"
        style={{ width: 'calc(50% - 30px)', height: 'calc(100% - 60px)' }}
        initial={{ x: 50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="max-w-lg">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {software.name}
          </motion.h2>
          
          <motion.p 
            className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {software.para}
          </motion.p>
          
          {/* <motion.button
            className="bg-[#32251F] hover:bg-[#BF8C60] text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Read more
          </motion.button> */}
        </div>
      </motion.div>
    </motion.div>
  </div>
))}
            </div>
          </div>
        </div>

        {/* Custom next button */}
        <button 
          onClick={nextSlide}
          className="custom-swiper-button-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-full shadow-md text-[#32251F] hover:bg-[#fcf3e1] transition-colors"
        >
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
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-[#32251F]' : 'bg-gray-300'
            } hover:bg-[#BF8C60] focus:bg-[#32251F]`}
            onClick={() => goToSlide(index)}
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
          <h2 className="text-4xl md:text-5xl font-bold leading-normal mb-2 ">
            Our Trusted Tech Allies
          </h2>
          <div className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
          <p className="text-lg text-[#fff] mt-3 ">
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
                  className="relative flex flex-col items-center p-5 rounded-lg hover:scale-105 transition-transform bg-[#fff] backdrop-blur-sm"
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
      <section className="relative py-20 bg-[#fff]">
        {/* <div className="absolute top-0 bottom-0 left-0 right-0 w-full -z-10">
          <img
            src="https://img.freepik.com/free-photo/abstract-textured-backgound_1258-30471.jpg?uid=R125770999&ga=GA1.1.845910522.1736145162&semt=ais_hybrid"
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10  text-[36px] md:text-[50px] text-[#32251F] text-center ">
            Words from Our Valued Clients
          </div>
          <div className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
          <Testimonials />
        </div>
      </section>

      {/* contact */}
      <section className="w-full px-5 relative bg-[#fff] pt-10">
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
        <div className="w-full max-w-[1400px] mx-auto border-b border-[#00000069]">
          {/* Heading Section */}
          <div className="flex flex-col md:flex-row justify-between items-start w-full mb-10 gap-5 md:gap-10">
            <div className="md:w-[60%] flex flex-col gap-4">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[#000] text-[36px] font-bold md:text-[50px]  leading-tight "
              >
                Modern Tools, Smart Solutions
                <span className="block">Better Results</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-[#000]  text-base md:text-lg"
              >
                Get in touch with us! Whether you have questions, need support,
                or want to learn more about our services, we're here to assist
                you. 
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
          <div className="flex flex-col-reverse md:flex-row justify-start items-start gap-10 w-full ">
            {/* Contact Details Section */}
            <div className="w-full md:w-[50%]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex"
              >
                {/* <div className="bg-gradient-to-r p-[1px] backdrop-blur-3xl rounded-3xl">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => (window.location.href = "tel:+917593820007")}
                    className="text-[#fff] w-full h-full bg-[#352317c3] backdrop-blur-sm text-xl md:text-3xl px-8 py-3 rounded-3xl border  hover:bg-gray-700"
                  >
                    Contact Us
                  </motion.button>
                </div> */}
              </motion.div>
            </div>

            {/* Contact Form */}
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isPopupVisible1 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#32251fc8] p-6 rounded-lg w-[700px] h-auto shadow-lg"
          >
            <button
              onClick={() => setIsPopupVisible1(false)}
              className="flex justify-end items-center w-full top-2 z-50 right-2 text-white"
            >
              <IoCloseSharp />
            </button>
            <h2 className="text-3xl font-semibold mb-4 text-center text-white">
              Get Started
            </h2>
            <form onSubmit={onSubmit1} className="space-y-3">
              <label className="text-white block">
                First Name:
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleInputChange1}
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </label>

              <label className="text-white block">
                Second Name:
                <input
                  type="text"
                  name="secondName"
                  placeholder="Enter Second Name"
                  value={formData.secondName}
                  onChange={handleInputChange1}
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </label>

              <label className="text-white block">
                Phone Number:
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange1}
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </label>

              <label className="text-white block">
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange1}
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </label>

              <label className="text-white block">
                Subject:
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Subject"
                  value={formData.subject}
                  onChange={handleInputChange1}
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </label>

              <label className="text-white block">
                Message:
                <textarea
                  name="content"
                  placeholder="Enter your Message"
                  value={formData.content}
                  onChange={handleInputChange1}
                  required
                  className="w-full h-[100px] p-2 border rounded mt-1"
                ></textarea>
              </label>

              <button
                type="submit"
                className="w-full bg-[#f1d69e] text-black py-2 rounded hover:bg-[#000] hover:text-white mt-2"
              >
                Submit
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-2">{result}</p>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <section className="bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
