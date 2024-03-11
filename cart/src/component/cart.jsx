import React from 'react';
import "./cart.css"
import { Contetxapi } from '../context/context';

const Cart = (props) => {
    const { items, setitem } = Contetxapi();
function handlecard(){
    setitem([...items, { name: props.name, price: props.price }])
}
    return (
        <div className="product">
            <p className="product-name">Name: {props.name}</p>
            <p className="product-price">Price: ${props.price}</p>
            <button className="add-to-cart-button" onClick={handlecard
                
            }>Add to cart</button>
        </div>
    );
}

export default Cart;
