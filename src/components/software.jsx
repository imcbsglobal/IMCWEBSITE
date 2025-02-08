import React ,{useEffect} from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import Footer from "./Footer";
import { ArrowUpRight, Leaf, Users, Shield } from "lucide-react";
import dine from "../assets/DINE 1 copy.jpg";
import inventory from '../assets/inventory.jpg'
import { Link } from 'react-router-dom';
import restaurant from '../assets/restaurantmanagement.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import property from '../assets/comprehensivepropertymanagement.jpg'
import auto from '../assets/autom.jpg'
import userfriendly from '../assets/userfriendlys.jpg'
import affoandflex from '../assets/affoandflex.jpeg'
import guest from '../assets/guest.jpg'
import operation from '../assets/operation.jpeg'
import communication from '../assets/communication.png'
import user1 from '../assets/userfriendly.png'
import time  from '../assets/time.png'
import { useLocation } from "react-router-dom";
const software = () => {
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
   useEffect(() => {
      const scrollActive = () => {
          setActive(window.scrollY > 20);
      };
      window.addEventListener("scroll", scrollActive);
      return () => window.removeEventListener('scroll', scrollActive);
  }, []);
  
  return (
    <>
      <div>
        {/* restaurant */}
        <div className="pt-[90px] flex flex-col justify-center items-center w-full">
          <section
            id="restaurant"
            className="max-w-[1400px] mx-auto bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl w-full rounded-3xl h-[600px] overflow-hidden mb-20"
          >
            <div className=" md:flex md:justify-center md:items-center overflow-hidden text-[#fff] md:gap-2 rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]">
              <div className="md:w-[60%] w-full h-full mx-auto flex justify-center items-center">
                <div className="pl-10">
                  <div className="text-[60px] textGradient4 leading-tight mb-5">
                    RESTAURANT
                    <span className="block text-[30px]">
                      Streamlining operations and service.
                    </span>
                  </div>
                  <div className="textGradient6 pr-36 mb-10">
                    DINE is a comprehensive restaurant management software that
                    automates order management, menu handling, billing, and
                    payments. By streamlining operations, it improves efficiency
                    and enhances the customer experience. Available on both
                    Windows and Android platforms, DINE offers flexibility for
                    your business needs.
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="px-10 py-3 rounded-3xl border border-[#000000] flex gap-5 items-center textGradient5">
                      <Link to="/customers">
                        Discover More <FaArrowRightLong />
                      </Link>
                    </div>
                    <div className="textGradient5">
                      <Link to="/customers">More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-[50%] w-full bg-[#282626] h-full rounded-l-full overflow-hidden">
                <img
                  src={restaurant}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>

        {/* inventorymanagement */}
        <div className=" flex flex-col justify-center items-center w-full">
          <section
            id="inventorymanagement"
            className="mb-20 max-w-[1400px] mx-auto w-full"
          >
            <div className="w-full">
              <div className="md:flex w-full md:justify-center md:items-center md:gap-10">
                {/* left */}
                <div className="md:w-[50%] h-[500px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]">
                    {" "}
                    <img
                      src={inventory}
                      alt="inventory"
                      className="h-full w-full rounded-3xl"
                    />
                  </div>
                </div>
                {/* right */}
                <div className="md:w-[50%]">
                  <div className="text-[#fff] text-[50px] mb-5 textGradient4 leading-tight">
                    INVENTORY MANAGEMENT{" "}
                    <span className="block text-[30px]">
                      Optimize, track, manage inventory
                    </span>
                  </div>
                  <div className="text-[#fff] textGradient6 mb-5">
                    We provide IT solutions to streamline inventory management
                    across industries like healthcare, retail, and hospitality.
                    Our software, including VTASK, AURIC, and DINE, offers
                    real-time tracking with barcode scanning and automated
                    updates. These tools reduce errors and save time, ensuring
                    efficient operations
                  </div>
                  <div>
                    <ul className="textGradient6 flex flex-col justify-center gap-5">
                      <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-xl">
                        <li className="px-3 py-4 rounded-xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] flex items-center gap-2">
                          <span className="text-xl">
                            <TiTick />
                          </span>
                          TASK: Integration with inventory and financial
                          operations.
                        </li>
                      </div>
                      <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-xl">
                        <li className="px-3 py-4 rounded-xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] flex items-center gap-2">
                          <span className="text-xl">
                            <TiTick />
                          </span>
                          VTASK: Manages pharmacy inventory sections with
                          barcode-enabled concepts.
                        </li>
                      </div>
                      <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-xl">
                        <li className="px-3 py-4 rounded-xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] flex items-center gap-2">
                          <span className="text-xl">
                            <TiTick />
                          </span>
                          AURIC: Tracks inventory movements and sales for
                          jewelry businesses.
                        </li>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* healthcaremanagement */}
        <div className=" flex flex-col justify-center items-center w-full">
          <section
            id="healthcaremanagement"
            className="mb-20 max-w-[1400px] mx-auto"
          >
            <div>
              <div className="flex justify-between items-center gap-2 mb-10">
                <div className="text-[48px] text-[#fff] textGradient4 leading-tight md:w-[60%]">
                  HEALTHCARE MANAGEMENT{" "}
                  <span className="block text-[20px]">Empowering Health Services for a Digital Era</span>
                </div>
                <div className="md:w-[40%] textGradient6 text-[#fff]">
                  Shades Hospital Management Software provides a complete
                  solution for managing clinical, administrative, and financial
                  aspects of patient care, allowing healthcare institutions to
                  operate smoothly. Its modular design ensures flexibility and
                  scalability, tailored to meet specific needs.
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-5">
                <div className="w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] text-center flex justify-center items-center lg:text-lg lg:px-5">
                    Comprehensive management of clinical, administrative, and
                    financial operations.
                  </div>
                </div>
                <div className="w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] text-center flex justify-center items-center lg:text-lg lg:px-5">
                    Handles appointments, doctor schedules, specialized
                    services, and international coding.
                  </div>
                </div>
                <div className="w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] text-center flex justify-center items-center lg:text-lg lg:px-5">
                    Includes 12 customizable modules to meet specific
                    institutional needs.
                  </div>
                </div>
                <div className="w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] text-center flex justify-center items-center lg:text-lg lg:px-5">
                    Flexible and scalable, adaptable to various healthcare
                    institutions.
                  </div>
                </div>
                <div className="w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] text-center flex justify-center items-center lg:text-lg lg:px-5">
                    Streamlines patient care and enhances operational
                    efficiency.
                  </div>
                </div>
                <div className="w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] text-center flex justify-center items-center lg:text-lg lg:px-5">
                    Easy integration and management of all patient-related data
                    and treatments.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Hospitality */}
        <div className=" flex flex-col justify-center items-center w-full">
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="text-[50px] text-[#fff] textGradient4 leading-tight md:w-[60%] text-center justify-center">
              HOSPITALITY MANAGEMENT
            </div>
            <div className="md:w-[40%] textGradient6 text-[#fff] justify-center text-center">
              STARSTAY is an intuitive hotel management software designed for
              hotels, motels, guest houses, and bed & breakfasts, covering
              booking, guest services, billing, and reporting. It simplifies
              daily operations and enhances guest experiences with an
              affordable, user-friendly solution.
            </div>
          </div>

          <section
            id="hospitality"
            className="max-w-[1400px] mx-auto bg-gradient-to-l from-[#8d8d8d] via-[#ffffff] to-[#f4b45f] p-[1px] bg-[#222222] backdrop-blur-3xl w-full rounded-3xl h-[600px] overflow-hidden mb-20"
          >
            <div className="h-full  bg-[#000] p-8 relative overflow-hidden rounded-3xl">
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
                      <div className="space-y-8 z-10">
                        <h1 className="text-6xl font-light text-white leading-tight">
                          {list.heading.split("\n").map((line, idx) => (
                            <span key={idx}>
                              {line}
                              <br />
                            </span>
                          ))}
                        </h1>

                        <button className="text-white border border-[#fff] rounded-full py-4 px-8 flex items-center space-x-2 hover:bg-yellow-400 transition-colors">
                          <span className="font-medium">Know more</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Center Image */}
                      <div className="relative flex justify-center items-center h-[550px] p-5">
                        <div className="relative z-20 w-[300px] h-full bg-white rounded-[40px]">
                          <img
                            src={list.img}
                            alt="property"
                            className="w-full h-full rounded-[40px] object-cover"
                          />
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="absolute right-20 text-right z-10">
                        <div className="inline-block">
                          <div className="backdrop-blur-sm rounded-full p-4 mb-4"></div>
                          <div className="text-white">
                            <p className="uppercase text-sm tracking-wide mb-1">
                              {list.description.split("\n")[0]}
                            </p>
                            <p className="uppercase text-sm tracking-wide mb-1">
                              {list.description.split("\n")[1]}
                            </p>
                            <p className="uppercase text-sm tracking-wide mb-1">
                              {list.description.split("\n")[2]}
                            </p>
                          </div>
                          <a
                            href="#"
                            className="text-yellow-300 hover:underline inline-block mt-4"
                          >
                            Learn More
                          </a>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>
        </div>

        {/* institutionmanagement */}
        <div className=" flex flex-col justify-center items-center w-full">
          <section
            id="institutionmanagement"
            className="mb-20 max-w-[1400px] mx-auto"
          >
            <div className="w-full max-w-6xl mx-auto px-4 bg-black">
              <div className="text-center mb-16">
                <h2 className="text-[50px] text-gray-800 textGradient4 mb-2">
                  INSTITUTION MANAGEMENT
                </h2>
                <h3 className="text-[20px] text-white textGradient6 mb-4">
                  Institution Management software streamlines operations for
                  educational organizations, managing activities like
                  scheduling, attendance, and academic progress. It offers
                  user-friendly interfaces for teachers, parents, and
                  administrators, ensuring smooth communication and
                  coordination.
                </h3>
                <a
                  href="/customers"
                  className="text-[#ffbf00] hover:text-white transition-colors"
                >
                  Learn more about our approach
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
                {/* Card 1 */}
                <div className="bg-[#F68B2C] rounded-lg p-6 text-white w-full">
                  <div className="border border-white/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <div className="bg-white rounded-full "><img src={communication} alt="communication" className="w-full h-full object-contain" /></div>
                  </div>
                  <h4 className="font-medium mb-3">
                    Streamlined Communication{" "}
                  </h4>
                  <p className="text-white/90 text-sm">
                    Institution Management software ensures seamless
                    communication between parents, teachers, and administrators.
                    With real-time access to student information, everyone stays
                    connected, improving overall coordination and
                    decision-making.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg p-6 text-gray-800 shadow-lg">
                  <div className="border border-teal-700/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <div className=" rounded-full "><img src={user1} alt="communication" className="w-full h-full object-contain rounded-full" /></div>
                  </div>
                  <h4 className="font-medium mb-3">
                    {" "}
                    Customizable and User-Friendly Interface
                  </h4>
                  <p className="text-black text-sm">
                    The system offers a user-friendly interface with
                    customization options to suit various educational
                    institutions. Whether for schools, colleges, or other
                    organizations, the software can adapt to the institution's
                    specific needs
                  </p>
                </div>

                {/* Card 3 */}
                <div className=" bg-[#F68B2C] rounded-lg p-6 text-white">
                  <div className="border border-white/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <div className="bg-white rounded-full"><img src={time} alt="communication" className="w-full h-full object-contain" /></div>
                  </div>
                  <h4 className="font-medium mb-3">
                    Real-Time Academic Access
                  </h4>
                  <p className="text-white/90 text-sm">
                    Parents and teachers can access academic records,
                    attendance, homework, and schedules in real-time. This
                    transparency ensures that everyone stays informed about
                    student progress.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* footer */}
        <section className="bg-[#fff] py-10 w-full">
          <Footer />
        </section>
      </div>
    </>
  );
};

export default software;
