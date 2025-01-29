import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";
import Footer from "../Footer"

const Restaurants = () => {
  return (
    <div className='pt-[130px] flex flex-col justify-center items-center w-full'>
      <section className='max-w-[1400px] mx-auto bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl w-full rounded-3xl h-[600px] overflow-hidden mb-20'>
        <div className=' md:flex md:justify-center md:items-center overflow-hidden text-[#fff] md:gap-2 rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'>
          <div className='md:w-[60%] w-full h-full mx-auto flex justify-center items-center'>
            <div className='pl-10'>
              <div className='text-[50px] textGradient4 leading-tight mb-5'>Lorem ipsum<span className='block'>ipsum dolor sit amet</span></div>
              <div className='textGradient6 pr-36 mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero eum illo maxime! Atque architecto quibusdam aliquam facere dicta quam fugiat voluptates alias veritatis numquam, velit voluptatibus earum blanditiis, recusandae deserunt.</div>
              <div className='flex items-center gap-10'>
                <div className='px-10 py-3 rounded-3xl border border-[#000000] flex gap-5 items-center textGradient5'>Discover More <FaArrowRightLong/></div>
                <div className='textGradient5'>More</div>
              </div>
            </div>
          </div>
          <div className='md:w-[50%] w-full bg-[#282626] h-full rounded-l-full overflow-hidden'>
            <img src="https://res.cloudinary.com/dqydgc2ky/image/upload/v1736252152/freepik__candid-image-photography-natural-textures-highly-r__44559_hmmpia.jpg" className='w-full h-full object-cover' alt="" />
          </div>
        </div>
      </section>

      <section className='mb-20 max-w-[1400px] mx-auto w-full'>
        <div className='w-full'>
          <div className='md:flex w-full md:justify-center md:items-center md:gap-10'>
            {/* left */}
            <div className='md:w-[50%] h-[500px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
            {/* right */}
            <div className='md:w-[50%]'>
              <div className='text-[#fff] text-[50px] mb-5 textGradient4 leading-tight'>Lorem ipsum <span className='block'>Lorem ipsum dolor</span></div>
              <div className='text-[#fff] textGradient6 mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam veniam ipsa magni voluptatibus facere repudiandae dolorum perspiciatis, debitis excepturi officiis quibusdam accusamus nostrum rem minima aut totam natus odit vero!</div>
              <div>
              <ul className='textGradient6 flex flex-col justify-center gap-5'>
                <div className='bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-xl'>
                  <li className='px-4 py-6 rounded-xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] flex items-center gap-2'><span className='text-xl'><TiTick/></span>Lorem ipsum dolor sit amet consectetur adipisicing elit Ducimus Lorem, ipsum dolor.</li>
                </div>
                <div className='bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-xl'>
                  <li className='px-4 py-6 rounded-xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] flex items-center gap-2'><span className='text-xl'><TiTick/></span>Lorem ipsum dolor sit amet consectetur adipisicing elit Ducimus Lorem, ipsum dolor.</li>
                </div>
                <div className='bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-xl'>
                  <li className='px-4 py-6 rounded-xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] flex items-center gap-2'><span className='text-xl'><TiTick/></span>Lorem ipsum dolor sit amet consectetur adipisicing elit Ducimus Lorem, ipsum dolor.</li>
                </div>
              </ul>
            </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mb-20 max-w-[1400px] mx-auto'>
        <div>
          <div className='flex justify-between items-center mb-10'>
            <div className='text-[50px] text-[#fff] textGradient4 leading-tight md:w-[60%]'>Lorem ipsum <span className='block'>Lorem ipsum dolor</span></div>
            <div className='md:w-[40%] textGradient6 text-[#fff]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis cumque iusto eaque provident dignissimos quo itaque. Reiciendis commodi quaerat nulla hic illo quae, quia, similique vitae quo explicabo cum laboriosam.</div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center w-full gap-5'>
            <div className='w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
            <div className='w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
            <div className='w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
            <div className='w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
            <div className='w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
            <div className='w-full h-[250px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] text-[#fff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-[#fff] py-10 w-full'>
        <Footer/>
      </section>
    </div>
  )
}

export default Restaurants
