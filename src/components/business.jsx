import React, { useState } from "react";
import { TiTick } from "react-icons/ti";
import { PiPlusBold } from "react-icons/pi";
import Footer from "./Footer";
import bussinessimg from "../assets/bussiness.jpeg";
import business1 from "../assets/business1.jpeg";
import business2 from "../assets/business.jpeg";
import retail from "../assets/retail.jpeg";
import wholesale from "../assets/wholesale.jpeg";
import pharmacyImage from "../assets/pharmacy.jpeg";
import pharmacyImage1 from "../assets/pharmacy1.jpeg";
import pharmacyImage2 from "../assets/pharmacy2.jpeg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import school from "../assets/school.jpeg";
import hotel from '../assets/hotel.jpeg'
const business = () => {
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
  return (
    <div>
      <div className="pt-[130px] flex-col w-full mx-auto flex justify-center items-center">
        {/* banner */}
        <section className="max-w-[1400px] mx-auto w-full bg-[#fff] rounded-3xl h-[600px] mb-5">
          <div className="w-full h-full  ">
            <img
              src={bussinessimg}
              alt="bussiness"
              className="w-full h-full object-cover rounded-3xl "
            />
          </div>

          <div className="mt-5">
            <div className="flex gap-5 justify-center items-start">
              <div className="w-full h-[250px] bg-[#fff] rounded-3xl">
                <img
                  src={business1}
                  alt="bussiness"
                  className="w-full h-full object-cover rounded-3xl "
                />
              </div>
              <div className="w-full h-[250px] bg-[#fff] rounded-3xl">
                <img
                  src={business2}
                  alt="bussiness"
                  className="w-full h-full object-cover rounded-3xl "
                />
              </div>
            </div>
          </div>
        </section>

        {/* why choose imc bussiness */}
        <section className="mb-20 w-full max-w-[1400px] mx-auto mt-[300px]">
          <div>
            <div className="textGradient5 mb-10 font-bold text-[#fff] leading-tight">
              Why Choose
              <span className="textGradient4 block text-[50px]">
                IMC Business Solutions
              </span>
              <span>
                For <span className="text-[30px]">Your Business</span>
              </span>
            </div>
            <div className="w-full">
              <ul className="grid grid-cols-2 w-full gap-5">
                <li className="flex justify-center items-center gap-2 py-5 px-3 rounded-lg bg-[#fff] font-semibold">
                  <span>
                    <PiPlusBold />
                  </span>
                  Comprehensive Solutions for Retail & Wholesale
                </li>
                <li className="flex justify-center items-center gap-2 py-5 px-3 rounded-lg bg-[#fff] font-semibold">
                  <span>
                    <PiPlusBold />
                  </span>
                  Streamlined Operations for Pharmacies
                </li>
                <li className="flex justify-center items-center gap-2 py-5 px-3 rounded-lg bg-[#fff] font-semibold">
                  <span>
                    <PiPlusBold />
                  </span>
                  Smart IT Solutions for Schools & Colleges
                </li>
                <li className="flex justify-center items-center gap-2 py-5 px-3 rounded-lg bg-[#fff] font-semibold">
                  <span>
                    <PiPlusBold />
                  </span>
                  Efficient Management for Hospitals & Clinics
                </li>
                <li className="flex justify-center items-center gap-2 py-5 px-3 rounded-lg bg-[#fff] font-semibold">
                  <span>
                    <PiPlusBold />
                  </span>
                  Tailored Solutions for Restaurants
                </li>
                <li className="flex justify-center items-center gap-2 py-5 px-3 rounded-lg bg-[#fff] font-semibold">
                  <span>
                    <PiPlusBold />
                  </span>
                  Advanced Systems for Hotels
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* retailswholesale */}
        <section
          className="w-full max-w-[1400px] mx-auto mb-20 mt-[100px] "
          id="retailswholesale"
        >
          <div>
            <div className="text-[#fff] text-center text-[50px] textGradient4 mb-5">
              RETAILS AND WHOLESALES
            </div>
            <div className="text-center max-w-[900px] mx-auto text-[#fff] mb-10 textGradient6">
              We offer both retail and wholesale services, providing quality
              products for individual consumers and businesses alike. Whether
              you're shopping for personal use or need bulk purchases for your
              business, we ensure exceptional value and service
            </div>
            {/* retails */}
            <div className="md:flex justify-center items-center gap-10">
              <div className="w-full">
                <div className="text-[40px] textGradient4 text-[#fff] mb-5">
                  What we offer for retails
                </div>
                <div className="text-[#fff] textGradient6 mb-10">
                  "We offer an exceptional retail experience, focusing on
                  quality products, convenience, and personalized customer
                  service for individual shoppers."
                </div>
                <div className="flex flex-col justify-center gap-5 text-lg ">
                  <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] ">
                    <div className="bg-black w-full h-full rounded-lg p-3 flex items-center ">
                      <TiTick />
                      Diverse Products: From essentials to premium options, we
                      cater to all needs.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] ">
                    <div className="bg-black w-full h-full rounded-lg p-3 flex items-center ">
                      <TiTick />
                      Easy In-Store Experience: Our stores are welcoming, with
                      helpful staff ready to assist.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] ">
                    <div className="bg-black w-full h-full rounded-lg p-3 flex items-center ">
                      <TiTick />
                      Customer-Focused: We prioritize your satisfaction with
                      every shopping experience.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] ">
                    <div className="bg-black w-full h-full rounded-lg p-3 flex items-center ">
                      <TiTick />
                      Convenient Online Shopping: Enjoy easy browsing and
                      doorstep delivery.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[490px] flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] ">
                <div className=" bg-black w-full h-full rounded-lg  flex items-center ">
                  <img
                    src={retail}
                    alt="retail"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* wholesale */}
          <div className="pt-10">
            <div className="md:flex justify-center items-center gap-10">
              <div className="w-full h-[560px] flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] ">
                <div className=" bg-black w-full h-full rounded-lg  flex items-center ">
                  <img
                    src={wholesale}
                    alt="wholesale"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="text-[40px] textGradient4 text-[#fff] mb-5">
                  What we offer for Wholesale
                </div>
                <div className="text-[#fff] textGradient6 mb-10">
                  We offer tailored wholesale services to businesses and bulk
                  buyers, ensuring cost-effective solutions and timely
                  deliveries for large-scale purchases.
                </div>
                <div className="flex flex-col justify-center gap-5 text-lg ">
                  <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] ">
                    <div className="bg-black w-full h-full rounded-lg p-3 flex items-center ">
                      <TiTick />
                      Competitive Pricing: Enjoy discounts on bulk purchases
                      without compromising quality.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] ">
                    <div className="bg-black w-full h-full rounded-lg p-3 flex items-center ">
                      <TiTick />
                      Efficient Large-Volume Orders: Timely delivery to meet
                      your business needs.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] ">
                    <div className="bg-black w-full h-full rounded-lg p-3 flex items-center ">
                      <TiTick />
                      Flexible Payment Options: Manage cash flow with convenient
                      payment terms.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] ">
                    <div className="bg-black w-full h-full rounded-lg p-3 flex items-center ">
                      <TiTick />
                      Dedicated Support: Specialized assistance for orders,
                      logistics, and business needs.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* pharmacy */}
        <section
          className="mb-20 w-full max-w-[1400px] mx-auto mt-10  "
          id="pharmacies"
        >
          <div>
            <div className="text-[#fff] text-center text-[50px] textGradient4 mb-5 ">
              PHARMACIES
            </div>
            <div className="text-center max-w-[900px] mx-auto text-[#fff] mb-10 textGradient6">
              IT solutions for pharmacies streamline daily operations, improve
              inventory management, and enhance customer service. Advanced
              systems can support prescription tracking, automated billing, and
              data security, ensuring compliance with healthcare regulations.
              With these solutions, pharmacies can efficiently handle supply
              chains, optimize stock, and deliver seamless patient care
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-5">
              <div className=" w-full h-[300px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]">
                <div
                  className="relative w-full h-full  rounded-3xl overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={{
                    backgroundImage: `url(${pharmacyImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-black bg-opacity-75 text-white p-5 transition-transform duration-500 ${
                      hovered ? "translate-y-0" : "translate-y-full"
                    }`}
                  >
                    Efficient Inventory Management: Track and optimize stock
                    levels to reduce waste and ensure medicine availability.
                  </div>
                </div>
              </div>
              <div className=" w-full h-[300px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]">
                <div
                  className="relative w-full h-full  rounded-3xl overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHovered1(true)}
                  onMouseLeave={() => setHovered1(false)}
                  style={{
                    backgroundImage: `url(${pharmacyImage1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-black bg-opacity-75 text-white p-5 transition-transform duration-500 ${
                      hovered1 ? "translate-y-0" : "translate-y-full"
                    }`}
                  >
                    Enhanced Customer Experience: Implement automated
                    prescription tracking and secure billing systems for faster,
                    hassle-free service.
                  </div>
                </div>
              </div>
              <div className=" w-full h-[300px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]">
                <div
                  className="relative w-full h-full  rounded-3xl overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHovered2(true)}
                  onMouseLeave={() => setHovered2(false)}
                  style={{
                    backgroundImage: `url(${pharmacyImage2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-black bg-opacity-75 text-white p-5 transition-transform duration-500 ${
                      hovered2 ? "translate-y-0" : "translate-y-full"
                    }`}
                  >
                    Regulatory Compliance and Data Security: Ensure compliance
                    with healthcare regulations while safeguarding sensitive
                    customer and prescription data.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* School/College */}
        <section
          className="w-full max-w-[1400px] mb-20 mx-auto rounded-3xl bg-[#000] h-[600px] "
          id="school"
        >
          <div className="px-6 py-10 flex flex-col md:flex-row gap-10">
            <div className="md:w-[50%] flex flex-col justify-center items-start gap-5">
              <h1 className="text-[50px] leading-tight textGradient4">
                School and College
                <span className="block text-[30px]">
                  Empowering Education with Smart IT Solutions
                </span>
              </h1>
              <p className="textGradient6 mb-5 text-white">
                IT solutions for schools and colleges enhance learning
                experiences, streamline administrative operations, and ensure
                data security. Advanced technologies enable seamless
                communication between teachers, students, and parents while
                optimizing resource management and academic processes.
              </p>
              <div className="flex gap-10 items-center">
                <button className="flex justify-center items-center gap-2 px-10 py-3 rounded-3xl bg-white drop-shadow-md textGradient5 font-bold border">
                  Discover More <IoIosArrowRoundForward />
                </button>
                <div className="textGradient5 cursor-pointer">More</div>
              </div>
              <div className="w-full flex gap-10 items-center">
                <div className="w-full h-[200px] bg-gradient-to-l from-[#8d8d8d] via-[#ffffff] to-[#f4b45f] p-[1px] bg-[#222222] rounded-3xl">
                  <ul className="bg-black h-full w-full rounded-3xl flex flex-col  justify-center  ">
                    <li className="text-white p-3 flex items-center  gap-2">
                      <ChevronRight className="mr-2 text-white" />
                      Smart Learning Platforms
                    </li>
                    <li className="text-white p-3 flex items-center  gap-2">
                      <ChevronRight className="mr-2 text-white" />
                      Administrative Process Automation
                    </li>
                    <li className="text-white p-3 flex items-center  gap-2">
                      <ChevronRight className="mr-2 text-white" />
                      Student Information Systems (SIS)
                    </li>
                  </ul>
                </div>
                <div className="w-full h-[200px] bg-gradient-to-l from-[#8d8d8d] via-[#ffffff] to-[#f4b45f] p-[1px] bg-[#222222] rounded-3xl">
                  <ul className="bg-black  h-full w-full rounded-3xl flex flex-col  justify-center ">
                    <li className="text-white p-3 flex items-center  gap-2">
                      <ChevronRight className="mr-2 text-white" />
                      Enhanced Communication
                    </li>
                    <li className="text-white p-3 flex items-center  gap-2">
                      <ChevronRight className="mr-2 text-white" />
                      Data Security and Privacy Compliance
                    </li>
                    <li className="text-white p-3 flex items-center  gap-2">
                      <ChevronRight className="mr-2 text-white" />
                      Resource Management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:w-[50%] flex justify-center">
              <div className="w-full h-full bg-[#9e7373] rounded-3xl">
                <img
                  src={school}
                  alt="school"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* hospital and clinics */}
        <div className="pt-2 flex flex-col justify-center items-center w-full min-h-screen">
          <section
            id="hospitalClinics"
            className="max-w-[1400px] mx-auto w-full mb-2 p-6"
          >
            <div className="h-[600px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
              <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] overflow-hidden">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 textGradient4 pt-5">
                    Hospital and Clinics
                  </h2>
                  <p className="text-white text-sm md:text-base">
                    IT solutions for hospitals and clinics enhance operations,
                    improve patient care, and streamline administrative tasks.
                    Advanced technologies enable secure data management,
                    seamless communication, and data-driven decision-making for
                    better healthcare delivery
                  </p>
                </div>

                <div className="grid md:grid-cols-2 p-2 gap-3">
                  <div className="h-[110px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                    <div className="bg-[#000]  h-full w-full rounded-3xl p-6 flex items-center justify-center">
                      <h3 className="text-white font-semibold text-lg">
                        Electronic Medical Records (EMR) Integration
                      </h3>
                      <p className="text-white">
                        Digitize and centralize patient health records for easy
                        access and improved clinical decision-making.
                      </p>
                    </div>
                  </div>
                  <div className="h-[110px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                    <div className="bg-[#000]  h-full w-full rounded-3xl p-6 flex items-center justify-center border border-gray-200">
                      <h3 className="text-white font-semibold text-lg">
                        Appointment and Scheduling Systems
                      </h3>
                      <p className="text-white">
                        Simplify appointment booking, reduce waiting times, and
                        enhance patient experiences with automated scheduling.
                      </p>
                    </div>
                  </div>
                  <div className="h-[110px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                    <div className="bg-[#000]  h-full w-full rounded-3xl p-6 flex items-center justify-center">
                      <h3 className="text-white font-semibold text-lg">
                        Billing and Payment Automation
                      </h3>
                      <p className="text-white">
                        Streamline billing, invoicing, and payment processes for
                        faster and more accurate transactions.
                      </p>
                    </div>
                  </div>
                  <div className="h-[110px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                    <div className="bg-[#000]   h-full w-full rounded-3xl p-6 flex items-center justify-center border border-gray-200">
                      <h3 className="text-white font-semibold text-lg">
                        Data Security and Compliance
                      </h3>
                      <p className="text-white">
                        Protect sensitive patient data and ensure compliance
                        with healthcare regulations through advanced security
                        measures.
                      </p>
                    </div>
                  </div>
                  <div className="h-[110px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                    <div className="bg-[#000]  h-full w-full rounded-3xl p-6 flex items-center justify-center">
                      <h3 className="text-white font-semibold text-lg">
                        Inventory and Supply Chain Management
                      </h3>
                      <p className="text-white">
                        Track and manage medical supplies efficiently to prevent
                        shortages and reduce wastage.
                      </p>
                    </div>
                  </div>
                  <div className="h-[110px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                    <div className="bg-[#000] h-full w-full rounded-3xl p-6 flex items-center justify-center border border-gray-200">
                      <h3 className="text-white font-semibold text-lg">
                        Telemedicine Solutions
                      </h3>
                      <p className="text-white">
                        Enable remote consultations and patient monitoring
                        through secure video conferencing platforms.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/*Restaurant  */}

        <section
          className="w-[1350px] h-[600px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl mt-10"
          id="restaurantBusiness"
        >
          <div className="bg-black h-full w-full rounded-3xl  p-10">
            <div className="w-full mx-auto text-center">
              <h2 className="text-4xl font-bold text-white textgradient mb-4 textGradient4">
                IT Solutions for Restaurants
              </h2>
              <p className="text-lg text-white mb-8 textGradient6">
                Boost your restaurant's efficiency with advanced IT services
                tailored to streamline operations, enhance customer experiences,
                and manage resources seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mx-auto h-[200px] mt-32">
              <div className="rounded-2xl  p-6 hover:shadow-2xl transition-shadow border border-l-[#fff]">
                <h3 className="text-xl font-semibold text-white mb-2">
                  POS Systems Integration
                </h3>
                <p className="text-white mb-4">
                  Streamline order processing and payments with cutting-edge
                  Point of Sale systems.
                </p>
                {/* <button className="bg-orange-300 text-white py-2 px-4 rounded hover:bg-orange-600">
                Learn More
              </button> */}
              </div>

              <div className="rounded-2xl  p-6 hover:shadow-2xl transition-shadow border border-l-[#fff]">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Inventory Management
                </h3>
                <p className="text-white mb-4">
                  Gain control over your stock levels and reduce waste with
                  real-time tracking.
                </p>
                {/* <button className="bg-orange-300 text-white py-2 px-4 rounded hover:bg-orange-600">
                Learn More
              </button> */}
              </div>

              <div className="rounded-2xl  p-6 hover:shadow-2xl transition-shadow border border-l-[#fff]">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Customer Engagement Tools
                </h3>
                <p className="text-white mb-4">
                  Enhance loyalty with personalized offers, feedback systems,
                  and reservation platforms.
                </p>
                {/* <button className="bg-orange-300 text-white py-2 px-4 rounded hover:bg-orange-600">
                Learn More
              </button> */}
              </div>
            </div>
          </div>
        </section>

        {/* HOTELS */}
        <section
          className="w-[1350px] h-[600px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl mt-10"
          id="hotelBusiness"
        >
          <div className="bg-black h-full w-full rounded-3xl p-10">
            {/* Main Header and Description */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white textgradient mb-4 textGradient4">
                IT Solutions for Hotels
              </h2>
              <p className="text-lg text-white textGradient6">
                Elevate your hotel's operations with cutting-edge IT solutions
                designed to enhance guest experiences, optimize processes, and
                ensure seamless management.
              </p>
            </div>

            <div className="flex gap-5">
              {/* Left Section for Points in Two Columns */}
              <div className="w-1/2 grid grid-cols-2 gap-6">
                <div className="rounded-2xl p-6 hover:shadow-2xl transition-shadow border border-l-[#fff]">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Smart Room Automation
                  </h3>
                </div>
                <div className="rounded-2xl p-6 hover:shadow-2xl transition-shadow border border-l-[#fff]">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Central Reservation System
                  </h3>
                </div>
                <div className="rounded-2xl p-6 hover:shadow-2xl transition-shadow border border-l-[#fff]">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Guest Feedback and Analytics
                  </h3>
                </div>
                <div className="rounded-2xl p-6 hover:shadow-2xl transition-shadow border border-l-[#fff]">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Secure Wi-Fi Connectivity
                  </h3>
                </div>
                <div className="rounded-2xl p-6 hover:shadow-2xl transition-shadow border border-l-[#fff]">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Property Management Systems (PMS)
                  </h3>
                </div>
                <div className="rounded-2xl p-6 hover:shadow-2xl transition-shadow border border-l-[#fff]">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Energy Management Solutions
                  </h3>
                </div>
              </div>

              {/* Right Section for Image */}
              <div className="w-1/2 h-full flex items-center justify-center">
                <div className="w-full h-full bg-cover bg-center rounded-2xl">
                  <img
                    src={hotel}
                    alt="hotel"
                    className="h-full w-full rounded-2xl object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIMENT SECTION */}
        <section className="mb-20 w-full max-w-[1400px] mx-auto mt-5">
          <div>
            <div className="flex justify-between">
              <div className="text-[#fff] md:w-[60%] text-[50px] textGradient4">
                Get Started Today ...
              </div>
              <div className="md:w-[40%] text-[#fff] textGradient6">
                Take the first step toward smarter, more efficient business
                operations. Whether you’re in retail, healthcare, hospitality,
                or education, our custom IT solutions are designed to help your
                business thrive in a rapidly evolving digital landscape. Let's
                grow together.
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#fff] py-10 w-full">
          <Footer />
        </section>
      </div>
    </div>
  );
};

export default business;
