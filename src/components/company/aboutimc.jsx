import React, { useState, useEffect, useRef } from "react";
import Footer from "../Footer";
import ceo1 from "../../assets/ceo1.jpg";
import ceo2 from "../../assets/ceo2.jpg";
import ceo3 from "../../assets/ceo3.jpg";
import vision from "../../assets/vision.jpg";
import mission from "../../assets/mission.jpg";
import "swiper/css";
import "swiper/css/autoplay";
import { useLocation } from "react-router-dom";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../ChatBot";
import { useInView } from "react-intersection-observer";

import abouthome2 from "../../assets/knowmoreabout.jpeg";

const company = () => {
  const [openChat, setOpenChat] = useState(false);

  const location = useLocation();
  const locoRef = useRef(null);
  const sectionRef = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);

  const imagesRef = useRef(null);
  const businessRef = useRef(null);
  const supportsRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const isInView = useInView(sectionRef3, { once: true, amount: 0.2 });
  const isHeadingInView = useInView(headingRef, { once: true });
  const isDescriptionInView = useInView(descriptionRef, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

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

  // Scroll to the section based on the hash in the URL
  useEffect(() => {
    // Function to handle scrolling with offset
    const scrollToSection = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 100; // Height of your navbar
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: "smooth",
        });
      }
    };

    // Handle initial load and hash changes
    if (location.hash) {
      // Remove the '#' from the hash to get the ID
      const sectionId = location.hash.replace("#", "");
      // Add a small delay to ensure the DOM is fully loaded
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 0);
    }
  }, [location.hash]);
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

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring for scroll animation
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

  const { scrollYProgress2 } = useScroll({
    target: sectionRef2,
    offset: ["start end", "end start"],
  });

  // Smooth spring for scroll animation
  const smoothProgress2 = useSpring(scrollYProgress2, {
    stiffness: 100,
    damping: 30,
  });

  // Heading animations with 3D effect
  const headingOpacity = useTransform(smoothProgress2, [0, 0.25], [0, 1]);
  const headingY = useTransform(smoothProgress2, [0, 0.25], [50, 0]);
  const headingZ = useTransform(smoothProgress2, [0, 0.25], [-50, 0]);
  const headingRotateX = useTransform(smoothProgress2, [0, 0.25], [10, 0]);
  const headingBlur = useTransform(smoothProgress2, [0.6, 0.8], [0, 5]);

  // Subheading animations
  const subheadingOpacity = useTransform(smoothProgress2, [0.1, 0.3], [0, 1]);
  const subheadingY = useTransform(smoothProgress2, [0.1, 0.3], [30, 0]);
  const subheadingZ = useTransform(smoothProgress2, [0.1, 0.3], [-30, 0]);
  const subheadingRotateX = useTransform(smoothProgress2, [0.1, 0.3], [8, 0]);

  // Paragraph animations
  const paragraphOpacity2 = useTransform(smoothProgress2, [0.2, 0.4], [0, 1]);
  const paragraphY2 = useTransform(smoothProgress2, [0.2, 0.4], [20, 0]);
  const paragraphZ = useTransform(smoothProgress2, [0.2, 0.4], [-20, 0]);
  const paragraphRotateX = useTransform(smoothProgress2, [0.2, 0.4], [5, 0]);
  const paragraphBlur2 = useTransform(smoothProgress2, [0.7, 0.9], [0, 3]);

  // Shared animation settings for all images
  const imageAnimationSettings = (delay) => {
    return {
      opacity: useTransform(
        smoothProgress2,
        [0.3 + delay, 0.5 + delay],
        [0, 1]
      ),
      y: useTransform(smoothProgress2, [0.3 + delay, 0.5 + delay], [100, 0]),
      z: useTransform(smoothProgress2, [0.3 + delay, 0.5 + delay], [-100, 0]),
      rotateX: useTransform(
        smoothProgress2,
        [0.3 + delay, 0.5 + delay],
        [12, 0]
      ),
      rotateY: useTransform(
        smoothProgress2,
        [0.3 + delay, 0.5 + delay],
        [5, 0]
      ),
      scale: useTransform(
        smoothProgress2,
        [0.3 + delay, 0.5 + delay, 0.8 + delay],
        [0.8, 1, 1.05]
      ),
      filter: useTransform(
        smoothProgress2,
        [0.3 + delay, 0.5 + delay, 0.8 + delay],
        ["blur(10px)", "blur(0px)", "blur(5px)"]
      ),
    };
  };

  // Goals & Mission Section Animations
  const { scrollYProgress: goalsMissionProgress } = useScroll({
    target: businessRef,
    offset: ["start end", "end start"],
  });

  const goalsMissionSmoothProgress = useSpring(goalsMissionProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Goals & Mission animations
  const goalsTitleOpacity = useTransform(
    goalsMissionSmoothProgress,
    [0, 0.25],
    [0, 1]
  );
  const goalsTitleY = useTransform(
    goalsMissionSmoothProgress,
    [0, 0.25],
    [50, 0]
  );
  const goalsTitleZ = useTransform(
    goalsMissionSmoothProgress,
    [0, 0.25],
    [-50, 0]
  );
  const goalsTitleRotateX = useTransform(
    goalsMissionSmoothProgress,
    [0, 0.25],
    [10, 0]
  );
  const goalsTitleBlur = useTransform(
    goalsMissionSmoothProgress,
    [0.6, 0.8],
    [0, 5]
  );

  // Supports Section Animations
  const { scrollYProgress: supportsProgress } = useScroll({
    target: supportsRef,
    offset: ["start end", "end start"],
  });

  const supportsSmoothProgress = useSpring(supportsProgress, {
    stiffness: 100,
    damping: 30,
  });

  // Supports section animations
  const supportsTitleOpacity = useTransform(
    supportsSmoothProgress,
    [0, 0.25],
    [0, 1]
  );
  const supportsTitleY = useTransform(
    supportsSmoothProgress,
    [0, 0.25],
    [50, 0]
  );
  const supportsTitleZ = useTransform(
    supportsSmoothProgress,
    [0, 0.25],
    [-50, 0]
  );
  const supportsTitleRotateX = useTransform(
    supportsSmoothProgress,
    [0, 0.25],
    [10, 0]
  );
  const supportsTitleBlur = useTransform(
    supportsSmoothProgress,
    [0.6, 0.8],
    [0, 5]
  );

  // Content animations for both sections
  const goalsContentOpacity = useTransform(
    goalsMissionSmoothProgress,
    [0.2, 0.4],
    [0, 1]
  );
  const goalsContentY = useTransform(
    goalsMissionSmoothProgress,
    [0.2, 0.4],
    [30, 0]
  );
  const goalsContentZ = useTransform(
    goalsMissionSmoothProgress,
    [0.2, 0.4],
    [-30, 0]
  );
  const goalsContentRotateX = useTransform(
    goalsMissionSmoothProgress,
    [0.2, 0.4],
    [8, 0]
  );

  const supportsContentOpacity = useTransform(
    supportsSmoothProgress,
    [0.2, 0.4],
    [0, 1]
  );
  const supportsContentY = useTransform(
    supportsSmoothProgress,
    [0.2, 0.4],
    [30, 0]
  );
  const supportsContentZ = useTransform(
    supportsSmoothProgress,
    [0.2, 0.4],
    [-30, 0]
  );
  const supportsContentRotateX = useTransform(
    supportsSmoothProgress,
    [0.2, 0.4],
    [8, 0]
  );

  // Card variants for staggered animation
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

  // Support cards data
  const supportCards = [
    {
      title: "Software Support",
      description:
        "Our expert team assists with installations, troubleshooting, and updates for all software solutions.",
      bgColor: "bg-[#fee9c0af]",
    },
    {
      title: "Hardware Support",
      description:
        "We provide hardware maintenance, upgrades, and repair services to ensure seamless operation.",
      bgColor: "bg-[#fee9c0af]",
      hasBorder: true,
    },
    {
      title: "Quality Service",
      description:
        "We are committed to delivering exceptional quality service, ensuring reliability, efficiency, and customer satisfaction at every step.",
      bgColor: "bg-[#fee9c0af]",
    },
    {
      title: "Cloud Solutions",
      description:
        "We help you migrate, manage, and secure your data on cloud platforms for optimal efficiency.",
      bgColor: "bg-[#fee9c0af]",
      hasBorder: true,
    },
    {
      title: "Network Support",
      description:
        "Get assistance with network setup, security, and maintenance to keep your business connected.",
      bgColor: "bg-[#fee9c0af]",
    },
    {
      title: "Training & Consultation",
      description:
        "We provide training and consulting services to empower your team with IT skills and best practices.",
      bgColor: "bg-[#fee9c0af]",
      hasBorder: true,
    },
  ];

  const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: false });

  const cardVariants2 = {
    hidden: { opacity: 0, filter: "blur(15px)", scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      filter: "blur(0px)",
      scale: 1,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  const opportunities = [
    {
      title: "Collaborative Partnerships",
      description:
        "Build powerful alliances to expand your market reach and share technological advancements. We connect you with key players to accelerate growth.",
    },
    {
      title: "Tailored IT Solutions",
      description:
        "Empower your business with cutting-edge IT services designed to streamline operations, enhance productivity, and deliver customer-centric solutions.",
    },
    {
      title: "Emerging Market Strategies",
      description:
        "Navigate new markets with confidence through data-driven strategies and comprehensive market insights tailored to your unique business needs.",
    },
    {
      title: "Scalable Digital Transformation",
      description:
        "Leverage our expertise in digital transformation to seamlessly transition your business into a scalable, efficient, and digitally-driven enterprise.",
    },
  ];

  // Image animation
  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

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
  // Main content section animation
  const [contentRef, contentInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

  return (
    <>
      <div data-scroll-container className="relative overflow-hidden ">
        {/* <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10">
            <img
              src={darkGradient}
              alt="Background Gradient"
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

        <section className="relative z-10 pb-10">
  {/* Background */}
  <div className="bg-[#fff] absolute top-0 bottom-0 right-0 left-0 -z-10 w-full"></div>

  {/* Content Container */}
  <div className="max-w-[1400px] mx-auto mb-10">
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 w-full px-4 md:pt-28 pt-20 ">
      
      {/* Left Side Content */}
      <motion.div
        className="w-full md:w-[60%] py-5 flex flex-col gap-6 md:gap-4 md:pr-10"
        ref={contentRef}
        initial="hidden"
        animate={contentInView ? "visible" : "hidden"}
        variants={fadeInRight}
      >
        <div className="flex flex-col gap-2 mb-1">
          {/* Heading */}
          <motion.div
            className="text-center mb-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#6D4C28] font-medium uppercase tracking-wider">
              About IMC
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 text-[#352317]">
              Know More About Us
            </h2>
            <div className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
          </motion.div>

          {/* Subheading */}
          <motion.div
            className="text-lg sm:text-xl md:text-2xl font-bold text-[#2e1e14] text-center"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Our Journey to Digital Excellence
          </motion.div>
        </div>

        {/* Paragraphs */}
        <motion.div
          className="text-sm sm:text-base md:text-[16px] text-[#000] leading-relaxed text-justify"
          variants={fadeInUp}
          transition={{ delay: 0.4 }}
        >
          IMC Business Solutions is a leading software company in India since 2017, offering a comprehensive management platform and a wide range of IT solutions, including business software, Android/iOS development, web development, hardware services, and IT support.

          

          <motion.span variants={fadeInUp} transition={{ delay: 0.6 }} className="block mt-2">
            We also operate Sysmac, a dedicated division providing hardware solutions and services to our clients.
          </motion.span>

          <motion.span variants={fadeInUp} transition={{ delay: 0.7 }} className="block mt-2">
            IMC delivers tailored software and technology solutions for businesses in India and beyond. With over 1,200 happy clients and 10+ branches across South India, we continue to empower businesses with cutting-edge technology solutions.
          </motion.span>
        </motion.div>
      </motion.div>

      {/* Right Side Image */}
      <motion.div
        className="w-full md:w-[40%] h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden"
        ref={imageRef}
        initial="hidden"
        animate={imageInView ? "visible" : "hidden"}
        variants={scale3d}
        style={{ perspective: "1000px" }}
      >
        <motion.img
          src={abouthome2}
          alt="About IMC"
          className="h-full w-full object-cover rounded-3xl"
          whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
        />
      </motion.div>
    </div>
  </div>
</section>


        {/* TEAM */}
        <div
          className="pt-[50px] py-20 relative flex flex-col justify-center items-center w-full bg-[#fcf3e1]"
          ref={sectionRef2}
        >
          <section className="w-full max-w-[1400px] mx-auto" id="team">
            {/* Section Heading */}
            <div className="mb-10 text-center ">
              <motion.div
                className="text-center mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-[#6D4C28] font-medium uppercase tracking-wider">
                  Our Team
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-[#352317]">
                  Behind the Vision
                </h2>
                <div className="w-24 h-1 bg-[#BF8C60] mx-auto mb-6"></div>
                <p className="text-[#000] text-sm md:text-base max-w-[700px] mx-auto mt-4">
                  Collaboration, innovation, and dedication united.
                </p>
              </motion.div>

              <motion.div
                className=" max-w-[700px] mx-auto text-[#000] text-sm md:text-base px-2"
                style={{
                  opacity: paragraphOpacity2,
                  y: paragraphY2,
                  z: paragraphZ,
                  rotateX: paragraphRotateX,
                  filter: useTransform(
                    paragraphBlur2,
                    (blur) => `blur(${blur}px)`
                  ),
                  transformStyle: "preserve-3d",
                }}
              >
                "Our dedicated team of experts collaborates to deliver
                innovative IT solutions, ensuring seamless business operations.
                With a passion for technology, we drive success through
                excellence and commitment."
              </motion.div>
            </div>

            {/* Team Member Images */}
            <div className="w-full" ref={imagesRef}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Image 1 */}
                <motion.div
                  className="w-[90%] mx-auto h-[400px] sm:h-[400px] md:h-[500px] bg-[#fff] rounded-lg overflow-hidden"
                  style={{
                    ...imageAnimationSettings(0),
                    perspective: 1000,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.img
                    src={ceo1}
                    alt="ceo1"
                    className="h-full w-full object-cover"
                    style={{
                      scale: useTransform(
                        smoothProgress,
                        [0.3, 0.5, 0.9],
                        [1.2, 1, 1.1]
                      ),
                    }}
                  />
                </motion.div>

                {/* Image 2 */}
                <motion.div
                  className="w-[90%] mx-auto h-[400px] sm:h-[400px] md:h-[500px] bg-[#fff] rounded-lg overflow-hidden"
                  style={{
                    ...imageAnimationSettings(0.1),
                    perspective: 1000,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.img
                    src={ceo2}
                    alt="ceo2"
                    className="h-full w-full object-cover"
                    style={{
                      scale: useTransform(
                        smoothProgress,
                        [0.4, 0.6, 0.9],
                        [1.2, 1, 1.1]
                      ),
                    }}
                  />
                </motion.div>

                {/* Image 3 */}
                <motion.div
                  className="w-[90%] mx-auto h-[400px] sm:h-[400px] md:h-[500px] bg-[#fff] rounded-lg overflow-hidden"
                  style={{
                    ...imageAnimationSettings(0.2),
                    perspective: 1000,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <motion.img
                    src={ceo3}
                    alt="ceo3"
                    className="h-full w-full object-cover"
                    style={{
                      scale: useTransform(
                        smoothProgress,
                        [0.5, 0.7, 0.9],
                        [1.2, 1, 1.1]
                      ),
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        <div className="pt-16 relative flex flex-col justify-center items-center w-full bg-gradient-to-b from-white to-amber-50 border-b border-amber-100">
          {/* Decorative elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-10">
            <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-amber-100 opacity-30 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-amber-50 opacity-40 blur-3xl"></div>
            <motion.div
              className="absolute -bottom-20 left-1/3 w-64 h-64 rounded-full bg-amber-200 opacity-20 blur-3xl"
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            ></motion.div>
          </div>

          {/* Title Section */}
          <motion.section
            id="goalsmission"
            className="max-w-[1400px] mx-auto w-full mb-16 px-4"
            initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
            whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ rotateX: 90, opacity: 0 }}
              whileInView={{ rotateX: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-center mb-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="text-amber-700 font-medium uppercase tracking-wider inline-block px-4 py-1 bg-amber-50 rounded-full shadow-sm">
                  Our Focus
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-stone-800 relative">
                  Vision and Mission
                  <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
                </h2>
                <p className="text-stone-700 text-lg md:text-xl max-w-[900px] mx-auto mt-4 font-light">
                  Innovation with Impact
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-stone-700 max-w-[900px] mx-auto text-center text-base sm:text-lg leading-relaxed"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Our vision is to lead in technological innovation, providing
              impactful solutions that drive business growth. We are committed
              to creating lasting value through strategic partnerships and
              cutting-edge products. Our mission is to empower our clients with
              the tools and expertise to succeed in an ever-evolving digital
              landscape. We strive for excellence, integrity, and a future of
              continuous progress.
            </motion.div>
          </motion.section>

          {/* Content Sections with Animations */}
          <section className="w-full max-w-[1400px] mx-auto mb-24 px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Section */}
              <div className="w-full flex flex-col gap-6">
                <motion.div
                  className="w-full h-[250px] sm:h-[300px] rounded-3xl overflow-hidden shadow-lg relative"
                  initial={{ scale: 1.05, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <img
                    src={vision}
                    alt="vision"
                    className="h-full w-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div> */}
                  <div className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                    Our Vision
                  </div>
                </motion.div>

                <motion.div
                  className="relative"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-200 to-amber-400 rounded-3xl blur opacity-20"></div>
                  <div className="bg-white backdrop-blur-sm border border-amber-100 text-stone-700 h-auto p-6 rounded-3xl shadow-md relative z-10">
                    <div className="w-12 h-1 bg-amber-400 mb-4"></div>
                    Our vision is to empower businesses with innovative and
                    reliable technology solutions. We aim to drive digital
                    transformation through cutting-edge services and
                    personalized support. By fostering a culture of innovation
                    and excellence, we strive to be a trusted partner in our
                    clients' success. Together, we shape a smarter, more
                    connected future.
                  </div>
                </motion.div>
              </div>

              {/* Right Section */}
              <div className="w-full flex flex-col gap-6">
                <motion.div
                  className="relative order-2 lg:order-1"
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-amber-200 rounded-3xl blur opacity-20"></div>
                  <div className="bg-white backdrop-blur-sm border border-amber-100 text-stone-700 h-auto p-6 rounded-3xl shadow-md relative z-10">
                    <div className="w-12 h-1 bg-amber-400 mb-4"></div>
                    Our mission is to deliver innovative solutions that empower
                    businesses to thrive in a digital world. We strive to create
                    products that simplify processes and drive efficiency.
                    Through collaboration and constant improvement, we aim to
                    exceed client expectations. We are dedicated to fostering
                    long-term relationships built on trust and success.
                  </div>
                </motion.div>

                <motion.div
                  className="w-full h-[250px] sm:h-[300px] rounded-3xl overflow-hidden shadow-lg relative order-1 lg:order-2"
                  initial={{ scale: 1.05, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  <img
                    src={mission}
                    alt="mission"
                    className="h-full w-full object-cover"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-amber-900/50 to-transparent"></div> */}
                  <div className="absolute bottom-6 left-6 text-white text-2xl font-semibold">
                    Our Mission
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>

        {/* footer */}
        <section className="py-10 bg-[#fff] w-full">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default company;
