import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaRocketchat } from "react-icons/fa";
import ChatBot from '../ChatBot';

const QuestionChatBoats = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center relative'>
      <div className=' fixed bottom-10 z-[999] right-10'>
        <ChatBot/>
      </div>
      <section className='w-full max-w-[1400px] mx-auto flex flex-col justify-center items-center h-screen mb-20'>
        <div className=''>
        <div className='w-full flex justify-center items-center mb-5'>
            <div className='px-2 py-2 flex justify-center items-center rounded-full backdrop-blur-3xl gap-3 bg-[#ffffff3c] border'>
              <div className='px-8 py-1 text-sm textGradient7 font-semibold rounded-3xl bg-[#ff6106] text-[#fff]'>New</div>
              <div className='textGradient6 text-[#fff]'>AI can now answer chats for you</div>
            </div>
          </div>
          <div className='text-[50px] text-[#fff] textGradient4 leading-tight text-center mb-5'>Lorem ipsum <span className='block'>Lorem ipsum Lorem</span></div>
          <div className='text-center text-[#fff] max-w-[1000px] mx-auto mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique id nisi quos libero beatae illum provident ipsam, temporibus ipsum odio eligendi ullam assumenda, inventore dolor error laborum sed corrupti totam?
          Nemo velit adipisci alias, cupiditate tempore repudiandae aspernatur? Inventore unde fugit laudantium at, saepe fugiat voluptatem commodi tenetur</div>
          <div className='w-full flex justify-center items-center gap-5'>
            <button className='px-10 py-3 rounded-full bg-[#fff] font-semibold flex items-center gap-2'>Get Started <span><FaArrowRightLong/></span></button>
            <button className='px-10 py-3 rounded-full bg-[#fff] font-semibold flex items-center gap-2'>Chat Now <span className='text-[#000000]'><FaRocketchat/></span></button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuestionChatBoats
