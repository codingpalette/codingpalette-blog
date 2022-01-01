import {
  doc,
  setDoc,
  Timestamp,
  writeBatch,
  serverTimestamp,
  getDoc,
  collection,
  query,
  getDocs,
  limit,
  orderBy,
  deleteDoc,
  where,
} from 'firebase/firestore'
import { db } from '../firebase'
import { converter as contentConverter } from './content'

export const setSave = async (title, category, tagList, thumbnail, description, content, createdAt, id) => {
  const today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1 //January is 0!
  const yyyy = today.getFullYear()
  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }

  let _name

  if (!id) {
    createdAt = today
    _name = yyyy + mm + dd
    const RandomNumber = Math.random().toString(36).substr(2, 11)
    id = `post${RandomNumber}${_name}`
  }

  const batch = writeBatch(db)
  const savesRef = doc(db, 'saves', id)
  const savesData = { title, category, tagList, thumbnail, description, createdAt, uid: id }

  batch.set(savesRef, savesData)

  const contentRef = doc(collection(db, 'saves', id, 'contents'), 'last')
  const contentData = { content }

  batch.set(contentRef, contentData)

  await batch.commit()
  return { id }
}

export const getSave = async id => {
  const savesRef = doc(db, 'saves', id)
  const savesSnapshot = await getDoc(savesRef)
  const post = savesSnapshot.data()
  if (!post) throw Error('post not exists')
  const contentRef = doc(collection(db, 'saves', id, 'contents'), 'last')
  const contentSnapshot = await getDoc(contentRef)
  post.content = contentSnapshot.data().content
  return post
}

export const getSaves = async () => {
  const ref = collection(db, 'saves')
  // const q = query(collection(db, 'saves'), orderBy('createdAt', 'desc'), limit(4))
  const q = query(ref, where('category', '==', 'css'), orderBy('createdAt', 'desc'))
  const sn = await getDocs(q)

  return sn.docs.map(e => e.data())
  // return listData
}
