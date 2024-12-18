import React from "react";
import news3 from "../../assets/news3.jpg";
import { useParams } from "react-router-dom";
import useGetFetch from "../../hooks/useGetFetch";

function YangilikDetails() {
  const { id } = useParams();
  const { data, isPending, error } = useGetFetch(
    `${import.meta.env.VITE_BASE_URL}/yangiliklar/${id}`
  );

  const monthArr = [
    "yanvar",
    "fevral",
    "mart",
    "aprel",
    "may",
    "iyun",
    "iyul",
    "avgust",
    "sentabr",
    "oktabr",
    "noyabr",
    "dekabr",
  ];

  return (
    <>
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
      {data && (
        <div className="align-elements mt-5 md:mt-10">
          <div className="w-full flex flex-col md:flex-row gap-10 rounded-lg p-3 pr-5 bg-[#dcefe4]">
            <div className="md:w-[30%] h-[350px] sm:h-[500px] md:h-auto">
              <img
                src={data.image}
                className="h-full sm:h-full md:h-auto w-full rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col gap-4 md:w-[70%]">
              <h2 className="font-semibold text-xl sm:text-3xl">{data.title}</h2>
              <span className="text-[green] font-semibold text-[14px] sm:text-lg">
                {new Date(data.created_at).getDate()}-
                {monthArr[new Date(data.created_at).getMonth()]}{" "}
                {new Date(data.created_at).getFullYear()}-yil
              </span>
              <p
                className="text-lg text-justify"
                dangerouslySetInnerHTML={{ __html: data.text }}
              ></p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default YangilikDetails;
