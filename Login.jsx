import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <Typography variant='h1'>Hello</Typography>
        <TextField variant='standard' label='Username'/><br /><br />
        <Button variant='contained'>Submit</Button>
    </div>
  )
}

export default Login