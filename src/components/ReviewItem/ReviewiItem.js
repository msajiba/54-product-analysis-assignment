import React from 'react';
import './ReviewItem.css';
import { BeakerIcon, StarIcon } from '@heroicons/react/solid'

const ReviewiItem = ({product}) => {

    const {name,picture, review, ratting} = product;


    return (
        <div className='item-container container mx-auto px-10 rounded-md pt-5 pb-5'>

            <div className="flex flex-row">
                <img className='rounded-full w-10 h-10' src={picture} alt="" />
                <p className='pl-3 pt-1'> {name} </p>
            </div>
            
            <div className=" icon-container">
                 <div className='w-10 h-10 text-orange-400 flex'>
                    <StarIcon> </StarIcon>
                    <StarIcon> </StarIcon>
                    <StarIcon> </StarIcon>
                    <StarIcon> </StarIcon>
                    <StarIcon> </StarIcon>
               </div>
                <p> <small className='ml-4 '> {ratting} </small>  </p>
            </div>

            <h4> <small> {review} </small> </h4>
            
            
        </div>
    );
};

export default ReviewiItem;