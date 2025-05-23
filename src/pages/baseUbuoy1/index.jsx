import React from "react";
import { SimpleMap } from "../../component/molecules";
import CartSebesi from "../../component/molecules/Chart/ChartSebesi";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import axios from "axios";
import { useState, useEffect } from "react";
import TableModbus from "../../component/molecules/TableModbus";
import TableSerial from "../../component/molecules/TableSerial";
import TableGPS from "../../component/molecules/TableGPS";
import TableCPU from "../../component/molecules/TableCPU";
import TableSCC from "../../component/molecules/TableSCC";

const Index = ({
  datarealtime,
  dataTable,
  dataimg,
  maps,
  dataGrafik,
  setDataGrafik,
  location,
}) => {
  const [dataBuoy, setDataBuoy] = useState([]);
  const [dataSerial, setDataSerial] = useState([]);
  const [dataScc, setDataScc] = useState([]);
  const [dataGPS, setDataGPS] = useState([]);
  const [dataCPU, setDataCPU] = useState([]);
  const [dataTableModbus, setDataTableModbus] = useState([]);
  const [dataTableSerial, setDataTableSerial] = useState([]);
  const [dataTableGPS, setDataTableGPS] = useState([]);
  const [dataTableCPU, setDataTableCPU] = useState([]);
  const [dataTableSCC, setDataTableSCC] = useState([]);
  const [dataChartModbus, setDataChartModbus] = useState([]);
  const [dataChartSerial, setDataChartSerial] = useState([]);
  const [dataChartGPS, setDataChartGPS] = useState([]);
  const [dataChartCPU, setDataChartCPU] = useState([]);
  const [dataChartSCC, setDataChartSCC] = useState([]);
  const [timeFrame, setTimeFrame] = useState("minute");
  // const [dataCamera, setDataCamera] = useState([]);
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          "https://c-greenproject.org:8040/gps_latest"
        );
        const data = await response.json();

        if (data && data.latitude && data.longitude) {
          setCoordinates({
            latitude: data.latitude,
            longitude: data.longitude,
          });
        }
      } catch (error) {
        console.error("Error fetching GPS data:", error);
      }
    };

    fetchCoordinates();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c-greenproject.org:8040/modbus_latest10"
        );
        console.log(response.data);
        setDataTableModbus(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, [dataChartModbus, timeFrame]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c-greenproject.org:8040/serial_latest10"
        );
        console.log(response.data);
        setDataTableSerial(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, [dataChartSerial, timeFrame]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c-greenproject.org:8040/gps_latest10"
        );
        console.log(response.data);
        setDataTableGPS(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, [dataChartGPS, timeFrame]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c-greenproject.org:8040/cpu_latest10"
        );
        console.log(response.data);
        setDataTableCPU(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, [dataChartGPS, timeFrame]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c-greenproject.org:8040/scc_latest10"
        );
        console.log(response.data);
        setDataTableSCC(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(interval);
  }, [dataChartSCC, timeFrame]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let responseDataChart;
        
        // Define the API endpoints based on timeFrame
        switch(timeFrame) {
          case "minute":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/modbus_latest10"
            );
            break;
          case "daily":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/modbus_daily"
            );
            break;
            case "weekly":
              responseDataChart = await axios.get(
                "https://c-greenproject.org:8040/modbus_weekly"
              );
              break;
          case "monthly":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/modbus_monthly"
            );
            break;
          default:
            // Handle day timeFrame or any other cases
            responseDataChart = await axios.get(
              `https://c-greenproject.org:8040/modbus_monthly`
            );
        }
  
        setDataChartModbus(responseDataChart.data);
        console.log("Response data:", responseDataChart.data);
        console.log("Current timeFrame:", timeFrame);
      } catch (err) {
        console.log("Error fetching data:", err.message);
      }
    };
  
    // Initial fetch
    fetchData();
  
    // Set up polling interval
    const interval = setInterval(fetchData, 5000);
  
    // Cleanup interval on unmount or timeFrame change
    return () => clearInterval(interval);
  }, [timeFrame]); // Removed dataChart from dependencies to avoid infinite loop

  useEffect(() => {
    const fetchData = async () => {
      try {
        let responseDataChart;
        
        // Define the API endpoints based on timeFrame
        switch(timeFrame) {
          case "minute":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/serial_latest10"
            );
            break;
          case "daily":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/serial_daily"
            );
            break;
            case "weekly":
              responseDataChart = await axios.get(
                "https://c-greenproject.org:8040/serial_weekly"
              );
              break;
          case "monthly":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/serial_monthly"
            );
            break;
          default:
            // Handle day timeFrame or any other cases
            responseDataChart = await axios.get(
              `https://c-greenproject.org:8040/serial_monthly`
            );
        }
  
        setDataChartSerial(responseDataChart.data);
        console.log("Response data:", responseDataChart.data);
        console.log("Current timeFrame:", timeFrame);
      } catch (err) {
        console.log("Error fetching data:", err.message);
      }
    };
  
    // Initial fetch
    fetchData();
  
    // Set up polling interval
    const interval = setInterval(fetchData, 5000);
  
    // Cleanup interval on unmount or timeFrame change
    return () => clearInterval(interval);
  }, [timeFrame]); // Removed dataChart from dependencies to avoid infinite loop

  useEffect(() => {
    const fetchData = async () => {
      try {
        let responseDataChart;
        
        // Define the API endpoints based on timeFrame
        switch(timeFrame) {
          case "minute":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/gps_latest10"
            );
            break;
          case "daily":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/gps_daily"
            );
            break;
            case "weekly":
              responseDataChart = await axios.get(
                "https://c-greenproject.org:8040/gps_weekly"
              );
              break;
          case "monthly":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/gps_monthly"
            );
            break;
          default:
            // Handle day timeFrame or any other cases
            responseDataChart = await axios.get(
              `https://c-greenproject.org:8040/gps_monthly`
            );
        }
  
        setDataChartGPS(responseDataChart.data);
        console.log("Response data:", responseDataChart.data);
        console.log("Current timeFrame:", timeFrame);
      } catch (err) {
        console.log("Error fetching data:", err.message);
      }
    };
  
    // Initial fetch
    fetchData();
  
    // Set up polling interval
    const interval = setInterval(fetchData, 5000);
  
    // Cleanup interval on unmount or timeFrame change
    return () => clearInterval(interval);
  }, [timeFrame]); // Removed dataChart from dependencies to avoid infinite loop

  useEffect(() => {
    const fetchData = async () => {
      try {
        let responseDataChart;
        
        // Define the API endpoints based on timeFrame
        switch(timeFrame) {
          case "minute":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/cpu_latest10"
            );
            break;
          case "daily":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/cpu_daily"
            );
            break;
            case "weekly":
              responseDataChart = await axios.get(
                "https://c-greenproject.org:8040/cpu_weekly"
              );
              break;
          case "monthly":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/cpu_monthly"
            );
            break;
          default:
            // Handle day timeFrame or any other cases
            responseDataChart = await axios.get(
              `https://c-greenproject.org:8040/cpu_monthly`
            );
        }
  
        setDataChartCPU(responseDataChart.data);
        console.log("Response data:", responseDataChart.data);
        console.log("Current timeFrame:", timeFrame);
      } catch (err) {
        console.log("Error fetching data:", err.message);
      }
    };
  
    // Initial fetch
    fetchData();
  
    // Set up polling interval
    const interval = setInterval(fetchData, 5000);
  
    // Cleanup interval on unmount or timeFrame change
    return () => clearInterval(interval);
  }, [timeFrame]); // Removed dataChart from dependencies to avoid infinite loop

  useEffect(() => {
    const fetchData = async () => {
      try {
        let responseDataChart;
        
        // Define the API endpoints based on timeFrame
        switch(timeFrame) {
          case "minute":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/scc_latest10"
            );
            break;
          case "daily":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/scc_daily"
            );
            break;
            case "weekly":
              responseDataChart = await axios.get(
                "https://c-greenproject.org:8040/scc_weekly"
              );
              break;
          case "monthly":
            responseDataChart = await axios.get(
              "https://c-greenproject.org:8040/scc_monthly"
            );
            break;
          default:
            // Handle day timeFrame or any other cases
            responseDataChart = await axios.get(
              `https://c-greenproject.org:8040/scc_monthly`
            );
        }
  
        setDataChartSCC(responseDataChart.data);
        console.log("Response data:", responseDataChart.data);
        console.log("Current timeFrame:", timeFrame);
      } catch (err) {
        console.log("Error fetching data:", err.message);
      }
    };
  
    // Initial fetch
    fetchData();
  
    // Set up polling interval
    const interval = setInterval(fetchData, 5000);
  
    // Cleanup interval on unmount or timeFrame change
    return () => clearInterval(interval);
  }, [timeFrame]); // Removed dataChart from dependencies to avoid infinite loop

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c-greenproject.org:8040/modbus_latest"
        );
        setDataBuoy(response.data);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c-greenproject.org:8040/scc_latest"
        );
        setDataScc(response.data);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c-greenproject.org:8040/serial_latest"
        );
        setDataSerial(response.data);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c-greenproject.org:8040/gps_latest"
        );
        setDataGPS(response.data);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://c-greenproject.org:8040/cpu_latest"
        );
        setDataCPU(response.data);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 5000);
    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("/marinaj/image", {
  //         responseType: "blob", // Penting: Mengatur responseType ke 'blob'
  //       });

  //       // Konversi Blob ke URL agar dapat digunakan di <img>
  //       const imageUrl = URL.createObjectURL(response.data);
  //       setDataCamera(imageUrl);
  //     } catch (err) {
  //       console.log("Error fetching image:", err.message);
  //     }
  //   };

  //   fetchData();

  //   // Refresh data setiap 5 detik
  //   const interval = setInterval(() => {
  //     fetchData();
  //   }, 5000);

  //   return () => clearInterval(interval); // Bersihkan interval saat komponen unmount
  // }, []);

  const handleSelectChange = (event) => {
    setTimeFrame(event.target.value);
  };

  // const checkAlertLevelSafety = (alertLevel) => {
  //   const level = Number(alertLevel);

  //   if (isNaN(level)) {
  //     return {
  //       status: "Tidak Diketahui",
  //       color: "text-gray-500",
  //     };
  //   }

  //   if (level >= dataApi.result?.[99]?.threshold) {
  //     return {
  //       status: "DANGER",
  //       color: "text-red-600",
  //     };
  //   } else {
  //     return {
  //       status: "SAFE",
  //       color: "text-green-600",
  //     };
  //   }
  // };

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
                      Chart
                    </Tab>
                    <Tab className="md:px-2 px-1 py-2 text-xs md:text-base font-medium text-[#2E3192] data-[selected]:bg-[#2E3192] data-[selected]:text-white data-[hover] data-[selected]:font-medium">
                      Location
                    </Tab>
                  </TabList>
                  <TabPanels>
                    <TabPanel>
                      <h1 className="py-2 font-bold md:text-2xl text-lg">
                      BUOY U-TEWS 001
                      </h1>
                      <p className="py-4 mb-3 md:text-xl text-base font-normal">
                        Pulau Sebesi
                      </p>
                      <div>
                        <p className="px-20 pt-5 pb-4 md:text-xl text-base font-bold text-[#2E3192]">
                          MODBUS
                        </p>
                        <div className="px-5">
                          <div className="md:mx-5 space-y-9 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0  md:justify-start md:gap-5 md:flex md:flex-wrap">
                            <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                              <div className="w-full">
                                <div className="flex space-x-4 items-center">
                                  <p className="font-semibold md:text-xl text-lg">
                                  water column height
                                  </p>
                                </div>
                                <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                  {dataBuoy.water_column_height && (
                                    <p>{`${dataBuoy.water_column_height} m`}</p>
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
                                    Wind Speed
                                  </p>
                                </div>
                                <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                  {dataBuoy.AnemometerSpeed && (
                                    <p>{`${dataBuoy.AnemometerSpeed} m/s`}</p>
                                  )}
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
                                    Wind Direct
                                  </p>
                                </div>
                                <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                  {dataBuoy.Direction && (
                                    <p>{`${dataBuoy.Direction}`}</p>
                                  )}
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
                                    Angle
                                  </p>
                                </div>
                                <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                  {dataBuoy.Angle && (
                                    <p>{`${dataBuoy.Angle} °`}</p>
                                  )}
                                  <svg
                                    width="100"
                                    height="90"
                                    viewBox="0 0 123 116"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="123"
                                      height="116"
                                      fill="white"
                                    />
                                    <path
                                      d="M41 43.4997C43.8305 43.4997 46.125 41.3357 46.125 38.6663C46.125 35.997 43.8305 33.833 41 33.833C38.1695 33.833 35.875 35.997 35.875 38.6663C35.875 41.3357 38.1695 43.4997 41 43.4997Z"
                                      fill="#DDDDDD"
                                      fill-opacity="0.5"
                                    />
                                    <path
                                      d="M82 82.1667C84.8305 82.1667 87.125 80.0027 87.125 77.3333C87.125 74.664 84.8305 72.5 82 72.5C79.1695 72.5 76.875 74.664 76.875 77.3333C76.875 80.0027 79.1695 82.1667 82 82.1667Z"
                                      fill="#DDDDDD"
                                      fill-opacity="0.5"
                                    />
                                    <path
                                      d="M61.5 9.66699C33.3125 9.66699 10.25 31.417 10.25 58.0003C10.25 84.5837 33.3125 106.334 61.5 106.334C89.6875 106.334 112.75 84.5837 112.75 58.0003C112.75 31.417 89.6875 9.66699 61.5 9.66699ZM61.5 96.667C38.95 96.667 20.5 79.267 20.5 58.0003C20.5 36.7337 38.95 19.3337 61.5 19.3337C84.05 19.3337 102.5 36.7337 102.5 58.0003C102.5 79.267 84.05 96.667 61.5 96.667Z"
                                      fill="#DDDDDD"
                                      fill-opacity="0.5"
                                    />
                                    <path
                                      d="M85.5875 35.2831C84.05 33.8331 81.4875 33.3497 79.4375 34.3164L53.8125 48.8164C53.3 49.2997 52.275 49.7831 52.275 50.2664L36.9 74.4331C35.875 76.3664 35.875 78.7831 37.925 80.2331C38.4375 81.6831 39.4625 82.1664 41 82.1664C42.025 82.1664 43.05 82.1664 43.5625 81.6831L69.1875 67.1831C69.7 66.6997 70.725 66.2164 70.725 65.7331L86.1 41.5664C87.6375 39.1497 87.125 36.7331 85.5875 35.2831ZM63.0375 59.4497L55.8625 63.3164L59.9625 56.5497L67.1375 52.6831L63.0375 59.4497Z"
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
                                    Beaufort_scale
                                  </p>
                                </div>
                                <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                  {dataBuoy.Beaufort_scale && (
                                    <p>{`${dataBuoy.Beaufort_scale} cm`}</p>
                                  )}
                                  <svg
                                    width="100"
                                    height="90"
                                    viewBox="0 0 123 116"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <rect
                                      width="123"
                                      height="116"
                                      fill="white"
                                    />
                                    <path
                                      d="M41 43.4997C43.8305 43.4997 46.125 41.3357 46.125 38.6663C46.125 35.997 43.8305 33.833 41 33.833C38.1695 33.833 35.875 35.997 35.875 38.6663C35.875 41.3357 38.1695 43.4997 41 43.4997Z"
                                      fill="#DDDDDD"
                                      fill-opacity="0.5"
                                    />
                                    <path
                                      d="M82 82.1667C84.8305 82.1667 87.125 80.0027 87.125 77.3333C87.125 74.664 84.8305 72.5 82 72.5C79.1695 72.5 76.875 74.664 76.875 77.3333C76.875 80.0027 79.1695 82.1667 82 82.1667Z"
                                      fill="#DDDDDD"
                                      fill-opacity="0.5"
                                    />
                                    <path
                                      d="M61.5 9.66699C33.3125 9.66699 10.25 31.417 10.25 58.0003C10.25 84.5837 33.3125 106.334 61.5 106.334C89.6875 106.334 112.75 84.5837 112.75 58.0003C112.75 31.417 89.6875 9.66699 61.5 9.66699ZM61.5 96.667C38.95 96.667 20.5 79.267 20.5 58.0003C20.5 36.7337 38.95 19.3337 61.5 19.3337C84.05 19.3337 102.5 36.7337 102.5 58.0003C102.5 79.267 84.05 96.667 61.5 96.667Z"
                                      fill="#DDDDDD"
                                      fill-opacity="0.5"
                                    />
                                    <path
                                      d="M85.5875 35.2831C84.05 33.8331 81.4875 33.3497 79.4375 34.3164L53.8125 48.8164C53.3 49.2997 52.275 49.7831 52.275 50.2664L36.9 74.4331C35.875 76.3664 35.875 78.7831 37.925 80.2331C38.4375 81.6831 39.4625 82.1664 41 82.1664C42.025 82.1664 43.05 82.1664 43.5625 81.6831L69.1875 67.1831C69.7 66.6997 70.725 66.2164 70.725 65.7331L86.1 41.5664C87.6375 39.1497 87.125 36.7331 85.5875 35.2831ZM63.0375 59.4497L55.8625 63.3164L59.9625 56.5497L67.1375 52.6831L63.0375 59.4497Z"
                                      fill="#DDDDDD"
                                      fill-opacity="0.5"
                                    />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="px-10 pt-5 pb-4 md:text-xl text-base font-bold text-[#2E3192]">
                              Serial
                            </p>
                            <div className="">
                              <div className="md:mx-5 space-y-9 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0  md:justify-start md:gap-5 md:flex md:flex-wrap">
                                <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                                  <div className="w-full">
                                    <div className="flex space-x-4 items-center">
                                      <p className="font-semibold md:text-xl text-lg">
                                        Device Temperature
                                      </p>
                                    </div>
                                    <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataSerial.temperature && (
                                        <p>{`${dataSerial.temperature} °C`}</p>
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
                                        Pressure
                                      </p>
                                    </div>
                                    <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataSerial.pressure && (
                                        <p>{`${dataSerial.pressure} pa`}</p>
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
                                        Depth
                                      </p>
                                    </div>
                                    <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataSerial.depth && (
                                        <p>{`${dataSerial.depth} pa`}</p>
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
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="px-10 pt-5 pb-4 md:text-xl text-base font-bold text-[#2E3192]">
                              GPS
                            </p>
                            <div className="">
                              <div className="md:mx-5 space-y-9 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0  md:justify-start md:gap-5 md:flex md:flex-wrap">
                                <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                                  <div className="w-full">
                                    <div className="flex space-x-4 items-center">
                                      <p className="font-semibold md:text-xl text-lg">
                                        Latitude
                                      </p>
                                    </div>
                                    <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataGPS.latitude && (
                                        <p>{`${dataGPS.latitude} °`}</p>
                                      )}

                                      <svg
                                        width="70"
                                        height="90"
                                        viewBox="0 0 92 113"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M87 47.1364C87 79.9091 46 108 46 108C46 108 5 79.9091 5 47.1364C5 35.9611 9.31963 25.2436 17.0086 17.3415C24.6976 9.43935 35.1261 5 46 5C56.8739 5 67.3024 9.43935 74.9914 17.3415C82.6804 25.2436 87 35.9611 87 47.1364Z"
                                          stroke="#DDDDDD"
                                          stroke-opacity="0.5"
                                          stroke-width="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M46.0002 61.1817C53.5481 61.1817 59.6668 54.8934 59.6668 47.1363C59.6668 39.3792 53.5481 33.0908 46.0002 33.0908C38.4523 33.0908 32.3335 39.3792 32.3335 47.1363C32.3335 54.8934 38.4523 61.1817 46.0002 61.1817Z"
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
                                        Longtitude
                                      </p>
                                    </div>
                                    <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataGPS.longitude && (
                                        <p>{`${dataGPS.longitude} °`}</p>
                                      )}

                                      <svg
                                        width="70"
                                        height="90"
                                        viewBox="0 0 92 113"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M87 47.1364C87 79.9091 46 108 46 108C46 108 5 79.9091 5 47.1364C5 35.9611 9.31963 25.2436 17.0086 17.3415C24.6976 9.43935 35.1261 5 46 5C56.8739 5 67.3024 9.43935 74.9914 17.3415C82.6804 25.2436 87 35.9611 87 47.1364Z"
                                          stroke="#DDDDDD"
                                          stroke-opacity="0.5"
                                          stroke-width="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M46.0002 61.1817C53.5481 61.1817 59.6668 54.8934 59.6668 47.1363C59.6668 39.3792 53.5481 33.0908 46.0002 33.0908C38.4523 33.0908 32.3335 39.3792 32.3335 47.1363C32.3335 54.8934 38.4523 61.1817 46.0002 61.1817Z"
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
                                        Speed
                                      </p>
                                    </div>
                                    <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataGPS.speed && (
                                        <p>{`${dataGPS.speed} m/s`}</p>
                                      )}

                                      <svg
                                        width="70"
                                        height="90"
                                        viewBox="0 0 92 113"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M87 47.1364C87 79.9091 46 108 46 108C46 108 5 79.9091 5 47.1364C5 35.9611 9.31963 25.2436 17.0086 17.3415C24.6976 9.43935 35.1261 5 46 5C56.8739 5 67.3024 9.43935 74.9914 17.3415C82.6804 25.2436 87 35.9611 87 47.1364Z"
                                          stroke="#DDDDDD"
                                          stroke-opacity="0.5"
                                          stroke-width="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M46.0002 61.1817C53.5481 61.1817 59.6668 54.8934 59.6668 47.1363C59.6668 39.3792 53.5481 33.0908 46.0002 33.0908C38.4523 33.0908 32.3335 39.3792 32.3335 47.1363C32.3335 54.8934 38.4523 61.1817 46.0002 61.1817Z"
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
                            </div>
                          </div>
                          <div>
                            <p className="px-10 pt-5 pb-4 md:text-xl text-base font-bold text-[#2E3192]">
                              CPU
                            </p>
                            <div className="">
                              <div className="md:mx-5 space-y-9 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0  md:justify-start md:gap-5 md:flex md:flex-wrap">
                                <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                                  <div className="w-full">
                                    <div className="flex space-x-4 items-center">
                                      <p className="font-semibold md:text-xl text-lg">
                                        CPU Usage
                                      </p>
                                    </div>
                                    <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataCPU.cpu_usage && (
                                        <p>{`${dataCPU.cpu_usage} %`}</p>
                                      )}

                                      <svg
                                        width="70"
                                        height="90"
                                        viewBox="0 0 92 113"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M87 47.1364C87 79.9091 46 108 46 108C46 108 5 79.9091 5 47.1364C5 35.9611 9.31963 25.2436 17.0086 17.3415C24.6976 9.43935 35.1261 5 46 5C56.8739 5 67.3024 9.43935 74.9914 17.3415C82.6804 25.2436 87 35.9611 87 47.1364Z"
                                          stroke="#DDDDDD"
                                          stroke-opacity="0.5"
                                          stroke-width="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M46.0002 61.1817C53.5481 61.1817 59.6668 54.8934 59.6668 47.1363C59.6668 39.3792 53.5481 33.0908 46.0002 33.0908C38.4523 33.0908 32.3335 39.3792 32.3335 47.1363C32.3335 54.8934 38.4523 61.1817 46.0002 61.1817Z"
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
                                        Temperature
                                      </p>
                                    </div>
                                    <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataCPU.temp && (
                                        <p>{`${dataCPU.temp} °C`}</p>
                                      )}

                                      <svg
                                        width="70"
                                        height="90"
                                        viewBox="0 0 92 113"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M87 47.1364C87 79.9091 46 108 46 108C46 108 5 79.9091 5 47.1364C5 35.9611 9.31963 25.2436 17.0086 17.3415C24.6976 9.43935 35.1261 5 46 5C56.8739 5 67.3024 9.43935 74.9914 17.3415C82.6804 25.2436 87 35.9611 87 47.1364Z"
                                          stroke="#DDDDDD"
                                          stroke-opacity="0.5"
                                          stroke-width="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M46.0002 61.1817C53.5481 61.1817 59.6668 54.8934 59.6668 47.1363C59.6668 39.3792 53.5481 33.0908 46.0002 33.0908C38.4523 33.0908 32.3335 39.3792 32.3335 47.1363C32.3335 54.8934 38.4523 61.1817 46.0002 61.1817Z"
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
                                        Total Space
                                      </p>
                                    </div>
                                    <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataCPU.total_space && (
                                        <p>{`${dataCPU.total_space} GB`}</p>
                                      )}

                                      <svg
                                        width="70"
                                        height="90"
                                        viewBox="0 0 92 113"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M87 47.1364C87 79.9091 46 108 46 108C46 108 5 79.9091 5 47.1364C5 35.9611 9.31963 25.2436 17.0086 17.3415C24.6976 9.43935 35.1261 5 46 5C56.8739 5 67.3024 9.43935 74.9914 17.3415C82.6804 25.2436 87 35.9611 87 47.1364Z"
                                          stroke="#DDDDDD"
                                          stroke-opacity="0.5"
                                          stroke-width="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M46.0002 61.1817C53.5481 61.1817 59.6668 54.8934 59.6668 47.1363C59.6668 39.3792 53.5481 33.0908 46.0002 33.0908C38.4523 33.0908 32.3335 39.3792 32.3335 47.1363C32.3335 54.8934 38.4523 61.1817 46.0002 61.1817Z"
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
                                        Used Space
                                      </p>
                                    </div>
                                    <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataCPU.used_space && (
                                        <p>{`${dataCPU.used_space} GB`}</p>
                                      )}

                                      <svg
                                        width="70"
                                        height="90"
                                        viewBox="0 0 92 113"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M87 47.1364C87 79.9091 46 108 46 108C46 108 5 79.9091 5 47.1364C5 35.9611 9.31963 25.2436 17.0086 17.3415C24.6976 9.43935 35.1261 5 46 5C56.8739 5 67.3024 9.43935 74.9914 17.3415C82.6804 25.2436 87 35.9611 87 47.1364Z"
                                          stroke="#DDDDDD"
                                          stroke-opacity="0.5"
                                          stroke-width="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M46.0002 61.1817C53.5481 61.1817 59.6668 54.8934 59.6668 47.1363C59.6668 39.3792 53.5481 33.0908 46.0002 33.0908C38.4523 33.0908 32.3335 39.3792 32.3335 47.1363C32.3335 54.8934 38.4523 61.1817 46.0002 61.1817Z"
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
                                        Free Space
                                      </p>
                                    </div>
                                    <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataCPU.free_space && (
                                        <p>{`${dataCPU.free_space} GB`}</p>
                                      )}

                                      <svg
                                        width="70"
                                        height="90"
                                        viewBox="0 0 92 113"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          fill-rule="evenodd"
                                          clip-rule="evenodd"
                                          d="M87 47.1364C87 79.9091 46 108 46 108C46 108 5 79.9091 5 47.1364C5 35.9611 9.31963 25.2436 17.0086 17.3415C24.6976 9.43935 35.1261 5 46 5C56.8739 5 67.3024 9.43935 74.9914 17.3415C82.6804 25.2436 87 35.9611 87 47.1364Z"
                                          stroke="#DDDDDD"
                                          stroke-opacity="0.5"
                                          stroke-width="10"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                        />
                                        <path
                                          d="M46.0002 61.1817C53.5481 61.1817 59.6668 54.8934 59.6668 47.1363C59.6668 39.3792 53.5481 33.0908 46.0002 33.0908C38.4523 33.0908 32.3335 39.3792 32.3335 47.1363C32.3335 54.8934 38.4523 61.1817 46.0002 61.1817Z"
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
                            </div>
                          </div>
                          <div>
                            <p className="px-10 pt-5 pb-4 md:text-xl text-base font-bold text-[#2E3192]">
                              SCC
                            </p>
                            <div className="">
                              <div className="md:mx-5 space-y-9 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0  md:justify-start md:gap-5 md:flex md:flex-wrap">
                                <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                                  <div className="w-full">
                                    <div className="flex space-x-4 items-center">
                                      <p className="font-semibold md:text-xl text-lg">
                                        PV Voltage
                                      </p>
                                    </div>
                                    <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataScc.pv_voltage && (
                                        <p>{`${dataScc.pv_voltage} V`}</p>
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
                                        PV Current
                                      </p>
                                    </div>
                                    <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataScc.pv_current && (
                                        <p>{`${dataScc.pv_current} A`}</p>
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
                                        PV Power
                                      </p>
                                    </div>
                                    <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataScc.pv_power && (
                                        <p>{`${dataScc.pv_power} W`}</p>
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
                                        Battery Voltage
                                      </p>
                                    </div>
                                    <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataScc.battery_voltage && (
                                        <p>{`${dataScc.battery_voltage} V`}</p>
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
                                        Battery Charge Current
                                      </p>
                                    </div>
                                    <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataScc.battery_charge_current && (
                                        <p>{`${dataScc.battery_charge_current} A`}</p>
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
                                        Device Current
                                      </p>
                                    </div>
                                    <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataScc.device_current && (
                                        <p>{`${dataScc.device_current} A`}</p>
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
                                        Device Power
                                      </p>
                                    </div>
                                    <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                                      {dataScc.device_power && (
                                        <p>{`${dataScc.device_power} W`}</p>
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
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      {" "}
                      <div className="max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 pr-4">
                        <h1 className="py-2 font-bold md:text-2xl text-lg">
                        BUOY U-TEWS 001
                        </h1>
                        <p className="py-4 mb-3 md:text-xl text-base font-normal">
                        Pulau Sebesi
                      </p>
                        <p className="pt-5 pb-4 md:text-xl text-base font-bold text-[#2E3192]">
                          MODBUS
                        </p>
                        <div className="grid text-center">
                          <TableModbus dataTableModbus={dataTableModbus} />
                        </div>
                        <p className="pt-5 pb-4 md:text-xl text-base font-bold text-[#2E3192]">
                          Serial
                        </p>
                        <div className="grid text-center">
                          <TableSerial dataTableSerial={dataTableSerial} />
                        </div>
                        <p className="pt-5 pb-4 md:text-xl text-base font-bold text-[#2E3192]">
                          GPS
                        </p>
                        <div className="grid text-center">
                          <TableGPS dataTableGPS={dataTableGPS} />
                        </div>
                        <p className="pt-5 pb-4 md:text-xl text-base font-bold text-[#2E3192]">
                          CPU
                        </p>
                        <div className="grid text-center">
                          <TableCPU dataTableCPU={dataTableCPU} />
                        </div>
                        <p className="pt-5 pb-4 md:text-xl text-base font-bold text-[#2E3192]">
                          SCC
                        </p>
                        <div className="grid text-center">
                          <TableSCC dataTableSCC={dataTableSCC} />
                        </div>
                      </div>
                    </TabPanel>
                    <TabPanel>
                      {" "}
                      <h1 className="py-2 font-bold md:text-2xl text-lg">
                      BUOY U-TEWS 001
                      </h1>
                      <p className="py-4 mb-3 md:text-xl text-base font-normal">
                        Pulau Sebesi
                      </p>
                      <div className="border border-black overflow-hidden bg-white w-fit rounded-lg py-1">
                        <select value={timeFrame} onChange={handleSelectChange}>
                          <option value="minute">Minutes</option>
                          <option value="daily">Daily</option>
                          <option value="weekly">Weekly</option>
                          <option value="monthly">Monthly</option>
                        </select>
                      </div>
                      <div className="grid md:grid-cols-2 md:gap-5">
                        <div className=" md:px-3 md:py-3  md:flex items-center rounded-sm">
                          <div aria-label="waterlevel" className="w-full">
                            <CartSebesi
                              data={dataChartModbus}
                              keys={["water_column_height", "AnemometerSpeed", "Beaufort_scale"]}
                            />
                          </div>
                          </div>
                          <div className=" md:px-3 md:py-3  md:flex items-center rounded-sm">
                          <div aria-label="waterlevel" className="w-full">
                            <CartSebesi data={dataChartSerial} keys={["temperature", "pressure", "depth"]}/>
                          </div>
                        </div>
                        <div className=" md:px-3 md:py-3  md:flex items-center rounded-sm">
                          <div aria-label="waterlevel" className="w-full">
                            <CartSebesi data={dataChartGPS} keys={["altitude", "speed", "track"]}/>
                          </div>
                        </div>
                        <div className=" md:px-3 md:py-3  md:flex items-center rounded-sm">
                          <div aria-label="waterlevel" className="w-full">
                            <CartSebesi data={dataChartCPU} keys={["cpu_usage", "total_space", "used_space", "free_space"]}/>
                          </div>
                        </div>
                        <div className=" md:px-3 md:py-3  md:flex items-center rounded-sm">
                          <div aria-label="waterlevel" className="w-full">
                            <CartSebesi data={dataChartSCC} keys={["battery_voltage", "battery_charge_current", "pv_voltage", "pv_current"]}/>
                          </div>
                        </div>
                        </div>
                      {/* <div className="grid md:grid-cols-2 md:gap-5">
                        <div className=" px-3 py-3  flex items-center rounded-sm">
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
                      </div> */}
                    </TabPanel>
                    <TabPanel>
                      <h1 className="py-2 font-bold md:text-2xl text-lg">
                      BUOY U-TEWS 001
                      </h1>
                      <p className="py-4 mb-3 md:text-xl text-base font-normal">
                        Pulau Sebesi
                      </p>
                      <div className=" px-3 py-3 w-full  flex items-center rounded-sm">
                        <div className="w-[100%] h-[100%] overflow-hidden">
                          <SimpleMap
                            latitude={coordinates.latitude}
                            longitude={coordinates.longitude}
                          />
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
