import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GiCheckMark } from "react-icons/gi";
import index1 from "../assets/index1.jpg";
import index3 from "../assets/index3.png";
import banner from "../assets/banner1.png";
import { Link } from "react-router-dom";
import useGetFetch from "../hooks/useGetFetch";
import { Contact } from "../components";
import { useTranslation } from "react-i18next";

function Home() {
  const {t} = useTranslation()
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

  const {
    data: yangiliklar,
    isPending,
    error,
  } = useGetFetch(`${import.meta.env.VITE_BASE_URL}/yangiliklar/`);
  const month = [
    "Yanvar",
    "Fevral",
    "Mart",
    "Aprel",
    "May",
    "Iyun",
    "Iyul",
    "Avgust",
    "Sentabr",
    "Oktabr",
    "Noyabr",
    "Dekabr",
  ];
  const day = [
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
    "Yakshanba"
  ]
  let d = new Date()

  return (
    <div>
      <section style={{zIndex: -1}} className="align-elements pt-2">
        <p className="text-[green] text-center font-[600px] sm:hidden">{t('home_page.welcome')}</p>
        <marquee direction="right" behavior="alternate" className="hidden sm:flex md:tracking-widest text-[green]">{day[d.getDay()-1] + ", " + month[d.getMonth()] + " " 
        + `${d.getDate() < 10 ? "0"+d.getDate() : d.getDate()}` + ", " + d.getFullYear() + " | " + t('home_page.welcome')}</marquee>
      </section>
      <section className="h-[500px] w-full mb-10 md:mb-24 ml-[-2px]">
        <h1 className="absolute top-1/3 left-[5%] text-white font-bold text-6xl tracking-wider max-w-[40%]">{t('home_page.bannerName')}</h1>
        <img src={banner} alt="" className="h-full w-full" />
      </section>
      <section className="align-elements">
        <h2 className="xl:text-4xl md:text-3xl text-xl mb-5 font-semibold text-[#28c66f]">
        {t('home_page.indexTitle')}
        </h2>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          transitionDuration={500}
          className="md:pb-24 pb-10 mb-5"
        >
          <div className="borderCard h-min mr-5 group border shadow-2xl rounded-lg">
            <figure className="h-[50%] p-5 pb-0">
              <img
                src={index1}
                className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
              />
            </figure>
            <div className="p-3 flex flex-col gap-3">
              <h2 className="text-justify text-base font-semibold">
                Google Scholar ilmiy adabiyotlarni keng qidirishning oddiy
                usulini taqdim etadi. Turli xil fanlar va manbalarni qidiring:
                maqolalar, tezislar
              </h2>
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
              <h2 className="text-justify text-base font-semibold">
                Google Scholar ilmiy adabiyotlarni keng qidirishning oddiy
                usulini taqdim etadi. Turli xil fanlar va manbalarni qidiring:
                maqolalar, tezislar
              </h2>
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
              <h2 className="text-justify text-base font-semibold">
                Google Scholar ilmiy adabiyotlarni keng qidirishning oddiy
                usulini taqdim etadi. Turli xil fanlar va manbalarni qidiring:
                maqolalar, tezislar
              </h2>
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
              <h2 className="text-justify text-base font-semibold">
                Google Scholar ilmiy adabiyotlarni keng qidirishning oddiy
                usulini taqdim etadi. Turli xil fanlar va manbalarni qidiring:
                maqolalar, tezislar
              </h2>
            </div>
          </div>
        </Carousel>
      </section>
      <section className="mb-10 md:mb-24 align-elements">
        <h2 className="xl:text-4xl md:text-3xl text-xl mb-5 font-semibold text-[#28c66f]">
        {t('home_page.newsTitle')}
        </h2>
        {yangiliklar && (
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {yangiliklar.slice(0, 4).map((yangilik) => {
              return (
                <Link
                  key={yangilik.id}
                  className="rounded-lg bg-[#dcefe4] shadow-xl h-min group"
                >
                  <figure className="h-80 p-5 pb-0">
                    <img
                      src={yangilik.image}
                      className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
                    />
                  </figure>
                  <div className="p-3 flex flex-col gap-3">
                    <h2 className="text-center text-base font-semibold">
                      {" "}
                      {yangilik.title.slice(0, 78)}...
                    </h2>
                    <div className="card-actions justify-center">
                      <button className="btn btn-sm bg-[#28c66f] hover:bg-[#1bd66c] text-white border-none w-[50%] text-base">
                      {t('news_page.batafsil')}
                      </button>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-[green] font-medium">
                        {new Date(yangilik.created_at).getDate() < 10
                          ? "0" + new Date(yangilik.created_at).getDate()
                          : new Date(yangilik.created_at).getDate()}
                        .
                        {new Date(yangilik.created_at).getMonth() < 10
                          ? "0" + new Date(yangilik.created_at).getMonth() + 1
                          : new Date(yangilik.created_at).getMonth() + 1}
                        .
                        {new Date(yangilik.created_at).getFullYear() < 10
                          ? "0" + new Date(yangilik.created_at).getFullYear()
                          : new Date(yangilik.created_at).getFullYear()}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
      <Contact/>
      <section className="align-elements">
        <Carousel responsive={responsive}>
          <div className="group flex flex-col items-center gap-4 border border-[green] hover:bg-[#28c66f] transition duration-300 hover:text-white rounded-md mr-5 p-5 text-base text-center">
            <span className="bg-[#28c66f] rounded-lg p-5 group-hover:bg-white transition duration-300">
              <span>
                {" "}
                <GiCheckMark className="text-4xl text-white group-hover:text-[#28c66f]" />{" "}
              </span>
            </span>
            Oliy attestatsiya komissiyasi tomonidan tan olingan jurnal
          </div>
          <div className="group flex flex-col items-center gap-4 border border-[green] hover:bg-[#28c66f] transition duration-300 hover:text-white rounded-md mr-5 p-5 text-base text-center">
            <span className="bg-[#28c66f] rounded-lg p-5 group-hover:bg-white transition duration-300">
              <span>
                {" "}
                <GiCheckMark className="text-4xl text-white group-hover:text-[#28c66f]" />{" "}
              </span>
            </span>
            Oliy attestatsiya komissiyasi tomonidan tan olingan jurnal
          </div>
          <div className="group flex flex-col items-center gap-4 border border-[green] hover:bg-[#28c66f] transition duration-300 hover:text-white rounded-md mr-5 p-5 text-base text-center">
            <span className="bg-[#28c66f] rounded-lg p-5 group-hover:bg-white transition duration-300">
              <span>
                {" "}
                <GiCheckMark className="text-4xl text-white group-hover:text-[#28c66f]" />{" "}
              </span>
            </span>
            Oliy attestatsiya komissiyasi tomonidan tan olingan jurnal
          </div>
          <div className="group flex flex-col items-center gap-4 border border-[green] hover:bg-[#28c66f] transition duration-300 hover:text-white rounded-md mr-5 p-5 text-base text-center">
            <span className="bg-[#28c66f] rounded-lg p-5 group-hover:bg-white transition duration-300">
              <span>
                {" "}
                <GiCheckMark className="text-4xl text-white group-hover:text-[#28c66f]" />{" "}
              </span>
            </span>
            Oliy attestatsiya komissiyasi tomonidan tan olingan jurnal
          </div>
          <div className="group flex flex-col items-center gap-4 border border-[green] hover:bg-[#28c66f] transition duration-300 hover:text-white rounded-md mr-5 p-5 text-base text-center">
            <span className="bg-[#28c66f] rounded-lg p-5 group-hover:bg-white transition duration-300">
              <span>
                {" "}
                <GiCheckMark className="text-4xl text-white group-hover:text-[#28c66f]" />{" "}
              </span>
            </span>
            Oliy attestatsiya komissiyasi tomonidan tan olingan jurnal
          </div>
          <div className="group flex flex-col items-center gap-4 border border-cyan-600 hover:bg-[#28c66f] transition duration-300 hover:text-white rounded-md mr-5 p-5 text-base text-center">
            <span className="bg-[#28c66f] rounded-lg p-5 group-hover:bg-white transition duration-300">
              <span>
                {" "}
                <GiCheckMark className="text-4xl text-white group-hover:text-[#28c66f]" />{" "}
              </span>
            </span>
            Oliy attestatsiya komissiyasi tomonidan tan olingan jurnal
          </div>
        </Carousel>
      </section>
    </div>
  );
}

export default Home;
