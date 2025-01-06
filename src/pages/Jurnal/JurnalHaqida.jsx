import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import useGetFetch from "../../hooks/useGetFetch";
import { JurnalContext } from "../../context/Context";

function JurnalHaqida() {
  const { t } = useTranslation();
  const { lang } = useContext(JurnalContext);
  const { data, isPending, error } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/jurnal-haqida`,
    lang
  );

  return (
    <div className="align-elements mt-5 md:mt-10">
      <h1 className="xl:text-4xl md:text-3xl text-xl mb-5 font-semibold text-[#28c66f]">
        {t("journal_page.journalAboutTitle")}
      </h1>
      {isPending && (
        <div className="flex justify-center items-center h-[600px]">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
      {error && (
        <p className="mt-24 text-5xl font-semibold text-[#28c66f] text-center">
          Ma'lumotlar yuklanmadi
        </p>
      )}
      {data?.map((item, index) => {
        return (
          <p
            key={index}
            className="text-[green] text-sm md:text-lg text-justify"
            dangerouslySetInnerHTML={{ __html: item.text }}
          ></p>
        );
      })}
    </div>
  );
}

export default JurnalHaqida;
