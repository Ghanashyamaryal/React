import React from 'react';
import './cart.css'
import { useState } from 'react';
const Cart = (props) => {
    const [like, setlike] = useState(false);
    function changelike() {
        setlike(!like)
    }
    console.log(like)
    const url = props.img;
    return (
        <div className=' relative flex flex-row  flex-wrap  m-10 border-solid rounded-2xl' style={{ borderRadius: 5, borderColor: 'white' }}>
            <div className=' flex-col h-85 w-60 rounded-xl border-collapse ' style={{ backgroundColor: 'whitesmoke' }}>
                <div className=' flex flex-row'>
                    <div className=' h-40 w-40 m-5 rounded-3xl border-red-300 images' ><img src={url} /> </div>
                    <button onClick={changelike}>
                        {!like ? "🤍" : "🩷"}
                    </button>
                </div>
                <div className=' text-orange-600 text-3xl text-center'>{props.title}</div>
                <div className=' h-4 w-45  m-5 text-center text-2xl text-violet-900'>{`Rating: ${props.rating} ⭐`}</div>
                <div className=' h-4 w-40 m-5 text-2xl text-pink-500'>{`   Price : ${props.price}`}</div>
                <button className=' flex justify-center  bg-orange-500 text-white p-2 m-7 rounded-md w-30 hover:bg-orange-400'>Add To Cart</button>
            </div>
        </div>

    );
}

export default Cart;
