import React, { useState } from 'react'
import './Add.css'
import axios from 'axios'
import { Button } from '@mui/material';
function Addresult() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [adhoc,setAdhoc]=useState('');
  const [fom,setFom]=useState('');
  const [ds,setDs]=useState('')
  const [end,setEnd]=useState('');
  const [color,setColor]=useState('');
  function submit()
  {
     axios.post('https://result-portal-api.onrender.com/api/auth/results',{
      name:name,
      email:email,
      adhoc:adhoc,
      fom:fom,
      ds:ds
     })
     .then(()=>{
      console.log("successfully submited the results")
      setEnd('successfully submited the results');
      setColor('blue');
     })
     .catch(()=>{
      console.log("unsuccessfully submited");
      setEnd('unsuccessfully submited')
      setColor('red');
     })
  }
  return (

    <div className='add'>
      <h1>Result submission</h1>
      <br></br>
      <br></br>
      <input type='text' placeholder='Name of the student' onChange={(e)=>{setName(e.target.value)}}/>
      <br></br>
      <br></br>
      
      <input type='text' placeholder='Email of the student' onChange={(e)=>{setEmail(e.target.value)}} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
   
      <h3>Adding the Marks of student</h3>
      
      <input type='text' placeholder='ADHOC' onChange={(e)=>{setAdhoc(e.target.value)}}/>
      <br></br><br></br>
      
      <input type='text' placeholder='Fundamentals of management' onChange={(e)=>{setFom(e.target.value)}}/>
      <br></br><br></br>
      
      
      <input type='text' placeholder='Data science' onChange={(e)=>{setDs(e.target.value)}}/>
      <br></br><br></br>
      <Button variant='contained' onClick={submit}>Submit</Button>
      <p>{end}</p>
    </div>
  )
}

export default Addresult;
