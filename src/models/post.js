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
} from 'firebase/firestore'
import { db } from '../firebase'
import { Content, converter as contentConverter, getContents } from './content'

export class Post {
  constructor(title, uid, createdAt, updatedAt) {}

  toJSON() {
    return {
      title: this.title,
      uid: this.uid,
      createdAt: this.createdAt || serverTimestamp(),
      updatedAt: this.updatedAt || serverTimestamp(),
    }
  }
}

const converter = {
  toFirestore(model) {
    return {
      title: model.title,
      uid: model.uid,
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  },
  fromFirestore(snapshot) {
    const data = snapshot.data()
    return {
      data,
    }
    // return new Post(
    //   data.title,
    //   data.createdAt instanceof Timestamp ? data.createdAt.toDate() : undefined,
    //   data.updatedAt instanceof Timestamp ? data.updatedAt.toDate() : undefined,
    // )
  },
}

const contentsToChunks = str => {
  const chunks = []
  const tmps = []
  const lines = str.split('\n')
  for (const line of lines) {
    tmps.push(line)
    const joinStr = tmps.join('\n')
    if (joinStr.length < 1000) continue
    chunks.push(joinStr)
    tmps.splice(0, tmps.length)
  }
  if (tmps.length) chunks.push(tmps.join('\n'))
  return chunks
}

export const setPost = async (title, content, id) => {
  // if (!firebaseUser.value) throw Error('user not signed')
  // console.log('post', title)

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
    _name = yyyy + mm + dd
    const RandomNumber = Math.random().toString(36).substr(2, 11)
    id = `post${RandomNumber}${_name}`
  }

  const batch = writeBatch(db)
  const postRef = doc(db, 'posts', id).withConverter(converter)
  const postData = { title, uid: id }

  batch.set(postRef, postData)

  const contentRef = doc(collection(db, 'posts', id, 'contents'), 'last').withConverter(contentConverter)
  const contentData = { content }
  batch.set(contentRef, contentData)

  await batch.commit()
  return true
}

export const getPosts = async () => {
  const ref = collection(db, 'posts').withConverter(converter)
  const q = query(ref, orderBy('createdAt', 'desc'), limit(4))
  const sn = await getDocs(q)

  return sn.docs.map(e => e.data().data)
  // return listData
}

export const getPost = async id => {
  const ref = doc(db, 'posts', id).withConverter(converter)
  const postSnapshot = await getDoc(ref)
  const post = postSnapshot.data().data
  if (!post) throw Error('post not exists')
  const contentsSnapshot = await getContents(id)
  post.content = contentsSnapshot.data().data.content
  return post
}
