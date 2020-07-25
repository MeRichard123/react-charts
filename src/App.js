import React from "react";
import "./App.css";
import Navigation from "./Components/Navigation";
import { Container } from "react-bootstrap";
import LineChart from "./Components/LineChart";
import PieChart from "./Components/PieChart";
import BarChart from "./Components/BarChart";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: [
    "Boston",
    "Worcester",
    "Springfield",
    "Lowell",
    "Cambridge",
    "New Boston",
  ],
  datasets: [
    {
      label: "Population",
      data: [617594, 181045, 153060, 106519, 105162, 95072],
      backgroundColor: [
        "rgba(255,99,135,0.6)",
        "rgba(54,162,235,0.6)",
        "rgba(255,206,86,0.6)",
        "rgba(75,192,192,0.6)",
        "rgba(153,102,255,.6)",
        "rgba(255,159,64,0.6)",
        "rgba(255,159,64,0.6)",
        "rgba(255,99,132,0.6)",
      ],
      borderWidth: 0.5,
    },
  ],
};

function App() {
  return (
    <div className="App">
      <Navigation />
      <Container fluid>
        <BarChart data={data} />
        <PieChart data={data} />
        <LineChart data={data} />
        {/* <Doughnut data={data} /> */}
      </Container>
    </div>
  );
}

export default App;
