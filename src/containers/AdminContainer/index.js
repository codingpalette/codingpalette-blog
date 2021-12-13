import React, { useEffect } from 'react'
import { Container, Content } from './styles'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import authState from '../../store/authState'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'

const AdminContainer = ({ children }) => {
  const navigate = useNavigate()
  const userData = useRecoilValue(authState)

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        navigate('/')
      }
    })
  }, [])
  return (
    <>
      {userData && (
        <>
          <Container>
            <Content>{children}</Content>
          </Container>
        </>
      )}
    </>
  )
}

export default AdminContainer
