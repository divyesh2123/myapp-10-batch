import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Co() {
    
  const [data,setData]= useState([]);

 useEffect(()=>{

  // fetch("https://jsonplaceholder.typicode.com/posts")
  // .then(y=>y.json())
  // .then(y=>{
  
  //     setData(y);
  // });

  axios.get("https://jsonplaceholder.typicode.com/posts")
  .then(y=>{
    setData(y.data);
  })
 },[])

  console.log(data);
  return (
    <>
        {/* {counter}    
        {
          data.map
        }
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button> */}
    </>
  )
}
