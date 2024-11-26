import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
export default function DisplayDataM() {

    const [data,setData]= useState([]);

        useEffect(()=>{

            fetch("https://jsonplaceholder.typicode.com/posts")
            .then(y=>y.json())
            .then(y=>{
                setData(y);
            })


        },[])
  
    const columns = 
    [
        { field: 'userId', headerName: 'UserId', width: 150 },
        { field: 'id', headerName: 'Id', width: 150 },
        { field: 'title', headerName: 'Title', width: 150 },
        { field: 'body',
             headerName: 'Body',
              width: 150 ,
              renderCell: (params)=>{

                console.log(params);

                return <span style={{color:"red"}}>{params.row.body.slice(0,5)}</span>

              }


        },
    ];
  return (
    <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={data} columns={columns} />
    </div>
  )
}
