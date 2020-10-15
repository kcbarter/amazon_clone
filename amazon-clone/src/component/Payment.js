import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import '../styling/payment.css';
import CheckoutProduct from './CheckoutProduct';
import { Link }  from 'react-router-dom';

function Payment() {
    const history = useHistory();
    const[{ basket, user  }, dispatch] = useStateValue();
    return (
        <div className="payment">
            <h1>Checkout (<Link to='/checkout' id="link">{basket?.length} items</Link>)</h1>
            <div className="payment_container">
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivary Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>1234 Code Lane</p>
                        <p>Bellevue, WA 98007</p>
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and Delivary</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>

                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment;
