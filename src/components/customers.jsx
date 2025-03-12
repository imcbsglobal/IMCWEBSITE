import React, { useState, useEffect ,useRef} from "react";
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
import { Autoplay,Navigation } from "swiper/modules";
import arogya from '../assets/arogya.png'
import hillroom from'../assets/hillroom.png'
import divine from '../assets/divine.png'
import vinayaka from '../assets/vinayaka.png'
import janatha from '../assets/janatha.png'
import shandha from '../assets/shantha.png'
import amminikkad from '../assets/amminikkad.jpg'
import immune from '../assets/immune.png'
import hyperone from '../assets/hyperone.jpeg'
import danuve from '../assets/danuve.png'
import geethas from '../assets/geethas.png'
import ogusto  from '../assets/ogusto.png'
import tunes  from '../assets/tunes.png'
import globallpg  from '../assets/globallpg.png'
import globalglass  from '../assets/globalglass.png'
import kb from '../assets/KBGROUP.jpeg'
import nahdha from '../assets/nahdha.png'
import shopmore from '../assets/shopmore.jpg'
import wayanadfloat from '../assets/wayanadfloat.png'
import peekay from '../assets/peekay.png'
import sevenbridge from '../assets/sevenbridge.png'
import panthallookaran from '../assets/panthallookaran.png'
import marineworld from '../assets/marineworld.png'
import fresh7 from '../assets/7fresh.png'
import talal from '../assets/talal.png'
import hypercity from '../assets/hypercity.jpg'
import freshday from '../assets/freshday.png'
import bhavans from '../assets/bhavansorg.png'
import ideal from '../assets/ideal.png'
import greenhills from '../assets/GREENHILLS.png'
import nair from '../assets/nairservicesociety.png'
import mcf from '../assets/mcf.png'
import convent from '../assets/convent.jpg'
import aastha from '../assets/AASTHA.jpeg'
import momsbake from '../assets/momsbake.jpg'
import arabia from '../assets/arabia.jpg'
import newform from '../assets/newform.jpg'
import union from '../assets/union.jpg'
import yemkem from '../assets/yemkem.png'
import alfa from '../assets/ALFA.jpeg'
import n4medicals from '../assets/n4medicals.jpg'
import anugraha from '../assets/anugraha.png'
import mazus from '../assets/mazus.png'
import orfila from '../assets/orfila.png'
import lavillainn from '../assets/lavillainn.png'
import bodyzone from '../assets/bodyzone.png'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";


const customers = () => {

  const mainRef = useRef()

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


  const [active, setActive]= useState()
const clients = [
    {
      id: 1,
      name: "AROGYA",
      logo: arogya,
      location: "Meenangadi - Wayanad",
    },
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
      name: "hill blooms health care",
      logo: hillroom,
      location: "Coorge-Karnataka",
    },
    {
      id: 5,
      name: "shantha polyclinic & diagnostic center",
      logo: shandha,
      location: "Pullpally - Wayanad",
    },
    {
      id: 6,
      name: "Amminikkad Mediclic",
      logo: amminikkad,
      location: "Perinthalmanna - Calicut ",
    },
    {
      id: 7,
      name: "Immune Poly Clinic & Diagnostic Center",
      logo: immune,
      location: "Valad - Wayanad ",
    },
    {
      id: 8,
      name: "Vinayaka Hospital",
      logo: vinayaka,
      location: "Pondalur - Thamilnadu ",
    },
  ];

  const clienttask = [
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
      location: "Chavakkad - Thrissure ",
    },
    {
      id: 7,
      name: "Tunes",
      logo: tunes,
      location: " Wayanad ",
    },
    {
      id: 9,
      name: "Global LPG Distributor",
      logo:globallpg,
      location: "Chalakkudy - Thrissure ",
    },
    {
      id: 10,
      name: "Global Glass",
      logo: globalglass,
      location: "Mananthavady - Wayanad ",
    },
    {
      id: 11,
      name: "Thalal market",
      logo: talal,
      location: "Iritty ",
    },
    {
      id:12,
      name: "Freshday Hypermarket",
      logo: freshday,
      location: "Mukkam - Calicut ",
    },
    {
      id: 13,
      name: "7 Fresh Supermarket",
      logo: fresh7,
      location: "Kunnamangalam - Calicut ",
    },
    {
      id: 14,
      name: "Geethas ",
      logo: geethas,
      location: "Kalpetta - Wayanad ",
    },
    {
      id: 15,
      name: "Hyper City ",
      logo: hypercity,
      location: "Kambalakkad , Kadavathoor ",
    },
    {
      id: 16,
      name: "Panthallookaran ",
      logo: panthallookaran,
      location: "Kodakara - Thrissure ",
    },
    {
      id: 17,
      name: "Hyper One ",
      logo: hyperone,
      location: "calicut ",
    },
    {
      id: 18,
      name: "DanuVe Hypermarket ",
      logo: danuve,
      location: "calicut ",
    },
    {
      id: 19,
      name: "Seven Bridge",
      logo: sevenbridge,
      location: "Manjery - Malappuram ",
    },
    {
      id: 20,
      name: "KB Traders",
      logo: kb,
      location: "Wayanad ",
    },
  ];

  const clientmagnet = [
    {
      id: 1,
      name: "IDEAL ENGLISH SCHOOL",
      logo: ideal,
      location: "Sulthan Bathery - Wayanad",
    },
    {
      id: 2,
      name: "Nair Service Society",
      logo: nair,
      location: "Kalpetta - Wayanad",
    },
    {
      id: 3,
      name: "MCF Public School",
      logo: mcf,
      location: "Kalpetta - Wayanad",
    },
    {
      id: 4,
      name: "Convent School",
      logo: convent,
      location: "Kalpetta - Wayanad",
    },
    {
      id: 5,
      name: "Bhavan's Vidya Mandir",
      logo: bhavans,
      location: "Sulthan Bathery - Wayanad",
    },
    {
      id: 6,
      name: "Divine Grace Institutions",
      logo: divine
      ,
      location: "Banglore ",
    },
    {
      id: 7,
      name: "The Greenhills Public School",
      logo: greenhills,
      location: "Sulthan Bathery - Wayanad ",
    },
    
  ];
  const clientdine = [
    {
      id: 1,
      name: "NewForm Bakes",
      logo:newform,
      location: "Kalpetta - Wayanad",
    },
    {
      id: 2,
      name: "Mom's Bakes",
      logo: momsbake,
      location: "Cheruppalassery - Palakkad",
    },
    {
      id: 3,
      name: "MAMMA ARABIA",
      logo: arabia,
      location: "Koppam - Palakkad",
    },
    {
        id: 4,
        name: "Union ",
        logo: union,
        location: "Nilambur - Malappuram",
      },
      {
        id: 5,
        name: "Ke Yem Holidays Restaurant ",
        logo: yemkem,
        location: "Wayanad",
      },
      {
        id: 6,
        name: "Aastha Hotel ",
        logo: aastha,
        location: "Pullpally - Wayanad",
      },
    
    
  ];
  const clientvtask = [
    {
      id: 1,
      name: "Alfa Agencies",
      logo: alfa,
      location: "Calicut",
    },
    {
      id: 2,
      name: "N4 Medicals",
      logo: n4medicals,
      location: "Cheruppalassery - Palakkad",
    },
    {
      id: 3,
      name: "Vinayaka Hospital",
      logo: vinayaka,
      location: "Pandalur",
    },
 
    
  ];
  const clientstarstay = [
    {
      id: 1,
      name: "Mazuzs Inn",
      logo: mazus,
      location: "Vythiri - Wayanad",
    },
    {
      id: 2,
      name: "Orfila Inn",
      logo: orfila,
      location: "Nedumbassery - Cochin",
    },
    {
      id: 3,
      name: "LA VILLA INN",
      logo: lavillainn,
      location: "Wayanad",
    },
   
  ];
 useEffect(() => {
    const scrollActive = () => {
        setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
}, []);
 
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
    <div ref={mainRef} data-scroll-container className="overflow-hidden">
      {/* intro */}
      <div className="md:pt-[150px] pt-[100px] flex flex-col justify-center items-center w-full overflow-hidden">
        <section
          id="customers"
          className="max-w-[1400px] mx-auto mb-10 w-full px-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7 w-full">
            {/* Left Section */}
            <div className="w-full">
              <h2 className="textGradient4 text-white text-3xl md:text-4xl mb-5">
                CUSTOMERS
              </h2>
              <p className="textGradient6 text-white mb-5">
                Customers play a crucial role in defining a business's dignity
                and credibility. For us, they are our greatest strength. Our
                primary focus is to maintain strong and positive relationships
                with them. Here, we are pleased to introduce a few of our valued
                customers.
              </p>

              <div className="w-full h-[355px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl">
                <div className="bg-black h-full w-full rounded-3xl flex justify-center items-center">
                  <img
                    src={client}
                    alt="Client"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>

            {/* Right Section - Grid of Logos */}
            <div className="w-full grid grid-cols-3 gap-4">
              {[
                task,
                shade,
                magnet,
                dine,
                vtask,
                starstay,
                clublogic,
                auric,
                taskpro,
              ].map((logo, index) => (
                <div
                  key={index}
                  className="h-[140px] flex items-center justify-center bg-gray-100 rounded-2xl overflow-hidden"
                >
                  <div className="h-full w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-2xl">
                    <div className="flex items-center justify-center bg-white h-full w-full rounded-xl p-4">
                      <img
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="object-contain h-[80px] w-full"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* client task */}
      <section className="bg-[#E6FFDA] py-16 border-b border-[#111B21]">
        <div className="container mx-auto px-4">
          <div className="animation-wrapper">
            <div className="grid grid-cols-10">
              {/* Left column - 30% width (3/10 columns) */}
              <div className="col-span-3 text-center mb-10">
                <div className="mt-10 flex flex-col items-center justify-center text-center">
                  <div className="w-full flex justify-center">
                    <img src={task} alt="" className="w-full max-w-[500px]" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-[#111B21]">
                    Our Trusted Clients
                  </h2>
                  <div className="mt-2">
                    <p className="text-[#1C1E21]">
                      We're proud to partner with these amazing businesses
                      across Kerala and beyond.
                    </p>
                  </div>
                </div>

                <div className="navigation-buttons flex justify-center mt-6 mb-8">
                  <div className="flex space-x-4">
                    <button
                      onClick={prevSlide1}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Previous Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.53078 11.7708c-.30563.3056-.80115.3056-1.10678 0L.20661 6.55339c-.30562-.30563-.30562-.80115 0-1.10678L5.424.22922c.30563-.30563.80115-.30563 1.10678 0 .30563.30563.30563.80115 0 1.10678L1.86678 6l4.664 4.664c.30563.3056.30563.8012 0 1.1068Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide1}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Next Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.22922.22922c.30563-.30563.80115-.30563 1.10678 0l5.21739 5.21739c.30562.30563.30562.80115 0 1.10678L1.336 11.7708c-.30563.3056-.80115.3056-1.10678 0-.30563-.3056-.30563-.8012 0-1.1068L4.89322 6l-4.664-4.664c-.30563-.30563-.30563-.80115 0-1.10678Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right column - 70% width (7/10 columns) */}
              <div className="col-span-7 slider-container">
                <Swiper
                  ref={swiperRef1}
                  onSwiper={(swiper) => (swiperRef1.current = swiper)}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  onSlideChange={(swiper) => setActiveIndex1(swiper.realIndex)}
                  modules={[Autoplay, Navigation]}
                  className="w-full"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 16,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {clienttask.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="bg-white p-6 rounded-lg shadow-md min-h-64 pt-10">
                        <div className="flex items-center justify-center mb-4 w-[200px] h-[200px] mx-auto">
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-lg mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-700">{item.location}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* client shade */}
      <section className="bg-[#E6FFDA] py-16 border-b border-[#111B21]">
        <div className="container mx-auto px-4">
          <div className="animation-wrapper">
            <div className="grid grid-cols-10">
              {/* Left column - 30% width (3/10 columns) */}
              <div className="col-span-3 text-center mb-10">
                <div className="mt-10 flex flex-col items-center justify-center text-center">
                  <div className="w-full flex justify-center">
                    <img src={shade} alt="" className="w-full max-w-[300px]" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-[#111B21]">
                    Our Trusted Clients
                  </h2>
                  <div className="mt-2">
                    <p className="text-[#1C1E21]">
                      We're proud to partner with these amazing businesses
                      across Kerala and beyond.
                    </p>
                  </div>
                </div>

                <div className="navigation-buttons flex justify-center mt-6 mb-8">
                  <div className="flex space-x-4">
                    <button
                      onClick={prevSlide}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Previous Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.53078 11.7708c-.30563.3056-.80115.3056-1.10678 0L.20661 6.55339c-.30562-.30563-.30562-.80115 0-1.10678L5.424.22922c.30563-.30563.80115-.30563 1.10678 0 .30563.30563.30563.80115 0 1.10678L1.86678 6l4.664 4.664c.30563.3056.30563.8012 0 1.1068Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Next Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.22922.22922c.30563-.30563.80115-.30563 1.10678 0l5.21739 5.21739c.30562.30563.30562.80115 0 1.10678L1.336 11.7708c-.30563.3056-.80115.3056-1.10678 0-.30563-.3056-.30563-.8012 0-1.1068L4.89322 6l-4.664-4.664c-.30563-.30563-.30563-.80115 0-1.10678Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right column - 70% width (7/10 columns) */}
              <div className="col-span-7 slider-container">
                <Swiper
                  ref={swiperRef}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  modules={[Autoplay, Navigation]}
                  className="w-full"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 16,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {clients.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="bg-white p-6 rounded-lg shadow-md h-[350px] pt-10">
                        <div className="flex items-center justify-center mb-4 w-[200px] h-[200px] mx-auto">
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-lg mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-700">{item.location}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* client magnet */}
      <section className="bg-[#E6FFDA] py-16 border-b border-[#111B21]">
        <div className="container mx-auto px-4">
          <div className="animation-wrapper">
            <div className="grid grid-cols-10">
              {/* Left column - 30% width (3/10 columns) */}
              <div className="col-span-3 text-center mb-10">
                <div className="mt-10 flex flex-col items-center justify-center text-center">
                  <div className="w-full flex justify-center">
                    <img src={magnet} alt="" className="w-full max-w-[200px]" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-[#111B21]">
                    Our Trusted Clients
                  </h2>
                  <div className="mt-2">
                    <p className="text-[#1C1E21]">
                      We're proud to partner with these amazing businesses
                      across Kerala and beyond.
                    </p>
                  </div>
                </div>

                <div className="navigation-buttons flex justify-center mt-6 mb-8">
                  <div className="flex space-x-4">
                    <button
                      onClick={prevSlide2}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Previous Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.53078 11.7708c-.30563.3056-.80115.3056-1.10678 0L.20661 6.55339c-.30562-.30563-.30562-.80115 0-1.10678L5.424.22922c.30563-.30563.80115-.30563 1.10678 0 .30563.30563.30563.80115 0 1.10678L1.86678 6l4.664 4.664c.30563.3056.30563.8012 0 1.1068Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide2}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Next Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.22922.22922c.30563-.30563.80115-.30563 1.10678 0l5.21739 5.21739c.30562.30563.30562.80115 0 1.10678L1.336 11.7708c-.30563.3056-.80115.3056-1.10678 0-.30563-.3056-.30563-.8012 0-1.1068L4.89322 6l-4.664-4.664c-.30563-.30563-.30563-.80115 0-1.10678Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right column - 70% width (7/10 columns) */}
              <div className="col-span-7 slider-container">
                <Swiper
                  ref={swiperRef2}
                  onSwiper={(swiper) => (swiperRef2.current = swiper)}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  onSlideChange={(swiper) => setActiveIndex2(swiper.realIndex)}
                  modules={[Autoplay, Navigation]}
                  className="w-full"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 16,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {clientmagnet.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="bg-white p-6 rounded-lg shadow-md h-[350px] pt-10">
                        <div className="flex items-center justify-center mb-4 w-[200px] h-[200px] mx-auto">
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-lg mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-700">{item.location}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* client Dine */}
      <section className="bg-[#E6FFDA] py-16 border-b border-[#111B21]">
        <div className="container mx-auto px-4">
          <div className="animation-wrapper">
            <div className="grid grid-cols-10">
              {/* Left column - 30% width (3/10 columns) */}
              <div className="col-span-3 text-center mb-10">
                <div className="mt-10 flex flex-col items-center justify-center text-center">
                  <div className="w-full flex justify-center">
                    <img src={dine} alt="" className="w-full max-w-[300px]" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-[#111B21]">
                    Our Trusted Clients
                  </h2>
                  <div className="mt-2">
                    <p className="text-[#1C1E21]">
                      We're proud to partner with these amazing businesses
                      across Kerala and beyond.
                    </p>
                  </div>
                </div>

                <div className="navigation-buttons flex justify-center mt-6 mb-8">
                  <div className="flex space-x-4">
                    <button
                      onClick={prevSlide3}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Previous Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.53078 11.7708c-.30563.3056-.80115.3056-1.10678 0L.20661 6.55339c-.30562-.30563-.30562-.80115 0-1.10678L5.424.22922c.30563-.30563.80115-.30563 1.10678 0 .30563.30563.30563.80115 0 1.10678L1.86678 6l4.664 4.664c.30563.3056.30563.8012 0 1.1068Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide3}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Next Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.22922.22922c.30563-.30563.80115-.30563 1.10678 0l5.21739 5.21739c.30562.30563.30562.80115 0 1.10678L1.336 11.7708c-.30563.3056-.80115.3056-1.10678 0-.30563-.3056-.30563-.8012 0-1.1068L4.89322 6l-4.664-4.664c-.30563-.30563-.30563-.80115 0-1.10678Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right column - 70% width (7/10 columns) */}
              <div className="col-span-7 slider-container">
                <Swiper
                  ref={swiperRef3}
                  onSwiper={(swiper) => (swiperRef3.current = swiper)}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  onSlideChange={(swiper) => setActiveIndex3(swiper.realIndex)}
                  modules={[Autoplay, Navigation]}
                  className="w-full"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 16,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {clientdine.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="bg-white p-6 rounded-lg shadow-md h-[300px] pt-10">
                        <div className="flex items-center justify-center mb-4 w-[200px] h-[140px] mx-auto">
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-lg mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-700">{item.location}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>


     

      {/* client V task */}
      <section className="bg-[#E6FFDA] py-16 border-b border-[#111B21]">
        <div className="container mx-auto px-4">
          <div className="animation-wrapper">
            <div className="grid grid-cols-10">
              {/* Left column - 30% width (3/10 columns) */}
              <div className="col-span-3 text-center mb-10">
                <div className="mt-10 flex flex-col items-center justify-center text-center">
                  <div className="w-full flex justify-center">
                    <img src={vtask} alt="" className="w-full max-w-[250px]" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-[#111B21]">
                    Our Trusted Clients
                  </h2>
                  <div className="mt-2">
                    <p className="text-[#1C1E21]">
                      We're proud to partner with these amazing businesses
                      across Kerala and beyond.
                    </p>
                  </div>
                </div>

                {/* <div className="navigation-buttons flex justify-center mt-6 mb-8">
                  <div className="flex space-x-4">
                    <button
                      onClick={prevSlide4}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Previous Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.53078 11.7708c-.30563.3056-.80115.3056-1.10678 0L.20661 6.55339c-.30562-.30563-.30562-.80115 0-1.10678L5.424.22922c.30563-.30563.80115-.30563 1.10678 0 .30563.30563.30563.80115 0 1.10678L1.86678 6l4.664 4.664c.30563.3056.30563.8012 0 1.1068Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide4}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Next Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.22922.22922c.30563-.30563.80115-.30563 1.10678 0l5.21739 5.21739c.30562.30563.30562.80115 0 1.10678L1.336 11.7708c-.30563.3056-.80115.3056-1.10678 0-.30563-.3056-.30563-.8012 0-1.1068L4.89322 6l-4.664-4.664c-.30563-.30563-.30563-.80115 0-1.10678Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div> */}
              </div>

              {/* Right column - 70% width (7/10 columns) */}
              <div className="col-span-7 slider-container">
                <Swiper
                  ref={swiperRef4}
                  onSwiper={(swiper) => (swiperRef4.current = swiper)}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  onSlideChange={(swiper) => setActiveIndex4(swiper.realIndex)}
                  modules={[Autoplay, Navigation]}
                  className="w-full"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 16,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {clientvtask.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="bg-white p-6 rounded-lg shadow-md h-[350px] pt-10">
                        <div className="flex items-center justify-center mb-4 w-[200px] h-[200px] mx-auto">
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-lg mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-700">{item.location}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* client auric */}
      <section className="bg-[#E6FFDA] py-16 border-b border-[#111B21]">
        <div className="container mx-auto px-4">
          <div className="animation-wrapper">
            <div className="grid grid-cols-10">
              {/* Left column - 30% width (3/10 columns) */}
              <div className="col-span-4 text-center mb-10">
                <div className="mt-10 flex flex-col items-center justify-center text-center">
                  <div className="w-full flex justify-center">
                    <img src={auric} alt="" className="w-full max-w-[250px]" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-[#111B21]">
                    Our Trusted Clients
                  </h2>
                  <div className="mt-2">
                    <p className="text-[#1C1E21]">
                      We're proud to partner with these amazing businesses
                      across Kerala and beyond.
                    </p>
                  </div>
                </div>

                {/* <div className="navigation-buttons flex justify-center mt-6 mb-8">
                  <div className="flex space-x-4">
                    <button
                      onClick={prevSlide4}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Previous Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.53078 11.7708c-.30563.3056-.80115.3056-1.10678 0L.20661 6.55339c-.30562-.30563-.30562-.80115 0-1.10678L5.424.22922c.30563-.30563.80115-.30563 1.10678 0 .30563.30563.30563.80115 0 1.10678L1.86678 6l4.664 4.664c.30563.3056.30563.8012 0 1.1068Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide4}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Next Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.22922.22922c.30563-.30563.80115-.30563 1.10678 0l5.21739 5.21739c.30562.30563.30562.80115 0 1.10678L1.336 11.7708c-.30563.3056-.80115.3056-1.10678 0-.30563-.3056-.30563-.8012 0-1.1068L4.89322 6l-4.664-4.664c-.30563-.30563-.30563-.80115 0-1.10678Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div> */}
              </div>

              {/* Right column - 70% width (7/10 columns) */}
              <div className="col-span-6 slider-container">
              <div className="relative flex justify-center items-center">
              <div className="shadow-xl   bg-white p-5 rounded-2xl w-full max-w-[400px]">
                <img
                  src={anugraha}
                  alt="anugraha"
                  className="object-contain mx-auto h-[200px] md:h-[300px]"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-black font-bold text-lg">
                    Anugraha Gold & Diamonds
                  </h3>
                  <p className="text-black text-sm">Muttil Wayanad</p>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* client  star stay */}
      <section className="bg-[#E6FFDA] py-16 border-b border-[#111B21]">
        <div className="container mx-auto px-4">
          <div className="animation-wrapper">
            <div className="grid grid-cols-10">
              {/* Left column - 30% width (3/10 columns) */}
              <div className="col-span-3 text-center mb-10">
                <div className="mt-10 flex flex-col items-center justify-center text-center">
                  <div className="w-full flex justify-center">
                    <img src={starstay} alt="" className="w-full max-w-[200px]" />
                  </div>
                  <h2 className="text-3xl font-bold mb-2 text-[#111B21]">
                    Our Trusted Clients
                  </h2>
                  <div className="mt-2">
                    <p className="text-[#1C1E21]">
                      We're proud to partner with these amazing businesses
                      across Kerala and beyond.
                    </p>
                  </div>
                </div>

                {/* <div className="navigation-buttons flex justify-center mt-6 mb-8">
                  <div className="flex space-x-4">
                    <button
                      onClick={prevSlide4}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Previous Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.53078 11.7708c-.30563.3056-.80115.3056-1.10678 0L.20661 6.55339c-.30562-.30563-.30562-.80115 0-1.10678L5.424.22922c.30563-.30563.80115-.30563 1.10678 0 .30563.30563.30563.80115 0 1.10678L1.86678 6l4.664 4.664c.30563.3056.30563.8012 0 1.1068Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide4}
                      className="p-2 border rounded-full flex items-center justify-center"
                      aria-label="Next Slide"
                      role="button"
                    >
                      <svg width="7" height="12" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M.22922.22922c.30563-.30563.80115-.30563 1.10678 0l5.21739 5.21739c.30562.30563.30562.80115 0 1.10678L1.336 11.7708c-.30563.3056-.80115.3056-1.10678 0-.30563-.3056-.30563-.8012 0-1.1068L4.89322 6l-4.664-4.664c-.30563-.30563-.30563-.80115 0-1.10678Z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div> */}
              </div>

              {/* Right column - 70% width (7/10 columns) */}
              <div className="col-span-7 slider-container">
                <Swiper
                  ref={swiperRef4}
                  onSwiper={(swiper) => (swiperRef4.current = swiper)}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  loop={true}
                  onSlideChange={(swiper) => setActiveIndex4(swiper.realIndex)}
                  modules={[Autoplay, Navigation]}
                  className="w-full"
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 16,
                    },
                    640: {
                      slidesPerView: 1,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 24,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {clientstarstay.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className="bg-white p-6 rounded-lg shadow-md h-[350px] pt-10">
                        <div className="flex items-center justify-center mb-4 w-[200px] h-[200px] mx-auto">
                          <img
                            src={item.logo}
                            alt={item.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="font-bold text-lg mb-2">
                            {item.name}
                          </h3>
                          <p className="text-gray-700">{item.location}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <section className="py-10 bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
}

export default customers 
