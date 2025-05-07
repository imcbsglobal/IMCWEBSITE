// import React, { useState, useEffect ,useRef} from "react";
// import Footer from "./Footer";
// import aboutmain from "../assets/b.jpeg";
// import ceo1 from "../assets/ceo1.jpg";
// import ceo2 from "../assets/ceo2.jpg";
// import ceo3 from "../assets/ceo3.jpg";
// import vision from "../assets/vision.jpg";
// import mission from "../assets/mission.jpg";
// import "swiper/css";
// import "swiper/css/autoplay";
// import { useLocation } from "react-router-dom";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/dist/locomotive-scroll.css";
// import darkGradient from "../assets/darkGradient.jpg"
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useInView } from "framer-motion";
// import { RiWhatsappLine } from "react-icons/ri";
// import ChatBot from "./ChatBot";

// const company = () => {
//      const [openChat, setOpenChat] = useState(false)
  
//   const location = useLocation();
//   const locoRef = useRef(null);
//   const sectionRef = useRef(null);
//   const sectionRef2 = useRef(null);
//   const sectionRef3 = useRef(null);
//   const imageRef = useRef(null);
//   const imagesRef = useRef(null);
//   const businessRef = useRef(null);
//   const supportsRef = useRef(null);
//   const headingRef = useRef(null);
//   const descriptionRef = useRef(null);
//   const isInView = useInView(sectionRef3, { once: true, amount: 0.2 });
//   const isHeadingInView = useInView(headingRef, { once: true });
//   const isDescriptionInView = useInView(descriptionRef, { once: true });
//   const [hasAnimated, setHasAnimated] = useState(false);
//   const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

//   useEffect(() => {
//       if (!locoRef.current) return;
  
//       const locoScroll = new LocomotiveScroll({
//         el: locoRef.current,
//         smooth: true,
//         lerp: 0.1,
//       });
  
//       return () => {
//         if (locoScroll) locoScroll.destroy();
//       };
//     }, []);

//   // Scroll to the section based on the hash in the URL
//   useEffect(() => {
//     // Function to handle scrolling with offset
//     const scrollToSection = (sectionId) => {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         const navbarHeight = 100; // Height of your navbar
//         const elementPosition = element.getBoundingClientRect().top + window.scrollY;
//         window.scrollTo({
//           top: elementPosition - navbarHeight,
//           behavior: "smooth"
//         });
//       }
//     };

//     // Handle initial load and hash changes
//     if (location.hash) {
//       // Remove the '#' from the hash to get the ID
//       const sectionId = location.hash.replace("#", "");
//       // Add a small delay to ensure the DOM is fully loaded
//       setTimeout(() => {
//         scrollToSection(sectionId);
//       }, 0);
//     }
//   }, [location.hash]);
//   const [active, setActive] = useState(false);
  
//     useEffect(() => {
//       // Scroll to top when this component loads
//       window.scrollTo({ top: 0, behavior: "smooth" });
  
//       const scrollActive = () => {
//         setActive(window.scrollY > 20);
//       };
//       window.addEventListener("scroll", scrollActive);
  
//       return () => window.removeEventListener("scroll", scrollActive);
//     }, []);

//     const { scrollYProgress } = useScroll({
//       target: sectionRef,
//       offset: ["start end", "end start"]
//     });
  
//     // Smooth spring for scroll animation
//     const smoothProgress = useSpring(scrollYProgress, { 
//       stiffness: 100, 
//       damping: 30 
//     });
  
//     // Text animations (bottom to top reveal)
//     const titleOpacity = useTransform(smoothProgress, [0, 0.25], [0, 1]);
//     const titleY = useTransform(smoothProgress, [0, 0.25], [50, 0]);
//     const titleBlur = useTransform(smoothProgress, [0.6, 0.8], [0, 8]);
  
//     const paragraphOpacity = useTransform(smoothProgress, [0.2, 0.4], [0, 1]);
//     const paragraphY = useTransform(smoothProgress, [0.2, 0.4], [50, 0]);
//     const paragraphBlur = useTransform(smoothProgress, [0.7, 0.9], [0, 5]);
  
//     // Banner image animations
//     const imageScale = useTransform(smoothProgress, [0.4, 0.6], [0.8, 1]);
//     const imageOpacity = useTransform(smoothProgress, [0.4, 0.6], [0, 1]);
//     const imageRotateX = useTransform(smoothProgress, [0.4, 0.6], [10, 0]);
//     const imageRotateY = useTransform(smoothProgress, [0.4, 0.6], [5, 0]);
//     const imagePerspective = useTransform(smoothProgress, [0.4, 0.6], [800, 1200]);

//     const { scrollYProgress2 } = useScroll({
//       target: sectionRef2,
//       offset: ["start end", "end start"]
//     });
  
//     // Smooth spring for scroll animation
//     const smoothProgress2 = useSpring(scrollYProgress2, { 
//       stiffness: 100, 
//       damping: 30 
//     });
  
//     // Heading animations with 3D effect
//     const headingOpacity = useTransform(smoothProgress2, [0, 0.25], [0, 1]);
//     const headingY = useTransform(smoothProgress2, [0, 0.25], [50, 0]);
//     const headingZ = useTransform(smoothProgress2, [0, 0.25], [-50, 0]);
//     const headingRotateX = useTransform(smoothProgress2, [0, 0.25], [10, 0]);
//     const headingBlur = useTransform(smoothProgress2, [0.6, 0.8], [0, 5]);
  
//     // Subheading animations
//     const subheadingOpacity = useTransform(smoothProgress2, [0.1, 0.3], [0, 1]);
//     const subheadingY = useTransform(smoothProgress2, [0.1, 0.3], [30, 0]);
//     const subheadingZ = useTransform(smoothProgress2, [0.1, 0.3], [-30, 0]);
//     const subheadingRotateX = useTransform(smoothProgress2, [0.1, 0.3], [8, 0]);
  
//     // Paragraph animations
//     const paragraphOpacity2 = useTransform(smoothProgress2, [0.2, 0.4], [0, 1]);
//     const paragraphY2 = useTransform(smoothProgress2, [0.2, 0.4], [20, 0]);
//     const paragraphZ = useTransform(smoothProgress2, [0.2, 0.4], [-20, 0]);
//     const paragraphRotateX = useTransform(smoothProgress2, [0.2, 0.4], [5, 0]);
//     const paragraphBlur2 = useTransform(smoothProgress2, [0.7, 0.9], [0, 3]);
  
//     // Shared animation settings for all images
//     const imageAnimationSettings = (delay) => {
//       return {
//         opacity: useTransform(smoothProgress2, [0.3 + delay, 0.5 + delay], [0, 1]),
//         y: useTransform(smoothProgress2, [0.3 + delay, 0.5 + delay], [100, 0]),
//         z: useTransform(smoothProgress2, [0.3 + delay, 0.5 + delay], [-100, 0]),
//         rotateX: useTransform(smoothProgress2, [0.3 + delay, 0.5 + delay], [12, 0]),
//         rotateY: useTransform(smoothProgress2, [0.3 + delay, 0.5 + delay], [5, 0]),
//         scale: useTransform(smoothProgress2, [0.3 + delay, 0.5 + delay, 0.8 + delay], [0.8, 1, 1.05]),
//         filter: useTransform(
//           smoothProgress2, 
//           [0.3 + delay, 0.5 + delay, 0.8 + delay], 
//           ["blur(10px)", "blur(0px)", "blur(5px)"]
//         )
//       };
//     };

//     // Goals & Mission Section Animations
//     const { scrollYProgress: goalsMissionProgress } = useScroll({
//       target: businessRef,
//       offset: ["start end", "end start"]
//     });

//     const goalsMissionSmoothProgress = useSpring(goalsMissionProgress, { 
//       stiffness: 100, 
//       damping: 30 
//     });

//     // Goals & Mission animations
//     const goalsTitleOpacity = useTransform(goalsMissionSmoothProgress, [0, 0.25], [0, 1]);
//     const goalsTitleY = useTransform(goalsMissionSmoothProgress, [0, 0.25], [50, 0]);
//     const goalsTitleZ = useTransform(goalsMissionSmoothProgress, [0, 0.25], [-50, 0]);
//     const goalsTitleRotateX = useTransform(goalsMissionSmoothProgress, [0, 0.25], [10, 0]);
//     const goalsTitleBlur = useTransform(goalsMissionSmoothProgress, [0.6, 0.8], [0, 5]);

//     // Supports Section Animations
//     const { scrollYProgress: supportsProgress } = useScroll({
//       target: supportsRef,
//       offset: ["start end", "end start"]
//     });

//     const supportsSmoothProgress = useSpring(supportsProgress, { 
//       stiffness: 100, 
//       damping: 30 
//     });

//     // Supports section animations
//     const supportsTitleOpacity = useTransform(supportsSmoothProgress, [0, 0.25], [0, 1]);
//     const supportsTitleY = useTransform(supportsSmoothProgress, [0, 0.25], [50, 0]);
//     const supportsTitleZ = useTransform(supportsSmoothProgress, [0, 0.25], [-50, 0]);
//     const supportsTitleRotateX = useTransform(supportsSmoothProgress, [0, 0.25], [10, 0]);
//     const supportsTitleBlur = useTransform(supportsSmoothProgress, [0.6, 0.8], [0, 5]);

//     // Content animations for both sections
//     const goalsContentOpacity = useTransform(goalsMissionSmoothProgress, [0.2, 0.4], [0, 1]);
//     const goalsContentY = useTransform(goalsMissionSmoothProgress, [0.2, 0.4], [30, 0]);
//     const goalsContentZ = useTransform(goalsMissionSmoothProgress, [0.2, 0.4], [-30, 0]);
//     const goalsContentRotateX = useTransform(goalsMissionSmoothProgress, [0.2, 0.4], [8, 0]);

//     const supportsContentOpacity = useTransform(supportsSmoothProgress, [0.2, 0.4], [0, 1]);
//     const supportsContentY = useTransform(supportsSmoothProgress, [0.2, 0.4], [30, 0]);
//     const supportsContentZ = useTransform(supportsSmoothProgress, [0.2, 0.4], [-30, 0]);
//     const supportsContentRotateX = useTransform(supportsSmoothProgress, [0.2, 0.4], [8, 0]);

//      // Card variants for staggered animation
//   const cardVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: {
//         delay: i * 0.1,
//         duration: 0.6,
//         ease: "easeOut"
//       }
//     })
//   };

//   // Support cards data
//   const supportCards = [
//     {
//       title: "Software Support",
//       description: "Our expert team assists with installations, troubleshooting, and updates for all software solutions.",
//       bgColor: "bg-[#fee9c0af]"
//     },
//     {
//       title: "Hardware Support",
//       description: "We provide hardware maintenance, upgrades, and repair services to ensure seamless operation.",
//       bgColor: "bg-[#fee9c0af]",
//       hasBorder: true
//     },
//     {
//       title: "Quality Service",
//       description: "We are committed to delivering exceptional quality service, ensuring reliability, efficiency, and customer satisfaction at every step.",
//       bgColor: "bg-[#fee9c0af]"
//     },
//     {
//       title: "Cloud Solutions",
//       description: "We help you migrate, manage, and secure your data on cloud platforms for optimal efficiency.",
//       bgColor: "bg-[#fee9c0af]",
//       hasBorder: true
//     },
//     {
//       title: "Network Support",
//       description: "Get assistance with network setup, security, and maintenance to keep your business connected.",
//       bgColor: "bg-[#fee9c0af]"
//     },
//     {
//       title: "Training & Consultation",
//       description: "We provide training and consulting services to empower your team with IT skills and best practices.",
//       bgColor: "bg-[#fee9c0af]",
//       hasBorder: true
//     }
//   ];

//   const { ref: ref6, inView: inView6 } = useInView({ triggerOnce: false });

//   const cardVariants2 = {
//     hidden: { opacity: 0, filter: "blur(15px)", scale: 0.9 },
//     visible: (i) => ({
//       opacity: 1,
//       filter: "blur(0px)",
//       scale: 1,
//       transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
//     }),
//     hover: { scale: 1.05, transition: { duration: 0.3 } },
//   };

//   const opportunities = [
//     {
//       title: "Collaborative Partnerships",
//       description:
//         "Build powerful alliances to expand your market reach and share technological advancements. We connect you with key players to accelerate growth.",
//     },
//     {
//       title: "Tailored IT Solutions",
//       description:
//         "Empower your business with cutting-edge IT services designed to streamline operations, enhance productivity, and deliver customer-centric solutions.",
//     },
//     {
//       title: "Emerging Market Strategies",
//       description:
//         "Navigate new markets with confidence through data-driven strategies and comprehensive market insights tailored to your unique business needs.",
//     },
//     {
//       title: "Scalable Digital Transformation",
//       description:
//         "Leverage our expertise in digital transformation to seamlessly transition your business into a scalable, efficient, and digitally-driven enterprise.",
//     },
//   ];

  
  
//   return (
//     <>
//       <div data-scroll-container className="relative overflow-hidden ">
//         {/* <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10">
//             <img
//               src={darkGradient}
//               alt="Background Gradient"
//               className="w-full h-full object-cover"
//             />
//           </div> */}
//         <a href="https://wa.me/+917593820007">
//           <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
//             <RiWhatsappLine />
//           </div>
//                 
//         </a>

//         {/* chatbot */}
//         <div className="bottom-10 fixed right-10 z-[999]">
//           {openChat ? (
//             <div className="fixed bottom-10 z-[999] right-10">
//               <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
//             </div>
//           ) : (
//             <div className="fixed bottom-10 z-[999] right-10">
//               <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
//             </div>
//           )}
//         </div>
//         {/* about */}
//         <div className="flex flex-col justify-center items-center w-full bg-[#f3e5c9]">
//           <section
//             id="aboutid"
//             className="w-full relative pb-20 pt-[100px] md:pt-[150px]"
//             ref={sectionRef}
//           >
//             {/* <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10">
//               <img src={darkGradient} alt="Background Gradient" />
//             </div> */}
//             <div className="w-full px-2 max-w-[1400px] mx-auto">
//               <motion.div
//                 className="text-[#32251F] text-[16px] md:text-[30px] mb-5 textGradient5
//                  font-bold text-center leading-tight overflow-hidden"
//                 style={{
//                   opacity: titleOpacity,
//                   y: titleY,
//                   filter: useTransform(titleBlur, (blur) => `blur(${blur}px)`),
//                 }}
//               >
//                 WHO WE ARE
//                 <motion.span
//                   className="block text-[36px] md:text-[50px] textGradient4"
//                   style={{
//                     opacity: useTransform(smoothProgress, [0.1, 0.3], [0, 1]),
//                     y: useTransform(smoothProgress, [0.1, 0.3], [30, 0]),
//                   }}
//                 >
//                   A Successful And Innovative IT Company
//                 </motion.span>
//               </motion.div>

//               <motion.div
//                 className="text-[#000] max-w-[700px] mb-10 mx-auto px-2 textGradient6 text-center overflow-hidden"
//                 style={{
//                   opacity: paragraphOpacity,
//                   y: paragraphY,
//                   filter: useTransform(
//                     paragraphBlur,
//                     (blur) => `blur(${blur}px)`
//                   ),
//                 }}
//               >
//                 IMC Business Solutions is an Indian software company established
//                 in 2017, offering a comprehensive management platform that
//                 includes business software, Android/iOS development, web
//                 development, hardware and IT support, and business execution
//                 services. Our goal is to bring RITS Software's products to
//                 global markets.
//               </motion.div>

//               <motion.div
//                 className="h-[600px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl"
//                 // style={{
//                 //   opacity: imageOpacity,
//                 //   scale: imageScale,
//                 //   perspective: imagePerspective,
//                 // }}
//                 // ref={imageRef}
//               >
//                 <motion.div
//                   className="rounded-3xl w-full h-full bg-[#000] overflow-hidden"
//                   // style={{
//                   //   rotateX: imageRotateX,
//                   //   rotateY: imageRotateY,
//                   //   transformStyle: "preserve-3d",
//                   // }}
//                 >
//                   <motion.img
//                     src={aboutmain}
//                     alt="About IMC"
//                     className="w-full h-full object-cover"
//                     style={{
//                       scale: useTransform(
//                         smoothProgress,
//                         [0.4, 0.7, 1],
//                         [1, 1.05, 1.1]
//                       ),
//                     }}
//                     whileInView={{
//                       transition: {
//                         duration: 1.5,
//                         ease: "easeOut",
//                       },
//                     }}
//                   />
//                 </motion.div>
//               </motion.div>
//             </div>
//           </section>
//         </div>

//         {/* TEAM */}
//         <div
//           className="pt-[50px] py-20 relative flex flex-col justify-center items-center w-full bg-[#fcf3e1]"
//           ref={sectionRef2}
//         >
//           <section className="w-full max-w-[1400px] mx-auto" id="team">
//             {/* Section Heading */}
//             <div className="mb-10 text-center ">
//               <motion.div
//                 className="text-[#32251F] textGradient4 text-[30px] md:text-[50px] leading-tight mb-5"
//                 style={{
//                   opacity: headingOpacity,
//                   y: headingY,
//                   z: headingZ,
//                   rotateX: headingRotateX,
//                   filter: useTransform(
//                     headingBlur,
//                     (blur) => `blur(${blur}px)`
//                   ),
//                   transformStyle: "preserve-3d",
//                   perspective: 1000,
//                 }}
//               >
//                 Behind the Vision
//                 <motion.span
//                   className="block text-[20px] md:text-[30px] textGradient5 font-bold px-2"
//                   style={{
//                     opacity: subheadingOpacity,
//                     y: subheadingY,
//                     z: subheadingZ,
//                     rotateX: subheadingRotateX,
//                     transformStyle: "preserve-3d",
//                   }}
//                 >
//                   Collaboration, innovation, and dedication united.
//                 </motion.span>
//               </motion.div>

//               <motion.div
//                 className="textGradient6 max-w-[700px] mx-auto text-[#000] text-sm md:text-base px-2"
//                 style={{
//                   opacity: paragraphOpacity2,
//                   y: paragraphY2,
//                   z: paragraphZ,
//                   rotateX: paragraphRotateX,
//                   filter: useTransform(
//                     paragraphBlur2,
//                     (blur) => `blur(${blur}px)`
//                   ),
//                   transformStyle: "preserve-3d",
//                 }}
//               >
//                 "Our dedicated team of experts collaborates to deliver
//                 innovative IT solutions, ensuring seamless business operations.
//                 With a passion for technology, we drive success through
//                 excellence and commitment."
//               </motion.div>
//             </div>

//             {/* Team Member Images */}
//             <div className="w-full" ref={imagesRef}>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
//                 {/* Image 1 */}
//                 <motion.div
//                   className="w-[90%] mx-auto h-[400px] sm:h-[400px] md:h-[500px] bg-[#fff] rounded-lg overflow-hidden"
//                   style={{
//                     ...imageAnimationSettings(0),
//                     perspective: 1000,
//                     transformStyle: "preserve-3d",
//                   }}
//                 >
//                   <motion.img
//                     src={ceo1}
//                     alt="ceo1"
//                     className="h-full w-full object-cover"
//                     style={{
//                       scale: useTransform(
//                         smoothProgress,
//                         [0.3, 0.5, 0.9],
//                         [1.2, 1, 1.1]
//                       ),
//                     }}
//                   />
//                 </motion.div>

//                 {/* Image 2 */}
//                 <motion.div
//                   className="w-[90%] mx-auto h-[400px] sm:h-[400px] md:h-[500px] bg-[#fff] rounded-lg overflow-hidden"
//                   style={{
//                     ...imageAnimationSettings(0.1),
//                     perspective: 1000,
//                     transformStyle: "preserve-3d",
//                   }}
//                 >
//                   <motion.img
//                     src={ceo2}
//                     alt="ceo2"
//                     className="h-full w-full object-cover"
//                     style={{
//                       scale: useTransform(
//                         smoothProgress,
//                         [0.4, 0.6, 0.9],
//                         [1.2, 1, 1.1]
//                       ),
//                     }}
//                   />
//                 </motion.div>

//                 {/* Image 3 */}
//                 <motion.div
//                   className="w-[90%] mx-auto h-[400px] sm:h-[400px] md:h-[500px] bg-[#fff] rounded-lg overflow-hidden"
//                   style={{
//                     ...imageAnimationSettings(0.2),
//                     perspective: 1000,
//                     transformStyle: "preserve-3d",
//                   }}
//                 >
//                   <motion.img
//                     src={ceo3}
//                     alt="ceo3"
//                     className="h-full w-full object-cover"
//                     style={{
//                       scale: useTransform(
//                         smoothProgress,
//                         [0.5, 0.7, 0.9],
//                         [1.2, 1, 1.1]
//                       ),
//                     }}
//                   />
//                 </motion.div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* goalsmission */}
//         <div className="pt-[50px] relative flex flex-col justify-center items-center w-full bg-[#f3e5c9]">
//           {/* Background Image with Animation */}
//           {/* <motion.div
//             className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10"
//             // initial={{ scale: 1.2, opacity: 0 }}
//             // whileInView={{ scale: 1, opacity: 1 }}
//             // transition={{ duration: 1, ease: "easeInOut" }}
//             // viewport={{ once: false }}
//           >
//             <img
//               src={darkGradient}
//               alt=""
//               className="w-full h-full object-cover"
//             /> */}
//           {/* </motion.div> */}

//           {/* Title Animation */}
//           <motion.section
//             id="goalsmission"
//             className="max-w-[1400px] mx-auto w-full mb-10"
//             initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
//             whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
//             transition={{ duration: 0.8, ease: "easeOut" }}
//             viewport={{ once: true }}
//           >
//             <motion.div
//               initial={{ rotateX: 90, opacity: 0 }}
//               whileInView={{ rotateX: 0, opacity: 1 }}
//               transition={{ duration: 0.8, ease: "easeOut" }}
//               viewport={{ once: true }}
//             >
//               <div className="text-[30px] sm:text-[40px] md:text-[50px] textGradient4 text-[#32251F] text-center leading-tight mb-5">
//                 VISION AND MISSION
//                 <span className="block text-[18px] sm:text-[25px] textGradient5 font-bold md:text-[30px]">
//                   Innovation with Impact
//                 </span>
//               </div>
//             </motion.div>
//             <motion.div
//               className="text-[#000] max-w-[900px] mx-auto text-center textGradient6 text-sm sm:text-base"
//               initial={{ y: 50, opacity: 0 }}
//               whileInView={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//               viewport={{ once: true }}
//             >
//               Our vision is to lead in technological innovation, providing
//               impactful solutions that drive business growth. We are committed
//               to creating lasting value through strategic partnerships and
//               cutting-edge products. Our mission is to empower our clients with
//               the tools and expertise to succeed in an ever-evolving digital
//               landscape. We strive for excellence, integrity, and a future of
//               continuous progress.
//             </motion.div>
//           </motion.section>

//           {/* Content Sections with Animations */}
//           <section className="w-full max-w-[1400px] mx-auto mb-20 px-2">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
//               {/* Left Section */}
//               <div className="w-full flex flex-col gap-5">
//                 <motion.div
//                   className="w-full h-[200px] sm:h-[250px] bg-[#000] rounded-3xl overflow-hidden"
//                   initial={{ scale: 1.2, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   viewport={{ once: true }}
//                 >
//                   <img
//                     src={vision}
//                     alt="vision"
//                     className="h-full w-full object-cover rounded-3xl"
//                   />
//                 </motion.div>

//                 <motion.div
//                   className="bg-gradient-to-r p-[1px] rounded-3xl"
//                   initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
//                   whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="bg-[#ffffff11] backdrop-blur-sm border text-[#000]  border-[#32251F] h-auto p-4 rounded-3xl">
//                     Our vision is to empower businesses with innovative and
//                     reliable technology solutions. We aim to drive digital
//                     transformation through cutting-edge services and
//                     personalized support. By fostering a culture of innovation
//                     and excellence, we strive to be a trusted partner in our
//                     clients' success. Together, we shape a smarter, more
//                     connected future.
//                   </div>
//                 </motion.div>
//               </div>

//               {/* Right Section */}
//               <div className="w-full flex flex-col gap-5">
//                 <motion.div
//                   className="bg-gradient-to-r p-[1px] rounded-3xl"
//                   initial={{ y: 50, opacity: 0, filter: "blur(10px)" }}
//                   whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   viewport={{ once: true }}
//                 >
//                   <div className="bg-[#ffffff11] backdrop-blur-sm border text-[#000]  border-[#32251F] h-auto p-4 rounded-3xl">
//                     Our mission is to deliver innovative solutions that empower
//                     businesses to thrive in a digital world. We strive to create
//                     products that simplify processes and drive efficiency.
//                     Through collaboration and constant improvement, we aim to
//                     exceed client expectations. We are dedicated to fostering
//                     long-term relationships built on trust and success.
//                   </div>
//                 </motion.div>

//                 <motion.div
//                   className="w-full h-[200px] sm:h-[250px] bg-[#fff] rounded-3xl overflow-hidden"
//                   initial={{ scale: 1.2, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.8, ease: "easeOut" }}
//                   viewport={{ once: true }}
//                 >
//                   <img
//                     src={mission}
//                     alt="mission"
//                     className="h-full w-full object-cover rounded-3xl"
//                   />
//                 </motion.div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* SUPPORTS */}
//         <div
//           className="pt-2 relative py-20 flex flex-col justify-center items-center w-full bg-[#352317]"
//           ref={sectionRef3}
//         >
//           {/* <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10">
//             <motion.img
//               src={darkGradient}
//               alt=""
//               className="w-full h-full object-cover"
//               // initial={{ opacity: 0 }}
//               // animate={isInView ? { opacity: 1 } : { opacity: 0 }}
//               // transition={{ duration: 1 }}
//             />
//           </div> */}

//           <section
//             id="supports"
//             className="max-w-[1400px] mx-auto w-full mb-2 p-6"
//           >
//             <div className="h-auto w-full overflow-hidden rounded-3xl">
//               <div className="rounded-3xl w-full h-full overflow-hidden p-4">
//                 <div className="text-center mb-8">
//                   <motion.h2
//                     ref={headingRef}
//                     className="text-[30px] sm:text-[40px] md:text-[50px] font-extrabold text-[#fff] mb-1 textGradient4 pt-5"
//                     initial={{ opacity: 0, y: -20 }}
//                     animate={
//                       isHeadingInView
//                         ? { opacity: 1, y: 0 }
//                         : { opacity: 0, y: -20 }
//                     }
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                   >
//                     Support
//                   </motion.h2>
//                   <motion.p
//                     ref={descriptionRef}
//                     className="text-white text-sm md:text-base textGradient6"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={
//                       isDescriptionInView
//                         ? { opacity: 1, y: 0 }
//                         : { opacity: 0, y: 20 }
//                     }
//                     transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
//                   >
//                     We are here to help you with all your needs. Explore our
//                     services and get the support you require.
//                   </motion.p>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//                   {supportCards.map((card, index) => (
//                     <motion.div
//                       key={index}
//                       className={`${
//                         card.bgColor
//                       } rounded-lg p-6 flex flex-col justify-center gap-4 textGradient6 ${
//                         card.hasBorder ? "border border-gray-200" : ""
//                       }`}
//                       custom={index}
//                       initial="hidden"
//                       variants={cardVariants}
//                       whileInView="visible"
//                       viewport={{ once: true, amount: 0.2 }}
//                       whileHover={{
//                         scale: 1.03,
//                         transition: { duration: 0.3 },
//                       }}
//                     >
//                       <motion.h3
//                         className="text-white font-semibold text-lg"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
//                       >
//                         {card.title}
//                       </motion.h3>
//                       <motion.p
//                         className="text-white textGradient6"
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
//                       >
//                         {card.description}
//                       </motion.p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* bussiness opportunities */}
//         <div className=" flex flex-col justify-center items-center w-full  relative bg-[#F3E5C9]">
//           {/* <motion.div
//             // initial={{ scale: 1.2, opacity: 0 }}
//             // whileInView={{ scale: 1, opacity: 1 }}
//             // transition={{ duration: 1, ease: "easeInOut" }}
//             // viewport={{ once: false }}
//           className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10">
//             <img
//               src={darkGradient}
//               alt=""
//               className="w-full h-full object-cover"
//             />
//           </motion.div> */}
//           <section
//             id="bussinessopportunities"
//             className="max-w-[1400px] mx-auto w-full mb-10 p-6"
//           >
//             <div className="w-full overflow-hidden rounded-3xl">
//               <div className="rounded-3xl w-full overflow-hidden p-4 text-white">
//                 {/* Section Header */}
//                 <div className="text-center mb-8">
//                   <motion.h2
//                     variants={cardVariants2}
//                     initial="hidden"
//                     whileInView="visible"
//                     whileHover="hover"
//                     className="text-[30px] sm:text-[40px] md:text-[50px] font-extrabold mb-1 textGradient4"
//                   >
//                     Business Opportunities
//                   </motion.h2>
//                   <motion.p
//                     variants={cardVariants2}
//                     initial="hidden"
//                     whileInView="visible"
//                     whileHover="hover"
//                     className="text-sm md:text-base max-w-[1000px] mx-auto textGradient6"
//                   >
//                     Unlock growth through partnerships, technological
//                     innovation, and market-driven solutions. Whether you're a
//                     startup or a growing enterprise, we are your partner for
//                     business transformation.
//                   </motion.p>
//                 </div>

//                 {/* Grid Section */}
//                 <div className="grid gap-5 sm:grid-cols-2">
//                   {opportunities.map((opportunity, index) => (
//                     <motion.div
//                       key={index}
//                       className="bg-[#352317] p-5 textGradient6 rounded-3xl text-[#fff] border flex flex-col justify-center items-start gap-4"
//                       variants={cardVariants2}
//                       initial="hidden"
//                       whileInView="visible"
//                       whileHover="hover"
//                       custom={index}
//                     >
//                       <h3 className="text-xl font-semibold">
//                         {opportunity.title}
//                       </h3>
//                       <p className="text-sm">{opportunity.description}</p>
//                     </motion.div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* footer */}
//         <section className="py-10 bg-[#fff] w-full">
//           <Footer />
//         </section>
//       </div>
//     </>
//   );
// };

// export default company;
