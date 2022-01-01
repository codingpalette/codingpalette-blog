import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import MainContainer from '../../containers/MainContainer'
import { useParams } from 'react-router-dom'
import { TitleBox } from './styles'
import { getTags } from '../../models/post'
import dayjs from 'dayjs'
import CardContainer from '../../containers/CardContainer'
import PostCard from '../../components/PostCard'

const TagsPage = () => {
  let params = useParams()
  const [postList, setPostList] = useState(null)

  useEffect(() => {
    getPostEvent()
  }, [])

  const getPostEvent = async () => {
    try {
      const res = await getTags(params.id)
      console.log(res)
      setPostList(res)
    } catch (e) {
      console.error(e)
    }
  }
  return (
    <>
      <Header />
      <MainContainer>
        <TitleBox>
          <h1>#{params.id}</h1>
        </TitleBox>
        {postList && postList.length > 0 && (
          <>
            <CardContainer>
              {postList.map((v, i) => (
                <PostCard key={v.uid} id={v.uid} title={v.title} thumbnail={v.thumbnail} description={v.description} />
              ))}
            </CardContainer>
          </>
        )}
      </MainContainer>
    </>
  )
}

export default TagsPage
