import React from 'react'
import property from '../../assets/comprehensivepropertymanagement.jpg'
import auto from '../../assets/autom.jpg'
import userfriendly from '../../assets/userfriendlys.jpg'
import affoandflex from '../../assets/affoandflex.jpeg'
import guest from '../../assets/guest.jpg'
import operation from '../../assets/operation.jpeg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const Hospitality = () => {
  const hospitality = [
      {
        heading: "Comprehensive Property Management",
        description: "A complete solution for managing hotels, motels,\n guest houses, and B&Bs, covering all aspects of\n  property management in one system.",
        img:property,
      },
      {
        heading: "Automated Features for Efficiency",
        description: "Streamline booking, guest services,\n and billing with automated functionalities that \nsave time and reduce errors.",
        img:auto,
      },
      {
        heading: "User-Friendly Interface",
        description: "Easy navigation and intuitive\n design ensure your team can manage\n operations efficiently without any hassle.",
        img:userfriendly,
      },
      {
        heading: "Affordable & Flexible Solution",
        description: "A cost-effective, adaptable system\n tailored to meet the needs of various\n hospitality businesses, large or small.",
        img:affoandflex,
      },
      {
        heading: "Enhanced Guest Experience",
        description: "Provides seamless check-ins, quick service management,\n and efficient communication,\n ensuring a memorable guest experience.",
        img:guest,
      },
      {
        heading: "Increased Operational Efficiency",
        description: "Simplifies administrative tasks, \nallowing your team to focus more on guest satisfaction\n and less on backend operations.",
        img:operation,
      }
    ];
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full px-1 mt-40">
        <div className="flex flex-col items-center justify-center mb-10 px-4">
          <div className="text-[36px] md:text-[50px] text-[#fff] textGradient4 leading-tight text-center justify-center">
            HOSPITALITY MANAGEMENT
          </div>
          <div className="text-sm md:text-base md:w-[60%] textGradient6 text-[#fff] text-center mt-4">
            STARSTAY is an intuitive hotel management software designed for
            hotels, motels, guest houses, and bed & breakfasts, covering
            booking, guest services, billing, and reporting. It simplifies daily
            operations and enhances guest experiences with an affordable,
            user-friendly solution.
          </div>
        </div>

        <section
          id="hospitality"
          className="max-w-[1400px] mx-auto bg-gradient-to-l from-[#8d8d8d] via-[#ffffff] to-[#f4b45f] p-[1px] bg-[#222222] backdrop-blur-3xl w-full rounded-3xl h-[800px] md:h-full overflow-hidden mb-20"
        >
          <div className="h-full bg-[#000] p-4 md:p-8 relative overflow-hidden rounded-3xl">
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={20}
              slidesPerView={1}
            >
              {hospitality.map((list, index) => (
                <SwiperSlide key={index}>
                  <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center h-full">
                    {/* Left Column */}
                    <div className="space-y-4 md:space-y-8 z-10 text-center md:text-left">
                      <h1 className="text-4xl md:text-6xl font-light text-white leading-tight">
                        {list.heading.split("\n").map((line, idx) => (
                          <span key={idx}>
                            {line}
                            <br />
                          </span>
                        ))}
                      </h1>

                      {/* <button className="text-white border border-[#fff] rounded-full py-2 md:py-4 px-6 md:px-8 flex items-center justify-center space-x-2 hover:bg-yellow-400 transition-colors mx-auto md:mx-0">
                                <span className="font-medium">Know more</span>
                                <ArrowUpRight className="w-4 h-4" />
                              </button> */}
                    </div>

                    {/* Center Image */}
                    <div className="relative flex justify-center items-center h-[300px] md:h-[550px] p-2 md:p-5">
                      <div className="relative z-20 w-[200px] md:w-[300px] h-full bg-white rounded-[30px] md:rounded-[40px] overflow-hidden shadow-lg">
                        <img
                          src={list.img}
                          alt="property"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="relative z-10 text-center md:text-right">
                      <div className="inline-block">
                        <div className="backdrop-blur-sm rounded-full p-4 mb-4"></div>
                        <div className="text-white">
                          <p className="uppercase text-xs md:text-sm tracking-wide mb-1">
                            {list.description.split("\n")[0]}
                          </p>
                          <p className="uppercase text-xs md:text-sm tracking-wide mb-1">
                            {list.description.split("\n")[1]}
                          </p>
                          <p className="uppercase text-xs md:text-sm tracking-wide mb-1">
                            {list.description.split("\n")[2]}
                          </p>
                        </div>
                        {/* <a
                                  href="#"
                                  className="text-yellow-300 hover:underline inline-block mt-4 text-xs md:text-sm"
                                >
                                  Learn More
                                </a> */}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Hospitality