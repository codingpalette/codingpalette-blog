import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../../components/Header'
import AuthContainer from '../../containers/AuthContainer'
import { FormGroup } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Card from '../../components/Card'
import useInput from '../../hooks/useInput'

import { auth } from '../../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRecoilValue } from 'recoil'
import authState from '../../store/authState'

import { emailCheck } from '../../hooks/stringCheck'
import { ErrorMessageOpen } from '../../hooks/toast'

const JoinPage = () => {
  const navigate = useNavigate()
  const userData = useRecoilValue(authState)
  const [email, onChangeEmail] = useInput('')
  // const [nickname, onChangeNickname] = useInput('')
  const [password, onChangePassword] = useInput('')
  const [passwordCheck, onChangePasswordCheck] = useInput('')

  const onSubmit = useCallback(
    async e => {
      e.preventDefault()

      if (!emailCheck(email)) {
        ErrorMessageOpen('이메일을 입력해주세요.')
        return
      }

      if (password.length < 6) {
        ErrorMessageOpen('비밀번호 6자리 이상 입력해주세요.')
        return
      }

      if (password !== passwordCheck) {
        ErrorMessageOpen('비밀번호가 서로 다릅니다.')
        return
      }
      try {
        await createUserWithEmailAndPassword(auth, email, password)
      } catch (e) {
        console.error(e)
      }
    },
    [email, password],
  )

  useEffect(() => {
    if (userData && userData.userEmail !== '') {
      navigate('/')
    }
  }, [userData])

  return (
    <>
      <Header />
      <AuthContainer>
        <Card>
          <FormGroup>
            <h3>JOIN</h3>
            <form onSubmit={onSubmit}>
              <div className="input_group">
                <label htmlFor="email">이메일</label>
                <Input value={email} onChange={onChangeEmail} id="email" />
              </div>
              {/*<div className="input_group">*/}
              {/*  <label htmlFor="nickname">닉네임</label>*/}
              {/*  <Input value={nickname} onChange={onChangeNickname} id="nickname" required />*/}
              {/*</div>*/}
              <div className="input_group">
                <label htmlFor="password">비밀번호</label>
                <Input value={password} onChange={onChangePassword} id="password" type="password" />
              </div>
              <div className="input_group">
                <label htmlFor="passwordCheck">비밀번호 확인</label>
                <Input value={passwordCheck} onChange={onChangePasswordCheck} id="passwordCheck" type="password" />
              </div>
              <div className="btn_box">
                <Button width="100%" type="submit">
                  회원가입 및 로그인
                </Button>
                <Button width="100%" onClick={() => navigate('/login')}>
                  로그인 하러 가기
                </Button>
              </div>
            </form>
          </FormGroup>
        </Card>
      </AuthContainer>
    </>
  )
}

export default JoinPage
