import React from 'react';
import './nav.css'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
const Navbar = () => {
    const cart = useSelector(state=>state.Cart)
    return (
        <div className='div1' >
            <span> <img src='https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg' className='img1' alt='' /></span>
            <div>
               <Link to="/" className='navLink'>Home</Link>
               <Link to="/Cart" className='navLink'>Cart</Link>
                <span> <img className='img1' src='https://t3.ftcdn.net/jpg/03/14/85/06/360_F_314850659_2aQLerz30kWj78tqpaGSbzYD6sAUmuDf.jpg' alt='' />{cart.length}</span>
            </div>

        </div>
    );
}

export default Navbar;
