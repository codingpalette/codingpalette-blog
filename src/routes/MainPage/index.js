import React, { useState } from 'react'
import Header from '../../components/Header'
import { FormBox } from './styles'
import Input from '../../components/Input'
import Button from '../../components/Button'

import firebase from '../../firebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const db = getFirestore()
const MainPage = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const onChangeTitle = e => {
    setTitle(e.target.value)
  }

  const onChangeContent = e => {
    setContent(e.target.value)
  }

  const onsubmit = async e => {
    e.preventDefault()
    console.log('1111')
    console.log(title)
    console.log(content)
    try {
      const data = await addDoc(collection(db, 'contact-as'), {
        name: 'Los Angeles',
        state: 'CA',
        country: 'USA',
      })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Header />
      <div>MainPage</div>

      <FormBox>
        <form onSubmit={onsubmit}>
          <div>
            <div>제목</div>
            <Input value={title} onChange={onChangeTitle} />
          </div>
          <div>
            <div>내용</div>
            <textarea value={content} onChange={onChangeContent} />
          </div>
          <div>
            <Button type="submit">전송</Button>
          </div>
        </form>
      </FormBox>
    </>
  )
}

export default MainPage
