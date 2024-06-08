// chart import
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);
export default function ActiveChart({ activeDays }: { activeDays: number }) {
  const options: ChartOptions<"doughnut"> = {
    cutout: 60,
    plugins: {
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
      title: {
        display: true,
        font: {
          weight: "bold",
        },
        text: "Active days this month",
      },
    },
  };
  const piChartData: ChartData<"doughnut"> = {
    labels: ["Active", "Inactive"],
    datasets: [
      {
        label: "Days",
        data: [activeDays, 21 - activeDays],
        backgroundColor: ["#e7c07ebf", "#5a51a4bf"],
        borderColor: "white",
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="incidentChart">
      <Doughnut data={piChartData} options={options} />
    </div>
  );
}
