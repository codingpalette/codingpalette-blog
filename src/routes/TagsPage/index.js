import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import MainContainer from '../../containers/MainContainer'
import { useParams } from 'react-router-dom'
import { TitleBox } from './styles'
import { getTags } from '../../models/post'
import dayjs from 'dayjs'
import CardContainer from '../../containers/CardContainer'
import PostCard from '../../components/PostCard'
import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet'

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
      <Helmet>
        <title>#{params.id}</title>
        <meta property="og:title" content={`#${params.id}`} />
        <meta name="description" content="좋은 개발자가 되기 위해 노력하고 있는 블로그 입니다." />
        <meta property="og:description" content="좋은 개발자가 되기 위해 노력하고 있는 블로그 입니다." />
      </Helmet>
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
      <Footer />
    </>
  )
}

export default TagsPage
