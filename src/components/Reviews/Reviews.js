import React from 'react';
import useProduct from '../../hook/useProduct';
import ReviewiItem from '../ReviewItem/ReviewiItem';
import './Reviews.css';



const Reviews = () => {

  const [products, setProducts] =  useProduct();

    return (
        <div>
            
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