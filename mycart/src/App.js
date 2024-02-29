import './App.css'
import React from   'react'
import { useState } from 'react';
import product from './product.json'
import Cart from './cart';
const Products = product.products;
function App(){
  const [passwords,setpasswords]=useState("true");
  return(
    <div className='Main'>
    <Cart img={Products[0].images} rating = {Products[0].rating} price={Products[0].price} title={Products[0].title}/>
    <Cart img={Products[1].images} rating = {Products[1].rating} price={Products[1].price} title={Products[1].title}/>
    <Cart img={Products[2].images} rating = {Products[2].rating} price={Products[2].price} title={Products[2].title}/>
    <Cart img={Products[3].images} rating = {Products[3].rating} price={Products[3].price} title={Products[3].title}/>
    <Cart img={Products[4].images} rating = {Products[4].rating} price={Products[4].price} title={Products[4].title}/>
    <Cart img={Products[5].images} rating = {Products[5].rating} price={Products[5].price} title={Products[5].title}/>
    <Cart img={Products[6].images} rating = {Products[6].rating} price={Products[6].price} title={Products[6].title}/>
    <Cart img={Products[7].images} rating = {Products[7].rating} price={Products[7].price} title={Products[7].title}/>
    <Cart img={Products[8].images} rating = {Products[8].rating} price={Products[8].price} title={Products[8].title}/>
    <Cart img={Products[9].images} rating = {Products[9].rating} price={Products[9].price} title={Products[9].title}/>
    </div>

  )
}
export default App;