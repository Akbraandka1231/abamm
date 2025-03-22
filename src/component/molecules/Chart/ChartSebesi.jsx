import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { time } from "../../../utils/index";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-moment";

Chart.register(zoomPlugin);

const CartSebesi = ({ data, timeFrame, keys }) => {
  const now = new Date();
  console.log(data)

  const colors = [
    { backgroundColor: "rgba(75, 192, 192, 0.2)", borderColor: "rgba(75, 192, 192, 1)" },
    { backgroundColor: "rgba(153, 102, 255, 0.2)", borderColor: "rgba(153, 102, 255, 1)" },
    { backgroundColor: "rgba(255, 159, 64, 0.2)", borderColor: "rgba(255, 159, 64, 1)" },
  ];
  
  const filteredData = data;

  const labels = filteredData.map((item) => {
    const date = new Date(item.TS);
    const { times, dates } = time(item[0]);
    return timeFrame === "7 days" || timeFrame === "30 days" ? dates : times;
  });

  const datasets = keys.map((key, index) => ({
    label: key,
    backgroundColor: colors[index]?.backgroundColor || "rgba(0,0,0,0.1)",
    borderColor: colors[index]?.borderColor || "rgba(0,0,0,1)",
    pointBorderColor: "transparent",
    pointBackgroundColor: "transparent",
    data: filteredData.map((item) => (item[key])),
  }));

  const chartData = {
    labels: labels,
    datasets: datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      tooltip: {
        mode: "index",
        intersect: true,
      },
      zoom: {
        zoom: {
          wheel: {
            enabled: true,
          },
          drag: {
            enabled: true,
          },
          mode: "x",
        },
        pan: {
          enabled: true,
          mode: "x",
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: timeFrame === "7 days" || timeFrame === "30 days" ? "Tanggal" : "Waktu",
        },
      },
      y: {
        title: {
          display: true,
          text: "Values",
        },
      },
    },
  };

  return (
    <div>
      <Line options={options} data={chartData} />
    </div>
  );
};

export default CartSebesi;
