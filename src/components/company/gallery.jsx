import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { dbFirestore } from '../../firebaseConfig';
import b from '../../assets/b.jpeg'
import Footer from "../Footer";
const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('images');
  const [galleryImages, setGalleryImages] = useState([]);
  const [galleryVideos, setGalleryVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch gallery images from Firestore
  const fetchGalleryImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(dbFirestore, "galleryImages"));
      const images = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setGalleryImages(images);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
    }
  };

  // Fetch gallery videos from Firestore
  const fetchGalleryVideos = async () => {
    try {
      const querySnapshot = await getDocs(collection(dbFirestore, "galleryVideos"));
      const videos = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setGalleryVideos(videos);
    } catch (error) {
      console.error("Error fetching gallery videos:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await Promise.all([fetchGalleryImages(), fetchGalleryVideos()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };
  const [selectedMedia, setSelectedMedia] = useState(null);
const [isModalOpen, setIsModalOpen] = useState(false);

const openPreview = (media, type) => {
  setSelectedMedia({ ...media, type });
  setIsModalOpen(true);
};

const closePreview = () => {
  setIsModalOpen(false);
  setSelectedMedia(null);
};


  return (
    <div className='pt-[60px] overflow-hidden'>
      {/* Hero Banner Section */}
      <section className='relative h-[70vh] mb-16 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900'>
          <div className='absolute inset-0'><img src={b} alt="" className='w-full h-full object-cover' /></div>
          <div className='absolute inset-0 bg-[url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")] opacity-30'></div>
        </div>
        
        <div className='relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4'>
          <div className='mb-6'>
            <h1 className='text-5xl md:text-7xl lg:text-8xl boldText font-bold mb-4 leading-tight'>
              Our Gallery
            </h1>
            <div className='w-24 h-1 bg-white mx-auto mb-6'></div>
            <p className='text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed'>
              Discover the beauty of our work through stunning visuals and captivating stories
            </p>
          </div>
          
          <div className='flex gap-4 mt-8'>
            <button
              onClick={() => setActiveFilter('images')}
              className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:bg-slate-200 ${
                activeFilter === 'images' 
                  ? 'bg-white text-black' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              Images
            </button>
            <button
              onClick={() => setActiveFilter('videos')}
              className={`px-8 py-3 rounded-full text-lg font-medium transition-all duration-300 hover:bg-slate-100 ${
                activeFilter === 'videos' 
                  ? 'bg-white text-black' 
                  : 'bg-white/20 text-white hover:bg-white/10'
              }`}
            >
              Videos
            </button>
          </div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce'>
          <div className='w-6 h-10 border-2 border-white rounded-full flex justify-center'>
            <div className='w-1 h-3 bg-white rounded-full mt-2 animate-pulse'></div>
          </div>
        </div>
      </section>

      {/* Gallery Content Section */}
      <section>
        <div className='max-w-[1400px] mx-auto mb-10 px-4'>
          <div className='md:flex px-2 md:px-0 justify-between w-full gap-5 items-start mb-12'>
            <div className='text-4xl md:text-5xl boldText font-bold leading-tight w-full md:w-[60%] mb-6 md:mb-0'>
              Explore Our Collection
            </div>
            <div className='w-full md:w-[40%] text-lg text-gray-600 leading-relaxed'>
              Browse through our carefully curated collection of images and videos showcasing our finest work, creativity, and dedication to excellence.
            </div>
          </div>
          
          {/* Filter Navigation */}
          <div className="px-2 md:px-0 mb-8">
            <div className="flex gap-1 text-lg">
              <button
                onClick={() => setActiveFilter('images')}
                className={`transition-all duration-300 pb-2 border-b-2 ${
                  activeFilter === 'images' 
                    ? 'text-black font-semibold border-black' 
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                Images ({galleryImages.length})
              </button>
              <span className="text-gray-400 mx-4">/</span>
              <button
                onClick={() => setActiveFilter('videos')}
                className={`transition-all duration-300 pb-2 border-b-2 ${
                  activeFilter === 'videos' 
                    ? 'text-black font-semibold border-black' 
                    : 'text-gray-500 border-transparent hover:text-gray-700'
                }`}
              >
                Videos ({galleryVideos.length})
              </button>
            </div>
          </div>

          {loading ? (
            <div className="flex flex-col justify-center items-center h-64">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500 mb-4"></div>
              <p className="text-gray-500 text-lg">Loading gallery content...</p>
            </div>
          ) : (
            <>
              {/* Gallery - Images */}
              {activeFilter === 'images' && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                  {galleryImages.length > 0 ? (
                    galleryImages.map((image, index) => (
                      <div 
                        key={image.id} 
                        onClick={() => openPreview(image, 'image')}
                        className='w-auto h-auto rounded-xl bg-gray-100 overflow-hidden relative group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'
                        style={{
                          animationDelay: `${index * 0.1}s`
                        }}
                      >
                        <img 
                          src={image.imageUrl} 
                          alt={image.title} 
                          
                          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                          <p className="text-white/80 text-sm">{image.description || 'Beautiful gallery image'}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="col-span-full text-center py-16">
                      <div className="text-gray-400 text-6xl mb-4">📸</div>
                      <p className="text-gray-500 text-xl">No images available yet</p>
                    </div>
                  )}
                </div>
              )}

              {/* Gallery - Videos */}
              {activeFilter === 'videos' && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                  {galleryVideos.length > 0 ? (
                    galleryVideos.map((video, index) => {
                      const videoId = getYouTubeId(video.videoUrl);
                      return (
                        <div 
                          key={video.id} 
                          onClick={() => openPreview(video, 'video')}
                          className='w-auto h-[300px] rounded-xl  bg-gray-100 overflow-hidden relative group transform transition-all duration-300 hover:scale-105 hover:shadow-2xl'
                          style={{
                            animationDelay: `${index * 0.1}s`
                          }}
                        >
                          {videoId ? (
                            <>
                              <iframe
                                className="w-full h-full"
                                src={`https://www.youtube.com/embed/${videoId}`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                              ></iframe>
                              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                                <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
                                <p className="text-white/80 text-sm">{video.description || 'Watch this amazing video'}</p>
                              </div>
                            </>
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-200 text-gray-500">
                              <div className="text-4xl mb-2">⚠️</div>
                              <p className="text-center">Invalid video URL</p>
                            </div>
                          )}
                        </div>
                      );
                    })
                  ) : (
                    <div className="col-span-full text-center py-16">
                      <div className="text-gray-400 text-6xl mb-4">🎬</div>
                      <p className="text-gray-500 text-xl">No videos available yet</p>
                    </div>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      </section>
    {isModalOpen && selectedMedia && (
  <div 
    className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 pt-24"
    onClick={closePreview}
  >
    <div 
      className="relative bg-black rounded-xl overflow-hidden shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button 
        className="absolute top-2 right-2 text-white text-3xl z-50 bg-black p-1 rounded-3xl"
        onClick={closePreview}
      >
        &times;
      </button>

      {selectedMedia.type === 'image' ? (
        <img 
          src={selectedMedia.imageUrl} 
          alt={selectedMedia.title} 
          className="w-auto h-auto max-w-[90vw] max-h-[90vh] object-contain rounded"
        />
      ) : (
        <iframe
          className="w-[90vw] h-[50vw] max-h-[90vh] rounded"
          src={`https://www.youtube.com/embed/${getYouTubeId(selectedMedia.videoUrl)}`}
          title={selectedMedia.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      )}
    </div>
  </div>
)}

 {/* Footer */}
      <section className="py-10 bg-[#fff] w-full pt-32">
        <Footer />
      </section>
    </div>
  );
};

export default Gallery;