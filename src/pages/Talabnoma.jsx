import React, { useContext } from "react";
import useGetFetch from "../hooks/useGetFetch";
import { JurnalContext } from "../context/Context";
import { useTranslation } from "react-i18next";

function Talabnoma() {
  const {t} = useTranslation()
  const { lang } = useContext(JurnalContext);
  const { data, isPending, error } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/talabnoma`,
    lang
  );

  return (
    <div className="align-elements mt-5 md:mt-10">
      <h1 className="sm:text-3xl text-xl mb-4 sm:mb-7 font-semibold text-[#28c66f]">
        {t("talabnoma_page.talabnomaTitle")}
      </h1>
      <div className="flex flex-col gap-3 sm:gap-5">
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
        {data &&
          data.map((item) => {
            return (
              <div
                key={item.id}
                className="collapse collapse-arrow bg-[#dcefe4] rounded-lg"
              >
                <input type="checkbox" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-[16px] sm:text-xl font-medium">
                  {item.title}
                </div>
                <div className="collapse-content">
                  {
                    <p
                      className="text-s sm:text-lg"
                      dangerouslySetInnerHTML={{ __html: item.text }}
                    ></p>
                  }
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Talabnoma;
