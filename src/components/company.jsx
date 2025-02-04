import React, { useState, useEffect ,useRef} from "react";
import Footer from "./Footer";
import aboutmain from "../assets/aboutmain.jpg";
import ceo1 from "../assets/ceo1.jpg";
import ceo2 from "../assets/ceo2.jpg";
import ceo3 from "../assets/ceo3.jpg";
import vision from "../assets/vision.jpg";
import mission from "../assets/mission.jpg";
import "swiper/css";
import "swiper/css/autoplay";

const company = () => {
  
  return (
    <>
      <div>
        {/* about */}
        <div className="pt-[180px] flex flex-col justify-center items-center w-full">
          <section id="aboutid" className="max-w-[1400px] w-full mx-auto mb-20">
            <div className="w-full">
              <div className="text-[#fff] text-[30px] mb-5 textGradient4 text-center leading-tight">
                WHO WE ARE
                <span className="block text-[50px]">
                  A Successful And Innovative IT Company
                </span>
              </div>
              <div className="text-[#fff] max-w-[700px] mb-10 mx-auto px-2 textGradient6 text-center">
                IMC Business Solutions is an Indian software company established
                in 2017, offering a comprehensive management platform that
                includes business software, Android/iOS development, web
                development, hardware and IT support, and business execution
                services. Our goal is to bring RITS Software’s products to
                global markets.
              </div>
              <div className="h-[600px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] overflow-hidden">
                  <img
                    src={aboutmain}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* TEAM */}
        <div className="pt-[50px] flex flex-col justify-center items-center w-full">
          <section className="mb-20 w-full max-w-[1400px] mx-auto" id="team">
            <div className="mb-10">
              <div className="text-[#fff] textGradient4 text-[50px] text-center leading-tight mb-5">
                Behind the Vision
                <span className="block text-[30px]">
                  Collaboration, innovation, and dedication united.
                </span>
              </div>
              <div className="textGradient6 max-w-[700px] mx-auto text-center text-[#fff]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                dolor eligendi adipisci. Ad asperiores facilis quisquam
                repellendus nemo expedita veritatis nisi facere, nihil ipsum
                itaque omnis dolore id voluptatibus voluptas!
              </div>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-3 w-full gap-5">
                <div className="w-[90%] mx-auto h-[500px] bg-[#fff] rounded-lg">
                  <img
                    src={ceo1}
                    alt="ceo1"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-[90%] mx-auto h-[500px] bg-[#fff] rounded-lg">
                  <img
                    src={ceo2}
                    alt="ceo2"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="w-[90%] mx-auto h-[500px] bg-[#fff] rounded-lg">
                  <img
                    src={ceo3}
                    alt="ceo3"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* <div className="w-[90%] mx-auto h-[500px] bg-[#fff] rounded-lg"></div>
                <div className="w-[90%] mx-auto h-[500px] bg-[#fff] rounded-lg"></div>
                <div className="w-[90%] mx-auto h-[500px] bg-[#fff] rounded-lg"></div> */}
              </div>
            </div>
          </section>
        </div>

        {/* goalsmission */}
        <div className="pt-[50px] flex flex-col justify-center items-center w-full">
          <section
            id="goalsmission"
            className="max-w-[1400px] mx-auto w-full mb-10"
          >
            <div>
              <div className="text-[50px] textGradient4 text-[#fff] text-center leading-tight mb-5">
                VISION AND MISSION
                <span className="block text-[30px]">
                  Innovation with Impact
                </span>
              </div>
              <div className="text-[#fff] max-w-[900px] mx-auto text-center textGradient6">
                Our vision is to lead in technological innovation, providing
                impactful solutions that drive business growth. We are committed
                to creating lasting value through strategic partnerships and
                cutting-edge products. Our mission is to empower our clients
                with the tools and expertise to succeed in an ever-evolving
                digital landscape. We strive for excellence, integrity, and a
                future of continuous progress
              </div>
            </div>
          </section>

          <section className="w-full max-w-[1400px] mx-auto mb-20">
            <div>
              <div className="grid grid-cols-12 place-items-center gap-3">
                {/* Left */}
                <div className=" col-span-6 w-full flex flex-col gap-3">
                  <div className="w-full h-[200px] bg-[#fff] rounded-3xl overflow-hidden">
                    {" "}
                    <img
                      src={vision}
                      alt="vision"
                      className="h-full w-full rounded-3xl object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-12 w-full gap-3">
                    <div className="col-span-6 flex flex-col w-full gap-3">
                      <div className=" w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                        <div className="w-full h-[150px] bg-[#000] rounded-3xl flex justify-center items-center ">
                          <ul className="text-[#fff] justify-center flex flex-col gap-4">
                            <li>Empowering Businesses</li>
                            <li>Driving Digital Transformation</li>
                          </ul>
                        </div>
                      </div>
                      <div className=" w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                        <div className="w-full h-[150px] bg-[#000] rounded-3xl flex justify-center items-center ">
                          <ul className="text-[#fff] justify-center flex flex-col gap-4">
                            <li>Innovation and Excellence</li>
                            <li>Building Partnerships</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-6 w-full">
                      <div className=" w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                        <div className="flex  justify-center text-justify items-center bg-black w-full h-[310px] text-[#fff]  rounded-3xl p-4">
                          Our vision is to empower businesses with innovative
                          and reliable technology solutions. We aim to drive
                          digital transformation through cutting-edge services
                          and personalized support. By fostering a culture of
                          innovation and excellence, we strive to be a trusted
                          partner in our clients' success. Together, we shape a
                          smarter, more connected future
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right */}
                <div className="col-span-6 w-full">
                  <div className="flex flex-col gap-3">
                    {/* Top */}
                    <div className="grid grid-cols-12 place-items-center gap-3 w-full">
                      <div className="col-span-6 w-full">
                        <div className=" w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                          <div className="flex  justify-center text-justify items-center bg-black w-full h-[310px] text-[#fff]  rounded-3xl p-4">
                            Our mission is to deliver innovative solutions that
                            empower businesses to thrive in a digital world. We
                            strive to create products that simplify processes
                            and drive efficiency. Through collaboration and
                            constant improvement, we aim to exceed client
                            expectations. We are dedicated to fostering
                            long-term relationships built on trust and success
                          </div>
                        </div>
                      </div>
                      <div className="col-span-6 flex flex-col w-full gap-3">
                        <div className=" w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                          <div className="w-full h-[150px] bg-[#000] rounded-3xl flex justify-center items-center">
                            <ul className="text-[#fff] justify-center flex flex-col gap-4">
                              <li>Innovative Solutions</li>
                              <li>Efficiency & Simplicity</li>
                            </ul>
                          </div>
                        </div>
                        <div className=" w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                          <div className="w-full h-[150px] bg-[#000] rounded-3xl flex justify-center items-center">
                            <ul className="text-[#fff] justify-center flex flex-col gap-4">
                              <li>Continuous Improvement</li>
                              <li>Client Relationships</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Bottom */}
                    <div className="w-full h-[200px] bg-[#fff] rounded-3xl">
                      <img
                        src={mission}
                        alt="vision"
                        className="h-full w-full rounded-3xl object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SUPPORTS */}
        <div className="pt-2 flex flex-col justify-center items-center w-full min-h-screen">
          <section
            id="supports"
            className="max-w-[1400px] mx-auto w-full mb-2 p-6"
          >
            <div className="h-[600px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
              <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] overflow-hidden">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 textGradient4 pt-5">
                    Support
                  </h2>
                  <p className="text-white text-sm md:text-base">
                    We are here to help you with all your needs. Explore our
                    services and get the support you require.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 p-2 gap-8">
                  <div className="bg-[#F7922C] rounded-lg p-6 flex items-center justify-center">
                    <h3 className="text-white font-semibold text-lg">
                      Lorem, ipsum.
                    </h3>
                    <p className="text-white">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, consequuntur?
                    </p>
                  </div>
                  <div className="bg-[#fff] rounded-lg p-6 flex items-center justify-center border border-gray-200">
                    <h3 className="text-gray-800 font-semibold text-lg">
                      Lorem, ipsum.
                    </h3>
                    <p className="text-white">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, consequuntur?
                    </p>
                  </div>
                  <div className="bg-[#F7922C] rounded-lg p-6 flex items-center justify-center">
                    <h3 className="text-white font-semibold text-lg">
                      Lorem, ipsum.
                    </h3>
                    <p className="text-white">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, consequuntur?
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center border border-gray-200">
                    <h3 className="text-gray-800 font-semibold text-lg">
                      Lorem, ipsum.
                    </h3>
                    <p className="text-white">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, consequuntur?
                    </p>
                  </div>
                  <div className="bg-[#F7922C] rounded-lg p-6 flex items-center justify-center">
                    <h3 className="text-white font-semibold text-lg">
                      Lorem, ipsum.
                    </h3>
                    <p className="text-white">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, consequuntur?
                    </p>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center border border-gray-200">
                    <h3 className="text-gray-800 font-semibold text-lg">
                      Lorem, ipsum.
                    </h3>
                    <p className="text-white">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, consequuntur?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* bussiness opportunities */}
        <div className="pt-2 flex flex-col justify-center items-center w-full min-h-screen">
          <section
            id="bussinessopportunities"
            className="max-w-[1400px] mx-auto w-full mb-10 p-6"
          >
            <div className="h-[600px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
              <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] overflow-hidden">
                <div className="text-center mb-8 w-full">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 textGradient4 pt-5">
                    Bussiness Opportunities
                  </h2>
                  <p className="text-white text-sm md:text-base">
                    Explore growth avenues through strategic collaborations,
                    innovative solutions, and tailored services designed to meet
                    dynamic market demands. Unlock potential and scale your
                    business efficiently with our expert guidance.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 h-[400px] p-5 ">
                  <div className="bg-slate-50 p-2 rounded-3xl h-full "></div>
                  <div className="bg-slate-50 p-2 rounded-3xl h-full"></div>
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
    </>
  );
};

export default company;
