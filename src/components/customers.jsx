import React, { useState, useEffect, useRef } from "react";
import Footer from "./Footer";
import aboutmain from "../assets/aboutmain.jpg";
import ceo1 from "../assets/ceo1.jpg";
import ceo2 from "../assets/ceo2.jpg";
import ceo3 from "../assets/ceo3.jpg";
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";
import shade from "../assets/SHADEorg.png";
import magnet from "../assets/MAGNET.png";
import dine from "../assets/DINE_1_copy.png";
import vtask from "../assets/VTASK.png";
import taskpro from "../assets/Task Pro.png";
import starstay from "../assets/starstay.png";
import clublogic from "../assets/CLUBLOGIC.png";
import auric from "../assets/AURIC.png";
import task from "../assets/task.png";
import client from "../assets/clients.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay, Navigation } from "swiper/modules";
import arogya from "../assets/arogya.png";
import hillroom from "../assets/hillroom.png";
import divine from "../assets/divine.png";
import vinayaka from "../assets/vinayaka.png";
import janatha from "../assets/janatha.png";
import shandha from "../assets/shantha.png";
import amminikkad from "../assets/amminikkad.jpg";
import immune from "../assets/immune.png";
import hyperone from "../assets/hyperone.jpeg";
import danuve from "../assets/danuve.png";
import geethas from "../assets/geethas.png";
import ogusto from "../assets/ogusto.png";
import tunes from "../assets/tunes.png";
import globallpg from "../assets/globallpg.png";
import globalglass from "../assets/globalglass.png";
import kb from "../assets/KBGROUP.jpeg";
import nahdha from "../assets/nahdha.png";
import shopmore from "../assets/shopmore.jpg";
import wayanadfloat from "../assets/wayanadfloat.png";
import peekay from "../assets/peekay.png";
import sevenbridge from "../assets/sevenbridge.png";
import panthallookaran from "../assets/panthallookaran.png";
import marineworld from "../assets/marineworld.png";
import fresh7 from "../assets/7fresh.png";
import talal from "../assets/talal.png";
import hypercity from "../assets/hypercity.jpg";
import freshday from "../assets/freshday.png";
import bhavans from "../assets/bhavansorg.png";
import ideal from "../assets/ideal.png";
import greenhills from "../assets/GREENHILLS.png";
import nair from "../assets/nairservicesociety.png";
import mcf from "../assets/mcf.png";
import convent from "../assets/convent.jpg";
import aastha from "../assets/AASTHA.jpeg";
import momsbake from "../assets/momsbake.jpg";
import arabia from "../assets/arabia.jpg";
import newform from "../assets/newform.jpg";
import union from "../assets/union.jpg";
import yemkem from "../assets/yemkem.png";
import alfa from "../assets/ALFA.jpeg";
import n4medicals from "../assets/n4medicals.jpg";
import anugraha from "../assets/anugraha.png";
import mazus from "../assets/mazus.png";
import orfila from "../assets/orfila.png";
import lavillainn from "../assets/lavillainn.png";
import bodyzone from "../assets/bodyzone.png";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import { motion, useAnimation } from "framer-motion";
import darkGradient from "../assets/darkGradient.jpg";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "./ChatBot";

const customers = () => {
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

  const [active, setActive] = useState();
  const clients = [
    { id: 1, name: "AROGYA", logo: arogya, location: "Meenangadi - Wayanad" },
    {
      id: 2,
      name: "Divine Grace Institutions",
      logo: divine,
      location: "Banglore",
    },
    {
      id: 3,
      name: "Janatha Hospital",
      logo: janatha,
      location: "Engappuzha - Calicut",
    },
    {
      id: 4,
      name: "Hill Blooms Health Care",
      logo: hillroom,
      location: "Coorge-Karnataka",
    },
    {
      id: 5,
      name: "Shantha Polyclinic & Diagnostic Center",
      logo: shandha,
      location: "Pullpally - Wayanad",
    },
    {
      id: 6,
      name: "Amminikkad Mediclic",
      logo: amminikkad,
      location: "Perinthalmanna - Calicut",
    },
    {
      id: 7,
      name: "Immune Poly Clinic & Diagnostic Center",
      logo: immune,
      location: "Valad - Wayanad",
    },
    {
      id: 8,
      name: "Vinayaka Hospital",
      logo: vinayaka,
      location: "Pondalur - Tamil Nadu",
    },
    { id: 9, name: "Mazuzs Inn", logo: mazus, location: "Vythiri - Wayanad" },
    {
      id: 10,
      name: "Orfila Inn",
      logo: orfila,
      location: "Nedumbassery - Cochin",
    },
    { id: 11, name: "LA VILLA INN", logo: lavillainn, location: "Wayanad" },
    { id: 12, name: "Alfa Agencies", logo: alfa, location: "Calicut" },
    {
      id: 13,
      name: "N4 Medicals",
      logo: n4medicals,
      location: "Cheruppalassery - Palakkad",
    },
    {
      id: 14,
      name: "NewForm Bakes",
      logo: newform,
      location: "Kalpetta - Wayanad",
    },
    {
      id: 15,
      name: "Mom's Bakes",
      logo: momsbake,
      location: "Cheruppalassery - Palakkad",
    },
    {
      id: 16,
      name: "MAMMA ARABIA",
      logo: arabia,
      location: "Koppam - Palakkad",
    },
    { id: 17, name: "Union", logo: union, location: "Nilambur - Malappuram" },
    {
      id: 18,
      name: "Ke Yem Holidays Restaurant",
      logo: yemkem,
      location: "Wayanad",
    },
    {
      id: 19,
      name: "Aastha Hotel",
      logo: aastha,
      location: "Pullpally - Wayanad",
    },
    {
      id: 20,
      name: "IDEAL ENGLISH SCHOOL",
      logo: ideal,
      location: "Sulthan Bathery - Wayanad",
    },
    {
      id: 21,
      name: "Nair Service Society",
      logo: nair,
      location: "Kalpetta - Wayanad",
    },
    {
      id: 22,
      name: "MCF Public School",
      logo: mcf,
      location: "Kalpetta - Wayanad",
    },
    {
      id: 23,
      name: "Convent School",
      logo: convent,
      location: "Kalpetta - Wayanad",
    },
    {
      id: 24,
      name: "Bhavan's Vidya Mandir",
      logo: bhavans,
      location: "Sulthan Bathery - Wayanad",
    },
    {
      id: 25,
      name: "The Greenhills Public School",
      logo: greenhills,
      location: "Sulthan Bathery - Wayanad",
    },
    {
      id: 26,
      name: "Nahdha Hypermarket",
      logo: nahdha,
      location: "Nahdha - Wayanad",
    },
    {
      id: 27,
      name: "Wayanad Floating Market",
      logo: wayanadfloat,
      location: "Lakkidi",
    },
    {
      id: 28,
      name: "Shop More",
      logo: shopmore,
      location: "Pulpally - Wayanad",
    },
    {
      id: 29,
      name: "PEEKAY Hypermarket",
      logo: peekay,
      location: "Banglore , Cochin",
    },
    {
      id: 30,
      name: "Ogusto Baqes and Cafe",
      logo: ogusto,
      location: "Sulthan Bathery - Wayanad",
    },
    {
      id: 31,
      name: "Marine World",
      logo: marineworld,
      location: "Chavakkad - Thrissur",
    },
    { id: 32, name: "Tunes", logo: tunes, location: "Wayanad" },
    {
      id: 33,
      name: "Global LPG Distributor",
      logo: globallpg,
      location: "Chalakkudy - Thrissur",
    },
    {
      id: 34,
      name: "Global Glass",
      logo: globalglass,
      location: "Mananthavady - Wayanad",
    },
    { id: 35, name: "Thalal Market", logo: talal, location: "Iritty" },
    {
      id: 36,
      name: "Freshday Hypermarket",
      logo: freshday,
      location: "Mukkam - Calicut",
    },
    {
      id: 37,
      name: "7 Fresh Supermarket",
      logo: fresh7,
      location: "Kunnamangalam - Calicut",
    },
    { id: 38, name: "Geethas", logo: geethas, location: "Kalpetta - Wayanad" },
    {
      id: 39,
      name: "Hyper City",
      logo: hypercity,
      location: "Kambalakkad , Kadavathoor",
    },
    {
      id: 40,
      name: "Panthallookaran",
      logo: panthallookaran,
      location: "Kodakara - Thrissur",
    },
    { id: 41, name: "Hyper One", logo: hyperone, location: "Calicut" },
    { id: 42, name: "DanuVe Hypermarket", logo: danuve, location: "Calicut" },
    {
      id: 43,
      name: "Seven Bridge",
      logo: sevenbridge,
      location: "Manjery - Malappuram",
    },
    { id: 44, name: "KB Traders", logo: kb, location: "Wayanad" },
  ];

  const [openChat, setOpenChat] = useState(false);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  const [activeIndex, setActiveIndex] = useState(0); // Default middle card index

  const swiperRef = useRef(null);
  const nextSlide = () => swiperRef.current?.slideNext();
  const prevSlide = () => swiperRef.current?.slidePrev();

  const [activeIndex1, setActiveIndex1] = useState(0); // Default middle card index
  const swiperRef1 = useRef(null);
  const nextSlide1 = () => swiperRef1.current?.slideNext();
  const prevSlide1 = () => swiperRef1.current?.slidePrev();

  const [activeIndex2, setActiveIndex2] = useState(0); // Default middle card index
  const swiperRef2 = useRef(null);
  const nextSlide2 = () => swiperRef2.current?.slideNext();
  const prevSlide2 = () => swiperRef2.current?.slidePrev();

  const [activeIndex3, setActiveIndex3] = useState(0); // Default middle card index
  const swiperRef3 = useRef(null);
  const nextSlide3 = () => swiperRef3.current?.slideNext();
  const prevSlide3 = () => swiperRef3.current?.slidePrev();

  const [activeIndex4, setActiveIndex4] = useState(0); // Default middle card index
  const swiperRef4 = useRef(null);
  const nextSlide4 = () => swiperRef4.current?.slideNext();
  const prevSlide4 = () => swiperRef4.current?.slidePrev();

  const [activeIndex5, setActiveIndex5] = useState(0); // Default middle card index
  const swiperRef5 = useRef(null);
  const nextSlide5 = () => swiperRef5.current?.slideNext();
  const prevSlide5 = () => swiperRef5.current?.slidePrev();

  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div data-scroll-container className="overflow-hidden relative">
      <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10">
        <img src={darkGradient} alt="" className="h-full w-full object-cover" />
      </div>
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
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="md:pt-[150px] pt-[100px] flex flex-col justify-center items-center w-full overflow-hidden"
      >
        <section
          id="customers"
          className="max-w-[1400px] mx-auto mb-10 w-full px-4"
        >
          <div className="w-full flex flex-col md:flex-row items-center gap-10 p-8 md:p-16 rounded-3xl">
            {/* Left Section - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2 text-left"
            >
              <h2 className="textGradient4 text-white text-3xl md:text-5xl font-bold mb-5">
                CUSTOMERS
              </h2>
              <p className="textGradient6 text-white text-base md:text-lg mb-5">
                Customers play a crucial role in defining a business's dignity
                and credibility. For us, they are our greatest strength. Our
                primary focus is to maintain strong and positive relationships
                with them. Here, we are pleased to introduce a few of our valued
                customers.
              </p>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <div className="w-full h-[300px] md:h-[400px] overflow-hidden rounded-3xl shadow-lg">
                <img
                  src={client}
                  alt="Client"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
      <section className="py-16 border-b border-[#111B21] relative px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="container mx-auto px-9 relative md:px-10"
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
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 4, spaceBetween: 24 },
              1024: { slidesPerView: 6, spaceBetween: 30 },
            }}
          >
            {clients.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-md min-h-64 pt-10 flex flex-col items-center h-[300px] md:h-[340px]"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="w-[150px] h-[150px] mb-4"
                  >
                    <img
                      src={item.logo}
                      alt={item.name}
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">{item.name}</h3>
                  <p className="text-gray-700">{item.location}</p>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons with hover effect */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="prev-slide absolute left-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="next-slide absolute right-0 top-1/2 -translate-y-1/2 bg-black text-white p-2 rounded-full"
          >
            <ChevronRight size={24} />
          </motion.button>
        </motion.div>
      </section>

      {/* footer */}
      <section className="py-10 bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
};

export default customers;
