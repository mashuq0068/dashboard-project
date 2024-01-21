"use client"
import './Users.scss'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'female', value: 40},
  { name: 'male', value: 100},
  
];
const COLORS = ['#CB176B', '#076A49'];

const Users = () => {
    return (
        <div className='pie-container'>
        <p className='hundred'>100%</p>
        <div className='text-users'>
         Users
         </div>
         <div className='main-details'>
            <div className='male'>
                <div className='male-part'>
                   <span className='male-circle'></span>
                   <p className='male-p'>Male</p>
                </div>
                <p>70%</p>
            </div>
            <div className='female'>
               <div className='female-part'>
                   <span className='female-circle'></span>
                   <p className='female-p'>Female</p>
                </div>
                <p>30%</p>
            </div>
         </div>

        <ResponsiveContainer width={300} height={400}>
        <PieChart >
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={40}
          outerRadius={70}
         
          
          fill="#8884d8"
          paddingAngle={0}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}  />
          ))}
        </Pie>
        
      </PieChart>
      </ResponsiveContainer>
      </div>
    );
};

export default Users;