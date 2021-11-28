import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './routes/MainPage'
import LoginPage from './routes/LoginPage'
import JoinPage from './routes/JoinPage'
import AboutPage from './routes/AboutPage'
import AdminPage from './routes/AdminPage'
import AdminPostPage from './routes/AdminPostPage'

import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useRecoilState } from 'recoil'
import authState from './store/authState'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

function App() {
  const [loggedInUser, setLoggedInUser] = useRecoilState(authState)
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      console.log(user)
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
            <Route path="/admin">
              <Route index element={<AdminPage />} />
              <Route path="post" element={<AdminPostPage />} />
            </Route>
          </Routes>
          <ToastContainer />
        </>
      )}
    </>
  )
}

export default App
