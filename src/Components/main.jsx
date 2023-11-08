import React from 'react'
import Img from '../assets/bg-image.png'
import { TypeAnimation } from 'react-type-animation'
import {FaTwitter, FaFacebook,FaInstagram, FaLinkedinIn} from 'react-icons/fa'




 const Main = () => {



  return (
    <div id='main'  >
      <img className='w-full h-[800px] object-cover object-left scale-x-[-1]' src={Img} alt=""/>
      <div className='w-full h-screen absolute top-0 left-0 bg-white/60'>
        <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
          <h1 className='sm:text-5xl text-4xl font-bold text-gray-800 '>This is React Web Page</h1>
          <h2 className='flex sm:text-3xl text-2xl ml-10 pt-4 text-gray-800'>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We Create,',
        2000, // wait 1s before replacing "Mice" with "Hamsters"
        'We Design,',
        2000,
        'We Develop',
        2000,
        'And We are Developers.',
        2000
      ]}
      wrapper="span"
      speed={200}
      style={{ fontSize: '1.5em', display: 'flex', paddingleft: '5px'}}
      repeat={Infinity}
    />
          </h2>
          <div className='flex justify-around  pt-20  max-w-[100] w-full '>
            <FaFacebook className='cursor-pointer' size={20}/>
            <FaInstagram className='cursor-pointer' size={20}/>
            <FaTwitter className='cursor-pointer' size={20}/>
            <FaLinkedinIn className='cursor-pointer' size={20}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main

