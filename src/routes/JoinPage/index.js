import React, { useCallback, useEffect } from 'react'
import Header from '../../components/Header'
import AuthContainer from '../../containers/AuthContainer'
import { CardBox } from '../../components/Card/styles'
import { FormGroup } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import firebase from '../../firebase'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { useRecoilValue } from 'recoil'
import authState from '../../store/authState'

const auth = getAuth()
const JoinPage = () => {
  const navigate = useNavigate()
  const userData = useRecoilValue(authState)
  const [id, onChangeId] = useInput('')
  const [nickname, onChangeNickname] = useInput('')
  const [password, onChangePassword] = useInput('')
  const [passwordCheck, onChangePasswordCheck] = useInput('')

  const onSubmit = useCallback(
    async e => {
      e.preventDefault()
      try {
        await createUserWithEmailAndPassword(auth, id, password)
      } catch (e) {
        console.error(e)
      }
    },
    [id, password],
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
        <CardBox>
          <FormGroup>
            <h3>JOIN</h3>
            <form onSubmit={onSubmit}>
              <div className="input_group">
                <label htmlFor="id">아이디</label>
                <Input value={id} onChange={onChangeId} id="id" required />
              </div>
              <div className="input_group">
                <label htmlFor="nickname">닉네임</label>
                <Input value={nickname} onChange={onChangeNickname} id="nickname" required />
              </div>
              <div className="input_group">
                <label htmlFor="password">비밀번호</label>
                <Input value={password} onChange={onChangePassword} id="password" type="password" required />
              </div>
              <div className="input_group">
                <label htmlFor="passwordCheck">비밀번호 확인</label>
                <Input
                  value={passwordCheck}
                  onChange={onChangePasswordCheck}
                  id="passwordCheck"
                  type="password"
                  required
                />
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
        </CardBox>
      </AuthContainer>
    </>
  )
}

export default JoinPage
