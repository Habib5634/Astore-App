import React from 'react'
import BagToggle from './SubMenus/BagToggle'
import ClothingLineToggle from './SubMenus/ClothingLineToggle';
import JewelleryToggle from './SubMenus/JewelleryToggle';
import AccessoriesToggle from './SubMenus/AccessoriesToggle';
const MenuItems = () => {
  return (
    <>
          <button className="flex w-full cursor-pointer items-center px-4 hover:underline underline-offset-4 text-red-500  py-2 text-sm font-semibold ">
            Summer Sales
          </button>
          <div className="relative w-full inline-block hover:underline underline-offset-4">
          <BagToggle/> 
          </div>
          <div className="relative w-full inline-block hover:underline underline-offset-4">
          <ClothingLineToggle/> 
          </div>
          <div className="relative w-full inline-block hover:underline underline-offset-4">
          <JewelleryToggle/> 
          </div>
          <div className="relative w-full inline-block hover:underline underline-offset-4">
          <AccessoriesToggle/> 
          </div>
          <li className="flex w-full cursor-pointer hover:underline underline-offset-4 items-center px-4 py-2 text-sm font-semibold ">
            Footwear
          </li>
          <li className="flex w-full cursor-pointer hover:underline underline-offset-4 items-center px-4 py-2 text-sm font-semibold ">
            Bundle Sale
          </li>
          <li className="flex w-full cursor-pointer hover:underline underline-offset-4 items-center px-4 py-2 text-sm font-semibold ">
            Customer Reviews
          </li>
          <li className="flex w-full cursor-pointer hover:underline underline-offset-4 items-center px-4 py-2 text-sm font-semibold ">
            Contact us
          </li>
          <hr className="my-3 border-hr" />
          <li className="flex w-full cursor-pointer hover:underline underline-offset-4 items-center px-4 py-2 text-sm font-semibold text-text">
            Logout
          </li>
        </>
  )
}

export default MenuItems