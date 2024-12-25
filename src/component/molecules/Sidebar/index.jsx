import React from "react";
import { useLocation, useNavigate } from "react-router";


const Index = ({ isFalse, setIsfalse, setBurgers, setBurger }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  
  const handleclikPumma = () => {
    navigate("/pumma");
    if(window.innerWidth < 640){
      setBurger(false)
      setBurgers(false)
    }
  }
  const handleclikClimatologi = () => {
    navigate("/climatologi");
    if(window.innerWidth < 640){
      setBurger(false)
      setBurgers(false)
    }
  }
  const handleclikUbuoy = () => {
    navigate("/ubuoy");
    if(window.innerWidth < 640){
      setBurger(false)
      setBurgers(false)
    }
  }
  return (
    <div className="text-xs w-full rounded-r-lg font-medium bg-[#2E3192] pt-4 pb-2">
      <div
        onClick={handleclikPumma}
        className="w-full cursor-pointer h-12 flex justify-center items-center "
      >
        <img src="\logo.svg" alt="logo" height={85} width={85}/>
      </div>

      {/* menu sidebar */}
      <div className="px-2">
        <div
          onClick={handleclikPumma}
          className={`rounded-lg flex cursor-pointer my-3 justify-between items-center  ${
            pathname === "/pumma" || pathname === "/pumma-gebang" || pathname === "/pumma-canti" || pathname === "/pumma-panjang" || pathname === "/pumma-marina" || pathname === "/pumma-pangandaran"
              ? "bg-white "
              : ""
          } `}
        >
          <div
            className={`py-3 flex flex-col space-y-2 items-center w-full ${
              isFalse === false ? "justify-start" : "justify-center"
            }`}
          >
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.5 13.1866L12.5203 1.43218C13.0618 0.855942 13.9382 0.855942 14.4785 1.43218L25.5 13.1866M4.26923 10.2332V23.5233C4.26923 24.3384 4.88954 25 5.65385 25H10.7308V18.6011C10.7308 17.7859 11.3511 17.1244 12.1154 17.1244H14.8846C15.6489 17.1244 16.2692 17.7859 16.2692 18.6011V25H21.3462C22.1105 25 22.7308 24.3384 22.7308 23.5233V10.2332M8.88462 25H19.0385" stroke={` ${
            pathname === "/pumma" || pathname === "/pumma-gebang" || pathname === "/pumma-canti" || pathname === "/pumma-panjang" || pathname === "/pumma-marina" || pathname === "/pumma-pangandaran"
              ? "#2E3192"
              : "white"
          }`} stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h1
              className={`text-xs font-medium  ${
            pathname === "/pumma" || pathname === "/pumma-gebang" || pathname === "/pumma-canti" || pathname === "/pumma-panjang" || pathname === "/pumma-marina" || pathname === "/pumma-pangandaran"
              ? "text-[#2E3192]"
              : "text-white "
          } ${isFalse === true ? "scale-0 hidden" : "scale-100"}`}
            >
              Pumma
            </h1>
          </div>
        </div>
        <div
          onClick={handleclikClimatologi}
          className={`rounded-lg flex cursor-pointer my-3 justify-between items-center  ${
            pathname === "/climatologi" || pathname === "/climatologi-canti"
            ? "bg-white" 
            : ""
          } `}
        >
          <div
            className={`py-3 flex flex-col space-y-2 items-center w-full ${
              isFalse === false ? "justify-start" : "justify-center"
            }`}
          >
            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.86727 13C5.33806 13 4.03454 13.585 2.95672 14.755C1.87891 15.925 1.34 17.34 1.34 19C1.34 20.66 1.87891 22.075 2.95672 23.245C4.03454 24.415 5.33806 25 6.86727 25H11.8418C12.892 25 13.7902 24.615 14.5364 23.845C15.2825 23.075 15.6741 22.12 15.7109 20.98M6.86727 13C7.97272 13 8.98145 13.325 9.89345 13.975C10.8055 14.625 11.4825 15.5 11.9247 16.6C12.9933 16.6 13.8915 17.03 14.6193 17.89C15.347 18.75 15.7109 19.78 15.7109 20.98M6.86727 13C7.23575 13.1 7.61345 13.19 8.00036 13.27C8.38727 13.35 8.76497 13.44 9.13345 13.54C9.28084 12.34 9.76909 11.35 10.5982 10.57C11.4273 9.79 12.3945 9.4 13.5 9.4C14.716 9.4 15.757 9.87 16.6229 10.81C17.4888 11.75 17.9218 12.88 17.9218 14.2C17.9218 15.18 17.6685 16.07 17.1618 16.87C16.6551 17.67 15.9873 18.26 15.1582 18.64C15.2503 19.04 15.3424 19.43 15.4345 19.81C15.5267 20.19 15.6188 20.58 15.7109 20.98M6.86727 13C7.12521 11.24 7.88521 9.8 9.14727 8.68C10.4093 7.56 11.8602 7 13.5 7C15.3424 7 16.9085 7.7 18.1982 9.1C19.4879 10.5 20.1327 12.2 20.1327 14.2C20.1327 15.74 19.7274 17.125 18.9167 18.355C18.1061 19.585 17.0375 20.46 15.7109 20.98M12.3945 5.8V1H14.6055V5.8H12.3945ZM19.7458 9.1L18.1982 7.42L21.3211 4L22.8687 5.71L19.7458 9.1ZM21.2382 15.4V13H25.66V15.4H21.2382ZM21.3211 24.37L18.1982 20.98L19.7458 19.3L22.8964 22.66L21.3211 24.37ZM7.25418 9.1L4.13127 5.71L5.70654 4L8.80181 7.42L7.25418 9.1ZM6.86727 22.6H11.8418C12.3024 22.6 12.6939 22.425 13.0164 22.075C13.3388 21.725 13.5 21.3 13.5 20.8C13.5 20.3 13.3434 19.875 13.0302 19.525C12.717 19.175 12.3301 19 11.8695 19H10.46L9.90727 17.56C9.64933 16.9 9.244 16.375 8.69127 15.985C8.13854 15.595 7.53054 15.4 6.86727 15.4C5.94606 15.4 5.16303 15.75 4.51818 16.45C3.87333 17.15 3.55091 18 3.55091 19C3.55091 20 3.87333 20.85 4.51818 21.55C5.16303 22.25 5.94606 22.6 6.86727 22.6Z" stroke={` ${
            pathname === "/climatologi" || pathname === "/climatologi-canti"
              ? "#2E3192"
              : "white"
          }`} stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

            <h1
              className={` text-xs font-medium  ${
                pathname === "/climatologi" || pathname === "/climatologi-canti"
                  ? "text-[#2E3192]"
                  : "text-white "
              } ${isFalse === true ? "scale-0 hidden" : "scale-100"}`}
            >
              Climatologi
            </h1>
          </div>
        </div>
        <div
          onClick={handleclikUbuoy}
          className={`rounded-lg flex cursor-pointer my-3 justify-between items-center  ${
            pathname === "/ubuoy" || pathname === "/ubuoy-001"
            ? "bg-white" 
            : ""
          } `}
        >
          <div
            className={`py-3 flex flex-col space-y-3 items-center  w-full ${
              isFalse === false ? "justify-start" : "justify-center"
            }`}
          >
            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.5678 17.0884L19.9768 15.6564L24 12.9407V15.6C24 16.6445 23.6673 17.6328 22.9795 18.5752C22.2736 19.5424 21.3688 20.392 20.2586 21.1223C19.1452 21.8545 17.8996 22.4352 16.5189 22.8623C15.1399 23.289 13.8008 23.5 12.5 23.5C11.1992 23.5 9.86014 23.289 8.48111 22.8623C7.1004 22.4352 5.8548 21.8545 4.74142 21.1223C3.63115 20.392 2.72644 19.5424 2.02054 18.5752C1.33272 17.6328 1 16.6445 1 15.6V12.9407L5.02322 15.6564L3.43218 17.0884C3.2511 17.2513 3.21384 17.5211 3.34397 17.7271C4.04743 18.8405 5.14591 19.7736 6.59968 20.542C8.04894 21.3081 9.54969 21.7973 11.1001 22.0055C11.243 22.0247 11.3873 21.9813 11.4958 21.8864C11.6044 21.7914 11.6667 21.6542 11.6667 21.51V10.8C11.6667 10.5239 11.4428 10.3 11.1667 10.3H7.66667V8.9H11.1667C11.4428 8.9 11.6667 8.67614 11.6667 8.4V6.99C11.6667 6.77494 11.5292 6.58398 11.3252 6.51579C10.633 6.28442 10.0745 5.90218 9.6367 5.36804C9.20907 4.84633 9 4.26302 9 3.6C9 2.74903 9.32319 2.03181 10.0011 1.42165C10.6811 0.809694 11.5041 0.5 12.5 0.5C13.4959 0.5 14.3189 0.809694 14.9989 1.42165C15.6768 2.03181 16 2.74903 16 3.6C16 4.26302 15.7909 4.84633 15.3633 5.36804C14.9255 5.90218 14.367 6.28442 13.6748 6.51579C13.4708 6.58398 13.3333 6.77494 13.3333 6.99V8.4C13.3333 8.67614 13.5572 8.9 13.8333 8.9H17.3333V10.3H13.8333C13.5572 10.3 13.3333 10.5239 13.3333 10.8V21.51C13.3333 21.6542 13.3956 21.7914 13.5042 21.8864C13.6127 21.9813 13.757 22.0247 13.8999 22.0055C15.4503 21.7973 16.9511 21.3081 18.4003 20.542C19.8541 19.7736 20.9526 18.8405 21.656 17.7271C21.7862 17.5211 21.7489 17.2513 21.5678 17.0884ZM12.5 5.3C12.9881 5.3 13.4278 5.1477 13.7845 4.82665C14.144 4.50304 14.3333 4.08355 14.3333 3.6C14.3333 3.11645 14.144 2.69696 13.7845 2.37335C13.4278 2.0523 12.9881 1.9 12.5 1.9C12.0119 1.9 11.5722 2.0523 11.2155 2.37335C10.856 2.69696 10.6667 3.11645 10.6667 3.6C10.6667 4.08355 10.856 4.50304 11.2155 4.82665C11.5722 5.1477 12.0119 5.3 12.5 5.3Z" stroke={` ${
            pathname === "/ubuoy" || pathname === "/ubuoy-001"
              ? "#2E3192"
              : "white"
          }`} stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <h1
              className={` text-xs font-medium  ${
                pathname === "/ubuoy" || pathname === "/ubuoy-001"
                  ? "text-[#2E3192]"
                  : "text-white "
              } ${isFalse === true ? "scale-0 hidden" : "scale-100"}`}
            >
              UBuoy
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;