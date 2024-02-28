import React from 'react'

const Projects = () => {
  return (
    <div>
        <div className='text-center pt-[100px] md:pt-[250px] lg:pt-12'>
            <p className='text-[#999797]'>A peak into my</p>
            <h1 className='font-bold text-4xl'>Experience</h1>
        </div>
        <div className="px-4 py-5">
                <div className="border-2 rounded-[20px] border-solid border-[#d9d9d9] w-[400px] px-5">
                    <h4 className='text-center font-bold'>Frontend</h4>
                    <div className="flex justify-around py-4">
                        <ul className="pb-4">
                            <img className='w-[50px]' src="https://iili.io/JElOjyB.md.png"/>
                            <li>HTML</li>      
                            <img className='w-[50px]' src="https://iili.io/JElNCib.md.png" />
                            <li>CSS</li>
                            <img className='w-[50px]' src="https://iili.io/JEleBFj.md.png"/>
                            <li>JavaScript</li>
                        </ul>
                        <ul className="">
                            <img className='w-[50px]' src="https://iili.io/JElePlj.md.jpg"/>
                            <li>TailWind</li>
                            <img className='w-[50px]' src="https://iili.io/JElvdBe.md.png"/>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
                <div className="border-2 rounded-[20px] border-solid border-[#d9d9d9] w-[400px] px-5 my-4">
                    <h4 className='text-center font-bold'>Backend</h4>
                    <div className="flex justify-center py-4">
                        <ul>
                            <img className='w-[50px]' src="https://iili.io/JElSast.md.png"/>
                            <li>Python</li>
                            <img className='w-[50px]' src="https://iili.io/JElUfYG.png"/>
                            <li>SQLAlchemy</li>
                            <img className='w-[50px]' src="https://iili.io/JElUXaa.md.png"/>
                            <li>Flask</li>
                        </ul>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Projects
