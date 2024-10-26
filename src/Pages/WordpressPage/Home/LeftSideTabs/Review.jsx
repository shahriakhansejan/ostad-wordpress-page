import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { useEffect, useState } from 'react';
import { RiDoubleQuotesR } from 'react-icons/ri';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [isSlice, setIsSlice] = useState(true);
    useEffect(()=>{
        fetch('/reviews.json')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
        <div className='mt-20'>
          <h1 className="pb-5 text-xl lg:text-3xl font-bold text-[#151515]">রিভিউ</h1>
          <hr className="pb-2" />
          {
            (isSlice? (reviews.slice(0,3)) : reviews).map(review => <div className='border p-5 rounded mb-3 bg-white' key={review._id}>
                <span className='flex justify-between items-end'>
                    <span><Rating style={{ maxWidth: 125 }} value={review.rating}/>
                    <h1 className='text-lg ml-1 mt-1 font-semibold text-[#323232]'>{review.name}</h1></span>
                <RiDoubleQuotesR className='text-5xl text-gray-200'/>
                </span>
                <p className='text-[#757575] mt-4'>{review.details}</p>
            </div>)
            
          }
      
      <div className='text-center mt-5'><button onClick={()=> setIsSlice(!isSlice)} className='border bg-white w-full rounded py-2 font-semibold'>{isSlice? `আরো ${reviews.length-3} টি দেখুন` : 'কমিয়ে দেখুন'}</button></div>
      </div>
    );
};

export default Review;