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
import { useLocation } from "react-router-dom";
const company = () => {
  
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
    <>
      <div>
        {/* about */}
        <div className="md:pt-[180px] pt-[100px]  flex flex-col justify-center items-center w-full">
          <section id="aboutid" className="max-w-[1400px] w-full mx-auto mb-20">
            <div className="w-full px-2">
              <div className="text-[#fff] text-[16px] md:text-[30px] mb-5 textGradient4 text-center leading-tight">
                WHO WE ARE
                <span className="block text-[36px] md:text-[50px]">
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
              <div className=" h-[600px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
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
          <section className="mb-20 w-full max-w-[1400px] mx-auto " id="team">
            {/* Section Heading */}
            <div className="mb-10 text-center">
              <div className="text-[#fff] textGradient4 text-[30px] md:text-[50px] leading-tight mb-5">
                Behind the Vision
                <span className="block text-[20px] md:text-[30px]">
                  Collaboration, innovation, and dedication united.
                </span>
              </div>
              <div className="textGradient6 max-w-[700px] mx-auto text-[#fff] text-sm md:text-base">
                "Our dedicated team of experts collaborates to deliver
                innovative IT solutions, ensuring seamless business operations.
                With a passion for technology, we drive success through
                excellence and commitment."
              </div>
            </div>

            {/* Team Member Images */}
            <div className="w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Image 1 */}
                <div className="w-[90%] mx-auto h-[300px] sm:h-[400px] md:h-[500px] bg-[#fff] rounded-lg overflow-hidden">
                  <img
                    src={ceo1}
                    alt="ceo1"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Image 2 */}
                <div className="w-[90%] mx-auto h-[300px] sm:h-[400px] md:h-[500px] bg-[#fff] rounded-lg overflow-hidden">
                  <img
                    src={ceo2}
                    alt="ceo2"
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Image 3 */}
                <div className="w-[90%] mx-auto h-[300px] sm:h-[400px] md:h-[500px] bg-[#fff] rounded-lg overflow-hidden">
                  <img
                    src={ceo3}
                    alt="ceo3"
                    className="h-full w-full object-cover"
                  />
                </div>
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
              <div className="text-[30px] sm:text-[40px] md:text-[50px] textGradient4 text-[#fff] text-center leading-tight mb-5">
                VISION AND MISSION
                <span className="block text-[18px] sm:text-[25px] md:text-[30px]">
                  Innovation with Impact
                </span>
              </div>
              <div className="text-[#fff] max-w-[900px] mx-auto text-center textGradient6 text-sm sm:text-base">
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

          <section className="w-full max-w-[1400px] mx-auto mb-20 px-2">
            <div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                {/* Left Section */}
                <div className="w-full flex flex-col gap-5">
                  <div className="w-full h-[200px] sm:h-[250px] bg-[#fff] rounded-3xl overflow-hidden">
                    <img
                      src={vision}
                      alt="vision"
                      className="h-full w-full object-cover rounded-3xl"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl">
                      <div className="bg-[#000] text-[#fff] h-[150px] flex justify-center items-center rounded-3xl">
                        <ul className="flex flex-col gap-2 text-center">
                          <li>Empowering Businesses</li>
                          <li>Driving Digital Transformation</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl">
                      <div className="bg-[#000] text-[#fff] h-[150px] flex justify-center items-center rounded-3xl">
                        <ul className="flex flex-col gap-2 text-center">
                          <li>Innovation and Excellence</li>
                          <li>Building Partnerships</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl">
                    <div className="bg-black text-[#fff] h-auto p-4 rounded-3xl">
                      Our vision is to empower businesses with innovative and
                      reliable technology solutions. We aim to drive digital
                      transformation through cutting-edge services and
                      personalized support. By fostering a culture of innovation
                      and excellence, we strive to be a trusted partner in our
                      clients' success. Together, we shape a smarter, more
                      connected future.
                    </div>
                  </div>
                </div>
                {/* Right Section */}
                <div className="w-full flex flex-col gap-5">
                  <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl">
                    <div className="bg-black text-[#fff] h-auto p-4 rounded-3xl">
                      Our mission is to deliver innovative solutions that
                      empower businesses to thrive in a digital world. We strive
                      to create products that simplify processes and drive
                      efficiency. Through collaboration and constant
                      improvement, we aim to exceed client expectations. We are
                      dedicated to fostering long-term relationships built on
                      trust and success.
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl">
                      <div className="bg-[#000] text-[#fff] h-[150px] flex justify-center items-center rounded-3xl">
                        <ul className="flex flex-col gap-2 text-center">
                          <li>Innovative Solutions</li>
                          <li>Efficiency & Simplicity</li>
                        </ul>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl">
                      <div className="bg-[#000] text-[#fff] h-[150px] flex justify-center items-center rounded-3xl">
                        <ul className="flex flex-col gap-2 text-center">
                          <li>Continuous Improvement</li>
                          <li>Client Relationships</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[200px] sm:h-[250px] bg-[#fff] rounded-3xl overflow-hidden">
                    <img
                      src={mission}
                      alt="mission"
                      className="h-full w-full object-cover rounded-3xl"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* SUPPORTS */}
        <div className="pt-2 flex flex-col justify-center items-center w-full ">
          <section
            id="goalsmission"
            className="max-w-[1400px] mx-auto w-full mb-10 p-6"
          >
            <div className="text-[30px] sm:text-[40px] md:text-[50px] textGradient4 text-[#fff] text-center leading-tight mb-5">
              VISION AND MISSION
              <span className="block text-[18px] sm:text-[25px] md:text-[30px]">
                Innovation with Impact
              </span>
            </div>
            <div className="text-[#fff] max-w-[900px] mx-auto text-center textGradient6 text-sm sm:text-base">
              Our vision is to lead in technological innovation, providing
              impactful solutions that drive business growth. We are committed
              to creating lasting value through strategic partnerships and
              cutting-edge products. Our mission is to empower our clients with
              the tools and expertise to succeed in an ever-evolving digital
              landscape. We strive for excellence, integrity, and a future of
              continuous progress.
            </div>
          </section>

          <section
            id="supports"
            className="max-w-[1400px] mx-auto w-full mb-2 p-6"
          >
            <div className="h-auto w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
              <div className="rounded-3xl w-full h-full bg-[#000] overflow-hidden p-4">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 textGradient4 pt-5">
                    Support
                  </h2>
                  <p className="text-white text-sm md:text-base">
                    We are here to help you with all your needs. Explore our
                    services and get the support you require.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-[#F7922C] rounded-lg p-6 flex flex-col justify-center gap-4">
                    <h3 className="text-white font-semibold text-lg">
                      Software Support
                    </h3>
                    <p className="text-white">
                      Our expert team assists with installations,
                      troubleshooting, and updates for all software solutions.
                    </p>
                  </div>

                  <div className="bg-[#fff] rounded-lg p-6 flex flex-col justify-center gap-4 border border-gray-200">
                    <h3 className="text-gray-800 font-semibold text-lg">
                      Hardware Support
                    </h3>
                    <p className="text-gray-800">
                      We provide hardware maintenance, upgrades, and repair
                      services to ensure seamless operation.
                    </p>
                  </div>

                  <div className="bg-[#F7922C] rounded-lg p-6 flex flex-col justify-center gap-4">
                    <h3 className="text-white font-semibold text-lg">
                      24/7 Customer Service
                    </h3>
                    <p className="text-white">
                      Our dedicated customer service team is available around
                      the clock to assist with urgent needs.
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center gap-4 border border-gray-200">
                    <h3 className="text-gray-800 font-semibold text-lg">
                      Cloud Solutions
                    </h3>
                    <p className="text-gray-800">
                      We help you migrate, manage, and secure your data on cloud
                      platforms for optimal efficiency.
                    </p>
                  </div>

                  <div className="bg-[#F7922C] rounded-lg p-6 flex flex-col justify-center gap-4">
                    <h3 className="text-white font-semibold text-lg">
                      Network Support
                    </h3>
                    <p className="text-white">
                      Get assistance with network setup, security, and
                      maintenance to keep your business connected.
                    </p>
                  </div>

                  <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center gap-4 border border-gray-200">
                    <h3 className="text-gray-800 font-semibold text-lg">
                      Training & Consultation
                    </h3>
                    <p className="text-gray-800">
                      We provide training and consulting services to empower
                      your team with IT skills and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* bussiness opportunities */}
        <div className="pt-2 flex flex-col justify-center items-center w-full  ">
          <section
            id="business-opportunities"
            className="max-w-[1400px] mx-auto w-full mb-10 p-6"
          >
            <div className="w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
              <div className="rounded-3xl w-full bg-[#000] overflow-hidden p-8 text-white">
                {/* Section Header */}
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4 textGradient4">
                    Business Opportunities
                  </h2>
                  <p className="text-sm md:text-base">
                    Unlock growth through partnerships, technological
                    innovation, and market-driven solutions. Whether you're a
                    startup or a growing enterprise, we are your partner for
                    business transformation.
                  </p>
                </div>

                {/* Grid Section */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Opportunity 1 */}
                  <div className="bg-slate-50 p-5 rounded-3xl text-black flex flex-col justify-center items-start gap-4">
                    <h3 className="text-xl font-semibold">
                      Collaborative Partnerships
                    </h3>
                    <p className="text-sm">
                      Build powerful alliances to expand your market reach and
                      share technological advancements. We connect you with key
                      players to accelerate growth.
                    </p>
                  </div>

                  {/* Opportunity 2 */}
                  <div className="bg-slate-50 p-5 rounded-3xl text-black flex flex-col justify-center items-start gap-4">
                    <h3 className="text-xl font-semibold">
                      Tailored IT Solutions
                    </h3>
                    <p className="text-sm">
                      Empower your business with cutting-edge IT services
                      designed to streamline operations, enhance productivity,
                      and deliver customer-centric solutions.
                    </p>
                  </div>

                  {/* Opportunity 3 */}
                  <div className="bg-slate-50 p-5 rounded-3xl text-black flex flex-col justify-center items-start gap-4">
                    <h3 className="text-xl font-semibold">
                      Emerging Market Strategies
                    </h3>
                    <p className="text-sm">
                      Navigate new markets with confidence through data-driven
                      strategies and comprehensive market insights tailored to
                      your unique business needs.
                    </p>
                  </div>

                  {/* Opportunity 4 */}
                  <div className="bg-slate-50 p-5 rounded-3xl text-black flex flex-col justify-center items-start gap-4">
                    <h3 className="text-xl font-semibold">
                      Scalable Digital Transformation
                    </h3>
                    <p className="text-sm">
                      Leverage our expertise in digital transformation to
                      seamlessly transition your business into a scalable,
                      efficient, and digitally-driven enterprise.
                    </p>
                  </div>
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
