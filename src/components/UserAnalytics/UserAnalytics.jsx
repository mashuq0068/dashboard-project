"use client"
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from 'recharts';
import './userAnalytics.scss'
import TimeOnSite from '../TimeOnSite/TimeOnSite';

const data = [
    {
      name: 'Jan',
      newVisitor: 4000,
      totalUser: 5000,
      amt: 2400,
    },
    {
      name: 'Feb',
      newVisitor: 3000,
      totalUser: 4398,
      amt: 2210,
    },
    {
      name: 'Mar',
      newVisitor: 5000,
      totalUser: 9800,
      amt: 2290,
    },
    {
      name: 'Apr',
      newVisitor: 2780,
      totalUser: 3908,
      amt: 2000,
    },
    {
      name: 'May', 
      newVisitor: 1890,
      totalUser: 4800,
      amt: 2181,
    },
    {
      name: 'Jun', 
      newVisitor: 2390,
      totalUser: 3800,
      amt: 2500,
    },
    {
      name: 'Jul', 
      newVisitor: 3490,
      totalUser: 4300,
      amt: 2100,
    },
    {
      name: 'Aug', 
      newVisitor: 1890,
      totalUser: 4800,
      amt: 2181,
    },
    {
      name: 'Sep', 
      newVisitor: 2390,
      totalUser: 3800,
      amt: 2500,
    },
    {
      name: 'Oct', 
      newVisitor: 3490,
      totalUser: 4300,
      amt: 2100,
    },
  ];

const UserAnalytics = () => {
 
    return (
        
         <>
          <div className='text'>
         User Analytics
         </div>
    <div className='chart-container'>
        <ResponsiveContainer width='100%' height={300}>
        <BarChart
         width={400}
         height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalUser" barSize={15} fill="#076A49" activeBar={<Rectangle fill="pink" stroke="#076A49" />} />
          <Bar dataKey="newVisitor" barSize={15} fill="#CB176B" activeBar={<Rectangle fill="gold" stroke="#CB176B" />} />
        </BarChart>
        </ResponsiveContainer>
        <div>
            <TimeOnSite></TimeOnSite>
        </div>

      
        
        </div>
        

      </>  
        
        
    );
};

export default UserAnalytics;



