import React from 'react'
import qr from "../assets/qrSVG.svg"
import { Link } from 'react-router-dom'
import { MdMarkEmailUnread } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

function Contact() {
    const {t} = useTranslation()
  return (
    <section id='contact' className='bg-[#dcefe4] mb-10 md:mb-24'>
        <div className='align-elements xl:py-24 md:py-14 py-8 flex flex-col md:flex-row justify-end items-center'>
            <div className='md:w-[80%] flex flex-col items-center mb-8 md:mb-0'>
                <h2 className='xl:text-5xl md:text-3xl text-xl mb-4 md:mb-10 font-semibold text-[#28c66f]'>{t('home_page.contactTitle')}</h2>
                <p className='xl:text-2xl md:text-lg text-center opacity-80 mb-4 md:mb-10'>{t('home_page.contactDesc')}</p>
                <div className='flex flex-col gap-5 md:flex-row md:justify-around w-full'>
                   <div className='flex justify-center items-center  gap-3 '>
                        <span className='text-4xl text-[#28c66f]'> <FaPhoneSquareAlt/> </span>
                        <span className='xl:text-xl md:text-base'>+99871 207-03-43</span>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <span className='text-4xl text-[#28c66f]'> <MdMarkEmailUnread/> </span>
                        <span className='xl:text-xl md:text-base'>info@esijournal.uz</span>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        <span className='text-4xl text-[#28c66f]'> <FaFacebookSquare/> </span>
                        <span className='xl:text-xl md:text-base'>fb.com/jurnal</span>
                    </div>
                </div>
            </div>
            <div className='md:w-[20%] w-52 flex flex-col items-center'>
                <img className='w-full h-full mb-5' src={qr} alt="" />
                <Link to="https://t.me/ilm_va_tadqiqot_bot" className='text-2xl text-center text-green-700 hover:text-green-600'>Telegram bot</Link>
            </div>
        </div>
    </section>
  )
}

export default Contact