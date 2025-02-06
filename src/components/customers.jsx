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
import dine from "../assets/DINE 1 copy.jpg";
import vtask from "../assets/VTASK.png";
import taskpro from "../assets/Task Pro.png";
import starstay from "../assets/starstay.jpg";
import clublogic from "../assets/CLUBLOGIC.png";
import auric from "../assets/AURIC.png";
import task from "../assets/task.png";
import client from "../assets/clients.jpeg";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
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
const customers = () => {
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
  return (
    <div>
      <div className="pt-[150px] flex flex-col justify-center items-center w-full">
        <section id="customers" className="max-w-[1400px] mx-auto mb-10 w-full">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 place-items- w-full gap-7">
              <div className="w-full px-2">
                <div className="textGradient4 text-[#fff] text-[40px] mb-5">
                  CUSTOMERS
                </div>
                <div className="textGradient6 text-[#fff] mb-5">
                  Customers play a crucial role in defining a business's dignity
                  and credibility. For us, they are our greatest strength. Our
                  primary focus is to maintain strong and positive relationships
                  with them. Here, we are pleased to introduce a few of our
                  valued customers.
                </div>
                <div className="w-full h-[355px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                  <div className="bg-black h-full w-full rounded-3xl flex flex-col justify-center items-center text-white p-4 text-justify">
                    <img
                      src={client}
                      alt="client"
                      className="w-full h-full flex justify-center items-center rounded-3xl"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full  px-4">
                <div className="grid grid-cols-3 grid-rows-3 gap-4 h-auto">
                  {/* First row */}
                  <div className="flex items-center h-[165px] justify-center bg-gray-100  rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                      <div className="flex items-center justify-center bg-white h-full w-full rounded-xl p-5">
                        <img
                          src={task}
                          alt="task"
                          className="object-contain justify-center items-center flex bg-white h-[100px w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center h-[165px] justify-center bg-gray-100  rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                      <div className="flex items-center justify-center bg-white h-full w-full rounded-xl p-5">
                        <img
                          src={shade}
                          alt="shade"
                          className="object-contain justify-center items-center flex bg-white h-[100px] w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center h-[165px] justify-center bg-gray-100  rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                      <div className="flex items-center justify-center bg-white h-full w-full rounded-xl p-5">
                        <img
                          src={magnet}
                          alt="magnet"
                          className="object-contain justify-center items-center flex bg-white h-[100px] w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Second row */}
                  <div className="flex items-center h-[165px] justify-center bg-gray-100  rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                      <div className="flex items-center justify-center bg-white h-full w-full rounded-xl ">
                        <img
                          src={dine}
                          alt="dine"
                          className="object-cover justify-center items-center flex bg-white h-full w-full p-2"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center h-[165px] justify-center bg-gray-100  rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                      <div className="flex items-center justify-center bg-white h-full w-full rounded-xl p-5">
                        <img
                          src={vtask}
                          alt="vtask"
                          className="object-contain justify-center items-center flex bg-white h-full w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center h-[165px] justify-center bg-gray-100  rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                      <div className="flex items-center justify-center bg-white h-full w-full rounded-xl">
                        <img
                          src={starstay}
                          alt="starstay"
                          className="object-cover justify-center items-center flex bg-white h-full w-full"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Third row */}
                  <div className="flex items-center h-[165px] justify-center bg-gray-100  rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                      <div className="flex items-center justify-center bg-white h-full w-full rounded-xl p-5">
                        <img
                          src={clublogic}
                          alt="clublogic"
                          className="object-contain justify-center items-center flex bg-white h-[100px] w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center h-[165px] justify-center bg-gray-100  rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                      <div className="flex items-center justify-center bg-white h-full w-full rounded-xl p-5">
                        <img
                          src={auric}
                          alt="auric"
                          className="object-contain justify-center items-center flex bg-white h-full w-full"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center h-[165px] justify-center bg-gray-100  rounded-2xl">
                    <div className="h-full w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                      <div className="flex items-center justify-center bg-white h-full w-full rounded-xl p-5">
                        <img
                          src={taskpro}
                          alt="taskpro"
                          className="object-contain justify-center items-center flex bg-white h-[100px] w-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* client task */}
      <div className="pt-12 flex flex-col justify-center items-center w-full bg-white min-h-screen">
        <section className=" relative  " id="slienttask">
          <div className=" h-[700px]">
            <div className="md:text-[50px] text-[30px] font-bold text-center mb-6">
              <img
                src={task}
                alt="task"
                className="object-contain justify-center items-center flex bg-white h-[100px] w-full"
              />
            </div>
            <button
              onClick={prevSlide1}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-3xl  bg-[#f68d2b84]"
            >
              <ChevronLeft className="w-8 h-8 text-black" />
            </button>
            {/* Slider */}
            <div className="w-full flex justify-center items-center max-w-[1400px] mx-auto">
              <Swiper
                onSwiper={(swiper) => (swiperRef1.current = swiper)}
                // centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex1(swiper.realIndex)}
                modules={[Autoplay]}
                className="w-full"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    centeredSlides: true,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    centeredSlides: true,
                    spaceBetween: 40,
                  },
                }}
                navigation={{
                  // Enable navigation
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                {clienttask.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="w-full flex flex-col items-center rounded-tr-[] justify-center transition-all duration-500 relative 
                         h-[400px] shadow-2xl border border-gray-400"
                    >
                      <div className="mt-[-80px]">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className="h-[300px] w-full object-contain "
                        />
                      </div>
                      <div className=" absolute bottom-5 flex flex-col justify-center items-center">
                        <h3 className="text-black font-bold text-lg mt-4 mb-3">
                          {item.name}
                        </h3>
                        <p className="text-black text-sm text-center px-2">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <button
              onClick={nextSlide1}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3           rounded-3xl  bg-[#f68d2b84]"
            >
              <ChevronRight className="w-8 h-8 text-black" />
            </button>
          </div>
        </section>
      </div>

      {/* client shade */}
      <div className="pt-5 flex flex-col justify-center items-center w-full bg-white min-h-screen">
        <section className="mb-5 relative  " id="clientshade">
          <div className=" h-[700px]">
            <div className="md:text-[50px] text-[30px] font-bold text-center mb-6">
              <img
                src={shade}
                alt="shade"
                className="object-contain justify-center items-center flex bg-white h-[100px] w-full"
              />
            </div>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-3xl  bg-[#f68d2b84]"
            >
              <ChevronLeft className="w-8 h-8 text-black" />
            </button>
            {/* Slider */}
            <div className="w-full flex justify-center items-center max-w-[1400px] mx-auto gap-3">
              <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                // centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                modules={[Autoplay]}
                className="w-full"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    centeredSlides: true,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    centeredSlides: true,
                    spaceBetween: 40,
                  },
                }}
                navigation={{
                  // Enable navigation
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                {clients.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className="w-full flex flex-col items-center rounded-tr-[] justify-center transition-all duration-500 relative 
                         h-[400px]  gap-2 shadow-2xl border border-gray-400"
                    >
                      <div className="mt-[-80px]">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className=" w-full object-contain h-[200px] "
                        />
                      </div>
                      <div className=" absolute bottom-5 flex flex-col justify-center items-center">
                        <h3 className="text-black font-bold text-lg mt-4 mb-3">
                          {item.name}
                        </h3>
                        <p className="text-black text-sm text-center px-2">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-3xl  bg-[#f68d2b84]"
            >
              <ChevronRight className="w-8 h-8 text-black" />
            </button>
          </div>
        </section>
      </div>

      {/* client magnet */}
      <div className="pt-5 flex flex-col justify-center items-center w-full bg-white min-h-screen">
        <section className="mb-5 relative py-5 " id="clientmagnet">
          <div className=" h-[700px]">
            <div className="md:text-[50px] text-[30px] font-bold text-center mb-6">
              <img
                src={magnet}
                alt="magnet"
                className="object-contain justify-center items-center flex bg-white h-[150px] w-full"
              />
            </div>
            <button
              onClick={prevSlide2}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-3xl  bg-[#f68d2b84]"
            >
              <ChevronLeft className="w-8 h-8 text-black" />
            </button>
            {/* Slider */}
            <div className="w-full flex justify-center items-center max-w-[1400px] mx-auto">
              <Swiper
                onSwiper={(swiper) => (swiperRef2.current = swiper)}
                // centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex2(swiper.realIndex)}
                modules={[Autoplay]}
                className="w-full"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    centeredSlides: true,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    centeredSlides: true,
                    spaceBetween: 40,
                  },
                }}
                navigation={{
                  // Enable navigation
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                {clientmagnet.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="w-full flex flex-col items-center rounded-tr-[] justify-center transition-all duration-500 relative h-[400px] shadow-2xl border border-gray-400">
                      <div className="mt-[-80px]">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className=" w-full object-contain h-[200px]"
                        />
                      </div>
                      <div className=" absolute bottom-5 flex flex-col justify-center items-center">
                        <h3 className="text-black font-bold text-lg mt-4 mb-3">
                          {item.name}
                        </h3>
                        <p className="text-black text-sm text-center px-2">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <button
              onClick={nextSlide2}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-3xl  bg-[#f68d2b84]"
            >
              <ChevronRight className="w-8 h-8 text-black" />
            </button>
          </div>
        </section>
      </div>

      {/* client Dine */}
      <div className="pt-2 flex flex-col justify-center items-center w-full bg-white min-h-screen">
        <section className="mb-5 relative py-5 " id="clientdine">
          <div className=" h-[700px]">
            <div className="md:text-[50px] text-[30px] font-bold text-center mb-6">
              <img
                src={dine}
                alt="dine"
                className="object-contain justify-center items-center flex bg-white h-[150px] w-full"
              />
            </div>

            <button
              onClick={prevSlide3}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-3xl  bg-[#f68d2b84]"
            >
              <ChevronLeft className="w-8 h-8 text-black" />
            </button>
            {/* Slider */}
            <div className="w-full flex justify-center items-center max-w-[1400px] mx-auto">
              <Swiper
                onSwiper={(swiper) => (swiperRef3.current = swiper)}
                // centeredSlides={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                loop={true}
                onSlideChange={(swiper) => setActiveIndex3(swiper.realIndex)}
                modules={[Autoplay]}
                className="w-full"
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    centeredSlides: true,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 4,
                    centeredSlides: true,
                    spaceBetween: 40,
                  },
                }}
                navigation={{
                  // Enable navigation
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
              >
                {clientdine.map((item, i) => (
                  <SwiperSlide key={i}>
                    <div className="shadow-2xl border border-gray-400 w-full flex flex-col items-center rounded-tr-[] justify-center transition-all duration-500 relative h-[400px] ">
                      <div className="mt-[-80px]">
                        <img
                          src={item.logo}
                          alt={item.name}
                          className=" w-full object-contain h-[200px]"
                        />
                      </div>
                      <div className=" absolute bottom-5 flex flex-col justify-center items-center">
                        <h3 className="text-black font-bold text-lg mt-4 mb-3">
                          {item.name}
                        </h3>
                        <p className="text-black text-sm text-center px-2">
                          {item.location}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <button
              onClick={nextSlide3}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3  rounded-3xl  bg-[#f68d2b84]"
            >
              <ChevronRight className="w-8 h-8 text-black" />
            </button>
          </div>
        </section>
      </div>

      {/* client V task */}
      <div className="pt-5 flex flex-col justify-center items-center w-full bg-white min-h-screen">
        <section className="mb-5 relative py-5 " id="clientvtask">
          <div className="h-[700px]">
            <div className="md:text-[50px] text-[30px] font-bold text-center mb-6">
              <img
                src={vtask}
                alt="vtask"
                className="object-contain justify-center items-center flex bg-white h-[100px] w-full"
              />
            </div>
            <div className="w-full flex justify-center items-center max-w-[1400px] mx-auto">
              {/* Static Items Display */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {clientvtask.slice(0, 3).map((item, i) => (
                  <div
                    key={i}
                    className="w-[400px] flex flex-col items-center rounded-tr-[] justify-center transition-all duration-500 relative h-[400px] shadow-2xl border border-gray-400 "
                  >
                    <div className="mt-[-80px]">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-full object-contain h-[200px]"
                      />
                    </div>
                    <div className="absolute bottom-5 flex flex-col justify-center items-center">
                      <h3 className="text-black font-bold text-lg mt-4 mb-3">
                        {item.name}
                      </h3>
                      <p className="text-black text-sm text-center px-2">
                        {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* client auric */}
      <div className="pt-5 flex flex-col justify-center items-center  bg-white min-h-screen w-full">
        <section className="mb-5 relative py-5 " id="clientauric">
          <div className=" h-[700px]">
            <div className="md:text-[50px] text-[30px] font-bold text-center mb-6">
              <img
                src={auric}
                alt="auric"
                className="object-contain justify-center items-center flex bg-white h-[100px] w-full"
              />
            </div>
            <div className=" pt-20 relative h-[400px] w-[1400px] rounded-3xl flex flex-col justify-center items-center text-white  text-justify">
              <div className="h-[400px] w-[400px]   absolute  shadow-2xl border border-gray-400 flex flex-col items-center rounded-tr-[] justify-center ">
                <div className="mt-[-80px]">
                  <img
                    src={anugraha}
                    alt="anugraha"
                    className="w-full object-contain h-[300px] "
                  />
                </div>
                <div className="absolute bottom-5 flex flex-col justify-center items-center w-full">
                  <h3 className="text-black font-bold text-lg mt-4 mb-3 text-center">
                    Anugraha Gold & Diamonds
                  </h3>
                  <p className="text-black text-sm text-center px-2">
                    Muttil Wayanad
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* client  star stay */}
     <div className="pt-5 flex flex-col justify-center items-center w-full bg-white min-h-screen">
        <section className="mb-5 relative py-5 " id="clientvtask">
          <div className="h-[700px]">
            <div className="md:text-[50px] text-[30px] font-bold text-center mb-6">
              <img
                src={starstay}
                alt="starstay"
                className="object-contain justify-center items-center flex bg-white h-[250px] w-full"
              />
            </div>
            <div className="w-full flex justify-center items-center max-w-[1400px] mx-auto">
              {/* Static Items Display */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {clientstarstay.slice(0, 3).map((item, i) => (
                  <div
                    key={i}
                    className="w-[400px] flex flex-col items-center rounded-tr-[] justify-center transition-all duration-500 relative h-[400px] w shadow-2xl border border-gray-400 "
                  >
                    <div className="mt-[-80px]">
                      <img
                        src={item.logo}
                        alt={item.name}
                        className="w-full object-contain h-[200px]"
                      />
                    </div>
                    <div className="absolute bottom-5 flex flex-col justify-center items-center">
                      <h3 className="text-black font-bold text-lg mt-4 mb-3">
                        {item.name}
                      </h3>
                      <p className="text-black text-sm text-center px-2">
                        {item.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* client clublogic */}
      <div className="pt-5 flex flex-col justify-center items-center  bg-white min-h-screen w-full">
        <section className="mb-5 relative py-5 " id="clientauric">
          <div className=" h-[700px]">
            <div className="md:text-[50px] text-[30px] font-bold text-center mb-6">
              <img
                src={clublogic}
                alt="clublogic"
                className="object-contain justify-center items-center flex bg-white h-[100px] w-full"
              />
            </div>
            <div className=" pt-20 relative h-[400px] w-[1400px] rounded-3xl flex flex-col justify-center items-center text-white  text-justify">
              <div className="h-[400px] w-[400px]   absolute  shadow-2xl border border-gray-400 flex flex-col items-center rounded-tr-[] justify-center ">
                <div className="mt-[-80px]">
                  <img
                    src={bodyzone}
                    alt="bzfitness"
                    className="w-full object-contain h-[300px]"
                  />
                </div>
                <div className="absolute bottom-5 flex flex-col justify-center items-center w-full">
                  <h3 className="text-black font-bold text-lg mt-4 mb-3 text-center">
                    BZ Fitness
                  </h3>
                  <p className="text-black text-sm text-center px-2"></p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* footer */}
      <section className="py-10 bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
}

export default customers 
