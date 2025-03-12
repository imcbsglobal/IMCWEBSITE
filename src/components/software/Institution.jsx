import React ,{useEffect} from 'react'
import communication from '../../assets/communication.png'
import user1 from '../../assets/userfriendly.png'
import time  from '../../assets/time.png'
import institution from '../../assets/institutionmanagement1.jpeg'
import institution1 from '../../assets/institutionmanagement.jpg'
import institution2 from '../../assets/institutionmanagement2.jpg'

import { 
  FaUsers, 
  FaMoneyBillWave, 
  FaChalkboardTeacher, 
  FaCalendarAlt, 
  FaBook, 
  FaTasks,
  FaUserGraduate,
  FaChartLine,
  FaBookReader,
  FaStore,
  FaBed,
  FaUserTie,
  FaBus,
  FaCalculator
} from "react-icons/fa";
import Footer from ".././Footer";
import magnet from "../../assets/MAGNET.png"

const Institution = () => {
  useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full mt-16">
        <section
          id="institutionmanagement"
          className="mb-20 max-w-[1400px] mx-auto w-full"
        >
          <div className="w-full max-w-[1400px] mx-auto px-4 py-10 rounded-3xl">
            <div className="container mx-auto py-16 px-4 max-w-6xl">
              <div className="relative">
                {/* Top row images */}
                <div className="flex justify-between mb-8">
                  <div className="w-1/4 left-[-10px]">
                    <img
                      src={institution}
                      alt="Laptop with data"
                      className="rounded-lg shadow-md w-full object-cover"
                    />
                  </div>
                  <div className="w-1/4">
                    <img
                      src={institution2}
                      alt="Smiling professional"
                      className="rounded-lg shadow-md w-full object-cover"
                    />
                  </div>
                </div>

                {/* Center content */}
                <div className="text-center mb-8">
                  {/* <div className="mb-1 text-sm font-medium">
                    <span className="inline-flex items-center">
                      <span className="flex">
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mx-0.5"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mx-0.5"></span>
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-500 mx-0.5"></span>
                      </span>
                      <span className="ml-2">110+ Satisfied Client</span>
                    </span>
                  </div> */}
                  <h2 className="text-[32px] md:text-[40px] text-gray-800 textGradient4 mb-2">
                    Simplifying Institution Management with Smart Technology
                  </h2>
                </div>

                {/* Bottom row images */}
                <div className="flex justify-between">
                  <div className="w-[20%]">
                    <img
                      src={institution2}
                      alt="Man with tablet"
                      className="rounded-lg shadow-md w-full object-cover"
                    />
                  </div>
                  <div className="w-[20%]">
                    <img
                      src={institution}
                      alt="Team working together"
                      className="rounded-lg shadow-md w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center text-center mb-10 max-w-[1100px] mx-auto">
              {/* Image Container */}
              <div className="w-[150px] h-[160px] bg-white flex items-center justify-center ">
                <img
                  src={magnet}
                  alt="MAGNET Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Container */}
              <div className="md:w-[900px] w-full md:h-[300px]  pt-10 md:pt-20">
                <h3 className="text-white textGradient6 mb-4">
                  We are dedicated to revolutionizing educational and
                  institutional management with our powerful Institution
                  Management Software ‘MAGNET’. Designed for schools, colleges,
                  and training centers, our software automates administrative
                  tasks, improves communication, and enhances efficiency.
                  <span className="block mt-2">
                    With a deep understanding of the challenges faced by
                    educational institutions, we have developed an all-in-one
                    solution that seamlessly integrates student enrollment, fee
                    management, attendance tracking, online learning, and
                    more—helping institutions focus on delivering quality
                    education.
                  </span>
                </h3>
              </div>
            </div>

            {/* New Feature Icons Section */}
            <div className="mb-20 max-w-[1400px] mx-auto ">
              <div className="grid grid-cols-3 md:grid-cols-5 gap-6 mb-8">
                {/* Icon 1 - Students Information */}
                <div className="flex flex-col items-center group border border-white rounded-full">
                  <div className="w-16 h-16  rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform p-1">
                    <FaUserGraduate className="text-white text-3xl  " />
                  </div>
                  <p className="text-white text-center text-sm pb-4">
                    Students Information
                  </p>
                </div>

                {/* Icon 2 - Fees */}
                <div className="flex flex-col items-center group border border-white rounded-full">
                  <div className="w-16 h-16   rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform ">
                    <FaMoneyBillWave className="text-white text-3xl" />
                  </div>
                  <p className="text-white text-center text-sm pb-4">Fees</p>
                </div>

                {/* Icon 3 - Marks & Progress */}
                <div className="flex flex-col items-center group border border-white rounded-full">
                  <div className="w-16 h-16  rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform">
                    <FaChartLine className="text-white text-3xl" />
                  </div>
                  <p className="text-white text-center text-sm pb-4">
                    Marks & Progress
                  </p>
                </div>

                {/* Icon 4 - Library */}
                <div className="flex flex-col items-center group border border-white rounded-full">
                  <div className="w-16 h-16   rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform">
                    <FaBookReader className="text-white text-3xl" />
                  </div>
                  <p className="text-white text-center text-sm pb-4">Library</p>
                </div>

                {/* Icon 5 - Store Management */}
                <div className="flex flex-col items-center group border border-white rounded-full">
                  <div className="w-16 h-16  rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform">
                    <FaStore className="text-white text-3xl" />
                  </div>
                  <p className="text-white text-center text-sm pb-4">
                    Store Management
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-4 gap-6">
                {/* Icon 6 - Hostel */}
                <div className="flex flex-col items-center group border border-white rounded-full">
                  <div className="w-16 h-16   rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform">
                    <FaBed className="text-white text-3xl" />
                  </div>
                  <p className="text-white text-center text-sm pb-4">Hostel</p>
                </div>

                {/* Icon 7 - Staff Details */}
                <div className="flex flex-col items-center group border border-white rounded-full">
                  <div className="w-16 h-16  rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform">
                    <FaUserTie className="text-white text-3xl" />
                  </div>
                  <p className="text-white text-center text-sm pb-4">
                    Staff Details
                  </p>
                </div>

                {/* Icon 8 - School Bus */}
                <div className="flex flex-col items-center group border border-white rounded-full">
                  <div className="w-16 h-16   rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform">
                    <FaBus className="text-white text-3xl" />
                  </div>
                  <p className="text-white text-center text-sm pb-4">
                    School Bus
                  </p>
                </div>

                {/* Icon 9 - Accounting */}
                <div className="flex flex-col items-center group border border-white rounded-full">
                  <div className="w-16 h-16  rounded-full flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform">
                    <FaCalculator className="text-white text-3xl" />
                  </div>
                  <p className="text-white text-center text-sm pb-4">
                    Accounting
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Row 1 */}
              <div className="border border-white bg-gradient-to-r from-[#d83a12] to-[#F99F2C] rounded-lg p-6 text-white w-full shadow-lg hover:shadow-xl transition-shadow">
                <div className="border border-white/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FaTasks className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-3 text-lg">
                  Comprehensive & User-Friendly
                </h4>
                <p className="text-white/90 text-sm">
                  A single platform for managing all academic and administrative
                  tasks efficiently.
                </p>
              </div>

              <div className="border border-white bg-[#ffffff2e] from-[#5c5c5c44] backdrop-blur-sm to-[#Fff] rounded-lg p-6 text-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <div className="border border-teal-700/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FaUsers className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-3 text-white text-lg">
                  Student & Faculty Management
                </h4>
                <p className="text-white text-sm">
                  Streamline admissions, attendance, and performance tracking
                  for institutions.
                </p>
              </div>

              {/* Row 2 */}
              <div className="border border-white bg-gradient-to-r from-[#d83a12] to-[#F99F2C] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="border border-white/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FaMoneyBillWave className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-3 text-lg">
                  Automated Fee & Finance Management
                </h4>
                <p className="text-white/90 text-sm">
                  Easy invoicing, online payments, and financial reports for
                  better financial management.
                </p>
              </div>

              <div className="border border-white bg-[#ffffff2e] from-[#5c5c5c44] rounded-lg p-6 text-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <div className="border border-teal-700/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FaChalkboardTeacher className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-3 text-lg text-white">
                  Parent & Student Portal
                </h4>
                <p className="text-white text-sm">
                  Seamless communication through web and mobile apps, keeping
                  everyone connected.
                </p>
              </div>

              {/* Row 3 */}
              <div className="border border-white bg-gradient-to-r from-[#d83a12] to-[#F99F2C] rounded-lg p-6 text-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="border border-white/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FaCalendarAlt className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-3 text-lg">
                  Timetable & Exam Scheduling
                </h4>
                <p className="text-white/90 text-sm">
                  Hassle-free academic planning with automated scheduling
                  features.
                </p>
              </div>

              <div className="border border-white bg-[#ffffff2e] from-[#5c5c5c44] rounded-lg p-6 text-gray-800 shadow-lg hover:shadow-xl transition-shadow">
                <div className="border border-teal-700/30 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <FaBook className="text-white text-2xl" />
                </div>
                <h4 className="font-semibold mb-3 text-lg text-white">
                  Library & Inventory Management
                </h4>
                <p className="text-white text-sm">
                  Organize resources efficiently and manage inventories with
                  ease.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="bg-[#fff] py-10 w-full">
        <Footer />
      </section>
    </div>
  );
}

export default Institution