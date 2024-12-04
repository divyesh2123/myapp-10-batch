import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {

    const nav= useNavigate();
    const [data,setData]= useState({
        "email": "",
        "password": ""
    })

    const handleChange= (e)=>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();

        axios.post("http://localhost:4000/accounts/authenticate",data)
        .then(y=>{
            localStorage.setItem("token",JSON.stringify(y.data));
            nav("/account");
        })

    }
  return (
    <form onSubmit={handleSubmit}>
        
        <input type='text' name='email' onChange={handleChange}/>
        <input type='text' name='password'  onChange={handleChange}/>
        <input type='submit' value="login"/>
    
    </form>
  )
}
