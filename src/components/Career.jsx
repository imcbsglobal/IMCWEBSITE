import React,{ useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import careerBanner from "../assets/careerbanner.jpg";
import blackShade from "../assets/blacksahde.png";
import darkGradient from "../assets/darkgradient.jpg"
import Footer from "./Footer";
import CareerApply from "./CareerApply";


const Career = () => {
  const [ openCarrerApply, setOpenCareerApply ] = useState(false)
  const careerImages = [
    "https://imageio.forbes.com/specials-images/imageserve/562442005/0x0.jpg?format=jpg&amp;width=1200",
    "https://www.mantec.eu/wp-content/uploads/2020/04/Colleagues-meetingroom-scaled.jpg",
    "https://imageio.forbes.com/specials-images/dam/imageserve/998453038/0x0.jpg?format=jpg&amp;height=600&amp;width=1200&amp;fit=bounds",
    "https://www.levyrecognition.com/web/image/2885/background_Recognition-Ideas-for-Every-Stage.jpg",
    "https://helvar.com/wp-content/uploads/2021/01/AdobeStock_176866761-scaled.jpeg",
    "https://avatars.mds.yandex.net/i?id=426290f4e80b59f884886d2a305ff85a_l-5380059-images-thumbs&ref=rim&n=13&w=2718&h=1535",
    "https://www.billtrust.com/-/media/images/primary-content/section-image/fpo-1920x1080/shutterstock_1039227532-green.jpg?as=0&w=1920&hash=95A61C75C4D96F0D4E71C00572B206E3",
    "https://files.constantcontact.com/86072391601/a5267a37-08f8-4bdb-bae7-801ddf753a7f.jpg",
  ];

  return (
    <div className="overflow-hidden">
      <section className="h-screen relative overflow-hidden">
        <div className="h-screen w-full absolute">
          <img src={careerBanner} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute h-full w-full">
          <img src={blackShade} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="relative h-full w-full flex flex-col justify-center items-center">
          <div className="text-6xl text-[#fff] textGradient5 pt-28 leading-normal font-bold text-center">
            Innovators Wanted, Join <span className="block">The Wises Revolution</span>
          </div>

          {/* SwiperJS Infinite Auto-Scrolling Slider */}
          <div className="w-full mt-10">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={20}
              slidesPerView={4} // Adjust for responsiveness
              loop={true} // Infinite loop
              autoplay={{
                delay: 0,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={5000} // Smooth auto-scrolling speed
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
              className="w-full"
            >
              {careerImages.map((image, index) => (
                <SwiperSlide key={index} className="rounded-md even:mt-[50px] overflow-hidden">
                  <img src={image} alt="" className="w-full h-[300px] object-cover rounded-md" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section className=" relative py-20">
        <div className="absolute top-0 right-0 left-0 bottom-0 h-full w-full -z-10">
            <img src={darkGradient} alt="" />
        </div>
        <div className="max-w-[1400px] mx-auto">
            <div className="md:flex gap-10 justify-center items-center">
                <div className="md:w-[50%] h-[400px] overflow-hidden rounded-3xl">
                    <img src="https://i.ytimg.com/vi/QRTBqiu9UAU/maxresdefault.jpg" alt="" className="w-full h-full object-cover"/>
                </div>
                <div className="md:w-[50%]">
    <div className="text-[#fff] textGradient5 text-4xl leading-normal font-bold mb-3">Why Join IMC?</div>
    <div className="text-[#fff] textGradient6 mb-5">
        At IMC Business Solutions, we offer a supportive and innovative workplace where your skills and ideas matter. Whether you're experienced or just starting, we help you grow and succeed.
    </div>
    <div>
        <ul className="flex flex-col gap-3">
            <li className="bg-[#ffffff22] px-4 py-3 rounded-lg text-[#fff]">
                <strong>Career Growth:</strong> Training, mentorship, and opportunities to advance.
            </li>
            <li className="bg-[#ffffff22] px-4 py-3 rounded-lg text-[#fff]">
                <strong>Work-Life Balance:</strong> A flexible and supportive environment.
            </li>
            <li className="bg-[#ffffff22] px-4 py-3 rounded-lg text-[#fff]">
                <strong>Exciting Projects:</strong> Work on cutting-edge IT solutions.
            </li>
            <li className="bg-[#ffffff22] px-4 py-3 rounded-lg text-[#fff]">
                <strong>Great Team:</strong> Collaborate with talented professionals.
            </li>
        </ul>
    </div>
</div>

            </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="flex justify-center items-center flex-col mb-10">
            <div className="text-center text-[#ffff] text-6xl textGradient5 font-bold leading-normal">Current Openings</div>
            <div className="text-center text-[#fff] textGradient6 max-w-[900px] mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum eveniet asperiores, obcaecati culpa animi deleniti laborum voluptatibus. Repellendus, odit nobis.</div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto">
            <div className="w-full h-[200px] rounded-3xl bg-[#ffffff1c] shadow-md backdrop-blur-xl px-4 lg:px-6 py-5">
              <div className="text-2xl font-bold textGradient6 text-[#fff] mb-2">Php Developer</div>
              <div className="text-[#cbcaca] textGradient6 mb-2">1-4 Years</div>
              <div className="text-[#fff] textGradient6 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, labore!  Quo, labore!</div>
              <div>
                <button className="bg-[#ffffff2e] px-8 py-2 rounded-3xl text-sm text-[#fff] textGradient6">Apply Now</button>
              </div>
            </div>
            <div className="w-full h-[200px] rounded-3xl bg-[#ffffff1c] shadow-md backdrop-blur-xl px-4 lg:px-6 py-5">
              <div className="text-2xl font-bold textGradient6 text-[#fff] mb-2">Php Developer</div>
              <div className="text-[#cbcaca] textGradient6 mb-2">1-4 Years</div>
              <div className="text-[#fff] textGradient6 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, labore!  Quo, labore!</div>
              <div>
                <button className="bg-[#ffffff2e] px-8 py-2 rounded-3xl text-sm text-[#fff] textGradient6" onClick={() => setOpenCareerApply(!openCarrerApply)}>Apply Now</button>
              </div>
            </div>
            <div className="w-full h-[200px] rounded-3xl bg-[#ffffff1c] shadow-md backdrop-blur-xl px-4 lg:px-6 py-5">
              <div className="text-2xl font-bold textGradient6 text-[#fff] mb-2">Php Developer</div>
              <div className="text-[#cbcaca] textGradient6 mb-2">1-4 Years</div>
              <div className="text-[#fff] textGradient6 mb-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, labore!  Quo, labore!</div>
              <div>
                <button className="bg-[#ffffff2e] px-8 py-2 rounded-3xl text-sm text-[#fff] textGradient6">Apply Now</button>
              </div>
            </div>
        </div>
      </section>
      <section className="w-full py-10 bg-[#fff]">
        <Footer/>
      </section>
      {openCarrerApply && (
        <div className="fixed z-[9999]">
          <CareerApply openCarrerApply = {openCarrerApply} setOpenCareerApply ={setOpenCareerApply}/>
        </div>
      )}
    </div>
  );
};

export default Career;
