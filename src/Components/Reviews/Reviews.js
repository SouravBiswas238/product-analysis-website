import React from 'react';
import useReview from '../../hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'

const Reviews = (props) => {
    const [reviews, setReviews] = useReview();
    // console.log(review)

    return (
        <div>
            <h1>Customer Review: {reviews.length}</h1>
            <div className='reviews-container'>

                {
                    reviews.map(review => <SingleReview
                        key={review._id}
                        review={review}
                    ></SingleReview>)
                }
            </div>

            {props.children}


        </div>
    );
};

export default Reviews;