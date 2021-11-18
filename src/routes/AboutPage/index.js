import React from 'react'
import { useRecoilValue } from 'recoil'
import authState from '../../store/authState'

const AboutPage = () => {
  const userData = useRecoilValue(authState)
  return (
    <>
      {userData ? (
        <>
          <div>유저 있음</div>
        </>
      ) : (
        <>
          <div>유저 없음</div>
        </>
      )}
      <div>AboutPage</div>
    </>
  )
}

export default AboutPage
