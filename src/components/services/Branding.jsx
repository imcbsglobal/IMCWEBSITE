import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import Footer from '../Footer';

const Branding = () => {
  return (
    <div className='pt-[130px]'>
      <section className='w-full max-w-[1400px] mb-20 mx-auto rounded-3xl bg-[#fff] h-[600px]'>
        <div className='px-6 py-10'>
            <div className='md:w-[50%] flex flex-col justify-center items-start gap-5'>
              <div className='text-[50px] leading-tight textGradient4'>Lorem ipsum<span className='block'>Lorem ipsum dolor</span></div>
              <div className='textGradient6 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam laboriosam, nulla quaerat libero dolore distinctio praesentium saepe, odit minus magni debitis atque quos aut explicabo harum asperiores sunt minima suscipit.</div>
              <div className='flex gap-10 items-center'>
                <div className='flex  justify-center items-center gap-2 px-10 py-3 rounded-3xl bg-[#fff] drop-shadow-md textGradient5 font-bold border'>Discover More <span><IoIosArrowRoundForward/></span></div>
                <div className='textGradient5'>More</div>
              </div>
              <div className='w-full flex gap-10 items-center'>
                <div className='w-full h-[200px] bg-[#9e7373] rounded-3xl'></div>
                <div className='w-full h-[200px] bg-[#9e7373] rounded-3xl'></div>
              </div>
            </div>
            <div></div>
        </div>
      </section>

      <section className='w-full bg-[#fff] py-10'>
        <Footer/>
      </section>
    </div>
  )
}

export default Branding
