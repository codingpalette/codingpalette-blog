import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './routes/MainPage'
import LoginPage from './routes/LoginPage'
import JoinPage from './routes/JoinPage'
import AboutPage from './routes/AboutPage'

import firebase from './firebase'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useRecoilState } from 'recoil'
import authState from './store/authState'

const auth = getAuth()
function App() {
  const [loggedInUser, setLoggedInUser] = useRecoilState(authState)
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      setLoggedInUser({ userEmail: user?.email || '' })
    })
  }, [])
  return (
    <>
      {loggedInUser && (
        <>
          <Routes>
            <Route index path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/join" element={<JoinPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </>
      )}
    </>
  )
}

export default App
