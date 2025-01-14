import React from "react";
import { Chart, SimpleMap, Tabel } from "../../component/molecules";
import CartTigaData from "../../component/molecules/Chart/CartTigaData";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import axios from "axios";
import { useState, useEffect } from "react";

const Index = ({
  datarealtime,
  dataTable,
  dataimg,
  maps,
  dataGrafik,
  setDataGrafik,
  location,
}) => {
  const [dataApi, setData] = useState([]);
  const [dataChart, setDataChart] = useState([]);
  const [timeFrame, setTimeFrame] = useState("minute");
  const [dataCamera, setDataCamera] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c-greenproject.org:4443/petengoran/latest"
        );
        console.log(response.data);
        setData(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, [dataChart, timeFrame]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let responseDataChart;
        if (timeFrame === "7days") {
          responseDataChart = await axios.get(
            "https://c-greenproject.org:4443/petengoran/interval/?time=7%20days"
          );
        } else if (timeFrame === "30days") {
          responseDataChart = await axios.get(
            "https://c-greenproject.org:4443/petengoran/interval/?time=30%20days"
          );
        } else {
          responseDataChart = await axios.get(
            `https://c-greenproject.org:4443/petengoran/all/1?timer=${timeFrame}`
          );
        }

        console.log(responseDataChart.data);
        setDataChart(responseDataChart.data);
        console.log(dataChart, timeFrame);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, [timeFrame, dataChart]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c-greenproject.org:4443/petengoran/image",
          {
            responseType: "blob", // Penting: Mengatur responseType ke 'blob'
          }
        );

        // Konversi Blob ke URL agar dapat digunakan di <img>
        const imageUrl = URL.createObjectURL(response.data);
        setDataCamera(imageUrl);
      } catch (err) {
        console.log("Error fetching image:", err.message);
      }
    };

    fetchData();

    // Refresh data setiap 5 detik
    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  }, []);

  const handleSelectChange = (event) => {
    setTimeFrame(event.target.value);
  };

  const checkAlertLevelSafety = (alertLevel) => {
    const level = Number(alertLevel);

    if (isNaN(level)) {
      return {
        status: "Tidak Diketahui",
        color: "text-gray-500",
      };
    }

    if (level >= dataApi.result?.[99]?.threshold) {
      return {
        status: "DANGER",
        color: "text-red-600",
      };
    } else {
      return {
        status: "SAFE",
        color: "text-green-600",
      };
    }
  };

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto">
        <div className="min-h-screen w-full inline-block align-middle">
          <div className="min-h-screen md:w-full w-fit px-4 py-6 bg-white rounded-lg shadow-lg">
            <div className="w-full">
              <div className="md:mx-5 md:my-3 md:gap-5 md:pb-10">
                <TabGroup>
                  <TabList className="border-2 border-[#2E3192] overflow-hidden bg-white w-fit rounded-lg">
                    <Tab className="md:px-2 px-1 py-2 text-xs md:text-base font-medium text-[#2E3192] data-[selected]:bg-[#2E3192] data-[selected]:text-white data-[hover] data-[selected]:font-medium">
                      Card Status
                    </Tab>
                    <Tab className="md:px-2 px-1 py-2 text-xs md:text-base font-medium text-[#2E3192] border-x-2 border-[#2E3192] data-[selected]:bg-[#2E3192] data-[selected]:text-white data-[hover] data-[selected]:font-medium">
                      Table
                    </Tab>
                    <Tab className="md:px-2 px-1 py-2 text-xs md:text-base font-medium text-[#2E3192] border-r-2 border-[#2E3192] data-[selected]:bg-[#2E3192] data-[selected]:text-white data-[hover] data-[selected]:font-medium">
                      Grafik
                    </Tab>
                    <Tab className="md:px-2 px-1 py-2 text-xs md:text-base font-medium text-[#2E3192] data-[selected]:bg-[#2E3192] data-[selected]:text-white data-[hover] data-[selected]:font-medium">
                      Location
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <h1 className="py-2 font-bold md:text-2xl text-lg">
                        PUMMA U-TEWS 006
                      </h1>
                      <p className="py-4 mb-3 md:text-xl text-base font-normal">
                        Pulau Sebesi
                      </p>
                      <div className="md:px-16 md:mx-5 space-y-9 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0  md:justify-start md:gap-5 md:flex md:flex-wrap">
                        <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                          <div className="w-full">
                            <div className="flex space-x-4 items-center">
                              <p className="font-semibold md:text-xl text-lg">
                                Battery Voltage
                              </p>
                            </div>
                            <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                              {dataApi.result?.[99]?.voltage && (
                                <p>{`${dataApi.result[99].voltage} V`}</p>
                              )}
                              <svg
                                width="90"
                                height="80"
                                viewBox="0 0 150 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M123.75 17.1667H115.5V4.29167C115.5 1.92052 113.654 0 111.375 0H86.625C84.3459 0 82.5 1.92052 82.5 4.29167V17.1667H49.5V4.29167C49.5 1.92052 47.6541 0 45.375 0H20.625C18.3459 0 16.5 1.92052 16.5 4.29167V17.1667H8.25C3.69445 17.1667 0 21.0104 0 25.75V94.4167C0 99.1563 3.69445 103 8.25 103H123.75C128.306 103 132 99.1563 132 94.4167V25.75C132 21.0104 128.306 17.1667 123.75 17.1667ZM49.5 53.6458C49.5 54.8314 48.577 55.7917 47.4375 55.7917H18.5625C17.423 55.7917 16.5 54.8314 16.5 53.6458V49.3542C16.5 48.1686 17.423 47.2083 18.5625 47.2083H47.4375C48.577 47.2083 49.5 48.1686 49.5 49.3542V53.6458ZM115.5 53.6458C115.5 54.8314 114.577 55.7917 113.437 55.7917H103.125V66.5208C103.125 67.7064 102.202 68.6667 101.062 68.6667H96.9375C95.798 68.6667 94.875 67.7064 94.875 66.5208V55.7917H84.5625C83.423 55.7917 82.5 54.8314 82.5 53.6458V49.3542C82.5 48.1686 83.423 47.2083 84.5625 47.2083H94.875V36.4792C94.875 35.2936 95.798 34.3333 96.9375 34.3333H101.062C102.202 34.3333 103.125 35.2936 103.125 36.4792V47.2083H113.437C114.577 47.2083 115.5 48.1686 115.5 49.3542V53.6458Z"
                                  fill="#DDDDDD"
                                  fill-opacity="0.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                          <div className="w-full">
                            <div className="flex space-x-4 items-center">
                              <p className="font-semibold md:text-xl text-lg">
                                Device Temperature
                              </p>
                            </div>
                            <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                              {dataApi.result?.[99]?.temperature && (
                                <p>{`${dataApi.result[99].temperature} °C`}</p>
                              )}
                              <svg
                                width="90"
                                height="80"
                                viewBox="0 0 100 115"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M36.9838 127C57.3497 127 73.897 113.626 73.897 97.1647C73.897 88.477 69.4422 80.8753 61.027 74.7026C59.4713 73.5594 59.1174 72.9307 59.1174 71.2161L59.2589 19.8903C59.2589 7.9446 50.2783 0 36.9838 0C23.6187 0 14.6381 7.9446 14.6381 19.8903L14.7087 71.2161C14.7087 72.9307 14.3551 73.5594 12.8703 74.7026C4.38424 80.8753 0 88.477 0 97.1647C0 113.626 16.4767 127 36.9838 127ZM36.9838 118.713C22.2751 118.713 10.3244 108.996 10.3244 97.1647C10.3244 90.0202 14.4966 83.5617 21.9924 79.5036C24.1847 78.3033 25.0331 77.2174 25.0331 74.8741V20.2332C25.0331 13.0316 29.9125 8.40209 36.9838 8.40209C43.9845 8.40209 48.7933 13.0316 48.7933 20.2332V74.8741C48.7933 77.2174 49.6417 78.3033 51.834 79.5036C59.3298 83.5617 63.502 90.0202 63.502 97.1647C63.502 108.996 51.6219 118.713 36.9838 118.713ZM72.412 20.9762H87.8279C90.3028 20.9762 92 19.433 92 17.6611C92 15.8894 90.3028 14.3463 87.8279 14.3463H72.412C69.937 14.3463 68.2398 15.8894 68.2398 17.6611C68.2398 19.433 69.937 20.9762 72.412 20.9762ZM72.412 37.0371H87.8279C90.3028 37.0371 92 35.4937 92 33.722C92 31.9501 90.3028 30.4069 87.8279 30.4069H72.412C69.937 30.4069 68.2398 31.9501 68.2398 33.722C68.2398 35.4937 69.937 37.0371 72.412 37.0371ZM36.9132 110.996C46.3889 110.996 54.0263 104.823 54.0263 97.1076C54.0263 91.7348 50.2783 87.3338 44.8333 84.9335C42.5704 83.9619 41.7926 83.2759 41.7926 80.4751V50.1255C41.7926 47.1536 39.6709 45.3816 36.9132 45.3816C34.2258 45.3816 32.0338 47.1536 32.0338 50.1255V80.4751C32.0338 83.2759 31.256 83.9619 28.9931 84.9335C23.5481 87.3338 19.8001 91.7348 19.8001 97.1076C19.8001 104.823 27.4372 110.996 36.9132 110.996ZM72.412 53.0977H87.8279C90.3028 53.0977 92 51.5546 92 49.7826C92 48.011 90.3028 46.4105 87.8279 46.4105H72.412C69.937 46.4105 68.2398 48.011 68.2398 49.7826C68.2398 51.5546 69.937 53.0977 72.412 53.0977ZM72.412 69.1584H87.8279C90.3028 69.1584 92 67.5581 92 65.7862C92 64.0143 90.3028 62.4714 87.8279 62.4714H72.412C69.937 62.4714 68.2398 64.0143 68.2398 65.7862C68.2398 67.5581 69.937 69.1584 72.412 69.1584Z"
                                  fill="#DDDDDD"
                                  fill-opacity="0.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                          <div className="w-full">
                            <div className="flex space-x-4 items-center">
                              <p className="font-semibold md:text-xl text-lg">
                                Sea Water Level
                              </p>
                            </div>
                            <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                              {dataApi.result?.[99]?.waterlevel && (
                                <p>{`${dataApi.result[99].waterlevel} cm`}</p>
                              )}
                              <svg
                                width="90"
                                height="80"
                                viewBox="0 0 97 123"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M51.5717 1.3467C51.1922 0.924354 50.7214 0.5853 50.1914 0.352834C49.6615 0.120368 49.085 0 48.5017 0C47.9183 0 47.3419 0.120368 46.8119 0.352834C46.282 0.5853 45.8111 0.924354 45.4317 1.3467C34.7684 13.234 0 54.3309 0 84.7732C0 113.142 18.7399 131 48.5 131C78.2601 131 97 113.142 97 84.7732C97 54.3309 62.2316 13.234 51.5717 1.3467ZM53.8889 114.307C53.2416 114.308 52.6033 114.161 52.028 113.879C51.4526 113.596 50.9569 113.186 50.5826 112.682C50.2083 112.179 49.9663 111.597 49.877 110.986C49.7877 110.375 49.8537 109.752 50.0695 109.171C50.3451 108.412 50.8649 107.755 51.5549 107.294C52.2449 106.833 53.0699 106.591 53.9125 106.603C59.2622 106.591 64.3896 104.561 68.1725 100.955C71.9553 97.3499 74.0857 92.4629 74.0972 87.3638C74.0849 86.5607 74.3387 85.7744 74.8225 85.1168C75.3062 84.4591 75.9953 83.9637 76.7917 83.701C77.402 83.4953 78.0552 83.4324 78.6964 83.5175C79.3375 83.6026 79.9478 83.8332 80.476 84.19C81.0041 84.5468 81.4346 85.0193 81.7312 85.5677C82.0279 86.1161 82.182 86.7244 82.1806 87.3414C82.1725 94.4907 79.1892 101.345 73.8853 106.4C68.5813 111.456 61.3898 114.299 53.8889 114.307Z"
                                  fill="#DDDDDD"
                                  fill-opacity="0.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                          <div className="w-full">
                            <div className="flex space-x-4 items-center">
                              <p className="font-semibold md:text-xl text-lg">
                                Forcast30
                              </p>
                            </div>
                            <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                              {dataApi.result?.[99]?.forecast30 && (
                                <p>{`${dataApi.result[99].forecast30} cm`}</p>
                              )}
                              <svg
                                width="90"
                                height="80"
                                viewBox="0 0 132 103"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M36.3 72.1C38.9256 72.1 41.4437 71.2861 43.3004 69.8374C45.157 68.3887 46.2 66.4238 46.2 64.375C46.2322 64.1181 46.2322 63.8594 46.2 63.6025L64.614 49.234H66.132H67.65L78.276 57.5255C78.276 57.5255 78.276 57.783 78.276 57.9375C78.276 59.9863 79.319 61.9512 81.1756 63.3999C83.0323 64.8486 85.5504 65.6625 88.176 65.6625C90.8016 65.6625 93.3197 64.8486 95.1764 63.3999C97.033 61.9512 98.076 59.9863 98.076 57.9375V57.5255L122.1 38.625C124.058 38.625 125.972 38.1719 127.6 37.3231C129.228 36.4743 130.497 35.2678 131.246 33.8562C131.996 32.4447 132.192 30.8914 131.81 29.3929C131.428 27.8944 130.485 26.518 129.1 25.4376C127.716 24.3572 125.952 23.6215 124.031 23.3234C122.111 23.0254 120.12 23.1783 118.311 23.763C116.502 24.3477 114.956 25.3378 113.868 26.6082C112.781 27.8786 112.2 29.3721 112.2 30.9C112.168 31.1569 112.168 31.4156 112.2 31.6725L88.374 50.264H87.318L75.9 41.2C75.9 39.1512 74.857 37.1863 73.0004 35.7376C71.1437 34.2889 68.6256 33.475 66 33.475C63.3744 33.475 60.8563 34.2889 58.9996 35.7376C57.143 37.1863 56.1 39.1512 56.1 41.2L36.3 56.65C33.6744 56.65 31.1562 57.4639 29.2996 58.9126C27.443 60.3613 26.4 62.3262 26.4 64.375C26.4 66.4238 27.443 68.3887 29.2996 69.8374C31.1562 71.2861 33.6744 72.1 36.3 72.1ZM125.4 92.7H13.2V5.15C13.2 3.78414 12.5046 2.47421 11.2669 1.5084C10.0292 0.542588 8.35043 0 6.6 0C4.84957 0 3.17084 0.542588 1.93309 1.5084C0.695355 2.47421 0 3.78414 0 5.15V97.85C0 99.2159 0.695355 100.526 1.93309 101.492C3.17084 102.457 4.84957 103 6.6 103H125.4C127.15 103 128.829 102.457 130.067 101.492C131.305 100.526 132 99.2159 132 97.85C132 96.4841 131.305 95.1742 130.067 94.2084C128.829 93.2426 127.15 92.7 125.4 92.7Z"
                                  fill="#DDDDDD"
                                  fill-opacity="0.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                          <div className="w-full">
                            <div className="flex space-x-4 items-center">
                              <p className="font-semibold md:text-xl text-lg">
                                Forcast300
                              </p>
                            </div>
                            <div className="pt-2 md:text-3xl text-xl font-semibold drop-shadow-lg justify-between flex space-x-5 items-center">
                              {dataApi.result?.[99]?.forecast30 && (
                                <p>{`${dataApi.result[99].forecast30} cm`}</p>
                              )}
                              <svg
                                width="90"
                                height="80"
                                viewBox="0 0 132 103"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M36.3 72.1C38.9256 72.1 41.4437 71.2861 43.3004 69.8374C45.157 68.3887 46.2 66.4238 46.2 64.375C46.2322 64.1181 46.2322 63.8594 46.2 63.6025L64.614 49.234H66.132H67.65L78.276 57.5255C78.276 57.5255 78.276 57.783 78.276 57.9375C78.276 59.9863 79.319 61.9512 81.1756 63.3999C83.0323 64.8486 85.5504 65.6625 88.176 65.6625C90.8016 65.6625 93.3197 64.8486 95.1764 63.3999C97.033 61.9512 98.076 59.9863 98.076 57.9375V57.5255L122.1 38.625C124.058 38.625 125.972 38.1719 127.6 37.3231C129.228 36.4743 130.497 35.2678 131.246 33.8562C131.996 32.4447 132.192 30.8914 131.81 29.3929C131.428 27.8944 130.485 26.518 129.1 25.4376C127.716 24.3572 125.952 23.6215 124.031 23.3234C122.111 23.0254 120.12 23.1783 118.311 23.763C116.502 24.3477 114.956 25.3378 113.868 26.6082C112.781 27.8786 112.2 29.3721 112.2 30.9C112.168 31.1569 112.168 31.4156 112.2 31.6725L88.374 50.264H87.318L75.9 41.2C75.9 39.1512 74.857 37.1863 73.0004 35.7376C71.1437 34.2889 68.6256 33.475 66 33.475C63.3744 33.475 60.8563 34.2889 58.9996 35.7376C57.143 37.1863 56.1 39.1512 56.1 41.2L36.3 56.65C33.6744 56.65 31.1562 57.4639 29.2996 58.9126C27.443 60.3613 26.4 62.3262 26.4 64.375C26.4 66.4238 27.443 68.3887 29.2996 69.8374C31.1562 71.2861 33.6744 72.1 36.3 72.1ZM125.4 92.7H13.2V5.15C13.2 3.78414 12.5046 2.47421 11.2669 1.5084C10.0292 0.542588 8.35043 0 6.6 0C4.84957 0 3.17084 0.542588 1.93309 1.5084C0.695355 2.47421 0 3.78414 0 5.15V97.85C0 99.2159 0.695355 100.526 1.93309 101.492C3.17084 102.457 4.84957 103 6.6 103H125.4C127.15 103 128.829 102.457 130.067 101.492C131.305 100.526 132 99.2159 132 97.85C132 96.4841 131.305 95.1742 130.067 94.2084C128.829 93.2426 127.15 92.7 125.4 92.7Z"
                                  fill="#DDDDDD"
                                  fill-opacity="0.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                          <div className="w-full">
                            <div className="flex space-x-4 items-center">
                              <p className="font-semibold md:text-xl text-lg">
                                Status
                              </p>
                            </div>
                            <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                              {dataApi.result?.[99]?.alertlevel && (
                                <p
                                  className={`${
                                    checkAlertLevelSafety(
                                      dataApi.result[99].alertlevel
                                    ).color
                                  }`}
                                >
                                  {
                                    checkAlertLevelSafety(
                                      dataApi.result[99].alertlevel
                                    ).status
                                  }
                                </p>
                              )}
                              <svg
                                width="90"
                                height="80"
                                viewBox="0 0 130 103"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M93.3438 45.0625L70.8125 22.5312L79.825 13.5187L93.3438 27.0375L120.381 0L129.394 9.0125L93.3438 45.0625ZM122.312 60.5125L113.3 51.5L96.5625 68.2375L79.825 51.5L70.8125 60.5125L87.55 77.25L70.8125 93.9875L79.825 103L96.5625 86.2625L113.3 103L122.312 93.9875L105.575 77.25L122.312 60.5125Z"
                                  fill="#DDDDDD"
                                  fillOpacity="0.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                          <div className="w-full">
                            <div className="flex space-x-4 items-center">
                              <p className="font-semibold md:text-xl text-lg">
                                Pressure Level
                              </p>
                            </div>
                            <div className="pt-2 md:text-3xl text-xl font-semibold drop-shadow-lg justify-between flex space-x-5 items-center">
                              {dataApi.result?.[99]?.forecast30 && (
                                <p>{`${dataApi.result[99].forecast30} m`}</p>
                              )}
                              <svg
                                width="78"
                                height="90"
                                viewBox="0 0 83 108"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect width="83" height="108" />
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M75.6432 0H7.82461C6.74921 0.00284965 5.71978 0.208427 4.96075 0.571912C4.20173 0.935397 3.77468 1.42731 3.77271 1.9404V105.692C3.77271 106.762 5.5987 107.626 7.82461 107.626H75.6432C77.8842 107.626 79.7102 106.762 79.7102 105.692V1.9404C79.7082 1.42607 79.279 0.933071 78.5168 0.569381C77.7545 0.205692 76.7212 0.000951591 75.6432 0ZM11.8916 103.752V3.8736H71.5913V19.0836H62.0991C61.0237 19.0845 59.9926 19.2883 59.2308 19.6504C58.4689 20.0126 58.038 20.5037 58.0321 21.0168C58.0341 21.5311 58.4632 22.0241 59.2255 22.3878C59.9878 22.7515 61.021 22.9563 62.0991 22.9572H71.5913V32.4432H48.555C47.477 32.4442 46.4437 32.6489 45.6814 33.0126C44.9191 33.3763 44.49 33.8693 44.488 34.3836C44.494 34.8967 44.9248 35.3878 45.6867 35.75C46.4485 36.1121 47.4796 36.3159 48.555 36.3168H71.5913V45.4212H62.1896C61.113 45.4212 60.0804 45.6253 59.3191 45.9885C58.5579 46.3517 58.1302 46.8443 58.1302 47.358C58.1302 47.8717 58.5579 48.3643 59.3191 48.7275C60.0804 49.0907 61.113 49.2948 62.1896 49.2948H71.5913V58.3776H48.555C48.0021 58.3615 47.4481 58.3995 46.9272 58.4894C46.4063 58.5793 45.9294 58.7191 45.526 58.9002C45.1225 59.0813 44.801 59.2998 44.5813 59.5424C44.3615 59.785 44.2481 60.0465 44.2481 60.3108C44.2481 60.5751 44.3615 60.8366 44.5813 61.0792C44.801 61.3218 45.1225 61.5404 45.526 61.7214C45.9294 61.9025 46.4063 62.0423 46.9272 62.1322C47.4481 62.2221 48.0021 62.2601 48.555 62.244H71.5913V71.3268H62.1896C61.113 71.3268 60.0804 71.5309 59.3191 71.8941C58.5579 72.2573 58.1302 72.7499 58.1302 73.2636C58.1302 73.7773 58.5579 74.2699 59.3191 74.6331C60.0804 74.9964 61.113 75.2004 62.1896 75.2004H71.5913V84.2904H48.555C47.4796 84.2913 46.4485 84.4951 45.6867 84.8572C44.9248 85.2194 44.494 85.7105 44.488 86.2236C44.49 86.7379 44.9191 87.2309 45.6814 87.5946C46.4437 87.9583 47.477 88.1631 48.555 88.164H71.5913V103.745H11.8916V103.752Z"
                                  fill="#DDDDDD"
                                  fill-opacity="0.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                          <div className="w-full">
                            <div className="flex space-x-4 items-center">
                              <p className="font-semibold md:text-xl text-lg">
                                Ultrasonic Level
                              </p>
                            </div>
                            <div className="pt-2 md:text-3xl text-xl font-semibold drop-shadow-lg justify-between flex space-x-5 items-center">
                              {dataApi.result?.[99]?.forecast30 && (
                                <p>{`${dataApi.result[99].forecast30} m`}</p>
                              )}
                              <svg
                                width="100"
                                height="90"
                                viewBox="0 0 124 100"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M83.875 17.4602C82.7225 17.4598 81.617 17.0265 80.7994 16.2549C70.4306 6.50845 53.565 6.50845 43.2006 16.2549C42.7924 16.6386 42.3087 16.9421 41.777 17.1482C41.2453 17.3543 40.676 17.4589 40.1018 17.456C39.5276 17.4531 38.9595 17.3428 38.4302 17.1313C37.9008 16.9199 37.4205 16.6115 37.0166 16.2237C36.6127 15.8359 36.2931 15.3763 36.0762 14.8712C35.8592 14.3661 35.7492 13.8253 35.7522 13.2798C35.7553 12.7343 35.8714 12.1946 36.0939 11.6917C36.3165 11.1889 36.6412 10.7325 37.0494 10.3488C50.8044 -2.58958 73.1912 -2.58958 86.9506 10.3488C87.5657 10.9284 87.9859 11.6685 88.1578 12.4752C88.3297 13.2819 88.2456 14.1189 87.9161 14.8801C87.5867 15.6413 87.0268 16.2925 86.3074 16.7511C85.5879 17.2097 84.7414 17.4592 83.875 17.4602ZM70.75 29.9289C70.153 29.9298 69.5622 29.8141 69.0142 29.5889C68.4663 29.3636 67.973 29.0337 67.565 28.6197C66.8477 27.9029 65.9846 27.3321 65.0279 26.9421C64.0712 26.5521 63.041 26.351 62 26.351C60.959 26.351 59.9288 26.5521 58.9721 26.9421C58.0154 27.3321 57.1522 27.9029 56.435 28.6197C56.0412 29.0168 55.5688 29.3363 55.045 29.5599C54.5212 29.7836 53.9562 29.9071 53.3821 29.9233C52.8081 29.9395 52.2363 29.8481 51.6994 29.6544C51.1626 29.4607 50.6711 29.1684 50.2531 28.7943C49.8352 28.4201 49.4988 27.9714 49.2634 27.4738C49.028 26.9762 48.898 26.4394 48.8809 25.894C48.8639 25.3487 48.96 24.8055 49.164 24.2955C49.3679 23.7854 49.6755 23.3186 50.0694 22.9215C53.2369 19.7212 57.4762 17.9631 62 17.9631C66.5238 17.9631 70.7631 19.7253 73.935 22.9215C74.5232 23.5114 74.9163 24.2524 75.0655 25.0525C75.2147 25.8526 75.1135 26.6768 74.7745 27.4228C74.4354 28.1688 73.8733 28.8039 73.158 29.2494C72.4426 29.6949 71.6054 29.9311 70.75 29.9289ZM62.0044 99.6833C61.3259 99.6846 60.6563 99.5358 60.0489 99.2486C59.4414 98.9615 58.9126 98.544 58.5044 98.0291L47.2694 83.8396L37.1281 87.04C35.2731 87.6218 33.2081 86.9568 32.1144 85.4024C29.0956 81.1131 19.8994 68.05 10.6769 66.3044L4.27188 65.0908C3.27965 64.9034 2.38645 64.3951 1.74432 63.6525C1.10219 62.9098 0.750813 61.9787 0.75 61.0177C0.75 51.4126 11.1888 44.6545 26.2344 44.4342L34.2975 41.7327C34.9571 41.5121 35.6628 41.445 36.3554 41.5369C37.0479 41.6288 37.7072 41.8771 38.2779 42.261C38.8487 42.6448 39.3142 43.1531 39.6356 43.7431C39.957 44.3331 40.1248 44.9877 40.125 45.652C40.125 50.44 44.4563 56.8573 48.875 56.8573H49.2819C50.5156 50.76 54.5756 45.6395 62 45.6395C69.3938 45.6395 73.4537 50.7268 74.7006 56.7118H75.125C79.6312 56.7118 83.875 50.4816 83.875 45.6562C83.872 44.9961 84.0348 44.3449 84.3499 43.7567C84.665 43.1684 85.1234 42.6601 85.6869 42.274C86.2504 41.8879 86.9027 41.635 87.5897 41.5366C88.2767 41.4381 88.9785 41.4967 89.6369 41.7077L97.7306 44.2846C112.794 44.4924 123.25 51.2588 123.25 60.868C123.249 61.8291 122.898 62.7602 122.256 63.5028C121.614 64.2455 120.72 64.7538 119.728 64.9412L113.319 66.159C104.101 67.9046 94.9044 80.9677 91.8856 85.2569C91.3503 86.0099 90.5716 86.5769 89.6671 86.8724C88.7626 87.1678 87.7814 87.1756 86.8719 86.8945L76.7306 83.6942L65.9681 97.2893C65.6145 98.0044 65.0541 98.6092 64.3522 99.0331C63.6504 99.457 62.8361 99.6825 62.0044 99.6833ZM48.875 74.7956C50.2269 74.7956 51.5262 75.3858 52.3706 76.4498L61.9388 88.5445L71.6294 76.3044C72.7625 74.8788 74.7356 74.3094 76.5031 74.858L86.5 78.0167C92.5856 69.7458 101.279 59.962 111.613 58.0085L113.266 57.6927C110.961 54.8581 105.466 52.593 97 52.593C96.527 52.5928 96.0572 52.5198 95.6087 52.3768L91.7412 51.1424C89.4531 58.3826 82.9913 65.0243 75.125 65.0243H70.75C69.5897 65.0243 68.4769 64.5864 67.6564 63.807C66.8359 63.0275 66.375 61.9703 66.375 60.868C66.375 59.2471 66.06 53.952 62 53.952C57.94 53.952 57.625 59.2429 57.625 60.868C57.625 63.1664 55.6694 65.1698 53.25 65.1698H48.875C41.0175 65.1698 34.5688 58.5031 32.2719 51.2255L28.4525 52.5015C27.9859 52.6577 27.4948 52.7378 27 52.7384C18.5344 52.7384 13.0394 55.0036 10.7338 57.8423L12.3875 58.154C22.7169 60.1074 31.4144 69.8954 37.5 78.1622L47.4925 75.0035C47.9475 74.8621 48.4112 74.7956 48.875 74.7956Z"
                                  fill="#DDDDDD"
                                  fill-opacity="0.5"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                            <div className="w-full">
                              <div className="flex space-x-4 items-center">
                                <p className="font-semibold md:text-xl text-lg">
                                  PV Voltage
                                </p>
                              </div>
                              <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                <p>{`27,89 V`}</p>

                                <svg
                                  width="90"
                                  height="80"
                                  viewBox="0 0 150 100"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M123.75 17.1667H115.5V4.29167C115.5 1.92052 113.654 0 111.375 0H86.625C84.3459 0 82.5 1.92052 82.5 4.29167V17.1667H49.5V4.29167C49.5 1.92052 47.6541 0 45.375 0H20.625C18.3459 0 16.5 1.92052 16.5 4.29167V17.1667H8.25C3.69445 17.1667 0 21.0104 0 25.75V94.4167C0 99.1563 3.69445 103 8.25 103H123.75C128.306 103 132 99.1563 132 94.4167V25.75C132 21.0104 128.306 17.1667 123.75 17.1667ZM49.5 53.6458C49.5 54.8314 48.577 55.7917 47.4375 55.7917H18.5625C17.423 55.7917 16.5 54.8314 16.5 53.6458V49.3542C16.5 48.1686 17.423 47.2083 18.5625 47.2083H47.4375C48.577 47.2083 49.5 48.1686 49.5 49.3542V53.6458ZM115.5 53.6458C115.5 54.8314 114.577 55.7917 113.437 55.7917H103.125V66.5208C103.125 67.7064 102.202 68.6667 101.062 68.6667H96.9375C95.798 68.6667 94.875 67.7064 94.875 66.5208V55.7917H84.5625C83.423 55.7917 82.5 54.8314 82.5 53.6458V49.3542C82.5 48.1686 83.423 47.2083 84.5625 47.2083H94.875V36.4792C94.875 35.2936 95.798 34.3333 96.9375 34.3333H101.062C102.202 34.3333 103.125 35.2936 103.125 36.4792V47.2083H113.437C114.577 47.2083 115.5 48.1686 115.5 49.3542V53.6458Z"
                                    fill="#DDDDDD"
                                    fill-opacity="0.5"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                            <div className="w-full">
                              <div className="flex space-x-4 items-center">
                                <p className="font-semibold md:text-xl text-lg">
                                  PV Current
                                </p>
                              </div>
                              <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                <p>{`2.61 A`}</p>

                                <svg
                                  width="90"
                                  height="80"
                                  viewBox="0 0 132 103"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M36.3 72.1C38.9256 72.1 41.4437 71.2861 43.3004 69.8374C45.157 68.3887 46.2 66.4238 46.2 64.375C46.2322 64.1181 46.2322 63.8594 46.2 63.6025L64.614 49.234H66.132H67.65L78.276 57.5255C78.276 57.5255 78.276 57.783 78.276 57.9375C78.276 59.9863 79.319 61.9512 81.1756 63.3999C83.0323 64.8486 85.5504 65.6625 88.176 65.6625C90.8016 65.6625 93.3197 64.8486 95.1764 63.3999C97.033 61.9512 98.076 59.9863 98.076 57.9375V57.5255L122.1 38.625C124.058 38.625 125.972 38.1719 127.6 37.3231C129.228 36.4743 130.497 35.2678 131.246 33.8562C131.996 32.4447 132.192 30.8914 131.81 29.3929C131.428 27.8944 130.485 26.518 129.1 25.4376C127.716 24.3572 125.952 23.6215 124.031 23.3234C122.111 23.0254 120.12 23.1783 118.311 23.763C116.502 24.3477 114.956 25.3378 113.868 26.6082C112.781 27.8786 112.2 29.3721 112.2 30.9C112.168 31.1569 112.168 31.4156 112.2 31.6725L88.374 50.264H87.318L75.9 41.2C75.9 39.1512 74.857 37.1863 73.0004 35.7376C71.1437 34.2889 68.6256 33.475 66 33.475C63.3744 33.475 60.8563 34.2889 58.9996 35.7376C57.143 37.1863 56.1 39.1512 56.1 41.2L36.3 56.65C33.6744 56.65 31.1562 57.4639 29.2996 58.9126C27.443 60.3613 26.4 62.3262 26.4 64.375C26.4 66.4238 27.443 68.3887 29.2996 69.8374C31.1562 71.2861 33.6744 72.1 36.3 72.1ZM125.4 92.7H13.2V5.15C13.2 3.78414 12.5046 2.47421 11.2669 1.5084C10.0292 0.542588 8.35043 0 6.6 0C4.84957 0 3.17084 0.542588 1.93309 1.5084C0.695355 2.47421 0 3.78414 0 5.15V97.85C0 99.2159 0.695355 100.526 1.93309 101.492C3.17084 102.457 4.84957 103 6.6 103H125.4C127.15 103 128.829 102.457 130.067 101.492C131.305 100.526 132 99.2159 132 97.85C132 96.4841 131.305 95.1742 130.067 94.2084C128.829 93.2426 127.15 92.7 125.4 92.7Z"
                                    fill="#DDDDDD"
                                    fill-opacity="0.5"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                            <div className="w-full">
                              <div className="flex space-x-4 items-center">
                                <p className="font-semibold md:text-xl text-lg">
                                  Load Current
                                </p>
                              </div>
                              <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                <p>{`2.32 A`}</p>

                                <svg
                                  width="90"
                                  height="80"
                                  viewBox="0 0 130 103"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M93.3438 45.0625L70.8125 22.5312L79.825 13.5187L93.3438 27.0375L120.381 0L129.394 9.0125L93.3438 45.0625ZM122.312 60.5125L113.3 51.5L96.5625 68.2375L79.825 51.5L70.8125 60.5125L87.55 77.25L70.8125 93.9875L79.825 103L96.5625 86.2625L113.3 103L122.312 93.9875L105.575 77.25L122.312 60.5125Z"
                                    fill="#DDDDDD"
                                    fillOpacity="0.5"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                            <div className="w-full">
                              <div className="flex space-x-4 items-center">
                                <p className="font-semibold md:text-xl text-lg">
                                  Wind Direct
                                </p>
                              </div>
                              <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                <p>{`TIMUR`}</p>

                                <svg
                                  width="100"
                                  height="87"
                                  viewBox="0 0 120 87"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M46.7543 7.8393C48.0323 6.71468 49.6081 5.88371 51.3417 5.42025C53.0752 4.95679 54.9128 4.87521 56.6911 5.18275C58.4694 5.49029 60.1332 6.17743 61.5348 7.18309C62.9364 8.18874 64.0322 9.48176 64.7248 10.9472C65.4175 12.4126 65.6855 14.005 65.5051 15.5829C65.3247 17.1608 64.7014 18.6753 63.6907 19.9917C62.68 21.308 61.3132 22.3856 59.7117 23.1285C58.1102 23.8714 56.3238 24.2566 54.5111 24.25H5M63.258 79.1607C64.536 80.2853 66.1118 81.1163 67.8454 81.5798C69.5789 82.0432 71.4165 82.1248 73.1948 81.8173C74.9731 81.5097 76.6369 80.8226 78.0385 79.8169C79.44 78.8113 80.5358 77.5182 81.2285 76.0528C81.9212 74.5874 82.1892 72.995 82.0088 71.4171C81.8284 69.8392 81.2051 68.3247 80.1944 67.0083C79.1837 65.692 77.8169 64.6144 76.2154 63.8715C74.6139 63.1286 72.8274 62.7434 71.0148 62.75H5M91.5343 22.9506C93.1344 21.5544 95.1031 20.5247 97.2663 19.9524C99.4294 19.3802 101.721 19.2832 103.937 19.6698C106.153 20.0565 108.226 20.915 109.973 22.1694C111.72 23.4237 113.086 25.0354 113.952 26.8617C114.817 28.688 115.155 30.6727 114.935 32.6403C114.715 34.6079 113.944 36.4978 112.69 38.1427C111.436 39.7876 109.739 41.137 107.747 42.0714C105.756 43.0058 103.531 43.4965 101.272 43.5H5"
                                    stroke="#DDDDDD"
                                    stroke-opacity="0.5"
                                    stroke-width="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                            <div className="w-full">
                              <div className="flex space-x-4 items-center">
                                <p className="font-semibold md:text-xl text-lg">
                                  Wind Speed
                                </p>
                              </div>
                              <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                <p>{`2.61 m/s`}</p>

                                <svg
                                  width="100"
                                  height="87"
                                  viewBox="0 0 120 87"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M46.7543 7.8393C48.0323 6.71468 49.6081 5.88371 51.3417 5.42025C53.0752 4.95679 54.9128 4.87521 56.6911 5.18275C58.4694 5.49029 60.1332 6.17743 61.5348 7.18309C62.9364 8.18874 64.0322 9.48176 64.7248 10.9472C65.4175 12.4126 65.6855 14.005 65.5051 15.5829C65.3247 17.1608 64.7014 18.6753 63.6907 19.9917C62.68 21.308 61.3132 22.3856 59.7117 23.1285C58.1102 23.8714 56.3238 24.2566 54.5111 24.25H5M63.258 79.1607C64.536 80.2853 66.1118 81.1163 67.8454 81.5798C69.5789 82.0432 71.4165 82.1248 73.1948 81.8173C74.9731 81.5097 76.6369 80.8226 78.0385 79.8169C79.44 78.8113 80.5358 77.5182 81.2285 76.0528C81.9212 74.5874 82.1892 72.995 82.0088 71.4171C81.8284 69.8392 81.2051 68.3247 80.1944 67.0083C79.1837 65.692 77.8169 64.6144 76.2154 63.8715C74.6139 63.1286 72.8274 62.7434 71.0148 62.75H5M91.5343 22.9506C93.1344 21.5544 95.1031 20.5247 97.2663 19.9524C99.4294 19.3802 101.721 19.2832 103.937 19.6698C106.153 20.0565 108.226 20.915 109.973 22.1694C111.72 23.4237 113.086 25.0354 113.952 26.8617C114.817 28.688 115.155 30.6727 114.935 32.6403C114.715 34.6079 113.944 36.4978 112.69 38.1427C111.436 39.7876 109.739 41.137 107.747 42.0714C105.756 43.0058 103.531 43.4965 101.272 43.5H5"
                                    stroke="#DDDDDD"
                                    stroke-opacity="0.5"
                                    stroke-width="10"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      {" "}
                      <h1 className="py-2 font-bold md:text-2xl text-lg">
                        PUMMA U-TEWS 006
                      </h1>
                      <p className="py-1 md:text-xl text-lg font-normal py-3">
                        Pulau Sebesi
                      </p>
                      <div className="grid text-center">
                        <Tabel dataPumma={dataApi} />
                      </div>
                    </TabPanel>
                    <TabPanel>
                      {" "}
                      <h1 className="py-2 font-bold md:text-2xl text-lg">
                        PUMMA U-TEWS 006
                      </h1>
                      <p className="py-2 pb-3 md:text-xl text-lg font-normal">
                        Pulau Sebesi
                      </p>
                      <div className="border border-black overflow-hidden bg-white w-fit rounded-lg py-1">
                        <select value={timeFrame} onChange={handleSelectChange}>
                          <option value="minute">Minutes</option>
                          <option value="hour">Hour</option>
                          <option value="day">Day</option>
                          <option value="7days">7 Days</option>
                          <option value="30days">30 Days</option>
                        </select>
                      </div>
                      <div className="grid md:grid-cols-2 md:gap-5">
                        <div className=" md:px-3 md:py-3  md:flex items-center rounded-sm">
                          <div aria-label="waterlevel" className="w-full">
                            <CartTigaData
                              DataLine={dataChart.result}
                              name={"waterlevel"}
                              labelname1={"WaterLevel"}
                              borderColor1={"rgb(0,0,0,0,0)"}
                              bgcolor1={"rgb(0,0,0,0,0)"}
                              index1={1}
                              labelname2={"frc30"}
                              borderColor2={"rgb(128,0,0)"}
                              bgcolor2={"rgb(128,0,0)"}
                              index2={4}
                              labelname3={"frc300"}
                              borderColor3={"rgb(160,82,45)"}
                              bgcolor3={"rgb(160,82,45)"}
                              index3={5}
                            />
                          </div>
                        </div>
                        <div className=" px-3 py-3  flex items-center rounded-sm">
                          <div aria-label="waterlevel" className="w-full">
                            <CartTigaData
                              DataLine={dataChart.result}
                              name={"alert level"}
                              labelname1={"alertlevel"}
                              borderColor1={"rgb(0,0,0,0,0)"}
                              bgcolor1={"rgb(0,0,0,0,0)"}
                              index1={8}
                              labelname2={"rms"}
                              borderColor2={"rgb(0,0,255)"}
                              bgcolor2={"rgb(0,0,255)"}
                              index2={6}
                              labelname3={"threshold"}
                              borderColor3={"rgb(128,0,0)"}
                              bgcolor3={"rgb(128,0,0)"}
                              index3={7}
                            />
                          </div>
                        </div>
                        <div className=" px-3 py-3  flex items-center rounded-sm">
                          <div aria-label="voltage" className="w-full">
                            <Chart
                              DataLine={dataChart.result}
                              name={"voltage"}
                              labelname={"voltage"}
                              borderColor={"rgb(0,128,128)"}
                              bgcolor={"rgb(0,128,128)"}
                              index={2}
                            />
                          </div>
                        </div>
                        <div className=" px-3 py-3  flex items-center rounded-sm">
                          <div aria-label="temperature" className="w-full">
                            <Chart
                              DataLine={dataChart.result}
                              name={"temperature"}
                              labelname={"temperature"}
                              borderColor={"rgb(0,0,128)"}
                              bgcolor={"rgb(0,0,128)"}
                              index={3}
                            />
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      <h1 className="py-2 font-bold md:text-2xl text-lg">
                        PUMMA U-TEWS 006
                      </h1>
                      <p className="py-2 pb-3 md:text-xl text-lg font-normal">
                        Pulau Sebesi
                      </p>
                      <div className=" px-3 py-3 w-full  flex items-center rounded-sm">
                        <div className="w-[100%] h-[100%] overflow-hidden">
                          <SimpleMap
                            latitude={-5.5875317}
                            longitude={105.2264902}
                          />
                        </div>
                      </div>
                      <div className=" px-3 py-3  flex items-center rounded-sm">
                        <div className="w-full ">
                          <img src={dataCamera} alt="" />
                        </div>
                      </div>
                    </TabPanel>
                  </TabPanels>
                </TabGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
