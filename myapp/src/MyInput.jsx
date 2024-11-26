import React, { useState } from 'react'
import { List } from 'immutable';
export default function MyInput() {
    const [data,setData]= useState(List([]));
    const [input,setInput]= useState('');

    const handelSave = ()=>{

        const newData = data.push(input);

        console.log(newData._tail.array);
       
        setData(newData);
    }

  return (
    <div>
        <input type='text' onChange={(e)=>{
            setInput(e.target.value);
        }} />
        <button onClick={handelSave}>save</button>
        {
          newData._tail.array.map((t)=>{

          })
        }
    </div>
  )
}
