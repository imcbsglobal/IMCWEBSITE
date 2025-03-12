import React,{useEffect} from 'react';
import { FaClipboardCheck, FaShieldAlt, FaChartLine, FaStore, FaBoxes, FaCalendarAlt, FaHospital, FaBarcode } from 'react-icons/fa';
import pharmacy from '../../assets/pharmacyimg.jpeg'
import vtask from '../../assets/VTASK.png'
import Footer from '../Footer';
import pharmacy2 from '../../assets/pharmacyimg1.jpeg'
import pharmacy3 from '../../assets/pharmacyimg2.jpeg'
const PharmacyManagementPage = () => {
  
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, []);
  return (
    <div className="bg-black text-white h-screen ">
      {/* Hero Section */}
      <div className="relative overflow-hidden h-screen">
        {/* Background gradient overlay */}
        {/* <div className="absolute inset-0  z-10"></div> */}

        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src={pharmacy}
            alt="Modern pharmacy interior"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Hero content */}
        <div className="relative flex flex-col justify-center items-start gap-10 px-20 h-full w-full">
          {/* left */}
          <div>
            <div className="text-[#fff] textGradient5 text-2xl font-bold mb-3">
              Experience the Best
            </div>
            <div className="text-white textGradient4 text-6xl">
              Pharmacy Management <span className="block">Software</span>
            </div>
          </div>
          {/* right */}
          <div className="bg-[#ffffff24] text-[#fff] p-5 rounded-3xl backdrop-blur-sm border">
            <div className="flex items-end gap-5 mb-5">
              <div className="text-4xl text-[#fff]">VTASK</div>
              <div className="h-auto w-[300px] bg-[#fff] p-2 rounded-xl">
                <img
                  src={vtask}
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            <div className="max-w-[900px]">
              We specialize in developing cutting-edge pharmacy software
              designed to simplify operations, enhance accuracy, and improve
              customer service for pharmacies of all sizes. With years of
              experience in the healthcare tech industry, our mission is to
              provide pharmacists with an efficient, secure, and user-friendly
              platform that streamlines billing, inventory tracking,
              prescriptions, and compliance.
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16 max-w-[1400px] ">
        <h2 className="text-4xl font-bold mb-12 text-center textGradient4">
          Core Features
        </h2>

        <div className="flex justify-center items-center gap-10 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className=" p-6 rounded-xl border border-black hover:border-[#F99F2C]/50 transition-colors duration-300 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#F99F2C] p-3 rounded-lg mr-4">
                  <FaClipboardCheck className="text-black text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#F99F2C]">
                  Innovative & Reliable
                </h3>
              </div>
              <p className="text-gray-400">
                Advanced features for seamless pharmacy management.
              </p>
            </div>

            <div className=" p-6 rounded-xl border border-black hover:border-[#F99F2C]/50 transition-colors duration-300 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#F99F2C] p-3 rounded-lg mr-4">
                  <FaShieldAlt className="text-black text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#F99F2C]">
                  Easy-to-Use Interface
                </h3>
              </div>
              <p className="text-gray-400">No technical expertise required.</p>
            </div>

            <div className=" p-6 rounded-xl border border-black hover:border-[#F99F2C]/50 transition-colors duration-300 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#F99F2C] p-3 rounded-lg mr-4">
                  <FaShieldAlt className="text-black text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#F99F2C]">
                  Compliant & Secure
                </h3>
              </div>
              <p className="text-gray-400">
                GST, drug regulations, and data security ensured.
              </p>
            </div>

            <div className=" p-6 rounded-xl border border-black hover:border-[#F99F2C]/50 transition-colors duration-300 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-[#F99F2C] p-3 rounded-lg mr-4">
                  <FaChartLine className="text-black text-xl" />
                </div>
                <h3 className="text-xl font-semibold text-[#F99F2C]">
                  Real Time Reporting App
                </h3>
              </div>
              <p className="text-gray-400">
                Manage your pharmacy from anywhere.
              </p>
            </div>
          </div>
          <div className="w-full h-[400px] overflow-hidden rounded-3xl">
            <img
              src={pharmacy2}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Advanced Features */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="md:w-full flex items-center justify-center h-full">
            <div className="relative">
              <div className="absolute -inset-1 bg-[#F99F2C]/30 rounded-lg blur opacity-30"></div>
              <div className="relative overflow-hidden rounded-lg border border-gray-800 h-full w-full">
                <div className='w-full h-full'>
                  <img
                    src={pharmacy3}
                    alt="Pharmacist using VTASK software"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold mb-2">
                    Trusted by Pharmacies Nationwide
                  </h3>
                  <p className="text-gray-300">
                    Join hundreds of pharmacies that rely on VTASK for their
                    daily operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className=" rounded-2xl overflow-hidden shadow-xl h-full w-full">
              <div className="p-">
                <h3 className="text-2xl font-bold mb-6 text-start text-[#F99F2C]">
                  Advanced Capabilities
                </h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-[#F99F2C]/20 p-2 rounded mr-4 mt-1">
                      <FaStore className="text-[#F99F2C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Retail & Wholesale
                      </h4>
                      <p className="text-gray-400">
                        Compatible for Retail and Wholesale Business operations
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#F99F2C]/20 p-2 rounded mr-4 mt-1">
                      <FaBoxes className="text-[#F99F2C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Effortless SKU Management
                      </h4>
                      <p className="text-gray-400">
                        Inventory tracking, real-time stock visibility, and
                        simplified reorder processes
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#F99F2C]/20 p-2 rounded mr-4 mt-1">
                      <FaCalendarAlt className="text-[#F99F2C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        One Touch Expiry Handling
                      </h4>
                      <p className="text-gray-400">
                        Stay ahead of product expirations with VTASK's expiry
                        tracking system
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#F99F2C]/20 p-2 rounded mr-4 mt-1">
                      <FaHospital className="text-[#F99F2C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Hospital & Clinical Compatible
                      </h4>
                      <p className="text-gray-400">
                        Integrated module with our own Hospital Software 'SHADE'
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start">
                    <div className="bg-[#F99F2C]/20 p-2 rounded mr-4 mt-1">
                      <FaBarcode className="text-[#F99F2C]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">
                        Barcode and Batch
                      </h4>
                      <p className="text-gray-400">
                        Most Convenient for Hyper Pharma Concepts
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-8">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Pharmacy?
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Experience how VTASK can streamline your operations, reduce errors,
            and boost customer satisfaction.
          </p>
          <button className="bg-[#F99F2C] hover:bg-[#e8922b] text-black font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F99F2C]/20">
            Get Started Today
          </button>
        </div>
      </div>

      {/* Footer */}
      <section className="py-10 bg-[#fff] w-full">
        <Footer />
      </section>

    </div>
  );
};

export default PharmacyManagementPage;