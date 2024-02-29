import React from 'react';
import { useState } from 'react';
import Contextapi from './Contextapi';

const UseContextapiprovider = ({children}) => {
    const [user, setuser] = useState("");
    console.log(children)
    return (
     <Contextapi.Provider value={{user,setuser}} >
        {children}
     </Contextapi.Provider>
    );
}

export default UseContextapiprovider;
