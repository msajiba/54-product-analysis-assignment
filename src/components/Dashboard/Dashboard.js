import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ComposedChart, Funnel, FunnelChart, LabelList, Legend, Line, LineChart,  Pie,  PieChart,  ReferenceLine,  ResponsiveContainer,  Tooltip,  XAxis, YAxis } from 'recharts';
import './Dashboard.css';



const Dashboard = () => {

        const [productInfo, setProductInfo] = useState([]);
        
        useEffect( () => {
            fetch('chartData.json')
            .then(res=> res.json())
            .then(data=> setProductInfo(data));
        }, []);


    const renderLineChart = (
        <LineChart width={400} height={250} data={productInfo}>
          <Line type="monotone" dataKey="sell" stroke="#8884d8" />
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="month" />
          <YAxis  />
        </LineChart>
      );
    
    const secondChart = (
        <ComposedChart width={400} height={250} data={productInfo}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Area type="monotone" dataKey="revenue" fill="#8884d8" stroke="#8884d8" />
            <Bar dataKey="sell" barSize={20} fill="#413ea0" />
            <Line type="monotone" dataKey="investment" stroke="#ff7300" />
        </ComposedChart>
      );


    const thirdChart = (
        <BarChart width={400} height={250} data={productInfo}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="investment" fill="#8884d8" />
            <Bar dataKey="sell" fill="#82ca9d" />
        </BarChart>
    );
  
    const fourthChart = (
        <PieChart width={400} height={250}>
            <Pie data={productInfo} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
            <Pie data={productInfo} dataKey="investment" nameKey="revenue" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
    );

  

    return (
        <div className='dashboard-container container mx-auto px-4 grid grid-cols-2 gap-2 sm:grid-col-1'>
            <div className="first-container">
                <h3 className='mb-5 underline'> Product Line Chart  </h3>
                {renderLineChart}
            </div>
            <div className="first-container">
                <h3 className='mb-5 underline '> Bar Chat</h3>
              {secondChart}
            </div>
            <div className="first-container">
                <h3 className='mb-5 underline'> Composed Chart </h3>
                {thirdChart}
            </div>
            <div className="first-container">
                <h3 className='mb-5 underline'> Pie Chart  </h3>
                {fourthChart}
            </div>
        </div>
    );
};

export default Dashboard;