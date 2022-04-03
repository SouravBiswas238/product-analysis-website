import React from 'react';
import Rating from 'react-rating';
import './SingleReview.css';
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SingleReview = (props) => {
    const { name, picture, email, rating, registered, about } = props.review;
    return (
        <div >
            <div className='single-review-cart'>
                <div className='single-cart-image'>
                    <img src={picture} alt="" />
                    <span>{email}</span>
                </div>
                <p className='fa-icon-color'>
                    <Rating
                        initialRating={rating}
                        emptySymbol={<FontAwesomeIcon icon={faStar} />}
                        fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                        readonly
                    ></Rating>
                </p>

                <p>{about}</p>
                <p>By <span>{name}</span> on <small>{registered}
                </small></p>
            </div>
        </div>
    );
};

export default SingleReview;