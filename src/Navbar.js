import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';
import { AppBar,CssBaseline, Toolbar } from '@mui/material'
function Navbar() {
  return (
    <div>
      <div className='route'>
        <CssBaseline />
        <AppBar position='relative'>
          <Toolbar >
       
        </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}

export default Navbar
