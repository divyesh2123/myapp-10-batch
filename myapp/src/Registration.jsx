import React, { useState } from 'react'

export default function Registration() {

    const [form,setform]= useState({
        firstName : "",
        lastName : ""
    })

    const handleChange = (e)=>{

        setform({...form,[e.target.name]: e.target.value})
    }

   
    const handleSubmit = (e)=>{

        e.preventDefault();

        console.log(form);
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>

            <input type='text' name="firstName" onChange={handleChange}/>
            <input type='text' name="lastName" onChange={handleChange}/>

            <input type='submit' value="save"/>
        </form>

    </div>
  )
}
