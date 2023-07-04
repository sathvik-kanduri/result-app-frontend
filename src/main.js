import React from 'react'
import { useNavigate } from 'react-router-dom';

function Main({student,staff}) {
    let navigate=useNavigate();
    console.log(student);
    console.log(staff);
  return (
    <div className='staff'>
      <br></br>
      <br></br>
      <h1>Results Portal</h1>
      <br></br>
      <br></br>
      <div className='Tag' onClick={()=>{student ? navigate('/student') :navigate('/Login') } }>Student</div>
      <br></br>
      <br></br>
      <div className='Tag' onClick={()=>{staff ? navigate('/staff'): navigate('loginStaff')}}>Staff</div>
      <br></br>
      <br></br>
    </div>
  )
}

export default Main
