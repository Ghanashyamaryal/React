import {useState} from 'react'
import './App.css';
function App() {
  const  [color, setcolor] = useState('blue');
  return (

    <div className='w-full h-screen justify-center flex ' style={{backgroundColor:color}}>
     <div className='p-4 m-9  flex fixed flex-wrap bottom-10 flex-row justify-center bg-white rounded-xl '>
           <button className=' bg-red-500 justify-center hover:w-14/14 rounded-2xl m-2 p-4 hover:bg-red-700 ' onClick={()=>{setcolor('red')}}>RED</button>
           <button className=' bg-blue-500 justify-center hover:w-14/14 rounded-2xl m-2 p-4 hover:bg-blue-700 ' onClick={()=>{setcolor('blue')}}>BLUE</button>
           <button className=' bg-orange-500 justify-center hover:w-14/14 rounded-2xl m-2 p-4 hover:bg-orange-700 ' onClick={()=>{setcolor('orange')}}>ORANGE</button>
           <button className=' bg-pink-500 justify-center hover:w-14/14 rounded-2xl m-2 p-4 hover:bg-pink-700 ' onClick={()=>{setcolor('pink')}}>PINK</button>
           <button className='  bg-yellow-500 justify-center hover:w-14/14 rounded-2xl m-2 p-4 hover:bg-yellow-700 ' onClick={()=>{setcolor('yellow')}}>yellow</button>
     </div>
     </div>
  );
}
export default App;
