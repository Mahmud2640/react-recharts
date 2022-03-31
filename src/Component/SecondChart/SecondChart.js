import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const SecondChart = () => {
   const data = [
      {
        "name": "Group A",
        "price": 4000,
        "total": 2400,
        "final": 2400
      },
      {
        "name": "Group B",
        "price": 3000,
        "total": 1398,
        "final": 2210
      },
      {
        "name": "Group C",
        "price": 2000,
        "total": 9800,
        "final": 2290
      },
      {
        "name": "Group D",
        "price": 2780,
        "total": 3908,
        "final": 2000
      },
      {
        "name": "Group E",
        "price": 1890,
        "total": 4800,
        "final": 2181
      },
      {
        "name": "Group F",
        "price": 2390,
        "total": 3800,
        "final": 2500
      },
      {
        "name": "Group G",
        "price": 3490,
        "total": 4300,
        "final": 2100
      }
    ]
   return (
      <LineChart width={800} height={500} data={data}>
         <Line type="monotone" dataKey="price" stroke="#8884d8" />
         <Line type="monotone" dataKey="total" stroke="#8884d8" />
         <Line type="monotone" dataKey="final" stroke="#8884d8" />
         <Tooltip />
         <XAxis dataKey="name" />
         <YAxis />

      </LineChart>
   );
};

export default SecondChart;