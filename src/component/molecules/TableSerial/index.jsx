import React from "react";

const Index = ({ dataTableSerial }) => {
  console.log(dataTableSerial);
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
                    Yacc
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Zacc
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Xgyro
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Ygyro
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Zgyro
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Xangle
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Yangle
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Zangle
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Temperature
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Pressure
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Depth
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dataTableSerial?.slice().map((item, i) => (
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
                      {item.yacc}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.zacc}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.xgyro}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.ygyro}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.zgyro}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.xangle}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.yangle}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.zangle}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.temperature}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.pressure}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.depth}
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