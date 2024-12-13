import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import useGetFetch from "../../hooks/useGetFetch";

function NashrLayout() {
  const {
    data: years,
    isPending,
    error,
  } = useGetFetch(`http://192.168.101.175:3000/api/years/`);
  return (
    <>
      {isPending && <div className="flex justify-center items-center h-screen"><span className="loading loading-spinner loading-lg"></span></div>}
      {error && <p></p>}
      {years && (
        <div className="align-elements flex gap-5">
          <ul className="w-[20%] flex flex-col gap-3">
            <li>
              <NavLink
                to="/nashrlar"
                end
                className={({ isActive }) =>
                  `btn outline hover:bg-[#28c66f] hover:text-white outline-1 outline-[#28c66f] text-base w-full ${
                    isActive
                      ? "bg-[#28c66f] text-white"
                      : "text-[#28c66f] bg-white"
                  }`
                }
              >
                Barcha sonlari
              </NavLink>
            </li>
            {years?.map((item) => {
              return (
                <li key={item.id}>
                  <NavLink
                    to="/nashrla"
                    className={({ isActive }) =>
                      `btn outline hover:bg-[#28c66f] hover:text-white outline-1 outline-[#28c66f] text-base w-full ${
                        isActive
                          ? "bg-[#28c66f] text-white"
                          : "text-[#28c66f] bg-white"
                      }`
                    }
                  >
                    {item.year}-yil sonlari
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div className="w-[80%]">
            <Outlet/>
          </div>
        </div>
      )}
    </>
  );
}

export default NashrLayout;
