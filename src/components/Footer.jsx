import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Footer() {
   const {t} = useTranslation()
  return (
    <div className='bg-[#28c66f] py-5 mt-10'>
        <ul className='align-elements flex flex-col items-start gap-5 md:flex-row md:justify-around md:items-center'>
            <li className='flex items-center gap-3'>
               <div className='bg-[#fafeff] p-3 rounded-lg'>
                <FaTelegramPlane className='text-xl text-[#28c66f]'/>
               </div>
               <div>
                <Link  to="https://t.me/ilm_va_tadqiqot_bot" className='font-medium text-[#fafeff] link'>Telegram</Link>
               </div>
            </li>
            <li className='flex items-center gap-3'>
               <div className='bg-[#fafeff] p-3 rounded-lg'>
                <FaInstagram className='text-xl text-[#28c66f]'/>
               </div>
               <div>
                <Link to="https://www.instagram.com/ilm_va_tadqiqot/" className='font-medium text-[#fafeff] link'>Instagram</Link>
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