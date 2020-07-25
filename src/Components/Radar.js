import React from "react";
import { Radar } from "react-chartjs-2";

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
function RadarChart({ data }) {
  return (
    <div className="chart-container">
      <Radar data={data} options={options} />
    </div>
  );
}

export default RadarChart;
