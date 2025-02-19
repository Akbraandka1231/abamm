import React from "react";

const Index = ({ dataTableClimate }) => {
  console.log(dataTableClimate);
  return (
    <div className="flex flex-col overflow-hidden over">
      <div className="overflow-x-scroll">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="border rounded-lg">
            <table className="min-w-full bg-white divide-y divide-gray-200">
              <thead className="bg-[#2E3192] text-white text-bold">
                <tr>
                  <th className="text-center px-6 py-3 text-sm font-bold text-left capitalize rounded-tl-lg">
                    No
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Tanggal
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Time
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Anemometer Speed
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Beaufort scale
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Angle
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Direction
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Rainfall
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Suhu Air Atas
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Suhu Air Bawah
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Humidity
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Temperature
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Solar Radiation
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  AirPressure
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dataTableClimate?.slice().map((item, i) => (
                  <tr key={i}>
                    <td className="px-6 py-3 text-xs font-medium text-gray-800 whitespace-nowrap">
                      {i + 1}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {new Intl.DateTimeFormat("id-ID", {
                        timeZone: "Asia/Jakarta",
                      }).format(new Date(item.TS))}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.TS.split("T")[1].split(".")[0]}{" "}
                      {/* Menampilkan hanya jam, menit, dan detik */}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.AnemometerSpeed}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.Beaufort_scale}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.Angle}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.Direction}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.Rainfall}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.Suhu_Air_Atas}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.Suhu_Air_Bawah}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.Humidity}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.Temperature}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.SolarRadiation}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.AirPressure}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
