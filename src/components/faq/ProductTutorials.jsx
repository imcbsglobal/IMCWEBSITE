import React from 'react'

const ProductTutorials = () => {
  return (
    <div className="pt-[130px] flex flex-col justify-center items-center">
      <section className="max-w-[1400px] w-full mb-10">
        <div>
          <div className="text-[#fff] text-[50px] textGradient4 mb-5 text-center leading-tight">
            Learn, Implement, Excel{" "}
            <span className="block text-[20px]">
              Step by Step Tutorials to Unlock Your Product's Full Potential
            </span>
          </div>
          <div className="max-w-[1000px] mx-auto text-center text-[#fff] textGradient6">
            Empower yourself or your team with in-depth product tutorials
            designed to simplify learning and enhance efficiency. Our guided
            lessons make it easy to understand complex features, implement
            solutions, and maximize your product usage.
          </div>
        </div>
      </section>

      <section className="mb-20 max-w-[1400px] mx-auto w-full bg-gradient-to-r h-[500px] from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] overflow-hidden p-[1px] bg-[#3c3333] rounded-full">
        <div className='h-full w-full rounded-full bg-[#000]'></div>
      </section>
    </div>
  );
}

export default ProductTutorials
