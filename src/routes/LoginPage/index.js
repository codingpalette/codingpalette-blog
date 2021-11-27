import React, { useCallback, useEffect } from 'react'
import Header from '../../components/Header'
import { FormGroup } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useInput from '../../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import AuthContainer from '../../containers/AuthContainer'

import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRecoilValue } from 'recoil'
import authState from '../../store/authState'
import Card from '../../components/Card'

const LoginPage = () => {
  const navigate = useNavigate()
  const userData = useRecoilValue(authState)
  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')
  const onSubmit = useCallback(
    async e => {
      e.preventDefault()
      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (e) {
        console.error(e)
      }
    },
    [email, password],
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
                    <label htmlFor="email">이메일</label>
                    <Input value={email} onChange={onChangeEmail} id="email" required />
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
