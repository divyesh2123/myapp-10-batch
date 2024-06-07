import React, { useEffect, useState } from 'react'
import OneEmployee from './OneEmployee';

export default function Employee() {

    const [d,setData]= useState([]);

    useEffect(()=>{

fetch("https://jsonplaceholder.typicode.com/users")
.then(y=>y.json())
.then(y=>{
    setData(y);
})

    },[])
  return (
    <table>

        {
            d.map((v,index)=>{

                return( <OneEmployee op={v} index={index}/>)

            })
        }
        
       
    </table>
  )
}
