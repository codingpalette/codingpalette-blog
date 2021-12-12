import imageCompression from 'browser-image-compression'

export const resizeImage = async (file, options) => {
  const compressedFile = await imageCompression(file[0], options)
  const reader = await new FileReader()
  reader.readAsDataURL(compressedFile)
  return reader
}

export const fileData = async (dataURI, ext, type) => {
  // dataURL 값이 data:image/jpeg:base64,~~~~~~~ 이므로 ','를 기점으로 잘라서 ~~~~~인 부분만 다시 인코딩
  const byteString = atob(dataURI.split(',')[1])

  // Blob를 구성하기 위한 준비, 이 내용은 저도 잘 이해가 안가서 기술하지 않았습니다.
  const ab = await new ArrayBuffer(byteString.length)
  const ia = await new Uint8Array(ab)
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i)
  }
  const blob = await new Blob([ia], {
    type,
  })
  return new File([blob], `${Math.floor(Math.random() * 1000)}${ext}`)
}
