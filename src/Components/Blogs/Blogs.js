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
                <h1>Context Api</h1>
                <p>A semantic element clearly describes its meaning to the browswe and the developer.there are some simantic tag that use to difine parts of the webpage:</p>
                <p>
                    <b>Semantic Elements:</b>
                    &#60;form&#62; it define a from in a website
                    &#60;header&#62;=it clearly show that it is a header of  a website
                    &#60;table&#62;, and   &#60;article&#62;,  &#60;main&#62;,  &#60;nav&#62;,  &#60;mark&#62;,  &#60;section&#62;,  &#60;time&#62; etc Clearly defines its content.
                </p>

            </div>
        </div>
    );
};

export default Blogs;