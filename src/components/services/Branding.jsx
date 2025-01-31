import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from "../Footer";

const Branding = () => {
  return (
    <div className="pt-[130px]">
      <section className="w-full max-w-[1400px] mb-20 mx-auto rounded-3xl bg-[#000] h-[600px]">
        <div className="px-6 py-10 flex flex-col md:flex-row gap-10">
          <div className="md:w-[50%] flex flex-col justify-center items-start gap-5">
            <h1 className="text-[50px] leading-tight textGradient4">
              Lorem ipsum
              <span className="block">Lorem ipsum dolor</span>
            </h1>
            <p className="textGradient6 mb-5 text-white">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              laboriosam, nulla quaerat libero dolore distinctio praesentium
              saepe, odit minus magni debitis atque quos aut explicabo harum
              asperiores sunt minima suscipit.
            </p>
            <div className="flex gap-10 items-center">
              <button className="flex justify-center items-center gap-2 px-10 py-3 rounded-3xl bg-white drop-shadow-md textGradient5 font-bold border">
                Discover More <IoIosArrowRoundForward />
              </button>
              <div className="textGradient5 cursor-pointer">More</div>
            </div>
            <div className="w-full flex gap-10 items-center">
              <div className="w-full h-[200px] bg-[#9e7373] rounded-3xl"></div>
              <div className="w-full h-[200px] bg-[#9e7373] rounded-3xl"></div>
            </div>
          </div>
          <div className="md:w-[50%] flex justify-center">
            <div className="w-full h-full bg-[#9e7373] rounded-3xl"></div>
          </div>
        </div>
      </section>

      <section className="w-full max-w-[1400px] mb-20 mx-auto rounded-3xl bg-[#000] h-[600px]">
  <div className="flex flex-col md:flex-row gap-10 px-6 py-10">
    <div className="md:w-[50%] flex flex-col justify-center items-center md:items-start gap-5">
      <div className="text-[#fff] text-[50px] mb-5 textGradient4 text-center md:text-left leading-tight">
        Lorem ipsum dolor sit amet.
        <span className="block">Lorem, ipsum</span>
      </div>
      <p className="text-[#fff] max-w-[700px] mb-10 mx-auto md:mx-0 px-2 textGradient6 text-center md:text-left">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Assumenda ratione quibusdam, quae odit harum asperiores nesciunt
        nulla atque omnis recusandae tempore magni perspiciatis odio
        impedit! Qui ducimus voluptate sint similique?
      </p>
    </div>
    <div className="md:w-[50%] flex justify-center bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl">
      <div className="rounded-3xl w-full h-full bg-[#e3d3d3] overflow-hidden">
       
      </div>
    </div>
  </div>
</section>



      <section className="w-full bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
};

export default Branding;
