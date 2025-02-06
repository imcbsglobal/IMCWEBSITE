import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useRef } from 'react';
import Footer from '../Footer';
const BusinessBranding = () => {
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
  return (
    <div>
      <div>
        <section className="w-full max-w-[1400px] mb-10 mx-auto pt-20 py-10 bg-black">
          <div className="bg-black text-gray-200 min-h-screen p-8">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-12">
              <h1 className="text-7xl font-light mb-8 textGradient4 text-center">
                BUSINESS BRANDING
              </h1>

              {/* Article Info Grid */}
              <div className="grid grid-cols-3 gap-8 textGradient6">
                <div className="col-span-1">
                  <p className="text-sm leading-relaxed text-justify">
                    A strong brand identity helps you stand out in a competitive
                    market. Our strategies create a memorable presence that
                    resonates with your audience and communicate your unique
                    value through design, messaging, and strategy.
                  </p>
                </div>

                <div className="col-span-1">
                  <p className="text-sm leading-relaxed text-justify">
                    From logo design to social media, we create cohesive
                    branding solutions that elevate your business. We work
                    closely with clients to bring their vision to life and
                    deliver lasting impact, whether launching or rebranding.
                  </p>
                </div>

                <div className="col-span-1  text-justify">
                  <p className="text-sm">
                    A strong brand isn't just about a logo; it's about creating
                    a narrative that connects with your customers. Let us help
                    you tell your brand's story in a way that builds trust,
                    loyalty, and long-term success.
                  </p>
                </div>
              </div>
            </div>

            {/* Image Grid */}
            <div className="flex w-full justify-center items-center gap-5">
              {/* Left Image */}
              <div className="md:w-[30%] w-full h-[400px] flex items-center bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                <div className="bg-black w-full h-full col-span-5 rounded-3xl">
                  {/* Add an image related to branding here */}
                </div>
              </div>

              {/* Right Image */}
              <div className="h-[400px] md:w-[70%] items-center w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                <div className="bg-black w-full h-full col-span-5 rounded-3xl">
                  {/* Add another image related to branding here */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      
      <div>
        <section className="w-full max-w-[1400px] mb-10 mx-auto pt-1 py-10 bg-black">
          <div className="w-full mx-auto p-8 bg-black">
            {/* Main Title */}
            <h1 className="text-[50px] font-bold mb-8 text-white textGradient4 text-center">
              BRANDING SERVICES
            </h1>

            {/* Description Text */}
            <p className="text-[20px] mb-12 w-full text-white textGradient6 text-center">
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
                <div className="bg-black w-full h-full rounded-3xl flex items-center justify-center">
                  <h2 className="text-3xl font-bold textGradient5">{key}</h2>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Service Details Section */}
          <div ref={serviceSectionRef}>
            {selectedService && (
              <div className="mt-16">
                <h2 className="text-4xl font-bold text-white text-center mb-8 textGradient4">
                  {selectedService.title}
                </h2>
                <p className="text-lg text-white text-center mb-12 textGradient6">
                  {selectedService.description}
                </p>
                <ul className="flex flex-wrap justify-center items-start gap-5">
                  {selectedService.list.map((item, index) => (
                    <li
                      key={index}
                      className="border border-white p-5 w-[250px] h-[240px] text-white"
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
