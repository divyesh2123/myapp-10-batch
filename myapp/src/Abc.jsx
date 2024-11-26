import React, { useState } from 'react'
import MyChild from './MyChild';

export default function Abc() {

    const [data,setData]= useState([]);
    
    const [input,setinput]= useState('');

    const handelInput = (e)=>{

        setinput(e.target.value);
    }

    const handelSubmit = ()=>{
        let p = [...data];
        p.push(input);

       setData(p); 

    }
  return (
    <div>

       

            <input type='text' name="name" onChange={handelInput} />

            <input type='button' name="save" onClick={handelSubmit}/>

            <MyChild data={data}/>

       
        



    </div>
  )
}
