import React from "react";
import { Chart, ArcElement } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);
const config = {
  data: {
    dataset: [
      {
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
      },
    ],
  },
  options: {
    cutout: 115,
  },
};
const Graph = () => {
  return (
    <>
      <div className="flex justify-centent max-w-xs mx-auto ">
        <div className="item">
          <div className="chart relative ">
            <Doughnut {...config}></Doughnut>
          </div>
          <div className="flex flex-col py-10 gap-4 "></div>
        </div>
      </div>
    </>
  );
};

export default Graph;
