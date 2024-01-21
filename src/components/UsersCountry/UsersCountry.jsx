"use client"
import './UsersCountry.scss'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';


const data = [
  { name: 'Pakistan', value: 200 },
  { name: 'USA', value: 600 },
  { name: 'Bangladesh', value: 700 },
  { name: 'India', value: 530 },
  { name: 'Canada', value: 300 },
];
const COLORS = ['#17C8B7', '#CB176B', '#076A49', '#FF985F' , '#9908F5'];
const UsersCountry = () => {
    const countryPercentage = {
        bangladesh : 70,
        usa : 10,
        india : 10,
        canada : 5,
        pakistan : 5
    }

    return (
        <>
       <div className='text-country'>
       Users Country
         </div>
        <div className='country-container'>
        <ResponsiveContainer width={300} height={400}>
        <PieChart >
        <Pie
          data={data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Pie
          data={data}
          cx={420}
          cy={200}
          startAngle={180}
          endAngle={0}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      </ResponsiveContainer>
      <div className='country-details'>
            <div className='bangladesh'>
                <div className='bangladesh-part'>
                   <span className='bangladesh-circle'></span>
                   <p className='bangladesh-p'>Bangladesh</p>
                </div>
                <p>{countryPercentage.bangladesh}%</p>
            </div>
            <div className='usa'>
               <div className='usa-part'>
                   <span className='usa-circle'></span>
                   <p className='usa-p'>USA</p>
                </div>
                <p>{countryPercentage.usa}%</p>
            </div>
            <div className='india'>
               <div className='india-part'>
                   <span className='india-circle'></span>
                   <p className='india-p'>India</p>
                </div>
                <p>{countryPercentage.india}%</p>
            </div>
            <div className='canada'>
               <div className='canada-part'>
                   <span className='canada-circle'></span>
                   <p className='canada-p'>Canada</p>
                </div>
                <p>{countryPercentage.canada}%</p>
            </div>
            <div className='pakistan'>
               <div className='pakistan-part'>
                   <span className='pakistan-circle'></span>
                   <p className='pakistan-p'>Pakistan</p>
                </div>
                <p>{countryPercentage.pakistan}%</p>
            </div>
         </div>
      </div>
      </>
    );
};

export default UsersCountry;