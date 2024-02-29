import React, { useContext, useState } from 'react';
import Contextapi from '../contextapi/Contextapi';
import './login.css'; 

const Login = () => {
    const {setuser} = useContext(Contextapi)
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");

   const  handlesubmit = (e)=>{
        e.preventDefault();
      setuser({name});
    }
    return (
        <div className="login-container">
            <input
            className="input-field"
            type='text'
            value = {name}
            placeholder='Enter Name'
            onChange={(e)=>{
               setname(e.target.value)
            }}
            />
            <input
            className="input-field"
            type='password'
            value = {password}
            placeholder='Enter Password'
            onChange={(e)=>{
               setpassword(e.target.value)
            }}
            />

            <button className="submit-button" onClick={handlesubmit}>Submit</button>
        </div>
    );
}

export default Login;
