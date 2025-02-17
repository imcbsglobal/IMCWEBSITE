import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbFirestore } from "../firebaseConfig";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [videoTestimonials, setVideoTestimonials] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentStart, setCurrentStart] = useState(0);
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

  // Handle Previous Button Click
  const handlePrev = () => {
    if (isMobile) {
      setCurrentStart(
        (prev) => (prev - 1 + testimonials.length) % testimonials.length
      );
    } else {
      setCurrentStart(
        (prev) => (prev - 2 + testimonials.length) % testimonials.length
      );
    }
  };

  // Handle Next Button Click
  const handleNext = () => {
    if (isMobile) {
      setCurrentStart((prev) => (prev + 1) % testimonials.length);
    } else {
      setCurrentStart((prev) => (prev + 2) % testimonials.length);
    }
  };

  return (
    <div className="overflow-auto">
      {/* Text/Image Testimonials Section */}
      <div className="relative overflow-hidden ml-[10px]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-5">
          {/* Previous Arrow (Visible on both mobile and desktop) */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-[40%] p-2 rounded-full bg-black text-white hover:bg-gray-700 transition-all"
          >
            <ChevronLeft size={30} />
          </button>

          {/* Testimonials Container */}
          <div className="flex flex-col md:flex-row justify-center gap-4 p-3 px-10 md:px-0">
            {testimonials
              .slice(
                currentStart,
                isMobile ? currentStart + 1 : currentStart + 2 // Show 1 item on mobile, 2 items on desktop
              )
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col items-center p-4 w-full gap-6  rounded-3xl"
                >
                  <div className="w-[200px] h-[250px] rounded-tl-[40%] bg-white overflow-hidden">
                    <img
                      src={
                        testimonial.image ||
                        "https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-red-sweater-posing-studio_158538-11524.jpg"
                      }
                      alt="Testimonial"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-around gap-4">
                    <div className="textGradient italic text-[22px] md:text-base  text-justify p-4 px-2">
                      {testimonial.description || "Amazing experience!"}
                    </div>
                    <div className="textGradient6 text-white text-2xl p-4 px-2">
                      {testimonial.name || "Name"}
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Next Arrow (Visible on both mobile and desktop) */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-[40%] p-2 rounded-full bg-black text-white hover:bg-gray-700 transition-all"
          >
            <ChevronRight size={30} />
          </button>
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
              className="p-4  rounded-3xl text-center"
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
    </div>
  );
};

export default Testimonials;
