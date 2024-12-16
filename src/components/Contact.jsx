import React from 'react'
import qr from "../assets/qrSVG.svg"
import { Link } from 'react-router-dom'
import { MdMarkEmailUnread } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id='contact' className='bg-[#dcefe4] mb-24'>
        <div className='align-elements py-24 flex justify-end items-center'>
            <div className='w-[80%] flex flex-col items-center'>
                <h2 className='text-5xl mb-10 font-semibold text-[#28c66f]'>Biz bilan aloqa</h2>
                <p className='text-2xl opacity-80 mb-10'>Har qanday savollaringiz boʻlsa, biz bilan bogʻlaning — va biz albatta javob beramiz.</p>
                <div className='flex justify-around w-full'>
                    <div className='flex items-center gap-3'>
                        <span className='text-4xl text-[#28c66f]'> <FaPhoneSquareAlt/> </span>
                        <span className='text-xl'>+99871 207-03-43</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='text-4xl text-[#28c66f]'> <MdMarkEmailUnread/> </span>
                        <span className='text-xl'>info@esijournal.uz</span>
                    </div>
                    <div className='flex items-center gap-3'>
                        <span className='text-4xl text-[#28c66f]'> <FaFacebookSquare/> </span>
                        <span className='text-xl'>fb.com/jurnal</span>
                    </div>
                </div>
            </div>
            <div className='w-[20%] flex flex-col items-center'>
                <img className='w-full h-full mb-5' src={qr} alt="" />
                <Link to="https://t.me/ilm_va_tadqiqot_bot" className='text-2xl text-center text-green-700 hover:text-green-600'>@ilm_va_tadqiqot_bot</Link>
            </div>
        </div>
    </section>
  )
}

export default Contact