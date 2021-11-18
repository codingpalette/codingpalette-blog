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
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        console.log('로그인 상태')
        console.log(user)
        setLoggedInUser({ userEmail: user.email })
        // ...
      } else {
        console.log('로그아웃 상태')
        setLoggedInUser(null)
        // User is signed out
        // ...
      }
    })
  }, [])
  return (
    <>
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  )
}

export default App
