import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { X, Mail, Lock } from "lucide-react";
import logo from "../assets/imclogo1.png";
import { dbRealtime, dbFirestore } from "../firebaseConfig";
import { ref, push } from "firebase/database";
import { collection, addDoc } from "firebase/firestore";

const CareerApply = ({ openCarrerApply, setOpenCareerApply }) => {
  const navigate = useNavigate();
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "b06ceeff-457c-4782-9c9b-b7d9fcfd633b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Application Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="flex-col fixed py-20 overflow-hidden top-0 bottom-0 right-0 left-0 z-[9999] backdrop-blur-[10px] flex items-center justify-center bg-black/60">
      <div className=" max-w-[900px] ScrollBar w-full bg-gradient-to-r from-[#867d86] via-[#97508e] to-[#500347] overflow-auto p-[1px] bg-[#3c3333]  rounded-2xl">
        <div className="w-full relative bg-[#121212] p-8 text-white rounded-2xl shadow-2xl">
          <div className="absolute right-5 top-5">
            <button
              onClick={() => {
                navigate("/career");
                setOpenCareerApply(!openCarrerApply);
              }}
            >
              <X className="w-6 h-6 text-gray-400 hover:text-white" />
            </button>
          </div>
          <div className="flex justify-center text-center items-center mb-6 mt-5">
            <h2 className="text-3xl font-bold flex justify-center text-center textGradient5">
              Apply Via Mail
            </h2>
          </div>

          <div className="grid grid-cols-1 mb-10 place-items-center md:flex justify-center gap-10 items-center">
            <div className="md:w-[50%] w-full">
              <div className="textGradient6 text-2xl font-semibold mb-2">
                Position :<span className="ml-2">Php Developer</span>
              </div>
              <div className="textGradient6 text-lg mb-2">
                Experience :<span className="ml-2">2 - 4 Year</span>
              </div>
              <div className="textGradient6 text-2xl mb-2 font-semibold">
                Job Role
              </div>
              <div className="text-sm mb-2">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur veniam, excepturi ea, vero accusamus sapiente fugiat
                vel ipsam odit ratione perspiciatis blanditiis dolorem quo omnis
                quibusdam aspernatur error doloremque ut Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Vel, aliquam Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Dicta provident
                maxime doloribus quis in laborum eligendi laboriosam commodi hic
                cumque?
              </div>
              <div className="text-2xl mb-2 textGradient6 font-semibold">
                Skills Required
              </div>
              <div className="text-sm">
                We use latest technologies up to date, and you're welcome to the
                team with highly talented co-workers, just like you. learn,
                practice, grow!
              </div>
            </div>
            <div className="md:w-[50%] w-full h-[400px] rounded-tl-[100px] overflow-hidden rounded-br-3xl">
              <img
                src="https://imageio.forbes.com/specials-images/imageserve/607761fdbfbb256c0b5d68f4/0x0.jpg?format=jpg&amp;height=900&amp;width=1600&amp;fit=bounds"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col justify-center items-center w-full overflow-y-auto">
            <form
              onSubmit={onSubmit}
              className="flex flex-col gap-3 w-full px-5 py-2"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="px-6 py-3 bg-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="px-6 py-3 bg-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                required
                className="px-6 py-3 bg-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                name="location"
                placeholder="Location"
                required
                className="px-6 py-3 bg-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <select name="position" id="" className="px-6 py-3 bg-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500">
                <option disabled selected>Select</option>
                <option value="Python Developer">Python Developer</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="React Developer">React Developer</option>
                <option value="Video Editor">Video Editor</option>
              </select>
              <input
                type="file"
                name="cv"
                required
                className="px-6 py-3 bg-gray-800 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                type="submit"
                className="px-8 py-3 font-medium rounded-xl text-[#fff] bg-purple-600 hover:bg-purple-700"
              >
                Submit
              </button>
            </form>
            <span className="block text-center mt-3">{result}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerApply;
