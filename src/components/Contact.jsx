import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import darkGradient from "../assets/darkGradient.jpg";

const Contact = () => {
  const [active, setActive] = useState(false);
  const [result, setResult] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);

    return () => window.removeEventListener("scroll", scrollActive);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "3e557a00-0b21-45e5-b274-496427ac9210");
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: ""
        });
        setIsPopupVisible(true);
        setTimeout(() => setIsPopupVisible(false), 3000);
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("Error submitting form");
    }
  };

  return (
    <div className="pt-32 pb-20 relative w-full">
      <div className=" absolute top-0 right-0 bottom-0 left-0 -z-10">
        <img src={darkGradient} alt="" className="w-full h-full object-cover"/>
      </div>
      <section className="mb-10 md:mb-20 max-w-[1400px] mx-auto w-full px-4 md:px-0">
        <div className="w-full">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center w-full mb-8 md:mb-16">
            <div className="w-full md:w-[60%] flex flex-col justify-start gap-3 md:gap-5 mb-8 md:mb-0">
              <div className="text-[#fff] text-3xl md:text-[50px] textGradient4 leading-tight">
                Get in Touch and Lets{" "}
                <span className="block">Make It Happen</span>
              </div>
              <div className="text-[#fff] textGradient6 text-base md:text-lg">
                Get in touch with us! Whether you have questions, need support,
                or want to learn more about our services, we're here to assist
                you. Simply fill out the form below, and we'll respond promptly
              </div>
            </div>
            <div className="hidden md:block md:w-[50%]"></div>
          </div>

          <div className="flex flex-col md:flex-row md:justify-start md:items-end w-full gap-8 md:gap-10">
            <div className="w-full md:w-[50%]">
              <div className="flex flex-col justify-start gap-4 md:gap-5 textGradient6 mb-6 md:mb-10 text-lg md:text-xl">
                <div className="text-[#fff]">info@imcbsglobal.com</div>
                <div className="text-[#fff]">+91 75938 20007</div>
                <div className="text-[#fff]">
                  Palakkunnummal Building, Near Govt Ayurvedic Hospital Emily{" "}
                  <span className="block">
                    Kalpetta, Wayanad, Kerala – 673121
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="bg-gradient-to-r p-[1px] backdrop-blur-3xl rounded-3xl w-full md:w-auto">
                <button 
                  onClick={() => (window.location.href = "tel:+917593820007")}
                  className="text-[#fff] w-full h-full bg-[#ffffff07] text-xl md:text-3xl px-8 py-3 rounded-3xl border textGradient6 hover:bg-gray-700">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full md:w-[50%] flex flex-col gap-4 md:gap-5">
              <div className="text-[#ffff] textGradient6 text-lg">
                Here to bring your concept to life, manage your ongoing project,
                or expand your existing development team
              </div>
              <form onSubmit={onSubmit}>
                <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 mb-3 textGradient6">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name*"
                    required
                    className="py-2 px-4 md:px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name*"
                    required
                    className="py-2 px-4 md:px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email*"
                    required
                    className="py-2 px-4 md:px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone*"
                    required
                    className="py-2 px-4 md:px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                </div>
                <div className="w-full mb-3">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter Your Message"
                    required
                    className="py-2 px-4 md:px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b min-h-[100px]"
                  ></textarea>
                </div>
                <div className="w-full">
                <button type="submit" className="w-full text-[#000] px-8 py-3 bg-[#fff] rounded-3xl textGradient6">
                    Send Message
                  </button>
                </div>
              </form>

              {isPopupVisible && (
                <div className="fixed top-5 right-5 bg-white p-4 rounded-lg shadow-lg text-green-600 z-50">
                  {result}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="w-full mb-10 md:mb-20">
        <div className="max-w-[1400px] mx-auto px-4 md:px-0">
          <div className="w-full rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.0735491927476!2d76.07862677487005!3d11.618106688586558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x84f992636da1e2d%3A0xe5e2fd2dafe1f7f3!2sIMC%20BUSINESS%20SOLUTIONS!5e0!3m2!1sen!2sin!4v1739947667097!5m2!1sen!2sin"
              width="1400"
              height="450"
              allowFullScreen
              referrerPolicy="no-referrer"
            ></iframe>
          </div>
        </div>
      </section>
      <section className="bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
};

export default Contact;