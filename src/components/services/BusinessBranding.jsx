import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useRef,useEffect } from 'react';
import Footer from '../Footer';
import bs from '../../assets/bs.jpeg'
import bs1 from '../../assets/bs1.jpg'
const BusinessBranding = () => {
  useEffect(() => {
      // Scroll to the top of the page on mount
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  const [selectedService, setSelectedService] = useState(null);
  const services = [
    { title: 'Brand Research' },
    { title: 'Brand Strategy' },
    { title: 'Brand Identity' },
    { title: 'Brand Engagement'}
  ];
  const serviceDetails = {
    "Brand Research": {
      title: "Brand Research",
      description: "Brand research is a crucial first step in building a strong brand identity. It involves gathering insights and data about the market, competitors, customers, and the overall industry landscape. The goal of brand research is to understand how a brand is perceived, identify gaps, and define opportunities for differentiation. Here's why brand research is essential:",
      list: [
        "Understanding Your Audience: It helps businesses gain insights into their target audience’s needs.",
        "Competitive Analysis: By examining competitors, brand research helps identify strengths.",
        "Brand Perception: Research allows businesses to gauge how their brand is perceived.",
        "Informed Decision-Making: With accurate data, businesses can make informed decisions.",
        "Consistency in Branding: Brand research helps ensure that all brand elements align."
      ]
    },
    "Brand Strategy": {
      title: "Brand Strategy",
      description: "Brand strategy is the long-term plan for developing a successful brand in order to achieve specific goals. It defines the brand's purpose, vision, values, and overall direction in the market. A strong brand strategy provides a clear road map for marketing, product development, and customer engagement, ensuring consistency in messaging and visual identity across all touchpoints. The key components include:",
     
      list: [
        "Brand Purpose: Defining the core reason for the brand’s existence.",
        "Target Audience: Identifying and understanding the needs and preferences.",
        "Brand Positioning: Differentiating the brand from competitors.",
        "Brand Messaging: Crafting consistent messages.",
        "Brand Voice and Personality: Developing a tone and style."
      ]
    },
    "Brand Identity": {
      title: "Brand Identity",
      description: "Brand identity is the visual and emotional representation of a brand, expressed through logos, typography, color schemes, and other design elements. It is how the brand communicates with the world and is perceived by customers. A well-crafted brand identity creates a lasting impression and helps customers instantly recognize the brand. The key elements of brand identity include:",

      list: [
        "Logo: The unique symbol that represents the brand.",
        "Color Palette: Colors chosen to convey personality.",
        "Typography: Fonts and text styles used in messaging.",
        "Imagery and Graphics: Visuals accompanying the brand.",
        "Brand Guidelines: Rules ensuring consistency."
      ]
    },
    "Brand Engagement": {
      title: "Brand Engagement",
      description: "Brand engagement refers to the process of building a strong emotional connection between a brand and its customers. It involves creating positive, memorable experiences that foster customer loyalty, trust, and advocacy. Engaging with your audience leads to higher levels of interaction, satisfaction, and long-term brand success. Key strategies for brand engagement include:",

      list: [
        "Social Media Interaction: Connecting with customers on platforms.",
        "Customer Feedback: Listening to improve products.",
        "Content Marketing: Providing relevant content.",
        "Loyalty Programs: Offering rewards for repeat business.",
        "Personalization: Tailoring communication to individual needs."
      ]
    }
  };
  const serviceSectionRef = useRef(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);

    // Scroll to the service section
    if (serviceSectionRef.current) {
      serviceSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
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
      <div>
        <section className="w-full max-w-[1400px] mb-10 mx-auto pt-20 py-10 bg-black">
          <div className="bg-black text-gray-200 p-4 md:p-8">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-8">
              <h1 className="text-4xl md:text-7xl font-light mb-4 md:mb-8 textGradient4 text-center">
                BUSINESS BRANDING
              </h1>

              {/* Article Info Grid */}
              <div className="flex items-center justify-center textGradient6">
                <div className="w-full md:w-[80%]">
                  <p className="text-sm leading-relaxed text-center px-4 md:px-0">
                    A strong brand identity helps you stand out in a competitive
                    market. Our strategies create a memorable presence that
                    resonates with your audience and communicate your unique
                    value through design, messaging, and strategy. From logo
                    design to social media, we create cohesive branding
                    solutions that elevate your business. We work closely with
                    clients to bring their vision to life and deliver lasting
                    impact, whether launching or rebranding. A strong brand
                    isn't just about a logo; it's about creating a narrative
                    that connects with your customers. Let us help you tell your
                    brand's story in a way that builds trust, loyalty, and
                    long-term success.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="flex flex-col md:flex-row w-full justify-center items-center gap-5">
              {/* Left Image */}
              <div className="w-full md:w-[30%] h-[300px] md:h-[400px] flex items-center bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] rounded-3xl">
                <div className="bg-black w-full h-full rounded-3xl">
                  <img
                    src={bs}
                    alt="bs"
                    className="w-full h-full rounded-3xl object-cover"
                  />
                </div>
              </div>

              {/* Right Image with Text */}
              <div className="relative h-[400px] md:w-[70%] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                <div className=" bg-black w-full h-full col-span-5 rounded-3xl p-6 text-white flex flex-col justify-center gap-4">
                  <h3 className="text-[24px] md:text-[28px] textGradient4 font-bold">
                    Why Business Branding Matters
                  </h3>
                  <ul className="list-disc pl-5 text-sm textGradient6 space-y-1">
                    <li className="p-3">Stand Out in a Competitive Market</li>
                    <li className="p-3">Create a Memorable Presence</li>
                    <li className="p-3">
                      Build Trust and Loyalty with Customers
                    </li>
                    <li className="p-3">
                      Communicate Your Unique Value Effectively
                    </li>
                    <li className="p-3">
                      Consistent Messaging Across Platforms
                    </li>
                    <li className="p-3">
                      Long-term Business Growth and Success
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full max-w-[1400px] mb-10 mx-auto pt-1 py-10 bg-black md:mt-[-90px]">
          <div className="w-full mx-auto p-4 md:p-8 bg-black">
            {/* Main Title */}
            <h1 className="text-[36px] md:text-[50px] font-bold mb-4 md:mb-8 text-white textGradient4 text-center">
              BRANDING SERVICES
            </h1>

            {/* Description Text */}
            <p className="text-[18px] md:text-[20px] mb-8 md:mb-12 w-full text-white textGradient6 text-center">
              Strategy is the foundation and superstructure of all we do. We
              blend rigorous analytical thinking with world-class design to
              deliver exceptional products—expert counsel, outstanding creative,
              and engagement programs that measurably enhance business
              performance.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              {Object.keys(serviceDetails).map((key, index) => (
                <div
                  key={index}
                  className="rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] min-h-[200px] flex items-center justify-start cursor-pointer"
                  onClick={() => handleServiceClick(serviceDetails[key])}
                >
                  <div className="bg-black w-full h-full rounded-3xl flex flex-col items-center justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold textGradient5">
                      {key}
                    </h2>
                    <p className="text-orange-400 text-[18px] md:text-[20px]">
                      know more
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Selected Service Details Section */}
            <div ref={serviceSectionRef}>
              {selectedService && (
                <div className="mt-10 md:mt-16 grid grid-cols-2 gap-4 ">
                  <h2 className="col-span-2 text-3xl md:text-4xl font-bold text-white text-center mb-6 md:mb-8 textGradient4">
                    {selectedService.title}
                  </h2>
                  <p className="col-span-2 text-base md:text-lg text-white text-center mb-8 md:mb-12 textGradient6">
                    {selectedService.description}
                  </p>
                  <ul className="col-span-2 grid md:grid-cols-5 grid-cols-2 gap-4 ">
                    {selectedService.list.map((item, index) => (
                      <li
                        key={index}
                        className="border border-white p-10 w-full text-white md:h-[200px] md:w-[250px] md:text-center "
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>

      <section className="w-full bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
}

export default BusinessBranding
