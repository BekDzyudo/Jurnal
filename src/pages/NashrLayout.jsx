import React from "react";
import {NavLink, Outlet } from "react-router-dom";

function NashrLayout() {
  return (
    <div className="align-elements flex gap-5">
      <ul className="w-[20%] flex flex-col gap-3">
        <li>
          <NavLink to="/nashrlar" end className={({isActive})=>`btn outline hover:bg-[#45b3c2] hover:text-white outline-1 outline-[#45b3c2] text-base w-full ${isActive ? "bg-[#45b3c2] text-white" : "text-[#45b3c2] bg-white"}`}>Barcha sonlari</NavLink>
        </li>
        <li>
          <NavLink to="/b" className={({isActive})=>`btn outline outline-1 hover:bg-[#45b3c2] hover:text-white outline-[#45b3c2] text-base w-full ${isActive ? "bg-[#45b3c2] text-white" : "text-[#45b3c2] bg-white"}`}>2022-yil sonlari</NavLink>
        </li>
        <li>
          <NavLink to="/c" className={({isActive})=>`btn outline outline-1 hover:bg-[#45b3c2] hover:text-white outline-[#45b3c2] text-base w-full ${isActive ? "bg-[#45b3c2] text-white" : "text-[#45b3c2] bg-white"}`}>2023-yil sonlari</NavLink>
        </li>
        <li>
          <NavLink to="/d" className={({isActive})=>`btn outline outline-1 hover:bg-[#45b3c2] hover:text-white outline-[#45b3c2] text-base w-full ${isActive ? "bg-[#45b3c2] text-white" : "text-[#45b3c2] bg-white"}`}>2024-yil sonlari</NavLink>
        </li>
      </ul>
      <div className="w-[80%]">
        <Outlet />
      </div>
    </div>
  );
}

export default NashrLayout;
