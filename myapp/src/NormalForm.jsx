import React, { useState } from 'react'

export default function NormalForm() {

    const [data,setData]= useState({
        firstName:"",
        lastName : ""
    })

    const handelChange = (e)=>{

        setData({...data,[e.target.name]: e.target.value});
    }
    
  

    const handleSubmit = (e)=>{
        e.preventDefault();
        
        console.log(data);

    }
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' name="firstName" onChange={handelChange} />
        <input type='text' name="lastName"  onChange={handelChange}/>
        <input type='submit' value="save"/>
    </form>
  )
}
