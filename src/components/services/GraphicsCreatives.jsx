import React from "react";
import Footer from "../Footer";

const GraphicsCreatives = () => {
  return (
    <div>
      {/* first section */}
      <section className="w-full max-w-[1400px] mb-20 mx-auto rounded-3xl bg-[#000] h-[600px] pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-6">
          <div className="flex flex-col gap-6 justify-center">
            <h2 className="text-4xl font-semibold text-gray-800 textGradient4">
              BRANDING<span className="block">Lorem ipsum dolor sit amet.</span>
            </h2>
            <ul className="space-y-4">
            
              <li className="flex items-centerw-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                <div className="w-full h-full bg-[#000] rounded-3xl p-3">
                <div className="text-white text-2xl">📦</div>
                <div>
                  <h3 className="font-bold textGradient4 text-black">
                    Lorem, ipsum dolor.
                  </h3>
                  <p className="text-sm text-[#fff] textGradient6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit, assumenda repudiandae omnis alias nam est.
                    Sunt illum temporibus velit a!
                  </p>
                </div>
                </div>
              </li>
           
              <li className="flex items-center w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                <div className="w-full h-full bg-[#000] rounded-3xl p-3">
                     <div className="text-white text-2xl">🌱</div>
                <div>
                <h3 className="font-bold textGradient4 text-black">
                    Lorem, ipsum dolor.
                  </h3>
                  <p className="text-sm text-[#fff] textGradient6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit, assumenda repudiandae omnis alias nam est.
                    Sunt illum temporibus velit a!
                  </p>
                </div>
                </div>
              </li>
              <li className="flex items-center  w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                <div className="w-full h-full bg-[#000] rounded-3xl p-3">
              
                <div className="text-white text-2xl">📖</div>
                <div>
                <h3 className="font-bold textGradient4 text-black">
                    Lorem, ipsum dolor.
                  </h3>
                  <p className="text-sm text-[#fff] textGradient6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Reprehenderit, assumenda repudiandae omnis alias nam est.
                    Sunt illum temporibus velit a!
                  </p>
                </div>
                </div>
              </li>
            </ul>
          </div>
          <div className=" w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
            <div className="relative w-full h-full bg-[#000] rounded-3xl overflow-hidden">
              <img
              src=""
              alt=""
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
            <h3 className="text-2xl font-semibold textGradient4 text-[#fff]">Lorem ipsum dolor sit.</h3>
            <ul className="mt-4 space-y-4">
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-4 textGradient4 ">
                <div className="bg-gray-300 w-16 h-16 rounded-xl"></div>
                  <span className="text-white">Lorem, ipsum.</span>
                </div>
                <span className="text-white">Lorem, ipsum dolor.</span>
              </li>
              <li className="flex justify-between items-center">
                <div className="flex items-center gap-4 textGradient4">
                  <div className="bg-gray-300 w-16 h-16 rounded-xl"></div>
                  <span className="text-white">Lorem, ipsum.</span>
                </div>
                <span className="text-white">Lorem, ipsum dolor.</span>
              </li>
            </ul>
          </div>
          </div>
          <div className="flex items-center w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">

          <div className="bg-black w-full h-full p-8 rounded-3xl shadow-md">
            <h3 className="text-2xl font-semibold text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis.
            </h3>
            <div className="flex justify-between mt-6">
              <div>
                <p className="text-sm text-white">Previous Year Sales</p>
                <h4 className="text-xl font-bold text-white">$100,000</h4>
              </div>
              <div>
                <p className="text-sm text-white">Current Year Sales</p>
                <h4 className="text-xl font-bold text-white">$115,000</h4>
                <p className=" text-[#c3892b]">+15%</p>
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
