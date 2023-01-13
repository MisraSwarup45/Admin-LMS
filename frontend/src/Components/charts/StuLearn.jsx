import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
    [
        "Range",
        "Hours",
    ],
    [1, 37.8],
    [2, 30.9],
    [3, 45.4],
    [4, 51.7],
    [5, 61.9],
    [6, 48.8],
    [7, 37.6],
    [8, 72.3],
    [9, 36.9],
    [10, 52.8],
    [11, 45.3],
    [12, 46.6],
];

export const options = {
    chart: {
        title: "Averate Study Time Of A student",
        subtitle: "In Hour",
    },
};

const StuLearn = () => {
    return (
        <Chart
            chartType="Line"
            width="80%"
            height="400px"
            data={data}
            options={options}
        />
    );
}

export default StuLearn;