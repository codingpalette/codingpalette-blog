import React from 'react'
import Header from '../../components/Header'
import { LoginContainer } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

const LoginPage = () => {
  return (
    <>
      <Header />
      <LoginContainer>
        <div className="card_box">
          <h3>LOGIN</h3>
          <div className="form_group">
            <div className="input_group">
              <label htmlFor="id">아이디</label>
              <Input id="id" />
            </div>
            <div className="input_group">
              <label htmlFor="id">비밀번호</label>
              <Input id="password" type="password" />
            </div>
            <div className="btn_box">
              <Button width="100%">로그인</Button>
              <Button width="100%">회원가입 하러 가기</Button>
            </div>
          </div>
        </div>
      </LoginContainer>
    </>
  )
}

export default LoginPage
