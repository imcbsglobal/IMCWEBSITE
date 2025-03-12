import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import restaurant from '../../assets/restaurantmanagement.jpg'
import { FaCalculator, FaTable, FaBoxes, FaChartBar, FaQrcode, FaDatabase, FaMobileAlt, FaStream, FaWhatsapp, FaPrint } from "react-icons/fa";

const Restaurant = () => {
  const features = [
    { icon: <FaCalculator />, title: "Fast & Efficient Billing", description: "Quick and accurate billing system to enhance customer satisfaction" },
    { icon: <FaTable />, title: "Table & Order Management", description: "Seamless table allocation and order tracking system" },
    { icon: <FaBoxes />, title: "Store Keeping and Inventory", description: "Efficient inventory management and stock control" },
    { icon: <FaChartBar />, title: "Accounts and Detailed Reports", description: "Comprehensive financial tracking and business analytics" },
    { icon: <FaQrcode />, title: "Contactless dine-in with QR Menu", description: "Modern contactless dining experience with digital menus" },
    { icon: <FaDatabase />, title: "Data Backup and Security", description: "Secure data storage with automated backup systems" },
    { icon: <FaMobileAlt />, title: "Order Taking App", description: "Mobile application for streamlined order management" },
    { icon: <FaStream />, title: "Live Stream Mobile Applications", description: "Real-time order tracking and management" },
    { icon: <FaWhatsapp />, title: "Whatsapp and SMS Integrations", description: "Integrated communication channels for better customer service" },
    { icon: <FaPrint />, title: "Multi Type Print Handling", description: "Versatile printing options for various business needs" },
  ];

  return (
    <div>
      <div className="pt-[100px] flex flex-col justify-center items-center w-full px-2">
        <section
          id="restaurant"
          className="max-w-[1400px] mx-auto bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] backdrop-blur-3xl w-full rounded-3xl h-auto overflow-hidden mb-20"
        >
          <div className="flex flex-col md:flex-row md:justify-center md:items-center overflow-hidden text-[#fff] md:gap-2 rounded-3xl w-full h-full bg-[#000]">
            {/* Text Section */}
            <div className="w-full md:w-[60%] h-full flex justify-center items-center p-5 md:p-10">
              <div>
                <div className="text-[40px] md:text-[60px] textGradient4 leading-tight mb-3 md:mb-5">
                  Simplify Your Restaurant Billing and Management
                  {/* <span className="block text-[20px] md:text-[30px] textGradient5 font-bold">
                    Streamlining operations and service.
                  </span> */}
                </div>
                <div className="textGradient6 md:pr-36 mb-5 md:mb-10 text-[14px] md:text-[16px]">
                  Our Restaurant Billing Software is designed to streamline your
                  restaurant operations, ensuring fast and hassle-free billing,
                  efficient order management, and seamless payment processing.
                  Whether you run a small café, a fine-dining restaurant, or a
                  multi-chain food business, our software adapts to your needs
                  with advanced features and an intuitive interface.
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                  {/* <div className=" py-3 rounded-3xl border border-[#000000] flex gap-3 items-center textGradient5">
                    <Link to="/customers" className="flex items-center gap-2">
                      Discover More <FaArrowRightLong />
                    </Link>
                  </div> */}
                  <div className="textGradient5">
                    <Link to="/customers">More</Link>
                  </div>
                </div>
              </div>
            </div>
            {/* Image Section */}
            <div className="w-full md:w-[50%] h-[300px] md:h-full rounded-l-full overflow-hidden">
              <img
                src={restaurant}
                className="w-full h-full object-cover"
                alt="Restaurant"
              />
            </div>
          </div>
        </section>
      </div>
      
      {/* Features Grid Section */}
      <div className="max-w-[1400px] mx-auto px-4 pb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 textGradient4">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] hover:from-[#2a2a2a] hover:to-[#1a1a1a] transition-all duration-300 group"
            >
              <div className="text-3xl mb-4 textGradient5 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Restaurant