import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';
const Product = (props) => {
    const {name, img, seller, price, stock}= props.singleProduct;
    return (
        <div className="product">
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
                <h5 className="product-name">{name}</h5>
                <p><small>by {seller}</small></p>
                <br/>
                <p>${price}</p>
                <p>Only {stock} stock in left - Order Fast</p>
                <button className="cart-button" onClick={() => props.handleAddProduct(props.singleProduct)}><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;