import React from 'react';
import "./addcart.css"
import { Contetxapi } from '../context/context';
const Addcart = () => {
    const { items } = Contetxapi()
    const totalPrice = items.reduce((a,b)=>a+b.price,0)
    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            {items.map((item, index) => (
                <div key={index} className="cart-item">
                    <span className="item-name">{item.name}</span>
                    <span className="item-price">${item.price}</span>
                </div>
            ))
            }
            <div className="total-price">
                Total: ${totalPrice}
            </div>
        </div>
    );
};

export default Addcart;
