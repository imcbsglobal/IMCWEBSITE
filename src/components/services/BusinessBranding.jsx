import React from "react";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Footer from "../Footer";
import bs from "../../assets/bs.jpeg";
import bs1 from "../../assets/bs1.jpg";
import darkGradient from "../../assets/darkGradient.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";
import { ChevronRight, CheckCircle } from 'lucide-react';

const BusinessConsultations = () => {
  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const [selectedService, setSelectedService] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const services = [
    { title: "Strategic Planning" },
    { title: "Process Optimization" },
    { title: "Market Analysis" },
    { title: "Financial Advisory" },
  ];
  const serviceDetails = {
    "Strategic Planning": {
      title: "Strategic Planning",
      description:
        "Strategic planning is a systematic process that defines an organization's direction and makes decisions on allocating resources to pursue this strategy. It involves setting goals, determining actions to achieve those goals, and mobilizing resources to execute the actions. A well-crafted strategic plan provides a roadmap for growth and helps businesses navigate challenges effectively. Here's why strategic planning is essential:",
      list: [
        "Vision Alignment: It helps align your team around a shared vision for the future.",
        "Resource Allocation: Strategic planning ensures efficient use of limited resources.",
        "Risk Management: It identifies potential obstacles and develops contingency plans.",
        "Competitive Advantage: Planning helps identify and leverage unique market opportunities.",
        "Performance Measurement: It establishes clear metrics for evaluating success.",
      ],
    },
    "Process Optimization": {
      title: "Process Optimization",
      description:
        "Process optimization involves analyzing and improving business processes to enhance efficiency, productivity, and quality while reducing costs and eliminating waste. It focuses on streamlining workflows, automating repetitive tasks, and creating standardized procedures that maximize output while minimizing resource consumption. Our process optimization services help businesses identify bottlenecks and implement effective solutions. Key components include:",

      list: [
        "Process Mapping: Documenting current workflows to identify inefficiencies.",
        "Bottleneck Analysis: Pinpointing constraints that limit overall productivity.",
        "Technology Integration: Implementing tools to automate and streamline operations.",
        "Continuous Improvement: Establishing systems for ongoing refinement.",
        "Performance Metrics: Developing KPIs to measure process effectiveness.",
      ],
    },
    "Market Analysis": {
      title: "Market Analysis",
      description:
        "Market analysis is the comprehensive evaluation of market dynamics, including size, trends, competition, customer behavior, and growth potential. It provides essential insights that inform strategic decision-making, product development, and marketing strategies. Our market analysis services help businesses understand their competitive landscape and identify untapped opportunities. The key elements of market analysis include:",

      list: [
        "Industry Assessment: Evaluating market size, growth trajectory, and trends.",
        "Competitive Intelligence: Analyzing competitors' strengths and weaknesses.",
        "Customer Segmentation: Identifying target audiences and their preferences.",
        "SWOT Analysis: Assessing strengths, weaknesses, opportunities, and threats.",
        "Growth Forecasting: Projecting future market developments and opportunities.",
      ],
    },
    "Financial Advisory": {
      title: "Financial Advisory",
      description:
        "Financial advisory services provide expert guidance on managing business finances, investment decisions, risk mitigation, and strategic financial planning. Our financial advisory team helps businesses optimize their financial performance, ensure compliance with regulations, and achieve sustainable growth. We offer comprehensive solutions tailored to your unique business needs. Key services include:",

      list: [
        "Financial Planning: Developing strategies for sustainable growth and stability.",
        "Cash Flow Management: Optimizing working capital and liquidity positions.",
        "Investment Analysis: Evaluating potential returns and risks of investments.",
        "Cost Reduction: Identifying opportunities to improve operational efficiency.",
        "Risk Management: Developing strategies to mitigate financial vulnerabilities.",
      ],
    },
  };
  const serviceSectionRef = useRef(null);
  const formRef = useRef(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);

    // Scroll to the service section
    if (serviceSectionRef.current) {
      serviceSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "Please fill out all fields",
      });
      setLoading(false);
      return;
    }

    try {
      // Use Email.js or similar service
      // This is a placeholder - you'll need to implement actual email sending
      // You could use EmailJS, a serverless function, or a backend API

      // Example using EmailJS (you would need to set this up)
      // await emailjs.send(
      //   'YOUR_SERVICE_ID',
      //   'YOUR_TEMPLATE_ID',
      //   {
      //     from_name: formData.name,
      //     from_email: formData.email,
      //     service_requested: formData.service,
      //     message: formData.message,
      //     to_email: 'sonasonads66@gmail.com',
      //     subject: 'Business Consultation Request'
      //   },
      //   'YOUR_USER_ID'
      // );

      // For now, we'll simulate success
      setTimeout(() => {
        setFormStatus({
          submitted: true,
          error: false,
          message: "Your consultation request has been sent successfully!",
        });

        // Reset form
        setFormData({
          name: "",
          email: "",
          service: "",
          message: "",
        });

        setLoading(false);
      }, 1500);
    } catch (error) {
      setFormStatus({
        submitted: true,
        error: true,
        message: "There was an error sending your request. Please try again.",
      });
      setLoading(false);
    }
  };

  const [active, setActive] = useState(false);

  useEffect(() => {
    // Scroll to top when this component loads
    window.scrollTo({ top: 0, behavior: "smooth" });

    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);
   const [openChat, setOpenChat] = useState(false)
   

  const NAVBAR_HEIGHT = 100;
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1); // Remove #
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          const yOffset = -NAVBAR_HEIGHT - 20; // Offset to prevent overlap
          const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100); // Small delay ensures the element is rendered
      }
    }
  }, [location]);
  return (
    <div className="">
      <div className="relative w-full ">
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
        {/* <div className="w-full absolute top-0 bottom-0 left-0 right-0 -z-10">
          <img
            src={darkGradient}
            alt=""
            className="w-full h-full object-cover"
          />
        </div> */}
        <section className="w-full h-full    bg-[#fff]">
          <div className=" max-w-[1400px] mx-auto text-[#352317] p-4 md:p-8  mb-20">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto   pt-20 py-10 ">
              <h1 className="text-4xl md:text-7xl font-semibold mb-4 md:mb-8  text-center">
                BUSINESS CONSULTING
              </h1>

              {/* Article Info Grid */}
              <div className="flex items-center justify-center ">
                <div className="w-full md:w-[90%]">
                  <p className="text-sm md:text-base leading-relaxed text-center px-4 md:px-0 text-[#000]">
                    Expert business consultation services designed to transform
                    your operations and drive sustainable growth. Our strategic
                    approach identifies key opportunities and addresses core
                    challenges within your organization. We partner closely with
                    clients to develop tailored solutions that optimize
                    processes, enhance market positioning, and strengthen
                    financial performance. From startup guidance to
                    enterprise-level transformation, our consultants bring
                    industry-specific expertise and proven methodologies to
                    every engagement. Business consultation isn't just about
                    solving immediate problems; it's about creating a foundation
                    for long-term success and competitive advantage. Let our
                    team help you navigate complex business challenges and
                    unlock your company's full potential through data-driven
                    insights and actionable strategies.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-5">
              {/* Left Image */}
              <div className="w-full md:w-[30%] h-[300px] md:h-[400px] flex items-center bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl">
                <div className="w-full h-full rounded-3xl">
                  <img
                    src={bs}
                    alt="Business Consultation"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
              </div>

              {/* Right Image with Text */}
              <div className="relative h-[400px] md:w-[70%] w-full bg-gradient-to-r overflow-hidden p-[1px] rounded-3xl">
                <div className=" bg-[#fff1] backdrop-blur-sm border w-full h-full col-span-5 rounded-3xl p-6 text-black flex flex-col justify-center gap-4">
                  <h3 className="text-[24px] md:text-[28px] text-[#352317] font-bold">
                    Why Business Consulting Matters
                  </h3>
                  <ul className="list-disc pl-5 text-sm md:text-base  space-y-1">
                    <li className="p-3">
                      Expert Analysis of Business Challenges
                    </li>
                    <li className="p-3">Data-Driven Decision Making</li>
                    <li className="p-3">Sustainable Growth Strategies</li>
                    <li className="p-3">Operational Efficiency Improvements</li>
                    <li className="p-3">Industry-Specific Best Practices</li>
                    <li className="p-3">Objective Third-Party Perspective</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full md:mt-[-90px] bg-gradient-to-b from-[#FCF3E1] to-[#f8e7c7] py-16">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Decorative elements */}
        <div className="relative mb-12">
          <div className="absolute top-12 left-0 w-24 h-24 rounded-full bg-[#f5d6a3] opacity-50 -z-10"></div>
          <div className="absolute top-0 right-10 w-16 h-16 rounded-full bg-[#e9b976] opacity-30 -z-10"></div>
          
          {/* Main Title with decorative line */}
          <div className="flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-semibold mb-3 text-[#352317] text-center relative">
              CONSULTING SERVICES
              <span className="block h-1 w-32 bg-orange-400 mx-auto mt-3"></span>
            </h1>
            
            {/* Description Text */}
            <p className="text-sm md:text-lg mb-8 md:mb-12 w-full max-w-5xl text-[#352317] text-center mx-auto">
              Our consultation approach combines analytical expertise with
              practical implementation strategies to deliver measurable business
              results. We offer comprehensive solutions that address your unique
              challenges—providing expert guidance, actionable recommendations,
              and ongoing support that drives tangible performance improvements.
            </p>
          </div>
        </div>

        {/* Services Grid with hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 text-black mb-16">
          {Object.keys(serviceDetails).map((key, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden flex items-center justify-start cursor-pointer transition-all duration-300 hover:shadow-xl"
              onClick={() => handleServiceClick(serviceDetails[key])}
            >
              <div className="bg-gradient-to-br from-[#ffffff80] to-[#ffffff40] backdrop-blur-sm w-full h-full rounded-3xl border border-[#35231730] p-8 flex flex-col items-center justify-center transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#f5d6a3] group-hover:to-[#fbeacb]">
                <h2 className="text-2xl md:text-3xl font-bold text-[#352317] mb-2 text-center">
                  {key}
                </h2>
                <div className="flex items-center justify-center text-orange-500 font-medium mt-3 transition-all duration-300 group-hover:translate-x-1">
                  <span className="mr-1">Explore</span> 
                  <ChevronRight size={18} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Service Details Section with animated entrance */}
        <div ref={serviceSectionRef} className="scroll-mt-24">
          {selectedService && (
            <div className="mt-10 md:mt-16 grid grid-cols-1 gap-6 bg-white p-8 rounded-xl shadow-lg border border-[#e9b97650] animate-fadeIn">
              <h2 className="text-3xl md:text-4xl font-bold text-[#352317] text-center mb-2">
                {selectedService.title}
              </h2>
              <div className="w-20 h-1 bg-orange-400 mx-auto mb-6"></div>
              <p className="text-base md:text-lg text-[#352317] text-center mb-10 max-w-4xl mx-auto">
                {selectedService.description}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {selectedService.list.map((item, index) => (
                  <div
                    key={index}
                    className="group bg-gradient-to-br from-[#ffffff] to-[#fcf3e1] border border-[#35231720] rounded-lg p-6 text-[#352317] text-center flex flex-col items-center justify-center min-h-[180px] hover:shadow-md transition-all duration-300 hover:translate-y-[-5px]"
                  >
                    <CheckCircle className="text-orange-400 mb-4 opacity-80 group-hover:opacity-100" size={32} />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>

        {/* Consultation form */}
<div className="w-full py-10 bg-[#fff]">
  <motion.section
    className="py-10 px-4 max-w-[1200px] mx-auto bg-[#352317] backdrop-blur-xl rounded-3xl border border-[#ffffff1a] overflow-hidden"
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    id="consultation-form"
    ref={formRef}
  >
    <div className="flex flex-col md:flex-row mt-10">
      {/* Left Side - Form */}
      <div className="p-6 md:p-10 w-full md:w-[60%]">
        <motion.h2
          className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-white"
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Request a Free Consulting
        </motion.h2>

        <motion.p
          className="text-white text-sm md:text-base mb-6 md:mb-8"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Fill out the form below to request a free consultation with
          our business experts.
        </motion.p>

        {formStatus.submitted && (
          <motion.div
            className={`p-4 mb-6 rounded-lg ${
              formStatus.error
                ? "bg-red-900/50 border border-red-500"
                : "bg-green-900/50 border border-green-500"
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-white text-center">
              {formStatus.message}
            </p>
          </motion.div>
        )}

        <form
          className="space-y-4 md:space-y-6"
          onSubmit={handleFormSubmit}
        >
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-white text-sm mb-2"
              >
                Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-[#ffffff1a] border border-[#ffffff33] text-white placeholder-gray-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-white text-sm mb-2"
              >
                Email <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 rounded-lg bg-[#ffffff1a] border border-[#ffffff33] text-white placeholder-gray-300"
                placeholder="Your Email"
                required
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <label
              htmlFor="service"
              className="block text-white text-sm mb-2"
            >
              Service Interested In <span className="text-red-400">*</span>
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              className="w-full px-4 py-3 rounded-lg bg-[#ffffff1a] border border-[#ffffff33] text-white appearance-none"
              required
            >
              <option value="" disabled className="bg-gray-800 text-white">Select a Service</option>
              <option value="Strategic Planning" className="bg-gray-800 text-white">
                Strategic Planning
              </option>
              <option
                value="Process Optimization"
                className="bg-gray-800 text-white"
              >
                Process Optimization
              </option>
              <option value="Market Analysis" className="bg-gray-800 text-white">
                Market Analysis
              </option>
              <option value="Financial Advisory" className="bg-gray-800 text-white">
                Financial Advisory
              </option>
            </select>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <label
              htmlFor="message"
              className="block text-white text-sm mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows="4"
              className="w-full px-4 py-3 rounded-lg bg-[#ffffff1a] border border-[#ffffff33] text-white placeholder-gray-300"
              placeholder="Tell us about your project"
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="p-3"
          >
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 px-6 bg-gradient-to-r from-[#FF7F00] to-[#FF5500] text-white font-medium rounded-lg hover:brightness-110 transition-all shadow-lg flex justify-center items-center"
            >
              {loading ? (
                <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
              ) : null}
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </motion.div>
        </form>
      </div>

      {/* Right Side - Image */}
      <motion.div
        className="md:w-[40%] h-[300px] md:h-auto"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src={bs1}
          alt="Business consultation services"
          className="w-full h-full object-cover rounded-lg"
        />
      </motion.div>
    </div>
  </motion.section>
</div>
      </div>
      <section className="w-full bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
};

export default BusinessConsultations;
