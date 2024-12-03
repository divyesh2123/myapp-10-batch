import axios from 'axios';
import React from 'react'
import { useState } from 'react'

export default function RegisterA() {

    const [from,setform]= useState({

  "title": "",
  "firstName": "",
  "lastName": "",
  "email": "",
  "password": "",
  "confirmPassword": "",
  "acceptTerms": true
})

const handleChange= (e)=>{

    setform({...form,[e.target.name]:e.target.value});

}
const handleSubmit = ()=>{

    axios.post("url",form).then(y=>{

        console.log(y.data);
    })
}

  return (
    <form onSubmit={handleSubmit}>

        <input type='text' name="title"/>

    </form>
  )
}
