import React from 'react'
import { Link } from 'react-router-dom'
import { CardContent, CardListBox } from './styles'
import Card from '../../components/Card'
import Button from '../../components/Button'

const AdminPage = () => {
  return (
    <>
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
    </>
  )
}

export default AdminPage
