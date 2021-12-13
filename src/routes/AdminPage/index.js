import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CardContent, CardListBox } from './styles'
import Card from '../../components/Card'
import Button from '../../components/Button'
import AdminHeader from '../../components/AdminHeader'
import AdminContainer from '../../containers/AdminContainer'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'
import { useRecoilValue } from 'recoil'
import authState from '../../store/authState'

const AdminPage = () => {
  const navigate = useNavigate()
  const userData = useRecoilValue(authState)

  return (
    <>
      <AdminHeader title="Admin" />
      <AdminContainer>
        <CardListBox>
          <Card>
            <CardContent>
              <h3>개시판1</h3>
              <div className="btn_box">
                <Button>상세보기</Button>
              </div>
              <div className="content_list">
                <ul>
                  <li>
                    <Link to="/">테스트 질문</Link>
                  </li>
                  <li>
                    <Link to="/">테스트 질문</Link>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </CardListBox>
      </AdminContainer>
    </>
  )
}

export default AdminPage
