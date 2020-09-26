import React from 'react';
import '../styling/checkoutProduct.css';
import { useStateValue } from '../StateProvider.js';

function CheckoutProduct({id, image, title, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () =>{
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct_image'src={image} alt={title}/>

            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>{title}</p>
                <p className='checkoutProduct_price'>
                    <small>$<strong>{price}</strong></small>
                </p>
                <div className='checkoutProduct_rating'>
                    {Array(rating).fill().map((_, i) =>
                        <p>&#x2605;</p>
                    )}
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
