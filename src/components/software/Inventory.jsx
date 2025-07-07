import React, { useEffect, useState,useRef  } from "react";
import inventory from "../../assets/inventoryimg.jpg";
import { TiTick } from "react-icons/ti";
import opt from "../../assets/optimization.png";
;
import multichanel from "../../assets/multichanel.png";
import analytics from "../../assets/analytics.png";
import Footer from ".././Footer";
import ecommerce from "../../assets/ecom.png";

import task from "../../assets/TASK11.png";
import icare from "../../assets/icarecopy.png";
import bcare from "../../assets/Bcare.png";

import { motion } from "framer-motion";
import { collection, getDocs, query, where } from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";
;
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination  } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import hypermarket from "../../assets/hypermarket.png";
import supermarket from "../../assets/supermarket.png";
import botique from "../../assets/botique.png";
import hardware from "../../assets/hardware1.png";
import footware from "../../assets/footware.png";
import textiles from "../../assets/textiles.png";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";
import datasecurity from "../../assets/datasecurity.png";
import inventory1 from "../../assets/inventory.png";
import trans from "../../assets/transcloud.png";
import deliverytrack from "../../assets/deliverytrack.png";
import taskpro from "../../assets/taskpro.png";
import hrpayroll from "../../assets/hr payroll.png";
import dg from "../../assets/digital payment.png";
import sms from "../../assets/whatsapp sms.png";
import offer from "../../assets/offer management.png";
import stock from "../../assets/dead stock.png";
import eway from "../../assets/e waytasklog.png";
import MultiStore from "../../assets/multistore.png";
import usercontrol from "../../assets/usercontrol.png";
import databack from "../../assets/data.png";
import crm from "../../assets/crm.png";
import ai from "../../assets/ai.png";
import tax from "../../assets/tax.png";
import mobile from "../../assets/mobile.png";
import homeAppliances from "../../assets/homeAppliances.png";
import autoMobile from "../../assets/autoMobile.png";
import tools from "../../assets/tools.png";
import agriFoods from "../../assets/agriFoods.png";
import spicesHandicrafts from "../../assets/spicesHandicrafts.png";
import bakery from "../../assets/bakery.png";
import foodProduction from "../../assets/foodProduction.png";
import agencies from "../../assets/agencies.png";
import parks from "../../assets/parks.png";
import giftsToys from "../../assets/giftsToys.png";
import force from "../../assets/force.png";
import language from "../../assets/language.png";
import wysi from "../../assets/wysi.png";
import event from "../../assets/event.png";
import acc from "../../assets/acc.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Autoplay  } from "swiper/modules";

import hyperone from "../../assets/hyperone.jpeg";
import danuve from "../../assets/danuve.png";
import geethas from "../../assets/geethas.png";
import ogusto from "../../assets/ogusto.png";
import tunes from "../../assets/tunes.png";
import globallpg from "../../assets/globallpg.png";
import globalglass from "../../assets/globalglass.png";
import kb from "../../assets/kb.png";
import nahdha from "../../assets/nahdha.png";
import shopmore from "../../assets/shopmore.jpg";
import wayanadfloat from "../../assets/wayanadfloat.png";
import peekay from "../../assets/peekay.png";
import sevenbridge from "../../assets/sevenbridge.png";
import panthallookaran from "../../assets/panthallookaran.png";
import marineworld from "../../assets/marineworld.png";
import fresh7 from "../../assets/7fresh.png";
import talal from "../../assets/talal.jpg";
import hypercity from "../../assets/hypercity.jpg";
import freshday from "../../assets/freshday.png";
import { register } from 'swiper/element/bundle';
import bigData from "../../assets/bigdata1.png"

import eway1 from "../../assets/e waytask.png";
import "locomotive-scroll/dist/locomotive-scroll.css";


import taskPos from '../../assets/TASK p.png'
import floorTask from '../../assets/TASKf.png'
import pyramid from '../../assets/pyramid.png'

import magic from '../../assets/magic pda.png'
import ccare from '../../assets/c care.png'
import cloud from '../../assets/cloud.png'
import magicpda from '../../assets/magicpda.png'
import taskpro1 from '../../assets/Task Pro.png'
import tasktext from '../../assets/taskcopyorg.png'
import pro from '../../assets/productivity.png'


import { useNavigate } from 'react-router-dom';
const Inventory = () => {
  const [productVideos, setProductVideos] = useState([]);
  const [productImages, setProductImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [openChat, setOpenChat] = useState(false);
  const swiperRef = useRef(null);
  const navigate = useNavigate();
  const openFullScreen = (image) => {
    setSelectedImage(image);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };
  const features = [
    {
      image: ecommerce,
      title: "E Commerce",
      description:
        "Seamless online shopping solutions for your business growth.",
    },
    {
      image: eway,
      title: "Eway Task",
      description:
        "Empower your outdoor sales with mobile van sales applications",
    },
    {
      image: trans,
      title: "Trans cloud",
      description:
        "Integrated data management for smooth business operations for Multi Branch Business",
    },
    {
      image: deliverytrack,
      title: "Delivery Tracking",
      description: "Real time tracking for efficient delivery management",
    },
    {
      image: taskpro,
      title: "TASK Pro",
      description:
        "Seamless and Real time Business Tracking Application for Business Owners",
    },
    {
      image: hrpayroll,
      title: "HR & Payroll",
      description: "Employee management with Payroll and Attendance System.",
    },
    {
      image: dg,
      title: "Digital Payment Integrations",
      description:
        "Secure and seamless digital transactions for your business.",
    },
    {
      image: sms,
      title: "WhatsApp/ SMS Integrations",
      description:
        "Instant communication with customers through WhatsApp and SMS",
    },
    {
      image: offer,
      title: "Offer Management",
      description: "Multiple Offer Management to Enhance Business Volume.",
    },
    {
      image: stock,
      title: "Dead Stock Handling System",
      description:
        "Tracking and Handling Dead Stock Management with Correspondent Vendors.",
    },
    {
      image: databack,
      title: "Data Backup",
      description: "Easy and Fast Data Backup System",
    },
    {
      image: crm,
      title: "CRM & Loyalty’s",
      description:
        "Detailed CRM Reports for Business Analysis and Customer Loyalty Schemes.",
    },
    {
      image: ai,
      title: "AI Tools",
      description:
        "Rectifications and Error Free Operations for Accounts and Inventory",
    },
    {
      image: force,
      title: "Force X",
      description: "Highlighting feature for Software Updating Procedures.",
    },
    {
      image: tax,
      title: "GST and Tax Reporting",
      description:
        "Fast and Accurate with Government Rules. E Invoice, E Way Bill, GSTR Report and etc",
    },
    {
      image: usercontrol,
      title: "User Control",
      description:
        "Control Every Users with High Level Security and Protections",
    },
    {
      image: MultiStore,
      title: "Multi Store Management",
      description:
        "Manage Centralized business Systems with Trans cloud Operations",
    },
    {
      image: language,
      title: "Multi Language",
      description:
        "Seamlessly operate your business across multiple languages, ensuring accessibility for diverse users.",
    },
    {
      image: wysi,
      title: "WYSWYG Editor",
      description:
        "Edit and format content effortlessly with a user-friendly 'What You See  What You Get' editor.",
    },
    {
      image: event,
      title: "Event Logs",
      description:
        "Track and monitor all system activities with detailed event logs for better security and insights.",
    },
    {
      image: multichanel,
      title: "Integrations",
      description:
        "Easily integrate with third-party applications and services for a more connected business ecosystem.",
    },
    {
      image: pyramid,
      title: "Unchangeable Hierarchy",
      description:
        "unbreakable hierarchy for recievable and payable handling",
    },
    {
      image: magic,
      title: "Magic PDA",
      description:
        "A Stock Taking and Stock Tracking App that scans barcodes to monitor inventory and check product prices in real time.",
    },
    {
      image: acc,
      title: "Financial Privacy Manangment",
      description:
        "Stay informed with real-time account visibility to monitor transactions without direct access or control.",
    },
    {
      image: pro,
      title: "Real-time Stock Rating",
      description:
        "Real-time stock rating provides instant evaluations of stock performance based on live market data.",
    },

    // Removed duplicated features to avoid repetition
  ];

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
        where("category", "==", "TASK")
      );
      const videoSnapshot = await getDocs(videoQuery);
      const videoData = videoSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Video data:", videoData); // Debug log
      setProductVideos(videoData);

      // Fixed case sensitivity - "inventory" instead of "Inventory"
      const imageQuery = query(
        collection(dbFirestore, "productImages"),
        where("category", "==", "inventory")
      );
      const imageSnapshot = await getDocs(imageQuery);
      const imageData = imageSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log("Image data:", imageData); // Debug log
      setProductImages(imageData);

      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setLoading(false);
    }
  };

  const businessTypes = [
    { icon: hypermarket, text: "Hypermarkets" },
    { icon: supermarket, text: "Supermarkets" },
    { icon: hardware, text: "Hardware’s" },
    { icon: footware, text: "Footwear" },
    { icon: textiles, text: "Textiles/Boutique" },
    { icon: mobile, text: "Mobile/Gadgets" },
    { icon: homeAppliances, text: "Home Appliances" },
    { icon: autoMobile, text: "Auto Mobile" },
    { icon: tools, text: "Tools & Equipment’s" },
    { icon: agriFoods, text: "Agri Foods" },
    { icon: spicesHandicrafts, text: "Spices and Handicrafts" },
    { icon: bakery, text: "Bakery" },
    { icon: foodProduction, text: "Food Production and Manufacturing" },
    { icon: agencies, text: "Agencies/Distribution" },
    { icon: parks, text: "Parks/Ticketing" },
    { icon: giftsToys, text: "Gift and Toys" },
  ];

  const clients = [
      
      
      {
        id: 1,
        name: "Nahdha Hypermarket",
        logo: nahdha,
        location: "Nahdha - Wayanad",
      },
      {
        id: 2,
        name: "Wayanad Floating Market",
        logo: wayanadfloat,
        location: "Lakkidi",
      },
      {
        id: 3,
        name: "Shop More",
        logo: shopmore,
        location: "Pulpally - Wayanad",
      },
      {
        id: 4,
        name: "PEEKAY Hypermarket",
        logo: peekay,
        location: "Banglore , Cochin",
      },
      {
        id: 5,
        name: "Ogusto Baqes and Cafe",
        logo: ogusto,
        location: "Sulthan Bathery - Wayanad",
      },
      {
        id: 6,
        name: "Marine World",
        logo: marineworld,
        location: "Chavakkad - Thrissur",
      },
      { id: 7, name: "Tunes", logo: tunes, location: "Wayanad" },
      {
        id: 8,
        name: "Global LPG Distributor",
        logo: globallpg,
        location: "Chalakkudy - Thrissur",
      },
      
      { id: 9, name: "Thalal Market", logo: talal, location: "Iritty" },
      {
        id: 10,
        name: "Freshday Hypermarket",
        logo: freshday,
        location: "Mukkam - Calicut",
      },
      {
        id: 11,
        name: "7 Fresh Supermarket",
        logo: fresh7,
        location: "Kunnamangalam - Calicut",
      },
      { id: 12, name: "Geethas", logo: geethas, location: "Kalpetta - Wayanad" },
      {
        id: 13,
        name: "Hyper City",
        logo: hypercity,
        location: "Kambalakkad , Kadavathoor",
      },
      {
        id: 14,
        name: "Panthallookaran",
        logo: panthallookaran,
        location: "Kodakara - Thrissur",
      },
      // { id: 15, name: "Hyper One", logo: hyperone, location: "Calicut" },
      { id: 15, name: "DanuVe Hypermarket", logo: danuve, location: "Calicut" },
      {
        id: 16,
        name: "Seven Bridge",
        logo: sevenbridge,
        location: "Manjery - Malappuram",
      },
      { id: 17, name: "KB Traders", logo: kb, location: "Wayanad" },
     
      {
        id: 18,
        name: "Global Glass",
        logo: globalglass,
        location: "Mananthavady - Wayanad",
      },
    ];

    const products = [
      {
        id:'icare',
        image: icare,
        title: "iCare",
        description:
          "Our comprehensive retail management solution designed specifically for your inventory needs. iCare offers seamless POS integration, customer relationship management, and detailed stock control.",
      },
      {
        id:'bcare',
        image: bcare,
        title: "BCare",
        description:
          "BCare is an intermediate version of our Financial Account System, designed for medium-level business automation. BCare is highly appreciated by our valued customers in the business industry.",
      },
      {
        id:'taskpos',
        image: taskPos,
        title: "Task POS",
        description:
          "A powerful and intuitive POS system that simplifies sales transactions, manages customer interactions, and provides real-time business insights for efficient operations.",
      },
      {
        id:'floortask',
        image: floorTask,
        title: "Floor Task",
        description:
          "A smart task management system designed for businesses to streamline daily operations, track staff performance, and enhance overall workflow efficiency.",
      },
      {
        id:'ccare',
        image: ccare,
        title: "C Care",
        description: "An intelligent customer support and service tracking system designed to improve response times, monitor client interactions, and ensure exceptional after-sales service.",
      },
      {
        id:'magicpda',
        image: magicpda,
        title: "Magic PDA",
        description: "A powerful mobile tool for sales and inventory teams, enabling real-time data access, seamless order processing, and on-the-go performance tracking.",
      },
      
      {
        id:'ewaytask',
        image: eway1,
        title: "Eway Task",
        description: "A smart travel management app that simplifies trip planning, booking, and task tracking for tour operators and travelers alike.",
      }
      ,
      {
        id:'transcloud',
        image: magicpda,
        title: "Transcloud",
        description: "A powerful mobile tool for sales and inventory teams, enabling real-time data access, seamless order processing, and on-the-go performance tracking.",
      }
      ,
      {
        id:'taskpro',
        image: taskpro1,
        title: "Task Pro",
        description: "A powerful mobile tool for sales and inventory teams, enabling real-time data access, seamless order processing, and on-the-go performance tracking.",
      }
      
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
      const swiperEl = document.querySelector('swiper-container');
      
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
          }
        };
        
        Object.assign(swiperEl, swiperParams);
        swiperEl.initialize();
      }
    }, []);

    // useEffect(() => {
    //   // Register Swiper web component
    //   register();
  
    //   // Initialize Swiper
    //   const swiperContainer = swiperRef.current;
    //   const params = {
    //     slidesPerView: 'auto',
    //     spaceBetween: -20, // Negative space to create overlap for chain effect
    //     centeredSlides: true,
    //     loop: true,
    //     grabCursor: true,
    //     autoplay: {
    //       delay: 3000,
    //       disableOnInteraction: false
    //     }
    //   };
  
    //   Object.assign(swiperContainer, params);
    //   swiperContainer.initialize();
    // }, []);

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col justify-center items-center w-full relative">
        {/* <div className="absolute top-0 bottom-0 left-0 right-0 -z-10 h-full w-full">
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

        {/* banner 1 */}
        <section
          id="inventorymanagement"
          className="w-full relative pb-20 px-2 pt-32 overflow-hidden bg-[#fff]"
        >
          <div className="w-full px-2 max-w-[1400px] mx-auto">
            <motion.div
              className="flex flex-col md:flex-row w-full md:justify-center md:items-center md:gap-10"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              {/* <div className="absolute -right-6 top-16 w-32 h-32 bg-[#F26934] rounded-full opacity-60 z-0"></div> */}
              {/* Left - Image Section */}
              <motion.div
                className="  w-full md:w-[50%] h-[300px] md:h-auto  backdrop-blur-3xl rounded-3xl mb-5 md:mb-0 relative"
                initial={{ scale: 0.8, rotateY: 45, filter: "blur(10px)" }}
                whileInView={{ scale: 1, rotateY: 0, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-3xl w-full h-auto overflow-hidden shadow-2xl border-8 border-white">
                  <motion.img
                    src={inventory}
                    alt="Inventory"
                    className="h-full w-full object-contain rounded-3xl "
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>

              {/* Right - Text Section */}
              <div className="w-full md:w-[50%] flex flex-col justify-center items-start p-5">
                <motion.div
                  className="text-[#352317] text-[40px] md:text-[50px] mb-3 md:mb-5  leading-tight"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  Make Inventory More Powerful and Accurate
                </motion.div>

                <motion.div
                  className="text-[#000]  mb-5 text-[14px] md:text-[16px]"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  The effective inventory management is the backbone of a
                  successful business. Our innovative solutions ensure seamless
                  stock control, optimize resource utilization, and enhance
                  operational efficiency. TASK is our Incredible Financial
                  Accounting Software. TASK is a Windows-based Financial
                  Software that can be customized to your needs. Its powerful
                  accounting features and high flexibility make it unique among
                  its kind.
                </motion.div>

                <motion.div
                  className="flex justify-start items-start"
                  initial={{ opacity: 0, x: -50, filter: "blur(5px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <img
                    src={task}
                    alt="TASK Logo"
                    className="w-full h-[120px]"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* icons 2 */}
        <section className="w-full py-16 sm:py-24 bg-[#F26934] relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-40 h-40 sm:w-64 sm:h-64 rounded-full bg-white blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-52 h-52 sm:w-80 sm:h-80 rounded-full bg-white blur-3xl"></div>
          </div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl  mb-10 sm:mb-16 text-white drop-shadow-sm">
              <span className="inline-flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
                Our Special Touch
                <img
                  src={tasktext}
                  alt="Task Text"
                  className="h-10 sm:h-12 md:h-14 inline-block"
                />
               
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
              {[
                {
                  img: acc,
                  title: "Reliable Book Keeping",
                  desc: "Effortlessly manage your finances with precision and clarity.",
                },
                {
                  img: inventory1,
                  title: "Comprehensive Inventory Management",
                  desc: "Real-time Inventory Tracking with efficient stock control.",
                },
                {
                  img: opt,
                  title: "Customizable Solutions",
                  desc: "Streamline operations and scale effortlessly with modern solutions.",
                },
                {
                  img: analytics,
                  title: "Advanced Analytics and Reporting",
                  desc: "Make data-driven decisions with in-depth analytics and forecasting.",
                },
                {
                  img: datasecurity,
                  title: "Data Security",
                  desc: "Advanced facilities to prevent manipulations and thefts.",
                },
                {
                  img: multichanel,
                  title: "Device Compatible",
                  desc: "Compatible with various devices and minimal hardware requirements.",
                },
                {
                  img: bigData,
                  title: "Big Data Handling",
                  desc: "Optimized performance across multiple devices with minimal hardware.",
                },
                {
                  img: cloud,
                  title: "Mobility and Cloud System",
                  desc: "Access your business anytime, anywhere with real-time syncing.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-xl p-3 shadow-lg shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-white/90 text-sm sm:text-base font-light">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features grid - Fixed grid responsiveness 3*/}
        <section className="w-full py-20 bg-[#FFF9EE] text-[#3B2F2F] relative">
          <div className="max-w-[1400px] mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[30px] sm:text-[40px] md:text-[50px]  text-center mb-10 text-[#5C4033]"
            >
              Key Features That Drive Results
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10 ">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: 0.1, delay: index * 0.1 }}
                  className="relative p-6 rounded-xl shadow-lg text-center flex flex-col items-center h-auto bg-[#fff] border-2 border-[#F26934]"
                >
                  <div className="w-[70px] overflow-hidden absolute top-0 h-[70px] flex items-center justify-center mb-4 p-2">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-auto object-cover pt-2"
                    />
                  </div>
                  <div className="pt-14">
                    <h3 className="text-xl font-bold mb-2 text-[#3B2F2F]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#5C4033]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* iCare & BCare Section 4 and bussiness application 5*/}
        <section className="w-full py-10 relative bg-[#fff]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px]  text-center mb-16 "
            >
              Expertly Crafted Services
            </motion.h2>

            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                el: ".swiper-pagination-custom",
                clickable: true,
              }}
              autoplay={{ delay: 3000 }}
              loop
              className="py-8 relative px-10" // Added px-10 here to give space for arrows
            >
              {products.map((product, index) => (
                <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#3523177e] backdrop-blur-sm rounded-2xl p-3 flex flex-col items-center cursor-pointer hover:scale-105 transition-transform"
                  onClick={() => navigate(`/task/${product.id}`)}
                >
                  <div className="w-auto">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-20 object-contain"
                    />
                  </div>
                </motion.div>
              </SwiperSlide>
              ))}

              {/* Updated Navigation Arrows with better styling */}
              <div className="swiper-button-prev-custom absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#00000027] hover:bg-[#ffffff60] text-[#fff] rounded-full w-8 h-8 flex items-center justify-center shadow-md cursor-pointer">
                <ChevronLeft size={20} />
              </div>
              <div className="swiper-button-next-custom absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-[#00000027] hover:bg-[#ffffff60] text-[#fff] rounded-full w-8 h-8 flex items-center justify-center shadow-md cursor-pointer">
                <ChevronRight size={20} />
              </div>

              {/* Pagination Dots */}
              <div className="swiper-pagination-custom absolute -bottom-8 left-1/2 transform -translate-x-1/2" />
            </Swiper>
          </div>

          <div className="max-w-[1400px] mx-auto px-6 pt-20">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px]  text-center mb-10 "
            >
              Versatile Use Cases
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-3">
              {businessTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center justify-center p-2  backdrop-blur-sm rounded-xl   hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-3 text-[#000] bg-white w-20 h-20 rounded-full flex items-center justify-center border border-[#000]">
                    <img
                      src={type.icon}
                      alt=""
                      className="w-full h-full object-contain p-3"
                    />
                  </div>
                  <p className="text-black text-center text-sm">{type.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* client part  6*/}
        <section className="pt-5 pb-10 relative px-4 sm:px-10 md:px-20 bg-white w-full">
          <div className="text-center w-full mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl  text-black">
              Our Valued Clients
            </h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="container mx-auto relative"
          >
            <Swiper
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={{
                nextEl: ".next-slide",
                prevEl: ".prev-slide",
              }}
              modules={[Autoplay, Navigation]}
              className="w-full"
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 12 },
                480: { slidesPerView: 2, spaceBetween: 14 },
                640: { slidesPerView: 3, spaceBetween: 20 },
                768: { slidesPerView: 4, spaceBetween: 24 },
                1024: { slidesPerView: 4, spaceBetween: 24 },
                1400: { slidesPerView: 6, spaceBetween: 30 },
              }}
            >
              {clients.map((item, index) => (
                <SwiperSlide key={item.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.2 }}
                    viewport={{ once: true }}
                    className="  rounded-lg  flex flex-col items-center justify-center h-[130px] sm:h-[150px] md:h-[160px] px-4"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] pt-2"
                    >
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation Buttons */}
            <motion.button
              // whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="prev-slide absolute left-2 top-1/2 -translate-y-1/2  hover:bg-black text-black hover:text-white p-2 rounded-full z-10"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              // whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="next-slide absolute right-2 top-1/2 -translate-y-1/2 hover:bg-black text-black hover:text-white  p-2 rounded-full z-10"
            >
              <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        </section>

        {/* Product Videos 7 */}
        <section className="w-full py-10 text-white relative bg-[#F5831F]">
          <div className="max-w-[1400px] mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px]  text-center mb-10 "
            >
              See Our Product in Action
            </motion.h2>

            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            ) : (
              <>
                {/* Product Videos Slider */}
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
        </section>

        {/* office partners 8 */}
        <section className="py-12 bg-white md:max-w-[1210px] max-w-[360px] mx-auto w-full">
          <div className="w-full text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Get TASK Now
            </h2>
            <p className="text-gray-600 mb-10 max-w-[600px] w-full mx-auto">
              Everything you need is ready. Start your journey to smarter work
              and experience seamless productivity with TASK — designed to make
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

        {/* TASK Features */}
        <section className="w-full py-10 relative text-[#352317] bg-[#E6F0F2]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[30px] sm:text-[40px] md:text-[50px] font-bold text-center mb-10 "
            >
              Why Choose TASK?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "Real time inventory tracking across multiple locations",
                "Barcode scanning for quick and accurate stock management",
                "Automated purchase order generation based on stock levels",
                "Detailed reporting on stock movements and valuations",
                "Integration with e commerce platforms and POS systems",
                "Batch tracking and serial number management",
                "Mobile access for inventory checks on the go",
                "Role based access controls for enhanced security",
                "Stock forecasting based on historical data and trends",
                "Customizable alerts for low stock and expiring items",
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-[#35231719] backdrop-blur-sm"
                >
                  <div className="text-[#352317] mt-1">
                    <TiTick size={20} />
                  </div>
                  <p className="">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </div>
      <section className="py-10 bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Inventory;
