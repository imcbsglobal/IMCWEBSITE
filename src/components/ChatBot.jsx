import React, { useState, useRef, useEffect } from 'react';
import { PiChatCircleTextFill } from "react-icons/pi";
import { IoIosArrowBack } from "react-icons/io";
import { MdAttachFile } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import { IoArrowUpOutline } from "react-icons/io5";
import Picker from "@emoji-mart/react";
import imclogo from "../assets/imclogo.png";
import model1 from "../assets/model1.jpg";
import model2 from "../assets/model2.jpg";
import imc from "../assets/imclogo1.png";
import chattingBg from "../assets/chatting-bg.png";
import { IoMdClose } from "react-icons/io";
const GEMINI_API_KEY = 'AIzaSyDPEu2jezJsUuMRuOXKpgQk48F5962O_e4';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';

const ChatBot = ({ openChatx, setOpenChatx }) => {
  // const [openChat, setOpenChat] = useState(false);
  const [showSender, setShowSender] = useState(false);
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [chatHistory, setChatHistory] = useState([
    {
      sender: 'bot',
      message: 'Hello, 👋 How can I help you?',
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState("");
  const fileInputRef = useRef(null);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const processMessageWithGemini = async (userMessage) => {
    try {
      const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text:` ${context}\n\nUser: ${userMessage}`
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topP: 0.8,
            topK: 40,
            maxOutputTokens: 1024,
          },
        })
      });

      if (!response.ok) {
        throw new Error('Failed to process message');
      }

      const data = await response.json();
      const botResponse = data.candidates[0].content.parts[0].text;
      
      // Update context with the conversation
      setContext(prev =>` ${prev}\nUser: ${userMessage}\nAssistant: ${botResponse}`);
      
      return botResponse;
    } catch (error) {
      console.error('Error processing message with Gemini:', error);
      return "I apologize, but I'm having trouble processing your request right now. Please try again later.";
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setMessage(value);
    setShowSender(value.trim() !== "");
  };

  const sendMessage = async () => {
    if (message.trim() === "") return;

    const userMessage = {
      sender: 'user',
      message: message.trim(),
      timestamp: new Date()
    };

    setChatHistory(prev => [...prev, userMessage]);
    setMessage("");
    setShowSender(false);
    setIsTyping(true);

    try {
      const response = await processMessageWithGemini(userMessage.message);
      
      setTimeout(() => {
        setChatHistory(prev => [
          ...prev,
          {
            sender: 'bot',
            message: response,
            timestamp: new Date()
          }
        ]);
        setIsTyping(false);
      }, 1000);
    } catch (error) {
      console.error('Error sending message:', error);
      setChatHistory(prev => [
        ...prev,
        {
          sender: 'bot',
          message: "I apologize, but I'm having trouble responding right now. Please try again later.",
          timestamp: new Date()
        }
      ]);
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const addEmoji = (emoji) => {
    setMessage(prev => {
      const updatedMessage = prev + emoji.native;
      setShowSender(updatedMessage.trim() !== "");
      return updatedMessage;
    });
    setShowEmojiPicker(false);
  };

  // Initialize context with company information
  useEffect(() => {
    setContext(`
      You are a helpful customer service assistant for IMC Business Solutions. Use the following information to answer customer queries:
      my name is IMC BOT
      **Company Overview:**
      IMC Business Solutions is a leading software company in India since 2017, offering a comprehensive management platform and a wide range of IT solutions, including business software, Android/iOS development, web development, hardware services, and IT support. Our primary mission is to bring RITS Software’s innovative products to global markets. We also operate Sysmac, a dedicated division providing hardware solutions and services to our clients.
  
      **Experience and Clients:**
      - 5+ years of experience
      - 20+ skilled professionals
      - 100% customer satisfaction
      - 1500+ clients across various industries
  
      **Products and Services:**
      - **Inventory Management**: Smart inventory management system designed to track and streamline stock levels.
      - **Health Care Management**: Optimizing healthcare delivery by streamlining processes and improving patient care.
      - **Restaurants**: Efficient management and improved customer service for the restaurant industry.
      - **Hospitality**: Creating exceptional guest experiences and enhancing service quality in the hospitality sector.
      - **Institution Management**: Optimizing management and improving efficiency in educational institutions.
  
      **Business Capabilities:**
      We provide tailored business solutions for the following industries:
      - **Retail & Wholesale**: High-quality products and services for individual customers and businesses.
      - **Pharmacies**: IT solutions to optimize inventory management and improve customer service in pharmacies.
      - **Schools & Colleges**: Digital learning environments and campus management solutions.
      - **Hospitals & Clinics**: Patient management and healthcare solutions for medical facilities.
      - **Restaurants & Hotels**: IT solutions to improve customer experiences, order management, and more.
  
      **Core Values:**
      - Custom hardware integration
      - Expert team of professionals
      - Mobile expertise
      - User-friendly designs
      - Robust security frameworks
      - Innovative UI/UX designs
  
      **Always be polite and professional in your responses.**
    `);
  }, []);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please upload only image files.');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const userMessage = {
          sender: 'user',
          message: e.target.result,
          timestamp: new Date(),
          type: 'image'
        };
        setChatHistory(prev => [...prev, userMessage]);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  return (
    <div className="fixed md:relative">
      {/* Chat Icon - Responsive positioning */}
      <div className="flex justify-center items-center relative rounded-full p-2 bg-[#fff] text-[30px] cursor-pointer right-3 bottom-4">
        <PiChatCircleTextFill onClick={() => setOpenChatx(!openChatx)} />
        <span className="text-[10px] font-bold rounded-full bg-[#f00] text-[#fff] absolute -top-2 right-2 w-4 h-4 flex justify-center items-center drop-shadow-lg">
          1
        </span>
      </div>

      {/* Chat Box - Responsive sizing and positioning */}
      {openChatx && (
        <div className="fixed bottom-10  right-3 md:bottom-24 md:right-10 z-[999] w-[350px]  md:w-[400px] h-[600px] md:h-[600px] rounded-3xl  md:rounded-3xl bg-[#fff] overflow-hidden">
          {/* Background Image */}
          <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10">
            <img
              src={chattingBg}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>

          {/* Header - Made more touch-friendly */}
          <div className="p-4 w-full ChatBox flex justify-between items-center">
            <div className="text-[30px] text-[#fff]">
              <IoMdClose
                onClick={() => setOpenChatx(false)}
                className="cursor-pointer text-2xl hover:scale-110 transition-transform"
              />
            </div>
            <div className="w-auto h-[40px]">
              <img
                src={imc}
                alt=""
                className="w-full h-full object-contain drop-shadow-sm"
              />
            </div>
          </div>

          {/* Profile Images - Adjusted for better mobile display */}
          <div className="flex justify-center items-center pt-8 md:pt-14 relative max-w-[200px] mx-auto">
            <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full overflow-hidden absolute left-10 drop-shadow-2xl z-20">
              <img src={imclogo} className="drop-shadow-2xl" alt="" />
            </div>
            <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full overflow-hidden drop-shadow-lg bg-[#fff] absolute left-[80px] md:left-[90px]">
              <img src={model1} alt="" className="w-full h-full object-cover" />
            </div>
            <div className="w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full overflow-hidden bg-[#fff] drop-shadow-lg absolute left-[120px] md:left-[140px]">
              <img
                src={model2}
                className="w-full h-full object-cover rounded-full"
                alt=""
              />
            </div>
          </div>

          {/* Chat Messages - Adjusted spacing and sizing */}
          <div
            ref={chatContainerRef}
            className="h-[350px] md:h-[350px] overflow-y-auto ScrollBar px-4 mt-12 md:mt-16 space-y-4"
          >
            {chatHistory.map((chat, index) => (
              <div
                key={index}
                className={`flex ${
                  chat.sender === "user" ? "justify-end" : "items-start"
                } gap-2`}
              >
                {chat.sender === "bot" && (
                  <div className="w-8 h-8 flex-shrink-0">
                    <img
                      src={imclogo}
                      alt="Logo"
                      className="w-full h-full object-contain"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[80%] md:max-w-[70%] rounded-xl px-3 md:px-4 py-2 ${
                    chat.sender === "user"
                      ? "bg-[#25D366] text-white"
                      : "bg-white"
                  }`}
                >
                  {chat.message}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex items-start gap-2">
                <div className="w-8 h-8">
                  <img
                    src={imclogo}
                    alt="Logo"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="bg-white rounded-xl px-4 py-2">Typing...</div>
              </div>
            )}
          </div>

          {/* Input Area - Made more touch-friendly */}
          <div className="absolute bottom-0 flex justify-center items-center px-2 py-4 w-full ">
            <input
              type="text"
              placeholder="message...."
              value={message}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="px-4 ChatBoxInput py-3 w-full border-none outline-none rounded-3xl ChatBox text-[#fff] font-semibold"
            />
            {/* <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileUpload}
              accept="image/*"
              className="hidden"
            /> */}
            <div className="absolute right-5 flex items-center gap-4 text-2xl text-[#251306] drop-shadow-sm">
              {/* <MdAttachFile
                className=" md:block cursor-pointer"
                onClick={triggerFileInput}
              /> */}
              <MdEmojiEmotions
                onClick={toggleEmojiPicker}
                className="cursor-pointer"
              />
              {showSender && (
                <IoArrowUpOutline
                  className="p-1 text-3xl rounded-full text-[#fff] bg-[#25D366] shadow-sm cursor-pointer"
                  onClick={sendMessage}
                />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Emoji Picker - Adjusted positioning for mobile */}
      {showEmojiPicker && (
        <div className="absolute bottom-16 md:bottom-28 right-2 md:right-5 z-[999]">
          <div className="scale-75 md:scale-100 origin-bottom-right">
            <Picker onEmojiSelect={addEmoji} theme="light" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;