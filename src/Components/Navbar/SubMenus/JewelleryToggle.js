
import React, { useState } from 'react'
import {AiOutlineRight} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
const listItems = [
    { label: "All", path: "/summer-sales" },
    { label: "Earring", path: "/" },
    { label: "Rings", path: "/" },
    { label: "Necklaces", path: "/" },
    { label: "Bracelets", path: "/" },
    { label: "Waist Belts", path: "/" },
   
   
];

const JewelleryToggle = () => {
    const [barMenu, setBarMenu] = useState(false);

    const navigate = useNavigate();

  const handleItemClick = (path) => {
    navigate(path);
  }
  return (
    <>
        <li onMouseEnter={()=>setBarMenu(true)}
        onMouseLeave={()=>setBarMenu(false)}
        className=" cursor-pointer items-center   justify-center rounded-xl   px-4 py-2.5 text-sm font-semibold text-black "
        style={{listStyle:"none"}}
        >
            <span className='w-full flex justify-between'>
            Jewellery <AiOutlineRight className='mt-1'/>
            </span>

            {barMenu && (
         <ul className="absolute ml-40 w-44 -mt-6 left-0 rounded-xl shadow-xl  bg-white">
         {listItems.map((item, index) => (
           <li
             key={index}
             className="flex w-full cursor-pointer hover:underline underline-offset-4 items-center px-4 py-2 text-sm font-semibold"
             onClick={() => handleItemClick(item.path)}
           >
             {item.label}
           </li>
         ))}
       </ul>
      )}
          </li>
         
    </>
  )
}

export default JewelleryToggle