import { createContext } from 'react';
import { useContext } from 'react';
const Themeapi = createContext({
     Thememode : "light",
    lightTheme : ()=>{},
    darkTheme : ()=>{},
}
   
)


export  const ThemeProvider = Themeapi.Provider;


export const Themecontex = () => {
 return useContext(Themeapi);
}


