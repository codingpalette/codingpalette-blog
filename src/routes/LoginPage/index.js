import React, { useCallback } from 'react'
import Header from '../../components/Header'
import { LoginContainer } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import useInput from '../../hooks/useInput'

const LoginPage = () => {
  const [id, onChangeId] = useInput('')
  const [password, onChangePassword] = useInput('')
  const onSubmit = useCallback(
    e => {
      e.preventDefault()
      console.log(id)
      console.log(password)
      console.log('1231')
    },
    [id, password],
  )

  return (
    <>
      <Header />
      <LoginContainer>
        <div className="card_box">
          <h3>LOGIN</h3>
          <form className="form_group" onSubmit={onSubmit}>
            <div className="input_group">
              <label htmlFor="id">아이디</label>
              <Input value={id} onChange={onChangeId} id="id" required />
            </div>
            <div className="input_group">
              <label htmlFor="id">비밀번호</label>
              <Input value={password} onChange={onChangePassword} id="password" type="password" required />
            </div>
            <div className="btn_box">
              <Button width="100%" type="submit">
                로그인
              </Button>
              <Button width="100%">회원가입 하러 가기</Button>
            </div>
          </form>
        </div>
      </LoginContainer>
    </>
  )
}

export default LoginPage
