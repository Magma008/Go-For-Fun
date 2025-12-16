import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EntryPage from './pages/Entry Page/EntryPage'
import PlayerProfile from './pages/playerProfile/PlayerProfile'
import OrganizerProfile from './pages/organizerProfile/OrganizerProfile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<EntryPage/>} />
        <Route path='/player-profile' element={<PlayerProfile/>} />
        <Route path='/organizer-profile' element={<OrganizerProfile/>} />
      </Routes>
    </div>
  )
}

export default App
