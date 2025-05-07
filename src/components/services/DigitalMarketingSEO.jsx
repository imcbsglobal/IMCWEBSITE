import React, { useEffect, useState, useRef } from "react";
import digi from "../../assets/digi.png";
import digi1 from "../../assets/dig1.png";
import Footer from "../Footer";
import decision from "../../assets/decision.jpeg";
import customereg from "../../assets/customereg.jpeg";
import seo from "../../assets/seo.jpg";
import seo1 from "../../assets/seo2.jpg";
import darkGradient from "../../assets/darkGradient.jpg";
import { motion } from "framer-motion";
import brand from "../../assets/brand.jpg";
import { Link } from "react-router-dom";
import B from "../../assets/branding1.jpeg";
import B2 from "../../assets/branding2.jpeg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiChevronRight as ChevronRight } from "react-icons/hi";
import graphic from "../../assets/graphic.jpeg";
import { FaUserCheck } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { CgSmileMouthOpen } from "react-icons/cg";
import visual from "../../assets/eye.png";
import idea from "../../assets/ideas.png";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";
import { CgSearch } from "react-icons/cg";
import { TbSeo } from "react-icons/tb";
import { FaChartLine } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { SiGoogleads, SiMeta } from "react-icons/si";
import { TbSocial } from "react-icons/tb";
import { MdOutlineAnalytics, MdCampaign } from "react-icons/md";
import socialMedia from "../../assets/social.jpeg";
import digitalAds from "../../assets/digitaladd.jpeg";
import { ChevronLeft } from "lucide-react";
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
import { Swiper, SwiperSlide } from "swiper/react";
import adobeindesign from "../../assets/adobeindesign.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation"; // Added navigation CSS
// Import required modules
import { Autoplay, Navigation } from "swiper/modules";
import coreldraw from "../../assets/coreldraw.png";
import adobepremierepro from "../../assets/adobepremierepro.png";
import adobeaftereffects from "../../assets/adobeaftereffects.png";
import {
  MdOutlineVideoLibrary,
  MdSlowMotionVideo,
  MdAnimation,
} from "react-icons/md";

import { 
  Play, 
  Film, 
  Compass, 
  Layers, 
  Pencil, 
  Camera, 
  Scissors, 
  CheckCircle
} from 'lucide-react';

const DigitalMarketingSEO = () => {
  const [openChat, setOpenChat] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const data = [
    {
      label: "Increased Website Traffic:",
      value:
        "Boosts organic search visibility, driving more potential customers to your site.",
    },
    {
      label: "Improved User Experience",
      value:
        "Enhances website usability with faster loading times, mobile-friendly design, and better navigation.",
    },
    {
      label: "Higher Credibility and Trust:",
      value:
        "Appearing at the top of search results builds brand authority and consumer trust.",
    },
    {
      label: "Cost-Effective Marketing",
      value:
        "Reduces dependency on paid ads by generating consistent organic traffic.",
    },
    {
      label: "Better Conversion Rates:",
      value:
        "Targets highly relevant audiences, increasing engagement and sales conversions",
    },
  ];

  const techPartners = [
    { name: "APPEON", img: appeon },
    // { name: "Python", img: python },
    // { name: "React", img: react },
    // { name: "Flutter", img: flutter },
    { name: "SAP", img: sap },
    // { name: "AWS", img: aws },
    // { name: "GitHub", img: github },
    // { name: "Hostinger", img: hostinger },
    // { name: "PgAdmin", img: pgadmin },
    // { name: "Firebase", img: firebase },
    { name: "Photoshop", img: photoshop },
    { name: "Illustrator", img: illustrator },
    { name: "Adobe XD", img: adobexd },
    { name: "Adobe Indesign", img: adobeindesign },
    { name: "Adobe Premiere Pro", img: adobepremierepro },
    { name: "Adobe After Effects", img: adobeaftereffects },
    { name: "Figma", img: figma },
    { name: "Coreldraw", img: coreldraw },
  ];
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  const services = [
    {
      icon: <Film size={24} />,
      title: "Commercial Video Production",
      description: "High-quality promotional videos that showcase your products or services with professional lighting, cinematography, and editing."
    },
    {
      icon: <Play size={24} />,
      title: "Social Media Videos",
      description: "Short-form, engaging content optimized for platforms like Instagram, TikTok, and YouTube to boost your social presence."
    },
    {
      icon: <Layers size={24} />,
      title: "Motion Graphics & Animation",
      description: "Eye-catching animated explainer videos and motion graphics that simplify complex ideas and enhance brand messaging."
    }
  ];
  
  const editingTools = [
    // { name: "Premiere Pro", letter: "Pr" },
    { name: "After Effects", letter: "Ae" },
    // { name: "DaVinci Resolve", letter: "DR" },
    { name: "Capcut", letter: "CapCut" },
    { name: "Vn", letter: "VN" },
    // { name: "Blender", letter: "B" }
  ];
  
  const processSteps = [
    {
      icon: <Pencil size={24} />,
      title: "Concept Development",
      description: "We brainstorm creative ideas and develop a compelling narrative for your video."
    },
    {
      icon: <Compass size={24} />,
      title: "Pre-Production",
      description: "Scriptwriting, storyboarding, and planning all logistics for the shoot."
    },
    {
      icon: <Camera size={24} />,
      title: "Production",
      description: "Professional filming with high-quality equipment and expert cinematography."
    },
    {
      icon: <Scissors size={24} />,
      title: "Post-Production",
      description: "Editing, color grading, sound design, and final delivery in all required formats."
    }
  ];
  return (
    <div className="flex flex-col justify-center items-center relative overflow-hidden">
      {/* Main background image - fixed position covering the entire viewport */}
      {/* <div className="fixed top-0 left-0 w-full h-full z-[-100]">
        <img
          src={darkGradient}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div> */}
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

      {/* intro */}
      <div className="w-full pt-32 pb-20 relative bg-[#fff]">
        <section className="max-w-[1400px] mx-auto">
          <div>
            <div className="text-[#352317] text-[30px] md:text-[50px]  mb-5 text-center leading-tight">
              Digital Marketing
              <span className="block">A Glimpse of Success</span>
            </div>
            <div className=" text-[#000] text-center max-w-[900px] mb-10 mx-auto px-2">
              Harness the power of Digital Marketing and SEO to elevate your
              brand's online presence. Our integrated approach blends targeted
              campaigns with optimized SEO strategies to drive traffic and
              enhance visibility. From boosting social media engagement to
              improving search rankings, we provide the expertise to help you
              succeed.
            </div>
          </div>
        </section>
        <div className="md:flex justify-center items-start w-full gap-5 max-w-[1000px] mx-auto mb-20">
          <motion.div
            className="w-full md:w-[50%] h-auto md:h-[500px] mb-8 md:mb-0 px-2 lg:px-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#000]  mb-4 text-sm md:text-[15px]"
            >
              <b className="md:text-[18px]">Enhanced Customer Engagement:</b>{" "}
              Strengthening customer relationships through real-time
              interactions, personalized experiences, and improved communication
              across digital platforms.
            </motion.div>
            <motion.div
              className="w-full h-[250px] md:h-full"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
            >
              <img
                className="h-full w-full object-cover rounded-xl"
                src={customereg}
                alt="customereg"
              />
            </motion.div>
          </motion.div>

          <motion.div
            className="w-full md:w-[50%] h-auto md:h-[500px] px-2 lg:px-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-[#000]  mb-4 text-sm md:text-[15px]"
            >
              <b className="md:text-[18px]">Data-Driven Decision Making:</b>{" "}
              Leveraging analytics to gather insights for informed decisions,
              optimizing strategies, and enhancing business performance.
            </motion.div>
            <motion.div
              className="w-full h-[250px] md:h-full"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
            >
              <img
                className="h-full w-full object-cover rounded-xl"
                src={decision}
                alt="decision"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* social media */}
      <div className="w-full md:pt-20  pt-5 pb-20 relative bg-[#fff]">
        <section className="max-w-[1400px] mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-[32px] md:text-[50px] font-semibold text-[#352317] mb-4">
              Expand Your Digital Presence
              <span className="block">Through Social Media</span>
            </h2>
            <p className="text-[#000] max-w-[900px] mx-auto">
              Leverage the power of social platforms to connect with your
              audience, build brand awareness, and drive engagement. Our
              comprehensive social media management services help you establish
              a strong presence across all relevant platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left side - Social Media Image */}
            <motion.div
              className="w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-full h-full bg-[#000] rounded-3xl overflow-hidden">
                <motion.img
                  src={socialMedia}
                  alt="Social Media Marketing"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>

            {/* Right side - Platform Icons */}
            <div className="flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-semibold text-[#352317] mb-4">
                  Popular Platforms We Manage
                </h3>
                <p className="text-[#000] mb-6">
                  Our team specializes in creating engaging content and
                  strategic management across these leading platforms:
                </p>
              </motion.div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { icon: <FaFacebook />, name: "Facebook", color: "#4267B2" },
                  {
                    icon: <FaInstagram />,
                    name: "Instagram",
                    color: "#C13584",
                  },
                  { icon: <FaTwitter />, name: "Twitter", color: "#1DA1F2" },
                  { icon: <FaLinkedin />, name: "LinkedIn", color: "#0077B5" },
                  { icon: <FaWhatsapp />, name: "TikTok", color: "#25D366" },
                  { icon: <FaYoutube />, name: "YouTube", color: "#FF0000" },
                ].map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    className="bg-white p-4 rounded-2xl shadow-md flex flex-col items-center"
                  >
                    <div
                      className="text-4xl mb-2"
                      style={{ color: platform.color }}
                    >
                      {platform.icon}
                    </div>
                    <p className="font-medium text-[#352317]">
                      {platform.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Social Media Services */}
          <div className="mt-16">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-2xl font-semibold text-[#352317] mb-8 text-center"
            >
              Our Social Media Services
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: <TbSocial />,
                  title: "Content Creation & Curation",
                  description:
                    "Engaging posts, graphics, and videos tailored to each platform's unique audience and format.",
                },
                {
                  icon: <MdOutlineAnalytics />,
                  title: "Analytics & Reporting",
                  description:
                    "Regular performance reports with insights on engagement, reach, and conversion metrics.",
                },
                {
                  icon: <MdCampaign />,
                  title: "Campaign Management",
                  description:
                    "Strategic planning and execution of social media campaigns to achieve specific business goals.",
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  className="bg-[#FCF3E1] p-6 rounded-3xl shadow-md"
                >
                  <div className="text-4xl text-[#352317] mb-4">
                    {service.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-[#352317] mb-2">
                    {service.title}
                  </h4>
                  <p className="text-[#000]">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Digital Advertising Section */}
      <div className="w-full pt-20 pb-20 relative bg-[#FCF3E1]">
        <section className="max-w-[1400px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Left side - Content */}
            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[32px] md:text-[50px] font-semibold text-[#352317] mb-6"
              >
                Targeted Digital
                <span className="block">Advertising Solutions</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[#000] mb-8"
              >
                Drive conversions and maximize ROI with our data-driven
                advertising strategies across major platforms. We create and
                manage campaigns that target your ideal customers at the right
                time and place.
              </motion.p>

              {/* Ad Platforms */}
              <div className="space-y-6">
                {[
                  {
                    icon: <SiGoogleads />,
                    title: "Google Ads",
                    description:
                      "Search, Display, and YouTube ad campaigns to capture high-intent audiences and increase website traffic.",
                    color: "#4285F4",
                  },
                  {
                    icon: <SiMeta />,
                    title: "Meta Ads",
                    description:
                      "Facebook and Instagram advertising to build brand awareness and engage your target demographic.",
                    color: "#0081FB",
                  },
                  {
                    icon: <FaLinkedin />,
                    title: "LinkedIn Ads",
                    description:
                      "B2B focused advertising to connect with decision-makers and industry professionals.",
                    color: "#0077B5",
                  },
                ].map((platform, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 * index }}
                    className="flex items-start gap-4 p-4 bg-white rounded-2xl shadow-md"
                  >
                    <div className="text-4xl" style={{ color: platform.color }}>
                      {platform.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-[#352317] mb-1">
                        {platform.title}
                      </h4>
                      <p className="text-[#000] text-sm">
                        {platform.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Image and Features */}
            <motion.div
              className="flex flex-col"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.div
                className="w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl overflow-hidden mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative w-full h-[300px] bg-[#000] rounded-3xl overflow-hidden">
                  <motion.img
                    src={digitalAds}
                    alt="Digital Advertising"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  />
                </div>
              </motion.div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white p-6 rounded-3xl shadow-md"
              >
                <h4 className="text-xl font-semibold text-[#352317] mb-4">
                  Key Benefits of Our Ad Management
                </h4>

                <ul className="space-y-3">
                  {[
                    "Precise audience targeting based on demographics, interests, and behaviors",
                    "Real-time campaign optimization to maximize performance metrics",
                    "Comprehensive analytics and transparent reporting on ad spend and ROI",
                    "A/B testing to refine messaging and creative elements",
                    "Strategic retargeting to re-engage potential customers",
                  ].map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="flex items-center gap-2 text-[#000]"
                    >
                      <ChevronRight className="text-[#352317] flex-shrink-0" />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* seo */}
      <div className="w-full relative pb-20 bg-[#fff]">
        <div className="md:pt-20 pt-5 w-full relative pb-20 bg-[#FCF3E1]">
          <section className="w-full max-w-[1400px] mx-auto rounded-3xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Left Content */}
              <motion.div
                className="flex flex-col gap-6 justify-center"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h2 className="text-[32px] md:text-[50px] font-semibold text-[#352317]">
                  Maximize Online Visibility{" "}
                  <span className="block">with SEO</span>
                </h2>

                <ul className="space-y-4">
                  {[
                    {
                      icon: <CgSearch />,
                      title: "Search Engine Visibility",
                      text: "Improve your website's ranking on search engines like Google through strategic keyword optimization and content enhancement.",
                    },
                    {
                      icon: <TbSeo />,
                      title: "Content & Technical SEO",
                      text: "Optimize your website's structure, content, and technical elements to enhance crawlability and provide better user experience.",
                    },
                    {
                      icon: <FaChartLine />,
                      title: "Analytics & Performance",
                      text: "Track and analyze your SEO performance with comprehensive metrics to continuously improve your digital marketing strategy.",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      className="w-full bg-gradient-to-r p-[1px] rounded-3xl overflow-hidden"
                      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                    >
                      <div className="w-full h-full bg-[#ffffff13] backdrop-blur-sm p-4 flex items-start gap-4 rounded-3xl">
                        <div className="text-[#352317] text-3xl">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="font-bold text-[20px]">
                            {item.title}
                          </h3>
                          <p className="text-sm text-[#000]">{item.text}</p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Right Image - Combined your two images into a single image container */}
              <motion.div
                className="w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="relative w-full h-full bg-[#000] rounded-3xl overflow-hidden  p-2">
                  {/* Main larger image (takes 2/3 of the space) */}
                  <motion.div
                    className="h-full rounded-xl overflow-hidden"
                    initial={{ scale: 1.1, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                  >
                    <img
                      src={seo1}
                      alt="SEO Analytics"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Secondary smaller image (takes 1/3 of the space) */}
                  {/* <motion.div 
                className="col-span-1 h-full rounded-xl overflow-hidden"
                initial={{ scale: 1.1, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                <img
                  src={seo}
                  alt="SEO Strategy"
                  className="w-full h-full object-cover"
                />
              </motion.div> */}
                </div>
              </motion.div>
            </motion.div>
          </section>
        </div>
      </div>

      {/* benefits of seo and digital marketing */}
      <section className="relative max-w-[1600px] w-full mx-auto px-4 mt-[-70px] md:mt-[0px] bg-[#fff]">
        <div className="flex items-center justify-center">
          <motion.div
            className="w-full  p-6 md:p-8 bg-opacity-50 py-20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Heading Animation */}
            <motion.h1
              className="font-bold text-[#352317] mb-1  text-[32px] md:text-[50px] text-center leading-tight"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Unlocking the Key Benefits of SEO for Business Growth
            </motion.h1>

            <div className="overflow-x-auto md:overflow-hidden py-10">
              <table className="w-full border-collapse">
                <tbody>
                  {data.map((item, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-[#352317] last:border-none"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      {/* Label Column */}
                      <motion.td
                        className="py-4 px-2 text-black font-semibold w-1/2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        {item.label}
                      </motion.td>

                      {/* Value Column */}
                      <motion.td
                        className="py-4 px-2 text-black"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        {item.value}
                      </motion.td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* graphics section */}
      <div className="pt-20 w-full relative  pb-20 bg-[#FCF3E1]">
        <section className="w-full max-w-[1400px] mx-auto rounded-3xl">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Left Content */}
            <motion.div
              className="flex flex-col gap-6 justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-[32px] md:text-[50px] font-semibold text-[#352317]">
                Graphics and <span className="block">Creative Design</span>
              </h2>

              <ul className="space-y-4">
                {[
                  {
                    icon: <CgSmileMouthOpen />,
                    title: "Visual Identity and Branding",
                    text: "Crafting unique and impactful brand visuals, including logos, color schemes, and design elements, to create a strong brand presence.",
                  },
                  {
                    icon: <TbBulb />,
                    title: "Creative Content Design",
                    text: "Developing captivating graphics for marketing campaigns, websites, social media, and print materials to engage and attract your audience.",
                  },
                  {
                    icon: <FaUserCheck />,
                    title: "User Centric Digital Experiences",
                    text: "Designing intuitive UI/UX interfaces and dynamic motion graphics to enhance user engagement and deliver seamless digital interactions.",
                  },
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    className="w-full bg-gradient-to-r p-[1px] rounded-3xl overflow-hidden"
                    initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  >
                    <div className="w-full h-full bg-[#ffffff13] backdrop-blur-sm p-4 flex items-start gap-4 rounded-3xl">
                      <div className="text-[#352317] text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold  text-[20px]">{item.title}</h3>
                        <p className="text-sm text-[#000] ">{item.text}</p>
                      </div>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Right Image */}
            <motion.div
              className="w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <div className="relative w-full h-full bg-[#000] rounded-3xl overflow-hidden">
                <motion.img
                  src={graphic}
                  alt="graphic"
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </motion.div>
        </section>
      </div>

      {/* <div className="w-full relative py-5 bg-[#FCF3E1]">
        <section className="w-full max-w-[1400px] mx-auto rounded-3xl h-[300px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 px-6">
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center w-full bg-gradient-to-r overflow-hidden p-[1px] rounded-3xl"
            >
              <div className="border border-[#000] backdrop-blur-sm p-8 rounded-3xl shadow-md w-full h-full">
                <h3 className="text-2xl font-semibold  text-[#352317]">
                  Why Choose Us
                </h3>
                <ul className="mt-4 space-y-4">
                  {[
                    {
                      icon: visual,
                      title: "Tailored Visual Solutions",
                      description: "Personalized designs for brand alignment",
                    },
                    {
                      icon: idea,
                      title: "Creative Excellence and Innovation",
                      description:
                        "Expert designers using innovative strategies.",
                    },
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20, filter: "blur(5px)" }}
                      whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                      viewport={{ once: true }}
                      className="flex justify-between items-center"
                    >
                      <div className="flex items-center gap-4 ">
                        <div className="w-16 h-16 rounded-xl">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-full h-full object-contain text-[#352317]"
                          />
                        </div>
                        <span className="text-black">{item.title}</span>
                      </div>
                      <span className="text-black text-center">
                        {item.description}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center w-full bg-gradient-to-r overflow-hidden p-[1px] rounded-3xl"
            >
              <div className="border border-[#000] w-full h-full p-8 rounded-3xl shadow-md">
                <h3 className="text-2xl font-semibold text-[#352317]">
                  Significant Increase in Customer Engagement
                </h3>
                <div className="flex justify-between mt-6">
                  {[
                    {
                      label: "Previous Year Engagement",
                      value: "20,000 Interactions",
                    },
                    {
                      label: "Current Year Engagement",
                      value: "35,000 Interactions",
                      extra: "+75%",
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30, filter: "blur(5px)" }}
                      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{
                        duration: 0.7,
                        ease: "easeOut",
                        delay: index * 0.2,
                      }}
                      viewport={{ once: true }}
                    >
                      <p className="text-sm text-black">{item.label}</p>
                      <h4 className="text-xl font-bold text-black">
                        {item.value}
                      </h4>
                      {item.extra && (
                        <p className="text-[#000]">{item.extra}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div> */}

      {/* branding */}
      <div className="w-full mt-0 md:mt-0 bg-[#fff] mb-10 ">
        {/* first */}
        <div className="w-full relative pt-20 md:pb-10 pb-20">
          <motion.section
            className="w-full max-w-[1400px] mx-auto rounded-3xl backdrop-blur-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <div className="px-4 py-10 flex flex-col md:flex-row gap-10">
              {/* Left Side */}
              <motion.div
                className="md:w-[50%] flex flex-col justify-center items-start gap-5"
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                  staggerChildren: 0.2,
                }}
              >
                <motion.h1
                  className="text-[32px] md:text-[50px] leading-tight text-black font-semibold"
                  initial={{ filter: "blur(10px)", opacity: 0 }}
                  whileInView={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  Branding Essentials
                  <motion.span
                    className="block text-[25px] md:text-[35px] "
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    Crafting Your Unique Identity
                  </motion.span>
                </motion.h1>

                <motion.p
                  className=" text-black text-sm md:text-base"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  Discover the core elements of effective branding and how they
                  shape your business identity. From visual design to messaging
                  strategies, learn how to build a brand that resonates with
                  your audience and drives long-term success.
                </motion.p>

                {/* <motion.div
                  className="flex flex-col sm:flex-row gap-5 items-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  <button className="flex justify-center items-center gap-2 px-6 py-3 rounded-3xl bg-[#fff1] text-[#fff] drop-shadow-md  font-medium border">
                    Discover More <IoIosArrowRoundForward />
                  </button>
                  <div className=" text-[#fff] cursor-pointer">
                    More
                  </div>
                </motion.div> */}

                <motion.div
                  className="w-full flex flex-col md:flex-row gap-5 items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                >
                  {/* Left List */}
                  <div className="w-full md:w-[48%] h-[200px] bg-gradient-to-l p-[1px] rounded-3xl">
                    <ul className="bg-[#ffffff0c] border border-black h-full w-full rounded-3xl flex flex-col justify-center">
                      {[
                        "Brand Identity",
                        "Brand Messaging",
                        "Target Audience",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="text-black p-3 flex items-center gap-2"
                          initial={{ x: -30, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3 + index * 0.1,
                          }}
                        >
                          <ChevronRight className="text-black" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Right List */}
                  <div className="w-full md:w-[48%] h-[200px] bg-gradient-to-l p-[1px] rounded-3xl">
                    <ul className="bg-[#ffffff0c] border border-black h-full w-full rounded-3xl flex flex-col justify-center">
                      {[
                        "Visual Elements",
                        "Brand Voice",
                        "Brand Consistency",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="text-black p-3 flex items-center gap-2"
                          initial={{ x: -30, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3 + index * 0.1,
                          }}
                        >
                          <ChevronRight className="text-black" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side */}
              <motion.div
                className="md:w-[50%] flex flex-col gap-5"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <motion.div
                  className="w-full h-[300px] rounded-3xl overflow-hidden"
                  initial={{ y: 50, opacity: 0, scale: 0.9 }}
                  whileInView={{ y: 0, opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                >
                  <img
                    src={brand}
                    alt="branding"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  className="flex flex-col sm:flex-row gap-5"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  <div className="w-full sm:w-[48%] h-[200px] rounded-3xl overflow-hidden">
                    <img
                      src={B}
                      alt="branding"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-full sm:w-[48%] h-[200px] rounded-3xl overflow-hidden">
                    <img
                      src={B2}
                      alt="branding"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.section>
        </div>
      </div>

      {/* Video Production Section */}
      <div className="w-full py-24 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
          {/* <div className="bg-amber-500 rounded-full p-3 mb-6">
            <Film size={32} className="text-white" />
          </div> */}
          
          <h2 className="text-4xl md:text-5xl font-bold text-black text-center mb-6">
            <span className="bg-clip-text ">
              Professional Video Production
            </span>
          </h2>
          
          <div className="w-24 h-1 bg-[#F2682C] mb-6"></div>
          
          <p className="text-gray-700 text-center max-w-2xl">
            From concept to final cut, we create compelling video content that tells your brand's story, 
            engages viewers, and drives results across all digital platforms.
          </p>
        </div>
        
        {/* Services Tab Navigation */}
        <div className="mb-16">
          <div className="flex justify-center mb-10 overflow-x-auto">
            <div className="inline-flex bg-gray-200 rounded-full p-1">
              <button 
                onClick={() => setActiveTab(0)} 
                className={`px-6 py-3 rounded-full font-medium text-sm ${activeTab === 0 ? 'bg-[#F2682C] text-white shadow-md' : 'text-gray-700'}`}
              >
                Our Services
              </button>
              <button 
                onClick={() => setActiveTab(1)} 
                className={`px-6 py-3 rounded-full font-medium text-sm ${activeTab === 1 ? 'bg-[#F2682C] text-white shadow-md' : 'text-gray-700'}`}
              >
                Editing Tools
              </button>
              <button 
                onClick={() => setActiveTab(2)} 
                className={`px-6 py-3 rounded-full font-medium text-sm ${activeTab === 2 ? 'bg-[#F2682C] text-white shadow-md' : 'text-gray-700'}`}
              >
                Our Process
              </button>
            </div>
          </div>
          
          {/* Services Tab Content */}
          <div className={`${activeTab === 0 ? 'block' : 'hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-xl h-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#F2682C] to-[#F99D2C]"></div>
                    
                    <div className="p-8">
                      <div className="w-14 h-14 rounded-lg bg-amber-100 flex items-center justify-center mb-6 group-hover:bg-[#F2682C] transition-colors duration-300">
                        <div className="text-[#F2682C] group-hover:text-white transition-colors duration-300">
                          {service.icon}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      
                      <p className="text-gray-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Editing Tools Tab Content */}
          <div className={`${activeTab === 1 ? 'block' : 'hidden'}`}>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 bg-gradient-to-br from-[#F99D2C] to-[#F2682C] p-10 flex flex-col justify-center">
                  <h3 className="text-white text-3xl font-bold mb-4">Professional Editing Tools</h3>
                  <p className="text-amber-100 mb-6">
                    We utilize industry-leading software to ensure your video content receives the highest quality treatment for maximum impact.
                  </p>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                    <div className="w-3 h-3 rounded-full bg-white opacity-50"></div>
                    <div className="w-3 h-3 rounded-full bg-white opacity-25"></div>
                  </div>
                </div>
                
                <div className="md:w-1/2 p-10">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {editingTools.map((tool, index) => (
                      <div key={index} className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-[#F2682C] transition-colors duration-300">
                        <div className="w-16 h-16 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold mb-3">
                          {tool.letter}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{tool.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Process Tab Content */}
          <div className={`${activeTab === 2 ? 'block' : 'hidden'}`}>
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 transform md:translate-x-0 border-l-2 border-dashed border-[#F2682C] h-full z-0"></div>
              
              <div className="space-y-12">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative z-10">
                    <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                      <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                        <div className="bg-white p-6 rounded-xl shadow-md inline-block">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      
                      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-8 mt-6 md:mt-0 z-20">
                        <div className="w-16 h-16 rounded-full bg-[#F2682C] shadow-lg text-white flex items-center justify-center">
                          {step.icon}
                        </div>
                      </div>
                      
                      <div className="md:w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        {/* <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-[#F2682C] rounded-full text-white font-medium shadow-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 cursor-pointer">
            <Play size={20} />
            <span>Start Your Video Project</span>
          </div>
        </div> */}
      </div>
    </div>


      {/* Technology Partners Section */}
      <section className="w-full px-5 md:px-0 relative py-24 bg-[#352317] text-white overflow-hidden mb-10">
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

      <section className="bg-white w-full">
        <Footer />
      </section>
    </div>
  );
};

export default DigitalMarketingSEO;
