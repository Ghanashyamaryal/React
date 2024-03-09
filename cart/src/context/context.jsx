import { createContext ,useContext} from "react";

export const context = createContext()

export const CartProvider = context.Provider;

export  const Contetxapi =()=>{
    return useContext(context)
}

