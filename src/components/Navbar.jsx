import React, { useState, useEffect } from "react";
import logo from "../assets/IMC Logo.png";
import { Link } from "react-router-dom";
import Logo from "../assets/IMC.png"
import { MdCall } from "react-icons/md";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  const dropdownMenus = {
    company: [
      { name: "About IMC", path: "/about" },
      { name: "Team", path: "/team" },
      { name: "Goals & Missions", path: "/goalsandMission" },
      { name: "Customers", path: "/customers" },
      { name: "Supports", path: "/supports" },
      { name: "Business Opportunities", path: "/businessOpportunities" },
    ],
    softwares: [
      { name: "Inventory Management", path: "/inventoryManagement" },
      { name: "Health Care Management", path: "/healthCareManagement" },
      { name: "Restaurants", path: "/restaurants" },
      { name: "Hospitality", path: "/hospitality" },
      { name: "Institution Management", path: "/institutionManagement" },
    ],
    services: [
      { name: "Website & Web Application", path: "/websiteandWebApplications" },
      { name: "Mobile App Development", path: "/mobileApp" },
      { name: "Digital Marketing / SEO", path: "/digitalmarketingandSEO" },
      { name: "Branding", path: "/branding" },
      { name: "Graphics & Creatives", path: "/graphicsandCreatives" },
      { name: "Business Branding", path: "/businessBranding" },
    ],
    business: [
      { name: "Retails & Wholesale", path: "/retailWholeSale" },
      { name: "Pharmacies", path: "/pharmacies" },
      { name: "School / Colleges", path: "/schoolColleges" },
      { name: "Hospital & Clinics", path: "/hospitalClinics" },
      { name: "Restaurants", path: "/restaurantBusiness" },
      { name: "Hotels", path: "/hotels" },
    ],
    faq: [
      { name: "Question Chat Boats", path: "/questionChatBoats" },
      { name: "Product Tutorials", path: "/productTutorials" },
      { name: "Product Video Demonstrations", path: "/productVideo" },
      { name: "Whatsapp Supports", path: "/whatsappSupports" },
    ],
  };

  const renderDropdown = (menuKey) => (
    <div
      className="absolute py-5 px-5 bg-[#fff] rounded-3xl drop-shadow-lg"
      onMouseEnter={() => handleMouseEnter(menuKey)}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="text-nowrap text-[#000]">
        {dropdownMenus[menuKey].map((item, index) => (
          <Link key={index} to={item.path}>
            <li className="hover:text-[#f60]">{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <header
      className={`fixed top-0 left-0 w-full z-[990] transition-all duration-300 ${
        isScrolled ? "bg-white py-5 rounded-b-3xl shadow-lg" : "bg-transparent py-4"
      }`}
    >
      <nav className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-4 lg:px-8">
        {/* Logo Section */}
        <div className="w-auto h-[50px]">
          {isScrolled ? 
            <img src={logo} className="w-full h-full object-contain" alt="" />  : <img src={Logo} className="w-full h-full object-contain" alt="" />
        }
          {/* <img
            src={logo}
            alt="Logo"
            className={`w-full h-full object-contain transition-all duration-300 ${
              isScrolled ? "h-12" : "h-12 grayscale"
            }`}
          /> */}
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center items-center">
          <ul className={`md:flex hidden justify-center items-center gap-4 lg:gap-8 text-lg ${isScrolled ? "text-[#000]" : "text-[#fff]"}`}>
            <Link to="/">
              <li className="cursor-pointer hover:text-[#ff7f1e]">Home</li>
            </Link>
            <li
              className="cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter("company")}
              onMouseLeave={handleMouseLeave}
            >
              Company
              {activeMenu === "company" && renderDropdown("company")}
            </li>
            <li
              className="cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter("softwares")}
              onMouseLeave={handleMouseLeave}
            >
              Softwares
              {activeMenu === "softwares" && renderDropdown("softwares")}
            </li>
            <li
              className="cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              Services
              {activeMenu === "services" && renderDropdown("services")}
            </li>
            <li
              className="cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter("business")}
              onMouseLeave={handleMouseLeave}
            >
              Business
              {activeMenu === "business" && renderDropdown("business")}
            </li>
            <li
              className="cursor-pointer relative"
              onMouseEnter={() => handleMouseEnter("faq")}
              onMouseLeave={handleMouseLeave}
            >
              FAQ
              {activeMenu === "faq" && renderDropdown("faq")}
            </li>
            <Link to="/contact">
              <li className="cursor-pointer hover:text-[#ff7332]">Contact</li>
            </Link>
          </ul>
        </div>

        {/* Login Button */}
        <div className="flex gap-5">
          <button className={`rounded-3xl px-6 py-2 font-bold hover:bg-gray-800 ${isScrolled ? "bg-[#000] text-[#fff] border border-[#fff]" : "bg-[#fff] text-[#000]"}`}>
            Login
          </button>
          <div className={` ${isScrolled ? "" :  "bg-gradient-to-r from-[#20ffff] via-[#ff850c] to-[#ffa600] p-[1px] bg-[#3c3333]" }  rounded-3xl`}>
            <button className={`rounded-[calc(1.5rem-1px)]  px-6 py-2 font-bold hover:bg-gray-800 flex items-center gap-2 ${isScrolled ? "border-[#000] border "  : "border border-[#fff] text-[#fff] bg-[#000]"}`}>
              Let's Talk <span><MdCall/></span>
            </button>
          </div>
        </div>
      </nav>
    </header>

    {/* <div>
      <MobileNavbar/>
    </div> */}
    </>
  );
};

export default Navbar;
