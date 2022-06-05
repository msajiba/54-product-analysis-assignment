import { Processor } from 'postcss';
import React from 'react';
import useProduct from '../../hook/useProduct';
import ReviewiItem from '../ReviewItem/ReviewiItem';
import './Reviews.css';



const Reviews = () => {

  const [products, setProducts] =  useProduct();

    return (
        <div>

                <h1 className='mb-6 text-bolder text-3xl text-center'>Custom Total Reviews ({products.length}) </h1>

            {
                products.map(product=> <ReviewiItem 

                                            key={product._id}
                                            product={product}

                                        > </ReviewiItem>)
            }

        </div>
    );
};

export default Reviews;