import React,{useEffect} from 'react'
import inventory from '../../assets/inventory.jpg'
import { TiTick } from "react-icons/ti";
import opt from '../../assets/optimization.png'
import time from '../../assets/timer.png'
import gear from '../../assets/gear.png'
import multichanel from '../../assets/multichanel.png'
import analytics from '../../assets/analytics.png'
import Footer from ".././Footer";
import ecommerce from '../../assets/ecommerce.png'
import vanSales from '../../assets/vansales.jpg'
import deliveryTracking from '../../assets/delivery.jpg'
import employeeTracking from '../../assets/employee.jpg'
import WhatsApps from '../../assets/whatsapp.jpg'
import gpay from '../../assets/payment.jpg'
import hybrid from '../../assets/hybriddata.jpg'
import task from '../../assets/taskcopy.png'
import icare from '../../assets/icarecopy.png'
import bcare from '../../assets/bcare.png'

const  Inventory = () => {
  const features = [
    { image: ecommerce, title: 'E-Commerce', description: 'Seamless online shopping solutions for your business growth.' },
    { image: vanSales, title: 'Van Sales Applications', description: 'Empower your sales team with mobile van sales applications.' },
    { image: deliveryTracking, title: 'Delivery Tracking Solutions', description: 'Real-time tracking for efficient delivery management.' },
    { image: employeeTracking, title: 'Employee Tracking System', description: 'Monitor and manage your workforce with ease.' },
    { image: hybrid, title: 'Hybrid Data Management System', description: 'Integrated data management for smooth business operations.' },
    { image: gpay, title: 'Digital Payment Integration', description: 'Secure and seamless digital transactions for your business.' },
    { image: WhatsApps, title: 'WhatsApp/SMS Integration', description: 'Instant communication with customers through WhatsApp and SMS.' },
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full mt-32">
        <section
          id="inventorymanagement"
          className="mb-20 max-w-[1400px] mx-auto w-full"
        >
          <div className="w-full px-2">
            <div className="flex flex-col md:flex-row w-full md:justify-center md:items-center md:gap-10">
              {/* Left - Image Section */}
              <div className="w-full md:w-[50%] h-[300px] md:h-[500px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] backdrop-blur-3xl rounded-3xl mb-5 md:mb-0">
                <div className="rounded-3xl w-full h-full bg-[#000] overflow-hidden">
                  <img
                    src={inventory}
                    alt="inventory"
                    className="h-full w-full object-cover rounded-3xl"
                  />
                </div>
              </div>
              {/* Right - Text Section */}
              <div className="w-full md:w-[50%] flex flex-col justify-center items-start p-5">
                <div className="text-[#fff] text-[40px] md:text-[50px] mb-3 md:mb-5 textGradient4 leading-tight">
                  Make Inventory More Power full and Accurate
                  {/* <span className="block text-[20px] textGradient5 font-bold md:text-[30px]">
                    Optimize, track, manage inventory
                  </span> */}
                </div>
                <div className="text-[#fff] textGradient6 mb-5 text-[14px] md:text-[16px]">
                  The effective inventory management is the backbone of a
                  successful business. Our innovative solutions ensure seamless
                  stock control, optimize resource utilization, and enhance
                  operational efficiency. TASK Is our Incredible Financial
                  Accounting Software. TASK is windows based Financial Software
                  which can be customized at your wish, this software has well
                  appreciated by people who practice accounting as well as
                  vendors of software industry, its power accounting features
                  and high end of flexibility make it unique among its kind.
                </div>
                <div className="flex justify-start items-start">
                  <img src={task} alt="" className="w-full h-[100px] " />
                </div>
                {/* <div>
                  <ul className="textGradient6 flex flex-col gap-3">
                    <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333] backdrop-blur-3xl rounded-xl">
                      <li className="px-3 py-4 rounded-xl w-full h-full bg-[#000] flex items-center gap-2">
                        <span className="text-xl">
                          <TiTick />
                        </span>
                        TASK: Integration with inventory and financial
                        operations.
                      </li>
                    </div>
                    {/* <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333] backdrop-blur-3xl rounded-xl">
                      <li className="px-3 py-4 rounded-xl w-full h-full bg-[#000] flex items-center gap-2">
                        <span className="text-xl">
                          <TiTick />
                        </span>
                        VTASK: Manages pharmacy inventory sections with
                        barcode-enabled concepts.
                      </li>
                    </div>
                    <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333] backdrop-blur-3xl rounded-xl">
                      <li className="px-3 py-4 rounded-xl w-full h-full bg-[#000] flex items-center gap-2">
                        <span className="text-xl">
                          <TiTick />
                        </span>
                        AURIC: Tracks inventory movements and sales for jewelry
                        businesses.
                      </li>
                    </div> */}
                {/* </ul> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </section>

        {/* icons */}
        <section className="w-full mt-5 mb-10">
          <div className="max-w-[1400px] w-full mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6 place-items-center">
              <div className="w-full h-auto flex flex-col items-center justify-center text-center">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-white rounded-full p-3 mb-3">
                  <img
                    src={time}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-white text-lg sm:text-xl textGradient4 font-extrabold">
                  Real Time Inventory Tracking
                </div>
                <div className="textGradient6 text-sm sm:text-lg text-white font-thin">
                  Gain full visibility into your stock levels with our real-time
                  tracking system. Reduce stock discrepancies and prevent
                  shortages or overstocking.
                </div>
              </div>
              <div className="w-full h-auto flex flex-col items-center justify-center text-center">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-white rounded-full p-3 mb-3">
                  <img
                    src={gear}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-white text-lg sm:text-xl textGradient4 font-extrabold">
                  Automated Stock Replenishment
                </div>
                <div className="textGradient6 text-sm sm:text-lg text-white font-thin">
                  Leverage intelligent automation to maintain optimal inventory
                  levels. Our system ensures timely reordering, preventing
                  supply chain disruptions.
                </div>
              </div>
              <div className="w-full h-auto flex flex-col items-center justify-center text-center">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-white rounded-full p-3 mb-3">
                  <img
                    src={multichanel}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-white text-lg sm:text-xl textGradient4 font-extrabold">
                  Multi Channel Integration
                </div>
                <div className="textGradient6 text-sm sm:text-lg text-white font-thin">
                  Synchronize your inventory across multiple sales channels,
                  warehouses, and locations. Whether you operate online,
                  in-store, or both, we streamline inventory updates for a
                  hassle-free experience.
                </div>
              </div>
            </div>
            <div className="flex flex-wrap w-full gap-6 justify-center mx-auto mt-6">
              <div className="w-full sm:w-[500px] h-auto flex flex-col items-center justify-center text-center">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-white rounded-full p-3 mb-3">
                  <img
                    src={analytics}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-white text-lg sm:text-xl textGradient4 font-extrabold">
                  Advanced Analytics and Reporting
                </div>
                <div className="textGradient6 text-sm sm:text-lg text-white font-thin">
                  Make data-driven decisions with our in-depth analytics.
                  Monitor inventory trends, forecast demand, and optimize
                  purchasing strategies with ease.
                </div>
              </div>
              <div className="w-full sm:w-[500px] h-auto flex flex-col items-center justify-center text-center">
                <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] bg-white rounded-full p-3 mb-3">
                  <img
                    src={opt}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="text-white text-lg sm:text-xl textGradient4 font-extrabold">
                  Scalable and Customizable Solutions
                </div>
                <div className="textGradient6 text-sm sm:text-lg text-white font-thin">
                  Whether you're a small business or a large enterprise, our
                  inventory management solutions are designed to scale with your
                  needs. Customize features to align with your business goals.
                </div>
              </div>
            </div>
          </div>
        </section>
                  {/* icare bcare */}
        <section className="w-full py-20  text-white">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 textGradient4">
              Our Advanced Features
            </h2>

            <div className="grid grid-cols-3 md:grid-cols-4 gap-10 auto-rows-fr">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`relative p-6 rounded-xl shadow-lg text-center flex flex-col items-center h-[400px] ${
                    index < 3 ? "col-span-1" : "md:col-span-1"
                  }`}
                >
                  <div className="w-[200px] overflow-hidden absolute top-0 h-[200px] bg-white rounded-tl-full rounded-tr-full rounded-br-full flex items-center justify-center mb-4">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-tl-full rounded-tr-full rounded-br-full"
                    />
                    {/* <div className='inset-0 bg-[#020162] absolute w-full h-full mix-blend-multiply opacity-60'></div> */}
                  </div>
                  <div className="absolute bottom-0 rounded-t-full bg-gray-800 h-[300px] -z-10 px-4">
                    <h3 className="text-xl font-semibold mb-2 pt-40">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-5 text-white text-center pt-10">
            <h2 className="text-3xl font-bold textGradient4">
              Inventions Of Task
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 m-10">
              <div className="bg-gradient-to-r from-[#253e62] to-[#40C6E9] text-white text-lg font-semibold p-6 border border-white rounded-2xl shadow-lg w-[600px] h-[160px] flex items-center">
                <div>
                  <img
                    src={bcare}
                    alt="Bcare"
                    className="w-[300px] h-[100px] object-contain "
                  />
                </div>

                <p>
                  <span className="text-xl font-bold">B Care:</span> An
                  intermediate version of our Financial Account System, designed
                  for medium-level business automation.
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#74227F] to-[#DCADD3] text-white text-lg font-semibold p-6 border border-white rounded-2xl shadow-lg w-[600px] h-[160px] flex items-center text-center">
                <div>
                  <img
                    src={icare}
                    alt="icare"
                    className="w-[250px] h-[100px] object-contain"
                  />
                </div>
                <p>
                  <span className="text-xl font-bold">I Care:</span> A tiny
                  version of our Inventory Software, perfect for small-scale
                  businesses.
                </p>
              </div>
            </div>

            <p className="text-xl mt-2 textGradient4 pt-10">
              OUR MOBILE SOLUTION INCLUDE :
            </p>
            <ul className="list-disc list-inside text-lg mt-2 flex flex-col items-center">
              <li className="px-3 py-4 rounded-xl w-[800px]  h-full bg-[#000] flex items-center gap-2 border border-white m-2">
                <span className="text-xl">
                  <TiTick />
                </span>
                TASK PRO - Live stream mobile application for business owners.
              </li>
              <li className="px-3 py-4 rounded-xl w-[800px]  h-full bg-[#000] flex items-center gap-2 border border-white m-2">
                <span className="text-xl">
                  <TiTick />
                </span>
                MAGIC PDA - Advanced stock checking, GRN entries, product
                checking, and label printing.
              </li>
              <li className="px-3 py-4 rounded-xl w-[800px] h-full bg-[#000] flex items-center gap-2 border border-white m-2">
                <span className="text-xl">
                  <TiTick />
                </span>
                EWAY TASK - Comprehensive Android app for distribution and
                wholesale businesses.
              </li>
            </ul>
          </div>
        </section>
              {/* product viceo */}
        <section className=''></section>

        {/* footer */}
        <section className="bg-[#fff] py-10 w-full">
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Inventory