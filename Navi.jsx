import { AppBar,Button,Toolbar,Typography} from '@mui/material'
import React from 'react'


const Navi = () => {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <Typography sx={{flexGrow: 1 }} align='left' color='darkblue'>Trial1</Typography>
                <Button variant='text' color='warning'>Login</Button>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navi