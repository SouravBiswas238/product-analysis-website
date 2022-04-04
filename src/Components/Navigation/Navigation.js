import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <div >
            <div className='navigation-container'>

                <Link to='/home'>Home</Link>
                <Link to='/reviews'>Reviews</Link>
                <Link to='/dashboard'>Dashboard</Link>
                <Link to='/blogs'>Blog</Link>
                <Link to='/about'>About</Link>
            </div>
        </div>
    );
};

export default Navigation;