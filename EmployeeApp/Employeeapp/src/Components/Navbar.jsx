import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <AppBar>
              <Toolbar>
                  <Typography variant='h5'>Employee App</Typography> &nbsp; &nbsp; &nbsp;
                  <Link to='/add'>
                      <Button variant='contained'>Add</Button>
                  </Link> &nbsp; &nbsp;
                  <Link to='/view'>
                      <Button variant='contained'>View</Button>
                  </Link> &nbsp; &nbsp;
              </Toolbar>
          </AppBar>
          <br /><br /><br />
    </div>
  )
}

export default Navbar
