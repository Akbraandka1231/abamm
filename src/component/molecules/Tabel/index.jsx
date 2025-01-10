import React from "react";

const Index = ({ dataPumma }) => {
  return (
    <div className="flex flex-col overflow-hidden over">
      <div className="overflow-x-scroll">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="border rounded-lg">
            <table className="min-w-full bg-white divide-y divide-gray-200">
              <thead className="bg-[#2E3192] text-white text-bold">
                <tr>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-sm font-bold text-left capitalize rounded-tl-lg"
                  >
                    No
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-xs font-bold text-left capitalize"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-xs font-bold text-left capitalize"
                  >
                    Time
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-xs font-bold text-left capitalize"
                  >
                    WaterLevel
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-xs font-bold text-left capitalize"
                  >
                    Voltage
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-xs font-bold text-left capitalize"
                  >
                    Temperature
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-xs font-bold text-left capitalize"
                  >
                    Threshold
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-xs font-bold text-left capitalize"
                  >
                    Forecast30
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-xs font-bold text-left capitalize"
                  >
                    Forecast300
                  </th>
                  <th
                    scope="col"
                    className="text-center px-6 py-3 text-xs font-bold text-center capitalize rounded-tr-lg"
                  >
                    Rms
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dataPumma?.result
                  .slice()
                  .reverse()
                  .map((item, i) => (
                    <tr key={i}>
                      <td className="px-6 py-3 text-xs font-medium text-gray-800 whitespace-nowrap">
                        {i + 1}
                      </td>
                      <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                        {new Intl.DateTimeFormat("id-ID", {
                          timeZone: "Asia/Jakarta",
                        }).format(new Date(item.datetime))}
                      </td>
                      <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                        {item.datetime.split("T")[1].split(".")[0]}{" "}
                        {/* Menampilkan hanya jam, menit, dan detik */}
                      </td>
                      <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                        {item.waterlevel}
                      </td>
                      <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                        {item.voltage}
                      </td>
                      <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                        {item.temperature}
                      </td>
                      <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                        {item.threshold}
                      </td>
                      <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                        {item.forecast30} cm
                      </td>
                      <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                        {item.forecast300} cm
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
