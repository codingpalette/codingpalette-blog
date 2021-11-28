// 특수 문자 체크
export const checkSpecial = str => {
  const regExp = /[`~!@#$%^&*|\\\'\";:\/?]/gi
  if (regExp.test(str)) {
    return true
  } else {
    return false
  }
}
// 한글 체크
export const checkKor = str => {
  const regExp = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/
  if (regExp.test(str)) {
    return true
  } else {
    return false
  }
}
// 숫자 체크
export const checkNum = str => {
  const regExp = /^[0-9]*$/
  if (regExp.test(str)) {
    return true
  } else {
    return false
  }
}
// 영문(영어) 체크
export const checkEng = str => {
  const regExp = /^[a-zA-Z]*$/
  // 영어
  if (regExp.test(str)) {
    return true
  } else {
    return false
  }
}
// 영문+숫자만 입력 체크
export const checkEngNum = str => {
  const regExp = /^[a-zA-Z0-9]*$/
  if (regExp.test(str)) {
    return true
  } else {
    return false
  }
}
// 공백(스페이스 바) 체크
export const checkSpace = str => {
  if (str.search(/\s/) !== -1) {
    return true
    // 스페이스가 있는 경우
  }
  return false
  // 스페이스 없는 경우
}

export const emailCheck = str => {
  const regExp = /^([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/
  if (regExp.test(str)) {
    return true
  } else {
    return false
  }
}
