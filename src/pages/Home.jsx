import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GiCheckMark } from "react-icons/gi";
import news from "../assets/news.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.jpg";
import index1 from "../assets/index1.jpg"
import index2 from "../assets/index2.jpg"
import index3 from "../assets/index3.png"
import { Link } from "react-router-dom";

function Home() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="align-elements">
      <section>
        <h2 className="text-2xl mb-5 font-semibold text-[#28c66f]">Xalqaro bazalarda indekslanishi</h2>
        <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={3000} infinite={true} transitionDuration={500} className="pb-24">
          <div className="borderCard h-min mr-5 group border shadow-2xl rounded-lg">
              <figure className="h-[50%] p-5 pb-0">
                <img
                  src={index1}
                  className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
                />
              </figure>
              <div className="p-3 flex flex-col gap-3">
                <h2 className="text-justify text-base font-semibold">Google Scholar ilmiy adabiyotlarni keng qidirishning oddiy usulini taqdim etadi. Turli xil fanlar va manbalarni qidiring: maqolalar, tezislar</h2>
              </div>
          </div>
          <div className="borderCard h-min mr-5 group border shadow-2xl rounded-lg">
              <figure className="h-[50%] p-5 pb-0">
                <img
                  src={index1}
                  className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
                />
              </figure>
              <div className="p-3 flex flex-col gap-3">
                <h2 className="text-justify text-base font-semibold">Google Scholar ilmiy adabiyotlarni keng qidirishning oddiy usulini taqdim etadi. Turli xil fanlar va manbalarni qidiring: maqolalar, tezislar</h2>
              </div>
          </div>
          <div className="borderCard h-min mr-5 group border shadow-2xl rounded-lg">
              <figure className="h-[50%] p-5 pb-0">
                <img
                  src={index3}
                  className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
                />
              </figure>
              <div className="p-3 flex flex-col gap-3">
                <h2 className="text-justify text-base font-semibold">Google Scholar ilmiy adabiyotlarni keng qidirishning oddiy usulini taqdim etadi. Turli xil fanlar va manbalarni qidiring: maqolalar, tezislar</h2>
              </div>
          </div>
          <div className="borderCard h-min mr-5 group border shadow-2xl rounded-lg">
              <figure className="h-[50%] p-5 pb-0">
                <img
                  src={index1}
                  className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
                />
              </figure>
              <div className="p-3 flex flex-col gap-3">
                <h2 className="text-justify text-base font-semibold">Google Scholar ilmiy adabiyotlarni keng qidirishning oddiy usulini taqdim etadi. Turli xil fanlar va manbalarni qidiring: maqolalar, tezislar</h2>
              </div>
          </div>
        </Carousel>
      </section>
      <section className="mb-24">
        <h2 className="text-2xl mb-5 font-semibold text-[#28c66f]">Yangiliklar</h2>
        <div className="grid grid-cols-4 gap-5 ">
          <Link className="rounded-lg bg-slate-200 shadow-xl h-min group">
            <figure className="h-[60%] p-5 pb-0">
              <img
                src={news}
                className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
              />
            </figure>
            <div className="p-3 flex flex-col gap-3">
              <h2 className="text-center text-base font-semibold">“Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi.</h2>
              <p className="text-sm text-justify">Qadrli obunachilar! Sizlarga shuni ma’lum qilamizki, “Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi. Muddat 5-fevraliga qadar (shu kuni ham)</p>
              <div className="card-actions justify-center">
                <button className="btn btn-sm bg-[#28c66f] hover:bg-[#1bd66c] text-white border-none w-[50%] text-base">Batafsil</button>
              </div>
              <div className="flex justify-between">
                <span className="text-[green] font-medium">2024-yil 1-soni</span>
                <span className="text-[green] font-medium">30.11.2024</span>
              </div>
            </div>
          </Link>
          <Link className="rounded-lg bg-slate-200 shadow-xl h-min group">
            <figure className="h-[60%] p-5 pb-0">
              <img
                src={news2}
                className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
              />
            </figure>
            <div className="p-3 flex flex-col gap-3">
              <h2 className="text-center text-base font-semibold">“Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi.</h2>
              <p className="text-sm text-justify">Qadrli obunachilar! Sizlarga shuni ma’lum qilamizki, “Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi. Muddat 5-fevraliga qadar (shu kuni ham)</p>
              <div className="card-actions justify-center">
                <button className="btn btn-sm bg-[#28c66f] hover:bg-[#1bd66c] text-white border-none w-[50%] text-base">Batafsil</button>
              </div>
              <div className="flex justify-between">
                <span className="text-[green] font-medium">2024-yil 1-soni</span>
                <span className="text-[green] font-medium">30.11.2024</span>
              </div>
            </div>
          </Link>
          <Link className="rounded-lg bg-slate-200 shadow-xl h-min group">
            <figure className="h-[60%] p-5 pb-0">
              <img
                src={news}
                className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
              />
            </figure>
            <div className="p-3 flex flex-col gap-3">
              <h2 className="text-center text-base font-semibold">“Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi.</h2>
              <p className="text-sm text-justify">Qadrli obunachilar! Sizlarga shuni ma’lum qilamizki, “Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi. Muddat 5-fevraliga qadar (shu kuni ham)</p>
              <div className="card-actions justify-center">
                <button className="btn btn-sm bg-[#28c66f] hover:bg-[#1bd66c] text-white border-none w-[50%] text-base">Batafsil</button>
              </div>
              <div className="flex justify-between">
                <span className="text-[green] font-medium">2024-yil 1-soni</span>
                <span className="text-[green] font-medium">30.11.2024</span>
              </div>
            </div>
          </Link>
          <Link className="rounded-lg bg-slate-200 shadow-xl h-min group">
            <figure className="h-[60%] p-5 pb-0">
              <img
                src={news3}
                className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
              />
            </figure>
            <div className="p-3 flex flex-col gap-3">
              <h2 className="text-center text-base font-semibold">“Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi.</h2>
              <p className="text-sm text-justify">Qadrli obunachilar! Sizlarga shuni ma’lum qilamizki, “Ta’lim, fan va innovatsiya” jurnalining 2024-yil 1-soni uchun qabul boshlandi. Muddat 5-fevraliga qadar (shu kuni ham)</p>
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
      </section>
      <section>
        <Carousel responsive={responsive}>
          <div className="group flex flex-col items-center gap-4 border border-[green] hover:bg-[#28c66f] transition duration-300 hover:text-white rounded-md mr-5 p-5 text-base text-center">
            <span className="bg-[#28c66f] rounded-lg p-5 group-hover:bg-white transition duration-300">
              <span> <GiCheckMark className="text-4xl text-white group-hover:text-[#28c66f]"/> </span>
            </span>
            Oliy attestatsiya komissiyasi tomonidan tan olingan jurnal
          </div>
          <div className="group flex flex-col items-center gap-4 border border-[green] hover:bg-[#28c66f] transition duration-300 hover:text-white rounded-md mr-5 p-5 text-base text-center">
            <span className="bg-[#28c66f] rounded-lg p-5 group-hover:bg-white transition duration-300">
              <span> <GiCheckMark className="text-4xl text-white group-hover:text-[#28c66f]"/> </span>
            </span>
            Oliy attestatsiya komissiyasi tomonidan tan olingan jurnal
          </div>
          <div className="group flex flex-col items-center gap-4 border border-[green] hover:bg-[#28c66f] transition duration-300 hover:text-white rounded-md mr-5 p-5 text-base text-center">
            <span className="bg-[#28c66f] rounded-lg p-5 group-hover:bg-white transition duration-300">
              <span> <GiCheckMark className="text-4xl text-white group-hover:text-[#28c66f]"/> </span>
            </span>
            Oliy attestatsiya komissiyasi tomonidan tan olingan jurnal
          </div>
          <div className="group flex flex-col items-center gap-4 border border-[green] hover:bg-[#28c66f] transition duration-300 hover:text-white rounded-md mr-5 p-5 text-base text-center">
            <span className="bg-[#28c66f] rounded-lg p-5 group-hover:bg-white transition duration-300">
              <span> <GiCheckMark className="text-4xl text-white group-hover:text-[#28c66f]"/> </span>
            </span>
            Oliy attestatsiya komissiyasi tomonidan tan olingan jurnal
          </div>
          <div className="group flex flex-col items-center gap-4 border border-[green] hover:bg-[#28c66f] transition duration-300 hover:text-white rounded-md mr-5 p-5 text-base text-center">
            <span className="bg-[#28c66f] rounded-lg p-5 group-hover:bg-white transition duration-300">
              <span> <GiCheckMark className="text-4xl text-white group-hover:text-[#28c66f]"/> </span>
            </span>
            Oliy attestatsiya komissiyasi tomonidan tan olingan jurnal
          </div>
          <div className="group flex flex-col items-center gap-4 border border-cyan-600 hover:bg-[#28c66f] transition duration-300 hover:text-white rounded-md mr-5 p-5 text-base text-center">
            <span className="bg-[#28c66f] rounded-lg p-5 group-hover:bg-white transition duration-300">
              <span> <GiCheckMark className="text-4xl text-white group-hover:text-[#28c66f]"/> </span>
            </span>
            Oliy attestatsiya komissiyasi tomonidan tan olingan jurnal
          </div>
        </Carousel>
      </section>
    </div>
  );
}

export default Home;
