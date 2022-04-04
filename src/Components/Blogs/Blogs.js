import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='blog-container'>
            <div>
                <h1>Context Api</h1>
                <p>Context API is a react structure . Context provides a way to pass data through the component tree without having to pass props down manually at every level.
                    It's like a global variable it can be inserted into any component directly. This API solves one major problem props drilling.</p>
            </div>
            <div>
                <h1>Semantic Tag</h1>
                <p>A semantic element clearly describes its meaning to the browser and the developer. Elements such as  &#60;header&#62;,  &#60;footer&#62;, and  &#60;article&#62; are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them

                </p>
                <b>Some Semantic Elements:</b>
                <ul>
                    <li>
                        &#60;form&#62;
                    </li>
                    <li>
                        &#60;section&#62;
                    </li>
                    <li>
                        &#60;table&#62;
                    </li>
                    <li>
                        &#60;footer&#62;
                    </li>
                </ul>



            </div>
        </div >
    );
};

export default Blogs;