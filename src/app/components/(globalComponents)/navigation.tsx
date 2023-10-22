"use client"
import Link from 'next/link';
import React, {useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import SocialLinks from '../(CallToActionComponents)/socialLinks';

export default function Navigation() {
    const [nav, setNavigation] = useState(false)

    const handleNav = () => {
      setNavigation(!nav)
    }


  return (
    <nav className="p-4 pt-8 flex justify-between w-full">
      <div className="flex-auto">
          <Link className="text-2xl font-bold hover:text-violet-400" href="/">Silverio Gonzalez</Link>
      </div>
      
      <div className="flex">
        <menu className="hidden sm:flex text-xl">
          <li className="p-4 hover:text-violet-400">
            <Link href="/work-samples">Work samples</Link>
          </li>
          <li className="p-4 hover:text-violet-400">
            <Link href="/experience">Experience</Link>
          </li>
        </menu>
      </div>
      {/* Mobile Button*/}
      <div onClick={handleNav} className="sm:hidden z-10">
        {nav ? (
          <AiOutlineClose size={36} />
        ) : (
          <AiOutlineMenu size={36} />
        )}
        
      </div>
      {/* Mobile Menu*/}
      <div className={nav ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300" :
      "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
      }
      >
        <menu className="text-xl">
          <div onClick={handleNav}>
            <li className="p-4 text-3xl hover:text-violet-400">
              <Link href="/">Home</Link>
            </li>
            <li className="p-4 text-3xl hover:text-violet-400">
              <Link href="/work-samples">Work samples</Link>
            </li>
            <li className="p-4 text-3xl hover:text-violet-400">
              <Link href="/experience">Experience</Link>
            </li>
          </div>
          <div>
            <SocialLinks />
          </div>
        </menu>
      </div>
      
    </nav>
  )
} 
