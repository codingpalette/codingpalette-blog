import React, { useEffect, useRef, useState } from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminContainer from '../../containers/AdminContainer'
import Button from '../../components/Button'
import { ButtonBox, Container, EditorBox } from './styles'
import Input from '../../components/Input'
import useInput from '../../hooks/useInput'
import { ErrorMessageOpen } from '../../hooks/toast'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost, setPost } from '../../models/post'

import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'

const AdminPostWritePage = () => {
  let navigate = useNavigate()
  let params = useParams()
  const [title, onChangeTitle, setTitle] = useInput('')
  const [initialValue, setInitialValue] = useState('')
  const [pageLoading, setPageLoading] = useState(false)
  const editorRef = useRef(null)

  useEffect(() => {
    if (params.id) {
      getPostEvent()
    } else {
      setPageLoading(true)
    }
  }, [])

  const getPostEvent = async () => {
    try {
      const res = await getPost(params.id)
      setTitle(res.title)
      setInitialValue(res.content)
      setPageLoading(true)
    } catch (e) {
      console.error(e)
    }
  }

  const onClickSubmit = async () => {
    if (title.trim().length === 0) {
      ErrorMessageOpen('제목을 입력해 주세요.')
      return
    }

    try {
      const content = editorRef.current.getInstance().getHTML()
      const id = params.id
      await setPost(title, content, id)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <AdminHeader title="포스트 작성" />
      <AdminContainer>
        <Container>
          <Input value={title} onChange={onChangeTitle} placeholder="제목 입력해주세요" />
          <EditorBox>
            {pageLoading && (
              <Editor
                initialValue={initialValue}
                previewStyle="vertical"
                height="600px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                ref={editorRef}
              />
            )}
          </EditorBox>
          <ButtonBox>
            <Button theme="tertiary" onClick={() => navigate('/admin/post')}>
              취소
            </Button>
            <Button onClick={onClickSubmit}>작성하기</Button>
          </ButtonBox>
        </Container>
      </AdminContainer>
    </>
  )
}

export default AdminPostWritePage
