import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { dbFirestore } from "../firebaseConfig";

const CareerApply = ({ openCarrerApply, setOpenCareerApply, jobDetails }) => {
  const initialFormState = {
    name: "",
    email: "",
    phone: "",
    resume: null,
    coverLetter: "",
    position: jobDetails?.title || "General Application",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    // In a production app, you would handle file upload to storage
    setFormData((prev) => ({
      ...prev,
      resume: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Typically you would upload the resume to Firebase Storage first
      // and get a download URL to store in the application record
      
      // For now, just store the application details without the file
      const applicationData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        coverLetter: formData.coverLetter,
        position: formData.position,
        resumeFileName: formData.resume ? formData.resume.name : "No resume attached",
        appliedAt: serverTimestamp(),
        jobId: jobDetails?.id || null,
      };

      await addDoc(collection(dbFirestore, "applications"), applicationData);
      
      setSubmitStatus({
        submitted: true,
        success: true,
        message: "Your application has been submitted successfully!",
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        if (setOpenCareerApply) {
          setOpenCareerApply(false);
        }
      }, 3000);
      
    } catch (error) {
      console.error("Error submitting application:", error);
      setSubmitStatus({
        submitted: true,
        success: false,
        message: "There was an error submitting your application. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-[#1a1a1a] rounded-xl p-6 max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">
            Apply for: {jobDetails?.title || "Position at IMC"}
          </h2>
          <button
            onClick={() => setOpenCareerApply(false)}
            className="text-gray-400 hover:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {submitStatus.submitted ? (
          <div className={`p-4 rounded-lg mb-4 ${submitStatus.success ? 'bg-green-800' : 'bg-red-800'}`}>
            <p className="text-white">{submitStatus.message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {jobDetails && (
              <div className="mb-4 p-3 bg-[#ffffff11] rounded-lg">
                <p className="text-white text-sm mb-1">
                  <span className="font-semibold">Position:</span> {jobDetails.title}
                </p>
                <p className="text-white text-sm mb-1">
                  <span className="font-semibold">Experience Required:</span> {jobDetails.experience}
                </p>
                {jobDetails.skills && (
                  <div className="text-white text-sm">
                    <span className="font-semibold">Required Skills:</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {jobDetails.skills.map((skill, index) => (
                        <span key={index} className="bg-[#ffffff22] px-2 py-1 text-xs rounded-md">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-white mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-3 py-2 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white mb-1">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-3 py-2 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-white mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-3 py-2 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="resume" className="block text-white mb-1">
                Upload Resume (PDF, DOC, DOCX) *
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                required
                accept=".pdf,.doc,.docx"
                className="w-full px-3 py-2 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={handleFileChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="coverLetter" className="block text-white mb-1">
                Cover Letter (Optional)
              </label>
              <textarea
                id="coverLetter"
                name="coverLetter"
                rows="4"
                className="w-full px-3 py-2 bg-[#333] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={formData.coverLetter}
                onChange={handleChange}
                placeholder="Tell us why you're interested in this position..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 bg-gradient-to-r from-[#4776E6] to-[#8E54E9] text-white rounded-lg transition-all ${
                loading ? "opacity-70" : "hover:opacity-90"
              }`}
            >
              {loading ? "Submitting..." : "Submit Application"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default CareerApply;