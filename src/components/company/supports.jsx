import React, { useState, useEffect, useRef } from "react";
import Footer from "../Footer";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useInView } from "framer-motion";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../ChatBot";
import banner from "../../assets/supportbanner.jpeg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaYoutube, FaWhatsapp } from "react-icons/fa";
import imclogo from "../../assets/imclogo.png";
import {
  FaHeadset,
  FaTools,
  FaClock,
  FaUserShield,
  FaLock,
} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import cus from "../../assets/customer.jpg";
import tec from "../../assets/tec.jpeg";
import info from "../../assets/info.jpeg";
import up from "../../assets/updation.jpeg";

import { Phone, Mail, Linkedin, ArrowUpRight } from "lucide-react";
const Company = () => {
  const [openChat, setOpenChat] = useState(false);
  const sectionRef3 = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const isHeadingInView = useInView(headingRef, { once: true });
  const isDescriptionInView = useInView(descriptionRef, { once: true });
  const [hoveredCard, setHoveredCard] = useState(null);

  const teamMembers = [
    {
      title: "Project Manager",
      name: "Sahana K",
      phone: "+91 75938 20006",
      email: "sahanakozhikodan03@gmail.com",
      color: "bg-[#F3EDE7]", // soft background
      accent: "bg-[#BF8C60]", // warm brown accent
      hoverAccent: "bg-[#A9734D]", // darker hover shade
    },
    {
      title: "Marketing Officer",
      name: "Hasanul Banna",
      phone: "+91 7593820005",
      email: "hsnlbanna@imcbsglobal.com",
      color: "bg-[#F3EDE7]",
      accent: "bg-[#BF8C60]",
      hoverAccent: "bg-[#A9734D]",
    },
    {
      title: "Technical Head",
      name: "Vijinlal T V",
      phone: "+91 7591907002",
      email: "vijinlalus@gmail.com",
      color: "bg-[#F3EDE7]",
      accent: "bg-[#BF8C60]",
      hoverAccent: "bg-[#A9734D]",
    },
    {
      title: "Administrative Operations Lead",
      name: "Merin Devasia",
      phone: "+91 7306197537",
      email: "merinvayalil@gmail.com",
      color: "bg-[#F3EDE7]",
      accent: "bg-[#BF8C60]",
      hoverAccent: "bg-[#A9734D]",
    },
  ];

  const getInitials = (name) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("");
  };
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Support cards data with expanded descriptions

  const supportCards = [
    {
      logo: imclogo,
      title: "IMC Bussiness Solutions",
      description:
        "Stay updated with our latest videos, tutorials, and IT solutions. Subscribe now for expert insights!",
      link: "https://www.youtube.com/@IMCBUSINESSSOLUTIONS",

      icon: <FaYoutube size={40} className="text-[#FF0033]" />,
    },
    {
      logo: imclogo,
      title: "IMC Bussiness Solutions",
      description:
        "Connect with us on WhatsApp for instant updates, support, and exclusive business insights.",
      link: "https://whatsapp.com/channel/0029Va4Q5Q61t90g42xDfp1j ", // Replace with your WhatsApp number

      icon: <FaWhatsapp size={40} className="text-[#25D366]" />,
    },
  ];
  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };
  const staffList = [
    {
      postTitle: "Technical Specialist",
      name: "Linat K",
      number: "+91 7591907003",
    },
    {
      postTitle: "Technical Specialist",
      name: "Mufeedha M",
      number: "+91 7591907005",
    },
    {
      postTitle: "Technical Specialist",
      name: "Ramya T V",
      number: "+91 7593820004",
    },
    // { postTitle: "Technical Specialist", name: "Akash Babu", number: "+91 8943772048" },
    {
      postTitle: "Marketing Specialist",
      name: "Aishwarya Priya",
      number: "+91 7593820733",
    },
  ];

  const supportPoints = [
    {
      icon: <FaHeadset size={40} className="text-[#32251F]" />,
      title: "Reliable Assistance",
      description:
        "Our dedicated support team is always available to resolve your queries.",
    },
    {
      icon: <FaTools size={40} className="text-[#32251F]" />,
      title: "Expert IT Support",
      description:
        "Skilled professionals ensure quick troubleshooting and technical guidance.",
    },
    {
      icon: <FaPhoneAlt size={40} className="text-[#32251F]" />,
      title: "Multi-Channel Communication",
      description: "Get assistance via phone, email, chat, and remote support.",
    },
    {
      icon: <FaClock size={40} className="text-[#32251F]" />,
      title: "Fast & Efficient Service",
      description:
        "We prioritize rapid response times to minimize business disruptions.",
    },
    {
      icon: <FaUserShield size={40} className="text-[#32251F]" />,
      title: "Personalized Solutions",
      description: "Tailored IT support based on your business needs.",
    },
    {
      icon: <FaLock size={40} className="text-[#32251F]" />,
      title: "Security & Data Protection",
      description:
        "Ensuring your business data remains safe with proactive monitoring.",
    },
  ];

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    secondName: "",
    phone: "",
    email: "",
    subject: "",
    content: "",
  });
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (event) => {
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
        setFormData({
          firstName: "",
          secondName: "",
          phone: "",
          email: "",
          subject: "",
          content: "",
        });
        setTimeout(() => setIsPopupVisible(false), 3000);
      } else {
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("Error submitting form");
    }
  };

  const sup = [
    { img: tec, title: "Technical Support" },
    { img: cus, title: "Customer Support" },
    { img: info, title: "Info Collection" },
    { img: up, title: "Updation support" },
  ];
  return (
    <div className="relative overflow-hidden">
      {/* WhatsApp Contact Button */}
      <a href="https://wa.me/+917593820007">
        <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
          <RiWhatsappLine />
        </div>
      </a>

      {/* ChatBot */}
      <div className="bottom-10 fixed right-10 z-[999]">
        <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
      </div>

      {/* Banner Section */}

      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 -z-10">
          <img
            src={banner}
            alt="Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-[#352317] opacity-50"></div>
        </div>

        {/* Text Content (Above the Image) */}
        <div className="relative z-20 text-center text-white px-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            We're Here to Help
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Comprehensive IT Support Tailored to Your Business Needs
          </motion.p>
        </div>
      </div>

      <section className="bg-[#fff] py-16 md:pt-30 px-4">
        <div className="max-w-[1400px] mx-auto text-center mb-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#6D4C28] font-medium uppercase tracking-wider">
              Contact & Support
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-[#352317]">
              Connect With Us Anytime
            </h2>
            <div className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
          </motion.div>

          <p className="text-[#000] mt-2 max-w-[900px] mx-auto text-sm md:text-base">
            At IMC Bussiness Solutions, we understand that sometimes you need a
            helping hand. That’s why our dedicated support team is available to
            answer your questions and resolve your issues 7 days a week.
          </p>
          {/* Hours of Operation */}

          <p className="text-center text-gray-700 font-semibold mt-10 text-[20px]">
            Our Working Hours - Monday to Saturday: 9:00 AM to 8:00 PM
          </p>
        </div>
        <div className="  flex items-center justify-center  ">
          <motion.button
            className="px-6 py-3 text-sm sm:text-lg font-semibold text-[#000] border border-[#32251F] rounded-3xl  hover:bg-[#32251F] hover:text-white transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            onClick={() => setIsPopupVisible(true)}
          >
            Service Request
          </motion.button>
        </div>

        {/* <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-6 w-full">
          
          <div className="bg-[#f3e5c9] p-6 rounded-lg shadow-md text-center w-full max-w-[500px]">
            <div className="text-3xl flex items-center justify-center text-orange-600">
              <FaPhoneAlt />
            </div>
            <h3 className="text-lg font-semibold mt-2">
              <a
                href="tel:+917593820007"
                className="text-orange-600 hover:underline"
              >
                +91 75938 20006
              </a>
            </h3>
            <p className="text-[#000] text-sm">
              You can call us during our operating hours.
            </p>
          </div>

          
          <div className="bg-[#f3e5c9] p-6 rounded-lg shadow-md text-center w-full max-w-[500px]">
            <div className="text-3xl flex items-center justify-center text-green-600">
              <MdEmail />
            </div>
            <h3 className="text-lg font-semibold mt-2">
              <a
                href="mailto:info@imcbsglobal.com"
                className="text-green-600 hover:underline"
              >
                info@imcbsglobal.com
              </a>
            </h3>
            <p className="text-[#000] text-sm">
              Send us your queries via email, and we'll get back to you as soon
              as possible.
            </p>
          </div>
        </div> */}
      </section>

      <div className="w-full px-4 pb-10 bg-[#fff]">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#6D4C28] font-medium uppercase tracking-wider">
            Reach Us Anytime
          </span>
          <h2 className="text-2xl md:text-2xl font-bold mt-2 mb-4 text-[#352317]">
            Here's how you can reach us if you require further assistance:
          </h2>
          <div className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
        </motion.div>

        {/* Main Container */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((person, index) => (
            <div
              key={index}
              className={`relative ${person.color} rounded-2xl shadow-lg overflow-hidden transition-all duration-300 h-64`}
              style={{
                transform:
                  hoveredCard === index ? "translateY(-8px)" : "translateY(0)",
                boxShadow:
                  hoveredCard === index
                    ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                    : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Top accent bar */}
              <div
                className={`h-2 w-full ${person.accent} transition-colors duration-300`}
              />

              <div className="p-6 flex flex-col h-full">
                {/* Avatar */}
                {/* <div className={`w-16 h-16 rounded-full mb-4 flex items-center justify-center text-white text-xl font-bold ${person.accent} transition-all duration-300 shadow-md`}>
                {getInitials(person.name)}
              </div> */}

                {/* Content */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-800">
                    {person.title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900 mt-1">
                    {person.name}
                  </p>
                </div>

                {/* Contact info */}
                <div className="mt-4 space-y-3">
                  <a
                    href={`tel:${person.phone}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 group"
                  >
                    <span
                      className={`p-2 rounded-full ${
                        hoveredCard === index
                          ? person.hoverAccent
                          : "bg-gray-100"
                      } transition-colors duration-300`}
                    >
                      <Phone size={16} />
                    </span>
                    <span className="text-sm group-hover:underline">
                      {person.phone}
                    </span>
                  </a>

                  <a
                    href={`mailto:${person.email}`}
                    className="flex items-center gap-3 text-gray-700 hover:text-gray-900 group"
                  >
                    <span
                      className={`p-2 rounded-full ${
                        hoveredCard === index
                          ? person.hoverAccent
                          : "bg-gray-100"
                      } transition-colors duration-300`}
                    >
                      <Mail size={16} />
                    </span>
                    <span className="text-sm truncate group-hover:underline">
                      {person.email}
                    </span>
                  </a>
                </div>
              </div>

              {/* Corner decoration */}
              <div
                className={`absolute bottom-0 right-0 w-24 h-24 rounded-tl-full ${
                  hoveredCard === index ? person.hoverAccent : person.accent
                } opacity-20 transition-all duration-300`}
              />
            </div>
          ))}
        </div>

        <motion.div
          className="text-center mt-10 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#6D4C28] font-medium uppercase tracking-wider">
            Our Team
          </span>
          <h2 className="text-2xl md:text-2xl font-bold mt-2 mb-4 text-[#352317]">
            Meet Our Dedicated Support Team
          </h2>
          <div className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 max-w-[1400px] mx-auto mt-10">
          {staffList.map((staff, index) => (
            <div key={index} className="text-center w-full">
              <p className="text-xl font-semibold py-1">{staff.name}</p>
              <p className="text-gray-700 py-1">{staff.postTitle}</p>
              <p className="text-gray-700 py-1">
                <a href={`tel:${staff.number}`} className="hover:underline">
                  {staff.number}
                </a>
              </p>
            </div>
          ))}
        </div>
      </div>

      <section className="w-full mx-auto bg-[#352317] py-10 px-5">
        <div className="text-center mb-8">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#f3e5c9] font-medium uppercase tracking-wider">
              Assistance
            </span>
            <h2 className="text-white text-2xl md:text-3xl font-bold mt-2 mb-4">
              Here to Help: Support You Can Rely On!
            </h2>
            <div className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-[1200px] mx-auto">
          {sup.map((point, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-[#fcf3e156] rounded-lg shadow-md text-white"
            >
              <img
                src={point.img}
                alt={point.title}
                className="w-full h-full object-cover rounded-t-lg"
              />
              <h3 className="font-semibold text-lg mt-3 flex items-center justify-center pb-2">
                {point.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Supports Section */}
      <div className="pt-2 relative py-20 flex flex-col justify-center items-center w-full bg-[#fff]">
        <section
          id="supports"
          className="max-w-[1400px] mx-auto w-full mb-2 p-6"
        >
          <div className="max-w-[1400px] mx-auto bg-[#e1d2b4] w-full  py-12 px-4">
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#6D4C28] font-medium uppercase tracking-wider">
                Benefits
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-[#352317]">
                Why Choose Our Support Services?
              </h2>
              <div className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-[1200px] mx-auto">
              {supportPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center bg-[#FCF3E1] p-6 rounded-lg shadow-md"
                >
                  {point.icon}
                  <h3 className="font-semibold text-lg mt-3">{point.title}</h3>
                  <p className="text-sm text-gray-700 mt-2">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mb-8">
            <motion.div
              className="text-center mb-10 pt-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-[#6D4C28] font-medium uppercase tracking-wider text-sm sm:text-base">
                Stay Connected
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-[#352317]">
                Connect With Us Online
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
            </motion.div>

            <motion.p
              className="text-[#000] text-sm md:text-base leading-relaxed tracking-wide max-w-xs sm:max-w-xl md:max-w-2xl mx-auto text-center p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              Stay updated with our latest news, videos, and business solutions.
              Follow us on YouTube and WhatsApp for instant updates!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-0 justify-items-center px-4 md:px-0">
            {supportCards.map((card, index) => (
              <motion.a
                key={index}
                href={card.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full max-w-xs sm:max-w-sm rounded-lg p-6 flex flex-col justify-center items-center gap-4 text-center hover:scale-105 transition-transform bg-[#FCF3E1]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                {card.icon}
                <div className="flex justify-center items-center md:gap-2">
                  <img src={card.logo} alt="" className="w-10 h-10" />
                  <motion.h3 className="text-black font-semibold text-lg">
                    {card.title}
                  </motion.h3>
                </div>
                <motion.p className="text-black font-semibold text-lg">
                  {card.description}
                </motion.p>
                <motion.button
                  className="border border-[#32251F] w-32 text-black text-sm font-medium px-4 py-2 rounded-md shadow-md hover:bg-orange-200 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                >
                  Join
                </motion.button>
              </motion.a>
            ))}
          </div>
        </section>
      </div>

      {/* Popup Form */}
      {isPopupVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[999]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-6 rounded-lg w-[500px] h-auto shadow-lg"
          >
            <button
              onClick={() => setIsPopupVisible(false)}
              className="flex justify-end items-center w-full top-2 z-50 right-2 text-black"
            >
              <IoCloseSharp />
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              Service Request
            </h2>
            <form onSubmit={onSubmit} className="space-y-3">
              <label className="block text-gray-700">
                First Name:
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </label>

              <label className="block text-gray-700">
                Second Name:
                <input
                  type="text"
                  name="secondName"
                  placeholder="Enter Second Name"
                  value={formData.secondName}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </label>

              <label className="block text-gray-700">
                Phone Number:
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </label>

              <label className="block text-gray-700">
                Email:
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </label>

              <label className="block text-gray-700">
                Subject:
                <input
                  type="text"
                  name="subject"
                  placeholder="Enter Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full p-2 border rounded mt-1"
                />
              </label>

              <label className="block text-gray-700">
                Message:
                <textarea
                  name="content"
                  placeholder="Enter your Message"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                  className="w-full h-[100px] p-2 border rounded mt-1"
                ></textarea>
              </label>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded hover:bg-[#f1d69e] hover:text-black mt-2"
              >
                Submit
              </button>
            </form>
            <p className="text-sm text-gray-600 mt-2">{result}</p>
          </motion.div>
        </div>
      )}

      {/* Footer */}
      <section className="py-10 bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Company;
