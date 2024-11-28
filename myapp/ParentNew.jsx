import React, { useState } from 'react'
import GridDataDisplay from './GridDataDisplay'
import { Button } from '@mui/material'
import FormPopUp from './FormPopUp'

export default function ParentNew() {

    const [open,setopen]= useState(false);
    const [data,setData]= useState([]);
    const [id,setId]= useState(-1);

    console.log(data);

    const handleClose= ()=>{
        setopen(false);
    }

    const editItem = (id)=>{
      setId(id);
      setopen(true);
    }
  return (
    <>
    <Button variant="outlined"  onClick={()=>{
        setopen(true);
    }}>
        Open form dialog

    
      </Button>
        <FormPopUp 
         open={open}
         handleClose={handleClose} 
         data ={data}
         setData={setData}
          id={id}
          setId={setId}
         >

         </FormPopUp>
        <GridDataDisplay data={data} setData={setData} 
         editItem={editItem}/>
    
    
    
    </>
  )
}
