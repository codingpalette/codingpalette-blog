import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import MainContainer from '../../containers/MainContainer'
import { useRecoilState } from 'recoil'
import { postState } from '../../store/postState'
import { getPosts } from '../../models/post'
import CardContainer from '../../containers/CardContainer'
import PostCard from '../../components/PostCard'
import Footer from '../../components/Footer'
import { Helmet } from 'react-helmet'

const MainPage = () => {
  const [postList, setPostList] = useRecoilState(postState)

  const getData = async () => {
    try {
      const res = await getPosts()
      // console.log(res)
      setPostList(res)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Helmet>
        <title>CodingPalette</title>
        <meta property="og:title" content="CodingPalette" />
        <meta name="description" content="좋은 개발자가 되기 위해 노력하고 있는 블로그 입니다." />
        <meta property="og:description" content="좋은 개발자가 되기 위해 노력하고 있는 블로그 입니다." />
      </Helmet>
      <Header />
      <MainContainer>
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

export default MainPage
