import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
function Dashboardheader() {
  return (
     <div className='header-cont'>
          <div>
            <h1>Collab Tool</h1>
          </div>
          <div >
            <button className='btn'><Link to={'/'}>Logout</Link></button>
          </div>
        </div>
         
  )
}

export default Dashboardheader