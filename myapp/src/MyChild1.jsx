import React from 'react'
import MyChild2 from './MyChild2'

export default function MyChild1(props) {
  return (
    <div>
        <MyChild2 mydata={props.mydata}/>
    </div>
  )
}
