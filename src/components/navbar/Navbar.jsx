import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./Navbar.css"
import { AppBar, Toolbar, Typography } from '@mui/material';

const Navbar = () => {
  return (
    <>
    <AppBar sx={{bgcolor:'white', position:'fixed', top:'0', width:"100%", height:"60px",}} variant="elevation">
      <Toolbar sx={{justifyContent:'center', color:'black'}}>
        {/* <ArrowBackIcon sx={{fontSize:30}}/> */}
        <Typography sx={{fontSize:30}}>CloudX Project</Typography>
        {/* <AccountCircleIcon sx={{fontSize:30}}/> */}
      </Toolbar>
      
    </AppBar>
    </>
  )
}

export default Navbar