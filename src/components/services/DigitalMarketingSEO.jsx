import React, { useEffect,useState } from 'react'
import digi from "../../assets/digi.png"
import digi1 from "../../assets/dig1.png"
import Footer from '../Footer'
import decision from '../../assets/decision.jpeg'
import customereg from '../../assets/customereg.jpeg'
import seo from '../../assets/seo.jpg'
import seo1 from '../../assets/seo2.jpg'
import darkGradient from "../../assets/darkGradient.jpg";
import { motion } from "framer-motion"
import brand from "../../assets/brand.jpg";
import { Link } from "react-router-dom";
import B from "../../assets/branding1.jpeg";
import B2 from "../../assets/branding2.jpeg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { HiChevronRight as ChevronRight } from "react-icons/hi";
import graphic from '../../assets/graphic.jpeg'
import { FaUserCheck } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { CgSmileMouthOpen } from "react-icons/cg";
import visual from '../../assets/eye.png'
import idea from '../../assets/ideas.png'
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";


const DigitalMarketingSEO = () => {
   const [openChat, setOpenChat] = useState(false)

  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  
  const data = [
    { label: "Increased Website Traffic:", value: "Boosts organic search visibility, driving more potential customers to your site." },
    { label: "Improved User Experience", value: "Enhances website usability with faster loading times, mobile-friendly design, and better navigation." },
    { label: "Higher Credibility and Trust:", value: "Appearing at the top of search results builds brand authority and consumer trust." },
    { label: "Cost-Effective Marketing", value: "Reduces dependency on paid ads by generating consistent organic traffic." },
    { label: "Better Conversion Rates:", value: "Targets highly relevant audiences, increasing engagement and sales conversions" },
  ];
  
  return (
    <div className="flex flex-col justify-center items-center relative overflow-hidden">
      {/* Main background image - fixed position covering the entire viewport */}
      <div className="fixed top-0 left-0 w-full h-full z-[-100]">
        <img
          src={darkGradient}
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>
<a href="https://wa.me/+917593820007">
        <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
          <RiWhatsappLine/>
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
      <div className="w-full pt-32 pb-20 relative">
        <section className="max-w-[1400px] mx-auto">
          <div>
            <div className="text-[#fff] text-[30px] md:text-[50px] textGradient4 mb-5 text-center leading-tight">
              Digital Marketing
              <span className="block">A Glimpse of Success</span>
            </div>
            <div className="textGradient6 text-[#fff] text-center max-w-[700px] mb-10 mx-auto px-2">
              Harness the power of Digital Marketing and SEO to elevate your
              brand's online presence. Our integrated approach blends targeted
              campaigns with optimized SEO strategies to drive traffic and
              enhance visibility. From boosting social media engagement to
              improving search rankings, we provide the expertise to help you
              succeed.
            </div>
          </div>
        </section>

        {/* points seo*/}
        <section className="max-w-[1400px] mx-auto">
          <div>
            <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10">
              <div className="h-[500px]  w-[350px] p-2 rounded-3xl relative lg:pt-10 flex flex-col justify-center items-center SEOBox">
                <div className="absolute top-0 h-[300px] w-full flex justify-center items-center z-20">
                  <img
                    src={digi1}
                    className="w-full h-full object-cover drop-shadow-sm"
                    alt=""
                  />
                </div>
                <div className="w-full h-full bg-[#643d3d] rounded-3xl relative">
                  <div className="w-full bg-[#fff] p-5 z-30 absolute bottom-32 text-center textGradient5 font-bold">
                    Integrated Digital Campaigns
                  </div>
                  <div className="absolute bottom-5 textGradient6 text-[#ffff] px-2 text-center">
                    Leverage targeted digital marketing campaigns across
                    platforms to reach your ideal audience and boost brand
                    awareness. Our campaigns are designed to engage, convert,
                    and drive measurable results.
                  </div>
                </div>
              </div>

              <div className="h-[550px] w-[350px] md:w-[400px] p-2 rounded-3xl relative pt-10 flex flex-col justify-center items-center SEOBox mt-[20px] md:mt-[150px]">
                <div className="absolute top-0 h-[380px] w-full flex justify-center items-center z-20">
                  <img
                    src={digi}
                    className="w-full h-full object-contain drop-shadow-sm"
                    alt=""
                  />
                </div>
                <div className="w-full h-full bg-[#643d3d]  rounded-3xl relative">
                  <div className="w-full bg-[#fff]   p-5 z-30 absolute bottom-32 text-center textGradient5 font-bold">
                    Optimized SEO Strategies
                  </div>
                  <div className="absolute bottom-5 textGradient6 text-[#ffff] px-2 text-center">
                    Improve your website's search engine ranking with our SEO
                    expertise. We focus on optimizing your website to increase
                    visibility, attract more organic traffic, and ensure
                    long-term growth.
                  </div>
                </div>
              </div>

              <div className="h-[500px] w-[350px] p-2 rounded-3xl relative pt-10 flex flex-col justify-center items-center SEOBox">
                <div className="absolute top-0 w-full h-[300px] flex justify-center items-center z-20">
                  <img
                    src={digi1}
                    className="w-full h-full object-cover drop-shadow-sm"
                    alt=""
                  />
                </div>
                <div className="w-full h-full bg-[#643d3d] rounded-3xl relative">
                  <div className="w-full bg-[#fff] p-5 z-30 absolute bottom-32 text-center textGradient5 font-bold">
                    Comprehensive Online Success
                  </div>
                  <div className="absolute bottom-5 textGradient6 text-[#ffff] px-2 text-center">
                    Achieve a strong online presence with our tailored approach,
                    combining SEO and digital marketing to boost social media
                    engagement and search engine performance.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* digital marketing */}
      <div className="w-full relative pt-20 pb-40">
        <section className="max-w-[1400px] w-full mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="textGradient4 mb-5 text-[#fff] text-[36px] md:text-[50px] text-center leading-tight">
              How The Digital Works To{" "}
              <span className="block">Grow Your Business</span>
            </div>
            <div className="text-center max-w-[700px] mx-auto text-[#fff] textGradient6 mb-10 text-sm md:text-base">
              Digital technologies play a vital role in transforming traditional
              business models and driving growth by enhancing customer
              experiences, optimizing operations, and enabling innovative
              services. For businesses in sectors like healthcare, education,
              and IT services, embracing digital tools is essential for
              remaining competitive.
            </div>
          </motion.div>

          <div className="md:flex justify-center items-start w-full gap-5 max-w-[1000px] mx-auto">
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
                className="text-[#fff] textGradient6 mb-4 text-sm md:text-lg"
              >
                <b>Enhanced Customer Engagement:</b> Strengthening customer
                relationships through real-time interactions, personalized
                experiences, and improved communication across digital
                platforms.
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
                className="text-[#fff] textGradient6 mb-4 text-sm md:text-lg"
              >
                <b>Data-Driven Decision Making:</b> Leveraging analytics to
                gather insights for informed decisions, optimizing strategies,
                and enhancing business performance.
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
        </section>
      </div>

      {/* seo */}
      <div className="w-full relative pb-20">
        <section className="max-w-[1400px] w-full mx-auto pt-5 px-4 md:mt-16">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col md:flex-row justify-between w-full mb-10 gap-5">
              <motion.div
                className="textGradient4 text-[32px] md:text-[45px] text-[#fff] leading-tight md:w-[60%]"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                Maximize Online Visibility{" "}
                <span className="block">with SEO</span>
              </motion.div>
              <motion.div
                className="md:w-[40%] text-[#fff] textGradient6 text-sm md:text-base"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                SEO (Search Engine Optimization) helps improve your website's
                visibility on search engines, driving more organic traffic. It
                focuses on optimizing content, keywords, and technical elements
                to rank higher. SEO not only boosts your website traffic but
                also enhances brand credibility and user experience.
              </motion.div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-5 w-full">
              {/* Left Image with Blur + Scale + Rotate */}
              <motion.div
                className="w-full md:w-[70%] h-[250px] md:h-[300px] bg-[#fff] rounded-3xl overflow-hidden"
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  filter: "blur(10px)",
                  rotate: -5,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                  rotate: 0,
                }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                <img
                  src={seo1}
                  alt="seo"
                  className="h-full w-full object-cover"
                />
              </motion.div>

              {/* Right Image with Float-in Effect */}
              <motion.div
                className="w-full md:w-[30%] h-[250px] md:h-[300px] bg-[#fff] rounded-3xl overflow-hidden"
                initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              >
                <img
                  src={seo}
                  alt="seo1"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>

      {/* benefits of seo and digital marketing */}
      <section className="relative max-w-[1600px] w-full mx-auto px-4 mt-[-40px] md:mt-[0px]">
        <div className="flex items-center justify-center">
          <motion.div
            className="w-full shadow-xl rounded-2xl p-6 md:p-8 bg-opacity-50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Heading Animation */}
            <motion.h1
              className="font-bold text-white mb-1 textGradient4 text-[32px] md:text-[50px] text-center leading-tight"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Unlocking the Key Benefits of SEO for Business Growth
            </motion.h1>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <tbody>
                  {data.map((item, index) => (
                    <motion.tr
                      key={index}
                      className="border-b border-gray-700 last:border-none"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                    >
                      {/* Label Column */}
                      <motion.td
                        className="py-4 px-2 text-white font-semibold w-1/2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      >
                        {item.label}
                      </motion.td>

                      {/* Value Column */}
                      <motion.td
                        className="py-4 px-2 text-white"
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
      {/* first section */}
      <div className="pt-20 w-full relative  pb-20">
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
              <h2 className="text-[32px] md:text-[50px] font-semibold textGradient4">
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
                      <div className="text-white text-3xl">{item.icon}</div>
                      <div>
                        <h3 className="font-bold textGradient4 text-[20px]">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#fff] textGradient6">
                          {item.text}
                        </p>
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

      {/* second section */}
      <div className="w-full relative py-5 ">
        <section className="w-full max-w-[1400px] mx-auto rounded-3xl h-[300px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 px-6">
            <motion.div
              initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="flex items-center w-full bg-gradient-to-r overflow-hidden p-[1px] rounded-3xl"
            >
              <div className="bg-[#ffffff0f] backdrop-blur-sm p-8 rounded-3xl shadow-md w-full h-full">
                <h3 className="text-2xl font-semibold textGradient4 text-[#fff]">
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
                      <div className="flex items-center gap-4 textGradient4">
                        <div className="w-16 h-16 rounded-xl">
                          <img
                            src={item.icon}
                            alt={item.title}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <span className="text-white">{item.title}</span>
                      </div>
                      <span className="text-white text-center">
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
              <div className="bg-[#ffffff0f] w-full h-full p-8 rounded-3xl shadow-md">
                <h3 className="text-2xl font-semibold text-white">
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
                      <p className="text-sm text-white">{item.label}</p>
                      <h4 className="text-xl font-bold text-white">
                        {item.value}
                      </h4>
                      {item.extra && (
                        <p className="text-[#ffffff]">{item.extra}</p>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>

      {/* branding */}
      <div className="w-full mt-64 md:mt-0">
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
                  className="text-[32px] md:text-[50px] leading-tight textGradient4"
                  initial={{ filter: "blur(10px)", opacity: 0 }}
                  whileInView={{ filter: "blur(0px)", opacity: 1 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  Branding Essentials
                  <motion.span
                    className="block text-[25px] md:text-[35px] textGradient5"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    Crafting Your Unique Identity
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="textGradient6 text-white text-sm md:text-base"
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
                  <button className="flex justify-center items-center gap-2 px-6 py-3 rounded-3xl bg-[#fff1] text-[#fff] drop-shadow-md textGradient6 font-medium border">
                    Discover More <IoIosArrowRoundForward />
                  </button>
                  <div className="textGradient6 text-[#fff] cursor-pointer">
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
                    <ul className="bg-[#ffffff0c] border h-full w-full rounded-3xl flex flex-col justify-center">
                      {[
                        "Brand Identity",
                        "Brand Messaging",
                        "Target Audience",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="text-white p-3 flex items-center gap-2"
                          initial={{ x: -30, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3 + index * 0.1,
                          }}
                        >
                          <ChevronRight className="text-white" />
                          {item}
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Right List */}
                  <div className="w-full md:w-[48%] h-[200px] bg-gradient-to-l p-[1px] rounded-3xl">
                    <ul className="bg-[#ffffff0c] border h-full w-full rounded-3xl flex flex-col justify-center">
                      {[
                        "Visual Elements",
                        "Brand Voice",
                        "Brand Consistency",
                      ].map((item, index) => (
                        <motion.li
                          key={index}
                          className="text-white p-3 flex items-center gap-2"
                          initial={{ x: -30, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3 + index * 0.1,
                          }}
                        >
                          <ChevronRight className="text-white" />
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

      <section className="bg-white w-full">
        <Footer />
      </section>
    </div>
  );
};

export default DigitalMarketingSEO;