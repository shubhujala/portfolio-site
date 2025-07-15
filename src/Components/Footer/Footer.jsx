import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { RiLinkedinBoxFill } from "react-icons/ri";
import { FaGithub,FaInstagram  } from "react-icons/fa";
import { Link} from "react-router-dom";

function Footer() {
  return (
    <div className='text-2xl text-white w-full flex justify-center mt-5'>
      <div>
        <div className='flex gap-4'>
            <div className='cursor-pointer transition delay-90 duration-200 ease-in-out hover:-translate-y-1'>
              <Link to='https://x.com/shubhXc0de'>
                <FaXTwitter />
              </Link>
            </div>
            <div className='cursor-pointer transition delay-90 duration-200 ease-in-out hover:-translate-y-1'>
              <Link to='https://www.linkedin.com/in/shubhujala/'>
                <RiLinkedinBoxFill />
              </Link>
            </div>
            <div className='cursor-pointer transition delay-90 duration-200 ease-in-out hover:-translate-y-1'>
              <Link to='https://github.com/Shubh-ujala'>
                <FaGithub />
              </Link>
            </div>
            <div className='cursor-pointer transition delay-90 duration-200 ease-in-out hover:-translate-y-1'>
              <Link to='https://www.instagram.com/shubh_ujala/'>
                <FaInstagram />
              </Link>
            </div>
        </div>
        <div className='text-white  text-center text-sm mt-2 mb-2'>- Made by shubh ujala</div>
      </div>
        
    </div>
  )
}

export default Footer
