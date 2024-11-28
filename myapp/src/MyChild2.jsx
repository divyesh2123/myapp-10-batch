import React from 'react'
import MyChild3 from './MyChild3'

export default function MyChild2(props) {
  return (
    <div>
        <MyChild3 mydata={props.mydata}/>
    </div>
  )
}
