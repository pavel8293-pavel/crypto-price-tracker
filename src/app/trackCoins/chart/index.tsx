import { Bar } from "react-chartjs-2";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { ISO_CURRENCIES, applicationPalettes } from "../../constants";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

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
        y: {
            beginAtZero: true,
        },
    },
};

interface ChartProps {
    coinNames: string[];
    coinPrices: { [key: string]: { [key: string]: number } };
}

const Chart = ({ coinNames, coinPrices }: ChartProps) => {

    const data = {
        labels: coinNames,
        datasets: ISO_CURRENCIES.map(currency => ({
            label: currency,
            data: coinNames.map(coin => coinPrices?.[coin]?.[currency]),
            backgroundColor: applicationPalettes.primary[700],
        })),
    };

    return <Bar data={data} options={options} />;
};

export default Chart;
