
import type { JSX } from 'react';
import { Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';


ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const PieChart: React.FC<{}> = (): JSX.Element => {
    const data = {
        labels: ['Land Issues', 'Education', 'Poverty', 'SRHR', 'Minerals'],
        datasets: [
            {
                label: 'Reasons',
                data: [20, 20, 20, 20, 20],
                backgroundColor: ['#ed1a1d', '#11A8AB', '#e3b054', '#9db05e', '#81a4b7'],
                borderWidth: 1,
                hoverOffset: 20, // this adds the zoom/offset effect on hover
            },
        ],
    };

    const options: any = {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: false, // disables default tooltips on hover
            },
            animation: {
                animateRotate: true,
                animateScale: true,
            },
            datalabels: {
                color: '#fff',
                formatter: (_: any, context: { chart: { data: { labels: { [x: string]: any; }; }; }; dataIndex: string | number; }) => {
                    const label = context.chart.data.labels[context.dataIndex];
                    return `${label}`;
                },
                font: {
                    weight: 'bolder',
                    size: 11,
                },
                anchor: 'center', // aligns with the center of the slice
                align: 'center',  // places text in the center
            },
        },
    };

    return <Pie data={data} options={options} plugins={[ChartDataLabels]} />;
};
