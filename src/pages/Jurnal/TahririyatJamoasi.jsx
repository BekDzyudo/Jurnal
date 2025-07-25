import React from "react";
import person from "../../assets/person.png";
import useGetFetch from "../../hooks/useGetFetch";
import { useTranslation } from "react-i18next";

function TahririyatJamoasi() {
  const {t} = useTranslation()
  const { data, isPending, error } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/type-tahririyat/`
  );
console.log(data);

  return (
    <>
      {isPending && (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      {error && (
        <p className="mt-24 text-5xl font-semibold text-[#28c66f] text-center">
          Ma'lumotlar yuklanmadi
        </p>
      )}
      {data != {} && (
        <div className="align-elements mt-5 md:mt-10">
          <h1 className="md:text-3xl text-xl mb-5 font-semibold text-[#28c66f]">
          {t('journal_page.journalTeamTitle1')}
          </h1>
          <div className="row w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 md:mb-20">
            {data?.tahririyat_jamoasi?.map((item) => {
              return (
                <div key={item.id} className="w-full flex gap-5 rounded-lg p-3 bg-[#dcefe4]">
                  <div className="w-[30%]">
                    <img
                      src={item.image}
                      className="rounded-md h-auto object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-4 w-[70%]">
                    <div className="child">
                      <span className="text-base md:text-xl font-medium">
                        F.I.SH:
                      </span>
                      <p className="text-base">
                        {item.fish}
                      </p>
                    </div>
                    <div className="child">
                      <span className="text-base md:text-xl font-medium">{t('journal_page.lavozim')}:</span>
                      <p className="text-base">
                        {item.lavozim}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-14">
            <div className="bg-[#dcefe4] rounded-lg h-min">
              <h2 className="bg-[#28c66f] p-4 text-xl md:text-2xl text-center text-white font-semibold shadow-md rounded-t-lg">
              {t('journal_page.journalTeamTitle2')}:
              </h2>
              <ul className="px-5">
                {
                  data?.tahrir_hayati_azolari.map((item)=>{
                    return(
                      <li key={item.id} className="border border-b-white py-3 text-base text-center">
                        {item.fish}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="bg-[#dcefe4] rounded-lg h-min">
              <h2 className="bg-[#28c66f] p-4 text-xl md:text-2xl text-center text-white font-semibold shadow-md rounded-t-lg">
              {t('journal_page.journalTeamTitle3')}:
              </h2>
              <ul className="px-5">
                {
                  data?.jamoatchilik_kengashi_azolari.map((item)=>{
                    return(
                      <li key={item.id} className="border border-b-white py-3 text-base text-center">
                        {item.fish}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="bg-[#dcefe4] rounded-lg h-min">
              <h2 className="bg-[#28c66f] p-4 text-xl md:text-2xl text-center text-white font-semibold shadow-md rounded-t-lg">
              {t('journal_page.journalTeamTitle4')}:
              </h2>
              <ul className="px-5">
                {
                  data?.dizayner.map((item)=>{
                    return(
                      <li key={item.id} className="border border-b-white py-3 text-base text-center">
                       {item.fish}
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TahririyatJamoasi;
