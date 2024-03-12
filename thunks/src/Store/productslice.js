import { createSlice } from "@reduxjs/toolkit";

const Status = Object.freeze({
    LOADING: "loading",
    IDLE: "idle",
    ERROR: "error"
})
const initialState = {
    products: [],
    status: Status.IDLE
}


const Product = createSlice(
    {
        name: "Cart",
        initialState,
        reducers: {
            setproduct(state, action) {
                state.products = action.payload;
            },
            setStatus(state, action) {
                state.status = action.payload;

            }
        }

    }
)
export const { setproduct, setStatus } = Product.actions
export default Product.reducer


//thunks
export function fetchproducts() {
    return async function fetchproductthunk(dispatch, getstate) {
     dispatch(setStatus(Status.LOADING))
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const product = await res.json()
            dispatch(setproduct(product))
            dispatch(setStatus(Status.IDLE));
        }
        catch {
            dispatch(setStatus(Status.ERROR));
        }

    }

}