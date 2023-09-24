import React, { useRef, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie, getElementAtEvent } from 'react-chartjs-2';
import './App.css'
import BarGraph from './BarGraph';
import { Box } from '@mui/material'


ChartJS.register(ArcElement, Tooltip, Legend);


function PieReact({ pieData }) {
    const chartRef = useRef(null);
    const [barGraphData, setBarGraphData] = useState();
    const data = {
        labels: pieData.states,
        datasets: [
            {

                data: pieData.data?.map((info) => {
                    return info.vBoys + info.vGirls + info.viiiBoys + info.viiiGirls + info.xBoys + info.xGirls
                }),
                backgroundColor: [
                    'rgba(255, 99, 135, 5.5)',
                    'rgba(54, 162, 235, 3.2)',
                    'rgba(255, 206, 86, 6.2)',
                    'rgba(75, 192, 192, 4.5)',
                    'rgba(153, 102, 255, 6.2)',
                    'rgba(255, 159, 64, 5.2)',
                ],
                borderColor: [
                    'rgba(54, 162, 235, 3.2)',
                    'rgba(75, 192, 192, 4.5)',
                    'rgba(255, 159, 64, 5.2)',
                    'rgba(255, 206, 86, 6.2)',
                    'rgba(255, 99, 135, 5.5)',
                    'rgba(153, 102, 255, 6.2)',
                ],
                borderWidth: 1,
            },
        ],
    };


    const setSelectedStateAtEvent = (element) => {
        if (!element.length) return;

        const { index } = element[0];

        setBarGraphData({
            state: pieData.states[index],
            Boys: [pieData.data[index].vBoys, pieData.data[index].viiiBoys, pieData.data[index].xBoys],
            Girls: [pieData.data[index].vGirls, pieData.data[index].viiiGirls, pieData.data[index].xGirls]

        });
    };
    const onClick = (event) => {
        const { current: chart } = chartRef;
        if (!chart) {
            return;
        }
        setSelectedStateAtEvent(getElementAtEvent(chart, event));
    };
    console.log(pieData)
    return (<>
        <Box sx={{ width: '100wh', maxWidth: 560, }} >
            <Pie
                data={data}
                ref={chartRef}
                onClick={onClick}
                option={{
                    labels: {
                        render: 'percentage',
                    },
                    legend: {

                        onClick: (e) => e.stopPropagation(),
                        display: false,
                        onclick() { }

                    },
                }}
            />
        </Box>
        <BarGraph barGraphData={barGraphData} />
    </>
    )
}

export default PieReact


