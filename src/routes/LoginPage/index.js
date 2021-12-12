import React, { useCallback, useEffect } from 'react'
import Header from '../../components/Header'
import { FormGroup } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Card from '../../components/Card'
import useInput from '../../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import AuthContainer from '../../containers/AuthContainer'

import { auth } from '../../firebase'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { useRecoilValue } from 'recoil'
import authState from '../../store/authState'

import { ErrorMessageOpen } from '../../hooks/toast'

const LoginPage = () => {
  const navigate = useNavigate()
  const userData = useRecoilValue(authState)
  const [email, onChangeEmail] = useInput('')
  const [password, onChangePassword] = useInput('')
  const onSubmit = useCallback(
    async e => {
      e.preventDefault()
      if (email.trim().length === 0) {
        ErrorMessageOpen('이메일을 입력해주세요.')
        return
      }

      if (password.trim().length === 0) {
        ErrorMessageOpen('비밀번호를 입력해주세요.')
        return
      }

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (e) {
        // console.error(e)
        ErrorMessageOpen('접속정보가 틀렸습니다.')
      }
    },
    [email, password],
  )

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        navigate('/')
      }
    })
  }, [])

  return (
    <>
      {!userData && (
        <>
          <Header />
          <AuthContainer>
            <Card>
              <FormGroup>
                <h3>LOGIN</h3>
                <form onSubmit={onSubmit}>
                  <div className="input_group">
                    <label htmlFor="email">이메일</label>
                    <Input value={email} onChange={onChangeEmail} id="email" />
                  </div>
                  <div className="input_group">
                    <label htmlFor="password">비밀번호</label>
                    <Input value={password} onChange={onChangePassword} id="password" type="password" />
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
