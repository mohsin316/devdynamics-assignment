import "./Chart.css";

import { Bar } from "react-chartjs-2";
import type { ChartData, ChartOptions } from "chart.js";

import {
  Chart as Chartjs,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { dayData } from "../vite-env";

Chartjs.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ chartData }: { chartData: dayData }) {
  console.log(chartData);
  const options: ChartOptions<"bar"> = {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          color: "rgba(0, 0, 0, 0)",
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: { stepSize: 1 },
      },
    },
    plugins: {
      title: {
        display: true,
        font: {
          size: 14,
          weight: "normal",
        },
        align: "center",
        color: "black",
        text: "PR Distribution",
      },
      legend: {
        display: true,
        align: "center",
        position: "bottom",
        labels: {
          boxWidth: 12,
          boxHeight: 12,
          color: "black",
        },
      },
    },
  };

  const barChartData: ChartData<"bar"> = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Open",
        data: chartData.map((item) => parseInt(item.prOpen.value)),
        backgroundColor: "#f5ce84bf",
        borderColor: "#F5D190",
        borderWidth: 1,
        barThickness: 35,
      },
      {
        label: "Reviewed",
        data: chartData.map((item) => parseInt(item.prReviewed.value)),
        borderWidth: 1,
        backgroundColor: "#e2726abf",
        borderColor: "#e2736c",
        barThickness: 35,
      },
      {
        label: "Merged",
        data: chartData.map((item) => parseInt(item.prMerged.value)),
        backgroundColor: "#b75c8abf",
        borderColor: "#b75a89",
        barThickness: 35,
        borderWidth: 1,
      },
      {
        label: "Comments",
        data: chartData.map((item) => parseInt(item.prComment.value)),
        backgroundColor: "#5a51a4bf",
        borderColor: "#5C52A5",

        barThickness: 35,
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <Bar className="chart" options={options} data={barChartData} />
    </>
  );
}
