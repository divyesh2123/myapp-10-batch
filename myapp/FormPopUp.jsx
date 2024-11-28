import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText, 
    DialogTitle, 
    TextField } 
from '@mui/material';
import React, { useEffect, useState } from 'react'

export default function FormPopUp(prpos) 
{ 


  const [form,setform]= useState({
    firstName:"",
    lastName : ""
  })

  useEffect(()=>{

    if(prpos.id>=0)
    {
      let obj = [...prpos.data].find((v)=>{

        return v.id == prpos.id;
      });

      setform({...obj});
    }

  },[prpos.id])

  const handleChange = (e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  const saveInformatiopn = ()=>{
    if(prpos.id>=0)
    {
      //edit

      let objData = prpos.data.find((v)=>{

        return v.id == prpos.id;
      });

      objData.firstName = form.firstName;
      objData.lastName= form.lastName;
      prpos.setData([...prpos.data]);
      prpos.handleClose();
    }
    else
    {
    let p = [...prpos.data];
    p.push({...form,id:p.length+1});
    prpos.setData(p);
    prpos.handleClose();
    }
  }

  return (
    <Dialog
    open={prpos.open}
    onClose={prpos.handleClose}
    PaperProps={{
      component: 'form',
      onSubmit: (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
       
        console.log(prpos);
        handleClose();
      },
    }}
  >
    <DialogTitle>Subscribe</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
      <TextField
        autoFocus
        required
        margin="dense"
        id="firstName"
        name="firstName"
        label="first Name"
        type="text"
        fullWidth
        variant="standard"
        value={form.firstName}
        onChange={handleChange}
      />
      <TextField
        autoFocus
        required
        margin="dense"
        id="lastName"
        name="lastName"
        label="last Name"
        type="text"
        fullWidth
        variant="standard"
        value={form.lastName}
        onChange={handleChange}
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={prpos.handleClose}>Cancel</Button>
      <Button type="button" onClick={saveInformatiopn}>SaveInfo</Button>
    </DialogActions>
  </Dialog>
  )
}
