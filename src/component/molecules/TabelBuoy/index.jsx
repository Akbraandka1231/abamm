import React from "react";

const Index= ({ dataBuoy }) => {
  return (
    <div className="flex flex-col overflow-hidden over">
      <div className="overflow-x-scroll">
        <div className="p-1.5 w-full inline-block align-middle">
          <div className="border rounded-lg">
            <table className="min-w-full bg-white divide-y divide-gray-200">
              <thead className="bg-[#2E3192] text-white text-bold">
                <tr>
                  <th className="text-center px-6 py-3 text-sm font-bold text-left capitalize rounded-tl-lg">No</th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">Date</th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">Time</th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">Battery Voltage</th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">Device Temperature</th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">Sea Water Level</th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">PV Voltage</th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">PV Current</th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-left capitalize">Battery Charge Current</th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-center capitalize">Wind Direct</th>
                  <th className="text-center px-6 py-3 text-xs font-bold text-center capitalize rounded-tr-lg">Wind Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {dataBuoy?.result?.slice().reverse().map((item, i) => (
                  <tr key={i}>
                    <td className="px-6 py-3 text-xs font-medium text-gray-800 whitespace-nowrap">{i + 1}</td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {new Date(item.datetime).toLocaleDateString("en-US")}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">
                      {new Date(item.datetime).toLocaleTimeString("en-US", { hour12: false })}
                    </td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">{item.voltage}</td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">{item.temperature}</td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">{item.waterlevel}</td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">{item.voltage}</td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">{item.voltage}</td>
                    <td className="px-6 py-3 text-xs text-gray-800 whitespace-nowrap">{item.voltage}</td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">{item.rms}</td>
                    <td className="px-6 py-3 text-xs text-gray-800 text-center whitespace-nowrap">{item.rms}</td>
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
