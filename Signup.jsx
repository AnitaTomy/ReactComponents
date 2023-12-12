import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
        <Typography variant='h4'>Signup Here</Typography><br />
        <TextField variant='outlined' placeholder='Enter your name'/><br /><br />
        <TextField variant='outlined' placeholder='Enter your age'/><br /><br />
        <TextField variant='outlined' placeholder='Enter your Email id'/><br /><br />
        <TextField variant='outlined' placeholder='Enter a password'/><br /><br />
        <Button variant='contained'>Submit</Button>

        
    </div>
  )
}

export default Signup