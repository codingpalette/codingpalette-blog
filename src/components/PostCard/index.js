import React from 'react'
import { Container } from './styles'
import { Link, useNavigate } from 'react-router-dom'

import img from '../../assets/images/sample.png'
import Button from '../Button'

const PostCard = ({ id, title, thumbnail, description }) => {
  let navigate = useNavigate()
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
        <div className="option_box">
          <Button theme="secondary">삭제</Button>
          <Button onClick={() => navigate(`/admin/write/${id}`)}>수정</Button>
        </div>
      </Container>
    </>
  )
}

export default PostCard
