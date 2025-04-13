import React from "react";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { time } from "../../../utils/index";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-moment";

Chart.register(zoomPlugin);

// Downsampling to reduce data points
const downsample = (data, maxPoints = 500) => {
  const interval = Math.ceil(data.length / maxPoints);
  return data.filter((_, index) => index % interval === 0);
};

const CartSebesi = ({ data, timeFrame, keys }) => {
  const now = new Date();
  console.log("Original data length:", data.length);

  // Optimize data volume
  const filteredData = downsample(data, 500);
  console.log("Downsampled data length:", filteredData.length);

  const colors = [
    { backgroundColor: "rgba(75, 192, 192, 0.2)", borderColor: "rgba(75, 192, 192, 1)" },
    { backgroundColor: "rgba(153, 102, 255, 0.2)", borderColor: "rgba(153, 102, 255, 1)" },
    { backgroundColor: "rgba(255, 159, 64, 0.2)", borderColor: "rgba(255, 159, 64, 1)" },
  ];

  const labels = filteredData.map((item) => {
    const { times, dates } = time(item.TS); // gunakan waktu asli dari fungsi time()
    return timeFrame === "7 days" || timeFrame === "30 days" || timeFrame === "daily" || timeFrame === "weekly" || timeFrame === "monthly"
      ? dates
      : times;
  });

  const datasets = keys.map((key, index) => ({
    label: key,
    backgroundColor: colors[index]?.backgroundColor || "rgba(0,0,0,0.1)",
    borderColor: colors[index]?.borderColor || "rgba(0,0,0,1)",
    pointBorderColor: "transparent",
    pointBackgroundColor: "transparent",
    data: filteredData.map((item) => item[key]),
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
      decimation: {
        enabled: true,
        algorithm: "min-max", // or 'lttb'
        samples: 500,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: timeFrame === "7 days" || timeFrame === "30 days" || timeFrame === "daily" || timeFrame === "weekly" || timeFrame === "monthly"
            ? "Tanggal"
            : "Waktu",
        },
        ticks: {
          maxTicksLimit: 20,
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
