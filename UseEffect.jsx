import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    var[name,setFname]=useState()
    const changeHome=()=>{
        setFname("Home")
    }
    const changeContact=()=>{
        setFname("Contact")
    }
    const changeGallery=()=>{
        setFname("Gallery")
    }
    useEffect(()=>{
        changeContact()
    },[])
  return (
    <div>
        <Typography>
            Welcome to {name}
        </Typography>
        <Button variant='contained' onClick={changeHome}>
            Home
        </Button>&nbsp;&nbsp;
        <Button variant='contained' onClick={changeContact}>
            Contact
        </Button>&nbsp;&nbsp;
        <Button variant='contained' onClick={changeGallery}>
            Gallery
        </Button>
    </div>
  )
}

export default UseEffect