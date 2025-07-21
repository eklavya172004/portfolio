'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import hero from "./heroImage.png"
import { TypeAnimation } from 'react-type-animation';
 
const Hero = () => {
  return (
   <section className="">
        <div className='grid grid-cols-1 sm:grid-cols-12'> 
            <div className='col-span-7 place-self-center text-center sm:text-left'>

            <h1 className='text-white sm:text-5xl  mb-4 text-4xl lg:text-6xl font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 via-purple-500 to-pink-500 '>
                Hello, I am{" "}
            </span>  
            <br />
             <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Eklavya Nath',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'Web Devloper',
        1000,
        'Problem Solver',
        1000,
        'Devops expert',
        1000
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    /> 
            </h1>
                <p className='text-[#ADB7BE] sm:text-lg  text-base lg:text-xl mb-6'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis distinctio soluta molestiae, facere perferendis est dignissimos consequatur numquam officiis suscipit voluptatum fugit amet. Ullam earum quae magni porro at voluptatem.
                </p>
            <div>
            <Link
              href="/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/"
              className="px-1 inline-block py-1 w-full sm:w-fit   rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500  text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
            </div>
           </div>
          


           <div className='col-span-5 place-self-center mt-4 lg:mt-0 '>
                    <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image src="/images/hero-image.png"     className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt='hero-image' width={300} height={300}/>
                    </div>
            </div>
           </div>
           
    </section>
  )
}

export default Hero
