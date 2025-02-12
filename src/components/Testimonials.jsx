import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbFirestore } from "../firebaseConfig";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Testimonials = () => {
  const [videoTestimonials, setVideoTestimonials] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

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
  const handlePrev = () => {
    setCurrentStart(
      (prev) => (prev - 2 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setCurrentStart((prev) => (prev + 2) % testimonials.length);
  };
  const [currentStart, setCurrentStart] = useState(0);
  return (
    <div className="overflow-auto">
      {/* Render Text/Image Testimonials */}
      <div className="relative overflow-hidden ml-[10px]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-5">
          {/* Previous Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-2 top-[40%]  p-2 rounded-full  bg-black text-white hover:bg-gray-700 hover:text-white"
          >
            <ChevronLeft size={40} />
          </button>

          <div className="flex flex-col md:flex-row justify-center gap-4  p-3  ">
            {testimonials
              .slice(currentStart, currentStart + 2)
              .map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex flex-col  items-center p-2 w-full  gap-6"
                >
                  <div className="w-[200px] h-[250px]  rounded-tl-[40%] bg-white overflow-hidden">
                    <img
                      src={
                        testimonial.image ||
                        "https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-red-sweater-posing-studio_158538-11524.jpg"
                      }
                      alt="Testimonial"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex flex-col justify-around gap-4 ">
                    <div className="textGradient italic text-sm md:text-base">
                      {testimonial.description || "Amazing experience!"}
                    </div>
                    <div className="flex flex-col">
                      <div className="textGradient6 text-white text-lg ">
                        {testimonial.name || "Name"}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Next Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-2 top-[40%]  p-2 rounded-full bg-black text-white hover:bg-gray-700 hover:text-white"
          >
            <ChevronRight size={40} />
          </button>
        </div>
      </div>

      {/* Render Video Testimonials */}
      <div>
        <div className="flex items-center justify-center mt-20">
          <h1 className="text-white text-[40px] textGradient4">
            Voices of Trust: Client Video Testimonials
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
          {videoTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="p-4 bg-black  text-center">
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
