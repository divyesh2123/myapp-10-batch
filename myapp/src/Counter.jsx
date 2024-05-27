import React, { useState } from 'react'

export default function Counter() {


const    [counter,setcounter] =   useState(0)
   

     const inc = ()=>{

        setcounter(counter+1);
     }

     const dec = ()=>{

        setcounter(counter-1);
     }
  return (
    <div>{counter}
    
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
    </div>
  )
}
