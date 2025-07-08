import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import Logo from "../assets/imclogo1.png";
import logoorg from '../assets/imclogo.png';
import { MdCall, MdMenu, MdClose, MdLogin } from "react-icons/md";
import MobileNavbar from "./MobileNavbar";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { useLocation } from "react-router-dom";
import wlogo from '../assets/logowhite.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  
  const location = useLocation();
  const isSupportsPage =location.pathname === "/career" ;
  const isAboutImc = location.pathname === "/aboutimc";
  
  const scrollToElement = () => {
    const element = document.getElementById("aboutid");
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offset = 100; // Padding offset
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
  };

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
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

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const dropdownMenus = {
    company: [
      { name: "About IMC",  path: "/aboutimc"  },
      { name: "Supports", path:"/supports" },
      { name: "Become a partner", path:"/becomepartner" },
    ],
    softwares: [
      { name: "TASK", path:"/inventory" },
      { name: "SHADE", path:"/healthcare" },
      { name: "MAGNET",  path:"/institution" },
      { name: "VTASK", path: "/pharmacy"},
      { name: "DINE", path:"/restaurant" },
      { name: "STARSTAY", path:"/hospitality" },
      { name: "AURIC", path:"/auric" },
    ],
    services: [
      { name: "Website & Web Application", path: "/websiteandWebApplications" },
      { name: "Mobile App Development", path: "/mobileApp" },
      // { name: "Business Consulting", path: "/businessBranding" },
      { name: "Digital Marketing", path: "/digitalmarketing" },
      // { name: "Hardware Solutions", path: "/hardwaresolutions" },
    ],
    // faq: [
    //   { name: "Question Chat Boats", path: "/questionChatBoats" },
    //   { name: "Product Tutorials", path: "/productTutorials" },
    //   { name: "Company Updates", path: "/productVideo" },
    //   { name: "Whatsapp Supports", path: "/whatsappSupports" },
    //   {name: "Career", path:"/career"},
    // ],
  };

  const renderDropdown = (menuKey) => (
    <div
      className="absolute py-5 px-5 bg-[#17171772] backdrop-blur-sm drop-shadow-lg"
      onMouseEnter={() => handleMouseEnter(menuKey)}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="z-20 relative text-nowrap text-[#fff]">
        {dropdownMenus[menuKey].map((item, index) => (
          <Link key={index} to={item.path}>
            <li className="hover:text-[#f60] p-2 hover:border-b hover:border-[#f60]">{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (menuKey) => {
    setActiveDropdown(activeDropdown === menuKey ? null : menuKey);
  };

  // Function to determine which logo to display
  const getLogoToDisplay = () => {
    if (isMobile) {
      // For mobile view
      if (!isAboutImc) {
        return logoorg; // Show the requested logo for mobile when not on aboutimc page
      } else if (isSupportsPage) {
        return isScrolled ? logo : wlogo;
      } else {
        return isScrolled ? logoorg : logoorg;
      }
    } else {
      // For desktop view
      if (isSupportsPage) {
        return isScrolled ? logo : wlogo;
      } else {
        return logo;
      }
    }
  };
  
  // Determine text color for menu items
  const getMenuTextColor = () => {
    if (isSupportsPage && !isScrolled) {
      return "text-[#000]";
    } else {
      return "text-black";
    }
  };
  
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-[990] transition-all duration-300 ${
  isScrolled
    ? "bg-gradient-to-r from-[#e8e5e5] via-[#e8e5e5] to-[#e8e5e5] py-5 rounded-b-3xl shadow-lg"
    : "bg-gradient-to-r from-[#e8e5e5] via-[#e8e5e5] to-[#e8e5e5] py-4"
}`}
      >
        <nav className="flex justify-between items-center w-full max-w-[1280px] mx-auto px-4 lg:px-8">
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <MdClose className="text-3xl text-black" />
              ) : (
                <MdMenu
                  className={`text-3xl ${isSupportsPage && !isScrolled ? "text-white" : "text-black"}`}
                />
              )}
            </button>
          </div>

          {/* Logo Section */}
          <div className="w-auto h-[50px]">
            <img
              src={getLogoToDisplay()}
              className="w-full h-full object-contain"
              alt="Logo"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex justify-center items-center">
            <ul
              className={`md:flex hidden justify-center items-center gap-4 lg:gap-20 text-lg ${getMenuTextColor()}`}
            >
              <Link to="/">
                <li className="cursor-pointer hover:text-[#000] hover:font-bold hover:bg-[#fff] px-3 py-1 rounded-full transition-all duration-300">Home</li>
              </Link>

              <li
                className="cursor-pointer relative "
                onMouseEnter={() => handleMouseEnter("company")}
                onMouseLeave={handleMouseLeave}
              >
                <p className="hover:text-[#000] hover:font-bold hover:bg-[#fff] px-3 py-1 rounded-full transition-all duration-300">Company</p>
                {activeMenu === "company" && renderDropdown("company")}
              </li>

              <li
                className="cursor-pointer relative"
                onMouseEnter={() => handleMouseEnter("softwares")}
                onMouseLeave={handleMouseLeave}
              >
               <p className="hover:text-[#000] hover:font-bold hover:bg-[#fff] px-3 py-1 rounded-full transition-all duration-300"> Softwares</p>
                {activeMenu === "softwares" && renderDropdown("softwares")}
              </li>

              <li
                className="cursor-pointer relative"
                onMouseEnter={() => handleMouseEnter("services")}
                onMouseLeave={handleMouseLeave}
              >
                <p className="hover:text-[#000] hover:font-bold hover:bg-[#fff] px-3 py-1 rounded-full transition-all duration-300">Solutions</p>
                {activeMenu === "services" && renderDropdown("services")}
              </li>

              {/* <li
                className="cursor-pointer relative"
                onMouseEnter={() => handleMouseEnter("faq")}
                onMouseLeave={handleMouseLeave}
              >
                FAQ
                {activeMenu === "faq" && renderDropdown("faq")}
              </li> */}

              <Link to="/contact">
                <li className="cursor-pointer  hover:text-[#000] hover:font-bold hover:bg-[#fff] px-3 py-1 rounded-full transition-all duration-300">Contact</li>
              </Link>
            </ul>
          </div>

          {/* Login Button */}
          <div className="md:flex gap-5 hidden">
            {/* <Link to="/login">
              <button
                className={`rounded-3xl px-6 py-2 font-bold hover:bg-gray-200 ${
                  isScrolled
                    ? "bg-[#000] text-[#fff] border border-[#fff] hover:bg-gray-500"
                    : "bg-[#fff] text-[#000]"
                } hidden sm:flex`}
              >
                Login
              </button>
            </Link> */}

            <div
              className={`${
                isScrolled
                  ? ""
                  : "bg-gradient-to-r hidden md:flex from-[#20ffff] via-[#ff850c] to-[#ffa600] p-[1px] bg-[#3c3333]"
              } rounded-3xl`}
            >
              {/* <button
                onClick={() => (window.location.href = "tel:+917593820007")}
                className={`rounded-[calc(1.5rem-1px)] px-6 py-2 font-bold hover:bg-[#ff850c63] flex items-center gap-2 ${
                  isScrolled
                    ? "border-[#000] border hover:bg-[#ff850c3c]"
                    : "border border-[#fff] text-[#fff] bg-[#000]"
                } hidden sm:flex`}
              >
                <span>Let's Talk</span>
                <MdCall className="text-xl" />
              </button> */}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[75%] max-w-[320px] rounded-r-3xl bg-white text-black z-[990] h-full shadow-lg transition-transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="relative p-5">
          {/* Close Button Positioned Top Right */}
          <button onClick={toggleMobileMenu} className="absolute top-5 right-5">
            <MdClose size={30} className="text-black" />
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col p-5 gap-4">
          <div className="flex justify-center w-full right-0">
            <img
              src={logo}
              alt="Logo"
              className="h-[80px] w-auto object-contain mb-4"
            />
          </div>
          <Link to="/" onClick={toggleMobileMenu}>
            <li className="hover:text-orange-500">Home</li>
          </Link>
          {Object.keys(dropdownMenus).map((menuKey) => (
            <div key={menuKey}>
              {/* Dropdown Header */}
              <li
                className="flex justify-between items-center cursor-pointer hover:text-orange-500"
                onClick={() => toggleDropdown(menuKey)}
              >
                {menuKey.charAt(0).toUpperCase() + menuKey.slice(1)}
                <span>
                  {activeDropdown === menuKey ? (
                    <IoMdArrowDropup />
                  ) : (
                    <MdOutlineArrowDropDown />
                  )}
                </span>
              </li>

              {/* Dropdown Items */}
              {activeDropdown === menuKey && (
                <ul className="pl-4 mt-2">
                  {dropdownMenus[menuKey].map((item, index) => (
                    <Link key={index} to={item.path} onClick={toggleMobileMenu}>
                      <li className="py-1 hover:text-orange-500">
                        {item.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <Link to="/contact" onClick={toggleMobileMenu}>
            <li className="hover:text-orange-500">Contact</li>
          </Link>
          {/* <Link to="/login" onClick={toggleMobileMenu}>
            <li className="hover:text-orange-500">Login</li>
          </Link> */}
        </ul>
      </div>
    </>
  );
};

export default Navbar;