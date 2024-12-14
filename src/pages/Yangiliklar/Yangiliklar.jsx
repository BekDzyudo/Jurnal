import React from "react";
import { Link } from "react-router-dom";
import useGetFetch from "../../hooks/useGetFetch";

function Yangiliklar() {
  const { data, isPending, error } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/yangiliklar/`
  );
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
      {data && (
        <div className="align-elements">
          <h2 className="text-3xl mb-5 font-semibold text-[#28c66f]">
            Yangiliklar
          </h2>
          <div className="grid grid-cols-4 gap-5">
            {data.map((item) => {
              return (
                <Link
                  key={item.id}
                  to=""
                  className="rounded-lg bg-[#dcefe4] shadow-xl h-min group"
                >
                  <figure className="h-60 p-5 pb-0">
                    <img
                      src={item.image}
                      className="object-cover w-full h-full rounded-md group-hover:scale-105 transition duration-300"
                    />
                  </figure>
                  <div className="p-3 flex flex-col gap-3">
                    <h2 className="text-center text-base font-semibold">
                      {item.title.slice(0, 78)}...
                    </h2>
                    <div className="card-actions justify-center">
                      <button className="btn btn-sm bg-[#28c66f] hover:bg-[#1bd66c] text-white border-none w-[50%] text-base">
                        Batafsil
                      </button>
                    </div>
                    <div className="flex justify-end">
                      <span className="text-[green] font-medium">
                        {new Date(item.created_at).getDate() < 10
                          ? "0" + new Date(item.created_at).getDate()
                          : new Date(item.created_at).getDate()}
                        .
                        {new Date(item.created_at).getMonth() < 10
                          ? "0" + new Date(item.created_at).getMonth() + 1
                          : new Date(item.created_at).getMonth() + 1}
                        .
                        {new Date(item.created_at).getFullYear() < 10
                          ? "0" + new Date(item.created_at).getFullYear()
                          : new Date(item.created_at).getFullYear()}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Yangiliklar;
