import React from 'react';
import '../styling/subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../StateProvider.js';

function Subtotal() {
    const [{ basket }] = useStateValue();

    return (
        <div className='subtotal'>
            <CurrencyFormat 
                renderText={(value =>
                <>
                    <p>
                        Subtotal ({basket.length} items) :
                        <strong> {value}</strong>
                    </p>
                    <small className='subtotal_gift'>
                        <input type='checkbox'/>This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparater={true}
                prefix={"$"}
            />
            <button>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal;
