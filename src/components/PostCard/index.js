import React, { useEffect, useState } from 'react'
import { Container, PopupBox } from './styles'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../Button'
import ModalContainer from '../../containers/ModalContainer'
import { useRecoilState, useRecoilValue } from 'recoil'
import authState from '../../store/authState'
import { postState } from '../../store/postState'

import { delPost } from '../../models/post'

const PostCard = ({ id, title, thumbnail, description }) => {
  let navigate = useNavigate()
  const userData = useRecoilValue(authState)
  const [postList, setPostList] = useRecoilState(postState)
  const [isActive, setIsActive] = useState(false)
  // const [deleteLoading, setDeleteLoading] = useState(false)

  const onClickModalOpen = () => {
    setIsActive(true)
  }

  const onClickModalClose = () => {
    setIsActive(false)
  }

  const onClickPostDelete = async id => {
    try {
      await delPost(id)
      onClickModalClose()
      setPostList(postList.filter(v => v.uid !== id))
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Container>
        <Link to={`/post/${id}`}>
          <div className="thumbnail">
            <img src={thumbnail} alt="" />
          </div>
        </Link>
        <div className="text_box">
          <Link to={`/post/${id}`}>
            <h4>{title}</h4>
            <div className="description_wrapper">
              <p>{description}</p>
            </div>
          </Link>
          {/*<div className="sub_info">*/}
          {/*  <span>CP</span>*/}
          {/*  <span>·</span>*/}
          {/*  <span>2일전</span>*/}
          {/*</div>*/}
        </div>
        {userData && (
          <>
            <div className="option_box">
              <Button theme="secondary" onClick={onClickModalOpen}>
                삭제
              </Button>
              <Button onClick={() => navigate(`/admin/write/${id}`)}>수정</Button>
            </div>
            <ModalContainer isActive={isActive} closeEvent={onClickModalClose} maxWidth="400px">
              <PopupBox>
                <h4>포스트 삭제</h4>
                <div className="message">
                  <p>포스트를 삭제 하시겠습니까?</p>
                  <p>삭제한 포스트는 복구할 수 없습니다.</p>
                </div>
                <div className="button_box">
                  <Button theme="tertiary" onClick={onClickModalClose}>
                    취소
                  </Button>
                  <Button theme="secondary" onClick={() => onClickPostDelete(id)}>
                    확인
                  </Button>
                </div>
              </PopupBox>
            </ModalContainer>
          </>
        )}
      </Container>
    </>
  )
}

export default PostCard
