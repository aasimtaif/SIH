import React, { useRef, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut, getElementAtEvent } from 'react-chartjs-2';
import './App.css'
import BarGraph from './BarGraph';
import { Box, Stack } from '@mui/material'


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
                borderWidth: 0.51,
            },
        ],
    };


    const setSelectedStateAtEvent = (element) => {
        if (!element.length) return;

        const { index } = element[0];

        setBarGraphData({
            title: `Drop Rate of ${pieData.states[index]}`,
            Boys: [pieData.data[index].vBoys, pieData.data[index].viiiBoys, pieData.data[index].xBoys],
            Girls: [pieData.data[index].vGirls, pieData.data[index].viiiGirls, pieData.data[index].xGirls],
            labels: ['5th', '8th', "10th"]
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
        <Box >
            <Box sx={{ width: "100%" }}>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="flex-start"
                    spacing={0}
                >
                    <Box sx={{ width: "25%", }}>
                        <Doughnut
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
                    <Box sx={{ width: "50%", mr: 5 }} >
                        <BarGraph barGraphData={{
                            title: `Gender wise Dropout Rate Of States `,
                            Boys: pieData.data?.map((info) => {
                                return info.vBoys + info.viiiBoys + info.xBoys
                            }),
                            Girls: pieData.data?.map((info) => {
                                return info.vGirls + info.viiiGirls + info.xGirls
                            }),
                            labels: pieData.states,
                        }} />
                    </Box>
                </Stack>
            </Box>
        </Box>
        <Box sx={{ width: 3 / 4, m: "auto", mt: 5 }} >
            <BarGraph barGraphData={barGraphData} />
        </Box>
    </>
    )
}

export default PieReact


