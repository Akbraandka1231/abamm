import React from "react";

const Index = ({ dataTableGPS }) => {
  console.log(dataTableGPS);
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
                    Latitude
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Longitude
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Altitude
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    EPV
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    EPT
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Speed
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Climb
                  </th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">
                    Track
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dataTableGPS?.slice().map((item, i) => (
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
                      {item.latitude}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.longitude}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.altitude}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.epv}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.ept}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.speed}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.climb}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {item.track}
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
