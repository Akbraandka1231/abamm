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
            <h1 className="text-3xl py-3 font-bold">Dashboard</h1>
            <p className="text-lg font-normal">Hi, Everyone!</p>
            <p className="text-lg font-normal text-[#888888]">Welcome to the dashboard</p>
            <h1 className="text-2xl py-3 font-bold">Sensor List</h1>
              </div>
              <div className={` ${data ? '' : ''}`}>
                {dataBuoy?.map((item, i) => {
                  return (
                      <div
                        onClick={() => {
                          navigate(item.link);
                        }}
                        className="flex flex-col rounded-lg border mx-10 mb-3 shadow-md px-6 text-gray-800 whitespace-nowrap pt-2 pb-2">
                        <h1 className="font-semibold text-lg">{item.name1}</h1>

                        <h1 className="font-semibold text-lg">{item.name2}</h1>
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
