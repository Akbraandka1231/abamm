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
                    Id
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Tanggal
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Time
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Latitude
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Longtidude
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Roll
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Pitch
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Yaw
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Kompas
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
                      {item.rms}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.temperature}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.waterlevel}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.voltage}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">
                      {item.rms}
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
