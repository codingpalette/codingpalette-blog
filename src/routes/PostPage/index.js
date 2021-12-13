import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import MainContainer from '../../containers/MainContainer'
import { useParams } from 'react-router-dom'
import { getPost } from '../../models/post'
import { Viewer } from '@toast-ui/react-editor'
import { PostContainer } from './styles'

const PostPage = () => {
  let params = useParams()
  const [content, setContent] = useState('')
  const [pageLoading, setPageLoading] = useState(false)

  useEffect(() => {
    getPostEvent()
  }, [])

  const getPostEvent = async () => {
    try {
      const res = await getPost(params.id)
      console.log(res)
      setContent(res.content)
      setPageLoading(true)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <Header />
      <MainContainer>
        {pageLoading && (
          <>
            <PostContainer>
              <div>sf</div>
              <Viewer initialValue={content} />
            </PostContainer>
          </>
        )}
      </MainContainer>
    </>
  )
}

export default PostPage
