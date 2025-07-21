'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import NavLink from './NavLink'
import {Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import MenuOverLay from './MenuOverLay'


const navlinks = [
    {
        title:"About",
        path:"#about",
    },
    {
        title:"Projects",
        path:"#projects", // Fixed: was "#about"
    },    
    {
        title:"Contact",
        path:"#contact", // Fixed: was "#about"
    }
]

const Navbar = () => {
    const [navbarOpen,setnavbarOpen] = useState(false);


  return (
    <nav className='fixed top-0 left-0 right-0 z-10  backdrop-blur-sm'>
        <div className='flex flex-wrap items-center justify-between mx-auto px-4 py-2'>
            <Link href={"/"} className='text-2xl md:text-5xl text-white font-semibold'>
                LOGO
            </Link>

            <div className='mobile-menu block md:hidden'>
                {
                    !navbarOpen ? (
                        <button onClick={() => setnavbarOpen(true)} className='text-slate-200 items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className="h-5 w-5"/>
                        </button>
                    ):(
                        <button onClick={() => setnavbarOpen(false)} className='text-slate-200 items-center px-3 py-2 border rounded border-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className="h-5 w-5"/>
                        </button>
                    )
                }
            </div>

            <div className='menu  hidden md:block md:w-auto' id='navbar'>
                <ul className='flex p-4 md:p-0 sm:flex-row md:space-x-8 mt-0'>
                   {navlinks.map((link,index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                   ))}
                </ul>
            </div>
        </div>
                   {
                    navbarOpen ? <MenuOverLay links={navlinks} /> : null
                   }

    </nav>
  )
}

export default Navbar
