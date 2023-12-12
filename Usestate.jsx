import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var name="Anita"
    var[fname,setFname]=useState("Anita")
    const changeName=()=>{
        console.log("Clicked")
        setFname(fname)
        setFname("")
    }
    const field=(e)=>{
        console.log(e.target.value)
        setFname(e.target.value)
    }
  return (
    <div>
        <Typography>
            My name is..{fname}
        </Typography><br />
        <TextField variant='outlined' label='Enter Name' onChange={field}/><br /><br />
        <Button variant='contained' onClick={changeName} value=
        {fname}>
            Change
        </Button>
    </div>
  )
}

export default Statebasics