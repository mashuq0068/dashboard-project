"use client"
import Image from 'next/image';
import './Reviews.scss'
import positiveReview from "../../../public/assets/images/positiveReviews.png"
import negativeReview from "../../../public/assets/images/negativeReviews.png"
import noReviews from "../../../public/assets/images/noReviews.png"
import UsersCountry from '../UsersCountry/UsersCountry';


const Reviews = () => {
    const reviewPercent = {
        one:76,
        two : 20,
        three : 4,

    }
   return (
    <div style={{display : 'flex'}}>
       <div className="container-reviews">
          <div  style={{color:'black' , fontWeight:'600', fontSize:'24px' }}>
          Reviews
            </div>
       
           <div style={{display : 'flex' , alignItems:'center', gap :'4%'}}>
            <Image height='auto' width='auto' alt='positive reviews' src={positiveReview}/>
           <div className="skill-box-review">
               <span className="title-review">Positive Reviews</span>
               <div className="skill-bar-review">
                   <span className="skill-per-one-review one-review">
                       <span className="tooltip-review">{reviewPercent.one}%</span>
                   </span>
               </div>
           </div>
           </div>
         <div style={{display : 'flex' , alignItems:'center', gap :'4%'}}>
         <Image height='auto' width='auto' alt='positive reviews' src={negativeReview}/>
         <div className="skill-box-review">
               <span className="title-review">Negative Reviews</span>
               <div className="skill-bar-review">
                   <span className="skill-per-two-review two-review">
                       <span className="tooltip-review">{reviewPercent.two}%</span>
                   </span>
               </div>
           </div>
         </div>
           <div style={{display : 'flex' , alignItems:'center' , gap :'4%'}}>
           <Image height='auto' width='auto' alt='positive reviews' src={noReviews}/>
           <div className="skill-box-review">
               <span className="title-review">Not Reviews Yet</span>
               <div className="skill-bar-review">
                   <span className="skill-per-three-review three-review">
                       <span className="tooltip-review">{reviewPercent.three}%</span>
                   </span>
               </div>
           </div>
           </div>
          
       </div>
       <div>
        <UsersCountry></UsersCountry>
       </div>
       </div>
   )
};

export default Reviews;