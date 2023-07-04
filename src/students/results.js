import React, { useState } from 'react'
import './result.css'
import axios from 'axios'
import { Button, TextField } from '@mui/material';
function Results() {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [adhoc,setAdhoc]=useState('');
  const [fom,setFom]=useState('');
  const [ds,setDs]=useState('')
  const [error,setError]=useState('');
  function submit()
  {
    axios.get(`http://localhost:7000/api/auth/${email}`)
    .then((x)=>{
      setAdhoc(x.data.results.adhoc)
      setFom(x.data.results.fom);
      setDs(x.data.results.ds);
      setError('')
    })
    .catch((err)=>{
        setError('the credentials are not matching')
        setAdhoc()
      setFom();
      setDs();
    })
  }
  return (
    <div className='sheet'>
      <h1>Result sheet</h1>
      <br></br>
      <label >Name of the student:</label>
      <input type='text'  onChange={(e)=>{setName(e.target.value)}}  ></input>
      <br></br>
      <label >Email of the student:</label>
      <input type='text' onChange={(e)=>{setEmail(e.target.value)}} ></input>
      <br></br>
      <br></br>
      <Button variant="contained" onClick={submit}>Submit</Button>
      
      <p className='error'>{error}</p>
      <div className='table'>
      <table >
        <tr>
            <th>s.no</th>
            <th>Subject name</th>
            <th>Marks(for 100)</th>
            
        </tr>
        
        <tr>
            <td>1</td>
            <td>adhoc</td>
            <td>{adhoc} </td>
            
        </tr>
        <tr>
            <td>2</td>
            <td>fundamentals of management</td>
            <td>{fom}</td>
            
        </tr>
        <tr>
            <td>3</td>
            <td>data science</td>
            <td>{ds}</td>
            
        </tr>
      </table>
      </div>
      
    </div>
  )
}

export default Results
