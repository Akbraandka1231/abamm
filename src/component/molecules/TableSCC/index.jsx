import React from "react";

const Index = ({ dataTableSCC }) => {
  console.log(dataTableSCC);
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
                    Date
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
                    Battery Charge Current
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Device Current
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Device Power
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dataTableSCC?.slice().map((item, i) => (
                  <tr key={i}>
                    <td className="px-6 py-3 text-xs font-medium text-gray-800 whitespace-nowrap">
                      {i + 1}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {new Intl.DateTimeFormat("id-ID", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        timeZone: "Asia/Jakarta",
                      }).format(new Date(item.createdAt))}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {new Date(item.createdAt).toLocaleTimeString("id-ID", {
                        hour: "2-digit",
                        minute: "2-digit",
                        second: "2-digit",
                        hour12: true,
                        timeZone: "Asia/Jakarta",
                      })}
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
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.battery_charge_current}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.device_current}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.device_power}
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
