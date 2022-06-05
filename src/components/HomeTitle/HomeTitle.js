import React from 'react';
import './HomeTitle.css';
import img from '../utlity/homePicture.jpg';



const HomeTitle = () => {


    return (
        <div className='home-title'>
            

            <div className="header-container container mx-auto px-6">
                    
                    <div className="text-container ">

                        <h1 className='text-6xl'> Your Next Keyboard </h1>
                        <h1 className='text-6xl text-blue-600/100 mb-5'> Your Best Keyboard </h1>
                        <h4 className='text-2xl'> Products with electrical plugs are designed for use in the US. Outlets and voltage differ internationally and this product may require an adapter or converter for use in your destination. Please check compatibility before purchasing. </h4>
                        <br />
                        <br />
                        <button className='bg-orange-500/50 hover:bg-teal-900 p-2 ml-5 rounded-md hover:text-white'>
                                Live Demo
                        </button>

                    </div>
            
                    <div className="image-container">
                        <img src={img} alt="" />
                    </div>

                </div>

        </div>
    );
};

export default HomeTitle;