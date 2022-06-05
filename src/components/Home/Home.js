import React from 'react';
import useProduct from '../../hook/useProduct';
import ReviewiItem from '../ReviewItem/ReviewiItem';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import HomeTitle from '../HomeTitle/HomeTitle';



const Home = () => {

   const [products, setProducts] = useProduct();

   const sliceProduct = products.slice(0,3);

   const navigate = useNavigate();


    return (

        <div>

            <HomeTitle> </HomeTitle>
                
            <div>

                <h3 className='mb-6 text-bolder text-5xl text-center'> Customer Reviews {sliceProduct.length} </h3>


                        {
                            sliceProduct.map(product => <ReviewiItem 

                                                        key={product._id}
                                                        product={product}  

                                                    > </ReviewiItem> )
                        }

                    <div className="text-center mb-6">
                        <button 
                                className='bg-orange-600 pl-6 pr-6 rounded text-center'
                                onClick={()=> navigate('/reviews')}> 
                                See all reviews
                        </button>
                    </div>

            </div>

        </div>
    );
};

export default Home;