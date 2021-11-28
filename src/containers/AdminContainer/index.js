import React, { useEffect } from 'react'
import { Container } from './styles'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import authState from '../../store/authState'

const AdminContainer = ({ children }) => {
  const navigate = useNavigate()
  const userData = useRecoilValue(authState)

  useEffect(() => {
    if (userData && userData.userEmail === '') {
      navigate('/')
    }
  }, [userData])
  return (
    <>
      {userData && userData.userEmail !== '' && (
        <>
          <Container>{children}</Container>
        </>
      )}
    </>
  )
}

export default AdminContainer
