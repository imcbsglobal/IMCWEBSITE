import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { dbFirestore } from "../../firebaseConfig";

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
    <div>
      <section className="w-full flex justify-center mt-40">
        <div>
          <div className="text-[#fff] text-[50px] textGradient4 mb-5 text-center leading-tight">
            Learn, Implement, Excel{" "}
            <span className="block text-[20px]">
              Step by Step Tutorials to Unlock Your Product's Full Potential
            </span>
          </div>
          <div className="max-w-[1000px] mx-auto text-center text-[#fff] textGradient6">
            Empower yourself or your team with in-depth product tutorials
            designed to simplify learning and enhance efficiency. Our guided
            lessons make it easy to understand complex features, implement
            solutions, and maximize your product usage.
          </div>
        </div>
      </section>
      
      <section className="w-full flex justify-center mt-10">
        <div className="max-w-[1400px] w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="p-4  text-white rounded-2xl shadow-lg border border-white">
              
              {item.videoUrl && (
                <iframe
                 className="w-full h-64"
                  src={item.videoUrl}
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
 
              )}
              <h2 className="text-xl font-semibold mb-2 text-center text-[#fff]">{item.name}</h2>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductVideo;