import React,{useState} from 'react'
import { PiChatCircleTextFill } from "react-icons/pi";
import logo from "../assets/logo.png"
import { IoIosArrowBack } from "react-icons/io";
import imclogo from "../assets/imclogo.png"
import model1 from "../assets/model1.jpg"
import model2 from "../assets/model2.jpg"
import imc from "../assets/imc.png"
import { IoHandRight } from "react-icons/io5";
import { MdAttachFile } from "react-icons/md";
import { MdEmojiEmotions } from "react-icons/md";
import chattingBg from "../assets/chatting-bg.png"
import { IoSend } from "react-icons/io5";
import Picker from "@emoji-mart/react";
import { IoArrowUpOutline } from "react-icons/io5";

const ChatBot = () => {

  const [ openChat, setOpenChat ] = useState(false)
  const [showSender, setShowSender] = useState(false); // State for showing the IoSend icon
  const [message, setMessage] = useState(""); // State for the input value
  const [showEmojiPicker, setShowEmojiPicker] = useState(false); // State for showing emoji picker

  const handleInputChange = (e) => {
    const value = e.target.value;
    setMessage(value); // Update the message state
    setShowSender(value.trim() !== ""); // Show IoSend only if there's input
  };

  const sendMessage = () => {
    // Logic for sending the message
    console.log("Message sent:", message);

    // Clear the input and hide IoSend
    setMessage("");
    setShowSender(false);
  };

  const toggleEmojiPicker = () => {
    setShowEmojiPicker(!showEmojiPicker);
  };

  const addEmoji = (emoji) => {
    setMessage((prev) => {
      const updatedMessage = prev + emoji.native; // Append the emoji to the message
      setShowSender(updatedMessage.trim() !== ""); // Update showSender based on the new message
      return updatedMessage;
    });
  };

  return (
    <div className="">
      {/* Chat Icon */}
      <div className="flex justify-center items-center relative rounded-full p-2 bg-[#fff] text-[30px] cursor-pointer">
        <PiChatCircleTextFill onClick={()=>setOpenChat(!openChat)}/>
        <span className="text-[10px] font-bold rounded-full bg-[#f00] text-[#fff] absolute -top-2 right-2 w-4 h-4  flex justify-center items-center drop-shadow-lg">
          1
        </span>
      </div>

      {/* Chat Box */}
      {openChat && (
        <div className="fixed bottom-24 z-[998] w-[400px] h-[600px] rounded-3xl bg-[#fff] right-10 overflow-hidden">
        <div className=" absolute top-0 bottom-0 left-0 right-0 w-full h-full -z-10">
          <img src={chattingBg} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="p-2 w-full ChatBox px-4 flex justify-between items-center">
          <div className="text-[30px] text-[#fff]">
            <IoIosArrowBack />
          </div>
          <div className="w-auto h-[40px]">
            <img
              src={imc}
              alt=""
              className="w-full h-full object-contain drop-shadow-sm"
            />
          </div>
        </div>
        <div className="flex justify-center items-center pt-14 relative max-w-[200px] mx-auto">
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden absolute left-10 drop-shadow-2xl z-20">
            <img src={imclogo} className="drop-shadow-2xl" alt="" />
          </div>
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden drop-shadow-lg bg-[#fff] absolute left-[90px]">
            <img src={model1} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-[60px] h-[60px] rounded-full overflow-hidden bg-[#fff] drop-shadow-lg absolute left-[140px]">
            <img
              src={model2}
              className="w-full h-full object-cover rounded-full"
              alt=""
            />
          </div>
        </div>

        {/* chats */}
        <div className="w-full flex pt-[60px] px-4 gap-2 items-center">
          {/* Logo Section */}
          <div className="w-auto h-[40px] flex-shrink-0">
            <img
              src={imclogo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Chat Section */}
          <div className="bg-[#ffffff] rounded-xl drop-shadow-sm leading-tight px-4 py-2 flex items-center gap-2 flex-wrap">
            Hello, <IoHandRight className='text-[#fae242]'/> How can I help you?
          </div>
        </div>

        {/* Sending Message */}
        <div className="absolute bottom-0 flex justify-center items-center px-2 py-3 w-full">
          <input
            type="text"
            placeholder="message...."
            value={message} // Bind input value to the message state
            onChange={handleInputChange} // Handle input changes
            className="px-4 ChatBoxInput py-3 w-full border-none outline-none rounded-3xl ChatBox text-[#fff] font-semibold"
          />
          <div className="absolute right-5 flex items-center gap-3 text-2xl text-[#251306] drop-shadow-sm">
            <MdAttachFile />
            <MdEmojiEmotions onClick={toggleEmojiPicker} className="cursor-pointer" />
            {showSender && (
              <IoArrowUpOutline
                className="p-1 text-3xl rounded-full text-[#fff] bg-[#25D366] shadow-sm cursor-pointer"
                onClick={sendMessage} // Trigger sendMessage on click
              />
            )}
          </div>
        </div>
      </div>
      )}
      {showEmojiPicker && (
        <div className="absolute bottom-28 right-5 z-[999]">
          <Picker onEmojiSelect={addEmoji} theme="light" className="h-full" />
        </div>
      )}
    </div>
  );
}

export default ChatBot
