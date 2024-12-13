import React from 'react'
import news from "../../assets/news.png";
import news2 from "../../assets/news2.png";
import news3 from "../../assets/news3.jpg";
import { Link } from 'react-router-dom';

function Yangiliklar() {
  return (
    <div className='align-elements'>
        <h2 className="text-3xl mb-5 font-semibold text-[#28c66f]">Yangiliklar</h2>
        <div className='grid grid-cols-4 gap-5'>
            <Link to="" className="rounded-lg bg-[#dcefe4] shadow-xl h-min group">
                <figure className="h-60 p-5 pb-0">
                <img
                    src={news}
                    className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
                />
                </figure>
                <div className="p-3 flex flex-col gap-3">
                <h2 className="text-center text-base font-semibold">“Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi.</h2>
                <div className="card-actions justify-center">
                    <button className="btn btn-sm bg-[#28c66f] hover:bg-[#1bd66c] text-white border-none w-[50%] text-base">Batafsil</button>
                </div>
                <div className="flex justify-between">
                    <span className="text-[green] font-medium">2024-yil 1-soni</span>
                    <span className="text-[green] font-medium">30.11.2024</span>
                </div>
                </div>
            </Link>
            <Link className="rounded-lg bg-[#dcefe4] shadow-xl h-min group">
                <figure className="h-60 p-5 pb-0">
                <img
                    src={news2}
                    className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
                />
                </figure>
                <div className="p-3 flex flex-col gap-3">
                <h2 className="text-center text-base font-semibold">“Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi.</h2>
                <div className="card-actions justify-center">
                    <button className="btn btn-sm bg-[#28c66f] hover:bg-[#1bd66c] text-white border-none w-[50%] text-base">Batafsil</button>
                </div>
                <div className="flex justify-between">
                    <span className="text-[green] font-medium">2024-yil 1-soni</span>
                    <span className="text-[green] font-medium">30.11.2024</span>
                </div>
                </div>
            </Link>
            <Link className="rounded-lg bg-[#dcefe4] shadow-xl h-min group">
                <figure className="h-60 p-5 pb-0">
                <img
                    src={news3}
                    className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
                />
                </figure>
                <div className="p-3 flex flex-col gap-3">
                <h2 className="text-center text-base font-semibold">“Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi.</h2>
                <div className="card-actions justify-center">
                    <button className="btn btn-sm bg-[#28c66f] hover:bg-[#1bd66c] text-white border-none w-[50%] text-base">Batafsil</button>
                </div>
                <div className="flex justify-between">
                    <span className="text-[green] font-medium">2024-yil 1-soni</span>
                    <span className="text-[green] font-medium">30.11.2024</span>
                </div>
                </div>
            </Link>
            <Link className="rounded-lg bg-[#dcefe4] shadow-xl h-min group">
                <figure className="h-60 p-5 pb-0">
                <img
                    src={news}
                    className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
                />
                </figure>
                <div className="p-3 flex flex-col gap-3">
                <h2 className="text-center text-base font-semibold">“Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi.</h2>
                <div className="card-actions justify-center">
                    <button className="btn btn-sm bg-[#28c66f] hover:bg-[#1bd66c] text-white border-none w-[50%] text-base">Batafsil</button>
                </div>
                <div className="flex justify-between">
                    <span className="text-[green] font-medium">2024-yil 1-soni</span>
                    <span className="text-[green] font-medium">30.11.2024</span>
                </div>
                </div>
            </Link>
            <Link className="rounded-lg bg-[#dcefe4] shadow-xl h-min group">
                <figure className="h-60 p-5 pb-0">
                <img
                    src={news2}
                    className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
                />
                </figure>
                <div className="p-3 flex flex-col gap-3">
                <h2 className="text-center text-base font-semibold">“Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi.</h2>
                <div className="card-actions justify-center">
                    <button className="btn btn-sm bg-[#28c66f] hover:bg-[#1bd66c] text-white border-none w-[50%] text-base">Batafsil</button>
                </div>
                <div className="flex justify-between">
                    <span className="text-[green] font-medium">2024-yil 1-soni</span>
                    <span className="text-[green] font-medium">30.11.2024</span>
                </div>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Yangiliklar