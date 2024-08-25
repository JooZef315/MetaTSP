import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { useDashboardStore } from "../store/dashboardStore";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function DashboardGraph() {
  const dashboardData = useDashboardStore((state) => state.DashboardData);

  const data = {
    labels: dashboardData?.chart.x,
    datasets: [
      {
        label: "Best Path cost for Per Simulation",
        data: dashboardData?.chart.y,
        borderColor: "rgb(45,212,191)",
        backgroundColor: "rgb(244,244,245)",
        fill: false,
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: `Costs for Solving TSP in ${dashboardData?.chart.x.length} Simulations`,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Simulation Number",
        },
      },
      y: {
        title: {
          display: true,
          text: "Path Cost",
        },
      },
    },
  };

  return (
    <div className="bg-zinc-100 w-full min-w-96 min-h-96 rounded-xl overflow-x-auto">
      <div className="w-full">
        <Line className="w-full m-auto" data={data} options={options} />
      </div>
    </div>
  );
}
