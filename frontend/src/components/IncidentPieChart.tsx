// charts
import { Chart as ChartJs, ArcElement, Tooltip, Legend } from "chart.js";
import type { ChartData, ChartOptions } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJs.register(ArcElement, Tooltip, Legend);

export default function IncidentPieChart({
  incidentAlerts,
  incidentResolved,
}: {
  incidentAlerts: string;
  incidentResolved: string;
}) {
  const options: ChartOptions<"doughnut"> = {
    cutout: 60,
    plugins: {
      title: {
        display: true,
        font: {
          size: 14,
          weight: "normal",
        },
        align: "center",
        color: "black",
        text: "Incidents this week",
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
  const piChartData: ChartData<"doughnut"> = {
    labels: ["Alert", "Resolved"],
    datasets: [
      {
        label: "Total for this week",
        data: [parseInt(incidentAlerts), parseInt(incidentResolved)],
        backgroundColor: ["#FF6174", "#4CAF50"],
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
