import './App.css';
import Usecurrency from './hooks/Usecurrency';
import { useState } from 'react';
import InputBox from './component/Inputbox'

function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("npr");
  const [calamount, setcalamount] = useState(0);
  
  const currinfo = Usecurrency(from)
  const option =Object.keys(currinfo);
  // console.log(option)

  function calculatefunction(){
    setcalamount(amount*currinfo[to])
  }
  function swap(){
    setfrom(to)
    setto(from)
    setamount(calamount)
    setcalamount(amount)
  }

  return (
    <div className=" h-screen w-full back flex flex-wrap justify-center">
      <div className=' w-full  '>
       <div className=' w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 '>
        <form
        onSubmit={(e)=>{
          e.preventDefault()
          calculatefunction();
        }}
        >

        <div>
            <InputBox
            label="From"
            amount= {amount}
            currencyoption = {option}
            onAmountchange = {(amount)=>{
              setamount(amount)}
            }
            selectCurrency = {from}
            onCurrencyChange = {(currency)=>{
              setfrom(currency)}}
            />
           </div>
           <div>
            <button
            type='button'
            className=' bg-orange-800 p-2 m-2 rounded-lg flex text-white'
            onClick={swap}
            >SWAP
            </button>
           </div>
             <div className="w-full mt-1 mb-4">
            <InputBox
            label="To"
            amount= {calamount}
            currencyoption = {option}
            onCurrencyChange = {(currency)=>{
              setto(currency)}
            }
            selectCurrency = {to}
            />
           </div>
           <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
        </form>
          
       </div>
      </div>
    </div>
  );
}

export default App;
