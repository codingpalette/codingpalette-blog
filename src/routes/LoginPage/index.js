import React, { useCallback, useEffect } from 'react'
import Header from '../../components/Header'
import { FormGroup } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useInput from '../../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import AuthContainer from '../../containers/AuthContainer'

import firebase from '../../firebase'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useRecoilValue } from 'recoil'
import authState from '../../store/authState'
import Card from '../../components/Card'

const auth = getAuth()
const LoginPage = () => {
  const navigate = useNavigate()
  const userData = useRecoilValue(authState)
  const [id, onChangeId] = useInput('')
  const [password, onChangePassword] = useInput('')
  const onSubmit = useCallback(
    async e => {
      e.preventDefault()
      try {
        await signInWithEmailAndPassword(auth, id, password)
      } catch (e) {
        console.error(e)
      }
    },
    [id, password],
  )

  console.log(userData)

  useEffect(() => {
    if (userData && userData.userEmail !== '') {
      navigate('/')
    }
  }, [userData])

  return (
    <>
      {userData && userData.userEmail === '' && (
        <>
          <Header />
          <AuthContainer>
            <Card>
              <FormGroup>
                <h3>LOGIN</h3>
                <form onSubmit={onSubmit}>
                  <div className="input_group">
                    <label htmlFor="id">아이디</label>
                    <Input value={id} onChange={onChangeId} id="id" required />
                  </div>
                  <div className="input_group">
                    <label htmlFor="password">비밀번호</label>
                    <Input value={password} onChange={onChangePassword} id="password" type="password" required />
                  </div>
                  <div className="btn_box">
                    <Button width="100%" type="submit">
                      로그인
                    </Button>
                    <Button width="100%" onClick={() => navigate('/join')}>
                      회원가입 하러 가기
                    </Button>
                  </div>
                </form>
              </FormGroup>
            </Card>
          </AuthContainer>
        </>
      )}
    </>
  )
}

export default LoginPage
