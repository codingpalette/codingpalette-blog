import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './routes/MainPage'

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<MainPage />} />
      </Routes>
    </>
  )
}

export default App
