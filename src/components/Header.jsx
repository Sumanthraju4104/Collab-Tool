import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom';
function Header() {
  const navigate=useNavigate();
  return (
    <div className='header-cont'>
      <div>
        <h1>Collab Tool</h1>
      </div>
      <div >
        <button className='signup-btn' onClick={() => {
                  navigate(`/register`);
                }}>Signup</button>
        <button className='login-btn' onClick={() => {
                  navigate(`/login`);
                }}>Login</button>
        <button className='home-btn' onClick={() => {
                  navigate(`/`);
                }}>Home</button>
      </div>
    </div>
     
  )
}

export default Header