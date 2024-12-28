import React from "react";
import { Chart, SimpleMap, Tabel } from "../../component/molecules";
import CartTigaData from "../../component/molecules/Chart/CartTigaData";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";

const Index = ({
  datarealtime,
  dataTable,
  dataimg,
  maps,
  dataGrafik,
  setDataGrafik,
  location,
}) => {
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
                      <h1 className="py-4 font-bold md:text-2xl text-lg">
                        Climatologi 001
                      </h1>
                      <div className="md:mx-5 space-y-9 sm:grid sm:grid-cols-2 sm:gap-5 sm:space-y-0  md:justify-start md:gap-5 md:flex md:flex-wrap">
                        <div className="border bg-white drop-shadow-lg rounded-lg px-3 flex items-center md:w-[19rem] w-[15rem] h-36">
                          <div className="w-full">
                            <div className="flex space-x-4 items-center">
                              <p className="font-semibold md:text-xl text-lg">
                                Battery Voltage
                              </p>
                            </div>
                            <div className="md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                              <p>N/A</p>
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
                              <p>N/A</p>
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
                              <p>N/A</p>
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
                              <p className="font-semibold md:text-xl text-lg">Forcast30</p>
                            </div>
                            <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                              <p>N/A</p>
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
                            <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                              <p>N/A</p>
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
                              <p className="font-semibold md:text-xl text-lg">Status</p>
                            </div>
                            <div className="pt-2 md:text-3xl text-xl font-semibold justify-between flex space-x-5 items-center">
                              <p>N/A</p>
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
                    </TabPanel>
                    <TabPanel>
                      {" "}
                      <h1 className="py-4 font-bold md:text-2xl text-lg">
                        Climatogi 001
                      </h1>
                      <div className="grid text-center">
                        <Tabel dataPumma={dataTable} />
                      </div>
                    </TabPanel>
                    <TabPanel>
                      {" "}
                      <h1 className="py-4 font-bold md:text-2xl text-lg">
                        Climatologi 001
                      </h1>
                      <div className="border border-black overflow-hidden bg-white w-fit rounded-lg py-1">
                        <select>
                          <option value="minute">Minutes</option>
                          <option value="hour">Hour</option>
                          <option value="day">Day</option>
                          <option value="7days">7 Days</option>
                          <option value="30days">30 Days</option>
                        </select>
                      </div>
                      <div className="grid md:grid-cols-2 md:gap-5">
                        <div className=" px-3 py-3  flex items-center rounded-sm">
                          <div aria-label="waterlevel" className="w-full">
                            <CartTigaData
                              DataLine={dataGrafik}
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
                              DataLine={dataGrafik}
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
                              DataLine={dataGrafik}
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
                              DataLine={dataGrafik}
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
                      <h1 className="py-4 font-bold md:text-2xl text-lg">
                        Climatologi 001
                      </h1>
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
                          <img src={maps} alt="" />
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
