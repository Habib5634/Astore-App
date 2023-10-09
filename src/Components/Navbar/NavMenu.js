import React, { useState } from 'react'
import {AiOutlineDown} from 'react-icons/ai'
import MenuItems from './MenuItems';

const NavMenu = () => {
    const [navMenu, setNavMenu] = useState(false);
  return (

    <>

<li 
        onMouseEnter={()=>setNavMenu(true)}
        onMouseLeave={()=>setNavMenu(false)}
        className=" cursor-pointer items-center justify-center rounded-xl  border-primary bg-primary px-4 py-2.5 text- font-semibold text-black "
        style={{listStyle:"none"}}
      >
        <span className='flex  text-gray-700 font-semibold'> Menu <AiOutlineDown className='mt-2 text-xs text-gray-500 ml-1'/></span>
       
        {navMenu && 
        <ul className="absolute bg-white w-44 z-50 rounded-xl py-3 shadow-xl text-black"><MenuItems/></ul>
        }
      </li>
   
        </>
  )
}

export default NavMenu