import React from "react";
import { Pie } from "react-chartjs-2";

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
      fontColor: "#000",
    },
  },
};
function PieChart({ data }) {
  return (
    <div className="chart-container">
      <Pie data={data} options={options} />
    </div>
  );
}

export default PieChart;
