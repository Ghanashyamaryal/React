import { useEffect, useState } from 'react';
import './App.css';
import Body from './component/Body';
import Button from './component/Button';
import { ThemeProvider } from './contextapi/Themecontex';
function App() { 
  const [Thememode, setThememode] = useState("light");

  const lightTheme = ()=>{
    setThememode("light")
  }
  const darkTheme = ()=>{
    setThememode("dark")
  }
  useEffect(()=>{
      document.querySelector('html').classList.remove('dark','light');
      document.querySelector('html').classList.add(Thememode);
  },[Thememode])
  return (
   
    <ThemeProvider value={{Thememode,lightTheme,darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Button/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Body/>
                    </div>
                </div>
            </div>

    </ThemeProvider>

  );
}

export default App;
