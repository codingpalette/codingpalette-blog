import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './routes/MainPage'
import LoginPage from './routes/LoginPage'

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
