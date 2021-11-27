import React from 'react'
import { Link } from 'react-router-dom'
import { CardContent, CardListBox, Container } from './styles'
import Card from '../../components/Card'
import Button from '../../components/Button'
import AdminHeader from '../../components/AdminHeader'

const AdminPage = () => {
  return (
    <>
      <AdminHeader title="Admin" />
      <Container>
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
      </Container>
    </>
  )
}

export default AdminPage
