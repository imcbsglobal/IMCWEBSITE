import React from 'react'
import Footer from '../Footer'

const MobileApp = () => {
  const WebData = [
    { title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },
    { title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },{ title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },{ title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },{ title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },{ title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },{ title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },{ title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },{ title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },{ title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },{ title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },{ title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },
  ]

  const ChooseUsList = [
    { titile : "Custom Solutions", description : "Tailored to your business."},
    { titile : "Custom Solutions", description : "Tailored to your business."},
    { titile : "Custom Solutions", description : "Tailored to your business."},
    { titile : "Custom Solutions", description : "Tailored to your business."},
  ]

  const processList = [
    {titile : "Discovery Phase", description : "During the discovery phase, we work closely with our clients to understand their business objectives and gather project requirements. We identify the target audience and user personas, and conduct extensive research on industry trends and competitor websites to gain insights and ideas.", img : "img"},
    {titile : "Discovery Phase", description : "During the discovery phase, we work closely with our clients to understand their business objectives and gather project requirements. We identify the target audience and user personas, and conduct extensive research on industry trends and competitor websites to gain insights and ideas.", img : "img"},
    {titile : "Discovery Phase", description : "During the discovery phase, we work closely with our clients to understand their business objectives and gather project requirements. We identify the target audience and user personas, and conduct extensive research on industry trends and competitor websites to gain insights and ideas.", img : "img"},
    {titile : "Discovery Phase", description : "During the discovery phase, we work closely with our clients to understand their business objectives and gather project requirements. We identify the target audience and user personas, and conduct extensive research on industry trends and competitor websites to gain insights and ideas.", img : "img"},
    {titile : "Discovery Phase", description : "During the discovery phase, we work closely with our clients to understand their business objectives and gather project requirements. We identify the target audience and user personas, and conduct extensive research on industry trends and competitor websites to gain insights and ideas.", img : "img"},
    {titile : "Discovery Phase", description : "During the discovery phase, we work closely with our clients to understand their business objectives and gather project requirements. We identify the target audience and user personas, and conduct extensive research on industry trends and competitor websites to gain insights and ideas.", img : "img"},
    {titile : "Discovery Phase", description : "During the discovery phase, we work closely with our clients to understand their business objectives and gather project requirements. We identify the target audience and user personas, and conduct extensive research on industry trends and competitor websites to gain insights and ideas.", img : "img"},
  ]
  return (
    <div className="pt-[150px] flex flex-col justify-center items-center">
      <section className="max-w-[1400px] mx-auto w-full mb-20">
        <div>
          <div className="flex flex-col justify-center items-center gap-5">
            <div className="w-full h-[600px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
              <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
            </div>
            <div className="grid grid-cols-12 place-items-center gap-5 w-full">
              <div className=" col-span-6 bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl h-[300px] w-full">
                <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
              </div>
              <div className="col-span-3 w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl h-[300px]">
                <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
              </div>
              <div className="col-span-3 w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl h-[300px]">
                <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1400px] mx-auto w-full mb-20">
        <div>
          <div className="flex flex-col gap-5 mb-10">
            <div className="text-[#fff] text-[50px] textGradient4 leading-tight flex justify-center items-center text-center">
              MOBILE APP DEVELOPMENT{" "}
            </div>
            <div className=" text-[#fff] textGradient6 flex justify-center items-center text-center">
              In today's fast-paced world, every entrepreneur seeks real-time
              insights into their business. That's why mobile solutions have
              become essential. We are committed to delivering affordable,
              high-quality mobile applications while also offering tailored
              solutions designed to meet unique business needs and drive growth
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5">
              {WebData.map((item) => (
                <div className="w-full h-[300px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
                  <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mb-20 max-w-[1400px] w-full mx-auto">
        <div>
          <div className="text-[#fff] text-[50px] textGradient4 text-center mb-5">
            Why Choose Us?
          </div>
          <div className="text-center max-w-[900px] mx-auto text-[#fff] textGradient6 mb-10">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum
            eligendi explicabo aut dolores natus id iste sequi laudantium quis
            deserunt, similique maxime iusto nemo incidunt in. Accusantium
            beatae deserunt corrupti!
          </div>

          <div className="flex gap-10">
            {ChooseUsList.map((item) => (
              <div className="w-full h-[200px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl">
                <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-20 max-w-[1400px] w-full mx-auto">
        <div>
          <div className="md:flex justify-between items-center mb-10">
            <div className="text-[#fff] textGradient4 text-[50px] leading-tight md:w-[60%]">
              Lorem ipsum<span className="block">amet consectetur </span>
            </div>
            <div className="md:w-[40%] text-[#fff] textGradient6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              delectus enim ad nam expedita porro architecto doloribus rerum.
              Nesciunt voluptatem aperiam expedita eaque esse. Voluptatibus enim
              esse ipsam error eum.
            </div>
          </div>

          <div className="grid grid-cols-1 w-full place-items-center md:grid-cols-2 gap-5">
            {processList.map((item) => (
              <div className="h-[250px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl w-full">
                <div className="rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#fff] py-10">
        <Footer />
      </section>
    </div>
  );
}

export default MobileApp
