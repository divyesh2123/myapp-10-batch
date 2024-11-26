import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button } from '@mui/material';

export default function GridDataDisplay(props) 
{

  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },

    {
      field: 'lastName',
      headerName: 'last name',
      width: 150,
      editable: true,
    },
    {
      field: '',
      width: 250,
      renderCell: (params) =>{

        

        return (<>
          <Button
           variant="contained"
           size="small"
           style={{ marginLeft: 16 }}
           tabIndex={params.hasFocus ? 0 : -1}
            onClick={(d)=>{
              let p = [...props.data].filter((t)=>{

                return t.id != params.row.id
              }); 

              props.setData(p);

            }}
          >Delete</Button>

          <Button
           variant="contained"
           size="small"
           style={{ marginLeft: 16 }}
           tabIndex={params.hasFocus ? 0 : -1}
          
          >Edit</Button>
        
        </>)
      }
    }
  
  ]
  return (
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={props.data}
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
