import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Products() {

    const [product,setProduct] = useState([]);

    

    useEffect(()=>{
        

        axios.get("https://fakestoreapi.com/products").then(y=>{

        console.log(y);
            setProduct(y.data)
        })



    },[])
  return (
    <div>{
        product.map((v)=>{


            return (<div>{v.title}</div>)
        })

        }</div>
  )
}
