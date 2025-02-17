import React, { useState ,useEffect} from "react";
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
import { useLocation } from "react-router-dom";
import { TiArrowRight } from "react-icons/ti";
const business = () => {
   const location = useLocation();
  
    // Scroll to the section based on the hash in the URL
    useEffect(() => {
      // Function to handle scrolling with offset
      const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 100; // Height of your navbar
          const elementPosition = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: "smooth"
          });
        }
      };
  
      // Handle initial load and hash changes
      if (location.hash) {
        // Remove the '#' from the hash to get the ID
        const sectionId = location.hash.replace("#", "");
        // Add a small delay to ensure the DOM is fully loaded
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 0);
      }
    }, [location.hash]);
  const [hovered, setHovered] = useState(false);
  const [hovered1, setHovered1] = useState(false);
  const [hovered2, setHovered2] = useState(false);
const [active, setActive] = useState(false);

  useEffect(() => {
    // Scroll to top when this component loads
    window.scrollTo({ top: 0, behavior: "smooth" });

    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  return (
    <div>
      <div className="pt-[130px] flex-col w-full mx-auto flex justify-center items-center">
        {/* banner */}
        <section className="max-w-[1400px] mx-auto w-full rounded-3xl mb-5 overflow-hidden px-4">
          {/* Main Image */}
          <div className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[600px]">
            <img
              src={bussinessimg}
              alt="business"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>

          {/* Thumbnails Section */}
          <div className="mt-5">
            <div className="flex flex-col sm:flex-row gap-3 justify-between items-start">
              {/* Thumbnail 1 */}
              <div className="w-full sm:w-[48%] h-[150px] sm:h-[200px] md:h-[250px] bg-[#fff] rounded-3xl overflow-hidden">
                <img
                  src={business1}
                  alt="business"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>

              {/* Thumbnail 2 */}
              <div className="w-full sm:w-[48%] h-[150px] sm:h-[200px] md:h-[250px] bg-[#fff] rounded-3xl overflow-hidden">
                <img
                  src={business2}
                  alt="business"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* why choose imc bussiness */}
        <section className="mb-20 w-full max-w-[1400px] mx-auto mt-[10px] md:mt-[300px] px-4">
          <div>
            <div className="textGradient5 mb-10 font-bold text-[#fff] leading-tight text-center">
              Why Choose
              <span className="textGradient4 block text-[36px] md:text-[50px]">
                IMC Business Solutions
              </span>
              <span className="text-[24px] md:text-[30px]">
                For <span>Your Business</span>
              </span>
            </div>
            <div className="w-full">
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <li className="flex items-center gap-2 py-5 px-3 rounded-lg bg-[#fff] font-semibold shadow-md">
                  <span className="textGradient4 text-[24px]">
                    <TiArrowRight />
                  </span>
                  <span className="text-sm md:text-base">
                    Comprehensive Solutions for Retail & Wholesale
                  </span>
                </li>
                <li className="flex items-center gap-2 py-5 px-3 rounded-lg bg-[#fff] font-semibold shadow-md">
                  <span className="textGradient4 text-[24px]">
                    <TiArrowRight />
                  </span>
                  <span className="text-sm md:text-base">
                    Streamlined Operations for Pharmacies
                  </span>
                </li>
                <li className="flex items-center gap-2 py-5 px-3 rounded-lg bg-[#fff] font-semibold shadow-md">
                  <span className="textGradient4 text-[24px]">
                    <TiArrowRight />
                  </span>
                  <span className="text-sm md:text-base">
                    Smart IT Solutions for Schools & Colleges
                  </span>
                </li>
                <li className="flex items-center gap-2 py-5 px-3 rounded-lg bg-[#fff] font-semibold shadow-md">
                  <span className="textGradient4 text-[24px]">
                    <TiArrowRight />
                  </span>
                  <span className="text-sm md:text-base">
                    Efficient Management for Hospitals & Clinics
                  </span>
                </li>
                <li className="flex items-center gap-2 py-5 px-3 rounded-lg bg-[#fff] font-semibold shadow-md">
                  <span className="textGradient4 text-[24px]">
                    <TiArrowRight />
                  </span>
                  <span className="text-sm md:text-base">
                    Tailored Solutions for Restaurants
                  </span>
                </li>
                <li className="flex items-center gap-2 py-5 px-3 rounded-lg bg-[#fff] font-semibold shadow-md">
                  <span className="textGradient4 text-[24px]">
                    <TiArrowRight />
                  </span>
                  <span className="text-sm md:text-base">
                    Advanced Systems for Hotels
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* retailswholesale */}
        <section className="w-full max-w-[1400px] mx-auto mb-20 md:mt-[100px] mt-[10px] px-4">
          <div>
            <div className="text-[#fff] text-center text-[32px] md:text-[50px] textGradient4 mb-5">
              RETAILS AND WHOLESALES
            </div>
            <div className="text-center max-w-[900px] mx-auto text-[#fff] mb-10 textGradient6 text-[14px] md:text-[16px]">
              We offer both retail and wholesale services, providing quality
              products for individual consumers and businesses alike. Whether
              you're shopping for personal use or need bulk purchases for your
              business, we ensure exceptional value and service.
            </div>

            {/* Retails Section */}
            <div className="flex flex-col-reverse md:flex-row justify-center items-center gap-10">
              <div className="w-full">
                <div className="text-[28px] md:text-[40px] textGradient4 text-[#fff] mb-3 md:mb-5">
                  What we offer for Retail
                </div>
                <div className="text-[#fff] textGradient6 mb-5 md:mb-10 text-[14px] md:text-[16px]">
                  We offer an exceptional retail experience, focusing on quality
                  products, convenience, and personalized customer service for
                  individual shoppers.
                </div>
                <div className="flex flex-col justify-center gap-3 md:gap-5 text-[14px] md:text-lg">
                  <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px]">
                    <div className="bg-black w-full h-full rounded-lg p-3 flex items-center gap-2">
                      <TiTick />
                      Diverse Products: From essentials to premium options, we
                      cater to all needs.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px]">
                    <div className="bg-black w-full h-full rounded-lg p-3 flex items-center gap-2">
                      <TiTick />
                      Easy In-Store Experience: Our stores are welcoming, with
                      helpful staff ready to assist.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px]">
                    <div className="bg-black w-full h-full rounded-lg p-3 flex items-center gap-2">
                      <TiTick />
                      Customer-Focused: We prioritize your satisfaction with
                      every shopping experience.
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px]">
                    <div className="bg-black w-full h-full rounded-lg p-3 flex items-center gap-2">
                      <TiTick />
                      Convenient Online Shopping: Enjoy easy browsing and
                      doorstep delivery.
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full h-[250px] md:h-[490px] rounded-lg overflow-hidden">
                <img
                  src={retail}
                  alt="retail"
                  className="h-full w-full rounded-lg object-cover"
                />
              </div>
            </div>

            {/* Wholesale Section */}
            <div className="pt-10">
              <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                <div className="w-full h-[250px] md:h-[560px] rounded-lg overflow-hidden">
                  <img
                    src={wholesale}
                    alt="wholesale"
                    className="h-full w-full rounded-lg object-cover"
                  />
                </div>
                <div className="w-full">
                  <div className="text-[28px] md:text-[40px] textGradient4 text-[#fff] mb-3 md:mb-5">
                    What we offer for Wholesale
                  </div>
                  <div className="text-[#fff] textGradient6 mb-5 md:mb-10 text-[14px] md:text-[16px]">
                    We offer tailored wholesale services to businesses and bulk
                    buyers, ensuring cost-effective solutions and timely
                    deliveries for large-scale purchases.
                  </div>
                  <div className="flex flex-col justify-center gap-3 md:gap-5 text-[14px] md:text-lg">
                    <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px]">
                      <div className="bg-black w-full h-full rounded-lg p-3 flex items-center gap-2">
                        <TiTick />
                        Competitive Pricing: Enjoy discounts on bulk purchases
                        without compromising quality.
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px]">
                      <div className="bg-black w-full h-full rounded-lg p-3 flex items-center gap-2">
                        <TiTick />
                        Efficient Large-Volume Orders: Timely delivery to meet
                        your business needs.
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px]">
                      <div className="bg-black w-full h-full rounded-lg p-3 flex items-center gap-2">
                        <TiTick />
                        Flexible Payment Options: Manage cash flow with
                        convenient payment terms.
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-[#fff] rounded-lg bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px]">
                      <div className="bg-black w-full h-full rounded-lg p-3 flex items-center gap-2">
                        <TiTick />
                        Dedicated Support: Specialized assistance for orders,
                        logistics, and business needs.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* pharmacy */}
        <section
          className="w-full max-w-[1400px] mx-auto mt-10 mb-20 px-4"
          id="pharmacies"
        >
          <div>
            {/* Section Title */}
            <div className="text-[#fff] text-center text-3xl sm:text-4xl md:text-[40px] lg:text-[50px] font-bold textGradient4 mb-5">
              PHARMACIES
            </div>
            <div className="text-center max-w-[900px] mx-auto text-[#fff] mb-10 textGradient6 text-sm sm:text-base md:text-lg">
              IT solutions for pharmacies streamline daily operations, improve
              inventory management, and enhance customer service. Advanced
              systems can support prescription tracking, automated billing, and
              data security, ensuring compliance with healthcare regulations.
              With these solutions, pharmacies can efficiently handle supply
              chains, optimize stock, and deliver seamless patient care.
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full place-items-center">
              {/* Card 1 */}
              <div className="w-full h-[250px] sm:h-[300px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]">
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                  style={{
                    backgroundImage: `url(${pharmacyImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-black bg-opacity-75 text-white p-3 sm:p-5 text-xs sm:text-sm transition-transform duration-500 ${
                      hovered ? "translate-y-0" : "translate-y-full"
                    }`}
                  >
                    Efficient Inventory Management: Track and optimize stock
                    levels to reduce waste and ensure medicine availability.
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-full h-[250px] sm:h-[300px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]">
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHovered1(true)}
                  onMouseLeave={() => setHovered1(false)}
                  style={{
                    backgroundImage: `url(${pharmacyImage1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-black bg-opacity-75 text-white p-3 sm:p-5 text-xs sm:text-sm transition-transform duration-500 ${
                      hovered1 ? "translate-y-0" : "translate-y-full"
                    }`}
                  >
                    Enhanced Customer Experience: Implement automated
                    prescription tracking and secure billing systems for faster,
                    hassle-free service.
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="w-full h-[250px] sm:h-[300px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]">
                <div
                  className="relative w-full h-full rounded-3xl overflow-hidden cursor-pointer"
                  onMouseEnter={() => setHovered2(true)}
                  onMouseLeave={() => setHovered2(false)}
                  style={{
                    backgroundImage: `url(${pharmacyImage2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className={`absolute inset-x-0 bottom-0 bg-black bg-opacity-75 text-white p-3 sm:p-5 text-xs sm:text-sm transition-transform duration-500 ${
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
          className="w-full max-w-[1400px] mb-20 mx-auto rounded-3xl bg-[#000] min-h-[600px]"
          id="school"
        >
          <div className="px-6 py-10 flex flex-col-reverse md:flex-row gap-10">
            {/* Text Content */}
            <div className="md:w-[50%] flex flex-col justify-center items-start gap-5">
              <h1 className="text-[30px] sm:text-[40px] md:text-[50px] leading-tight textGradient4">
                School and College
                <span className="block text-[20px] sm:text-[25px] md:text-[30px]">
                  Empowering Education with Smart IT Solutions
                </span>
              </h1>
              <p className="textGradient6 text-[14px] sm:text-[16px] md:text-[18px] text-white">
                IT solutions for schools and colleges enhance learning
                experiences, streamline administrative operations, and ensure
                data security. Advanced technologies enable seamless
                communication between teachers, students, and parents while
                optimizing resource management and academic processes.
              </p>
              <div className="flex gap-5 flex-wrap items-center">
                <button className="flex justify-center items-center gap-2 px-8 py-2 sm:px-10 sm:py-3 rounded-3xl bg-white drop-shadow-md textGradient5 font-bold border">
                  Discover More <IoIosArrowRoundForward />
                </button>
                <div className="textGradient5 cursor-pointer">More</div>
              </div>
              <div className="w-full flex flex-col lg:flex-row gap-5 items-center">
                <div className="w-full h-[200px] bg-gradient-to-l from-[#8d8d8d] via-[#ffffff] to-[#f4b45f] p-[1px] rounded-3xl">
                  <ul className="bg-black h-full w-full rounded-3xl flex flex-col justify-center">
                    <li className="text-white p-2 sm:p-3 flex items-center gap-2">
                      <ChevronRight className="text-white" />
                      Smart Learning Platforms
                    </li>
                    <li className="text-white p-2 sm:p-3 flex items-center gap-2">
                      <ChevronRight className="text-white" />
                      Administrative Process Automation
                    </li>
                    <li className="text-white p-2 sm:p-3 flex items-center gap-2">
                      <ChevronRight className="text-white" />
                      Student Information Systems (SIS)
                    </li>
                  </ul>
                </div>
                <div className="w-full h-[200px] bg-gradient-to-l from-[#8d8d8d] via-[#ffffff] to-[#f4b45f] p-[1px] rounded-3xl">
                  <ul className="bg-black h-full w-full rounded-3xl flex flex-col justify-center">
                    <li className="text-white p-2 sm:p-3 flex items-center gap-2">
                      <ChevronRight className="text-white" />
                      Enhanced Communication
                    </li>
                    <li className="text-white p-2 sm:p-3 flex items-center gap-2">
                      <ChevronRight className="text-white" />
                      Data Security and Privacy Compliance
                    </li>
                    <li className="text-white p-2 sm:p-3 flex items-center gap-2">
                      <ChevronRight className="text-white" />
                      Resource Management
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Image Section */}
            <div className="md:w-[50%] flex justify-center items-center">
              <div className="w-full h-[250px] sm:h-[350px] md:h-full bg-[#9e7373] rounded-3xl overflow-hidden">
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
            className="max-w-[1400px] mx-auto w-full mb-6 px-4"
          >
            <div className="h-full w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl">
              <div className="rounded-[calc(1.5rem-1px)] w-full h-full bg-[#000] overflow-hidden">
                <div className="text-center mb-8">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 textGradient4 pt-5">
                    Hospital and Clinics
                  </h2>
                  <p className="text-white text-sm sm:text-base md:text-lg">
                    IT solutions for hospitals and clinics enhance operations,
                    improve patient care, and streamline administrative tasks.
                    Advanced technologies enable secure data management,
                    seamless communication, and data-driven decision-making for
                    better healthcare delivery.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
                  <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl">
                    <div className="bg-[#000] h-full w-full rounded-3xl p-4 flex flex-col justify-center">
                      <h3 className="text-white font-semibold text-lg mb-2">
                        Electronic Medical Records (EMR) Integration
                      </h3>
                      <p className="text-white text-sm">
                        Digitize and centralize patient health records for easy
                        access and improved clinical decision-making.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl">
                    <div className="bg-[#000] h-full w-full rounded-3xl p-4 flex flex-col justify-center">
                      <h3 className="text-white font-semibold text-lg mb-2">
                        Appointment and Scheduling Systems
                      </h3>
                      <p className="text-white text-sm">
                        Simplify appointment booking, reduce waiting times, and
                        enhance patient experiences with automated scheduling.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl">
                    <div className="bg-[#000] h-full w-full rounded-3xl p-4 flex flex-col justify-center">
                      <h3 className="text-white font-semibold text-lg mb-2">
                        Billing and Payment Automation
                      </h3>
                      <p className="text-white text-sm">
                        Streamline billing, invoicing, and payment processes for
                        faster and more accurate transactions.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl">
                    <div className="bg-[#000] h-full w-full rounded-3xl p-4 flex flex-col justify-center">
                      <h3 className="text-white font-semibold text-lg mb-2">
                        Data Security and Compliance
                      </h3>
                      <p className="text-white text-sm">
                        Protect sensitive patient data and ensure compliance
                        with healthcare regulations through advanced security
                        measures.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl">
                    <div className="bg-[#000] h-full w-full rounded-3xl p-4 flex flex-col justify-center">
                      <h3 className="text-white font-semibold text-lg mb-2">
                        Inventory and Supply Chain Management
                      </h3>
                      <p className="text-white text-sm">
                        Track and manage medical supplies efficiently to prevent
                        shortages and reduce wastage.
                      </p>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl">
                    <div className="bg-[#000] h-full w-full rounded-3xl p-4 flex flex-col justify-center">
                      <h3 className="text-white font-semibold text-lg mb-2">
                        Telemedicine Solutions
                      </h3>
                      <p className="text-white text-sm">
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

        {/* RESTAURANTS */}
        <div className="pt-2 p-2 flex flex-col justify-center items-center w-full min-h-screen mt-[-100px]">
        
        <section
          className="w-full max-w-[1400px] mx-auto bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl mt-10"
          id="restaurantBusiness"
        >
          <div className="bg-black w-full rounded-[calc(1.5rem-1px)] p-8 sm:p-6">
            <div className="text-center">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white textGradient4 mb-3">
                IT Solutions for Restaurants
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white mb-6 textGradient6">
                Boost your restaurant's efficiency with advanced IT services
                tailored to streamline operations, enhance customer experiences,
                and manage resources seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-2xl transition-shadow hover:shadow-2xl">
                <div className="bg-black h-full w-full rounded-2xl p-4">
                  <h3 className="text-base font-semibold text-white mb-2">
                    POS Systems Integration
                  </h3>
                  <p className="text-xs text-white">
                    Streamline order processing and payments with cutting-edge
                    Point of Sale systems.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-2xl transition-shadow hover:shadow-2xl">
                <div className="bg-black h-full w-full rounded-2xl p-4">
                  <h3 className="text-base font-semibold text-white mb-2">
                    Inventory Management
                  </h3>
                  <p className="text-xs text-white">
                    Gain control over your stock levels and reduce waste with
                    real-time tracking.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-2xl transition-shadow hover:shadow-2xl">
                <div className="bg-black h-full w-full rounded-2xl p-4">
                  <h3 className="text-base font-semibold text-white mb-2">
                    Customer Engagement Tools
                  </h3>
                  <p className="text-xs text-white">
                    Enhance loyalty with personalized offers, feedback systems,
                    and reservation platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
</div>
        {/* HOTELS */}
        <section
          className="w-full max-w-[1400px] mx-auto bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl mt-10"
          id="hotelBusiness"
        >
          <div className="bg-black w-full rounded-[calc(1.5rem-1px)] p-4 sm:p-6">
            <div className="text-center mb-6">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white textGradient4 mb-3">
                IT Solutions for Hotels
              </h2>
              <p className="text-xs sm:text-sm md:text-base text-white textGradient6">
                Elevate your hotel's operations with cutting-edge IT solutions
                designed to enhance guest experiences, optimize processes, and
                ensure seamless management.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {/* Features Section */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-2xl transition-shadow hover:shadow-2xl">
                  <div className="bg-black h-full w-full rounded-2xl p-4">
                    <h3 className="text-base font-semibold text-white mb-2">
                      Smart Room Automation
                    </h3>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-2xl transition-shadow hover:shadow-2xl">
                  <div className="bg-black h-full w-full rounded-2xl p-4">
                    <h3 className="text-base font-semibold text-white mb-2">
                      Central Reservation System
                    </h3>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-2xl transition-shadow hover:shadow-2xl">
                  <div className="bg-black h-full w-full rounded-2xl p-4">
                    <h3 className="text-base font-semibold text-white mb-2">
                      Guest Feedback and Analytics
                    </h3>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-2xl transition-shadow hover:shadow-2xl">
                  <div className="bg-black h-full w-full rounded-2xl p-4">
                    <h3 className="text-base font-semibold text-white mb-2">
                      Secure Wi-Fi Connectivity
                    </h3>
                  </div>
                </div>
              </div>

              {/* Image Section */}
              <div className="w-full h-[200px] sm:h-[300px] rounded-2xl overflow-hidden">
                <img
                  src={hotel}
                  alt="hotel"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* COMPLIMENT SECTION */}
        <section className="mb-20 w-full max-w-[1400px] mx-auto mt-5 px-4">
          <div>
            <div className="flex flex-col md:flex-row justify-between gap-6">
              <div className="text-[#fff] text-3xl sm:text-4xl md:text-[50px] font-bold textGradient4 md:w-[60%]">
                Get Started Today ...
              </div>
              <div className="text-[#fff] text-base sm:text-lg md:text-xl textGradient6 md:w-[40%]">
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
