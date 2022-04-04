import React from 'react';
import { Link } from 'react-router-dom';
import Reviews from '../Reviews/Reviews';


import './Home.css';

const Home = () => {
    return (
        <div>
            <div className='home-container'>
                <div className='details-container'>
                    <h1>Your best Camera is <span>Here</span></h1>
                    <h1>Buy Your First Choice</h1>
                    <div>
                        <p>The Canon EOS M50 Mark II Mirrorless Camera comes with a 15-45 Lens. It is fun and easy to use with Wi-Fi connectivity for content creators to stay close to their audience at all times. Keep your social media feeds lit with high-quality visual storytelling in 4K and accurate eye and face detection autofocusing. With clear, high-resolution 4K UHD 24p video, eye-catching photos with a 24.1 Megapixel (APS-C) CMOS Sensor using the built-in Electronic Viewfinder or Vari-angle Touchscreen LCD.</p>
                    </div>
                </div>
                <div className='camera-container'>
                    <img src="https://www.startech.com.bd/image/cache/catalog/camera/mirriorless/canon/eos-m50-mark-ii/eos-m50-mark-ii-01-500x500.jpg" alt="" />
                </div>
            </div>
            <Reviews reviewItem="true">
                <Link to='/reviews'>
                    <button className='see-all-button'>See all Reviews</button>
                </Link>
            </Reviews>
        </div>
    );
};

export default Home;