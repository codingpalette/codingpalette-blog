import { doc, getDoc, collection, query, getDocs } from 'firebase/firestore'
import { db } from '../firebase'

export class User {
  constructor(uid, email, nickName) {}
}

const converter = {
  toFirestore(model) {
    return {
      uid: model.uid,
      email: model.email,
      nickName: model.nickName,
    }
  },
  fromFirestore(snapshot) {
    const data = snapshot.data()
    return {
      data,
    }
  },
}

const userCollection = collection(db, 'users').withConverter(converter)
export const getUsers = async () => {
  const q = query(userCollection)
  const aa = await getDocs(q)
  console.log(aa)
  return aa
}

export const getUser = async uid => {
  const userRef = doc(db, 'users', uid).withConverter(converter)
  const res = await getDoc(userRef)
  return res.data().data
}
