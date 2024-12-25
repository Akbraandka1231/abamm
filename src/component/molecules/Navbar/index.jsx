import React, { useEffect, useState } from "react";
import { MdOutlineCloudDownload } from "react-icons/md";
import { BiCaretLeftCircle, BiTime } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useLocation } from "react-router";
import { Countdown } from "../../../utils";
const Index = ({ isFalse, setIsfalse, setBurger, setBurgers }) => {
  const { pathname } = useLocation();
  const [timeexp, setTimeExp] = useState()
  useEffect(()=>{
    switch (pathname) {
      case '/pumma-canti':
        // Eksekusi kode yang sesuai dengan nilai 'option1'
        setTimeExp('2023-07-21T00:00:00')
        break;
      case '/pumma-panjang':
        // Eksekusi kode yang sesuai dengan nilai 'option2'
        setTimeExp('2023-07-22T00:00:00')
        break;
      case '/pumma-gebang':
        // Eksekusi kode yang sesuai dengan nilai 'option2'
        setTimeExp('2023-07-10T00:00:00')
        break;
      default:
        // Eksekusi kode default
        setTimeExp(null)
    }
  }, [pathname])
  const {countdown} = Countdown(timeexp)

  return (
    <div className="overflow-y-hidden overflow-x-hidden text-xs font-medium w-full flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <div className=" sm:hidden">
          <GiHamburgerMenu
            onClick={() => {
              setBurger(true);
              setBurgers(true);
            }}
            className="text-lg"
          />
        </div>
        <div
          onClick={() => setIsfalse(!isFalse)}
          className="cursor-pointer hidden sm:block "
        >
          <BiCaretLeftCircle
          onClick={() => {
          }}
            className={`text-xl ${
              isFalse === true
                ? "rotate-180 ease-out duration-700 "
                : "rotate-0 ease-out duration-700 "
            }`}
          />
        </div>
        <div>
          {pathname.length === 1
            ? "Dahboard"
            : pathname.replace("/", " " || "-", " ")}
        </div>
      </div>
      <div className="flex space-x-6 items-center">
        <div className="flex space-x-5">
          <div className="">
            <h1>PUMMA Information</h1>
          </div>
          <div className="flex items-center space-x-2 ">
            <BiTime className="text-lg" />
            {countdown && (
        <p>
           {countdown.days} day {countdown.hours}:{countdown.minutes}:{countdown.seconds}
        </p>
      )}
          </div>

          <div className="flex items-center space-x-2 cursor-pointer">
            <MdOutlineCloudDownload className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
