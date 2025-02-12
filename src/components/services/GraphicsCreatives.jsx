import React,{useEffect} from "react";
import Footer from "../Footer";
import graphic from '../../assets/graphic.jpeg'
import { FaUserCheck } from "react-icons/fa";
import { TbBulb } from "react-icons/tb";
import { CgSmileMouthOpen } from "react-icons/cg";
import visual from '../../assets/eye.png'
import idea from '../../assets/ideas.png'
const GraphicsCreatives = () => {
  useEffect(() => {
      // Scroll to the top of the page on mount
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
  return (
    <div>
      {/* first section */}
      <section className="w-full max-w-[1400px] mb-20 mx-auto rounded-3xl bg-[#000] md:pt-36 pt-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
          <div className="flex flex-col gap-6 justify-center">
            <h2 className="text-[32px] md:text-[50px] font-semibold textGradient4">
              Graphics and <span className="block">Creative Design</span>
            </h2>
            <ul className="space-y-4">
              <li className="w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-[#000] rounded-3xl p-4 flex items-start gap-4">
                  <div className="text-white text-3xl">
                    <CgSmileMouthOpen />
                  </div>
                  <div>
                    <h3 className="font-bold textGradient4 text-[20px]">
                      Visual Identity and Branding
                    </h3>
                    <p className="text-sm text-[#fff] textGradient6">
                      Crafting unique and impactful brand visuals, including
                      logos, color schemes, and design elements, to create a
                      strong brand presence.
                    </p>
                  </div>
                </div>
              </li>

              <li className="w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-[#000] rounded-3xl p-4 flex items-start gap-4">
                  <div className="text-white text-3xl">
                    <TbBulb />
                  </div>
                  <div>
                    <h3 className="font-bold textGradient4 text-[20px]">
                      Creative Content Design
                    </h3>
                    <p className="text-sm text-[#fff] textGradient6">
                      Developing captivating graphics for marketing campaigns,
                      websites, social media, and print materials to engage and
                      attract your audience.
                    </p>
                  </div>
                </div>
              </li>

              <li className="w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-[#000] rounded-3xl p-4 flex items-start gap-4">
                  <div className="text-white text-3xl">
                    <FaUserCheck />
                  </div>
                  <div>
                    <h3 className="font-bold textGradient4 text-[20px]">
                      User Centric Digital Experiences
                    </h3>
                    <p className="text-sm text-[#fff] textGradient6">
                      Designing intuitive UI/UX interfaces and dynamic motion
                      graphics to enhance user engagement and deliver seamless
                      digital interactions.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] rounded-3xl overflow-hidden">
            <div className="relative w-full h-full bg-[#000] rounded-3xl overflow-hidden">
              <img
                src={graphic}
                alt="graphic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* second section */}
      <section className="w-full max-w-[1400px] mb-20 mx-auto rounded-3xl  h-[600px] ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 px-6 ">
          <div className="flex items-center w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
            <div className="bg-black p-8 rounded-3xl shadow-md w-full h-full">
              <h3 className="text-2xl font-semibold textGradient4 text-[#fff]">
                Why Choose Us
              </h3>
              <ul className="mt-4 space-y-4">
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-4 textGradient4 ">
                    <div className=" w-16 h-16 rounded-xl">
                      <img
                        src={visual}
                        alt="visual"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white ">
                      Tailored Visual Solutions
                    </span>
                  </div>
                  <span className="text-white text-center">
                    Personalized designs for brand alignment
                  </span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-4 textGradient4">
                    <div className=" w-16 h-16 rounded-xl">
                      <img
                        src={idea}
                        alt="idea"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <span className="text-white ">
                      Creative Excellence and Innovation
                    </span>
                  </div>
                  <span className="text-white text-center">
                    Expert designers using innovative strategies.
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
            <div className="bg-black w-full h-full p-8 rounded-3xl shadow-md">
              <h3 className="text-2xl font-semibold text-white">
                Significant Increase in Customer Engagement
              </h3>
              <div className="flex justify-between mt-6">
                <div>
                  <p className="text-sm text-white">Previous Year Engagement</p>
                  <h4 className="text-xl font-bold text-white">
                    20,000 Interactions
                  </h4>
                </div>
                <div>
                  <p className="text-sm text-white">Current Year Engagement</p>
                  <h4 className="text-xl font-bold text-white">
                    35,000 Interactions
                  </h4>
                  <p className="text-[#c3892b]">+75%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
};

export default GraphicsCreatives;
