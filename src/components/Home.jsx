import React from 'react'
import blackshade from "../assets/whiteshade.png"
import banner from "../assets/banner.jpg"
import { MdOutlineArrowOutward } from "react-icons/md";
import { IoIosFlash } from "react-icons/io";
import Footer from './Footer';
import Testimonials from './Testimonials';
import ChatBot from './ChatBot';
import inv from "../assets/inv.jpeg"
import abouthome from "../assets/abouthome.jpg"

const Home = () => {

  const softwareList = [
    {no : "01", name : "Inventory Management",img : inv, title : "Crafting Memorable Identies", section : "Brandning", para : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, dicta.", link : ""},
    {no : "02", name : "Health Care Management",img : "https://www.etftrends.com/wp-content/uploads/2022/07/GDOC-at-Epicenter-of-HealthcareTech-Combination.jpg", title : "Crafting Memorable Identies", section : "Brandning", para : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, dicta.", link : ""},
    {no : "03", name : "Restaurants",img : "https://avatars.mds.yandex.net/get-altay/2447509/2a000001749765341eb90ab5593b3549ef45/orig", title : "Crafting Memorable Identies", section : "Brandning", para : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, dicta.", link : ""},
    {no : "04", name : "Hospitality",img : "https://hotel.report/assets/pages/21874/article_image/2021-08-16-komp.jpg", title : "Crafting Memorable Identies", section : "Brandning", para : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, dicta.", link : ""},
    {no : "05", name : "Institution Management",img : "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/59/0157ac33014ba585910485042bda54/course3-1000x1000.jpg", title : "Crafting Memorable Identies", section : "Brandning", para : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita, dicta.", link : ""},
  ]

  
  return (
    <div className='relative'>
      <div className='bottom-10 fixed right-10 z-50'>
        <ChatBot/>
      </div>
      {/* Banner */}
      <section className='h-screen mb-20'>
        <div></div>
      </section>

      {/* About */}
      <section className='w-full max-w-[1440px] mx-auto mb-20'>
       <div>
          <div className='md:flex md:justify-center md:items-center md:gap-10 w-full'>
            {/* left */}
            <div className='md:w-[60%] py-5 flex flex-col gap-2'>
              <div>
                <div className='flex flex-col gap-2 mb-5'>
                  <div className='text-[40px] leading-[50px] textGradient5 text-[#fff]'>Lorem ipsum dolor<span className='block'>Lorem ipsum dolor lorem</span></div>
                  <div className='textGradient4 text-[50px] font-semibold leading-tight text-[#fff]'>Lorem ipsum dolor sit</div>
                </div>
                <div className='textGradient6 text-[#fff]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum minima quidem at magnam repellat aliquam non eligendi sapiente alias corrupti accusantium maiores laboriosam, in dignissimos nulla incidunt molestias, sequi harum.
                Totam quis repellendus minus illo dicta sunt, at nostrum tempora, quasi, excepturi ducimus nulla corrupti! A tempore odio suscipit aspernatur quos</div>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-3 place-items-center w-full gap-5'>
                <div className='w-full h-[200px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]'>
                  <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
                </div>
                <div className='w-full h-[200px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]'>
                  <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
                </div>
                <div className='w-full h-[200px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]'>
                  <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
                </div>
                <div className='w-full h-[200px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]'>
                  <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
                </div>
                <div className='w-full h-[200px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]'>
                  <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
                </div>
                <div className='w-full h-[200px] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]'>
                  <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className='md:w-[40%] bg-[#fc2727] h-[650px] rounded-md overflow-hidden'>
              <img src={abouthome} alt="" className='h-full w-full object-cover' />
            </div>
          </div>
       </div>
      </section>

      {/* Count */}
      <section className='mb-20 w-full max-w-[1400px] mx-auto rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px]'>
        <div className='backdrop-blur-3xl bg-[#000000] rounded-3xl p-10 `rounded-[calc(1.5rem-1px)]`'>
          <div className='md:flex grid grid-cols-1 place-items-center w-full justify-between px-10 items-center h-full gap-10'>
            <div className='flex items-center justify-center gap-2'>
              <div className='text-[65px] textGradient font-black'>10+</div>
              <div className='leading-tight text-[30px] textGradient'>Years of <span className='block'>Experience</span></div>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <div className='text-[65px] textGradient font-black'>30+</div>
              <div className='leading-tight text-[30px] textGradient'>Skilled <span className='block'>Professionals</span></div>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <div className='text-[65px] textGradient font-black'>100%</div>
              <div className='leading-tight text-[30px] textGradient'>Customer <span className='block'>Satisfaction</span></div>
            </div>
            <div className='flex items-center justify-center gap-2'>
              <div className='text-[65px] textGradient font-black'>2000+</div>
              <div className='leading-tight text-[30px] textGradient'>Clients <span className='block'>World Wide</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Softwares */}
      <section className='mb-20'>
        <div>
          {/* Title Portion */}
          <div className='md:flex md:justify-between md:items-center md:gap-10 mb-10 max-w-[1400px] mx-auto'>
            <div className='text-[#fff] text-[50px] textGradient4 leading-tight md:w-[60%]'>Lorem ipsum dolor <span className='block'>sit amet consect</span></div>
            <div className='text-[#fff] md:w-[40%] textGradient6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque odio repellendus dignissimos sint consequatur praesentium hic voluptatem architecto aliquam tempore optio reiciendis, aspernatur placeat dolores repudiandae beatae? Commodi, quis aperiam!</div>
          </div>
          {/* Software List */}
          <div>
            {softwareList.map((item)=>(
              <div className='border-b-2 border-[#ffffff] pb-5 pt-5'>
              <div className='grid grid-cols-1 md:grid-cols-3   justify-center  gap-10 max-w-[1400px] mx-auto'>
                <div className='flex flex-col gap-2 text-[#fff] p-16'>
                  <div className=' italic'>{item.no}</div>
                  <div className='text-3xl textGradient4'>{item.name}</div>
                </div>
                <div className='w-full h-[250px] rounded-3xl bg-[#ffffff5d] backdrop-blur-3xl border border-[#fff] overflow-hidden'>
                  <img src={item.img} alt="" className='flex object-fill' />
                </div>
                <div className='pt-16'>
                  <div className='textGradient5 mb-3 font-bold text-[#fff]'>{item.title}</div>
                  <div className='flex gap-5 textGradient6'>
                    <div className='text-[#fff]'>{item.section}</div>
                    <div className='text-[#ffff]'>{item.para}</div>
                  </div>
                  <div className='mt-5 flex justify-start items-center gap-2 text-[#fff]'>Learn More <MdOutlineArrowOutward/></div>
                </div>
              </div>
            </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Services */}
      <section className='mb-20 max-w-[1400px] mx-auto w-full'>
        <div>
            <div className='mb-5'>
              <div className='text-[#fff] text-[50px] leading-tight textGradient4'>Crafting Innovation with Creativity,<span className='block'>Passion and Skill</span></div>
              <div></div>
            </div>

            {/* Services List */}
            <div className='grid md:grid-cols-3 grid-cols-1 place-items-end gap-10'>
              {/* first div */}
              <div className='w-full flex flex-col justify-center items-start gap-5'>
                <div className='flex items-center gap-2'>
                  <div className='text-[#000] p-1 rounded-full bg-[#fff]'><IoIosFlash/></div>
                  <div className='flex flex-col justify-center items-center text-[#fff] leading-tight'>I thrive on working <span className='block'>closely with clients</span> </div>
                </div>
                <div className='w-full h-[250px] bg-[#ffffff60] rounded-3xl bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl'>
                  <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
                </div>
              </div>
              {/* Second div */}
              <div className='flex flex-col gap-5'>
                <div className='text-[#ffff] text-[38px] leading-tight textGradient5'>More Than <span className='block'>You Want</span></div>
                <div className='text-[#fff] textGradient6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia dolorum quisquam, iure molestias sed blanditiis?</div>
                <div className='text-[#fff] textGradient6 font-bold flex items-center gap-2'>Learn More <MdOutlineArrowOutward/></div>
              </div>
              <div className='w-full h-[400px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl'>
                <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
              </div>
            </div>
        </div>
      </section>

      {/* Business */}
      <section className='max-w-[1400px] mx-auto mb-20'>
        <div>
          <div className='text-[#fff] mb-2 text-[50px] textGradient4 text-center'>Lorem ipsum dolor sit amet</div>
          <div className='text-center text-[#fff] mb-10 max-w-[900px] mx-auto font-semibold textGradient6'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit itaque, amet a aperiam perferendis delectus et, sapiente fugit nesciunt laboriosam hic deserunt alias! Est dolor temporibus debitis provident neque similique!</div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6'>
            <div className='w-full h-[300px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
            <div className='w-full h-[300px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
            <div className='w-full h-[300px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
            <div className='w-full h-[300px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
            <div className='w-full h-[300px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
            <div className='w-full h-[300px] bg-gradient-to-r from-[#8d8d8d] via-[#ffffff] to-[#ffdd9e] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl'>
              <div className='rounded-3xl w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000]'></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='max-w-[1400px] mx-auto mb-20'>
        <div className='mb-10 textGradient4 text-[50px] text-[#fff] text-center'>Lorem ipsum dolor sit amet</div>
        <Testimonials/>
      </section>

      {/* Contact */}
      <section className='mb-20 max-w-[1400px] mx-auto w-full'>
        <div className='w-full'>
            <div className='flex justify-between items-center w-full mb-16'>
              <div className='md:w-[60%] flex flex-col justify-start gap-5'>
                <div className='text-[#fff] text-[50px] textGradient4 leading-tight'>Get in Touch and Lets <span className='block'>Make It Happen</span></div>
                <div className='text-[#fff] textGradient6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum labore impedit ipsam voluptatibus tempora blanditiis officiis officia unde quisquam doloremque doloribus, provident illo porro suscipit quam facilis magni cumque corporis! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit, deserunt.</div>
              </div>
              <div className='md:w-[50%]'></div>
            </div>
            {/* Contact Form */}
            <div className='md:flex md:justify-start md:items-end w-full grid-cols-1 place-content-center gap-10'>
              <div className='md:w-[50%] '>
                <div className='flex flex-col justify-start gap-5 textGradient6 mb-10 text-xl'>
                  <div className='text-[#fff]'>info@imcbsglobal.com</div>
                  <div className='text-[#fff]'>+91 75938 20007</div>
                  <div className='text-[#fff]'>Palakkunnummal Building , Near Govt Ayurvedic Hospital Emily <span className='block'>Kalpetta, Wayanad, Kerala – 673121</span> </div>
                </div>
                <div className='flex'>
                  <div className='bg-gradient-to-r from-[#8d8d8d] via-[#ffbf00] to-[#ffb62d] p-[1px] bg-[#3c3333]  backdrop-blur-3xl rounded-3xl'>
                    <button className='text-[#fff] w-full h-full `rounded-[calc(1.5rem-1px)] bg-[#000] text-3xl px-10 py-3 rounded-3xl border textGradient6'>Contact Us</button>
                  </div>
                </div>
              </div>
              <div className='md:w-[50%] flex flex-col gap-5'>
                <div className='text-[#ffff] textGradient6 text-2xl'>Here to bring your concept to life, manage your ongoing project, or expand your existing development team</div>
                <form action="">
                  <div className='w-full grid grid-cols-2 gap-5 mb-3 textGradient6'>
                    <input type="text" placeholder='First Name*' className='py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b'/>
                    <input type="text" placeholder='First Name*' className='py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b'/>
                    <input type="text" placeholder='First Name*' className='py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b'/>
                    <input type="text" placeholder='First Name*' className='py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b'/>
                  </div>
                  <div className='w-full mb-3'>
                    <textarea placeholder='Enter Your Message' className='py-2 px-8 w-full outline-none bg-[#00000000] text-[#fff] border-b'></textarea>
                  </div>
                  <div className='w-full'>
                    <button className='w-full text-[#000] px-8 py-3 bg-[#fff] rounded-3xl textGradient6'>Send Message</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <section className='bg-[#fff] py-10'>
        <Footer/>
      </section>
    </div>
  )
}

export default Home
