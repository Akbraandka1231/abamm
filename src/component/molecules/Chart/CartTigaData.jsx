import React from "react"; // eslint-disable-next-line
import Chart from "chart.js/auto"; // eslint-disable-next-line
import { Line } from "react-chartjs-2";
import { time } from "../../../utils/index";
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-moment";

// Daftarkan plugin zoom untuk Chart.js
Chart.register(zoomPlugin);

// Komponen grafik
const CartTigaData = ({
  DataLine,
  timeFrame, // Tambahkan props timeFrame
  labelname1,
  borderColor1,
  bgcolor1,
  index1,
  labelname2,
  borderColor2,
  bgcolor2,
  index2,
  labelname3,
  borderColor3,
  bgcolor3,
  index3,
}) => {
  // Data untuk grafik
  const DataChart = {
    type: "line",
    labels: DataLine?.map((item) => {
      const { times, dates } = time(item[0]); // Asumsikan fungsi time memberikan waktu dan tanggal
      return timeFrame === "7 days" || timeFrame === "30 days" ? dates : times; // Tampilkan tanggal untuk 7/30 hari, waktu untuk lainnya
    }),
    datasets: [
      {
        label: labelname1,
        backgroundColor: bgcolor1,
        borderColor: borderColor1,
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        data: DataLine?.map((data) => data[index1]),
      },
      {
        label: labelname2,
        backgroundColor: bgcolor2,
        borderColor: borderColor2,
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        data: DataLine?.map((data) => data[index2]),
      },
      {
        label: labelname3,
        backgroundColor: bgcolor3,
        borderColor: borderColor3,
        pointBorderColor: "transparent",
        pointBackgroundColor: "transparent",
        data: DataLine?.map((data) => data[index3]),
      },
    ],
  };

  // Opsi untuk konfigurasi grafik
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
    },
  };

  return (
    <div className="w-full w-fit">
      <Line options={options} data={DataChart} />
    </div>
  );
};

export default CartTigaData;

// Fungsi utilitas untuk memformat waktu dan tanggal
export const formatTime = (timestamp) => {
  const date = new Date(timestamp);
  return {
    times: date.toLocaleTimeString("id-ID"), // Format waktu: jam:menit:detik
    dates: date.toLocaleDateString("id-ID"), // Format tanggal: hari/bulan/tahun
  };
};
