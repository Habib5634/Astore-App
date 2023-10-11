import React, { useState } from 'react';
import { AiOutlineSearch, AiOutlineUser, AiOutlineShoppingCart,  AiOutlineClose } from 'react-icons/ai';
import logo from './New_Astore_logo1_500x.png';
import NavMenu from './NavMenu';
import MenuItems from './MenuItems';
import {LuAlignLeft} from 'react-icons/lu'
import Login from './LoginRegisterToggle/Login';
import CartDrawer from '../../Pages/CartContext/CartDrawer';
import { Link } from 'react-router-dom';



const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFormOpen,setIsFormOpen]= useState(false)
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);

 
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
  const toggleForm = ()=>{
    setIsFormOpen(!isFormOpen)
  }
 
  const toggleCartDrawer = () => {
    setIsCartDrawerOpen(!isCartDrawerOpen);
  }
  
  return (
    <div className="sticky top-0 bg-white w-full z-50">
    <nav className="flex items-center justify-between p-4 ">
      <div className="flex items-center">
       
          <LuAlignLeft className="text-2xl cursor-pointer md:hidden" onClick={toggleDrawer} />
      <li className="mr-4 hidden md:flex"><NavMenu /></li> 
       <Link to='/customerreviews'> <li className="mr-4 hidden md:flex text-gray-700 font-semibold">Customer Reviews</li></Link>
        <Link to='/about'><li className="hidden md:flex cursor-pointer text-gray-700 font-semibold">About Us</li></Link>
      </div>
      <div className="flex items-center justify-center">
       <Link to='/'> <img src={logo} alt="Logo" className="w-24 h-10 mr-2" /></Link>
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <AiOutlineSearch className="text-2xl cursor-pointer" />
        </div>
        <div className="mr-4">
        {isFormOpen && (
        <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 overflow-y-auto">
          <div className="flex justify-end p-2 text-gray-500">
            
            <AiOutlineClose className=" text-2xl cursor-pointer" onClick={toggleForm} />
          </div>
          <Login toggleForm={toggleForm} /> 
        </div>
      )}
          <AiOutlineUser className="text-2xl cursor-pointer" onClick={toggleForm} />
        </div>
        <div>
          <AiOutlineShoppingCart className="text-2xl cursor-pointer" onClick={toggleCartDrawer}/>
        </div>
      </div>
      
      {isDrawerOpen && (
  <div className="fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50">
    <div className="flex justify-between p-2 text-white bg-black">
      <span>MENU</span>
      <AiOutlineClose className=" text-2xl cursor-pointer" onClick={toggleDrawer} />
    </div>
    <MenuItems/>
  </div>
)}
{isCartDrawerOpen && (
  <>
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40"></div>
    <div className="fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50 overflow-y-auto">
      <div className="flex justify-end p-2 text-gray-500">
        <AiOutlineClose className=" text-2xl cursor-pointer" onClick={toggleCartDrawer} />
      </div>
      <CartDrawer/>
    </div>
  </>
)}
    </nav>
    </div>
  );
}

export default Navbar;
