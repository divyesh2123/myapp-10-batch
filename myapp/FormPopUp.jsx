import { 
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText, 
    DialogTitle, 
    TextField } 
from '@mui/material';
import React, { useState } from 'react'

export default function FormPopUp(prpos) 
{
  const [form,setform]= useState({
    firstName:"",
    lastName : ""
  })

  const handleChange = (e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  const saveInformatiopn = ()=>{

    let p = [...prpos.data];
    p.push({...form,id:p.length+1});
    prpos.setData(p);
    prpos.handleClose();
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
