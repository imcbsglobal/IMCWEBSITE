import React from 'react'
import digi from "../../assets/digi.png"
import Footer from '../Footer'

const DigitalMarketingSEO = () => {
  return (
    <div className='pt-[150px] flex flex-col justify-center items-center'>
      <section className='max-w-[1400px] mx-auto'>
        <div>
          <div className='text-[#fff] text-[50px] textGradient4 mb-5 text-center leading-tight'>Lorem ipsum dolor sit amet <span className='block'>Digital Marketing</span></div>
          <div className='textGradient6 text-[#fff] text-center max-w-[700px] mb-10 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam suscipit earum maiores architecto magni nam sed delectus! Tempore, corporis quam quod possimus nam quisquam dolores eligendi cumque excepturi explicabo deleniti</div>
        </div>
      </section>

      <section className='mb-20 max-w-[1400px] mx-auto'>
        <div>
          <div className='grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-10'>

            <div className='h-[500px] w-[350px] p-2 rounded-3xl relative lg:pt-10 flex flex-col justify-center items-center SEOBox'>
              <div className='absolute top-0 w-full flex justify-center items-center z-20'>
                <img src={digi} className='w-full h-full object-contain drop-shadow-sm' alt="" />
              </div>
              <div className='w-full h-full bg-[#643d3d] rounded-3xl relative'>
                <div className='w-full bg-[#fff] p-5 z-30 absolute bottom-36 text-center textGradient5 font-bold'>Custom SEO Services</div>
                <div className='absolute bottom-5 textGradient6 text-[#ffff] px-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero illum rerum numquam ea nesciunt alias, ex eligendi natus eius? Dolorem quasi iure amet nihil sequi. Optio tempore id eius?</div>
              </div>
            </div>

            <div className='h-[550px] w-[400px] p-2 rounded-3xl relative pt-10 flex flex-col justify-center items-center SEOBox mt-[150px]'>
              <div className='absolute top-0 w-full flex justify-center items-center z-20'>
                <img src={digi} className='w-full h-full object-contain drop-shadow-sm' alt="" />
              </div>
              <div className='w-full h-full bg-[#643d3d] rounded-3xl relative'>
                <div className='w-full bg-[#fff] p-5 z-30 absolute bottom-36 text-center textGradient5 font-bold'>Custom SEO Services</div>
                <div className='absolute bottom-5 textGradient6 text-[#ffff] px-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero illum rerum numquam ea nesciunt alias, ex eligendi natus eius? Dolorem quasi iure amet nihil sequi. Optio tempore id eius?</div>
              </div>
            </div>

            <div className='h-[500px] w-[350px] p-2 rounded-3xl relative pt-10 flex flex-col justify-center items-center SEOBox'>
              <div className='absolute top-0 w-full flex justify-center items-center z-20'>
                <img src={digi} className='w-full h-full object-contain drop-shadow-sm' alt="" />
              </div>
              <div className='w-full h-full bg-[#643d3d] rounded-3xl relative'>
                <div className='w-full bg-[#fff] p-5 z-30 absolute bottom-36 text-center textGradient5 font-bold'>Custom SEO Services</div>
                <div className='absolute bottom-5 textGradient6 text-[#ffff] px-2 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi libero illum rerum numquam ea nesciunt alias, ex eligendi natus eius? Dolorem quasi iure amet nihil sequi. Optio tempore id eius?</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='mb-20 max-w-[1400px] w-full mx-auto'>
        <div>
          <div className='textGradient4 mb-5 text-[#fff] text-[50px] text-center leading-tight'>How The Digital Works To <span className='block'>Grow Your Business</span></div>
          <div className='text-center max-w-[700px] mx-auto text-[#fff] textGradient6 mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat tenetur doloremque accusantium labore ut alias, dolore nemo voluptas rem in soluta sunt, molestias autem ipsam eos magni, corporis facere? Animi!</div>

          <div className='md:flex justify-center items-center w-full gap-5 max-w-[1000px] mx-auto'>
            <div className='md:w-[50%] h-[500px] w-full pt-20 px-2 lg:px-6'>
              <div className='text-[#fff] textGradient6 mb-5 text-lg'>Always look at the data, before and after, to make sure it's works.</div>
              <div className='w-full h-full'>
                <img className='h-full w-full object-cover' src="https://as2.ftcdn.net/v2/jpg/05/48/14/91/1000_F_548149155_HViZMBVjOOWUmwM7Qf16qMTBvAcL3FiM.jpg" alt="" />
              </div>
            </div>
            <div className='md:w-[50%] h-[500px] px-2 lg:px-6'>
            <div className='text-[#fff] textGradient6 mb-5 text-lg'>Always look at the data, before and after, to make sure it's works.</div>
              <div className='w-full h-full'>
                <img className='h-full w-full object-cover' src="https://as2.ftcdn.net/v2/jpg/05/48/14/91/1000_F_548149155_HViZMBVjOOWUmwM7Qf16qMTBvAcL3FiM.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-20 max-w-[1400px] w-full mx-auto pt-16'>
        <div>
          <div className='flex justify-between w-full mb-10'>
            <div className='textGradient4 text-[50px] md:w-[60%] text-[#fff] leading-tight'>Unlock Your <span className=' block'>Perfect Strategy</span></div>
            <div className='md:w-[40%] text-[#fff] textGradient6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam, labore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, optio! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero accusamus earum quia distinctio veritatis</div>
          </div>
          <div className='flex justify-center items-center gap-5 w-full'>
            <div className='w-[80%] h-[300px] bg-[#fff] rounded-3xl'></div>
            <div className='w-[20%] h-[300px] bg-[#fff] rounded-3xl'></div>
          </div>
        </div>
      </section>

      <section className='w-full bg-[#fff] py-10'>
        <Footer/>
      </section>
    </div>
  )
}

export default DigitalMarketingSEO
