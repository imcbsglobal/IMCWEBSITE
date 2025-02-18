import React, { useEffect, useState } from "react";
import Footer from "./Footer";

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
        setTimeout(() => setIsPopupVisible(false), 3000); // Hide popup after 3 seconds
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
    <div className="pt-40">
      <section className="mb-20 max-w-[1400px] mx-auto w-full">
        <div className="w-full">
          <div className="flex justify-between items-center w-full mb-16">
            <div className="md:w-[60%] flex flex-col justify-start gap-5">
              <div className="text-[#fff] text-[50px] textGradient4 leading-tight">
                Get in Touch and Lets{" "}
                <span className="block">Make It Happen</span>
              </div>
              <div className="text-[#fff] textGradient6">
                Get in touch with us! Whether you have questions, need support,
                or want to learn more about our services, we're here to assist
                you. Simply fill out the form below, and we'll respond promptly
              </div>
            </div>
            <div className="md:w-[50%]"></div>
          </div>

          <div className="md:flex md:justify-start md:items-end w-full grid-cols-1 place-content-center gap-10">
            <div className="md:w-[50%]">
              <div className="flex flex-col justify-start gap-5 textGradient6 mb-10 text-xl">
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
                <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffbf00] to-[#ffb62d] p-[1px] bg-[#3c3333] backdrop-blur-3xl rounded-3xl">
                  <button className="text-[#fff] w-full h-full rounded-3xl bg-[#000] text-3xl px-10 py-3 border textGradient6">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            <div className="md:w-[50%] flex flex-col gap-5">
              <div className="text-[#ffff] textGradient6 text-2xl">
                Here to bring your concept to life, manage your ongoing project,
                or expand your existing development team
              </div>
              <form onSubmit={onSubmit}>
                <div className="w-full grid grid-cols-2 gap-5 mb-3 textGradient6">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name*"
                    required
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name*"
                    required
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email*"
                    required
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone*"
                    required
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                </div>
                <div className="w-full mb-3">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter Your Message"
                    required
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button type="submit" className="w-full text-[#000] px-8 py-3 bg-[#fff] rounded-3xl textGradient6">
                    Send Message
                  </button>
                </div>
              </form>

              {/* Success/Error Message Popup */}
              {isPopupVisible && (
                <div className="fixed top-5 right-5 bg-white p-4 rounded-lg shadow-lg text-green-600 z-50">
                  {result}
                </div>
              )}
            </div>
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