import React from 'react'
import LeadForm from './LeadForm'
import LeadGrid from './LeadGrid'
import { Button, Drawer } from '@mui/material';

export default function Lead() {

    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
      };
  return (<>
<Button onClick={toggleDrawer(true)}>Add Lead</Button>
  <Drawer open={open} onClose={toggleDrawer(false)} anchor='right'>
    <LeadForm/>
    </Drawer>
    <LeadGrid/>
    </>
  )
}
