import React, { useEffect } from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminContainer from '../../containers/AdminContainer'
import { ButtonBox, Container } from './styles'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { getPosts } from '../../models/post'
import { useRecoilState, useRecoilValue } from 'recoil'
import { adminPostState } from '../../store/postState'
import PostCard from '../../components/PostCard'
import CardContainer from '../../containers/CardContainer'
import authState from '../../store/authState'

const AdminPostPage = () => {
  let navigate = useNavigate()
  const userData = useRecoilValue(authState)
  const [postList, setPostList] = useRecoilState(adminPostState)

  const getData = async () => {
    try {
      const res = await getPosts()
      // console.log(res)
      setPostList(res)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <AdminHeader title="Post" />
      <AdminContainer>
        <Container>
          <ButtonBox>
            <Button onClick={() => navigate('/admin/write')}>포스트 작성</Button>
          </ButtonBox>
          {postList && postList.length > 0 && (
            <>
              <CardContainer>
                {postList.map((v, i) => (
                  <PostCard
                    key={v.uid}
                    id={v.uid}
                    title={v.title}
                    thumbnail={v.thumbnail}
                    description={v.description}
                  />
                ))}
              </CardContainer>
            </>
          )}
        </Container>
      </AdminContainer>
    </>
  )
}

export default AdminPostPage
