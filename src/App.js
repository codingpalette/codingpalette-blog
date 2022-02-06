import React, { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainPage from './routes/MainPage'
import JoinPage from './routes/JoinPage'
import PostPage from './routes/PostPage'
import TagsPage from './routes/TagsPage'

const LoginPage = lazy(() => import('./routes/LoginPage'))
const AboutPage = lazy(() => import('./routes/AboutPage'))
const AdminPage = lazy(() => import('./routes/AdminPage'))
const AdminPostPage = lazy(() => import('./routes/AdminPostPage'))
const AdminPostWritePage = lazy(() => import('./routes/AdminPostWritePage'))

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index path="/" element={<MainPage />} />
          <Route path="/cp_login" element={<LoginPage />} />
          {/*<Route path="/join" element={<JoinPage />} />*/}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/tags/:id" element={<TagsPage />} />
          <Route path="/admin">
            <Route index element={<AdminPage />} />
            <Route path="post" element={<AdminPostPage />} />
            <Route path="write" element={<AdminPostWritePage />}>
              <Route path=":id" element={<AdminPostWritePage />} />
            </Route>
          </Route>
          <Route path="*" element={<MainPage />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  )
}

export default App
