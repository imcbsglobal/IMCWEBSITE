import React from 'react'
import Footer from '../Footer'
import about from "../../assets/about.jpg"


const About = () => {
  return (
    <div className='pt-[150px] flex flex-col justify-center items-center w-full'>
      <section className='max-w-[1400px] w-full mx-auto mb-20'>
        <div className='w-full'>
          <div className='text-[#fff] text-[50px] mb-5 textGradient4 text-center leading-tight'>Lorem ipsum dolor sit amet <span className='block'>Lorem, ipsum</span></div>
          <div className='text-[#fff] max-w-[700px] mb-10 mx-auto px-2 textGradient6 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda ratione quibusdam, quae odit harum asperiores nesciunt nulla atque omnis recusandae tempore magni perspiciatis odio impedit! Qui ducimus voluptate sint similique?</div>
          <div className='h-[600px] w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-3xl'>
            <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] overflow-hidden'>
              {/* <img src={about} alt="" className='w-full h-full object-cover'/> */}
            </div>
          </div>
        </div>
      </section>

      <section className='py-10 bg-[#fff] w-full'>
        <Footer/>
      </section>
    </div>
  )
}

export default About
