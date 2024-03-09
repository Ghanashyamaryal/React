import { useState } from "react";
import Addcart from "./component/addcart";
import Cart from "./component/cart";
import { CartProvider } from "./context/context"
function App(){
  const [items, setitem] = useState([]);
  return(
    <CartProvider value={{items,setitem}}>
        <Cart name="macbook" price={23450}/>
        <Cart name="iphone" price={90800}/>
        <Cart name="s23" price={45000}/>
        <Addcart/>
    </CartProvider>
  )
}
export default App;