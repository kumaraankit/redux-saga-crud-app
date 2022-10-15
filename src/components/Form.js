import React, { useState } from 'react'
import {Container,Input,Button} from "@mui/material"

function Form() {
    const [user,setUser]=useState({
        id:0,
        name:"",
        email:"",
        password:""
    })

    const handleChange=(props)=>(event)=>{
      setUser({...user,[props]:event.target.value})
    }
  return (
 <Container>
    <Input value={user.id} disabled fullWidth/>
    <Input value={user.name} placeholder="Enter Name" fullWidth onChange={handleChange('name')}/>
    <Input value={user.email}  placeholder="Enter Email" fullWidth onChange={handleChange('email')}/>
    <Input value={user.password}  placeholder="Enter Password" fullWidth onChange={handleChange('password')}/>
    <Button fullWidth variant='contained'>Submit</Button>
 </Container>
  )
}

export default Form