import React from "react";
import { Doughnut } from "react-chartjs-2";

const options = {
  title: {
    display: true,
    text: "Largest Cities in Massachusetts",
    fontSize: 25,
  },
  legend: {
    display: true,
    position: "left",
    labels: {
      boxWidth: 0,
      fontColor: "#000",
    },
  },
};
function LineChart({ data }) {
  return (
    <div className="chart-container">
      <Doughnut data={data} options={options} />
    </div>
  );
}

export default LineChart;
