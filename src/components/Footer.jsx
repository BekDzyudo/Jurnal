import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { IoLocation } from "react-icons/io5";

function Footer() {
  return (
    <div className='bg-[#28c66f] py-5 mt-10'>
        <ul className='align-elements flex justify-around items-center'>
            <li className='flex items-center gap-3'>
               <div className='bg-[#fafeff] p-3 rounded-lg'>
                <FaPhone className='text-xl text-[#28c66f]'/>
               </div>
               <div>
                <h2 className='font-medium text-[#fafeff]'>Telefon:</h2>
                <p className='text-[#fafeff]'>+99871 207-03-43</p>
               </div>
            </li>
            <li className='flex items-center gap-3'>
               <div className='bg-[#fafeff] p-3 rounded-lg'>
                <IoMdMailUnread className='text-xl text-[#28c66f]'/>
               </div>
               <div>
                <h2 className='font-medium text-[#fafeff]'>Email:</h2>
                <p className='text-[#fafeff]'>info@esijournal.uz</p>
               </div>
            </li>
            <li className='flex items-center gap-3'>
            <div className='bg-[#fafeff] p-3 rounded-lg'>
            <IoLocation className='text-xl text-[#28c66f]'/>
            </div>
               <div>
                <h2 className='font-medium text-[#fafeff]'>Manzil:</h2>
                <p className='text-[#fafeff]'>Toshkent sh, Shifonur k, 75 uy</p>
               </div>
            </li>
        </ul>
</div>
  )
}

export default Footer