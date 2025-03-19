import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbFirestore } from "../firebaseConfig";
import { ChevronLeft, ChevronRight } from "lucide-react";
// Import Swiper components and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCreative } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-creative";
import {motion} from "framer-motion"

const Testimonials = () => {
  const [videoTestimonials, setVideoTestimonials] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  // Handle Screen Resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set isMobile based on screen width
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch video testimonials
  const fetchVideoTestimonials = async () => {
    const querySnapshot = await getDocs(
      collection(dbFirestore, "videoTestimonials")
    );
    const videoTestimonialList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setVideoTestimonials(videoTestimonialList);
  };

  // Fetch text/image testimonials
  const fetchTestimonials = async () => {
    const querySnapshot = await getDocs(
      collection(dbFirestore, "testimonials")
    );
    setTestimonials(
      querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
  };

  useEffect(() => {
    fetchVideoTestimonials();
    fetchTestimonials();
  }, []);

  return (
    <div className="overflow-auto">
      {/* Text/Image Testimonials Section */}
      <div className="relative overflow-hidden ml-[10px] my-8">
        <div className="flex flex-col justify-center items-center mb-5">
          {/* Custom Navigation Buttons */}
          <div className="w-full hidden md:flex justify-between items-center px-4 mb-2">
            <button
              className="prev-testimonial p-2 rounded-full bg-black text-white hover:bg-gray-700 transition-all z-10"
            >
              <ChevronLeft size={30} />
            </button>
            <button
              className="next-testimonial p-2 rounded-full bg-black text-white hover:bg-gray-700 transition-all z-10"
            >
              <ChevronRight size={30} />
            </button>
          </div>

          {/* Testimonials Swiper */}
          <div className="w-full px-4">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={20}
              slidesPerView={isMobile ? 1 : 2}
              slidesPerGroup={isMobile ? 1 : 2}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={{
                prevEl: '.prev-testimonial',
                nextEl: '.next-testimonial',
              }}
              breakpoints={{
                // when window width is < 768px
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1,
                  spaceBetween: 10,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                  spaceBetween: 30,
                }
              }}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={testimonial.id} className="py-4">
                <motion.div
                  className="grid grid-cols-1 place-items-center md:flex justify-center items-center p-4 w-full gap-1 md:gap-6 rounded-3xl"
                  initial={{ opacity: 0.5, scale: 0.9, filter: "blur(5px)" }}
                  animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0.5, scale: 0.9, filter: "blur(5px)" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="w-[200px] h-[300px] flex justify-center items-center rounded-tl-[40%] bg-white overflow-hidden">
                    <img
                      src={
                        testimonial.image ||
                        "https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-red-sweater-posing-studio_158538-11524.jpg"
                      }
                      alt="Testimonial"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-around gap-4 w-[300px]">
                    <div className="textGradient italic md:text-[22px] text-center md:text-base md:text-justify pt-2 px-2">
                      {testimonial.description || "Amazing experience!"}
                    </div>
                    <div className="textGradient6 text-white md:text-2xl md:p-4 px-2 text-center md:text-start">
                      {testimonial.name || "Name"}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

      {/* Video Testimonials Section */}
      <div className="px-2 md:px-0 mt-28">
        <div className="flex items-center justify-center mb-8">
          <h1 className="text-white text-[40px] textGradient4 text-center">
            Voices of Trust: Client Video Testimonials
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-4 rounded-3xl text-center"
            >
              {testimonial.videoUrl ? (
                <iframe
                  className="w-full h-[300px] rounded-lg"
                  src={testimonial.videoUrl}
                  title="Video Testimonial"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <p className="text-gray-400">No video available</p>
              )}
              <h3 className="text-lg font-semibold text-white mt-3">
                {testimonial.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
      
      {/* Add custom CSS for futuristic effects */}
    </div>
  );
};

export default Testimonials;