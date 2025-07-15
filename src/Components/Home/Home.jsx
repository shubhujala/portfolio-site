import React from 'react'
import TypingName from './name'
import About from './about';
import Skills from './skills';
import ProjectsFlex from './projects';
import {Link} from 'react-router-dom'
import Footer from '../Footer/footer';
function Home() {
  const names = ["Developer","DSA","FULL STACK","ShubhXc0de"];
  return (
    <>
    <div className='w-full'>
      <TypingName texts={names} speed={200} delay={1000}/>
    </div>
    <div className='w-full text-center md:mt-15 mt-6'>
      <About/>
    </div>
    <div className='text-4xl text-[#b2bec3] w-full text-center md:mt-15 mt-6 mb-7 font-semibold'>Projects</div>
    <div className='md:mx-20'>
      <ProjectsFlex/>
    </div>

    <div className='text-md text-blue-400 hover:underline w-full md:mb-0 mb-10 text-center'>
      <Link to='/projects'>
          View more 
      </Link>
    </div>

    <div className='w-full text-center md:text-4xl text-3xl  text-[#b2bec3] font-semibold md:mt-8 mt-[-10px] '>Technologies </div>

    <div className='text-[#95a5a6] text-sm md:text-lg text-center'>Tools I use to transform my ideas into <span className='text-rose-400 font-semibold'>cool websites</span></div>
    <div className='w-full text-center md:mt-2 mt-1'>
      <Skills/>
    </div>
    <Footer/>
    
   
    </>
  )
}

export default Home
