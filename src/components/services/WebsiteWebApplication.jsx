import React from 'react'
import Footer from '../Footer'

const WebsiteWebApplication = () => {

  const WebData = [
    { title : "Responsive Web Design", description : "In today's mobile-first world, having a website that works seamlessly on any device is crucial. Our responsive web design services ensure that your website is accessible and functional on any screen size, from smartphones to desktops." },
    { title : "Interactive Web Designing", description : "We believe that websites should be more than just pretty pictures - it should engage and delight your audience. Our interactive web design services focus on creating memorable user experiences that keep visitors engaged and coming back for more" },{ title : "E-commerce Website Development", description : "Our e-commerce solutions help businesses of all sizes sell their products and services online. We'll design and develop an online store that's tailored to your needs and easy for customers to use, with features like secure payment processing and inventory management." },{ title : "Search Engine Optimization", description : "Search engine optimization (SEO) is critical for improving your website's visibility and ranking on search engine results pages (SERPs). Our SEO services help you attract more organic traffic to your website and improve your overall online presence." },{ title : "Content Management System", description : "Managing website content can be a hassle, but with our custom CMS solutions, it doesn't have to be. We'll design and develop a CMS that makes it easy for you to add, edit, and publish content on your website. B2B platform" },{ title : "B2B Platforms", description : "If you're looking to connect with other businesses and grow your network, our B2B platform services can help. We'll design and develop a platform that's easy for businesses to use and navigate, with features like messaging and user profiles" },{ title : "ERP / CRM", description : "We help businesses to manage their operations and customer interactions more effectively. We'll design and develop a custom solution that meets your specific needs and streamlines your workflow." },{ title : "Backend Solutions", description : "We understand that behind every great website is a powerful backend infrastructure. Our backend solutions ensure that your website's backend is robust, secure, and scalable, with features like database management and server optimization." },{ title : "Corporate Websites", description : "A professional and engaging online presence is crucial for businesses to stand out in a crowded market. Our corporate website designing services help you create a website that reflects your brand's personality, values, and goals." },
  ]

  const ChooseUsList = [
    { titile : "Custom Solutions", description : "Tailored to your busines jhdjh ciwehbd iwehidhi weihbiugy gihgyuvgh llkdsni hidbjbihiiikbj"},
    { titile : "Custom Solutions", description : "Tailored to your busines jhdjh ciwehbd iwehidhi weihbiugy gihgyuvgh llkdsni hidbjbihiiikbj"},
    { titile : "Custom Solutions", description : "Tailored to your busines jhdjh ciwehbd iwehidhi weihbiugy gihgyuvgh llkdsni hidbjbihiiikbj"},
    { titile : "Custom Solutions", description : "Tailored to your busines jhdjh ciwehbd iwehidhi weihbiugy gihgyuvgh llkdsni hidbjbihiiikbj"},
  ]

  const processList = [
    {titile : "Discovery Phase", description : "During the discovery phase, we work closely with our clients to understand their business objectives and gather project requirements. We identify the target audience and user personas, and conduct extensive research on industry trends and competitor websites to gain insights and ideas.", img : "img"},
    {titile : "Planning Phase", description : "In the planning phase, we create a sitemap to organise website content and develop wireframes to outline the website's structure and layout. We define the website's visual identity, including the colour palette and typography.", img : "img"},
    {titile : "Design Phase", description : "The design phase involves creating mockups and prototypes of the website design, based on the wireframes and visual identity defined in the planning phase. We refine the design based on feedback from stakeholders and obtain final approval of the website design.", img : "img"},
    {titile : "Development Phase", description : "In the development phase, our team of developers code the website using HTML, CSS, and JavaScript. We implement the content management system (CMS) and database, and conduct rigorous testing to ensure the website is functional and user-friendly.", img : "img"},
    {titile : "Launch Phase", description : "Once the website is complete, we deploy it on the hosting server, conduct final testing and debugging, and launch the website. We also provide maintenance and support services to ensure the website remains secure and functional.", img : "img"},
    {titile : "Maintenance Phase", description : "In the maintenance phase, we provide ongoing support and maintenance services to ensure the website remains secure and up-to-date. We perform regular updates to the website's content, plugins, and security features, and conduct regular backups to ensure data is protected.", img : "img"},
  ]

  return (
    <div className='pt-[150px] flex flex-col justify-center items-center'>
      <section className='max-w-[1400px] mx-auto w-full mb-20'>
        <div>
          <div className='flex flex-col justify-center items-center gap-5'>
            <div className='w-full h-[600px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
            <div className='grid grid-cols-12 place-items-center gap-5 w-full'>
              <div className=' col-span-6 bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl h-[300px] w-full'>
                <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
              </div>
              <div className='col-span-3 w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl h-[300px]'>
                <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
              </div>
              <div className='col-span-3 w-full bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl h-[300px]'>
                <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='max-w-[1400px] mx-auto w-full mb-20'>
        <div>
          <div className='flex flex-col gap-5 mb-10'>
            <div className='text-[#fff] text-[50px] textGradient4 leading-tight'>Best Web Design and Development <span className='block'>Company Calicut, Kerala</span> </div>
            <div className='max-w-[900px] text-[#fff] textGradient6'>As a leading web design and development company in Calicut, Kerala, India, Trogon Media specialises in creating custom web solutions that help businesses of all sizes succeed online.we understand that your website is your business's online face and we work hard to make sure it makes a lasting impression on your visitors.Our team of expert designers and developers has years of experience in creating custom websites that are not only visually stunning but also highly functional and optimised for search engines.</div>
          </div>

          <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-5'>
              {WebData.map((item)=>(
                <div className='w-full h-[300px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl'>
                  <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] p-10'>
                    <div className='text-[#fff] text-xl textGradient mb-3 font-black'>{item.title}</div>
                    <div className='textGradient6 text-[#fff]'>{item.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='mb-20 max-w-[1400px] w-full mx-auto'>
        <div>
          <div className='text-[#fff] text-[50px] textGradient4 text-center mb-5'>Why Choose Us?</div>
          <div className='text-center max-w-[900px] mx-auto text-[#fff] textGradient6 mb-10'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum eligendi explicabo aut dolores natus id iste sequi laudantium quis deserunt, similique maxime iusto nemo incidunt in. Accusantium beatae deserunt corrupti!</div>

          <div className='grid grid-cols-2 place-items-center lg:grid-cols-4 gap-10'>
            {ChooseUsList.map((item)=>(
              <div className='w-full h-[200px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl'>
                <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] p-5'>
                  <div className='text-[#fff] mb-3 textGradient text-xl font-bold'>{item.titile}</div>
                  <div className='text-[#fff] textGradient'>{item.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='mb-20 max-w-[1400px] w-full mx-auto'>
          <div>
            <div className='md:flex justify-between items-center mb-10'>
              <div className='text-[#fff] textGradient4 text-[50px] leading-tight md:w-[60%]'>Lorem ipsum<span className='block'>amet consectetur </span></div>
              <div className='md:w-[40%] text-[#fff] textGradient6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt delectus enim ad nam expedita porro architecto doloribus rerum. Nesciunt voluptatem aperiam expedita eaque esse. Voluptatibus enim esse ipsam error eum.</div>
            </div>

            <div className='grid grid-cols-1 w-full place-items-center md:grid-cols-2 gap-5'>
              {processList.map((item)=>(
                <div className='h-[250px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl w-full'>
                    <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] px-5 py-10'>
                      <div className='textGradient text-3xl font-bold mb-5'>{item.titile}</div>
                      <div className='textGradient'>{item.description}</div>
                    </div>
                </div>
              ))}
            </div>
          </div>
      </section>
      

      <section className='w-full bg-[#fff] py-10'>
        <Footer/>
      </section>
    </div>
  )
}

export default WebsiteWebApplication
