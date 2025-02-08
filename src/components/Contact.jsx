import React ,{useEffect,useState}from 'react'
import Footer from './Footer'
const Contact = () => {
  const [active, setActive] = useState(false);
   useEffect(() => {
      const scrollActive = () => {
          setActive(window.scrollY > 20);
      };
      window.addEventListener("scroll", scrollActive);
      return () => window.removeEventListener('scroll', scrollActive);
  }, []);
  return (
    <div className='pt-20'>
       <section className="mb-20 max-w-[1400px] mx-auto w-full">
        <div className="w-full">
          <div className="flex justify-between items-center w-full mb-16">
            <div className="md:w-[60%] flex flex-col justify-start gap-5">
              <div className="text-[#fff] text-[50px] textGradient4 leading-tight">
                Get in Touch and Lets{" "}
                <span className="block">Make It Happen</span>
              </div>
              <div className="text-[#fff] textGradient6">
              Get in touch with us! Whether you have questions, need support, or want to learn more about our services, we’re here to assist you. Simply fill out the form below, and we’ll respond promptly
              </div>
            </div>
            <div className="md:w-[50%]"></div>
          </div>
          {/* Contact Form */}
          <div className="md:flex md:justify-start md:items-end w-full grid-cols-1 place-content-center gap-10">
            <div className="md:w-[50%] ">
              <div className="flex flex-col justify-start gap-5 textGradient6 mb-10 text-xl">
                <div className="text-[#fff]">info@imcbsglobal.com</div>
                <div className="text-[#fff]">+91 75938 20007</div>
                <div className="text-[#fff]">
                  Palakkunnummal Building , Near Govt Ayurvedic Hospital Emily{" "}
                  <span className="block">
                    Kalpetta, Wayanad, Kerala – 673121
                  </span>{" "}
                </div>
              </div>
              <div className="flex">
                <div className="bg-gradient-to-r from-[#8d8d8d] via-[#ffbf00] to-[#ffb62d] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
                  <button className="text-[#fff] w-full h-full `rounded-[calc(1.5rem-1px)]` bg-[#000] text-3xl px-10 py-3 rounded-3xl border textGradient6">
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
              <form action="">
                <div className="w-full grid grid-cols-2 gap-5 mb-3 textGradient6">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  />
                </div>
                <div className="w-full mb-3">
                  <textarea
                    placeholder="Enter Your Message"
                    className="py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b"
                  ></textarea>
                </div>
                <div className="w-full">
                  <button className="w-full text-[#000] px-8 py-3 bg-[#fff] rounded-3xl textGradient6">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  )
}

export default Contact
