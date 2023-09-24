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
    ListItemIcon,
    ListItemText,
    Divider,
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
                text: `Dropout Rate of ${barGraphData?.state}`
            }
        }
    };
    if (!barGraphData) {
        <>wait</>
    }

    const labels = ['5th', '8th', "10th"];

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
    // console.log(barGraphData.Boys)
    return (
        <Box sx={{ width: '100%' }}>
            <Bar
                options={options} data={data} />
        </Box>
    )
}

export default BarGraph