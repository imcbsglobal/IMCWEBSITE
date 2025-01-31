import React from 'react'

const BusinessBranding = () => {
  return (
    <div>
      <div>
        <section className="w-full max-w-[1400px] mb-20 mx-auto pt-24 py-16 bg-black">
          <div className="bg-black text-gray-200 min-h-screen p-8">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto mb-12">
              <h1 className="text-7xl font-light mb-8 textGradient4">
                BUSINESS BARANDING
              </h1>

              {/* Article Info Grid */}
              <div className="grid grid-cols-3 gap-8 textGradient6">
                <div className="col-span-1">
                  <p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eos corrupti iste sequi! Explicabo iste molestiae impedit
                    animi voluptates deserunt libero?
                  </p>
                </div>

                <div className="col-span-1">
                  <p className="text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    molestiae tenetur voluptatibus aut itaque nemo expedita
                    suscipit nesciunt ut cum!
                  </p>
                </div>

                <div className="col-span-1 text-right">
                  <p className="text-sm">Lorem, ipsum dolor.</p>
                </div>
              </div>
            </div>

            {/* Image Grid */}

            <div className="flex  w-full justify-center items-center gap-5">
              {/* Left Image */}
              <div className="md:w-[30%] w-full h-[400px] flex items-center  bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
                <div className="bg-black w-full h-full col-span-5 rounded-3xl"></div>
              </div>

              {/* Right Image */}
              <div className=" h-[400px]  md:w-[70%] items-center w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
              <div className="bg-black w-full h-full col-span-5 rounded-3xl">
          
        </div>
        </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BusinessBranding
