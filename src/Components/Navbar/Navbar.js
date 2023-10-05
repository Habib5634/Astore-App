import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart,  AiOutlineClose } from 'react-icons/ai';
import logo from './New_Astore_logo1_500x.png';
import NavMenu from './NavMenu';
import MenuItems from './MenuItems';
import {LuAlignLeft} from 'react-icons/lu'


const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
 
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
 

  
  return (
    <nav className="flex items-center justify-between p-4 w-full">
      <div className="flex items-center">
       
          <LuAlignLeft className="text-2xl cursor-pointer md:hidden" onClick={toggleDrawer} />
      <li className="mr-4 hidden md:flex"><NavMenu /></li> 
        <li className="mr-4 hidden md:flex text-gray-700 font-semibold">Customer Reviews</li>
        <li className="hidden md:flex text-gray-700 font-semibold">About Us</li>
      </div>
      <div className="flex items-center justify-center">
        <img src={logo} alt="Logo" className="w-24 h-10 mr-2" />
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <AiOutlineSearch className="text-2xl cursor-pointer" />
        </div>
        <div className="mr-4">
          <AiOutlineUser className="text-2xl cursor-pointer" />
        </div>
        <div>
          <AiOutlineShoppingCart className="text-2xl cursor-pointer" />
        </div>
      </div>
      
      {isDrawerOpen && (
        <div className="fixed top-0 left-0 h-full w-64 bg-gray-200 shadow-lg "
          style={{ transition: "width 2s, opacity 0.5s" }}
        >
          <div className="flex justify-between p-2 text-white bg-black">
            <span>MENU</span>
            <AiOutlineClose className=" text-2xl cursor-pointer" onClick={toggleDrawer} />
          </div>
          <MenuItems/>
        </div>
      )}
    </nav>
  );
}

export default Navbar;