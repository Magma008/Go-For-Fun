import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EntryPage from './pages/entryPage/EntryPage'
import PlayerProfile from './pages/playerProfile/PlayerProfile'
import SignUp from './pages/signUp/SignUp'
import Login from './pages/login/Login'
import { ToastContainer } from 'react-toastify'

const App = () => {
  return (
    <div>
      <ToastContainer/>
      <Routes>
        <Route path='/' element={<EntryPage/>} />
        <Route path='/player-profile' element={<PlayerProfile/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App
