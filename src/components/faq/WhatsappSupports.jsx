import React,{useEffect,useState} from 'react'
import Footer from '../Footer'
import { CgArrowLongRight } from "react-icons/cg";
import { MdContactSupport } from "react-icons/md";
import { GoDotFill } from "react-icons/go";
import whatsapp from '../../assets/whatsapp.jpeg'
import darkGradient from "../../assets/darkGradient.jpg";
import { FcServices } from "react-icons/fc";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";


const WhatsappSupports = () => {
  useEffect(() => {
      // Scroll to the top of the page on mount
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);
       const [openChat, setOpenChat] = useState(false)
    
  return (
    <div className="flex flex-col justify-center items-center w-full relative pt-32 bg-[#fff]">
      {/* <div className='w-full h-full absolute top-0 bottom-0 left-0 right-0 -z-10'>
        <img src={darkGradient} alt="" className='w-full h-full object-cover'/>
      </div> */}
      <a href="https://wa.me/+917593820007">
              <div className="md:bottom-[120px] bottom-[70px] right-1.5 cursor-pointer md:right-[50px] z-[999] fixed text-[40px] p-1 bg-[#4DC85A] text-[#fff] rounded-full">
                <RiWhatsappLine/>
              </div>
            </a>
            
            {/* chatbot */}
            <div className="bottom-10 fixed right-10 z-[999]">
              {openChat ? (
                <div className="fixed bottom-10 z-[999] right-10">
                  <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
                </div>
              ) : (
                <div className="fixed bottom-10 z-[999] right-10">
                  <ChatBot openChatx={openChat} setOpenChatx={setOpenChat} />
                </div>
              )}
            </div>
      <section className="max-w-[1400px] w-full mb-10 px-2 md:px-0">
        <div>
          <div className="text-[#352317] text-3xl sm:text-[50px]  mb-5 text-center leading-tight">
            IMC Technology Solutions{" "}
            <span className="block text-base sm:text-[20px] mt-5  font-bold">
              Your Trusted Partner in IT Solutions and Support
            </span>
          </div>
          <div className="max-w-[1000px] mx-auto text-center text-[#000]  text-base sm:text-lg">
            Providing comprehensive IT solutions including software development,
            hardware support, and instant WhatsApp assistance. From restaurant management
            to healthcare systems, we deliver innovative solutions tailored to your
            business needs.
          </div>
        </div>
      </section>

      <section className="mb-20 max-w-[1400px] mx-auto w-full bg-[#fff] md:h-[500px] lg:h-[700px] h-[300px] rounded-full  md:px-0">
        <div className='w-full h-full'><img src={whatsapp} alt="" className=' w-full h-full rounded-full object-cover' /></div>
      </section>

      <section className="w-full max-w-[1400px] mx-auto mb-20 px-2">
        <div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-10">
            <div className="w-full flex flex-col justify-center items-center relative">
              <div className="absolute leading-tight top-[-50px] md:top-10 right-2 text-[#352317] ">
                24/7 Support{" "}
                <span className="block text-2xl sm:text-3xl">
                  Instant WhatsApp Assistance
                </span>
              </div>
              <div className="w-full ">
                <div className="flex  md:left-[100px] top-0">
                  {/* Original image source preserved */}
                  <img
                    src="https://res.cloudinary.com/dqydgc2ky/image/upload/v1735186348/131024-removebg-preview_wppmnm.png"
                    className="drop-shadow-sm"
                    alt="Support illustration"
                  />
                </div>
                <div className="w-full h-[300px] md:h-[250px] sm:h-[300px] rounded-3xl bg-[#83b58088] py-10 px-4">
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-5">
                    <div className="h-full flex flex-col justify-around w-full sm:w-[50%]">
                      <div className="flex items-center gap-2  font-bold">
                        <span className="  text-[#000] text-2xl sm:text-3xl">
                          <MdContactSupport />
                        </span>{" "}
                        Technical Support
                      </div>
                      <div className="text-[28px] sm:text-[36px] font-bold ">
                        Expert IT Solutions
                      </div>
                    </div>
                    <div className="w-full sm:w-[50%]  text-base sm:text-lg">
                      Our dedicated team provides comprehensive support for all your
                      IT needs, from software troubleshooting to hardware
                      maintenance. Get instant assistance through WhatsApp for
                      quick resolution of your technical issues.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col justify-center items-center gap-5">
              <div className="w-full h-[350px] md:h-[300px] sm:h-[350px] bg-[#83b58088] rounded-3xl flex justify-center items-start gap-5 md:gap-10 py-10 px-2 md:px-4">
                <div className="flex flex-col justify-between h-full items-center">
                  <div className="px-8 py-2 rounded-3xl bg-[#000] text-[#fff]  text-nowrap drop-shadow-md">
                    Our Services
                  </div>
                  <div className=" text-[36px] sm:text-[50px] drop-shadow-sm">
                    <FcServices />
                  </div>
                </div>
                <div className="h-full flex flex-col justify-between">
                  <div className="text-sm sm:text-base">
                    Specializing in custom software solutions including restaurant
                    management, healthcare systems, and inventory control. Our
                    expert team ensures seamless integration and ongoing support
                    for all your business needs.
                  </div>
                  {/* Original image section preserved */}
                  <div className="flex justify-around items-center">
                    <div className="flex relative">
                      <div className="md:w-[60px] h-[40px] w-[40px] md:h-[60px] sm:w-[80px] sm:h-[80px] rounded-full bg-[#000] overflow-hidden drop-shadow-lg">
                        <img
                          src="https://img.freepik.com/free-photo/smiling-young-handsome-traveler-man-holding-wallet-airplane-tickets-with-raised-fist-isolated-blue-wall-with-copy-space_141793-79015.jpg?t=st=1735188053~exp=1735191653~hmac=1d7276dcea2865c417e875a73c0796b66a603f03be3abe22eabca4c40c77e3a5&w=1060"
                          alt="Team member 1"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-[60px] h-[40px] w-[40px] md:h-[60px] sm:w-[80px] sm:h-[80px] absolute left-[30px] rounded-full bg-[#000] overflow-hidden drop-shadow-lg">
                        <img
                          src="https://img.freepik.com/free-photo/young-beautiful-traveler-woman-holding-passport-tickets-looking-camera-with-serious-confident-expression-standing-isolated-pink-background_141793-24687.jpg?t=st=1735188151~exp=1735191751~hmac=45d327f05f75f3eba3a57d47b7593dd603d7d7a9cb5e3999589b522651db4086&w=1060"
                          alt="Team member 2"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="md:w-[60px] h-[40px] w-[40px] md:h-[60px] sm:w-[80px] sm:h-[80px] rounded-full absolute left-[60px] bg-[#000] overflow-hidden drop-shadow-lg">
                        <img
                          src="https://img.freepik.com/free-photo/portrait-young-woman-with-passport_1258-48217.jpg?t=st=1735188193~exp=1735191793~hmac=e5a3a0ce13b221a6cb7d4f208ac5914cc1093c2596f3d49ff24e242094034d43&w=1060"
                          alt="Team member 3"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:text-[36px] text-xl sm:text-[50px]">
                      <CgArrowLongRight />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex w-full flex-col gap-5">
                <div className="w-full py-5 px-4 rounded-xl bg-[#83b58088]  flex items-center gap-2">
                  <span>
                    <GoDotFill />
                  </span>{" "}
                  Comprehensive software solutions for restaurants, healthcare, and educational institutions
                </div>
                <div className="w-full py-5 px-4 rounded-xl bg-[#83b58088]  flex items-center gap-2">
                  <span>
                    <GoDotFill />
                  </span>{" "}
                  24/7 WhatsApp support for immediate technical assistance and IT consultations
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff] w-full py-10">
        <Footer />
      </section>
    </div>
  );
}

export default WhatsappSupports