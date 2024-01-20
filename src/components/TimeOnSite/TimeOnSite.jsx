import React from "react";
import './TimeOnSite.scss';

function TimeOnSite () {
    const timePercent = {
        one:70,
        two : 50,
        three : 15

    }
   return (
    <div >
       <div className="container-timeOn">
          <div  style={{color:'black' , fontWeight:'600', fontSize:'24px' }}>
          Time on Site
            </div>
       
           <div className="skill-box">
               <span className="title">07:00 PM - 12:00 AM</span>
               <div className="skill-bar">
                   <span className="skill-per-one one">
                       <span className="tooltip">{timePercent.one}%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">05:00 PM - 07:00 PM</span>
               <div className="skill-bar">
                   <span className="skill-per-two two">
                       <span className="tooltip">{timePercent.two}%</span>
                   </span>
               </div>
           </div>
           <div className="skill-box">
               <span className="title">07:00 AM - 12:00 PM</span>
               <div className="skill-bar">
                   <span className="skill-per-three three">
                       <span className="tooltip">{timePercent.three}%</span>
                   </span>
               </div>
           </div>
          
       </div>
       </div>
   )
}

export default TimeOnSite;