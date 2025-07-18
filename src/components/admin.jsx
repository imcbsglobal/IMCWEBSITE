import React, { useState, useEffect, useRef } from "react";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
  setDoc,
  query,
  where,
} from "firebase/firestore";
import { dbFirestore } from "../firebaseConfig";
import { Menu } from "lucide-react";
import logo from "../assets/imclogo1.png";
import { useNavigate } from "react-router-dom";
import logoorg from "../assets/imclogo.png";
import { IoMdVideocam } from "react-icons/io";
import { MdOutlineOndemandVideo } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { BsPersonVideo } from "react-icons/bs";
import { IoBagHandleSharp } from "react-icons/io5";
import { MdOutlineReviews } from "react-icons/md";
import { RiLogoutCircleRLine } from "react-icons/ri";
import {
  MdOutlinePhotoLibrary,
  MdOutlineImage,
  MdOndemandVideo,
} from "react-icons/md";
const AdminPanel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have been logged out.");
    navigate("/login@IMCBSLLP");
    setIsSidebarOpen(false);
  };

  // product
  const [selectedSection, setSelectedSection] = useState("dashboard");
  const [products, setProducts] = useState([]);
  const [editingProductId, setEditingProductId] = useState(null);
  const [productName, setProductName] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [productCategory, setProductCategory] = useState("inventory");

  // Product Image
  const [productImages, setProductImages] = useState([]);
  const [editingProductImageId, setEditingProductImageId] = useState(null);
  const [productImageName, setProductImageName] = useState("");
  const [productImageCategory, setProductImageCategory] = useState("inventory");
  const [productImageUrl, setProductImageUrl] = useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const categories = [
    "TASK",
    "MAGNET",
    "V TASK",
    "STARSTAY",
    "SHADE",
    "DINE",
    "AURIC",
  ];

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

  // Fetch product images from Firestore
  const fetchProductImages = async () => {
    const querySnapshot = await getDocs(
      collection(dbFirestore, "productImages")
    );
    const productImagesList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setProductImages(productImagesList);
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (selectedSection === "manageProductVideo") {
      fetchProducts();
    } else if (selectedSection === "manageProductImage") {
      fetchProductImages();
    }
  }, [selectedSection]);

  // Save or Update Product
  const handleSaveProduct = async () => {
    if (!productName || !videoUrl || !productCategory) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      if (editingProductId) {
        const productRef = doc(dbFirestore, "products", editingProductId);
        await updateDoc(productRef, {
          name: productName,
          videoUrl,
          category: productCategory,
        });
        alert("Product updated successfully!");
      } else {
        await addDoc(collection(dbFirestore, "products"), {
          name: productName,
          videoUrl,
          category: productCategory,
          timestamp: serverTimestamp(),
        });
        alert("Product added successfully!");
      }

      fetchProducts();
      clearForm();
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // Save or Update Product Image
  const handleSaveProductImage = async () => {
    if (!productImageName || !productImageUrl || !productImageCategory) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      if (editingProductImageId) {
        const productImageRef = doc(
          dbFirestore,
          "productImages",
          editingProductImageId
        );
        await updateDoc(productImageRef, {
          name: productImageName,
          imageUrl: productImageUrl,
          category: productImageCategory,
        });
        alert("Product image updated successfully!");
      } else {
        await addDoc(collection(dbFirestore, "productImages"), {
          name: productImageName,
          imageUrl: productImageUrl,
          category: productImageCategory,
          timestamp: serverTimestamp(),
        });
        alert("Product image added successfully!");
      }

      fetchProductImages();
      clearProductImageForm();
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

  // Delete Product Image
  const handleDeleteProductImage = async (id) => {
    try {
      await deleteDoc(doc(dbFirestore, "productImages", id));
      alert("Product image deleted successfully!");
      fetchProductImages();
    } catch (error) {
      alert("Error deleting product image: " + error.message);
    }
  };

  // Edit product
  const handleEditProduct = (product) => {
    setProductName(product.name);
    setVideoUrl(product.videoUrl);
    setProductCategory(product.category || "inventory");
    setEditingProductId(product.id);
  };

  // Edit product image
  const handleEditProductImage = (productImage) => {
    setProductImageName(productImage.name);
    setProductImageUrl(productImage.imageUrl);
    setProductImageCategory(productImage.category || "inventory");
    setImagePreviewUrl(productImage.imageUrl);
    setEditingProductImageId(productImage.id);
  };

  // Form clear
  const clearForm = () => {
    setProductName("");
    setVideoUrl("");
    setProductCategory("");
    setEditingProductId(null);
  };

  // Product Image form clear
  const clearProductImageForm = () => {
    setProductImageName("");
    setProductImageUrl("");
    setProductImageCategory("inventory");
    setImagePreviewUrl("");
    setEditingProductImageId(null);
    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  // Handle Image Upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500000) {
        // 500KB limit
        alert("Image size should be less than 500KB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result);
        setProductImageUrl(reader.result);
      };

      reader.onerror = () => {
        alert("Error reading file");
      };

      reader.readAsDataURL(file);
    }
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

  // Edit demonstration
  const handleEditDemonstration = (demo) => {
    setDemoTitle(demo.title);
    setDemoVideoUrl(demo.videoUrl);
    setEditingDemoId(demo.id);
  };

  // Clear demonstration form
  const clearDemoForm = () => {
    setDemoTitle("");
    setDemoVideoUrl("");
    setEditingDemoId(null);
  };

  // Testimonials
  const [isTestimonialsOpen, setIsTestimonialsOpen] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [testimonialName, setTestimonialName] = useState("");
  const [testimonialDescription, setTestimonialDescription] = useState("");
  const [imagePreview, setImagePreview] = useState("");
  const [base64Image, setBase64Image] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [editingTestimonialId, setEditingTestimonialId] = useState(null);
  const [testimonialPost, setTestimonialPost] = useState(""); // job role
  const [testimonialCompany, setTestimonialCompany] = useState("");

  useEffect(() => {
    if (selectedSection === "testimonialList") {
      fetchTestimonials();
    }
  }, [selectedSection]);

  const fetchTestimonials = async () => {
    const querySnapshot = await getDocs(
      collection(dbFirestore, "testimonials")
    );
    setTestimonials(
      querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
    setIsSidebarOpen(false);
  };

  const handleTestimonialImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500000) {
        // 500KB limit
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
      if (
        !testimonialName ||
        !testimonialDescription ||
        !testimonialPost ||
        !testimonialCompany
      ) {
        alert("Please fill in the name, post, and testimonial text");
        return;
      }

      if (!base64Image) {
        alert("Please select an image");
        return;
      }

      const testimonialData = {
        name: testimonialName,
        post: testimonialPost,
        company: testimonialCompany,
        description: testimonialDescription, // was: testimonialText
        image: base64Image,
        date: new Date().toISOString(),
      };

      if (editingTestimonialId) {
        const testimonialRef = doc(
          dbFirestore,
          "testimonials",
          editingTestimonialId
        );
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
    setTestimonialPost(""); // ✅ clear post
    setTestimonialCompany("");
    setTestimonialDescription("");
    setImagePreview("");
    setBase64Image("");
    setEditingTestimonialId(null);

    if (testimonialImageInputRef.current) {
      testimonialImageInputRef.current.value = "";
    }

    setIsSidebarOpen(false);
  };

  const handleEditTestimonial = (testimonial) => {
    if (!testimonial) {
      alert("Invalid testimonial data");
      return;
    }
    console.log(testimonial);

    setTestimonialName(testimonial.name || "");
    setTestimonialPost(testimonial.post || ""); // ✅ set post
    setTestimonialCompany(testimonial.company || "");
    setTestimonialDescription(testimonial.description || "");
    setImagePreview(testimonial.image || "");
    setBase64Image(testimonial.image || "");
    setEditingTestimonialId(testimonial.id || null);

    if (testimonialImageInputRef.current) {
      testimonialImageInputRef.current.value = "";
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

  const testimonialImageInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const handleSubSectionSelect = (section) => {
    setSelectedSection(section);
    setIsSidebarOpen(false);
  };

  // Video testimonials
  const [videoTestimonialName, setVideoTestimonialName] = useState("");
  const [videoTestimonialUrl, setVideoTestimonialUrl] = useState("");
  const [editingVideoTestimonialId, setEditingVideoTestimonialId] =
    useState(null);
  const [videoTestimonials, setVideoTestimonials] = useState([]);

  const fetchVideoTestimonials = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(dbFirestore, "videoTestimonials")
      );
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
    if (selectedSection === "videoTestimonials") {
      fetchVideoTestimonials();
    }
  }, [selectedSection]);

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

  // CAREER
  // Career Section
  const [isCareerOpen, setIsCareerOpen] = useState(false);
  const [careers, setCareers] = useState([]);
  const [careerTitle, setCareerTitle] = useState("");
  const [careerDescription, setCareerDescription] = useState("");
  const [careerSkills, setCareerSkills] = useState("");
  const [careerExperience, setCareerExperience] = useState("");
  const [editingCareerId, setEditingCareerId] = useState(null);

  useEffect(() => {
    if (selectedSection === "careerList") {
      fetchCareers();
    }
  }, [selectedSection]);

  const fetchCareers = async () => {
    const querySnapshot = await getDocs(collection(dbFirestore, "careers"));
    setCareers(
      querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
    );
    setIsSidebarOpen(false);
  };

  const handleSaveCareer = async () => {
    try {
      if (
        !careerTitle ||
        !careerDescription ||
        !careerSkills ||
        !careerExperience
      ) {
        alert("Please fill in all the fields");
        return;
      }

      const careerData = {
        title: careerTitle,
        description: careerDescription,
        skills: careerSkills.split(",").map((skill) => skill.trim()), // Splitting skills by commas
        experience: careerExperience,
        uploadedDate: editingCareerId
          ? new Date().toISOString()
          : new Date().toISOString(), // Always set the date
      };

      if (editingCareerId) {
        const careerRef = doc(dbFirestore, "careers", editingCareerId);
        await setDoc(careerRef, careerData);
        alert("Career post updated successfully");
        clearCareerForm();
      } else {
        await addDoc(collection(dbFirestore, "careers"), careerData);
        alert("Career post added successfully");
      }

      fetchCareers();
      clearCareerForm();
    } catch (error) {
      console.error("Error adding career post:", error);
      alert("Error adding career post. Please try again.");
    }
    setIsSidebarOpen(false);
  };

  const clearCareerForm = () => {
    setCareerTitle("");
    setCareerDescription("");
    setCareerSkills("");
    setCareerExperience("");
    setEditingCareerId(null);
    setIsSidebarOpen(false);
  };

  const handleEditCareer = (career) => {
    if (!career) {
      alert("Invalid career data");
      return;
    }

    setCareerTitle(career.title || "");
    setCareerDescription(career.description || "");
    setCareerSkills(career.skills ? career.skills.join(", ") : "");
    setCareerExperience(career.experience || "");
    setEditingCareerId(career.id || null);
    setIsSidebarOpen(false);
  };

  const handleDeleteCareer = async (id) => {
    try {
      await deleteDoc(doc(dbFirestore, "careers", id));
      alert("Career post deleted successfully!");
      fetchCareers();
    } catch (error) {
      alert("Error: " + error.message);
    }
    setIsSidebarOpen(false);
  };

  const [testimonialText, setTestimonialText] = useState("");
  const [demoDescription, setDemoDescription] = useState("");
  const careerImageInputRef = useRef(null);
  // const imageInputRef = useRef(null);

  useEffect(() => {
    if (selectedSection === "manageCareer") {
      fetchCareers();
    }
  }, [selectedSection]);

  // GALLERY

  // Gallery
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryVideos, setGalleryVideos] = useState([]);
  const [editingGalleryImageId, setEditingGalleryImageId] = useState(null);
  const [editingGalleryVideoId, setEditingGalleryVideoId] = useState(null);
  const [imageTitle, setImageTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoTitle, setVideoTitle] = useState("");
  // const [videoUrl, setVideoUrl] = useState("");
  // const [imagePreview, setImagePreview] = useState("");
  const galleryImageInputRef = useRef(null);

  useEffect(() => {
    if (selectedSection === "manageGalleryImages") {
      fetchGalleryImages();
    } else if (selectedSection === "manageGalleryVideos") {
      fetchGalleryVideos();
    }
  }, [selectedSection]);
  // Fetch gallery images from Firestore
  const fetchGalleryImages = async () => {
    const querySnapshot = await getDocs(
      collection(dbFirestore, "galleryImages")
    );
    const imagesList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setGalleryImages(imagesList);
  };

  // Fetch gallery videos from Firestore
  const fetchGalleryVideos = async () => {
    const querySnapshot = await getDocs(
      collection(dbFirestore, "galleryVideos")
    );
    const videosList = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setGalleryVideos(videosList);
  };

  // Save or Update Gallcxery Image
  const handleSaveGalleryImage = async () => {
    if (!imageTitle || !imageUrl) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const imageData = {
        title: imageTitle,
        imageUrl: imageUrl,
        date: new Date().toISOString(), // Add current date
        timestamp: serverTimestamp(),
      };

      if (editingGalleryImageId) {
        await updateDoc(
          doc(dbFirestore, "galleryImages", editingGalleryImageId),
          imageData
        );
        alert("Gallery image updated successfully!");
      } else {
        await addDoc(collection(dbFirestore, "galleryImages"), imageData);
        alert("Gallery image added successfully!");
      }

      fetchGalleryImages();
      clearGalleryImageForm();
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // Save or Update Gallery Video
  const handleSaveGalleryVideo = async () => {
    if (!videoTitle || !videoUrl) {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const videoData = {
        title: videoTitle,
        videoUrl: videoUrl,
        timestamp: serverTimestamp(),
      };

      if (editingGalleryVideoId) {
        await updateDoc(
          doc(dbFirestore, "galleryVideos", editingGalleryVideoId),
          videoData
        );
        alert("Gallery video updated successfully!");
      } else {
        await addDoc(collection(dbFirestore, "galleryVideos"), videoData);
        alert("Gallery video added successfully!");
      }

      fetchGalleryVideos();
      clearGalleryVideoForm();
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // Delete Gallery Image
  const handleDeleteGalleryImage = async (id) => {
    try {
      await deleteDoc(doc(dbFirestore, "galleryImages", id));
      alert("Gallery image deleted successfully!");
      fetchGalleryImages();
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // Delete Gallery Video
  const handleDeleteGalleryVideo = async (id) => {
    try {
      await deleteDoc(doc(dbFirestore, "galleryVideos", id));
      alert("Gallery video deleted successfully!");
      fetchGalleryVideos();
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // Edit Gallery Image
  const handleEditGalleryImage = (image) => {
    setImageTitle(image.title);
    setImageUrl(image.imageUrl);
    setImagePreview(image.imageUrl);
    setEditingGalleryImageId(image.id);
  };

  // Edit Gallery Video
  const handleEditGalleryVideo = (video) => {
    setVideoTitle(video.title);
    setVideoUrl(video.videoUrl);
    setEditingGalleryVideoId(video.id);
  };

  // Clear Gallery Image Form
  const clearGalleryImageForm = () => {
    setImageTitle("");
    setImageUrl("");
    setImagePreview("");
    setEditingGalleryImageId(null);
    if (galleryImageInputRef.current) {
      galleryImageInputRef.current.value = "";
    }
  };

  // Clear Gallery Video Form
  const clearGalleryVideoForm = () => {
    setVideoTitle("");
    setVideoUrl("");
    setEditingGalleryVideoId(null);
  };

  // Handle Gallery Image Upload
  const handleGalleryImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 500000) {
        // 500KB limit
        alert("Image size should be less than 500KB");
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setImageUrl(reader.result);
      };

      reader.onerror = () => {
        alert("Error reading file");
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="flex min-h-screen">
        {/* Mobile Header */}
        <div className="lg:hidden fixed top-0 left-0 right-0 z-30 h-16 bg-white shadow-lg border-b border-slate-200 flex items-center justify-between px-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-slate-700 p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          <img src={logo} alt="logo" className="h-10 w-10" />
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-16 left-0 h-[calc(100vh-4rem)] bg-white shadow-xl border-r border-slate-200 overflow-auto transition-all duration-300 ease-in-out z-20
      ${isSidebarOpen ? "translate-x-0 w-80 sm:w-80" : "-translate-x-full w-0"} 
      lg:translate-x-0 lg:w-80 lg:top-0 lg:h-screen`}
        >
          {/* Logo Section */}
          <div className="hidden lg:flex w-full h-24 items-center justify-center pt-6 pb-4 border-b border-slate-100">
            <img
              src={logoorg}
              alt="logo"
              className="w-20 h-20 object-contain"
            />
          </div>

          {/* Admin Panel Title */}
          <div className="px-4 sm:px-6 py-6 border-b border-slate-100">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-800 text-center">
              Admin Panel
            </h2>
          </div>

          {/* Navigation Menu */}
          <nav className="px-3 sm:px-4 py-4 sm:py-6">
            <ul className="space-y-2">
              {/* Manage Product Video */}
              <li>
                <button
                  onClick={() => {
                    setSelectedSection("manageProductVideo");
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full p-3 sm:p-4 text-left text-sm sm:text-base font-medium rounded-lg transition-all duration-200 ${
                    selectedSection === "manageProductVideo"
                      ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-2 text-base sm:text-lg">
                    <span>
                      <IoMdVideocam />
                    </span>
                    <span>Manage Product Video</span>
                  </div>
                </button>
              </li>

              {/* Manage Product Demo */}
              {/* <li>
                <button
                  onClick={() => {
                    setSelectedSection("manageProductDemonstration");
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full p-3 sm:p-4 text-left text-sm sm:text-base font-medium rounded-lg transition-all duration-200 ${
                    selectedSection === "manageProductDemonstration"
                      ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-2 text-base sm:text-lg">
                    <span>
                      <MdOutlineOndemandVideo />
                    </span>
                    <span>Manage Product Demo</span>
                  </div>
                </button>
              </li> */}

              {/* Testimonials Dropdown */}
              <li>
                <button
                  onClick={() => setIsTestimonialsOpen(!isTestimonialsOpen)}
                  className="w-full p-3 sm:p-4 text-left text-sm sm:text-base font-medium text-slate-700 rounded-lg hover:bg-slate-50 hover:text-slate-900 flex justify-between items-center transition-all duration-200"
                >
                  <div className="flex items-center gap-2 text-base sm:text-lg">
                    <span>
                      <MdOutlineReviews />
                    </span>
                    <span>Testimonials</span>
                  </div>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
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

                {/* Testimonials Submenu */}
                <div
                  className={`ml-2 sm:ml-4 mt-2 space-y-1 overflow-hidden transition-all duration-300 ${
                    isTestimonialsOpen
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <button
                    onClick={() => {
                      setSelectedSection("testimonialList");
                      setIsSidebarOpen(false);
                    }}
                    className={`block w-full p-2 sm:p-3 text-left text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                      selectedSection === "testimonialList"
                        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-base sm:text-lg">
                      <span>
                        <MdOutlineRateReview />
                      </span>
                      <span>Text Testimonials</span>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSection("videoTestimonials");
                      setIsSidebarOpen(false);
                    }}
                    className={`block w-full p-2 sm:p-3 text-left text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                      selectedSection === "videoTestimonials"
                        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-base sm:text-lg">
                      <span>
                        <BsPersonVideo />
                      </span>
                      <span>Video Testimonials</span>
                    </div>
                  </button>
                </div>
              </li>

              {/* Manage Career */}
              {/* <li>
                <button
                  onClick={() => {
                    setSelectedSection("manageCareer");
                    setIsSidebarOpen(false);
                  }}
                  className={`w-full p-3 sm:p-4 text-left text-sm sm:text-base font-medium rounded-lg transition-all duration-200 ${
                    selectedSection === "manageCareer"
                      ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                      : "text-slate-700 hover:bg-slate-50 hover:text-slate-900"
                  }`}
                >
                  <div className="flex items-center gap-2 text-base sm:text-lg">
                    <span>
                      <IoBagHandleSharp />
                    </span>
                    <span>Manage Carrier</span>
                  </div>
                </button>
              </li> */}
              
              {/* Gallery Dropdown */}
              <li>
                <button
                  onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                  className="w-full p-3 sm:p-4 text-left text-sm sm:text-base font-medium text-slate-700 rounded-lg hover:bg-slate-50 hover:text-slate-900 flex justify-between items-center transition-all duration-200"
                >
                  <div className="flex items-center gap-2 text-base sm:text-lg">
                    <span>
                      <MdOutlinePhotoLibrary />
                    </span>
                    <span>Gallery</span>
                  </div>
                  <svg
                    className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200 ${
                      isGalleryOpen ? "rotate-180" : ""
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

                {/* Gallery Submenu */}
                <div
                  className={`ml-2 sm:ml-4 mt-2 space-y-1 overflow-hidden transition-all duration-300 ${
                    isGalleryOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <button
                    onClick={() => {
                      setSelectedSection("manageGalleryImages");
                      setIsSidebarOpen(false);
                    }}
                    className={`block w-full p-2 sm:p-3 text-left text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                      selectedSection === "manageGalleryImages"
                        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-base sm:text-lg">
                      <span>
                        <MdOutlineImage />
                      </span>
                      <span>Manage Images</span>
                    </div>
                  </button>
                  <button
                    onClick={() => {
                      setSelectedSection("manageGalleryVideos");
                      setIsSidebarOpen(false);
                    }}
                    className={`block w-full p-2 sm:p-3 text-left text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 ${
                      selectedSection === "manageGalleryVideos"
                        ? "bg-blue-50 text-blue-700 border-l-4 border-blue-500"
                        : "text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    <div className="flex items-center gap-2 text-base sm:text-lg">
                      <span>
                        <MdOndemandVideo />
                      </span>
                      <span>Manage Videos</span>
                    </div>
                  </button>
                </div>
              </li>

              {/* Logout */}
              <li className="pt-4 border-t border-slate-200">
                <button
                  onClick={handleLogout}
                  className="w-full p-3 sm:p-4 text-sm sm:text-base font-medium text-red-600 rounded-lg hover:bg-red-50 hover:text-red-700 transition-all duration-200"
                >
                  <div className="flex items-center gap-2 text-base sm:text-lg">
                    <span>
                      <RiLogoutCircleRLine />
                    </span>
                    <span>Log Out</span>
                  </div>
                </button>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-transparent bg-opacity-50 z-10 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Main Content */}
        <div className="flex-1 lg:ml-80 pt-16 lg:pt-0">
          <div className="p-3 sm:p-4 md:p-6 lg:p-8">
            {/* Dashboard */}
            {selectedSection === "dashboard" && (
              <div className="text-center py-8 sm:py-12">
                <div className="max-w-2xl mx-auto px-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
                    Welcome to Admin Panel
                  </h1>
                  <p className="text-base sm:text-lg text-slate-600">
                    Manage your products, testimonials, and career posts from
                    here.
                  </p>
                </div>
              </div>
            )}

            {/* Manage Product Video Section */}
            {selectedSection === "manageProductVideo" && (
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
                    Manage Product Videos
                  </h2>

                  {/* Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSaveProduct();
                    }}
                    className="space-y-4 sm:space-y-6 max-w-2xl mx-auto mb-8 sm:mb-12"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Product Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        YouTube Video URL
                      </label>
                      <input
                        type="text"
                        placeholder="Enter YouTube video URL"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Category
                      </label>
                      <select
                        value={productCategory}
                        onChange={(e) => setProductCategory(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      >
                        <option value="" disabled className="text-slate-400">
                          Select Category
                        </option>
                        {categories.map((category) => (
                          <option
                            key={category}
                            value={category}
                            className="text-slate-800"
                          >
                            {category.charAt(0).toUpperCase() +
                              category.slice(1)}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2">
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                      >
                        {editingProductId ? "Update Product" : "Add Product"}
                      </button>
                      {editingProductId && (
                        <button
                          type="button"
                          className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                          onClick={clearForm}
                        >
                          Cancel Edit
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Products List - Mobile Cards / Desktop Table */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
                      Product Videos List
                    </h3>

                    {/* Mobile Card View */}
                    <div className="block sm:hidden space-y-4">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                        >
                          <div className="space-y-3">
                            <div>
                              <h4 className="font-semibold text-slate-800 text-base">
                                {product.name}
                              </h4>
                              <span className="inline-block mt-1 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                                {product.category
                                  ? product.category.charAt(0).toUpperCase() +
                                    product.category.slice(1)
                                  : "Inventory"}
                              </span>
                            </div>

                            {product.videoUrl && (
                              <div className="w-full">
                                <iframe
                                  className="w-full h-48 rounded-lg shadow-sm"
                                  src={product.videoUrl}
                                  title="YouTube Video"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            )}

                            <div className="flex gap-2 pt-2">
                              <button
                                onClick={() => handleEditProduct(product)}
                                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-sm"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => handleDeleteProduct(product.id)}
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-sm"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden sm:block overflow-x-auto bg-slate-50 rounded-lg">
                      <table className="w-full min-w-[800px] border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b border-slate-200">
                            <th className="p-3 md:p-4 text-left font-semibold text-slate-700 text-sm md:text-base">
                              Product Name
                            </th>
                            <th className="p-3 md:p-4 text-left font-semibold text-slate-700 text-sm md:text-base">
                              Category
                            </th>
                            <th className="p-3 md:p-4 text-left font-semibold text-slate-700 text-sm md:text-base">
                              Video Preview
                            </th>
                            <th className="p-3 md:p-4 text-left font-semibold text-slate-700 text-sm md:text-base">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {products.map((product) => (
                            <tr
                              key={product.id}
                              className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors"
                            >
                              <td className="p-3 md:p-4 font-medium text-slate-800 text-sm md:text-base">
                                {product.name}
                              </td>
                              <td className="p-3 md:p-4 text-slate-600">
                                <span className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium">
                                  {product.category
                                    ? product.category.charAt(0).toUpperCase() +
                                      product.category.slice(1)
                                    : "Inventory"}
                                </span>
                              </td>
                              <td className="p-3 md:p-4">
                                {product.videoUrl ? (
                                  <iframe
                                    className="w-full max-w-[200px] sm:max-w-[250px] h-[110px] sm:h-[140px] rounded-lg shadow-sm"
                                    src={product.videoUrl}
                                    title="YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  />
                                ) : (
                                  <span className="text-slate-400 italic text-sm">
                                    No video URL
                                  </span>
                                )}
                              </td>
                              <td className="p-3 md:p-4">
                                <div className="flex flex-col lg:flex-row gap-2">
                                  <button
                                    onClick={() => handleEditProduct(product)}
                                    className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-3 sm:px-4 rounded-lg transition-colors text-xs sm:text-sm"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDeleteProduct(product.id)
                                    }
                                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 sm:px-4 rounded-lg transition-colors text-xs sm:text-sm"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Manage Product Demo Section */}
            {selectedSection === "manageProductDemonstration" && (
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
                    Manage Product Demonstrations
                  </h2>

                  {/* Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSaveDemonstration();
                    }}
                    className="space-y-4 sm:space-y-6 max-w-2xl mx-auto mb-8 sm:mb-12"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Demo Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter demonstration title"
                        value={demoTitle}
                        onChange={(e) => setDemoTitle(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        YouTube Video URL
                      </label>
                      <input
                        type="text"
                        placeholder="Enter YouTube video URL"
                        value={demoVideoUrl}
                        onChange={(e) => setDemoVideoUrl(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2">
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                      >
                        {editingDemoId ? "Update Demo" : "Add Demo"}
                      </button>
                      {editingDemoId && (
                        <button
                          type="button"
                          className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                          onClick={clearDemoForm}
                        >
                          Cancel Edit
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Demo List - Mobile Cards / Desktop Table */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
                      Product Demonstrations List
                    </h3>

                    {/* Mobile Card View */}
                    <div className="block sm:hidden space-y-4">
                      {demonstrations.map((demo) => (
                        <div
                          key={demo.id}
                          className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                        >
                          <div className="space-y-3">
                            <h4 className="font-semibold text-slate-800 text-base">
                              {demo.title}
                            </h4>

                            {demo.videoUrl && (
                              <div className="w-full">
                                <iframe
                                  className="w-full h-48 rounded-lg shadow-sm"
                                  src={demo.videoUrl}
                                  title="YouTube Video"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            )}

                            <div className="flex gap-2 pt-2">
                              <button
                                onClick={() => handleEditDemonstration(demo)}
                                className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-sm"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() =>
                                  handleDeleteDemonstration(demo.id)
                                }
                                className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-sm"
                              >
                                Delete
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden sm:block overflow-x-auto bg-slate-50 rounded-lg">
                      <table className="w-full min-w-[700px] border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b border-slate-200">
                            <th className="p-3 md:p-4 text-left font-semibold text-slate-700 text-sm md:text-base">
                              Title
                            </th>
                            <th className="p-3 md:p-4 text-left font-semibold text-slate-700 text-sm md:text-base">
                              Video Preview
                            </th>
                            <th className="p-3 md:p-4 text-left font-semibold text-slate-700 text-sm md:text-base">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {demonstrations.map((demo) => (
                            <tr
                              key={demo.id}
                              className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors"
                            >
                              <td className="p-3 md:p-4 font-medium text-slate-800 text-sm md:text-base">
                                {demo.title}
                              </td>
                              <td className="p-3 md:p-4">
                                {demo.videoUrl ? (
                                  <iframe
                                    className="w-full max-w-[200px] sm:max-w-[250px] h-[110px] sm:h-[140px] rounded-lg shadow-sm"
                                    src={demo.videoUrl}
                                    title="YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  />
                                ) : (
                                  <span className="text-slate-400 italic text-sm">
                                    No video URL
                                  </span>
                                )}
                              </td>
                              <td className="p-3 md:p-4">
                                <div className="flex flex-col lg:flex-row gap-2">
                                  <button
                                    onClick={() =>
                                      handleEditDemonstration(demo)
                                    }
                                    className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-3 sm:px-4 rounded-lg transition-colors text-xs sm:text-sm"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDeleteDemonstration(demo.id)
                                    }
                                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 sm:px-4 rounded-lg transition-colors text-xs sm:text-sm"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Testimonial List Section */}
            {selectedSection === "testimonialList" && (
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
                    Manage Testimonials
                  </h2>

                  {/* Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSaveTestimonial();
                    }}
                    className="space-y-4 sm:space-y-6 max-w-2xl mx-auto mb-8 sm:mb-12"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter person's name"
                        value={testimonialName}
                        onChange={(e) => setTestimonialName(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Job Role / Post
                      </label>
                      <input
                        type="text"
                        placeholder="Enter job role or position"
                        value={testimonialPost}
                        onChange={(e) => setTestimonialPost(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter company name"
                        value={testimonialCompany}
                        onChange={(e) => setTestimonialCompany(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Testimonial Text
                      </label>
                      <textarea
                        placeholder="Enter testimonial content"
                        value={testimonialDescription}
                        onChange={(e) =>
                          setTestimonialDescription(e.target.value)
                        }
                        rows="4"
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Profile Image
                      </label>
                      <input
                        type="file"
                        onChange={handleTestimonialImageChange}
                        accept="image/*"
                        ref={testimonialImageInputRef}
                        className="w-full p-2 sm:p-3 border border-slate-300 rounded-lg text-slate-800 file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-lg file:border-0 file:text-xs sm:file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 text-sm"
                      />
                      <p className="text-slate-500 text-xs sm:text-sm mt-2">
                        Max file size: 500KB
                      </p>
                      {imagePreview && (
                        <div className="mt-4">
                          <p className="text-sm font-medium text-slate-700 mb-2">
                            Image Preview:
                          </p>
                          <img
                            src={imagePreview}
                            alt="Profile Preview"
                            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-slate-200 shadow-md mx-auto sm:mx-0"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-4 pt-4">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                      >
                        {editingTestimonialId
                          ? "Update Testimonial"
                          : "Add Testimonial"}
                      </button>
                      {editingTestimonialId && (
                        <button
                          type="button"
                          className="w-full bg-slate-500 hover:bg-slate-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                          onClick={clearTestimonialForm}
                        >
                          Cancel Edit
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Testimonials List */}
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
                      Testimonials List
                    </h3>

                    {/* Mobile Card View */}
                    <div className="block lg:hidden space-y-4">
                      {testimonials.map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                        >
                          <div className="flex items-start space-x-3 mb-3">
                            {testimonial.image ? (
                              <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-12 h-12 rounded-full object-cover border-2 border-slate-200 flex-shrink-0"
                              />
                            ) : (
                              <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                                <span className="text-slate-400 text-xs">
                                  No Image
                                </span>
                              </div>
                            )}
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-slate-800 text-sm truncate">
                                {testimonial.name}
                              </h4>
                              <p className="text-slate-600 text-xs">
                                {testimonial.post}
                              </p>
                              <p className="text-slate-500 text-xs">
                                {testimonial.company}
                              </p>
                            </div>
                          </div>

                          <div className="mb-3">
                            <p className="text-slate-600 text-sm line-clamp-3">
                              {testimonial.description}
                            </p>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditTestimonial(testimonial)}
                              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-xs"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteTestimonial(testimonial.id)
                              }
                              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-xs"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden lg:block overflow-x-auto bg-slate-50 rounded-lg">
                      <table className="w-full min-w-[900px] border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b border-slate-200">
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Name
                            </th>
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Position
                            </th>
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Company
                            </th>
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Testimonial
                            </th>
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Image
                            </th>
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {testimonials.map((testimonial) => (
                            <tr
                              key={testimonial.id}
                              className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors"
                            >
                              <td className="p-4 font-medium text-slate-800">
                                {testimonial.name}
                              </td>
                              <td className="p-4 text-slate-600">
                                {testimonial.post}
                              </td>
                              <td className="p-4 text-slate-600">
                                {testimonial.company}
                              </td>
                              <td className="p-4 text-slate-600 max-w-xs">
                                <div
                                  className="truncate"
                                  title={testimonial.description}
                                >
                                  {testimonial.description}
                                </div>
                              </td>
                              <td className="p-4">
                                {testimonial.image ? (
                                  <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-slate-200"
                                  />
                                ) : (
                                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                                    <span className="text-slate-400 text-xs">
                                      No Image
                                    </span>
                                  </div>
                                )}
                              </td>
                              <td className="p-4">
                                <div className="flex gap-2">
                                  <button
                                    onClick={() =>
                                      handleEditTestimonial(testimonial)
                                    }
                                    className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDeleteTestimonial(testimonial.id)
                                    }
                                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Video Testimonials Section */}
            {selectedSection === "videoTestimonials" && (
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
                    Manage Video Testimonials
                  </h2>

                  {/* Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSaveVideoTestimonial();
                    }}
                    className="space-y-4 sm:space-y-6 max-w-2xl mx-auto mb-8 sm:mb-12"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter person's name"
                        value={videoTestimonialName}
                        onChange={(e) =>
                          setVideoTestimonialName(e.target.value)
                        }
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        YouTube Video URL
                      </label>
                      <input
                        type="text"
                        placeholder="Enter YouTube video URL"
                        value={videoTestimonialUrl}
                        onChange={(e) => setVideoTestimonialUrl(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-4 pt-4">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                      >
                        {editingVideoTestimonialId
                          ? "Update Testimonial"
                          : "Add Testimonial"}
                      </button>
                      {editingVideoTestimonialId && (
                        <button
                          type="button"
                          className="w-full bg-slate-500 hover:bg-slate-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                          onClick={clearVideoTestimonialForm}
                        >
                          Cancel Edit
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Video Testimonials List */}
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
                      Video Testimonials List
                    </h3>

                    {/* Mobile Card View */}
                    <div className="block lg:hidden space-y-4">
                      {videoTestimonials.map((testimonial) => (
                        <div
                          key={testimonial.id}
                          className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                        >
                          <div className="mb-3">
                            <h4 className="font-semibold text-slate-800 text-sm mb-2">
                              {testimonial.name}
                            </h4>
                            {testimonial.videoUrl ? (
                              <div className="w-full">
                                <iframe
                                  className="w-full h-48 rounded-lg shadow-sm"
                                  src={testimonial.videoUrl}
                                  title="YouTube Video"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowFullScreen
                                />
                              </div>
                            ) : (
                              <div className="w-full h-48 bg-slate-200 rounded-lg flex items-center justify-center">
                                <span className="text-slate-400 italic">
                                  No video URL
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="flex gap-2 mt-3">
                            <button
                              onClick={() =>
                                handleEditVideoTestimonial(testimonial)
                              }
                              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-xs"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() =>
                                handleDeleteVideoTestimonial(testimonial.id)
                              }
                              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-xs"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden lg:block overflow-x-auto bg-slate-50 rounded-lg">
                      <table className="w-full min-w-[700px] border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b border-slate-200">
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Name
                            </th>
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Video Preview
                            </th>
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {videoTestimonials.map((testimonial) => (
                            <tr
                              key={testimonial.id}
                              className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors"
                            >
                              <td className="p-4 font-medium text-slate-800">
                                {testimonial.name}
                              </td>
                              <td className="p-4">
                                {testimonial.videoUrl ? (
                                  <iframe
                                    className="w-full max-w-[250px] h-[140px] rounded-lg shadow-sm"
                                    src={testimonial.videoUrl}
                                    title="YouTube Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  />
                                ) : (
                                  <span className="text-slate-400 italic">
                                    No video URL
                                  </span>
                                )}
                              </td>
                              <td className="p-4">
                                <div className="flex gap-2">
                                  <button
                                    onClick={() =>
                                      handleEditVideoTestimonial(testimonial)
                                    }
                                    className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDeleteVideoTestimonial(
                                        testimonial.id
                                      )
                                    }
                                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Manage Career Section */}
            {selectedSection === "manageCareer" && (
              <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
                    Manage Career Posts
                  </h2>

                  {/* Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSaveCareer();
                    }}
                    className="space-y-4 sm:space-y-6 max-w-2xl mx-auto mb-8 sm:mb-12"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Post Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter job post title"
                        value={careerTitle}
                        onChange={(e) => setCareerTitle(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Job Description
                      </label>
                      <textarea
                        placeholder="Enter detailed job description"
                        value={careerDescription}
                        onChange={(e) => setCareerDescription(e.target.value)}
                        rows="4"
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Required Skills
                      </label>
                      <input
                        type="text"
                        placeholder="Enter skills separated by commas (e.g., React, Node.js, JavaScript)"
                        value={careerSkills}
                        onChange={(e) => setCareerSkills(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                      <p className="text-slate-500 text-xs sm:text-sm mt-1">
                        Separate multiple skills with commas
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Experience Required
                      </label>
                      <input
                        type="text"
                        placeholder="e.g., 2-3 years, Entry level, Senior level"
                        value={careerExperience}
                        onChange={(e) => setCareerExperience(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div className="flex flex-col gap-3 sm:gap-4 pt-4">
                      <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                      >
                        {editingCareerId
                          ? "Update Career Post"
                          : "Add Career Post"}
                      </button>
                      {editingCareerId && (
                        <button
                          type="button"
                          className="w-full bg-slate-500 hover:bg-slate-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                          onClick={clearCareerForm}
                        >
                          Cancel Edit
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Career Posts List */}
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
                      Career Posts List
                    </h3>

                    {/* Mobile Card View */}
                    <div className="block xl:hidden space-y-4">
                      {careers.map((career) => (
                        <div
                          key={career.id}
                          className="bg-slate-50 rounded-lg p-4 border border-slate-200"
                        >
                          <div className="mb-3">
                            <h4 className="font-semibold text-slate-800 text-sm mb-1">
                              {career.title}
                            </h4>
                            <p className="text-slate-600 text-xs mb-2 line-clamp-2">
                              {career.description}
                            </p>

                            <div className="mb-2">
                              <div className="flex flex-wrap gap-1 mb-2">
                                {career.skills
                                  .slice(0, 2)
                                  .map((skill, index) => (
                                    <span
                                      key={index}
                                      className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                                    >
                                      {skill.trim()}
                                    </span>
                                  ))}
                                {career.skills.length > 2 && (
                                  <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                                    +{career.skills.length - 2} more
                                  </span>
                                )}
                              </div>

                              <div className="flex items-center justify-between text-xs text-slate-500">
                                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full font-medium">
                                  {career.experience}
                                </span>
                                <span>
                                  {new Date(
                                    career.uploadedDate
                                  ).toLocaleDateString("en-US", {
                                    month: "short",
                                    day: "numeric",
                                    year: "2-digit",
                                  })}
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditCareer(career)}
                              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-xs"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteCareer(career.id)}
                              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-xs"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Desktop Table View */}
                    <div className="hidden xl:block overflow-x-auto bg-slate-50 rounded-lg">
                      <table className="w-full min-w-[1000px] border-collapse">
                        <thead>
                          <tr className="bg-slate-100 border-b border-slate-200">
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Post Title
                            </th>
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Description
                            </th>
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Skills
                            </th>
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Experience
                            </th>
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Posted Date
                            </th>
                            <th className="p-4 text-left font-semibold text-slate-700">
                              Actions
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {careers.map((career) => (
                            <tr
                              key={career.id}
                              className="bg-white border-b border-slate-100 hover:bg-slate-50 transition-colors"
                            >
                              <td className="p-4 font-medium text-slate-800">
                                {career.title}
                              </td>
                              <td className="p-4 text-slate-600 max-w-xs">
                                <div
                                  className="truncate"
                                  title={career.description}
                                >
                                  {career.description}
                                </div>
                              </td>
                              <td className="p-4 text-slate-600">
                                <div className="flex flex-wrap gap-1">
                                  {career.skills
                                    .slice(0, 3)
                                    .map((skill, index) => (
                                      <span
                                        key={index}
                                        className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium"
                                      >
                                        {skill.trim()}
                                      </span>
                                    ))}
                                  {career.skills.length > 3 && (
                                    <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                                      +{career.skills.length - 3} more
                                    </span>
                                  )}
                                </div>
                              </td>
                              <td className="p-4 text-slate-600">
                                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                                  {career.experience}
                                </span>
                              </td>
                              <td className="p-4 text-slate-600">
                                {new Date(
                                  career.uploadedDate
                                ).toLocaleDateString("en-US", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                })}
                              </td>
                              <td className="p-4">
                                <div className="flex gap-2">
                                  <button
                                    onClick={() => handleEditCareer(career)}
                                    className="bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleDeleteCareer(career.id)
                                    }
                                    className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-sm"
                                  >
                                    Delete
                                  </button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Manage Gallery Images Section */}
            {selectedSection === "manageGalleryImages" && (
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
                    Manage Gallery Images
                  </h2>

                  {/* Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSaveGalleryImage();
                    }}
                    className="space-y-4 sm:space-y-6 max-w-2xl mx-auto mb-8 sm:mb-12"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Image Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter image title"
                        value={imageTitle}
                        onChange={(e) => setImageTitle(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Image Upload
                      </label>
                      <input
                        type="file"
                        onChange={handleGalleryImageChange}
                        accept="image/*"
                        ref={galleryImageInputRef}
                        className="w-full p-2 sm:p-3 border border-slate-300 rounded-lg text-slate-800 file:mr-2 sm:file:mr-4 file:py-1 sm:file:py-2 file:px-2 sm:file:px-4 file:rounded-lg file:border-0 file:text-xs sm:file:text-sm file:font-medium file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 text-sm"
                      />
                      <p className="text-slate-500 text-xs sm:text-sm mt-2">
                        Max file size: 500KB
                      </p>
                      {imagePreview && (
                        <div className="mt-4">
                          <p className="text-sm font-medium text-slate-700 mb-2">
                            Image Preview:
                          </p>
                          <img
                            src={imagePreview}
                            alt="Preview"
                            className="w-32 h-32 object-contain rounded-lg border border-slate-200"
                          />
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2">
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                      >
                        {editingGalleryImageId ? "Update Image" : "Add Image"}
                      </button>
                      {editingGalleryImageId && (
                        <button
                          type="button"
                          className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                          onClick={clearGalleryImageForm}
                        >
                          Cancel Edit
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Gallery Images List */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
                      Gallery Images List
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {galleryImages.map((image) => (
                        <div
                          key={image.id}
                          className="bg-slate-50 rounded-lg p-3 border border-slate-200"
                        >
                          <div className="mb-3">
                            <h4 className="font-semibold text-slate-800 text-sm mb-2">
                              {image.title}
                            </h4>
                            <img
                              src={image.imageUrl}
                              alt={image.title}
                              className="w-full h-40 object-cover rounded-lg"
                            />
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditGalleryImage(image)}
                              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-xs"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteGalleryImage(image.id)}
                              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-xs"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Manage Gallery Videos Section */}
            {selectedSection === "manageGalleryVideos" && (
              <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-4 sm:p-6 lg:p-8">
                  <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-slate-800 mb-6 sm:mb-8 text-center">
                    Manage Gallery Videos
                  </h2>

                  {/* Form */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSaveGalleryVideo();
                    }}
                    className="space-y-4 sm:space-y-6 max-w-2xl mx-auto mb-8 sm:mb-12"
                  >
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Video Title
                      </label>
                      <input
                        type="text"
                        placeholder="Enter video title"
                        value={videoTitle}
                        onChange={(e) => setVideoTitle(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        YouTube Video URL
                      </label>
                      <input
                        type="text"
                        placeholder="Enter YouTube video URL"
                        value={videoUrl}
                        onChange={(e) => setVideoUrl(e.target.value)}
                        className="w-full p-3 sm:p-4 border border-slate-300 rounded-lg text-slate-800 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm sm:text-base"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-2">
                      <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                      >
                        {editingGalleryVideoId ? "Update Video" : "Add Video"}
                      </button>
                      {editingGalleryVideoId && (
                        <button
                          type="button"
                          className="bg-slate-500 hover:bg-slate-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors shadow-md text-sm sm:text-base"
                          onClick={clearGalleryVideoForm}
                        >
                          Cancel Edit
                        </button>
                      )}
                    </div>
                  </form>

                  {/* Gallery Videos List */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 mb-4 sm:mb-6 text-center">
                      Gallery Videos List
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {galleryVideos.map((video) => (
                        <div
                          key={video.id}
                          className="bg-slate-50 rounded-lg p-3 border border-slate-200"
                        >
                          <div className="mb-3">
                            <h4 className="font-semibold text-slate-800 text-sm mb-2">
                              {video.title}
                            </h4>
                            <iframe
                              className="w-full h-48 rounded-lg shadow-sm"
                              src={video.videoUrl}
                              title="YouTube Video"
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleEditGalleryVideo(video)}
                              className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-xs"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDeleteGalleryVideo(video.id)}
                              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-3 rounded-lg transition-colors text-xs"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
