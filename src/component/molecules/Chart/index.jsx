import React from "react"; // eslint-disable-next-line
import Chart from "chart.js/auto"; // eslint-disable-next-line
import { Line } from "react-chartjs-2";
import {time} from '../../../utils/index'
import zoomPlugin from "chartjs-plugin-zoom";
import "chartjs-adapter-moment";
Chart.register(zoomPlugin);

const Index = ({ DataLine, name, labelname, borderColor, bgcolor, index, Combine }) => {
  const DataChart = {
    labels: DataLine?.map(
      (item, i) => {
        const {times} = time(item[0])
        return(
            times
        )
      }
    ),
    datasets: [
            {
              label: labelname,
              backgroundColor: bgcolor,
              borderColor: borderColor,
              pointBorderColor: "transparent",
              pointBackgroundColor : "transparent",
              data:DataLine && DataLine?.map(data => data[index])
              ,
              // spanGaps: true,
            },
    ],
  };
  const options = {
    animation: {
      duration: 0
  },
    plugins: {
      zoom: {
        zoom: {
          wheel: {
            enabled: true
          },
          mode: "x",
          speed: 100
        },
        pan: {
          enabled: true,
          mode: "x",
          speed: 0.5
        }
      },
      animations : false,
      title: {
        // display: true,
        // text: labelname,
      },
      legend: {
        // maxHeight : 15,
        display: true,
      },
      tooltip: {
        mode: "index",
        intersect: true,
        callbacks: {
          label: function (context) {
            var label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="w-full w-fit">
      <Line options={options} data={DataChart}  className={`${DataLine ? '' : ''}`} />
    </div>
  );
};

export default Index;
