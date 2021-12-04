import { collection, getDocs, query, orderBy } from 'firebase/firestore'

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
    return new Content(data.content)
  },
}

export const getContents = async id => {
  const ref = collection(db, 'posts', id, 'contents').withConverter(converter)
  const q = query(ref, orderBy('no'))
  return await getDocs(q)
}
