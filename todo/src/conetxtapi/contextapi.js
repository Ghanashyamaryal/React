
import { useContext, createContext } from "react";

const contextapi = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg",
            completed: false
        }
    ],

    addtodo: (todo) => { },
    updatetodo: (id,todo) => { },
    togglecomplete: (id) => { },
    deletetodo: (id) => { },

}



)

export const ContextProvider = contextapi.Provider

export const Context = () => {
    return useContext(contextapi);
}