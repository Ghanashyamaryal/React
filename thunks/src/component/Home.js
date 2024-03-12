import React, { useEffect, useState } from 'react';
import './nav.css'
import { useSelector, useDispatch } from 'react-redux'
import { add } from "../Store/Cartslice"
import { fetchproducts } from "../Store/productslice"
const Home = () => {
    // const [products, setproducts] = useState([]);
    const dispatch = useDispatch()

    const { products, Status } = useSelector((state) => state.Product)

    useEffect(() => {

        dispatch(fetchproducts());
        // fetch('https://fakestoreapi.com/products')
        //     .then((res) => res.json())
        //     .then((data) => setproducts(data))

    }, [])

    function handleCart(product) {
        dispatch(add(product))
    }
    
    return (
        <div><h1>Products</h1>
            <div className="productsWrapper">
                {products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.image} alt="" />
                        <h4>{product.title}</h4>
                        <h5>{product.price}</h5>
                        <button className="btn" onClick={() => handleCart(product)}>
                            Add to cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
