import React, { useState, useEffect,useRef } from "react";
// import { collection, addDoc, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { dbFirestore } from "../firebaseConfig";
import { Menu } from 'lucide-react';
import logo from "../assets/imclogo1.png";
import { useNavigate } from "react-router-dom";
const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have been logged out.");
    navigate("/");
    setIsSidebarOpen(false);
  };
  // product
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [productName, setProductName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");

  // Fetch products from Firestore
  const fetchProducts = async () => {
    const querySnapshot = await getDocs(collection(dbFirestore, "products"));
    const productList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProducts(productList);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (selectedSection === "manageProductVideo") {
      fetchProducts();
    }
  }, [selectedSection]);

  // Save or Update Product
  const handleSaveProduct = async () => {
    if (!productName || !videoUrl) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      if (editingProductId) {
        const productRef = doc(dbFirestore, "products", editingProductId);
        await updateDoc(productRef, { name: productName, videoUrl });
        alert("Product updated successfully!");
      } else {
        await addDoc(collection(dbFirestore, "products"), {
          name: productName,
          videoUrl,
        });
        alert("Product added successfully!");
      }

      fetchProducts();
      clearForm();
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // Delete Product
  const handleDeleteProduct = async (id) => {
    try {
      await deleteDoc(doc(dbFirestore, "products", id));
      alert("Product deleted successfully!");
      fetchProducts();
    } catch (error) {
      alert("Error deleting product: " + error.message);
    }
  };
  //edit product
  const handleEditProduct = (product) => {
    setProductName(product.name);
    setVideoUrl(product.videoUrl);
    setEditingProductId(product.id);
  };
  //form clear
  const clearForm = () => {
    setProductName("");
    setVideoUrl("");
    setEditingProductId(null);
  };

  // product demostrations
  const [demonstrations, setDemonstrations] = useState([]);
  const [editingDemoId, setEditingDemoId] = useState(null);
  const [demoTitle, setDemoTitle] = useState("");
  const [demoVideoUrl, setDemoVideoUrl] = useState("");

  // Fetch demonstrations from Firestore
  const fetchDemonstrations = async () => {
    const querySnapshot = await getDocs(collection(dbFirestore, "productdemo"));
    const demonstrationList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDemonstrations(demonstrationList);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (selectedSection === "manageProductDemonstration") {
      fetchDemonstrations();
    }
  }, [selectedSection]);

  // Save or Update Demonstration
  const handleSaveDemonstration = async () => {
    if (!demoTitle || !demoVideoUrl) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      if (editingDemoId) {
        const demoRef = doc(dbFirestore, "productdemo", editingDemoId);
        await updateDoc(demoRef, { title: demoTitle, videoUrl: demoVideoUrl });
        alert("Demonstration updated successfully!");
      } else {
        await addDoc(collection(dbFirestore, "productdemo"), {
          title: demoTitle,
          videoUrl: demoVideoUrl,
        });
        alert("Demonstration added successfully!");
      }
      fetchDemonstrations();
      clearDemoForm();
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // Delete Demonstration
  const handleDeleteDemonstration = async (id) => {
    try {
      await deleteDoc(doc(dbFirestore, "productdemo", id));
      alert("Demonstration deleted successfully!");
      fetchDemonstrations();
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  //edit demonstration
  const handleEditDemonstration = (demo) => {
    setDemoTitle(demo.title);
    setDemoVideoUrl(demo.videoUrl);
    setEditingDemoId(demo.id);
  };
  //clear demonstrationform
  const clearDemoForm = () => {
    setDemoTitle("");
    setDemoVideoUrl("");
    setEditingDemoId(null);
  };

  //testimonials

  const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialName, setTestimonialName] = useState("");
  const [testimonialDescription, setTestimonialDescription] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [base64Image, setBase64Image] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [editingTestimonialId, setEditingTestimonialId] = useState(null);
  

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    const querySnapshot = await getDocs(collection(dbFirestore, "testimonials"));
    setTestimonials(
      querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
    setIsSidebarOpen(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500000) { // 500KB limit
        alert("Image size should be less than 500KB");
        return;
      }

      setIsUploading(true);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setBase64Image(reader.result);
        setIsUploading(false);
      };

      reader.onerror = () => {
        alert("Error reading file");
        setIsUploading(false);
      };

      reader.readAsDataURL(file);
    }
    setIsSidebarOpen(false);
  };

  const handleSaveTestimonial = async () => {
    try {
      if (!testimonialName || !testimonialDescription) {
        alert("Please fill in the name and testimonial text");
        return;
      }

      if (!base64Image) {
        alert("Please select an image");
        return;
      }

      const testimonialData = {
        name: testimonialName,
        description: testimonialDescription,
        image: base64Image,
        date: new Date().toISOString(),
      };

      if (editingTestimonialId) {
        const testimonialRef = doc(dbFirestore, "testimonials", editingTestimonialId);
        await setDoc(testimonialRef, testimonialData);
        alert("Testimonial updated successfully");
        clearTestimonialForm();
      } else {
        await addDoc(collection(dbFirestore, "testimonials"), testimonialData);
        alert("Testimonial added successfully");
      }

      fetchTestimonials();
      clearTestimonialForm();
    } catch (error) {
      console.error("Error adding testimonial:", error);
      alert("Error adding testimonial. Please try again.");
    }
    setIsSidebarOpen(false);
  };

  const clearTestimonialForm = () => {
    setTestimonialName("");
    setTestimonialDescription("");
    setImagePreview("");
    setBase64Image("");
    setEditingTestimonialId(null);
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
    setIsSidebarOpen(false);
  };

  const handleEditTestimonial = (testimonial) => {
    if (!testimonial) {
      alert("Invalid testimonial data");
      return;
    }

    setTestimonialName(testimonial.name || "");
    setTestimonialDescription(testimonial.description || "");
    setImagePreview(testimonial.image || "");
    setBase64Image(testimonial.image || "");
    setEditingTestimonialId(testimonial.id || null);
    if (imageInputRef.current) {
      imageInputRef.current.value = ""; // Reset file input for editing
    }
    setIsSidebarOpen(false);
  };

  const handleDeleteTestimonial = async (id) => {
    try {
      await deleteDoc(doc(dbFirestore, "testimonials", id));
      alert("Testimonial deleted successfully!");
      fetchTestimonials();
    } catch (error) {
      alert("Error: " + error.message);
    }
    setIsSidebarOpen(false);
  };

  const imageInputRef = useRef(null);
  const handleSubSectionSelect = (section) => {
    setSelectedSection(section);
    setIsSidebarOpen(false);
  };



  //video testimonials
  // Save or Update Video Testimonial

  const [videoTestimonialName, setVideoTestimonialName] = useState("");
  const [videoTestimonialUrl, setVideoTestimonialUrl] = useState("");
  const [editingVideoTestimonialId, setEditingVideoTestimonialId] = useState(null);
  const [videoTestimonials, setVideoTestimonials] = useState([]);

  const fetchVideoTestimonials = async () => {
    try {
      const querySnapshot = await getDocs(collection(dbFirestore, "videoTestimonials"));
      const testimonials = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setVideoTestimonials(testimonials);
    } catch (error) {
      alert("Error fetching video testimonials: " + error.message);
    }
    setIsSidebarOpen(false);
  };
  
  useEffect(() => {
    fetchVideoTestimonials();
  }, []);

  const handleSaveVideoTestimonial = async () => {
    if (!videoTestimonialName || !videoTestimonialUrl) {
      alert("Please fill out all fields.");
      return;
 
    }

    try {
      const testimonialData = {
        name: videoTestimonialName,
        videoUrl: videoTestimonialUrl,
        date: serverTimestamp(),
      };

      if (editingVideoTestimonialId) {
        await updateDoc(
          doc(dbFirestore, "videoTestimonials", editingVideoTestimonialId),
          testimonialData
        );
        alert("Video testimonial updated successfully!");
      } else {
        await addDoc(
          collection(dbFirestore, "videoTestimonials"),
          testimonialData
        );
        alert("Video testimonial added successfully!");
      }

      fetchVideoTestimonials();
      clearVideoTestimonialForm();
    } catch (error) {
      alert("Error: " + error.message);
    }
    setIsSidebarOpen(false);
  };

  const clearVideoTestimonialForm = () => {
    setVideoTestimonialName("");
    setVideoTestimonialUrl("");
    setEditingVideoTestimonialId(null);
    setIsSidebarOpen(false);
  };

  const handleEditVideoTestimonial = (testimonial) => {
    setVideoTestimonialName(testimonial.name);
    setVideoTestimonialUrl(testimonial.videoUrl);
    setEditingVideoTestimonialId(testimonial.id);
    setIsSidebarOpen(false);
  };

  const handleDeleteVideoTestimonial = async (id) => {
    try {
      await deleteDoc(doc(dbFirestore, "videoTestimonials", id));
      alert("Video testimonial deleted successfully!");
      fetchVideoTestimonials();
    } catch (error) {
      alert("Error: " + error.message);
    }
    setIsSidebarOpen(false);
  };
 

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 


  
  return (
    <div>
      <div className="h-[900px] w-full flex ">
        {/* Left Panel */}
        <div className="md:hidden fixed top-0 left-0 right-0 bg-gray-900 z-30 h-16 flex items-center justify-between px-4 border-b border-gray-700">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="text-white p-2"
        >
          <Menu size={24} />
        </button>
        <img src={logo} alt="logo" className="h-12 w-12" />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-black text-white p-6 border-r border-gray-700 overflow-auto transition-all duration-300 ease-in-out z-20
        ${isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full w-0"} 
        md:translate-x-0 md:w-1/4 md:top-0 md:h-screen`}
      >
        <div className="hidden md:flex w-full h-[60px] items-center justify-center mt-10">
          <img src={logo} alt="logo" className="w-[100px] h-[100px]" />
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-center mt-4 md:mt-10">
          Admin Panel
        </h2>
        
        <ul className="space-y-4 overflow-hidden">
          <li>
            <button
              onClick={() => {
                setSelectedSection("manageProductVideo");
                setIsSidebarOpen(false);
              }}
              className="block w-full p-3 text-left text-lg text-white rounded hover:bg-gray-700"
            >
              Manage Product Video
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                setSelectedSection("manageProductDemonstration");
                setIsSidebarOpen(false);
              }}
              className="block w-full p-3 text-left text-lg text-white rounded hover:bg-gray-700"
            >
              Manage Product Demonstration
            </button>
          </li>
          <li>
            <button
              onClick={() => setIsTestimonialsOpen(!isTestimonialsOpen)}
              className="w-full p-3 text-left text-lg text-white rounded hover:bg-gray-700 flex justify-between items-center"
            >
              <span>Testimonials</span>
              <svg
                className={`w-5 h-5 transition-transform ${
                  isTestimonialsOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isTestimonialsOpen && (
              <div className="ml-4 mt-2 space-y-2">
                <button
                  onClick={() => {
                    setSelectedSection("testimonialList");
                    setIsSidebarOpen(false);
                  }}
                  className="block w-full p-2 text-left text-lg text-white hover:bg-gray-700 rounded"
                >
                  Testimonial List
                </button>
                <button
                  onClick={() => {
                    setSelectedSection("videoTestimonials");
                    setIsSidebarOpen(false);
                  }}
                  className="block w-full p-2 text-left text-lg text-white hover:bg-gray-700 rounded"
                >
                  Video Testimonial List
                </button>
              </div>
            )}
          </li>
          <li>
            <button
              onClick={handleLogout}
              className="w-full p-3 text-white text-lg rounded hover:bg-red-500"
            >
              Logout
            </button>
          </li>
        </ul>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
        {/* Right Panel */}
        <div className="flex-1 md:p-10 bg-black text-white md:ml-[25%] mt-[65px]">
          {selectedSection === "dashboard" && (
            <h1 className="text-lg sm:text-xl md:text-3xl font-bold text-center mt-6 px-4 ">
              Welcome to the Admin Panel
            </h1>
          )}

          {/* Manage Product Video Section */}
          {selectedSection === "manageProductVideo" && (
            <>
              <h2 className="text-2xl md:text-[37px] font-bold mb-4 text-center">
                Manage Product Videos
              </h2>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveProduct();
                }}
                className="space-y-4 flex flex-col items-center w-full px-4 "
              >
                <input
                  type="text"
                  placeholder="Product Name"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full md:w-[500px] p-3 border rounded text-black"
                />
                <input
                  type="text"
                  placeholder="YouTube Video URL"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="w-full md:w-[500px] p-3 border rounded text-black"
                />
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded w-[100px]"
                >
                  {editingProductId ? "Update Product" : "Submit"}
                </button>
                {editingProductId && (
                  <button
                    type="button"
                    className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded"
                    onClick={clearForm}
                  >
                    Cancel Edit
                  </button>
                )}
              </form>

              <h3 className="text-lg md:text-xl font-bold mt-8 text-center">
                Video Product List
              </h3>

              <div className="w-full overflow-x-auto px-4 flex items-center justify-center">
                <table className="md:min-w-[600px] md:w-[900px] mt-4 text-white border-collapse">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="p-2 border">Product Name</th>
                      <th className="p-2 border">Video</th>
                      <th className="p-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product) => (
                      <tr key={product.id} className="bg-gray-700">
                        <td className="p-2 border">{product.name}</td>
                        <td className="p-2 border">
                          {product.videoUrl ? (
                            <iframe
                              className="w-full max-w-[200px] h-[100px]"
                              src={product.videoUrl}
                              title="YouTube Video"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            "No video URL"
                          )}
                        </td>
                        <td className="p-2 border">
                          <button
                            onClick={() => handleEditProduct(product)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded ml-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {selectedSection === "manageProductDemonstration" && (
            <>
              {/* Section Title */}
              <h2 className="text-2xl md:text-[37px] font-bold text-center mt-4">
                Product Demonstration Management
              </h2>

              {/* Form for Adding or Editing Demonstration Videos */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveDemonstration();
                }}
                className="space-y-4 flex flex-col items-center w-full px-4 mt-6"
              >
                {/* Demonstration Title Field */}
                <input
                  type="text"
                  placeholder="Enter Demonstration Title"
                  value={demoTitle}
                  onChange={(e) => setDemoTitle(e.target.value)}
                  className="w-full md:w-[500px] p-3 border rounded text-black"
                />

                {/* Video URL Field */}
                <input
                  type="text"
                  placeholder="Enter YouTube Video URL"
                  value={demoVideoUrl}
                  onChange={(e) => setDemoVideoUrl(e.target.value)}
                  className="w-full md:w-[500px] p-3 border rounded text-black"
                />

                {/* Submit and Cancel Buttons */}
                <div className="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded mb-2 md:mb-0"
                  >
                    {editingDemoId
                      ? "Update Demonstration"
                      : "Add Demonstration"}
                  </button>
                  {editingDemoId && (
                    <button
                      type="button"
                      className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded"
                      onClick={clearDemoForm}
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </form>

              {/* Demonstration Video List Table */}
              <h3 className="text-lg md:text-xl font-bold mt-8 text-center">
                Product Demonstration List
              </h3>

              <div className="w-full overflow-x-auto px-4 flex items-center justify-center">
                <table className="md:min-w-[600px] md:w-[900px] mt-4 text-white border-collapse">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="p-2 border">Title</th>
                      <th className="p-2 border">Video Preview</th>
                      <th className="p-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {demonstrations.map((demo) => (
                      <tr key={demo.id} className="bg-gray-700">
                        <td className="p-2 border">{demo.title}</td>
                        <td className="p-2 border">
                          {demo.videoUrl ? (
                            <iframe
                              className="w-full max-w-[200px] h-[100px]"
                              src={demo.videoUrl}
                              title="Product Demonstration Video"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            "No video available"
                          )}
                        </td>
                        <td className="p-2 border">
                          <button
                            onClick={() => handleEditDemonstration(demo)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteDemonstration(demo.id)}
                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded ml-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

         

          {/* testimonial */}
          {selectedSection === "testimonialList" && (
            <div className="p-2 md:p-6">
              {/* Section Title */}
              <h2 className="text-2xl md:text-[37px] font-bold mb-4 text-center">
                Manage Testimonials
              </h2>

              {/* Form for Adding or Editing Testimonials */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveTestimonial();
                }}
                className="space-y-4 flex flex-col items-center w-full px-4"
              >
                {/* Client Name Field */}
                <input
                  ref={imageInputRef}
                  type="text"
                  placeholder="Client Name"
                  value={testimonialName}
                  onChange={(e) => setTestimonialName(e.target.value)}
                  className="w-full md:w-[500px] p-3 border rounded text-black"
                />

                {/* Testimonial Description Field */}
                <textarea
                  placeholder="Testimonial Description"
                  value={testimonialDescription}
                  onChange={(e) => setTestimonialDescription(e.target.value)}
                  className="w-full md:w-[500px] p-3 border rounded text-black h-32"
                />

                {/* Image Upload Section */}
                <div className="w-full md:w-[500px]">
                  <input
                    type="file"
                    onChange={handleImageChange}
                    accept="image/*"
                    ref={imageInputRef}
                    className="text-white"
                  />
                  {imagePreview && (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="mt-2 max-h-40 rounded"
                    />
                  )}
                </div>

                {/* Submit and Cancel Buttons */}
                <div className="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded mb-2 md:mb-0"
                  >
                    {editingTestimonialId
                      ? "Update Testimonial"
                      : "Add Testimonial"}
                  </button>
                  {editingTestimonialId && (
                    <button
                      type="button"
                      className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded"
                      onClick={clearTestimonialForm}
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </form>

              {/* Testimonials List Title */}
              <h3 className="text-lg md:text-xl font-bold mt-8 text-center">
                Testimonials List
              </h3>

              {/* Responsive Table Wrapper */}
              <div className="md:w-full overflow-x-auto px-4 flex items-center justify-center">
                <table className="md:min-w-[600px] md:w-[900px] mt-4 text-white border-collapse">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="p-2 border">Name</th>
                      <th className="p-2 border">Description</th>
                      <th className="p-2 border">Image</th>
                      <th className="p-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {testimonials.map((testimonial) => (
                      <tr key={testimonial.id} className="bg-gray-700">
                        <td className="p-2 border text-white">
                          {testimonial.name}
                        </td>
                        <td className="p-2 border text-white">
                          {testimonial.description}
                        </td>
                        <td className="p-2 border">
                          {testimonial.image ? (
                            <img
                              src={testimonial.image}
                              alt="Testimonial"
                              className="max-h-20 rounded"
                            />
                          ) : (
                            "No image uploaded"
                          )}
                        </td>
                        <td className="p-2 border flex flex-col md:flex-row items-center justify-center gap-1">
                          <button
                            onClick={() => handleEditTestimonial(testimonial)}
                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded h-8 w-full md:w-auto"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteTestimonial(testimonial.id)
                            }
                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded h-8 w-full md:w-auto mt-1 md:mt-0 md:ml-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* videotestimonials */}
          {selectedSection === "videoTestimonials" && (
            <div className="p-2 md:p-6">
              {/* Section Title */}
              <h2 className="text-2xl md:text-[37px] font-bold mb-4 text-center">
                Manage Video Testimonials
              </h2>

              {/* Video Testimonials Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSaveVideoTestimonial();
                }}
                className="space-y-4 flex flex-col items-center md:w-full px-4"
              >
                {/* Client Name Field */}
                <input
                  type="text"
                  placeholder="Client Name"
                  value={videoTestimonialName}
                  onChange={(e) => setVideoTestimonialName(e.target.value)}
                  className="w-full md:w-[500px] p-3 border rounded text-black"
                />

                {/* YouTube Video URL Field */}
                <input
                  type="text"
                  placeholder="YouTube Video URL"
                  value={videoTestimonialUrl}
                  onChange={(e) => setVideoTestimonialUrl(e.target.value)}
                  className="w-full md:w-[500px] p-3 border rounded text-black"
                />

                {/* Submit and Cancel Buttons */}
                <div className="flex flex-col md:flex-row md:space-x-4 w-full md:w-auto">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded mb-2 md:mb-0"
                  >
                    {editingVideoTestimonialId
                      ? "Update Video Testimonial"
                      : "Add Video Testimonial"}
                  </button>
                  {editingVideoTestimonialId && (
                    <button
                      type="button"
                      className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded"
                      onClick={clearVideoTestimonialForm}
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>
              </form>

              {/* Video Testimonials List */}
              <h3 className="text-lg md:text-xl font-bold mt-8 text-center">
                Video Testimonials List
              </h3>

              {/* Responsive Table Wrapper */}
              <div className="w-full overflow-x-auto px-4 flex items-center justify-center">
                <table className="md:min-w-[600px] md:w-[900px] mt-4 text-white border-collapse">
                  <thead>
                    <tr className="bg-gray-800">
                      <th className="p-2 border">Name</th>
                      <th className="p-2 border">Video</th>
                      <th className="p-2 border">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {videoTestimonials.map((testimonial) => (
                      <tr key={testimonial.id} className="bg-gray-700">
                        <td className="p-2 border">{testimonial.name}</td>
                        <td className="p-2 border">
                          {testimonial.videoUrl ? (
                            <iframe
                              className="w-full md:w-[200px] h-[150px]"
                              src={testimonial.videoUrl}
                              title="YouTube Video"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          ) : (
                            "No video URL"
                          )}
                        </td>
                        <td className="p-2 border flex flex-col md:flex-col items-center justify-center gap-1 ">
                          <button
                            onClick={() =>
                              handleEditVideoTestimonial(testimonial)
                            }
                            className="bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded h-8 w-full md:w-auto"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() =>
                              handleDeleteVideoTestimonial(testimonial.id)
                            }
                            className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded h-8 w-full md:w-auto mt-1 md:mt-0 md:ml-2"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
