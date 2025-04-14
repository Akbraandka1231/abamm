import React from "react";
import { useNavigate } from "react-router";
import Hooks from "./hooks";

const Index = () => {
  const navigate = useNavigate();
  const { dataBuoy, data } = Hooks();

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="min-h-screen w-full inline-block align-middle">
          <div className="min-h-screen py-6 bg-white rounded-lg shadow-md">
            <div className="w-full">
            <div className="mx-10">
            <h1 className="md:text-3xl text-2xl py-3 font-bold">Dashboard</h1>
            <p className="md:text-lg text-base font-normal">Hi, Everyone!</p>
            <p className="md:text-lg text-sm font-normal text-[#888888]">Welcome to the dashboard</p>
            <h1 className="md:text-2xl text-xl py-3 font-bold">Sensor List</h1>
              </div>
              <div className={` ${data ? '' : ''}`}>
                {dataBuoy?.map((item, i) => {
                  return (
                      <div
                        onClick={() => {
                          navigate(item.link);
                        }}
                        className="flex flex-col rounded-lg border mx-10 mb-3 shadow-md px-6 text-gray-800 whitespace-nowrap pt-2 pb-2">
                        <h1 className="max-[375px]:text-xs min-[450px]:text-lg font-semibold sm:text-base text-sm">{item.name1}</h1>
                        <p className="min-[450px]:text-base font-normal md:text-sm text-xs">{item.namelocation1}</p>

                        <h1 className="max-[375px]:text-xs min-[450px]:text-lg font-semibold sm:text-base text-sm">{item.name2}</h1>
                        <p className="min-[450px]:text-base font-normal md:text-sm text-xs">{item.namelocation2}</p>
                      </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
