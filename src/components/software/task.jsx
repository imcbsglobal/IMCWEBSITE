import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TiTick } from "react-icons/ti";
import { FiMonitor, FiSmartphone, FiCloud, FiLayers } from "react-icons/fi";
import taskPos from '../../assets/TASK p.png';
import floorTask from '../../assets/TASKf.png';
import pyramid from '../../assets/pyramid.png';
import icare from "../../assets/icarecopy.png";
import bcare from "../../assets/B-care.png";
import magic from '../../assets/magic pda.png';
import ccare from '../../assets/c care.png';
import cloud from '../../assets/cloud.png';
import magicpda from '../../assets/magicpda.png';
import taskpro1 from '../../assets/Task Pro.png';
import tasktext from '../../assets/taskcopyorg.png';
import pro from '../../assets/productivity.png';
import eway1 from "../../assets/ewaytask.png";
import trans from "../../assets/transcloud.png";
import Footer from ".././Footer";

const Task = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // Product data with updated color schemes that match logo colors
  const productsData = [
    {
      id: 'icare',
      image: icare,
      title: "iCare",
      tagline: "Complete Retail Management Solution",
      description: "Our comprehensive retail management solution designed specifically for your inventory needs. iCare offers seamless POS integration, customer relationship management, and detailed stock control.",
      features: [
        "Real-time inventory tracking",
        "POS integration",
        "Customer relationship management",
        "Detailed stock control",
        "Sales analytics and reporting"
      ],
      businessTypes: [
        "Retail stores",
        "Supermarkets",
        "Hypermarkets",
        "Boutiques",
        "Convenience stores"
      ],
      contactSolutions: [
        { name: "Web dashboard", icon: FiMonitor },
        { name: "Mobile app", icon: FiSmartphone },
        { name: "Desktop application", icon: FiLayers },
        { name: "Cloud-based access", icon: FiCloud }
      ],
      // Using logo colors from image - pink/purple gradient
      color: "purple",
      customColors: {
        primary: "#8e44ad",
        secondary: "#e84393",
        light: "#f3e5f5",
        text: "#6a1b9a"
      }
    },
    {
      id: 'bcare',
      image: bcare,
      title: "BCare",
      tagline: "Financial Account System",
      description: "BCare is an intermediate version of our Financial Account System, designed for medium-level business automation. BCare is highly appreciated by our valued customers in the business industry.",
      features: [
        "Financial accounting",
        "Medium-level business automation",
        "Invoice management",
        "Expense tracking",
        "Financial reporting"
      ],
      businessTypes: [
        "Medium-sized businesses",
        "Distributors",
        "Wholesalers",
        "Service providers"
      ],
      contactSolutions: [
        { name: "Desktop application", icon: FiLayers },
        { name: "Web interface", icon: FiMonitor },
        { name: "Mobile companion app", icon: FiSmartphone }
      ],
      // Using logo colors from image - blue gradient
      color: "custom-blue",
      customColors: {
        primary: "#2980b9",
        secondary: "#3498db",
        light: "#e3f2fd",
        text: "#1565c0"
      }
    },
    {
      id: 'taskpos',
      image: taskPos,
      title: "TaskPOS",
      tagline: "Advanced Point of Sale System",
      description: "A powerful point of sale system that streamlines your checkout process and integrates seamlessly with your inventory management.",
      features: [
        "Intuitive checkout interface",
        "Multiple payment methods",
        "Cashier performance tracking",
        "Receipt customization",
        "Offline operation capabilities"
      ],
      businessTypes: [
        "Retail stores",
        "Restaurants",
        "Cafés",
        "Specialty shops",
        "Grocery stores"
      ],
      contactSolutions: [
        { name: "Web dashboard", icon: FiMonitor },
        { name: "Tablet application", icon: FiSmartphone },
        { name: "Desktop software", icon: FiLayers },
        { name: "Cloud sync", icon: FiCloud }
      ],
      // Using logo colors from image - orange/blue
      color: "custom-orange",
      customColors: {
        primary: "#e67e22",
        secondary: "#f39c12",
        light: "#fff3e0",
        text: "#e65100"
      }
    },
    {
      id: 'floortask',
      image: floorTask,
      title: "FloorTask",
      tagline: "Floor Management Solution",
      description: "Optimize your retail floor operations with our comprehensive floor management solution, designed to enhance customer experience and employee productivity.",
      features: [
        "Staff scheduling",
        "Floor mapping",
        "Customer flow analysis",
        "Task assignment",
        "Performance monitoring"
      ],
      businessTypes: [
        "Department stores",
        "Shopping malls",
        "Large retailers",
        "Big-box stores",
        "Exhibition centers"
      ],
      contactSolutions: [
        { name: "Mobile app", icon: FiSmartphone },
        { name: "Web console", icon: FiMonitor },
        { name: "Real-time dashboard", icon: FiCloud },
        { name: "Staff tablets", icon: FiLayers }
      ],
      // Using logo colors from image - orange/blue accents
      color: "custom-orange-blue",
      customColors: {
        primary: "#ff5722",
        secondary: "#ff7043",
        light: "#ffccbc",
        text: "#e64a19"
      }
    },
    {
      id: 'ccare',
      image: ccare,
      title: "CCare",
      tagline: "Customer Relationship Management",
      description: "Build lasting relationships with your customers through our advanced CRM platform designed to track interactions and personalize your service.",
      features: [
        "Customer profiles",
        "Purchase history tracking",
        "Loyalty program integration",
        "Communication tools",
        "Customer insights analytics"
      ],
      businessTypes: [
        "Service providers",
        "Retail chains",
        "E-commerce platforms",
        "Membership organizations",
        "Subscription services"
      ],
      contactSolutions: [
        { name: "Web interface", icon: FiMonitor },
        { name: "Mobile companion", icon: FiSmartphone },
        { name: "API integration", icon: FiLayers },
        { name: "Cloud platform", icon: FiCloud }
      ],
      // Using logo colors from image - orange/cyan
      color: "custom-orange-blue",
      customColors: {
        primary: "#ff5722",
        secondary: "#00bcd4",
        light: "#e0f7fa",
        text: "#0097a7"
      }
    },
    {
      id: 'magicpda',
      image: magicpda,
      title: "MagicPDA",
      tagline: "Mobile Inventory Solution",
      description: "Put inventory management in your hands with our powerful mobile solution that lets you manage your stock from anywhere, at any time.",
      features: [
        "Barcode scanning",
        "Real-time inventory updates",
        "Mobile order processing",
        "Stock transfer management",
        "Delivery confirmation"
      ],
      businessTypes: [
        "Warehouses",
        "Distribution centers",
        "Logistics companies",
        "Field service businesses",
        "Multi-location retailers"
      ],
      contactSolutions: [
        { name: "Mobile app", icon: FiSmartphone },
        { name: "Web administration", icon: FiMonitor },
        { name: "Cloud synchronization", icon: FiCloud },
        { name: "Hardware integration", icon: FiLayers }
      ],
      // Using logo colors - purple palette
      color: "custom-magic",
      customColors: {
        primary: "#673ab7",
        secondary: "#9c27b0",
        light: "#f3e5f5",
        text: "#6a1b9a"
      }
    },
    {
      id: 'ewaytask',
      image: eway1,
      title: "EWay Task",
      tagline: "E-Commerce Integration Platform",
      description: "Connect your physical and online stores with our comprehensive e-commerce integration platform for unified inventory and customer management.",
      features: [
        "Multi-channel inventory",
        "Order synchronization",
        "Customer data integration",
        "Payment processing",
        "Shipping management"
      ],
      businessTypes: [
        "Omnichannel retailers",
        "Online marketplaces",
        "Brick-and-click businesses",
        "Direct-to-consumer brands",
        "Digital storefronts"
      ],
      contactSolutions: [
        { name: "API platform", icon: FiLayers },
        { name: "Web console", icon: FiMonitor },
        { name: "Mobile management", icon: FiSmartphone },
        { name: "Cloud integration", icon: FiCloud }
      ],
      // Using logo colors from image - teal
      color: "custom-teal",
      customColors: {
        primary: "#009688",
        secondary: "#26a69a",
        light: "#e0f2f1",
        text: "#00796b"
      }
    },
    {
      id: 'transcloud',
      image: trans,
      title: "TransCloud",
      tagline: "Logistics Management System",
      description: "Streamline your logistics operations with our cloud-based transportation and logistics management system designed for maximum efficiency.",
      features: [
        "Route optimization",
        "Delivery tracking",
        "Fleet management",
        "Driver mobile app",
        "Delivery confirmation"
      ],
      businessTypes: [
        "Logistics companies",
        "Delivery services",
        "E-commerce fulfillment",
        "Food delivery",
        "Transportation providers"
      ],
      contactSolutions: [
        { name: "Cloud platform", icon: FiCloud },
        { name: "Mobile apps", icon: FiSmartphone },
        { name: "Web dashboard", icon: FiMonitor },
        { name: "GPS integration", icon: FiLayers }
      ],
      // Using logo colors
      color: "custom-cloud",
      customColors: {
        primary: "#03a9f4",
        secondary: "#29b6f6",
        light: "#e1f5fe",
        text: "#0277bd"
      }
    },
  ];

  useEffect(() => {
    // Simulate loading for better UX
    setIsLoading(true);
    setTimeout(() => {
      const foundProduct = productsData.find(p => p.id === productId);
      setProduct(foundProduct);
      setIsLoading(false);
    }, 800);
  }, [productId]);

  const getColorClass = (colorName, element) => {
    // Standard Tailwind colors
    const colorMap = {
      blue: {
        bg: "bg-blue-600",
        bgLight: "bg-blue-100",
        text: "text-blue-800",
        hover: "hover:bg-blue-700",
      },
      green: {
        bg: "bg-green-600",
        bgLight: "bg-green-100",
        text: "text-green-800",
        hover: "hover:bg-green-700",
      },
      purple: {
        bg: "bg-purple-600",
        bgLight: "bg-purple-100",
        text: "text-purple-800",
        hover: "hover:bg-purple-700",
      },
      orange: {
        bg: "bg-orange-600",
        bgLight: "bg-orange-100",
        text: "text-orange-800",
        hover: "hover:bg-orange-700",
      },
      red: {
        bg: "bg-red-600",
        bgLight: "bg-red-100",
        text: "text-red-800",
        hover: "hover:bg-red-700",
      },
      indigo: {
        bg: "bg-indigo-600",
        bgLight: "bg-indigo-100",
        text: "text-indigo-800",
        hover: "hover:bg-indigo-700",
      },
      yellow: {
        bg: "bg-yellow-500",
        bgLight: "bg-yellow-100",
        text: "text-yellow-800",
        hover: "hover:bg-yellow-600",
      },
      teal: {
        bg: "bg-teal-600",
        bgLight: "bg-teal-100",
        text: "text-teal-800",
        hover: "hover:bg-teal-700",
      }
    };

    // If using standard Tailwind colors
    if (colorMap[colorName]) {
      return colorMap[colorName][element];
    }
    
    // For custom colors, use inline styles
    if (product && product.customColors) {
      switch(element) {
        case 'bg':
          return product.customColors.primary;
        case 'bgLight':
          return product.customColors.light;
        case 'text':
          return product.customColors.text;
        case 'hover':
          return product.customColors.secondary;
        default:
          return '';
      }
    }
    
    // Fallback to blue if color not found
    return colorMap.blue[element];
  };

  // Function to apply custom colors as inline styles
  const getCustomStyles = (element) => {
    if (!product || !product.customColors) return {};
    
    switch(element) {
      case 'bg':
        return { backgroundColor: product.customColors.primary };
      case 'bgLight':
        return { backgroundColor: product.customColors.light };
      case 'text':
        return { color: product.customColors.text };
      case 'hover':
        return { backgroundColor: product.customColors.secondary };
      case 'border':
        return { borderColor: product.customColors.primary };
      default:
        return {};
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-600"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex flex-col justify-center items-center px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
        <p className="text-gray-600 mb-8 text-center">
          We couldn't find the product you're looking for. Please check the URL or return to our product catalog.
        </p>
        <button className="px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors">
          Return to Products
        </button>
      </div>
    );
  }

  const isCustomColor = product.color.startsWith('custom-');

  return (
    <div className="max-w-[1600px] mx-auto">
      {/* Hero Section */}
      {/* <div 
        className={!isCustomColor ? `${getColorClass(product.color, "bg")} py-16` : "py-16"} 
        style={isCustomColor ? getCustomStyles('bg') : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
              {product.title}
            </h1>
            <p className="mt-3 max-w-xl mx-auto text-xl text-white opacity-90">
              {product.tagline}
            </p>
          </div>
        </div>
      </div> */}

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-16 mt-20">
        <div className=" rounded-xl overflow-hidden">
          {/* Product Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 max-w-[1200px] mx-auto">
            <div className="p-8 flex items-center justify-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="rounded-lg shadow-lg w-full h-auto max-h-40 object-contain  transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900">{product.title}</h2>
              <div 
                className={!isCustomColor ? `w-16 h-1 ${getColorClass(product.color, "bg")} my-4` : "w-16 h-1 my-4"} 
                style={isCustomColor ? getCustomStyles('bg') : {}}
              ></div>
              <p className="text-lg text-gray-600 mb-8">
                {product.description}
              </p>
            </div>
          </div>

          {/* Features Section */}
          <div 
        className={!isCustomColor ? `${getColorClass(product.color, "bgLight")} py-12 px-8 ` : "py-12 px-8"} 
        style={isCustomColor ? getCustomStyles('bgLight') : {}}
      >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Key Features</h2>
              <div 
                className={!isCustomColor ? `w-16 h-1 ${getColorClass(product.color, "bg")} mx-auto my-4` : "w-16 h-1 mx-auto my-4"} 
                style={isCustomColor ? getCustomStyles('bg') : {}}
              ></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover how {product.title} can transform your business operations with these powerful features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {product.features.map((feature, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <div 
                    className={!isCustomColor ? 
                      `inline-flex items-center justify-center p-3 rounded-full ${getColorClass(product.color, "bgLight")} mb-4` : 
                      "inline-flex items-center justify-center p-3 rounded-full mb-4"
                    }
                    style={isCustomColor ? getCustomStyles('bgLight') : {}}
                  >
                    <TiTick 
                      className={!isCustomColor ? `h-6 w-6 ${getColorClass(product.color, "text")}` : "h-6 w-6"} 
                      style={isCustomColor ? getCustomStyles('text') : {}}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature}</h3>
                  <p className="text-gray-600">
                    Enhance your business operations with our {feature.toLowerCase()} capabilities.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Business Types */}
          <div className="px-8 py-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Perfect For Your Business</h2>
              <div 
                className={!isCustomColor ? `w-16 h-1 ${getColorClass(product.color, "bg")} mx-auto my-4` : "w-16 h-1 mx-auto my-4"} 
                style={isCustomColor ? getCustomStyles('bg') : {}}
              ></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                {product.title} is designed to meet the specific needs of various business types
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {product.businessTypes.map((type, index) => (
                <span 
                  key={index}
                  className={!isCustomColor ? 
                    `inline-flex items-center px-4 py-2 rounded-full text-md font-medium ${getColorClass(product.color, "bgLight")} ${getColorClass(product.color, "text")} transition-transform hover:scale-105` :
                    "inline-flex items-center px-4 py-2 rounded-full text-md font-medium transition-transform hover:scale-105"
                  }
                  style={isCustomColor ? {...getCustomStyles('bgLight'), ...getCustomStyles('text')} : {}}
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Available Platforms */}
          <div className="px-8 py-12 bg-gray-50">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">Available Platforms</h2>
              <div 
                className={!isCustomColor ? `w-16 h-1 ${getColorClass(product.color, "bg")} mx-auto my-4` : "w-16 h-1 mx-auto my-4"} 
                style={isCustomColor ? getCustomStyles('bg') : {}}
              ></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Access {product.title} from anywhere, on any device with our multi-platform support
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {product.contactSolutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
                    <div 
                      className={!isCustomColor ? 
                        `inline-flex items-center justify-center p-4 rounded-full ${getColorClass(product.color, "bgLight")} mb-4` :
                        "inline-flex items-center justify-center p-4 rounded-full mb-4"
                      }
                      style={isCustomColor ? getCustomStyles('bgLight') : {}}
                    >
                      <Icon 
                        className={!isCustomColor ? `h-8 w-8 ${getColorClass(product.color, "text")}` : "h-8 w-8"}
                        style={isCustomColor ? getCustomStyles('text') : {}}
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{solution.name}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      
      {/* Contact Section - Added to match product branding */}
      <div 
        className={!isCustomColor ? `${getColorClass(product.color, "bgLight")} py-16` : "py-16"} 
        style={isCustomColor ? getCustomStyles('bgLight') : {}}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 
              className={!isCustomColor ? `text-3xl font-bold ${getColorClass(product.color, "text")} mb-4` : "text-3xl font-bold mb-4"}
              style={isCustomColor ? getCustomStyles('text') : {}}
            >
              Ready to transform your business with {product.title}?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Get in touch with our team today to schedule a demo and see how {product.title} can benefit your organization.
            </p>
            <a href='/contact'>
            <button 
              className={!isCustomColor ? 
                `px-8 py-3 ${getColorClass(product.color, "bg")} text-white font-medium rounded-lg ${getColorClass(product.color, "hover")} transition-colors` :
                "px-8 py-3 text-white font-medium rounded-lg transition-colors"
              }
              style={isCustomColor ? getCustomStyles('bg') : {}}
              onMouseOver={(e) => isCustomColor && (e.currentTarget.style.backgroundColor = product.customColors.secondary)}
              onMouseOut={(e) => isCustomColor && (e.currentTarget.style.backgroundColor = product.customColors.primary)}
              
            >
              Contact Us
            </button>
            </a>
          </div>
        </div>
      </div>
      
      <section className="py-10 bg-[#fff] w-full">
        <Footer />
      </section>
    </div>
  );
};

export default Task;