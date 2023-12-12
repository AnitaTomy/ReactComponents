import React, { useState } from 'react'

const Mapping = () => {
    var [name,setName]=useState(["Anita","Raveena","Neha"])
  return (
    <div>
        <ul>
            {name.map((value,index)=>{
                return(
                    <li>{value}</li>
                )
            })}
        </ul>
    </div>
  )
}

export default Mapping