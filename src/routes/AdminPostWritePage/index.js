import React, { useCallback, useEffect, useRef, useState } from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminContainer from '../../containers/AdminContainer'
import Button from '../../components/Button'
import { ButtonBox, Container, EditorBox, PopupBox } from './styles'
import Input from '../../components/Input'
import useInput from '../../hooks/useInput'
import ModalContainer from '../../containers/ModalContainer'

import { ErrorMessageOpen } from '../../hooks/toast'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost, setPost } from '../../models/post'

import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'
import { setImage } from '../../models/image'
import { fileData, resizeImage } from '../../hooks/imageResize'

const AdminPostWritePage = () => {
  let navigate = useNavigate()
  let params = useParams()
  const [title, onChangeTitle, setTitle] = useInput('')
  const [initialValue, setInitialValue] = useState('')
  const [thumbnail, setThumbnail] = useState('')
  const [isActive, setIsActive] = useState(false)
  const [pageLoading, setPageLoading] = useState(false)
  const editorRef = useRef(null)
  const inputRef = useRef(null)

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

  const onClickModalOpen = () => {
    setIsActive(true)
  }

  const onClickModalClose = () => {
    setIsActive(false)
  }

  const uploadImage = async (blob, callback) => {
    const file = []
    file.push(blob)
    const _fileType = blob.type
    const _fileLen = blob.name.length
    const _lastDot = blob.name.lastIndexOf('.')
    const _fileExt = blob.name.substring(_lastDot, _fileLen).toLowerCase()
    const options = {
      maxSizeMB: 0.5,
      // maxWidthOrHeight: 1920,
    }
    if (_fileType === 'image/gif') {
      const maxSize = 3 * 1024 * 1024
      if (blob.size > maxSize) {
        ErrorMessageOpen('GIF 사이즈는 3M 이하만 업로드 가능 합니다.')
        return
      }
      try {
        const res = await setImage(blob)
        callback(res)
      } catch (e) {
        console.error(e)
      }
    } else {
      const readerImage = await resizeImage(file, options)
      readerImage.onloadend = async () => {
        const base64data = readerImage.result
        const fileImage = await fileData(base64data, _fileExt, _fileType)
        try {
          const res = await setImage(fileImage)
          callback(res)
        } catch (e) {
          console.error(e)
        }
      }
    }
  }

  const onClickThumbnailUpload = () => {
    inputRef.current.click()
  }

  const onChangeFileImage = useCallback(async e => {
    if (e.target.files.length > 0) {
      const file = e.target.files
      const _fileType = file[0].type
      const _fileLen = file[0].name.length
      const _lastDot = file[0].name.lastIndexOf('.')
      const _fileExt = file[0].name.substring(_lastDot, _fileLen).toLowerCase()
      const options = {
        maxSizeMB: 1,
        maxWidthOrHeight: 500,
      }

      if (_fileType === 'image/gif') {
        const maxSize = 3 * 1024 * 1024
        if (file.size > maxSize) {
          ErrorMessageOpen('GIF 사이즈는 3M 이하만 업로드 가능 합니다.')
          return
        }
        try {
          const res = await setImage(file)
          setThumbnail(res)
        } catch (e) {
          console.error(e)
        }
      } else {
        const readerImage = await resizeImage(file, options)
        readerImage.onloadend = async () => {
          const base64data = readerImage.result
          const fileImage = await fileData(base64data, _fileExt, _fileType)
          try {
            const res = await setImage(fileImage)
            setThumbnail(res)
          } catch (e) {
            console.error(e)
          }
        }
      }
    }
  }, [])

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
                hooks={{
                  addImageBlobHook: async (blob, callback) => {
                    await uploadImage(blob, callback)
                    // console.log(uploadedImageURL);
                    // callback(uploadedImageURL, 'alt text');
                    return false
                  },
                }}
                ref={editorRef}
              />
            )}
          </EditorBox>
          <ButtonBox>
            <Button theme="tertiary" onClick={() => navigate('/admin/post')}>
              취소
            </Button>
            <Button onClick={onClickModalOpen}>작성하기</Button>
          </ButtonBox>
        </Container>
        <ModalContainer isActive={isActive} closeEvent={onClickModalClose} maxWidth="400px">
          <PopupBox>
            <div className="thumbnail_box">
              <h4>포스트 미리보기</h4>
              <div className="image_box">
                {thumbnail ? (
                  <img src={thumbnail} alt="" />
                ) : (
                  <div className="image_upload_box">
                    <span className="material-icons-outlined">add_photo_alternate</span>
                    <Button width="150px" onClick={onClickThumbnailUpload}>
                      썸네일 업로드
                    </Button>
                  </div>
                )}
              </div>
            </div>
            <input ref={inputRef} type="file" accept="image/*" hidden onChange={onChangeFileImage} />
          </PopupBox>
        </ModalContainer>
      </AdminContainer>
    </>
  )
}

export default AdminPostWritePage
