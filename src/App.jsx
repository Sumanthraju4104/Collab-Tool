import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './components/Home.jsx'
import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Dashboard from './components/Dashboard.jsx'
import Opendocument from './components/openDocument.jsx'
import Creatdocument from './components/Creatdocument.jsx'

// import Footer from './components/Footer.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/dashboard' element={<Dashboard />}></Route>
      <Route path='/document' element={<Opendocument />}></Route>
      <Route path='/createdocument' element={<Creatdocument/>}></Route>
      </Routes>
    
      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App

