import { Button, Grid, Paper,TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginStaff({setStaff}) {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  let navigate=useNavigate();
  function submit()
  {
     axios.post('https://result-portal-api.onrender.com/api/auth/loginStaff',{
      email:email,
      password:password
     },{
      withCredentials:true,
    })
     .then((data)=>{
            console.log(data);
            setStaff(true);
            navigate('/staff')
            
     })
     .catch((err)=>{
      console.log("err");
      setStaff(false);
     })
  }
  const paperStyle={padding:20,height:'50vh',width:320,margin:"60px auto"}
  return (
    <div>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
        <Grid  >
        <h2>Staff login</h2>
    <TextField label='Email' placeholder='Enter email' onChange={(e)=>{setEmail(e.target.value)}} variant='standard' fullWidth required></TextField>
    <br></br>
    
    
    <TextField label='password' placeholder='Enter password' type='password' onChange={(e)=>{setPassword( e.target.value)}} variant='standard' fullWidth required></TextField>
    <br></br>
    <br></br>
    <Button type='submit' variant="contained" color='primary'  onClick={submit}>Login</Button>
    <div className='login' onClick={()=>{navigate('/registerStaff')} }>create an account</div>
    </Grid>
    </Paper>
    </Grid>
  </div>
  )
}

export default LoginStaff;
