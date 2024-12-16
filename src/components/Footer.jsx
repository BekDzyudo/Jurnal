import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Footer() {
   const {t} = useTranslation()
  return (
    <div className='bg-[#28c66f] py-5 mt-10'>
        <ul className='align-elements flex justify-around items-center'>
            <li className='flex items-center gap-3'>
               <div className='bg-[#fafeff] p-3 rounded-lg'>
                <FaTelegramPlane className='text-xl text-[#28c66f]'/>
               </div>
               <div>
                <h2 className='font-medium text-[#fafeff]'>Telegram:</h2>
                <p className='text-[#fafeff]'>+99871 207-03-43</p>
               </div>
            </li>
            <li className='flex items-center gap-3'>
               <div className='bg-[#fafeff] p-3 rounded-lg'>
                <FaInstagram className='text-xl text-[#28c66f]'/>
               </div>
               <div>
                <h2 className='font-medium text-[#fafeff]'>Instagram:</h2>
                <p className='text-[#fafeff]'>info@esijournal.uz</p>
               </div>
            </li>
            <li className='flex items-center gap-3'>
            <div className='bg-[#fafeff] p-3 rounded-lg'>
            <IoLocation className='text-xl text-[#28c66f]'/>
            </div>
               <div>
                <h2 className='font-medium text-[#fafeff]'>{t('footer.manzil')}:</h2>
                <p className='text-[#fafeff]'>Toshkent sh, Shifonur k, 75 uy</p>
               </div>
            </li>
        </ul>
</div>
  )
}

export default Footer