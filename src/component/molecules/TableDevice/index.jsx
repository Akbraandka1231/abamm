import React from "react";

const Index = ({ dataTableDevice }) => {
  console.log(dataTableDevice);
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
                  PV Voltage
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  PV Current
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  PV Power
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Battery Voltage
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Battery Charger Current
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Device Current
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  device Power
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Raspi Temperature
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dataTableDevice?.slice().map((item, i) => (
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
                      {item.pv_voltage}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.pv_current}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.pv_power}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.battery_voltage}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.battery_charger_current}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.device_current}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.device_power}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.raspi_temperature}
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
