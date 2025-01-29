import React from 'react'

const Testimonials = () => {
  return (
    <div className='overflow-auto'>
      <div className='md:flex md:justify-center grid-cols-1 place-items-center'>
        <div className='flex justify-center items-center p-2 w-[700px] gap-10'>
          <div className='w-[250px] h-[300px] rounded-tl-[40%] bg-[#fff] lg:w-[40%] overflow-hidden'>
            <img src="https://img.freepik.com/free-photo/portrait-handsome-fashion-stylish-hipster-model-dressed-warm-red-sweater-posing-studio_158538-11524.jpg?t=st=1735981596~exp=1735985196~hmac=17b975c57937b9d04f2a87b044f73b6d2617ce2c620e51dfab381372719fc756&w=360" alt="" />
          </div>
          <div className='lg:w-[60%] flex flex-col justify-around h-full gap-10'>
            <div className='textGradient italic'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque reprehenderit voluptate impedit aliquid reiciendis eveniet natus aperiam, error deleniti sunt necessitatibus id eius cupiditate! Aperiam nostrum quasi cum iusto."</div>
            <div className='flex flex-col'>
              <div className='textGradient6 text-[#fff] text-xl'>Jude Billingam</div>
              <div className='textGradient'>Founder of ABCD</div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center p-2 w-[700px] gap-10'>
          <div className='w-[250px] h-[300px] rounded-tl-[40%] bg-[#fff] lg:w-[40%] overflow-hidden'>
            <img src="https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-sexy-modern-man-dressed-elegant-black-suit-fashion-male-posing-studio-dark-background_158538-21659.jpg?t=st=1735981698~exp=1735985298~hmac=46f3e32da88289639b191a92c980f35b5a3a51c8e52b6fdf99432957f0aac512&w=740" alt="" />
          </div>
          <div className='lg:w-[60%] flex flex-col justify-around h-full gap-10'>
            <div className='textGradient italic'>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil itaque reprehenderit voluptate impedit aliquid reiciendis eveniet natus aperiam, error deleniti sunt necessitatibus id eius cupiditate! Aperiam nostrum quasi cum iusto."</div>
            <div className='flex flex-col'>
              <div className='textGradient6 text-[#fff] text-xl'>Jude Billingam</div>
              <div className='textGradient'>Founder of ABCD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
