import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import MainContainer from '../../containers/MainContainer'
import { useParams } from 'react-router-dom'
import { getPost } from '../../models/post'
import { Viewer } from '@toast-ui/react-editor'
import { PostContainer } from './styles'
import dayjs from 'dayjs'

const PostPage = () => {
  let params = useParams()
  const [title, setTitle] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [content, setContent] = useState('')
  const [pageLoading, setPageLoading] = useState(false)

  useEffect(() => {
    getPostEvent()
  }, [])

  const getPostEvent = async () => {
    try {
      const res = await getPost(params.id)
      // console.log(res)
      setTitle(res.title)
      setCreatedAt(dayjs(res.createdAt.seconds * 1000).format('YYYY년 MM월 DD일'))
      setContent(res.content)
      setPageLoading(true)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <Header />
      <MainContainer bgColor="white">
        {pageLoading && (
          <>
            <PostContainer>
              <h1>{title}</h1>
              <div className="information">
                <span>{createdAt}</span>
              </div>
              <Viewer initialValue={content} />
            </PostContainer>
          </>
        )}
      </MainContainer>
    </>
  )
}

export default PostPage
