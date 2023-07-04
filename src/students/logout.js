import React from 'react'
import Cookies from 'js-cookie';
import './logout.css';
function Logout() {
    
  return (
    <div className='Logout'>
      {
         Cookies.remove('hash')
        
      }
      {
         Cookies.remove('staff')
        
      }
      <h2>the user is successfully logout</h2>
    </div>
  )
}

export default Logout;
