import React from 'react';
import './SingleReview.css'

const SingleReview = (props) => {
    const { name, picture, email, gender, registered, about } = props.review;
    return (
        <div >
            <div className='single-review-cart'>
                <div className='single-cart-image'>
                    <img src={picture} alt="" />
                    <span>{email}</span>
                </div>
                <p>Using Font- awsome</p>
                {/* <p>email: {email} </p> */}
                <p>{about}</p>
                <p>By <span>{name}</span> on <small>{registered}
                </small></p>
            </div>
        </div>
    );
};

export default SingleReview;