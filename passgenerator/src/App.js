
import './App.css';
import { useState, useEffect, useCallback,useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [num, setnum] = useState(false);
  const [char, setchar] = useState(false);
  const [password,setPassword]= useState("")
  console.log(num)

  //useref

  const passwordref = useRef(null);
const passgenerator = useCallback(()=>{
  let passwords = ""
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

  if(num) str +="123456789";

  if(char) str+="!@#$%&*()[]{}^";

  for (let i = 0; i < length; i++) {
    let charac = Math.floor(Math.random()*str.length + 1);
    passwords += str.charAt(charac);
  }
  setPassword(passwords)
},
[length,num,char])

useEffect(()=>{
  passgenerator();
},[length,num,char])

//copy password whenever there is change in password 
const copypassword = useCallback(()=>{
  passwordref.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

  return (
    <div >
      <div className=' h-screen  w-full  bg-indigo-400 main relative'>
        <div className=" bg-blue-800 border-separate borders h-2/4 w-2/4 rounded-2xl shadow-md absolute left-60 top-24 ">
          <h1 className=' text-white border-l-fuchsia-500 m-10 p-15 text-center text-3xl'>PASSWORD GENERATOR</h1>
          <div className=' flex  box align-center justify-center m-10 '>
          <input
            type="text"
            value={password}
            className=' rounded-lg p-3  '
            ref={passwordref}
          />
         <button className=' m-1 p-2 bg-red-400 hover:bg-orange-800 cursor-pointer hover:h-17'
         onClick={copypassword}>
          COPY</button>
        </div>
        <div className=' flex flex-wrap'>
          <input
          type='range'
          min = {8}
          max = {100}
          className='ml-8 text-white text-2xl'
          onChange={(e)=>{setLength(e.target.value)}}
          />
          <label className=' text-white text-2xl'>{length}</label>
          <input
           type='checkbox' 
           className='ml-8 text-white text-2xl'
            onChange={()=>setnum((pre)=>!pre)}
            /> 
          <label className='text-white text-2xl'>Number</label>
          <input
           type='checkbox' 
           className='ml-8 text-white text-2xl'
            onChange={()=> setchar((pre)=>!pre)}
            />
         <label className=' text-white text-2xl'>Character</label>
        </div>
        </div>
      </div>
    </div>

  );
}

export default App;


