import React from 'react';
import useReview from '../../hooks/useReview';
import SingleReview from '../SingleReview/SingleReview';
import './Reviews.css'

const Reviews = (props) => {
    const [reviews, setReviews] = useReview();
    const reviewItem = props.reviewItem;

    return (
        <div>
            <h1>Customer Review {reviewItem ? '3' : reviews.length}</h1>
            <div className='reviews-container'>

                {
                    reviewItem ? reviews.splice(3).map(review => <SingleReview key={review._id}
                        review={review}></SingleReview>) : reviews.map(review => <SingleReview
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