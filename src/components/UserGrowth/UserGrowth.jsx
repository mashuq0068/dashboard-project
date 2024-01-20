"use client"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { curveCardinal } from 'd3-shape';
import './UseGrowth.scss'
import MostActive from '../MostActive/MostActive';
// import { defs, linearGradient } from 'react-native-svg';
const gradientColor = 'linear-gradient(171.05deg, rgba(7, 106, 73, 0.36) 24.17%, rgba(203, 23, 107, 0.06) 115.07%)';
const data = [
  {
    name: 'Sun',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Mon',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Tue',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Wed',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Thu',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Fri',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sat',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const cardinal = curveCardinal.tension(0.2);

const UserGrowth = () => {
    return (
        <>
         <div className='text-growth'>
         User Growth
         </div>
         <div style={{display:'flex'}}>
        <ResponsiveContainer width='100%' height={300}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
            <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="24.17%" stopColor="#076A49" stopOpacity={0.36} />
            <stop offset="115.07%" stopColor="#CB176B" stopOpacity={0.06} />
          </linearGradient>
        </defs>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
         

        

          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" fillOpacity={0.3} />
          <Area type={cardinal} dataKey="uv" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.3} />
        </AreaChart>
       </ResponsiveContainer>
       <div>
        <MostActive></MostActive>
       </div>
       </div>
       </>
    );
};

export default UserGrowth;