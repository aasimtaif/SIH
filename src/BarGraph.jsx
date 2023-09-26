import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,

} from "chart.js";
import { Bar } from "react-chartjs-2";
import './App.css'
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Divider,
    Stack,
    Box,
} from '@mui/material'





ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



function BarGraph({ barGraphData }) {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: barGraphData?.title
            }
        }
    };
    if (!barGraphData) {
        <>wait</>
    }

    const labels = barGraphData?.labels;

    const data = {
        labels,
        datasets: [
            {
                label: "Boys",
                data: barGraphData?.Boys,
                backgroundColor: "rgba(53, 162, 235, 1.5)"
            },
            {
                label: "Girls",
                data: barGraphData?.Girls,
                backgroundColor: "rgba(255, 99, 132, 1.5)"
            }
        ]
    };
    console.log(barGraphData)
    return (

        <Bar
            options={options} data={data} />

    )
}

export default BarGraph