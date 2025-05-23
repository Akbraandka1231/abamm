import React from "react";

const Index = ({ dataTablePummaSebesi }) => {
  console.log(dataTablePummaSebesi);
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
                  water column height
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Alert Signal
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Forcast 30
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Forcast 300
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  Threshold
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                  rms
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dataTablePummaSebesi?.slice().map((item, i) => (
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
                      {item.Water_level_Pressure}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.Alert_Signal}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.For30}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.For300}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.Threshold}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.rms}
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
