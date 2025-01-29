import React from 'react'

const GoalsMission = () => {
  return (
    <div className='pt-[150px] flex flex-col justify-center items-center w-full'>
      <section className='max-w-[1400px] mx-auto w-full mb-10'>
        <div>
          <div className='text-[50px] textGradient4 text-[#fff] text-center leading-tight mb-5'>Lorem ipsum dolor <span className='block'>Lorem, ipsum dolor Lorem</span></div>
          <div className='text-[#fff] max-w-[900px] mx-auto text-center textGradient6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, fugiat. Architecto illum necessitatibus ullam quibusdam rerum perspiciatis non, maxime minus laborum ipsum nihil, suscipit magnam aliquid cum saepe iusto dolores.</div>
        </div>
      </section>

      <section className='w-full max-w-[1400px] mx-auto mb-20'>
        <div>
          <div className='grid grid-cols-12 place-items-center gap-3'>
            {/* Left */}
            <div className=' col-span-6 w-full flex flex-col gap-3'>
              <div className='w-full h-[200px] bg-[#fff] rounded-3xl'></div>
              <div className='grid grid-cols-12 w-full gap-3'>
                <div className='col-span-6 flex flex-col gap-3'>
                  <div className='flex w-full bg-[#fff] rounded-3xl h-[100px]'></div>
                  <div className='w-full h-[200px] bg-[#fff] rounded-3xl'></div>
                </div>
                <div className='w-full h-[310px] col-span-6 bg-[#fff] rounded-3xl'></div>
              </div>
            </div>
            {/* Right */}
            <div className='col-span-6 w-full'>
              <div className='flex flex-col gap-3'>
                {/* Top */}
                <div className='grid grid-cols-12 place-items-center gap-3 w-full'>
                  <div className='col-span-6 w-full'>
                    <div className='w-full h-[310px] bg-[#fff] rounded-3xl'></div>
                  </div>
                  <div className='col-span-6 flex flex-col w-full gap-3'>
                    <div className='w-full h-[150px] bg-[#fff] rounded-3xl'></div>
                    <div className='w-full h-[150px] bg-[#fff] rounded-3xl'></div>
                  </div>
                </div>
                {/* Bottom */}
                <div className='w-full h-[200px] bg-[#fff] rounded-3xl'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto mb-20 w-full'>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2 place-items-center w-full gap-10'>
            <div className='w-full px-4'>
              <div className='textGradient4 text-[#fff] text-[40px] mb-5'>Lorem, ipsum dolor</div>
              <div className='textGradient6 text-[#fff] mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit asperiores nemo ea doloremque, nesciunt pariatur a numquam quod minus illum. Repellendus reiciendis sequi quam eveniet repellat odio animi mollitia necessitatibus!</div>
              <div className='w-full h-[350px] bg-[#fff] rounded-3xl'>
                <img src="" alt="" />
              </div>
            </div>
            <div className='w-full'>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GoalsMission
