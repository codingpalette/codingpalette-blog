import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db, storage } from '../firebase'

export class PostImage {
  constructor(name, size, userRef, createdAt) {}

  toJSON() {
    return {
      name: this.name,
      size: this.size,
      userRef: this.userRef,
      createdAt: this.createdAt || serverTimestamp(),
    }
  }
}

const converter = {
  toFirestore(model) {
    return model.toJSON()
  },
  fromFirestore(snapshot) {
    const data = snapshot.data()
    return new PostImage(
      data.name,
      data.size,
      data.userRef,
      data.createdAt instanceof Timestamp ? data.createdAt.toDate() : undefined,
    )
  },
}

const uploadFile = (path, file) => {
  const storageRef = ref(storage, path)
  return uploadBytes(storageRef, file)
}

const getURL = path => {
  const storageRef = ref(storage, path)
  return getDownloadURL(storageRef)
}

export const setImage = async file => {
  const imageRef = doc(collection(db, 'images')).withConverter(converter)
  const originPath = `images/${imageRef.id}/origin`
  await uploadFile(originPath, file)
  return await getURL(originPath)

  // const postImage = new PostImage(file.name, file.size, userRef)
  // await setDoc(imageRef, postImage)
}
