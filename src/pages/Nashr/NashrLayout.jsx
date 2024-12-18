import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useGetFetch from "../../hooks/useGetFetch";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

function NashrLayout() {
  const navigate = useNavigate()
  const { t } = useTranslation();
  const {
    data: years,
    isPending,
    error,
  } = useGetFetch(`${import.meta.env.VITE_BASE_URL}/years/`);
  const handleChange=(e)=>{
    navigate(e.target.value);
  }
  return (
    <>
      {error && <p></p>}
      {years && (
        <div className="align-elements flex flex-col items-center md:items-start md:flex-row gap-5 mt-5">
          <select className="select select-success text-[green] w-full max-w-xs flex md:hidden text-base" onChange={handleChange}>
            <option className="text-base" value="/nashrlar" >
                  {t("nashrlar_page.all_sonlari")}
            </option>
            {years?.map((item) => {
                return (
                  <option className="text-base" key={item.id} value={`/nashrlar/${item.year}`}>
                      {item.year}- {t("nashrlar_page.sonlari")}
                  </option>
                );
              })}
          </select>
          <ul className="md:w-[30%] lg:w-[20%] flex-col gap-3 hidden md:flex">
            <li>
              <NavLink
                to={`/nashrlar`}
                end
                className={({ isActive }) =>
                  `btn outline hover:bg-[#28c66f] hover:text-white outline-1 outline-[#28c66f] text-base w-full ${
                    isActive
                      ? "bg-[#28c66f] text-white"
                      : "text-[#28c66f] bg-white"
                  }`
                }
              >
                {t("nashrlar_page.all_sonlari")}
              </NavLink>
            </li>
            {years?.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink
                    to={`/nashrlar/${item.year}`}
                    className={({ isActive }) =>
                      `btn outline hover:bg-[#28c66f] hover:text-white outline-1 outline-[#28c66f] text-base w-full ${
                        isActive
                          ? "bg-[#28c66f] text-white"
                          : "text-[#28c66f] bg-white"
                      }`
                    }
                  >
                    {item.year}- {t("nashrlar_page.sonlari")}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="w-full md:w-[70%] lg:w-[80%]">
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
}

export default NashrLayout;
