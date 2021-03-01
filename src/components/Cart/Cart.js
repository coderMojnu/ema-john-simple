import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let total = 0;
        for(let i=0; i<cart.length; i++){
            const product = cart[i];
            total = total + product.price;
        }
    let shipping = 0;
    if(total > 0 && total < 31){
        shipping = 10;
    }
    else if(total > 30 && total < 50){
        shipping = 5;
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Shipping Cost: {shipping.toFixed(2)}</p>
            <p>Product Price: {total.toFixed(2)}</p>
            <p>Tax: {((total+shipping)*0.25).toFixed(2)}</p>
            <p>Total Cost: {(total + shipping).toFixed(2)}</p>

        </div>
    );
};

export default Cart;