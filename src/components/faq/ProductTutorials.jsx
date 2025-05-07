import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";
import Footer from "../Footer";
import darkGradient from "../../assets/darkGradient.jpg";
import { RiWhatsappLine } from "react-icons/ri";
import ChatBot from "../../components/ChatBot";

const ProductTutorials = () => {
  const [demonstrations, setDemonstrations] = useState([]);

  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Fetch product demonstrations from Firestore
    const fetchDemonstrations = async () => {
      try {
        const querySnapshot = await getDocs(
          collection(dbFirestore, "productdemo")
        );
        const demoList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDemonstrations(demoList);
      } catch (error) {
        console.error("Error fetching demonstrations:", error);
      }
    };

    fetchDemonstrations();
  }, []);
   const [openChat, setOpenChat] = useState(false)

  return (
    <div className="min-h-screen relative bg-[#fff]">
      {/* <div className="w-full h-full absolute top-0 left-0 right-0 bottom-0 -z-10">
        <img src={darkGradient} alt="" className="w-full h-full object-cover" />
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
      <section className="pb-16 pt-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-[#352317] mb-4 ">
              PRODUCT DEMONSTRATION
            </h1>
            <p className="text-base sm:text-lg text-[#000] max-w-3xl mx-auto ">
              Explore our product demonstrations to learn more about our
              products features and capabilities. Watch detailed tutorials and
              guides to make the most of your purchase.
            </p>
          </div>

          {/* Grid Layout for Demonstrations */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {demonstrations.map((demo) => (
              <div
                key={demo.id}
                className="bg-black rounded-lg shadow-md overflow-hidden"
              >
                <div className="border border-white rounded-lg p-4 ">
                  <div className="aspect-w-16 aspect-h-9">
                    {demo.videoUrl && (
                      <iframe
                        className="w-full h-48 sm:h-64"
                        src={demo.videoUrl}
                        title={demo.title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-[#fff] mb-2">
                      {demo.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
};

export default ProductTutorials;
