import { collection, getDocs, query, orderBy, getDoc, doc } from 'firebase/firestore'

import { db } from '../firebase'

export class Content {
  constructor(content) {}

  toJSON() {
    return {
      content: this.content,
    }
  }
}

export const converter = {
  toFirestore(model) {
    return {
      content: model.content,
    }
  },
  fromFirestore(snapshot) {
    const data = snapshot.data()
    return {
      data,
    }
  },
}

export const getContents = async id => {
  const ref = doc(db, 'posts', id, 'contents', 'last').withConverter(converter)
  // const q = query(ref, orderBy('last'))
  return await getDoc(ref)
}
