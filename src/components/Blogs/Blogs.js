import React from 'react';
import './Blogs.css';


const Blogs = () => {
    return (
        <div className='m-10'>
            
            <div className="border p-5 shadow-md">
                <h2 className='text-red-900'> What is Context API? </h2>
                <h5> The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application. </h5>
            </div>

            <div className="border p-5 mt-5 shadow-md">
                <h2 className='text-red-900'> What is Semantic Tag? </h2>
                <h5> HTML5 semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it. By providing this extra level of clarity, HTML5 semantic elements also help search engines to read the page and find the required information faster. </h5>
            </div>

            <div className="border p-5 mt-5 shadow-md">
                <h2 className='text-red-900'> what is inline and inline block ? </h2>
                <h5> inline The element doesn't start on a new line and only occupy just the width it requires. You can't set the width or height. inline-block It's formatted just like the inline element, where it doesn't start on a new line. </h5>
            </div>


        </div>
    );
};

export default Blogs;