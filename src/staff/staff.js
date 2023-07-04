import React from 'react'
import Addresult from './Addresult'
import { Link, Route, Routes  } from 'react-router-dom'
import Getstudent from './Getstudent'
import './staff.css'
import {useNavigate} from 'react-router-dom';


function Staff() {
  let navigate=useNavigate();
  return (
    <div className='staff'>
      <h2>Staff</h2>
      <br></br>
      <br></br>
      <div className='Tag' onClick={()=>{navigate('/add')} }>Add the results</div>
      <br></br>
      <br></br>
      
      <div className='Tag' onClick={()=>{navigate('/Get')}}>Get the results</div>
      <br></br>
      <br></br>
      <br></br>
     
    </div>
  )
}

export default Staff
