import React, { useContext, useEffect, useState } from 'react'
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Student from './students/student';
import Staff from './staff/staff';
import Addresult from './staff/Addresult';
import Getstudent from './staff/Getstudent';
import LoginStaff from './staff/LoginStaff';
import RegisterStaff from './staff/RegisterStaff';
import Register from './students/Register';
import Navbar from './Navbar';
import './App.css';
import Main from './main';
import Login from './students/Login';
import Cookies from 'js-cookie';
import Logout from './students/logout';
function App() {
  
  const [student,setStudent]=useState(false)
  const [staff,setStaff]=useState(false)
  let navigate=useNavigate();
  
  useEffect(()=>{
    setStudent(Cookies.get('hash'));
    setStaff(Cookies.get('staff'));
  },[])
  console.log(staff);
  
  return (
    <div className="App">
      
      <div className="body">
      <Routes>
         <Route path='/' element={<Main student={student} staff={staff} />}></Route>
       { student && <Route path='/student' element={<Student />}></Route>}
        {staff && <Route path='/staff' element={<Staff/>}></Route>}
        <Route path='/add' element={<Addresult />} />
        <Route path='/Get' element={<Getstudent />} />
        <Route path='/Login' element={<Login setStudent={setStudent}/>} />
        <Route path='/loginStaff' element={<LoginStaff setStaff={setStaff}/>}></Route>
        <Route path='/register' element={<Register setStudent={setStudent}/>}></Route>
        <Route path='/registerStaff' element={<RegisterStaff setStaff={setStaff}/>}></Route>
        <Route path='logout' element={<Logout />} />
      </Routes>
      </div>
     
    </div>
  );
}





export default App;
