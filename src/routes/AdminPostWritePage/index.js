import React, { useCallback, useEffect, useRef, useState } from 'react'
import AdminHeader from '../../components/AdminHeader'
import AdminContainer from '../../containers/AdminContainer'
import Button from '../../components/Button'
import { ButtonBox, Container, EditorBox, FormGroup, PopupBox, TagGroup } from './styles'
import Input from '../../components/Input'
import useInput from '../../hooks/useInput'
import ModalContainer from '../../containers/ModalContainer'

import { ErrorMessageOpen, SuccessMessageOpen } from '../../hooks/toast'
import { useNavigate, useParams } from 'react-router-dom'
import { getPost, setPost } from '../../models/post'

import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'
import { setImage } from '../../models/image'
import { fileData, resizeImage } from '../../hooks/imageResize'
import Select from '../../components/Select'
import { useRecoilValue } from 'recoil'
import authState from '../../store/authState'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../firebase'

const OPTIONS = [
  { id: 1, value: '', name: '' },
  { id: 2, value: 'css', name: 'css' },
  { id: 3, value: 'react', name: 'react' },
]

const AdminPostWritePage = () => {
  let navigate = useNavigate()
  let params = useParams()
  const userData = useRecoilValue(authState)
  const [title, onChangeTitle, setTitle] = useInput('')
  const [category, setCategory] = useState('')
  const [tag, onChangeTag, setTag] = useInput('')
  const [tagList, setTagList] = useState([])
  const [initialValue, setInitialValue] = useState('')
  const [thumbnail, setThumbnail] = useState(null)
  const [description, onChangeDescription, setDescription] = useInput('')
  const [createdAt, setCreatedAt] = useState(null)
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
      setCategory(res.category)
      setInitialValue(res.content)
      setCreatedAt(res.createdAt)
      setTagList(res.tagList)
      setThumbnail(res.thumbnail)
      setDescription(res.description)
      setCreatedAt(res.createdAt)
      setPageLoading(true)
    } catch (e) {
      console.error(e)
    }
  }

  // 태그 추가
  const onSubmitTagAdd = e => {
    e.preventDefault()
    const tagText = tag.trim()
    if (!tagText) return // 공백이라면 추가하지 않음
    if (tagList.includes(tagText)) return // 이미 존재한다면 추가하지 않음
    setTagList([...tagList, tagText])
    setTag('')
  }

  // 태그 삭제
  const onClickTagRemove = e => {
    setTagList(tagList.filter(v => v !== e))
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

  const onClickThumbnailRemove = () => {
    setThumbnail(null)
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
      ErrorMessageOpen('제목을 입력해 주세요')
      return
    }

    if (category.trim().length === 0) {
      ErrorMessageOpen('카테고리를 선택해 주세요')
      return
    }

    if (!thumbnail) {
      ErrorMessageOpen('썸네일을 등록해 주세요')
      return
    }

    if (description.trim().length === 0) {
      ErrorMessageOpen('포스트 소개를 입력해 주세요')
      return
    }

    try {
      const content = editorRef.current.getInstance().getHTML()
      const id = params.id
      await setPost(title, category, tagList, thumbnail, description, content, createdAt, id)
      SuccessMessageOpen('포스트 작성에 성공했습니다')
      navigate('/admin/post')
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      {pageLoading && (
        <>
          <AdminHeader title="포스트 작성" />
          <AdminContainer>
            <Container>
              <FormGroup>
                <span>제목</span>
                <Input value={title} onChange={onChangeTitle} placeholder="제목 입력해주세요" />
              </FormGroup>
              <FormGroup>
                <span>카테고리</span>
                <Select options={OPTIONS} defaultValue={category} changeValue={setCategory} />
              </FormGroup>
              <FormGroup>
                <span>태그</span>
                <form onSubmit={onSubmitTagAdd}>
                  <div>
                    <Input value={tag} onChange={onChangeTag} placeholder="제목 입력해주세요" />
                    <Button type="submit" width="70px" className="submit_btn">
                      추가
                    </Button>
                  </div>
                </form>
              </FormGroup>
              <TagGroup>
                {tagList.length > 0 &&
                  tagList.map((v, i) => (
                    <Button key={v + i} type="button" onClick={() => onClickTagRemove(v)}>
                      {v}
                    </Button>
                  ))}
              </TagGroup>
              <EditorBox>
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
                  {thumbnail && (
                    <div className="actions">
                      <button type="button" onClick={onClickThumbnailRemove}>
                        제거
                      </button>
                    </div>
                  )}
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
                <div className="description_box">
                  <h4>포스트 소개</h4>
                  <textarea value={description} onChange={onChangeDescription} />
                </div>
                <div className="button_box">
                  <Button onClick={onClickModalClose} theme="tertiary">
                    닫기
                  </Button>
                  <Button onClick={onClickSubmit}>작성</Button>
                </div>

                <input ref={inputRef} type="file" accept="image/*" hidden onChange={onChangeFileImage} />
              </PopupBox>
            </ModalContainer>
          </AdminContainer>
        </>
      )}
    </>
  )
}

export default AdminPostWritePage
