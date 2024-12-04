import axios from 'axios';
import React, { useEffect, useState } from 'react'
import authFetch from './axiosbase/interceptors';

export default function Account() {
    const [data,setData]= useState([]);

    useEffect(()=>{

        var p = JSON.parse(localStorage.getItem("token"));
        authFetch.get("accounts")
        .then(y=>{
            setData(y.data);
        })
    },[])

  return (
    <div>Account</div>
  )
}
