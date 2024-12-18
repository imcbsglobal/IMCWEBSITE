import React from 'react'
import logo from "../assets/IMC Logo.png"
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className='flex justify-center items-center py-5 fixed w-full z-[999] bg-[#ffffff] rounded-b-3xl backdrop-blur-3xl borderGradient'>
        <nav className='flex justify-between items-center w-full px-2 lg:px-6'>
          <div className='w-auto h-[60px]'>
            <img src={logo} className='w-full h-full object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]' alt="" />
          </div>
          <div className='flex justify-center items-center'>
            <ul className='flex text-[#000] justify-center items-center gap-5 lg:gap-10 text-lg textGradient6'>
              <Link to="/"><li className=' cursor-pointer'>Home</li></Link>
              <Link to="/"><li className=' cursor-pointer'>Company</li></Link>
              <Link to="/"><li className=' cursor-pointer'>Softwares</li></Link>
              <Link to="/"><li className='cursor-pointer'>Services</li></Link>
              <Link to="/"><li className=' cursor-pointer'>Business</li></Link>
              <Link to="/"><li className=' cursor-pointer'>FAQ</li></Link>
              <Link to="/"><li className=' cursor-pointer'>Contact</li></Link> 
            </ul>
          </div>
          <div>
            <button className='text-[#fff] bg-[#000] rounded-3xl px-10 py-2 text  font-bold textGradient6 backdrop-blur-3xl border-[2px]'>Login</button>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar
