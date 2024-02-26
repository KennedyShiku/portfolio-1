import React from 'react'

const Hero = () => {
  return (
    <div className='flex justify-center items-center flex-col h-47'>
        <div className='py-8 pt-20 pb-20'>
            <img className='rounded-[100%] w-[200px] md:w-[400px] max-w-[1240px]' src="https://iili.io/JEXMfN2.md.jpg" alt="/" />
        </div>
        <div>
            <p className='text-center text-[#999797]'>Hello I'm</p>
            <h1 className='font-bold text-4xl'>I'm Kennedy</h1>
            <p className='text-center text-[18px] text-[#999797]'>Full-stack Developer</p>
        </div>
    </div>
  )
}

export default Hero
