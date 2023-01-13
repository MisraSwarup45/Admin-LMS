import React from 'react';
import { Chart } from "react-google-charts";

export const data = [
    [
        "Range",
        "Year",
        "Months",
        "Day",
    ],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 65.4, 67, 25.7],
    [4, 21.7, 28.8, 15.5],
    [5, 21.9, 27.6, 10.4],
    [6, 18.8, 23.6, 17.7],
    [7, 7.6, 22.3, 19.6],
    [8, 22.3, 39.2, 10.6],
    [9, 26.9, 52.9, 14.8],
    [10, 22.8, 40.9, 11.6],
    [11, 25.3, 17.9, 14.7],
    [12, 26.6, 18.4, 15.2],
    [13, 24.8, 16.3, 13.6],
    [14, 24.2, 16.2, 15.4],
    [15, 26.2, 16.2, 23.4],
];

export const options = {
    chart: {
        title: "Earnings Of Company in LMS",
        subtitle: "In Million USD",
    },
};

const CompanyRev = () => {
    return (
        <Chart
            chartType="Line"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    )
}

export default CompanyRev;