import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";
import Footer from '../Footer';
import darkGradient from "../../assets/darkgradient.jpg";

const ProductVideo = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Scroll to the top of the page on mount
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Fetch product videos from Firestore
    const fetchProductVideos = async () => {
      const querySnapshot = await getDocs(collection(dbFirestore, "products"));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setItems(productList);
    };

    fetchProductVideos();
  }, []);

  return (
    <div className='relative w-full'>
      <div className='w-full absolute top-0 bottom-0 left-0 right-0 -z-10'>
        <img src={darkGradient} alt="" className='w-full h-full object-cover'/>
      </div>
      {/* Heading Section */}
      <section className="w-full flex justify-center px-4 pb-16 pt-32">
        <div>
          <div className="text-[#fff] text-[40px] sm:text-[50px] textGradient4 mb-5 text-center leading-tight">
            Learn, Implement, Excel{" "}
            <span className="block text-[16px] sm:text-[20px]">
              Step by Step Tutorials to Unlock Your Products Full Potential
            </span>
          </div>
          <div className="max-w-[1000px] mx-auto text-center text-[#fff] textGradient6 text-sm sm:text-base">
            Empower yourself or your team with in-depth product tutorials
            designed to simplify learning and enhance efficiency. Our guided
            lessons make it easy to understand complex features, implement
            solutions, and maximize your product usage.
          </div>
        </div>
      </section>

      {/* Tutorials Grid Section */}
      <section className="w-full flex justify-center mt-10 px-4">
        <div className="max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="p-4 text-white rounded-2xl shadow-lg border border-white px-4"
            >
              {/* Video Frame */}
              {item.videoUrl && (
                <iframe
                  className="w-full h-56 sm:h-64"
                  src={item.videoUrl}
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
              <h2 className="text-xl font-semibold mb-2 text-center text-[#fff]">
                {item.name}
              </h2>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-[#fff] py-10 mt-10">
        <Footer />
      </section>
    </div>
  );
};

export default ProductVideo;