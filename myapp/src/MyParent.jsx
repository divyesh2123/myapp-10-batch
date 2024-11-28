import React, { useState } from 'react'
import MyChild1 from './MyChild1'

export default function MyParent() {
    const [data,setData]= useState('test');
  return (
    <div>
        <MyChild1 mydata={data}/>
    </div>
  )
}
