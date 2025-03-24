import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUpPage'
import Homepage from './pages/Homepage'
import LoginPage from './pages/LoginPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
    <>

      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/signup' element={<LoginPage />} />
          <Route path='/settings' element={<SettingsPage />} />
          <Route path='/profile' element={<ProfilePage />} />
        
        </Routes>
      </div>
    </>
  )
}

export default App
