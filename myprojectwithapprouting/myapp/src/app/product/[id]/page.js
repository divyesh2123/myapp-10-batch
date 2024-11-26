
import React from 'react'

export default async function ProductInfo(params) {


    let d= (await params).params.id;

    console.log(d);
  return (
    <div>page</div>
  )
}
