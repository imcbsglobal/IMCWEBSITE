import React from 'react'
import { useState } from "react";

import { X } from "lucide-react";
const signin = () => {
    const [isOpen, setIsOpen] = useState(true);
  return (
    isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="w-full max-w-md bg-[#121212] p-8 text-white rounded-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Login</h2>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-6 h-6 text-gray-400 hover:text-white" />
              </button>
            </div>
  
            <p className="text-sm text-gray-400 mb-6">
              Please sign up or login with your details
            </p>
  
            <div className="flex mb-6">
              <button className="w-full py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium mr-2">
                Login
              </button>
              <button className="w-full py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium">
                Sign up
              </button>
            </div>
  
            <button className="w-full py-2 mb-4 flex justify-center items-center bg-white text-black rounded-lg hover:bg-gray-100">
              <img src="https://img.icons8.com/color/24/null/google-logo.png" alt="Google" className="mr-2" />
              Continue with Google
            </button>
  
            <p className="text-center text-sm text-gray-400">Or login with email</p>
          </div>
        </div>
      )
  )
}

export default signin