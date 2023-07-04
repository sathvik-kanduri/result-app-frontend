import { Button, Grid, Paper, TextField } from '@mui/material';
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function RegisterStaff({setStaff}) {
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    let navigate=useNavigate()
    function submit()
    {
       
        axios.post('http://localhost:7000/api/auth/signupStaff',{
            name:username,
            email:email,
            password:password
        })
        .then((data)=>{
            console.log(data);
            setStaff(true);
            navigate('/loginStaff')
        })
        .catch(()=>{
            console.log('unsuccessfully registered');
        })
    }
    const paperStyle={padding:20,height:'50vh',width:320,margin:"60px auto"}
  return (
    <div >
      <Grid>
        <Paper elevation={10} style={paperStyle}>
        <Grid  >
        <h2>Staff register</h2>
     
      <TextField label='Username' placeholder='Enter username' onChange={(e)=>{setUsername(e.target.value)}} variant='standard' fullWidth required></TextField>
      <br></br>
      
      <TextField label='Email' placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}} variant='standard' fullWidth required></TextField>
      <br></br>
      
      <TextField label='Password' placeholder='Enter password' type='password' onChange={(e)=>{setPassword( e.target.value)}} variant='standard' fullWidth required></TextField>
      <br></br>
      <br></br>
      <Button variant="contained" onClick={submit}>Register</Button >
      </Grid>
      </Paper>
      </Grid> 
      
    </div>
  )
}

export default RegisterStaff


