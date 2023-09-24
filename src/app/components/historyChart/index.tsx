import { Line } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Title,
    Tooltip,
    Legend,
    LineElement,
    PointElement,
} from "chart.js";
import { applicationPalettes } from "../../constants";
import { ItemHistory } from "../../interfaces";
import { localization } from "../../localization";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: "top" as const,
        },
    },
    scales: {
        x: {
            beginAtZero: true,
        },
    },
};

interface ChartProps {
    chartData: ItemHistory;
}

const HistoryChart = ({ chartData }: ChartProps) => {
    const labels = Object.keys(chartData);

    const data = {
        labels,
        datasets: [
            {
                label: localization.chartLabel,
                data: labels.map(label => chartData[label]),
                backgroundColor: applicationPalettes.primary[700],
            },
        ],
    };

    return <Line data={data} options={options} />;
};

export default HistoryChart;
