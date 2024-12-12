import React from 'react'
import { Link} from 'react-router-dom'
// #2596be
// 45b3c2
function Header() {
  return (
    <div className={`bg-[#45b3c2] py-5 mb-10`}>
        <div className='align-elements flex justify-between items-center'>
        <Link to="/" className='font-semibold text-base text-[#fafeff]'>TA'LIM FAN VA <br/> INNOVATSIYA JURNALI</Link>
        <nav className='flex items-center'>
            <ul className='menu menu-horizontal rounded-box'>
                <li>
                    <Link className='text-base text-[#fafeff]'>Bosh sahifa</Link>
                </li>
                <li>
                    <Link className='text-base text-[#fafeff]'>Jurnal</Link>
                </li>
                <li>
                    <Link className='text-base text-[#fafeff]' to="/nashrlar">Nashrlar</Link>
                </li>
                <li>
                    <Link className='text-base text-[#fafeff]'>Talabnoma</Link>
                </li>
                <li>
                    <Link className='text-base text-[#fafeff]'>Yangiliklar</Link>
                </li>
                <li>
                    <Link className='text-base text-[#fafeff]'>Bog'lanish</Link>
                </li>
            </ul>
            <form action="">
                <select className='menu outline-none rounded bg-[#45b3c2] text-white text-base'>
                    <option className='bg-none text-base' value="uzbek">O‘zbekcha</option>
                    <option className='bg-none text-base' value="rus">Русский</option>
                    <option className='bg-none text-base' value="english">English</option>
                </select>
            </form>
        </nav>
        </div>
    </div>
  )
}

export default Header