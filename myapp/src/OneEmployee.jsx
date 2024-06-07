import React from 'react'

export default function OneEmployee(a) {

  const {index,op}= a;
  return (
    <tr><td>{op.name}</td></tr>
  )
}
