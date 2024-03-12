import { createSlice } from "@reduxjs/toolkit";

const initialState = []

const Cart = createSlice(
    {
        name:"Cart",
        initialState,
        reducers:{
            add(state,action)
            {
                state.push(action.payload)
            },
            remove(state,action){
                return  state.filter((product)=>product.id!==action.payload)

            }
        }


    }
)
export const {add,remove}= Cart.actions
export default Cart.reducer