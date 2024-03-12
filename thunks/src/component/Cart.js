import { remove } from "../Store/Cartslice";
import { useSelector, useDispatch } from 'react-redux'
import "./nav.css"

const Cart = () => {
    const cart= useSelector((state)=>state.Cart)
    const dispatch = useDispatch()
    function handleRemove(id){
       dispatch(remove(id))
    }
    const total = cart.reduce((a,b)=> a+b.price ,0)
    return (
        <div>
        <h3>Cart</h3>
        <div className="cartWrapper">
            {cart.map((product) => (
                <div key={product.id} className="cartCard">
                    <img src={product.image} alt="" />
                    <h5>{product.title}</h5>
                    <h5>{product.price}</h5>
                    <button
                        className="btn"
                        onClick={() => handleRemove(product.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}
        </div>
        <div className='total'>Total Price = ${total}</div>
    </div>
    );
}

export default Cart;
