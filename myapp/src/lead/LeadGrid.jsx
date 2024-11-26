import React, { useEffect, useState } from 'react'
import authFetch from '../custom';

export default function LeadGrid() {

  const columns = [
    { field: '_id'
      , headerName: 'Id',
       width: 90 
      },
    {
      field: 'leadName',
      headerName: 'leadName',
      width: 150,
      editable: true,
    },
    {
      field: 'leadEmail',
      headerName: 'leadEmail',
      width: 150,
      editable: true,
    },
    {
      field: 'leadPhoneNumber',
      headerName: 'lead Phone Number',
      width: 150,
      editable: true,

    },
    {
      field: 'leadStatus',
      headerName: 'lead Status',
      width: 150,
      editable: true,
    }
    
   
  ];

 const [data,setData]= useState([]);

 
 useEffect(()=>{

  authFetch.get("/lead/").then(y=>{

  
    setData(y.data.map((v)=>{

      return {...v,id:v._id};
    }));
  })

 },[])




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
