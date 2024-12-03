import React from 'react'
import myData from './p'

export default function MyDataD() 
{

  return (
    <div>{
    
    myData.map((t)=>
    {

        return (<div>{t.firstName}</div>)

    })
}</div>
  )
}
