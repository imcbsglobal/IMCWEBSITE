import React from 'react'
import Footer from '../Footer'

const Team = () => {
  return (
    <div className='pt-[130px] flex flex-col justify-center items-center w-full'>
      <section className='max-w-[1400px] mx-auto w-full h-[600px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333] rounded-3xl mb-20'>
        <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'>

        </div>
      </section>

      <section className='mb-20 w-full max-w-[1400px] mx-auto'>
        <div className='mb-10'>
          <div className='text-[#fff] textGradient4 text-[50px] text-center leading-tight mb-5'>Lorem ipsum <span className='block'>dolor sit amet consectetur</span></div>
          <div className='textGradient6 max-w-[700px] mx-auto text-center text-[#fff]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam dolor eligendi adipisci. Ad asperiores facilis quisquam repellendus nemo expedita veritatis nisi facere, nihil ipsum itaque omnis dolore id voluptatibus voluptas!</div>
        </div>

        <div className='w-full'>
          <div className='grid grid-cols-3 w-full gap-5'>
            <div className='w-[90%] mx-auto h-[500px] bg-[#fff] rounded-lg'></div>
            <div className='w-[90%] mx-auto h-[500px] bg-[#fff] rounded-lg'></div>
            <div className='w-[90%] mx-auto h-[500px] bg-[#fff] rounded-lg'></div>
            <div className='w-[90%] mx-auto h-[500px] bg-[#fff] rounded-lg'></div>
            <div className='w-[90%] mx-auto h-[500px] bg-[#fff] rounded-lg'></div>
            <div className='w-[90%] mx-auto h-[500px] bg-[#fff] rounded-lg'></div>
          </div>
        </div> 
      </section>

      <section className='w-full bg-[#fff] py-10'>
        <Footer/>
      </section>
    </div>
  )
}

export default Team
