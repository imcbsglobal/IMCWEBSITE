import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import careerBanner from "../assets/careerbanner.jpg";
import blackShade from "../assets/blacksahde.png";
import darkGradient from "../assets/darkGradient.jpg";
import Footer from "./Footer";
import CareerApply from "./CareerApply";
import { collection, getDocs } from "firebase/firestore";
import { dbFirestore } from "../firebaseConfig";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "./ChatBot";
import img1 from '../assets/img1.jpeg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpeg'
import img4 from '../assets/img4.jpeg'
import img5 from '../assets/img5.jpg'
import img6 from '../assets/img6.jpeg'
import img7 from '../assets/img7.jpg'
import img8 from '../assets/img8.jpg'
import career from '../assets/career.jpg'
const Career = () => {
     const [openChat, setOpenChat] = useState(false)
  
  const [openCareerApply, setOpenCareerApply] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const careerImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
  ];
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleApplyNow = (career) => {
    setSelectedJob(career);
    setOpenCareerApply(true);
  };

  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Fetch career data from Firestore
    const fetchCareers = async () => {
      setLoading(true);
      try {
        // Try to fetch from "careers" collection (plural) first
        let querySnapshot = await getDocs(collection(dbFirestore, "careers"));
        
        // If no results, try "career" collection (singular)
        if (querySnapshot.empty) {
          querySnapshot = await getDocs(collection(dbFirestore, "career"));
        }
        
        const careerList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        
        console.log("Fetched careers:", careerList); // Debug log
        setCareers(careerList);
        setError(null);
      } catch (error) {
        console.error("Error fetching career data:", error);
        setError("Failed to load career opportunities. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  return (
    <div className="overflow-hidden relative">
      <section className="h-screen relative overflow-hidden">
        <div className="h-screen w-full absolute">
          <img
            src={careerBanner}
            alt="Career Banner"
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
        <div className="absolute h-full w-full top-0 bottom-0">
          <img src={blackShade} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-full w-full flex flex-col justify-center items-center">
          <div className="text-4xl md:text-6xl text-[#fff] textGradient5 pt-28 leading-normal font-bold text-center px-4">
            Innovators Wanted, Join{" "}
            <span className="block">The Wises Revolution</span>
          </div>

          {/* SwiperJS Infinite Auto-Scrolling Slider */}
          <div className="w-full mt-10">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={4}
              loop={true}
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={5000}
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="w-full"
            >
              {careerImages.map((image, index) => (
                <SwiperSlide
                  key={index}
                  className="rounded-md even:mt-[50px] overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Team at work ${index + 1}`}
                    className="w-full h-[300px] object-cover rounded-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <div className="relative pb-20">
      <div className="absolute top-0 right-0 left-0 bottom-0 h-full w-full -z-10">
          <img src={darkGradient} alt="Background" className="w-full h-full object-cover"/>
        </div>
      <section className="relative py-10">
        
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="md:flex gap-10 justify-center items-center">
            <div className="md:w-[50%] h-[400px] overflow-hidden rounded-3xl mb-6 md:mb-0">
              <img
                src={career}
                alt="Office Environment"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="md:w-[50%]">
              <div className="text-[#fff] textGradient5 text-4xl leading-normal font-bold mb-3">
                Why Join IMC?
              </div>
              <div className="text-[#fff] textGradient6 mb-5">
                At IMC Business Solutions, we offer a supportive and innovative
                workplace where your skills and ideas matter. Whether you're
                experienced or just starting, we help you grow and succeed.
              </div>
              <div>
                <ul className="flex flex-col gap-3 textGradient6">
                  <li className="bg-[#ffffff22] px-4 py-3 rounded-lg text-[#fff]">
                    <strong>Career Growth:</strong> Training, mentorship, and
                    opportunities to advance.
                  </li>
                  <li className="bg-[#ffffff22] px-4 py-3 rounded-lg text-[#fff]">
                    <strong>Work-Life Balance:</strong> A flexible and
                    supportive environment.
                  </li>
                  <li className="bg-[#ffffff22] px-4 py-3 rounded-lg text-[#fff]">
                    <strong>Exciting Projects:</strong> Work on cutting-edge IT
                    solutions.
                  </li>
                  <li className="bg-[#ffffff22] px-4 py-3 rounded-lg text-[#fff]">
                    <strong>Great Team:</strong> Collaborate with talented
                    professionals.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center px-4 ">
        <div className="max-w-[1400px] w-full">
          <h2 className="text-3xl font-bold text-[#fff] mb-8 text-center textGradient4">
            Open Positions
          </h2>

          {loading ? (
            <div className="text-center text-[#fff] p-10">
              <p>Loading available positions...</p>
            </div>
          ) : error ? (
            <div className="text-center text-[#fff] p-10">
              <p>{error}</p>
            </div>
          ) : careers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {careers.map((career) => (
                <div
                  key={career.id}
                  className="p-6 bg-[#ffffff11] text-white rounded-2xl shadow-lg border border-[#ffffff33] hover:border-[#ffffff66] transition-all"
                >
                  <h2 className="text-xl font-semibold mb-2 text-[#fff] textGradient6">
                    {career.title}
                  </h2>
                  <p className="text-[#cbcaca] mb-2">
                    Experience: {career.experience} 
                  </p>
                  
                  {/* Show skills if available */}
                  {career.skills && Array.isArray(career.skills) && (
                    <div className="mb-3">
                      <p className="text-[#cbcaca] mb-1">Required Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {career.skills.map((skill, index) => (
                          <span 
                            key={index} 
                            className="bg-[#ffffff22] px-2 py-1 text-sm rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <p className="text-[#fff] mb-4">
                    {career.description.length > 100
                      ? `${career.description.substring(0, 100)}...`
                      : career.description}
                  </p>

                  <button
                    // onClick={() => handleApplyNow(career)}
                    onClick={() => {
                      const positionTitle = encodeURIComponent(career.title); // Encode the title for URL safety
                      window.location.href = `mailto:info@imcbsglobal.com?subject=Job Application for ${positionTitle}&body=Hello, I would like to apply for the ${positionTitle} position.`;
                    }}

                    className="w-full py-2 text-sm md:text-base bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-white rounded-lg hover:opacity-90 transition-all"
                  >
                    Send Your CV to : info@imcbsglobal.com
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-[#fff] p-10">
              <p>No open positions at the moment. Please check back later!</p>
            </div>
          )}
        </div>
      </section>
      </div>

      <section className="w-full py-10 bg-[#fff]">
        <Footer />
      </section>
      {openCareerApply && (
        <div className="fixed z-[9999]">
          <CareerApply
            openCarrerApply={openCareerApply}
            setOpenCareerApply={setOpenCareerApply}
            jobDetails={selectedJob} // Pass the selected job details
          />
        </div>
      )}
    </div>
  );
};

export default Career;