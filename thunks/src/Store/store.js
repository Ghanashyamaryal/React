 import { configureStore} from '@reduxjs/toolkit'
 import cartreducer from "./Cartslice"
 import productreducer from "./productslice"
export const store = configureStore({
    reducer:{
        Cart:cartreducer,
        Product:productreducer
    }
})