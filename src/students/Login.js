import axios from 'axios';
import React, { useContext, useState } from 'react'
import { Avatar, Button, Grid, Paper, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login({setStudent}) {
  
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  
  let navigate=useNavigate();
  function submit()
  {
     axios.post('http://localhost:7000/api/auth/login',{
      email:email,
      password:password
     },{
      withCredentials:true,
    }
     )
     .then((data)=>{
           
            navigate('/student');
            setStudent(true)
     })
     .catch((err)=>{
      console.log("err");
      setStudent(false)
     })
  }
  const paperStyle={padding:20,height:'50vh',width:320,margin:"60px auto"}
  return (
    <div >
   <Grid>
    <Paper elevation={10} style={paperStyle}>
      <Grid  >
      <h2>Student login</h2>

    <TextField label='Email' placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}} variant='standard' fullWidth required></TextField>
    
    <TextField label='password' placeholder='Enter password' type='password' onChange={(e)=>{setPassword( e.target.value)}} variant='standard' fullWidth required></TextField>
    <br></br> <br></br>
    <Button type='submit' variant="contained" color='primary' onClick={submit}>Login</Button>
    <div className='login' onClick={()=>{navigate('/register')} }>create an account</div>
    </Grid>
    </Paper>
    </Grid>
  </div>
  )
}

export default Login
