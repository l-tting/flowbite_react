import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const SimpleLineChart = ({ sales_per_day, profit_per_day }) => {

    const data = sales_per_day.map((item, index) => ({
        day: item.day,
        sales: item.sales,
        profit: profit_per_day[index]?.profit || 0,
    }));

    return (
        <div>
            <h2>Simple Line Chart</h2>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="sales" stroke="#8884d8" />
                <Line type="monotone" dataKey="profit" stroke="#82ca9d" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="day" />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default SimpleLineChart;
