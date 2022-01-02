import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import MainContainer from '../../containers/MainContainer'
import Button from '../../components/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost } from '../../models/post'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Viewer } from '@toast-ui/react-editor'
import { PostContainer } from './styles'
import dayjs from 'dayjs'

// plugin
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'
import Footer from '../../components/Footer'

const PostPage = () => {
  let params = useParams()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [createdAt, setCreatedAt] = useState('')
  const [tagList, setTagList] = useState(null)
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
      setTagList(res.tagList)
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
              <div className="tag_list">
                {tagList &&
                  tagList.map((v, i) => (
                    <Button key={v + i} type="button" onClick={() => navigate(`/tags/${v}`)}>
                      {v}
                    </Button>
                  ))}
              </div>
              <Viewer initialValue={content} plugins={[[codeSyntaxHighlight, { highlighter: Prism }]]} />
            </PostContainer>
          </>
        )}
      </MainContainer>
      <Footer />
    </>
  )
}

export default PostPage
