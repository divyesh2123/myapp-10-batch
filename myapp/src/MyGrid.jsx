import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function MyGrid() {

    const [data,setData]= useState([]);

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(y=>y.json())
        .then(y=>{
            setData(y)
        })

    })

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'title',
          headerName: 'title',
          width: 150,
          editable: true,
        },
        {
          field: 'body',
          headerName: 'Last name',
          width: 150,
          editable: true,
          renderCell: (params)=>
          {

          }
        },
       
      ];
  return (
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={data}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: {
            pageSize: 5,
          },
        },
      }}
      pageSizeOptions={[5]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Box>
  )
}
