import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () =>{
        console.log('handleNav called');
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4'>
        <h1 className='w-full text-xl font-semibold'>Kennedy</h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>About</li>
            <li className='p-4'>Experience</li  >
            <li className='p-4'>Project</li >
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='cursor-pointer block md:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
        </div>
        <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full bg-[#d9d9d9] ease-in-out duration-500' : 'fixed left-[-100%]'}>
            <h1 className='w-full text-xl font-semibold md:font-bold uppercase m-4'>Kennedy</h1>
            <ul className='pt-12 uppercase font-semibold p-4 '>
                <li className='p-4'>About</li>  
                <li className='p-4'>Experience</li>
                <li className='p-4'>Project</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar
