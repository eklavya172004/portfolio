'use client'
import React from 'react'
import NavLink from './NavLink'

const MenuOverLay = ({links}) => {
  return (
    <div>
        <ul className='flex flex-col py-4 items-center'>
            {links.map((link,index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title}  />
              </li>
              ))}
        </ul>
    </div>
  )
}

export default MenuOverLay
