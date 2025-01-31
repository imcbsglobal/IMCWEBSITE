import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import Footer from "./Footer";
import { ArrowUpRight, Leaf, Users, Shield } from "lucide-react";

const software = () => {
  return (
    <>
      <div>
        {/* restaurant */}
        <div className="pt-[50px] flex flex-col justify-center items-center w-full">
          <section
            id="restaurant"
            className="max-w-[1400px] mx-auto bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl w-full rounded-3xl h-[600px] overflow-hidden mb-20"
          >
            <div className=" md:flex md:justify-center md:items-center overflow-hidden text-[#fff] md:gap-2 rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]">
              <div className="md:w-[60%] w-full h-full mx-auto flex justify-center items-center">
                <div className="pl-10">
                  <div className="text-[50px] textGradient4 leading-tight mb-5">
                    RESTAURANT
                    <span className="block">ipsum dolor sit amet</span>
                  </div>
                  <div className="textGradient6 pr-36 mb-10">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Libero eum illo maxime! Atque architecto quibusdam aliquam
                    facere dicta quam fugiat voluptates alias veritatis numquam,
                    velit voluptatibus earum blanditiis, recusandae deserunt.
                  </div>
                  <div className="flex items-center gap-10">
                    <div className="px-10 py-3 rounded-3xl border border-[#000000] flex gap-5 items-center textGradient5">
                      Discover More <FaArrowRightLong />
                    </div>
                    <div className="textGradient5">More</div>
                  </div>
                </div>
              </div>
              <div className="md:w-[50%] w-full bg-[#282626] h-full rounded-l-full overflow-hidden">
                <img
                  src="https://res.cloudinary.com/dqydgc2ky/image/upload/v1736252152/freepik__candid-image-photography-natural-textures-highly-r__44559_hmmpia.jpg"
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>
            </div>
          </section>
        </div>

        {/* inventorymanagement */}
        <div className="pt-[130px] flex flex-col justify-center items-center w-full">
          <section
            id="inventorymanagement"
            className="mb-20 max-w-[1400px] mx-auto w-full"
          >
            <div className="w-full">
              <div className="md:flex w-full md:justify-center md:items-center md:gap-10">
                {/* left */}
                <div className="md:w-[50%] h-[500px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
                </div>
                {/* right */}
                <div className="md:w-[50%]">
                  <div className="text-[#fff] text-[50px] mb-5 textGradient4 leading-tight">
                    INVENTORY MANAGEMENT{" "}
                    <span className="block">Lorem ipsum dolor</span>
                  </div>
                  <div className="text-[#fff] textGradient6 mb-5">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Numquam veniam ipsa magni voluptatibus facere repudiandae
                    dolorum perspiciatis, debitis excepturi officiis quibusdam
                    accusamus nostrum rem minima aut totam natus odit vero!
                  </div>
                  <div>
                    <ul className="textGradient6 flex flex-col justify-center gap-5">
                      <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-xl">
                        <li className="px-4 py-6 rounded-xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] flex items-center gap-2">
                          <span className="text-xl">
                            <TiTick />
                          </span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit Ducimus Lorem, ipsum dolor.
                        </li>
                      </div>
                      <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-xl">
                        <li className="px-4 py-6 rounded-xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] flex items-center gap-2">
                          <span className="text-xl">
                            <TiTick />
                          </span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit Ducimus Lorem, ipsum dolor.
                        </li>
                      </div>
                      <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-xl">
                        <li className="px-4 py-6 rounded-xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] flex items-center gap-2">
                          <span className="text-xl">
                            <TiTick />
                          </span>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit Ducimus Lorem, ipsum dolor.
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
        <div className="pt-[50px] flex flex-col justify-center items-center w-full">
          <section
            id="healthcaremanagement"
            className="mb-20 max-w-[1400px] mx-auto"
          >
            <div>
              <div className="flex justify-between items-center mb-10">
                <div className="text-[50px] text-[#fff] textGradient4 leading-tight md:w-[60%]">
                  HEALTHCARE MANAGEMENT{" "}
                  <span className="block">Lorem ipsum dolor</span>
                </div>
                <div className="md:w-[40%] textGradient6 text-[#fff]">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Perspiciatis cumque iusto eaque provident dignissimos quo
                  itaque. Reiciendis commodi quaerat nulla hic illo quae, quia,
                  similique vitae quo explicabo cum laboriosam.
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-5">
                <div className="w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
                </div>
                <div className="w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
                </div>
                <div className="w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
                </div>
                <div className="w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
                </div>
                <div className="w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
                </div>
                <div className="w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Hospitality */}
        <div className="pt-[50px] flex flex-col justify-center items-center w-full">
          <div className="flex flex-col items-center justify-center">
            <div className="text-[50px] text-[#fff] textGradient4 leading-tight md:w-[60%] text-center justify-center">
              HOSPITALITY MANAGEMENT
            </div>
            <div className="md:w-[40%] textGradient6 text-[#fff] justify-center text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis cumque iusto eaque provident dignissimos quo itaque.
            </div>
          </div>

          <section
            id="hospitality"
            className="max-w-[1400px] mx-auto bg-gradient-to-l from-[#8d8d8d] via-[#ffffff] to-[#f4b45f] p-[1px] bg-[#222222] backdrop-blur-3xl w-full rounded-3xl h-[600px] overflow-hidden mb-20"
          >
            <div className="h-full  bg-[#000] p-8 relative overflow-hidden">
              {/* Main Content Grid */}
              <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center h-full">
                {/* Left Column */}
                <div className="space-y-8 z-10">
                  <h1 className="text-6xl font-light text-white leading-tight">
                    Start
                    <br />
                    Plant Care
                    <br />
                    at Heart
                  </h1>

                  <div className="flex items-center space-x-2 text-yellow-300">
                    <p className="text-sm">
                      Bringing intelligence to
                      <br />
                      plant care
                    </p>
                  </div>

                  <button className=" text-white border border-[#fff] rounded-full py-4 px-8 flex items-center space-x-2 hover:bg-yellow-400 transition-colors">
                    <span className="font-medium">Know more</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Center Image */}
                <div className="relative flex justify-center items-center h-[550px] p-5">
                  <div className="relative z-20 w-[300px] h-full  bg-white rounded-[40px]"></div>
                </div>

                {/* Right Column */}
                <div className="absolute  right-20 text-right z-10 ">
                  <div className="inline-block">
                    <div className=" backdrop-blur-sm rounded-full p-4 mb-4">
                      <div></div>
                    </div>
                    <div className="text-white">
                      <p className="uppercase text-sm tracking-wide mb-1">
                        PLANT GROWTH
                      </p>
                      <h2 className="text-2xl font-medium">
                        Nurture
                        <br />
                        Smarter.
                        <br />
                        Grow Better.
                      </h2>
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
            </div>
          </section>
        </div>

        {/* institutionmanagement */}
        <div className="pt-[50px] flex flex-col justify-center items-center w-full">
          <section
            id="institutionmanagement"
            className="mb-20 max-w-[1400px] mx-auto"
          >
            <div className="w-full max-w-6xl mx-auto px-4 py-16 bg-black">
              <div className="text-center mb-16">
                <h2 className="text-[50px] text-gray-800 textGradient4 mb-2">
                  INSTITUTION MANAGEMENT
                </h2>
                <h3 className="text-[20px] text-white textGradient6 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Autem, similique.
                </h3>
                <a
                  href="#"
                  className="text-[#ffbf00] hover:text-white transition-colors"
                >
                  Learn more about our approach
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-[#F68B2C] rounded-lg p-6 text-white">
                  <div className="border border-white/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <div className="bg-white rounded-full"></div>
                  </div>
                  <h4 className="font-medium mb-3">Lorem, ipsum.</h4>
                  <p className="text-white/90 text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, tempora nihil dolore at numquam quod quos
                    dolorem laborum voluptatibus inventore.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-lg p-6 text-gray-800 shadow-lg">
                  <div className="border border-teal-700/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <div className="bg-[#F68B2C] rounded-full"></div>
                  </div>
                  <h4 className="font-medium mb-3">Lorem, ipsum.</h4>
                  <p className="text-black text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, tempora nihil dolore at numquam quod quos
                    dolorem laborum voluptatibus inventore.
                  </p>
                </div>

                {/* Card 3 */}
                <div className=" bg-[#F68B2C] rounded-lg p-6 text-white">
                  <div className="border border-white/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <div className="bg-white rounded-full"></div>
                  </div>
                  <h4 className="font-medium mb-3">Lorem, ipsum.</h4>
                  <p className="text-white/90 text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Asperiores, tempora nihil dolore at numquam quod quos
                    dolorem laborum voluptatibus inventore.
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
