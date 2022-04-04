import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, BarChart, Legend, Bar } from 'recharts';
import './Dashboard.css'
const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    return (
        <div className='chart-container'>
            <div>
                <h2>Line Chart For revenue And Investment</h2>

                <LineChart width={900} height={600} data={data}>

                    <Line dataKey={"investment"}></Line>
                    <Line dataKey={"revenue"}></Line>

                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month"></XAxis>
                    <YAxis ></YAxis>
                    <Tooltip />
                </LineChart>
            </div>

            <div className='bar-chart-container'>
                <h2>BarChart For Sell</h2>
                <BarChart width={800} height={500} data={data}>
                    <XAxis dataKey="month" stroke="#8884d8" />
                    <YAxis />
                    <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />

                    <Legend width={100} wrapperStyle={{ top: 30, right: 10, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />


                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="sell" fill="#4D77FF" barSize={50} />
                </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;