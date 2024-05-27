import React from 'react'
import data from './data'

export default function Display() {
  return (
    <div>{
        data.map((v)=>{

            return (<><div>{v.city}</div><div> {v.name}</div></>)

        })

        }</div>
  )
}
