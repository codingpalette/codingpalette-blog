import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './routes/MainPage'
import LoginPage from './routes/LoginPage'
import JoinPage from './routes/JoinPage'
import AboutPage from './routes/AboutPage'
import AdminPage from './routes/AdminPage'
import AdminPostPage from './routes/AdminPostPage'
import AdminPostWritePage from './routes/AdminPostWritePage'

import { auth } from './firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useRecoilState } from 'recoil'
import authState from './store/authState'

import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { getUser } from './models/user'

function App() {
  const [loggedInUser, setLoggedInUser] = useRecoilState(authState)
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      // console.log(user)
      // console.log(user)
      if (user) {
        userState(user.uid)
      } else {
        setLoggedInUser(null)
      }
    })
  }, [])

  const userState = async uid => {
    try {
      const res = await getUser(uid)
      setLoggedInUser(res)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <Routes>
        <Route index path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/*<Route path="/join" element={<JoinPage />} />*/}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/admin">
          <Route index element={<AdminPage />} />
          <Route path="post" element={<AdminPostPage />} />
          <Route path="write" element={<AdminPostWritePage />}>
            <Route path=":id" element={<AdminPostWritePage />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
