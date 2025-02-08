import React, { useEffect, useRef } from "react";
import blackshade from "../assets/whiteshade.png";
import banner from "../assets/banner.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import Footer from "./Footer";
import Testimonials from "./Testimonials";
import ChatBot from "./ChatBot";
import inv from "../assets/inv.jpeg";
import abouthome from "../assets/abouthome.jpeg";
import hosopitality from "../assets/hospitality.jpg";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpg";
import service7 from "../assets/service7.jpg";
import service8 from "../assets/service8.jpg";
import service9 from "../assets/service9.jpg";
import service10 from "../assets/service10.jpg";
import service11 from "../assets/service12.jpg";
import service12 from "../assets/service11.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import healthcare from "../assets/healthcare.jpg";
import restaurant from "../assets/restaurants.jpg";
import institution from "../assets/institution.jpg";
import hardwareicon from "../assets/hardware.png";
import expertteam from "../assets/expertteam.jpg";
import mobileexpertise from "../assets/mobileexpertise.png";
import userfriendly from "../assets/userfriendly.jpg";
import security from "../assets/security.png";
import uiux from "../assets/uiux.jpg"
import retailandwholesale from "../assets/retailandwholesale.jpg"
import pharmacies from "../assets/pharmacies.jpg"
import schoolcollege from "../assets/schoolcollege.jpg"
import hospitalandclinics from "../assets/hospitalandclinics.jpg"
import restaurants from "../assets/restaurant.jpg"
const Home = () => {
  const canvasRef = useRef(null);
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

  const softwareList = [
    {
      no: "01",
      name: "Inventory Management",
      img: inv,
      title: "Efficiently Managing Your Inventory",
      section: "Inventory Solutions",
      para: "Optimize your operations with a smart inventory management system designed to track, manage, and streamline stock levels. Reduce errors, boost efficiency, and make informed decisions with ease.",
      link: "",
    },
    {
      no: "02",
      name: "Health Care Management",
      img: healthcare,
      title: "Optimizing Health Care Delivery",
      section: "Health Care",
      para: " Streamlining processes and optimizing resources are key to improving patient care and reducing costs in healthcare.",
      link: "",
    },
    {
      no: "03",
      name: "Restaurants",
      img: restaurant,
      title: "Elevating Dining Experiences",
      section: "Restaurant Management",
      para: "Efficient management and a focus on customer service are essential for creating memorable dining experiences and driving business success.",
      link: "",
    },
    {
      no: "04",
      name: "Hospitality",
      img: hosopitality,
      title: "Enhancing Guest Satisfaction",
      section: "Hospitality Management",
      para: "Providing exceptional service and seamless operations are crucial in creating memorable guest experiences and ensuring long-term success in the hospitality industry.",
      link: "",
    },
    {
      no: "05",
      name: "Institution Management",
      img: institution,
      title: "Streamlining Institutional Operations",
      section: "Institution Management",
      para: "Effective management practices are key to optimizing resources, improving efficiency, and fostering a positive environment within educational or organizational institutions.",
      link: "",
    },
  ];
  const services = [
    {
      title: "WEBSITE AND WEB APPLICATION DEVELOPMENT",
      description:
        "We specialize in creating modern, responsive websites and powerful web applications tailored to your business needs. Our solutions blend seamless user experiences with cutting-edge technologies to help you engage customers, streamline operations, and drive growth. From design to deployment, we bring your ideas to life online.",
      img1: service1,
      img2: service2,
    },
    {
      title: "MOBILE APP DEVELOPMENT",
      description:
        "We craft innovative and user-friendly mobile applications designed to meet your business goals. Our team specializes in building secure, scalable, and high-performance apps for iOS and Android platforms, ensuring a seamless experience for your users. From concept to launch, we deliver apps that drive engagement and success.",
      img1: service3,
      img2: service4,
    },
    {
      title: "DIGITAL MARKETING/SEO",
      description:
        "Boost your online presence and connect with your audience through strategic digital marketing and SEO services. We help drive organic traffic, enhance search engine rankings, and create targeted campaigns that deliver measurable results. From content creation to social media and paid ads, we fuel your brand’s digital growth.",
      img1: service5,
      img2: service6,
    },
    {
      title: "BRANDING ",
      description:
        "We help businesses build a strong and memorable identity. From logo design and brand strategy to visual elements and messaging, we craft cohesive branding solutions that resonate with your audience and reflect your values. Stand out, connect deeply, and leave a lasting impression.",
      img1: service7,
      img2: service8,
    },
    {
      title: "GRAPHICS AND CREATIVES",
      description:
        "We bring ideas to life with visually stunning designs and creative content. From eye-catching social media graphics to impactful marketing materials, our designs are crafted to captivate your audience and elevate your brand’s message. Let’s make your visuals unforgettable",
      img1: service9,
      img2: service10,
    },
    {
      title: "BUSINESS BRANDINGS",
      description:
        "We specialize in building a unique and powerful brand identity for businesses of all sizes. Our comprehensive branding services include logo design, brand positioning, messaging, and visual aesthetics that align with your vision. We help you create a brand that stands out, fosters trust, and connects with your target audience.",
      img1: service11,
      img2: service12,
    },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl");

    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fragmentShaderSource = `
      precision mediump float;
      uniform vec2 iResolution;
      uniform float iTime;

      void mainImage(out vec4 fragColor, in vec2 fragCoord) {
        vec2 uv = (2.0 * fragCoord - iResolution.xy) / min(iResolution.x, iResolution.y);
        
        for(float i = 1.0; i < 10.0; i++) {
          uv.x += 0.6 / i * cos(i * 2.5 * uv.y + iTime);
          uv.y += 0.6 / i * cos(i * 1.5 * uv.x + iTime);
        }

        fragColor = vec4(vec3(0.1) / abs(sin(iTime - uv.y - uv.x)), 1.0);
      }

      void main() {
        mainImage(gl_FragColor, gl_FragCoord.xy);
      }
    `;

    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    function compileShader(source, type) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = compileShader(vertexShaderSource, gl.VERTEX_SHADER);
    const fragmentShader = compileShader(
      fragmentShaderSource,
      gl.FRAGMENT_SHADER
    );

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
    }

    gl.useProgram(program);

    const vertices = new Float32Array([
      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
    ]);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    const iResolution = gl.getUniformLocation(program, "iResolution");
    const iTime = gl.getUniformLocation(program, "iTime");

    function render(time) {
      gl.viewport(0, 0, canvas.width, canvas.height);

      gl.uniform2f(iResolution, canvas.width, canvas.height);
      gl.uniform1f(iTime, time * 0.001);

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.TRIANGLES, 0, 6);

      requestAnimationFrame(render);
    }

    render(0);

    return () => {
      cancelAnimationFrame(render);
    };
  }, []);

 useEffect(() => {
    const scrollActive = () => {
        setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener('scroll', scrollActive);
}, []);

  return (
    <div className="relative overflow-hidden ">
      <div className="fixed top-0 left-0 bottom-0 right-0 -z-10 opacity-40">
      
        <canvas
          ref={canvasRef}
          style={{ display: "block", width: "100vw", height: "100vh" }}
        />
        
        
      </div>
      <div className="bottom-10 fixed right-10 z-50">
        <ChatBot />
      </div>
      <div className="fixed opacity-40 -z-10 top-0 left-0 right-0 bottom-0 "></div>
      {/* Banner */}
      <section className="h-screen mb-20">
        <div></div>
      </section>

      {/* About */}
      <section className="w-full max-w-[1440px] mx-auto mb-20">
        <div>
          <div className="md:flex md:justify-center md:items-center md:gap-10 w-full">
            {/* left */}
            <div className="md:w-[60%] py-5 flex flex-col gap-2">
              <div>
                <div className="flex flex-col gap-2 mb-5">
                  <div className="text-[40px] leading-[50px] textGradient5 text-[#fff] font-semibold">
                    IMC BUSSINESS SOLUTIONS
                    <span className="block">Know more about us</span>
                  </div>
                  <div className="textGradient4 text-[30px]  leading-tight text-[#fff]">
                    Our Journey to Digital Excellence
                  </div>
                </div>
                <div className="textGradient6 text-[#fff]">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Earum minima quidem at magnam repellat aliquam non eligendi
                  sapiente alias corrupti accusantium maiores laboriosam, in
                  dignissimos nulla incidunt molestias, sequi harum. Totam quis
                  repellendus minus illo dicta sunt, at nostrum tempora, quasi,
                  excepturi ducimus nulla corrupti! A tempore odio suscipit
                  aspernatur quos
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 place-items-center w-full gap-5">
                <div className="relative w-full h-[200px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]">
                  <div className="absolute rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)]` bg-[#000]">
                    <img
                      src={hardwareicon}
                      alt="harware"
                      className="object-cover w-full h-full rounded-3xl opacity-60"
                    />
                  </div>
                  <h1 className="relative z-10 flex justify-center items-center text-[#fff] text-center p-5 w-full h-full font-extrabold text-[20px]">
                    CUSTOM HARDWARE INTEGRATION
                  </h1>
                </div>
                <div className=" relative w-full h-[200px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]">
                  <div className="absolute rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)]` bg-[#000]">
                    <img
                      src={expertteam}
                      alt="harware"
                      className="object-cover w-full h-full rounded-3xl opacity-60"
                    />
                  </div>
                  <h1 className="relative z-10 flex justify-center items-center text-[#fff] text-center p-5 w-full h-full font-extrabold text-[20px]">
                    EXPERT TEAM
                  </h1>
                </div>
                <div className=" relative w-full h-[200px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]">
                  <div className="absolute rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)]` bg-[#000]">
                    <img
                      src={mobileexpertise}
                      alt="harware"
                      className="object-cover w-full h-full rounded-3xl opacity-60"
                    />
                  </div>
                  <h1 className="relative z-10 flex justify-center items-center text-[#fff] text-center p-5 w-full h-full font-extrabold text-[20px]">
                    MOBILE EXPERTISE
                  </h1>
                </div>
                <div className=" relative w-full h-[200px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]">
                  <div className="absolute rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)]` bg-[#000]">
                    <img
                      src={userfriendly}
                      alt="harware"
                      className="object-cover w-full h-full rounded-3xl opacity-60"
                    />
                  </div>
                  <h1 className="relative z-10 flex justify-center items-center text-[#fff] text-center p-5 w-full h-full font-extrabold text-[20px]">
                    USER FRIENDLY DESIGNS
                  </h1>
                </div>
                <div className="relative w-full h-[200px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]">
                  <div className="absolute rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)]` bg-[#000]">
                    <img
                      src={security}
                      alt="harware"
                      className="object-cover w-full h-full rounded-3xl opacity-60"
                    />
                  </div>
                  <h1 className="relative z-10 flex justify-center items-center text-[#fff] text-center p-5 w-full h-full font-extrabold text-[20px]">
                    ROBUST SECURITY FRAMEWORKS
                  </h1>
                </div>
                <div className="relative w-full h-[200px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]">
                  <div className="absolute rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)]` bg-[#000]">
                    <img
                      src={uiux}
                      alt="harware"
                      className="object-cover w-full h-full rounded-3xl opacity-60"
                    />
                  </div>
                  <h1 className="relative z-10 flex justify-center items-center text-[#fff] text-center p-5 w-full h-full font-extrabold text-[20px]">
                    INNOVATIVE UI/UX DESIGNS
                  </h1>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="md:w-[40%] bg-[#000] h-[650px] rounded-md overflow-hidden">
              <img
                src={abouthome}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Count */}
      <section className="mb-20 w-full max-w-[1400px] mx-auto rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px]">
        <div className="backdrop-blur-3xl bg-[#000000] rounded-3xl w-full p-10 `rounded-[calc(1.5rem-1px)]`">
          <div className="md:flex grid grid-cols-1 place-items-center w-full justify-between px-10 items-center h-full gap-10">
            <div className="flex items-center justify-center gap-2">
              <div className="text-[65px] textGradient font-black">5+</div>
              <div className="leading-tight text-[30px] textGradient">
                Years of <span className="block">Experience</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="text-[65px] textGradient font-black">20+</div>
              <div className="leading-tight text-[30px] textGradient">
                Skilled <span className="block">Professionals</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="text-[65px] textGradient font-black">100%</div>
              <div className="leading-tight text-[30px] textGradient">
                Customer <span className="block">Satisfaction</span>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <div className="text-[65px] textGradient font-black">1500+</div>
              <div className="leading-tight text-[30px] textGradient">
                Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Softwares */}
      <section className="mb-20">
        <div>
          {/* Title Portion */}
          <div className="md:flex md:justify-between md:items-center md:gap-10 mb-10 max-w-[1400px] mx-auto">
            <div className="text-[#fff] text-[50px] textGradient4 leading-tight md:w-[60%]">
              Softwares
              <span className="block text-[40px]">What We Build for You</span>
            </div>
            <div className="text-[#fff] md:w-[40%] textGradient6">
              Explore our suite of cutting-edge software products designed to
              transform business processes and elevate efficiency. From custom
              enterprise solutions to dynamic web applications, we craft
              technology that meets your unique needs.
            </div>
          </div>
          {/* Software List */}
          <div>
            {softwareList.map((item) => (
              <div className="border-b-2 border-[#ffffff] pb-5 pt-5">
                <div className="grid grid-cols-1 md:grid-cols-3   justify-center  gap-10 max-w-[1400px] mx-auto">
                  <div className="flex flex-col gap-2 text-[#fff] p-16">
                    <div className=" italic">{item.no}</div>
                    <div className="text-3xl textGradient4">{item.name}</div>
                  </div>
                  <div className="w-full h-[250px] rounded-3xl bg-[#ffffff5d] backdrop-blur-md border border-[#fff] overflow-hidden">
                    <img
                      src={item.img}
                      alt="Descriptive image text"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="pt-16">
                    <div className="textGradient5 mb-3 font-bold text-[#fff]">
                      {item.title}
                    </div>
                    <div className="flex gap-5 textGradient6">
                      <div className="text-[#fff]">{item.section}</div>
                      <div className="text-[#ffff]">{item.para}</div>
                    </div>
                    <div className="mt-5 flex justify-start items-center gap-2 text-[#fff]">
                      Learn More <MdOutlineArrowOutward />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mb-20 max-w-[1400px] mx-auto w-full">
        <div>
          <div className="mb-5">
            <div className="text-[#fff] text-[50px] leading-tight textGradient4">
              Crafting Innovation with Creativity,
              <span className="block">Passion and Skill</span>
            </div>
          </div>

          <Swiper
            modules={[Pagination, Navigation, Autoplay]} // Added Autoplay module here
            spaceBetween={30}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000, // Delay in milliseconds (3 seconds)
              disableOnInteraction: false, // Keeps autoplay running even after user interaction
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              1024: {
                slidesPerView: 1,
              },
            }}
            className="w-full relative"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="grid md:grid-cols-3 grid-cols-1 place-items-end gap-10">
                  {/* first div */}
                  <div className="w-full flex flex-col justify-center items-start gap-5">
                    <div className="flex items-center gap-2">
                      <div className="text-[#000] p-1 rounded-full bg-[#fff]">
                        <IoIosFlash />
                      </div>
                      <div className="flex flex-col justify-center items-center text-[#fff] leading-tight">
                        I thrive on working{" "}
                        <span className="block">closely with clients</span>{" "}
                      </div>
                    </div>
                    <div className="w-full h-[250px] bg-[#ffffff60] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] backdrop-blur-3xl">
                      <div className="relative rounded-3xl w-full h-full overflow-hidden">
                        <img
                          src={service.img1}
                          alt="img1"
                          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
                        />
                      </div>
                    </div>
                  </div>
                  {/* Second div */}
                  <div className="flex flex-col gap-5">
                    <div className="text-[#ffff] text-[38px] leading-tight textGradient5">
                      {service.title}
                    </div>
                    <div className="text-[#fff] textGradient6">
                      {service.description}
                    </div>
                    <div className="text-[#fff] textGradient6 font-bold flex items-center gap-2">
                      Learn More <MdOutlineArrowOutward />
                    </div>
                  </div>
                  <div className="w-full h-[400px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] backdrop-blur-3xl rounded-3xl">
                    <div className="relative rounded-3xl w-full h-full overflow-hidden">
                      <img
                        src={service.img2}
                        alt="img2"
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Business */}
      <section className="max-w-[1400px] mx-auto mb-20">
        <div>
          <div className="text-[#fff] mb-2 text-[50px] textGradient4 text-center">
            Business Capabilities
          </div>
          <div className="text-center text-[#fff] mb-10 max-w-[900px] mx-auto font-semibold textGradient6">
            We provide tailored business solutions designed to streamline
            operations, enhance efficiency, and drive growth. Our services are
            crafted to meet the unique needs of each business, ensuring success
            in an ever-evolving market
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
            <div className=" bottom-0 w-full h-[300px] flex flex-col justify-center items-center p-5 bg-gradient-to-r from-[#8d8d8d] overflow-hidden via-[#ffffff] relative to-[#ffdd9e]  bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
              <div className="absolute  bg-[#0000007c] top-0 bottom-0 left-0 right-0"></div>
              <div className="absolute rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)]`  mix-blend-multiply -z-10">
                <img
                  src={retailandwholesale}
                  alt="retailandwholesale"
                  className="object-cover w-full h-full rounded-3xl "
                />
              </div>
              <div className="absolute z-20 bottom-10 flex flex-col justify-center items-center">
                <div className=" text-[#fff] relative text-[30px] font-black textGradient5">
                  Retail and Wholesale
                </div>
                <div className=" text-[#fff] relative textGradient6 text-center">
                  We provide retail and wholesale solutions for hardware and
                  software, offering high-quality products from trusted brands.
                  Our services cater to both individual customers and businesses
                  with competitive pricing and reliable support
                </div>
              </div>
            </div>

            <div className=" bottom-0 w-full h-[300px] flex flex-col justify-center items-center p-5 bg-gradient-to-r from-[#8d8d8d] overflow-hidden via-[#ffffff] relative to-[#ffdd9e]  bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
              <div className="absolute  bg-[#0000007c] top-0 bottom-0 left-0 right-0"></div>
              <div className="absolute rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)]`  mix-blend-multiply -z-10">
                <img
                  src={pharmacies}
                  alt="pharmacies"
                  className="object-cover w-full h-full rounded-3xl "
                />
              </div>
              <div className="absolute z-20 bottom-10 flex flex-col justify-center items-center">
                <div className=" text-[#fff] relative text-[30px] font-black textGradient5">
                  Pharmacies
                </div>
                <div className=" text-[#fff] relative textGradient6 text-center">
                  We offer advanced IT solutions for pharmacies, optimizing
                  inventory management, improving customer service, and
                  streamlining operational efficiency with reliable support and
                  enhanced security.{" "}
                </div>
              </div>
            </div>
            <div className=" bottom-0 w-full h-[300px] flex flex-col justify-center items-center p-5 bg-gradient-to-r from-[#8d8d8d] overflow-hidden via-[#ffffff] relative to-[#ffdd9e]  bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
              <div className="absolute  bg-[#0000007c] top-0 bottom-0 left-0 right-0"></div>
              <div className="absolute rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)]`  mix-blend-multiply -z-10">
                <img
                  src={schoolcollege}
                  alt="schoolcollege"
                  className="object-cover w-full h-full rounded-3xl "
                />
              </div>
              <div className="absolute z-20 bottom-10 flex flex-col justify-center items-center">
                <div className=" text-[#fff] relative text-[30px] font-black textGradient5">
                  School and  College
                </div>
                <div className=" text-[#fff] relative textGradient6 text-center">
                  We provide comprehensive IT solutions for schools and
                  colleges, empowering digital learning environments and
                  ensuring smooth campus management through efficient and
                  innovative technology
                </div>
              </div>
            </div>
            <div className=" bottom-0 w-full h-[300px] flex flex-col justify-center items-center p-5 bg-gradient-to-r from-[#8d8d8d] overflow-hidden via-[#ffffff] relative to-[#ffdd9e]  bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
              <div className="absolute  bg-[#0000007c] top-0 bottom-0 left-0 right-0"></div>
              <div className="absolute rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)]`  mix-blend-multiply -z-10">
                <img
                  src={hospitalandclinics}
                  alt="hospitalandclinics"
                  className="object-cover w-full h-full rounded-3xl "
                />
              </div>
              <div className="absolute z-20 bottom-10 flex flex-col justify-center items-center">
                <div className=" text-[#fff] relative text-[30px] font-black textGradient5">
                  Hospital and Clinics
                </div>
                <div className=" text-[#fff] relative textGradient6 text-center">
                  We provide specialized IT solutions for hospitals and clinics,
                  improving patient management, streamlining operations, and
                  ensuring seamless healthcare delivery with secure and
                  efficient technology.
                </div>
              </div>
            </div>
            <div className=" bottom-0 w-full h-[300px] flex flex-col justify-center items-center p-5 bg-gradient-to-r from-[#8d8d8d] overflow-hidden via-[#ffffff] relative to-[#ffdd9e]  bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
              <div className="absolute  bg-[#0000007c] top-0 bottom-0 left-0 right-0"></div>
              <div className="absolute rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)]`  mix-blend-multiply -z-10">
                <img
                  src={restaurants}
                  alt="restaurants"
                  className="object-cover w-full h-full rounded-3xl "
                />
              </div>
              <div className="absolute z-20 bottom-10 flex flex-col justify-center items-center">
                <div className=" text-[#fff] relative text-[30px] font-black textGradient5">
                  Restaurants
                </div>
                <div className=" text-[#fff] relative textGradient6 text-center">
                  We provide tailored IT solutions for restaurants, enhancing
                  order management, improving customer experience, and
                  streamlining operations with reliable, efficient, and secure
                  technology
                </div>
              </div>
            </div>
            <div className=" bottom-0 w-full h-[300px] flex flex-col justify-center items-center p-5 bg-gradient-to-r from-[#8d8d8d] overflow-hidden via-[#ffffff] relative to-[#ffdd9e]  bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
              <div className="absolute  bg-[#0000007c]  top-0 bottom-0 left-0 right-0"></div>
              <div className="absolute rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)]`  mix-blend-multiply -z-10">
                <img
                  src={retailandwholesale}
                  alt="retailandwholesale"
                  className="object-cover w-full h-full rounded-3xl "
                />
              </div>
              <div className="absolute z-20 bottom-10 flex flex-col justify-center items-center">
                <div className=" text-[#fff] relative text-[30px] font-black textGradient5">
                  Hotels
                </div>
                <div className=" text-[#fff] relative textGradient6 text-center">
                  We offer customized IT solutions for hotels, improving guest
                  services, streamlining reservations, and enhancing operational
                  efficiency with reliable, secure, and innovative technology.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1400px] mx-auto mb-20">
        <div className="mb-10 textGradient4 text-[50px] text-[#fff] text-center">
        Words from Our Valued Clients
        </div>
        <Testimonials />
      </section>

      {/* Contact */}
      <section className="mb-20 max-w-[1400px] mx-auto w-full">
        <div className="w-full">
          <div className="flex justify-between items-center w-full mb-16">
            <div className="md:w-[60%] flex flex-col justify-start gap-5">
              <div className="text-[#fff] text-[50px] textGradient4 leading-tight">
                Get in Touch and Lets{" "}
                <span className="block">Make It Happen</span>
              </div>
              <div className="text-[#fff] textGradient6">
              Get in touch with us! Whether you have questions, need support, or want to learn more about our services, we’re here to assist you. Simply fill out the form below, and we’ll respond promptly
              </div>
            </div>
            <div className="md:w-[50%]"></div>
          </div>
          {/* Contact Form */}
          <div className="md:flex md:justify-start md:items-end w-full grid-cols-1 place-content-center gap-10">
            <div className="md:w-[50%] ">
              <div className="flex flex-col justify-start gap-5 textGradient6 mb-10 text-xl">
                <div className="text-[#fff]">info@imcbsglobal.com</div>
                <div className="text-[#fff]">+91 75938 20007</div>
                <div className="text-[#fff]">
                  Palakkunnummal Building , Near Govt Ayurvedic Hospital Emily{" "}
                  <span className="block">
                    Kalpetta, Wayanad, Kerala – 673121
                  </span>{" "}
                </div>
              </div>
              <div className="flex">
                <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffbf00] to-[#ffb62d] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
                  <button className="text-[#fff] w-full h-full `rounded-[calc(1.5rem-1px)]` bg-[#000] text-3xl px-10 py-3 rounded-3xl border textGradient6">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-[50%] flex flex-col gap-5">
              <div className="text-[#ffff] textGradient6 text-2xl">
                Here to bring your concept to life, manage your ongoing project,
                or expand your existing development team
              </div>
              <form action="">
                <div className="w-full grid grid-cols-2 gap-5 mb-3 textGradient6">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                </div>
                <div className="w-full mb-3">
                  <textarea
                    placeholder="Enter Your Message"
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button className="w-full text-[#000] px-8 py-3 bg-[#fff] rounded-3xl textGradient6">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
